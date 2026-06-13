import {stringify} from 'devalue';

/**
 * Serializes a value into a string that round-trips through
 * {@link structuredParse}, preserving types `JSON.stringify` cannot — `Date`,
 * `Map`, `Set`, `BigInt`, `RegExp`, typed arrays, etc. — as well as circular
 * and repeated references.
 *
 * The output is **NOT** interoperable JSON: read it back only with
 * {@link structuredParse}, never `JSON.parse`.
 */
// Explicitly typed (rather than a bare re-export) so the bundled declarations don't
// depend on devalue's ambient `declare module` types, which break DTS generation.
export const structuredStringify: (
  value: unknown,
  reducers?: Record<string, (value: unknown) => unknown>,
) => string = stringify;
