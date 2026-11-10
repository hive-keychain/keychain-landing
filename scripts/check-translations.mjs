import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const LOCALES = ['en', 'fr', 'es', 'de', 'zh', 'tw'];
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function placeholders(value) {
  return [...value.matchAll(/\{([a-zA-Z0-9_]+)\}/g)]
    .map((match) => match[1])
    .sort();
}

const dictionaries = Object.fromEntries(
  await Promise.all(
    LOCALES.map(async (locale) => {
      const file = path.join(root, 'src', 'translations', `${locale}.json`);
      return [locale, JSON.parse(await readFile(file, 'utf8'))];
    }),
  ),
);

const english = dictionaries.en;
const englishKeys = Object.keys(english).sort();
let failed = false;

for (const locale of LOCALES) {
  const dictionary = dictionaries[locale];
  const keys = Object.keys(dictionary).sort();
  const missing = englishKeys.filter((key) => !(key in dictionary));
  const extra = keys.filter((key) => !(key in english));
  const empty = keys.filter(
    (key) => typeof dictionary[key] !== 'string' || dictionary[key].trim() === '',
  );
  const placeholderMismatches = englishKeys.filter((key) => {
    if (!(key in dictionary) || typeof dictionary[key] !== 'string') return false;
    return placeholders(english[key]).join('\0') !== placeholders(dictionary[key]).join('\0');
  });

  console.log(`${locale}: ${keys.length} keys`);
  if (missing.length) {
    failed = true;
    console.error(`  Missing: ${missing.join(', ')}`);
  }
  if (extra.length) {
    failed = true;
    console.error(`  Unexpected: ${extra.join(', ')}`);
  }
  if (empty.length) {
    failed = true;
    console.error(`  Empty: ${empty.join(', ')}`);
  }
  for (const key of placeholderMismatches) {
    failed = true;
    console.error(
      `  Placeholder mismatch in ${key}: expected {${placeholders(english[key]).join('}, {')}}; found {${placeholders(dictionary[key]).join('}, {')}}`,
    );
  }
}

console.log('\nIdentical to English (informational; review for intentional technical terms and proper names):');
for (const locale of LOCALES.slice(1)) {
  const identical = englishKeys.filter((key) => dictionaries[locale][key] === english[key]);
  console.log(`  ${locale}: ${identical.length ? identical.join(', ') : 'none'}`);
}

if (failed) {
  console.error('\nTranslation validation failed.');
  process.exitCode = 1;
} else {
  console.log('\nTranslation validation passed.');
}
