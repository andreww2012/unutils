import {parse} from 'devalue';

/**
 * Revives a string produced by {@link structuredStringify} back into its
 * original value, restoring rich types (`Date`, `Map`, `Set`, `BigInt`, etc.)
 * and shared/circular references.
 *
 * Only accepts output of {@link structuredStringify} — it is not a `JSON.parse`
 * replacement for arbitrary JSON. The result is typed `unknown`; assert or
 * validate the shape at the call site.
 * @param serialized - A string produced by {@link structuredStringify}.
 * @param revivers - Optional map, keyed by the same names used during
 * serialization, of functions that reconstruct each custom type from its
 * intermediate form.
 * @returns The revived value, typed `unknown` — assert or validate the shape at
 * the call site.
 * @example
 * // Round-trip a value with rich types and shared references
 * const source = {when: new Date(0), tags: new Set(['a', 'b'])};
 * structuredParse(structuredStringify(source));
 * // {when: Date(1970-01-01T00:00:00Z), tags: Set(2) {'a', 'b'}}
 */
// Explicitly typed (rather than a bare re-export) so the bundled declarations don't
// depend on devalue's ambient `declare module` types, which break DTS generation.
export const structuredParse: (
  serialized: string,
  revivers?: Record<string, (value: unknown) => unknown>,
) => unknown = parse;
