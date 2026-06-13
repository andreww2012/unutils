import {parse} from 'devalue';

/**
 * Revives a string produced by {@link structuredStringify} back into its
 * original value, restoring rich types (`Date`, `Map`, `Set`, `BigInt`, etc.)
 * and shared/circular references.
 *
 * Only accepts output of {@link structuredStringify} — it is not a `JSON.parse`
 * replacement for arbitrary JSON. The result is typed `unknown`; assert or
 * validate the shape at the call site.
 */
// Explicitly typed (rather than a bare re-export) so the bundled declarations don't
// depend on devalue's ambient `declare module` types, which break DTS generation.
export const structuredParse: (
  serialized: string,
  revivers?: Record<string, (value: unknown) => unknown>,
) => unknown = parse;
