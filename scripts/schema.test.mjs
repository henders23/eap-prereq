import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { validateSchema } from './check-schema.mjs';
import { DATA, ROOT } from './lib.mjs';

const files = ['topics', 'dependencies', 'domains', 'teaching-guidance', 'references', 'frameworks'];

for (const name of files) {
  test(`data/${name}.json conforms to schema/${name}.schema.json`, () => {
    const schema = JSON.parse(readFileSync(resolve(ROOT, 'schema', `${name}.schema.json`), 'utf8'));
    const data = JSON.parse(readFileSync(resolve(DATA, `${name}.json`), 'utf8'));
    const errors = validateSchema(data, schema);
    assert.deepEqual(errors.slice(0, 10), []);
  });
}

test('the schema checker rejects bad values', () => {
  const schema = { type: 'object', required: ['a'], additionalProperties: false, properties: { a: { enum: ['x'] } } };
  assert.equal(validateSchema({ a: 'x' }, schema).length, 0);
  assert.ok(validateSchema({ a: 'y', b: 1 }, schema).length === 2);
});
