import {stringify} from 'devalue';

/**
 * Serializes a value into a string that round-trips through
 * {@link structuredParse}, preserving types `JSON.stringify` cannot — `Date`,
 * `Map`, `Set`, `BigInt`, `RegExp`, typed arrays, etc. — as well as circular
 * and repeated references.
 *
 * The output is **NOT** interoperable JSON: read it back only with
 * {@link structuredParse}, never `JSON.parse`.
 * @param value - The value to serialize. May contain rich types and circular references.
 * @param reducers - Optional map, keyed by name, of functions that turn a
 * non-standard value into a serializable intermediate form (paired with a
 * reviver of the same name in {@link structuredParse}).
 * @returns The serialized string — read it back only with {@link structuredParse}.
 * @example
 * // Serialize values that plain JSON cannot represent
 * structuredStringify({when: new Date(0), big: 10n});
 * // a string that `structuredParse` turns back into the original value
 */
// Explicitly typed (rather than a bare re-export) so the bundled declarations don't
// depend on devalue's ambient `declare module` types, which break DTS generation.
export const structuredStringify: (
  value: unknown,
  reducers?: Record<string, (value: unknown) => unknown>,
) => string = stringify;
