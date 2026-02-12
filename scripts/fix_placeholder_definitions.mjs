/**
 * Replace placeholder definitions in vocab batch files (35–70).
 * Replaces the three generic placeholder strings with clearer generic definitions.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');

const REPLACEMENTS = [
  [
    "definition: 'a person, thing, concept, state, or event referred to in context'",
    "definition: 'a person, thing, or concept (see Korean for precise meaning)'",
  ],
  [
    "definition: 'to perform an action, process, or change in a particular context'",
    "definition: 'to do something (see Korean for precise meaning)'",
  ],
  [
    "definition: 'describing a quality, condition, or characteristic of a noun'",
    "definition: 'having a quality or characteristic (see Korean for precise meaning)'",
  ],
  [
    "definition: 'modifying how, when, where, or to what degree something happens'",
    "definition: 'in a way that modifies how, when, where, or to what degree (see Korean)'",
  ],
];

for (let i = 22; i <= 70; i++) {
  const num = String(i).padStart(2, '0');
  const file = join(VOCAB_DIR, `vocab_batch_${num}.ts`);
  let content = readFileSync(file, 'utf8');
  let changed = false;
  for (const [from, to] of REPLACEMENTS) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(file, content, 'utf8');
    console.log(`Updated vocab_batch_${num}.ts`);
  }
}
console.log('Done.');
