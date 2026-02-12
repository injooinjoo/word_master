#!/usr/bin/env python3
"""
Refine vocab batch files with Gemini-generated high-quality fields.

Usage:
  pip install google-genai
  export GEMINI_API_KEY=...
  python scripts/refine_vocab_with_gemini.py --batches 1-70

Key guarantees:
  - distractors are Korean-only strings (10 items)
  - tips fields are non-template, word-specific Korean text
  - definition/synonyms/antonyms are English
  - exampleSentences has exactly 2 bilingual examples
  - strong JSON validation + retry on malformed output
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Tuple

from google import genai
from google.genai import types


ROOT = Path(__file__).resolve().parent.parent
VOCAB_DIR = ROOT / "src" / "data" / "vocab"
CHECKPOINT_PATH = ROOT / "docs" / "gemini_refine_checkpoint.json"
FAILURES_PATH = ROOT / "docs" / "gemini_refine_failures.log"

WORD_HEADER_RE = re.compile(
    r"word\('(?P<word>(?:\\'|[^'])*)',\s*'(?P<meaning>(?:\\'|[^'])*)',\s*(?P<level>\d+),\s*'(?P<pos>[^']+)'\s*,",
    re.S,
)

VALID_POS = {
    "noun",
    "verb",
    "adjective",
    "adverb",
    "preposition",
    "conjunction",
    "interjection",
    "pronoun",
}

LEAK_CHECK_MIN_WORD_LEN = 3

HANGUL_RE = re.compile(r"[가-힣]")
ASCII_RE = re.compile(r"^[\x20-\x7E]+$")
EN_LETTER_RE = re.compile(r"[A-Za-z]")
KOREAN_ONLY_OPTION_RE = re.compile(r"^[가-힣0-9\s\-/()]+$")

MODEL_NAME = "gemini-3-flash-preview"
TEMPLATE_BAD_STARTS = [
    "in this sentence",
    "the word",
    "i wrote",
    "try to",
    "you can",
    "this object can be described as",
    "i used",
    "the adjective",
    "i added",
]


@dataclass
class WordBlock:
    start: int
    end: int
    text: str
    word: str
    meaning: str
    level: int
    pos: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Refine vocab batches with Gemini")
    parser.add_argument("--batches", type=str, default="1-70", help="Range like 1-70 or CSV like 1,2,33")
    parser.add_argument("--model", type=str, default=MODEL_NAME, help="Gemini model name")
    parser.add_argument("--max-retries", type=int, default=4, help="Retries per word")
    parser.add_argument("--sleep", type=float, default=0.3, help="Sleep seconds between API calls")
    parser.add_argument("--dry-run", action="store_true", help="Validate and print stats without writing files")
    parser.add_argument("--resume", action="store_true", help="Resume from checkpoint")
    parser.add_argument("--limit", type=int, default=0, help="Process at most N words (0 = unlimited)")
    parser.add_argument(
        "--batch-size",
        type=int,
        default=10,
        help="How many words to request per Gemini call (default: 10)",
    )
    parser.add_argument(
        "--parse-only",
        action="store_true",
        help="Only parse files and print word counts (no API calls, no writes)",
    )
    parser.add_argument(
        "--live-log",
        type=str,
        default=str(ROOT / "docs" / "gemini_refine_live.log"),
        help="Append real-time progress logs to this file",
    )
    parser.add_argument(
        "--strict-fail",
        action="store_true",
        help="Abort run on a single-word hard failure (default: continue and log failure)",
    )
    return parser.parse_args()


def decode_ts_single_quoted(s: str) -> str:
    return s.replace("\\'", "'").replace("\\\\", "\\")


def encode_ts_single_quoted(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def parse_batch_spec(spec: str) -> List[int]:
    if "," in spec:
        nums = []
        for part in spec.split(","):
            p = part.strip()
            if not p:
                continue
            nums.append(int(p))
        return sorted(set(nums))
    if "-" in spec:
        lo, hi = spec.split("-", 1)
        start = int(lo.strip())
        end = int(hi.strip())
        if start > end:
            start, end = end, start
        return list(range(start, end + 1))
    return [int(spec)]


def get_batch_file(batch_num: int) -> Path:
    return VOCAB_DIR / f"vocab_batch_{batch_num:02d}.ts"


def extract_word_blocks(file_text: str) -> List[WordBlock]:
    blocks: List[WordBlock] = []
    i = 0
    n = len(file_text)
    while True:
        start = file_text.find("  word(", i)
        if start == -1:
            break
        depth = 0
        in_single = False
        in_double = False
        escaped = False
        j = start
        while j < n:
            ch = file_text[j]
            if escaped:
                escaped = False
                j += 1
                continue
            if ch == "\\":
                escaped = True
                j += 1
                continue
            if ch == "'" and not in_double:
                in_single = not in_single
                j += 1
                continue
            if ch == '"' and not in_single:
                in_double = not in_double
                j += 1
                continue
            if in_single or in_double:
                j += 1
                continue
            if ch == "(":
                depth += 1
            elif ch == ")":
                depth -= 1
                if depth == 0:
                    k = j + 1
                    if k < n and file_text[k] == ",":
                        k += 1
                    while k < n and file_text[k] == " ":
                        k += 1
                    if k < n and file_text[k] == "\n":
                        k += 1
                    block_text = file_text[start:k]
                    m = WORD_HEADER_RE.search(block_text)
                    if not m:
                        raise ValueError(f"Could not parse word header near index {start}")
                    word = decode_ts_single_quoted(m.group("word"))
                    meaning = decode_ts_single_quoted(m.group("meaning"))
                    level = int(m.group("level"))
                    pos = m.group("pos").strip()
                    blocks.append(
                        WordBlock(
                            start=start,
                            end=k,
                            text=block_text,
                            word=word,
                            meaning=meaning,
                            level=level,
                            pos=pos,
                        )
                    )
                    i = k
                    break
            j += 1
        else:
            raise ValueError(f"Unterminated word() block near index {start}")
    return blocks


def load_checkpoint() -> Dict[str, bool]:
    if not CHECKPOINT_PATH.exists():
        return {}
    try:
        data = json.loads(CHECKPOINT_PATH.read_text(encoding="utf-8"))
    except Exception:
        return {}
    if not isinstance(data, dict):
        return {}
    return {str(k): bool(v) for k, v in data.items()}


def save_checkpoint(done_map: Dict[str, bool]) -> None:
    CHECKPOINT_PATH.parent.mkdir(parents=True, exist_ok=True)
    CHECKPOINT_PATH.write_text(
        json.dumps(done_map, ensure_ascii=False, indent=2, sort_keys=True),
        encoding="utf-8",
    )


def checkpoint_key(batch_num: int, word: str) -> str:
    return f"{batch_num:02d}:{word.lower()}"


def emit(msg: str, live_log: str | None) -> None:
    print(msg, flush=True)
    if not live_log:
        return
    path = Path(live_log)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as f:
        f.write(msg + "\n")


def record_failure(batch_num: int, word: str, reason: str) -> None:
    FAILURES_PATH.parent.mkdir(parents=True, exist_ok=True)
    line = f"batch={batch_num:02d}\tword={word}\treason={reason}\n"
    with FAILURES_PATH.open("a", encoding="utf-8") as f:
        f.write(line)


def format_seconds(sec: float) -> str:
    sec = max(0, int(sec))
    h = sec // 3600
    m = (sec % 3600) // 60
    s = sec % 60
    if h > 0:
        return f"{h:02d}:{m:02d}:{s:02d}"
    return f"{m:02d}:{s:02d}"


def estimate_total_target(
    files: List[Tuple[int, Path]],
    args: argparse.Namespace,
    checkpoint: Dict[str, bool],
) -> int:
    total = 0
    for batch_num, path in files:
        text = path.read_text(encoding="utf-8")
        blocks = extract_word_blocks(text)
        for block in blocks:
            if args.resume and checkpoint.get(checkpoint_key(batch_num, block.word)):
                continue
            total += 1
            if args.limit and total >= args.limit:
                return total
    return total


def build_prompt(block: WordBlock) -> str:
    return f"""
You are refining one vocabulary entry for an English-learning app.

Strict requirements:
1) Return ONLY valid JSON. No markdown, no code fences.
2) Keep original word, meaning, level, partOfSpeech unchanged.
3) distractors must be exactly 10 Korean options only (Hangul text).
4) tips fields must be Korean, natural, specific to the word (no template text).
5) definition must be English and must NOT contain the target word literally.
6) synonyms exactly 3 English items; antonyms exactly 3 English items.
7) exampleSentences exactly 2 objects: each has en (natural English), ko (natural Korean translation).
8) Avoid placeholder or meta educational lines like "In context..." or "I wrote...".
9) Respect partOfSpeech = {block.pos}.
10) English examples must be real-life usage sentences, not dictionary commentary.
11) Do NOT start any example en with: {", ".join(TEMPLATE_BAD_STARTS)}.

Return schema exactly:
{{
  "distractors": ["... x10 Korean ..."],
  "tips": {{
    "etymology": "...",
    "visual": "...",
    "soundAlike": "...",
    "context": "...",
    "synonymAntonym": "..."
  }},
  "definition": "...",
  "synonyms": ["...","...","..."],
  "antonyms": ["...","...","..."],
  "exampleSentences": [
    {{"en":"...","ko":"..."}},
    {{"en":"...","ko":"..."}}
  ]
}}

Original entry:
word: {block.word}
meaning: {block.meaning}
level: {block.level}
partOfSpeech: {block.pos}
existingBlock:
{block.text}
""".strip()


def build_batch_prompt(blocks: List[WordBlock]) -> str:
    sample = []
    for b in blocks:
        sample.append(
            {
                "word": b.word,
                "meaning": b.meaning,
                "level": b.level,
                "partOfSpeech": b.pos,
                "existingBlock": b.text,
            }
        )
    payload_json = json.dumps(sample, ensure_ascii=False, indent=2)

    return f"""
You are refining multiple vocabulary entries for an English-learning app.

Strict requirements:
1) Return ONLY valid JSON array. No markdown, no code fences.
2) Preserve each input word exactly and return one output object per input word.
3) distractors must be exactly 10 Korean options only (Hangul text).
4) tips fields must be Korean, natural, and word-specific (no template phrasing).
5) definition must be English and must NOT contain the target word literally.
6) synonyms exactly 3 English items; antonyms exactly 3 English items.
7) exampleSentences exactly 2 objects each with en, ko.
8) Do NOT output educational placeholders like "In this sentence..." / "I wrote...".
9) Do NOT start any example en with: {", ".join(TEMPLATE_BAD_STARTS)}.

Return JSON array schema exactly:
[
  {{
    "word": "target word",
    "distractors": ["... x10 Korean ..."],
    "tips": {{
      "etymology": "...",
      "visual": "...",
      "soundAlike": "...",
      "context": "...",
      "synonymAntonym": "..."
    }},
    "definition": "...",
    "synonyms": ["...","...","..."],
    "antonyms": ["...","...","..."],
    "exampleSentences": [
      {{"en":"...","ko":"..."}},
      {{"en":"...","ko":"..."}}
    ]
  }}
]

Inputs:
{payload_json}
""".strip()


def parse_json_candidate(text: str) -> Dict:
    raw = text.strip()
    if raw.startswith("```"):
        raw = re.sub(r"^```[a-zA-Z]*\n?", "", raw)
        raw = re.sub(r"\n?```$", "", raw)
        raw = raw.strip()
    start = raw.find("{")
    end = raw.rfind("}")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("No JSON object found")
    obj = json.loads(raw[start : end + 1])
    if not isinstance(obj, dict):
        raise ValueError("JSON root must be object")
    return obj


def parse_json_array_candidate(text: str) -> List[Dict]:
    raw = text.strip()
    if raw.startswith("```"):
        raw = re.sub(r"^```[a-zA-Z]*\n?", "", raw)
        raw = re.sub(r"\n?```$", "", raw)
        raw = raw.strip()
    start = raw.find("[")
    end = raw.rfind("]")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("No JSON array found")
    arr = json.loads(raw[start : end + 1])
    if not isinstance(arr, list):
        raise ValueError("JSON root must be array")
    for item in arr:
        if not isinstance(item, dict):
            raise ValueError("Array items must be object")
    return arr


def validate_payload(payload: Dict, block: WordBlock) -> Tuple[bool, str]:
    required_top = {"distractors", "tips", "definition", "synonyms", "antonyms", "exampleSentences"}
    if set(payload.keys()) != required_top:
        return False, "Top-level keys mismatch"

    distractors = payload["distractors"]
    if not isinstance(distractors, list) or len(distractors) != 10:
        return False, "distractors must be list length 10"
    if len({str(x).strip() for x in distractors}) < 10:
        return False, "distractors must be unique"
    for d in distractors:
        if not isinstance(d, str) or not d.strip():
            return False, "distractor must be non-empty string"
        ds = d.strip()
        if not HANGUL_RE.search(ds):
            return False, f"distractor not Korean: {ds}"
        if not KOREAN_ONLY_OPTION_RE.match(ds):
            return False, f"distractor has invalid chars: {ds}"
        if ds == block.meaning.strip():
            return False, "distractor equals meaning"

    tips = payload["tips"]
    tip_keys = {"etymology", "visual", "soundAlike", "context", "synonymAntonym"}
    if not isinstance(tips, dict) or set(tips.keys()) != tip_keys:
        return False, "tips keys mismatch"
    for k in tip_keys:
        v = tips[k]
        if not isinstance(v, str) or len(v.strip()) < 8:
            return False, f"tips.{k} too short"
        if not HANGUL_RE.search(v):
            return False, f"tips.{k} must be Korean text"
        bad_markers = [
            "접두/어근/접미를 확인하며",
            "상황을 머릿속 한 장면으로 만들고",
            "발음을 비슷한 소리와 연결해",
            'In context, "',
            "품사의 유의어/반의어를 1쌍씩",
            "I wrote",
        ]
        if any(m in v for m in bad_markers):
            return False, f"tips.{k} looks templated"

    definition = payload["definition"]
    if not isinstance(definition, str) or len(definition.strip()) < 12:
        return False, "definition too short"
    if HANGUL_RE.search(definition):
        return False, "definition contains Hangul"
    # Single-letter / very short target words (e.g., "a") naturally appear in
    # normal English definitions as function words. Apply leak-check only to
    # content words with length >= LEAK_CHECK_MIN_WORD_LEN.
    if len(block.word.strip()) >= LEAK_CHECK_MIN_WORD_LEN:
        if re.search(rf"\b{re.escape(block.word)}\b", definition, re.I):
            return False, "definition leaks target word"

    for key in ("synonyms", "antonyms"):
        arr = payload[key]
        if not isinstance(arr, list) or len(arr) != 3:
            return False, f"{key} must be list length 3"
        if len({str(x).strip().lower() for x in arr}) < 3:
            return False, f"{key} must be unique"
        for item in arr:
            if not isinstance(item, str) or len(item.strip()) < 2:
                return False, f"{key} has invalid item"
            if not ASCII_RE.match(item):
                return False, f"{key} must be ASCII"
            if not EN_LETTER_RE.search(item):
                return False, f"{key} must contain English letters"
            if item.strip().lower() == block.word.strip().lower():
                return False, f"{key} equals target word"

    examples = payload["exampleSentences"]
    if not isinstance(examples, list) or len(examples) != 2:
        return False, "exampleSentences must be list length 2"
    for ex in examples:
        if not isinstance(ex, dict) or set(ex.keys()) != {"en", "ko"}:
            return False, "example item keys must be en,ko"
        if not isinstance(ex["en"], str) or len(ex["en"].strip()) < 8:
            return False, "example en too short"
        if not isinstance(ex["ko"], str) or len(ex["ko"].strip()) < 5:
            return False, "example ko too short"
        if HANGUL_RE.search(ex["en"]):
            return False, "example en contains Hangul"
        if not HANGUL_RE.search(ex["ko"]):
            return False, "example ko must contain Hangul"
        en_lower = ex["en"].strip().lower()
        if any(en_lower.startswith(prefix) for prefix in TEMPLATE_BAD_STARTS):
            return False, "example en looks templated"

    return True, ""


def validate_batch_payload(items: List[Dict], blocks: List[WordBlock]) -> Tuple[bool, str, Dict[str, Dict]]:
    if len(items) != len(blocks):
        return False, "Batch size mismatch", {}

    by_word: Dict[str, Dict] = {}
    expected_words = [b.word for b in blocks]
    for item in items:
        w = item.get("word")
        if not isinstance(w, str) or not w.strip():
            return False, "Item missing word", {}
        if w in by_word:
            return False, f"Duplicate word in output: {w}", {}
        by_word[w] = item

    for w in expected_words:
        if w not in by_word:
            return False, f"Missing word in output: {w}", {}

    cleaned: Dict[str, Dict] = {}
    for block in blocks:
        item = dict(by_word[block.word])
        item.pop("word", None)
        ok, reason = validate_payload(item, block)
        if not ok:
            return False, f"{block.word}: {reason}", {}
        cleaned[block.word] = item
    return True, "", cleaned


def format_ts_block(block: WordBlock, payload: Dict) -> str:
    def sq(s: str) -> str:
        return f"'{encode_ts_single_quoted(s)}'"

    distractors = ", ".join(sq(x.strip()) for x in payload["distractors"])
    tips = payload["tips"]
    syn = ", ".join(sq(x.strip()) for x in payload["synonyms"])
    ant = ", ".join(sq(x.strip()) for x in payload["antonyms"])

    ex_lines = []
    for ex in payload["exampleSentences"]:
        en = sq(ex["en"].strip())
        ko = sq(ex["ko"].strip())
        ex_lines.append(f"        {{ en: {en}, ko: {ko} }},")

    return (
        f"  word({sq(block.word)}, {sq(block.meaning)}, {block.level}, {sq(block.pos)},\n"
        f"    [{distractors}],\n"
        f"    tips({{\n"
        f"      etymology: {sq(tips['etymology'].strip())},\n"
        f"      visual: {sq(tips['visual'].strip())},\n"
        f"      soundAlike: {sq(tips['soundAlike'].strip())},\n"
        f"      context: {sq(tips['context'].strip())},\n"
        f"      synonymAntonym: {sq(tips['synonymAntonym'].strip())},\n"
        f"    }}),\n"
        f"    {{\n"
        f"      definition: {sq(payload['definition'].strip())},\n"
        f"      synonyms: [{syn}],\n"
        f"      antonyms: [{ant}],\n"
        f"      exampleSentences: [\n"
        f"{chr(10).join(ex_lines)}\n"
        f"      ],\n"
        f"    }}\n"
        f"  ),\n"
    )


def ask_gemini(client: genai.Client, model: str, prompt: str) -> str:
    resp = client.models.generate_content(
        model=model,
        contents=[types.Content(role="user", parts=[types.Part.from_text(text=prompt)])],
        config=types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(thinking_level="MINIMAL"),
            temperature=0.3,
            response_mime_type="application/json",
        ),
    )
    text = (resp.text or "").strip()
    if not text:
        raise RuntimeError("Gemini returned empty text")
    return text


def repair_example_sentences(
    client: genai.Client,
    model: str,
    block: WordBlock,
    current_payload: Dict,
) -> Dict | None:
    prompt = f"""
Rewrite ONLY `exampleSentences` for this vocabulary entry.

Rules:
- Return JSON object: {{"exampleSentences":[{{"en":"...","ko":"..."}},{{"en":"...","ko":"..."}}]}}
- Exactly 2 example pairs.
- `en` must be natural real-life usage, not meta explanation.
- Do NOT start en with: {", ".join(TEMPLATE_BAD_STARTS)}.
- `ko` must be natural Korean translation.

Entry:
word: {block.word}
meaning: {block.meaning}
partOfSpeech: {block.pos}
definition: {current_payload.get("definition", "")}
synonyms: {current_payload.get("synonyms", [])}
antonyms: {current_payload.get("antonyms", [])}
currentExampleSentences: {current_payload.get("exampleSentences", [])}
""".strip()
    try:
        raw = ask_gemini(client, model, prompt)
        fixed = parse_json_candidate(raw)
        ex = fixed.get("exampleSentences")
        if not isinstance(ex, list):
            return None
        patched = dict(current_payload)
        patched["exampleSentences"] = ex
        ok, _reason = validate_payload(patched, block)
        if ok:
            return patched
        return None
    except Exception:
        return None


def process_file(
    client: genai.Client,
    file_path: Path,
    batch_num: int,
    args: argparse.Namespace,
    checkpoint: Dict[str, bool],
    total_counter: Dict[str, int],
) -> None:
    original = file_path.read_text(encoding="utf-8")
    blocks = extract_word_blocks(original)
    if not blocks:
        emit(f"[batch {batch_num:02d}] no word blocks found", args.live_log)
        return

    cursor = 0
    out_parts: List[str] = []
    changed = 0

    pending_blocks: List[WordBlock] = []
    warned_pos: set[str] = set()
    for block in blocks:
        total_counter["seen"] += 1
        key = checkpoint_key(batch_num, block.word)
        if block.pos not in VALID_POS:
            # Some legacy batches include non-standard POS tags (e.g. "modal").
            # We keep the original tag untouched in output and continue processing.
            if block.pos not in warned_pos:
                emit(
                    f"[batch {batch_num:02d}] warning: non-standard pos '{block.pos}' detected; proceeding",
                    args.live_log,
                )
                warned_pos.add(block.pos)

        if args.resume and checkpoint.get(key):
            continue
        if args.limit and total_counter["processed"] >= args.limit:
            continue
        pending_blocks.append(block)

    pending_map = {b.word: b for b in pending_blocks}
    refined_payloads: Dict[str, Dict] = {}

    if pending_blocks:
        bs = max(1, int(args.batch_size))
        for idx in range(0, len(pending_blocks), bs):
            chunk = pending_blocks[idx : idx + bs]
            prompt = build_batch_prompt(chunk)
            ok_chunk = None
            last_err = ""
            for _attempt in range(1, args.max_retries + 1):
                try:
                    raw = ask_gemini(client, args.model, prompt)
                    arr = parse_json_array_candidate(raw)
                    ok, reason, cleaned = validate_batch_payload(arr, chunk)
                    if not ok:
                        last_err = reason
                        prompt = (
                            build_batch_prompt(chunk)
                            + f"\n\nYour previous output failed validation: {reason}\n"
                            + "Return corrected JSON array only."
                        )
                        continue
                    ok_chunk = cleaned
                    break
                except Exception as exc:
                    last_err = str(exc)
                    prompt = (
                        build_batch_prompt(chunk)
                        + f"\n\nYour previous output failed validation/parsing: {last_err}\n"
                        + "Return corrected JSON array only."
                    )

            if ok_chunk is None:
                # Fallback path for single-word mode: try harder with a stricter
                # one-item prompt before aborting the whole run.
                if len(chunk) == 1:
                    block = chunk[0]
                    fallback_prompt = (
                        build_prompt(block)
                        + "\n\nIMPORTANT: Avoid template patterns in example en."
                        + " Do not start with phrases like 'In this sentence',"
                        + " 'The word', 'I wrote', 'Try to', 'You can',"
                        + " 'This object can be described as', 'I used',"
                        + " 'The adjective', 'I added'."
                    )
                    fallback_payload = None
                    fallback_err = last_err
                    for _ in range(1, args.max_retries * 4 + 1):
                        try:
                            raw = ask_gemini(client, args.model, fallback_prompt)
                            payload = parse_json_candidate(raw)
                            ok, reason = validate_payload(payload, block)
                            if not ok and reason == "example en looks templated":
                                repaired = repair_example_sentences(client, args.model, block, payload)
                                if repaired is not None:
                                    fallback_payload = repaired
                                    break
                            if ok:
                                fallback_payload = payload
                                break
                            fallback_err = reason
                            fallback_prompt = (
                                build_prompt(block)
                                + f"\n\nPrevious output failed validation: {reason}\n"
                                + "Return corrected JSON only."
                            )
                        except Exception as exc:
                            fallback_err = str(exc)
                            fallback_prompt = (
                                build_prompt(block)
                                + f"\n\nPrevious output failed validation/parsing: {fallback_err}\n"
                                + "Return corrected JSON only."
                            )
                    if fallback_payload is not None:
                        ok_chunk = {block.word: fallback_payload}
                    else:
                        if args.strict_fail:
                            raise RuntimeError(
                                f"[batch {batch_num:02d}] failed word '{block.word}' after fallback retries: {fallback_err}"
                            )
                        emit(
                            f"[batch {batch_num:02d}] skip-failed: {block.word} | reason={fallback_err}",
                            args.live_log,
                        )
                        record_failure(batch_num, block.word, fallback_err)
                        total_counter["failed"] = int(total_counter.get("failed", 0)) + 1
                        ok_chunk = {}
                else:
                    raise RuntimeError(
                        f"[batch {batch_num:02d}] failed chunk {idx // bs + 1} after retries: {last_err}"
                    )

            for w, p in ok_chunk.items():
                refined_payloads[w] = p
                total_counter["processed"] += 1
                checkpoint[checkpoint_key(batch_num, w)] = True
                done = total_counter["processed"]
                target = max(1, int(total_counter.get("total_target", 0)))
                pct = (done / target) * 100 if target > 0 else 0.0
                elapsed = time.time() - float(total_counter.get("start_ts", time.time()))
                speed = done / elapsed if elapsed > 0 else 0.0
                remain = max(0, target - done)
                eta = (remain / speed) if speed > 0 else 0.0
                emit(
                    f"[batch {batch_num:02d}] refined: {w} | {done}/{target} ({pct:.1f}%) | ETA {format_seconds(eta)}",
                    args.live_log,
                )
            save_checkpoint(checkpoint)
            time.sleep(max(args.sleep, 0.0))

    for block in blocks:
        out_parts.append(original[cursor : block.start])
        if block.word in refined_payloads:
            out_parts.append(format_ts_block(block, refined_payloads[block.word]))
            changed += 1
        else:
            out_parts.append(block.text)
        cursor = block.end

    out_parts.append(original[cursor:])
    new_text = "".join(out_parts)

    if not args.dry_run and changed > 0 and new_text != original:
        file_path.write_text(new_text, encoding="utf-8")
        emit(f"[batch {batch_num:02d}] wrote {file_path.name} (changed {changed})", args.live_log)
    else:
        emit(f"[batch {batch_num:02d}] no write (changed {changed}, dry_run={args.dry_run})", args.live_log)


def main() -> int:
    args = parse_args()
    batch_nums = parse_batch_spec(args.batches)
    files = []
    for b in batch_nums:
        fp = get_batch_file(b)
        if not fp.exists():
            print(f"Missing batch file: {fp}", file=sys.stderr)
            return 2
        files.append((b, fp))

    if args.parse_only:
        total = 0
        for batch_num, path in files:
            text = path.read_text(encoding="utf-8")
            blocks = extract_word_blocks(text)
            total += len(blocks)
            first = blocks[0].word if blocks else "-"
            last = blocks[-1].word if blocks else "-"
            emit(f"[batch {batch_num:02d}] words={len(blocks)} first={first} last={last}", args.live_log)
        emit(f"Parse-only done. Total words={total}", args.live_log)
        return 0

    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not api_key:
        print("GEMINI_API_KEY is not set.", file=sys.stderr)
        return 2

    client = genai.Client(api_key=api_key)
    checkpoint = load_checkpoint() if args.resume else {}
    total_target = estimate_total_target(files, args, checkpoint)
    counter = {
        "seen": 0,
        "processed": 0,
        "failed": 0,
        "total_target": total_target,
        "start_ts": time.time(),
    }

    if args.live_log:
        Path(args.live_log).parent.mkdir(parents=True, exist_ok=True)
        Path(args.live_log).write_text("", encoding="utf-8")
    FAILURES_PATH.parent.mkdir(parents=True, exist_ok=True)
    FAILURES_PATH.write_text("", encoding="utf-8")

    emit(f"Model: {args.model}", args.live_log)
    emit(f"Batches: {batch_nums[0]}..{batch_nums[-1]} ({len(batch_nums)} files)", args.live_log)
    emit(f"Dry run: {args.dry_run}", args.live_log)
    emit(f"Resume: {args.resume}", args.live_log)
    emit(f"Target words this run: {total_target}", args.live_log)
    if args.limit:
        emit(f"Limit: {args.limit} words", args.live_log)

    for batch_num, path in files:
        process_file(client, path, batch_num, args, checkpoint, counter)

    emit(f"Done. Seen={counter['seen']} Processed={counter['processed']}", args.live_log)
    emit(f"Failed words this run: {counter.get('failed', 0)}", args.live_log)
    emit(f"Checkpoint: {CHECKPOINT_PATH}", args.live_log)
    emit(f"Failures: {FAILURES_PATH}", args.live_log)
    if args.live_log:
        emit(f"LiveLog: {args.live_log}", args.live_log)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
