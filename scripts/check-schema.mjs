/**
 * check-schema.mjs — a small, dependency-free JSON Schema checker covering the
 * keywords used in schema/: type, enum, const, pattern, required, properties,
 * additionalProperties, items, minItems, maxItems, uniqueItems, minLength,
 * minimum, maximum and local $ref into $defs.
 */

const typeOf = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : Number.isInteger(v) ? 'integer' : typeof v);
const matchesType = (v, t) => (t === 'number' ? typeof v === 'number' : t === typeOf(v) || (t === 'number' && typeOf(v) === 'integer'));

export function validateSchema(value, schema, root = schema, path = '$', errors = []) {
  if (schema.$ref) {
    const name = schema.$ref.replace('#/$defs/', '');
    return validateSchema(value, root.$defs[name], root, path, errors);
  }
  if (schema.type) {
    const types = [].concat(schema.type);
    if (!types.some((t) => matchesType(value, t))) {
      errors.push(`${path}: expected ${types.join('|')}, got ${typeOf(value)}`);
      return errors;
    }
  }
  if (schema.enum && !schema.enum.includes(value)) errors.push(`${path}: ${JSON.stringify(value)} not in enum`);
  if ('const' in schema && value !== schema.const) errors.push(`${path}: expected const ${schema.const}`);
  if (typeof value === 'string') {
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) errors.push(`${path}: does not match ${schema.pattern}`);
    if (schema.minLength != null && value.length < schema.minLength) errors.push(`${path}: shorter than ${schema.minLength}`);
  }
  if (typeof value === 'number') {
    if (schema.minimum != null && value < schema.minimum) errors.push(`${path}: below minimum`);
    if (schema.maximum != null && value > schema.maximum) errors.push(`${path}: above maximum`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems != null && value.length < schema.minItems) errors.push(`${path}: fewer than ${schema.minItems} items`);
    if (schema.maxItems != null && value.length > schema.maxItems) errors.push(`${path}: more than ${schema.maxItems} items`);
    if (schema.uniqueItems && new Set(value.map((v) => JSON.stringify(v))).size !== value.length) errors.push(`${path}: items not unique`);
    if (schema.items) value.forEach((v, i) => validateSchema(v, schema.items, root, `${path}[${i}]`, errors));
  }
  if (typeOf(value) === 'object') {
    for (const k of schema.required ?? []) if (!(k in value)) errors.push(`${path}: missing ${k}`);
    for (const [k, v] of Object.entries(value)) {
      if (schema.properties?.[k]) validateSchema(v, schema.properties[k], root, `${path}.${k}`, errors);
      else if (schema.additionalProperties === false) errors.push(`${path}: unexpected property ${k}`);
      else if (typeof schema.additionalProperties === 'object') validateSchema(v, schema.additionalProperties, root, `${path}.${k}`, errors);
    }
  }
  return errors;
}
