import {destr} from 'destr';

/**
 * Parses a JSON string into a value, throwing on anything malformed — the
 * stricter, fail-fast counterpart of {@link jsonParseSafe}. A faster, safer
 * drop-in for `JSON.parse` (delegates to `destr` in `strict` mode).
 *
 * Beyond plain `JSON.parse`:
 * - Non-string input is returned untouched (e.g. an already-parsed object).
 * - Standalone tokens are decoded even though `JSON.parse` rejects them:
 *   `true`/`false`/`null`/`nan`/`infinity`/`-infinity` (case-insensitive) and
 *   `undefined`.
 * - Keys that could trigger prototype pollution (`__proto__`,
 *   `constructor.prototype`) cause a throw instead of silently polluting.
 *
 * Unlike {@link jsonParseSafe}, invalid JSON, non-JSON strings, and suspected
 * prototype pollution all throw rather than falling back.
 * @param value - The value to parse. Strings are parsed; anything else is returned as-is.
 * @returns The parsed value as `unknown` — assert or validate the shape at the call site.
 * @throws {SyntaxError | Error} A `SyntaxError` for malformed or non-JSON strings, or an `Error` on suspected prototype pollution.
 * @example
 * // Parsing JSON
 * jsonParse('{"a": 1, "b": [2, 3]}');
 * // {a: 1, b: [2, 3]}
 * @example
 * // Standalone tokens that `JSON.parse` would reject
 * jsonParse('Infinity');
 * // Infinity
 * @example
 * // Non-string input is passed through
 * jsonParse({a: 1});
 * // {a: 1}
 * @example
 * // Malformed input throws
 * jsonParse('{a: 1}');
 * // SyntaxError: [destr] Invalid JSON
 */
export const jsonParse = (value: unknown) => destr(value, {strict: true});
