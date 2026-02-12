#!/usr/bin/env python3
"""
One-command runner for vocab refinement.

Run:
  python3 scripts/run_refine_vocab_live.py

Behavior:
  - Uses fixed parameters (no CLI args required)
  - Streams output to terminal in real time
  - Appends logs to docs/gemini_refine_console.log
  - Auto-restarts on non-zero exit
"""

from __future__ import annotations

import os
import subprocess
import sys
import time
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
REFINER = ROOT / "scripts" / "refine_vocab_with_gemini.py"
CONSOLE_LOG = ROOT / "docs" / "gemini_refine_console.log"
LIVE_LOG = ROOT / "docs" / "gemini_refine_live.log"

# Fixed run profile (user requested no manual parameters).
BATCHES = "21-70"
RESUME = True
BATCH_SIZE = "1"
SLEEP_SEC = "0.1"
MAX_RETRIES = "12"
RESTART_DELAY_SEC = 3


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not api_key:
        print("GEMINI_API_KEY is not set.")
        print("Example:")
        print('  export GEMINI_API_KEY="your_key_here"')
        return 2

    CONSOLE_LOG.parent.mkdir(parents=True, exist_ok=True)
    with CONSOLE_LOG.open("a", encoding="utf-8") as logf:
        while True:
            cmd = [
                sys.executable,
                "-u",
                str(REFINER),
                "--batches",
                BATCHES,
                "--batch-size",
                BATCH_SIZE,
                "--sleep",
                SLEEP_SEC,
                "--max-retries",
                MAX_RETRIES,
                "--live-log",
                str(LIVE_LOG),
            ]
            if RESUME:
                cmd.append("--resume")

            banner = f"\n=== run_refine_vocab_live: start ({time.strftime('%Y-%m-%d %H:%M:%S')}) ===\n"
            print(banner, end="")
            logf.write(banner)
            logf.flush()

            proc = subprocess.Popen(
                cmd,
                cwd=str(ROOT),
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                bufsize=1,
            )

            assert proc.stdout is not None
            for line in proc.stdout:
                print(line, end="")
                logf.write(line)
                logf.flush()

            code = proc.wait()
            if code == 0:
                done_msg = "\n=== run_refine_vocab_live: completed successfully ===\n"
                print(done_msg, end="")
                logf.write(done_msg)
                logf.flush()
                return 0

            fail_msg = (
                f"\n=== run_refine_vocab_live: failed (exit={code}), "
                f"retry in {RESTART_DELAY_SEC}s ===\n"
            )
            print(fail_msg, end="")
            logf.write(fail_msg)
            logf.flush()
            time.sleep(RESTART_DELAY_SEC)


if __name__ == "__main__":
    raise SystemExit(main())
