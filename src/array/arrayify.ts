/**
 * Ensures a value is an array: returns it unchanged when it already is one,
 * wraps it in a single-element array otherwise, and returns an empty array for
 * nullish input (`null` / `undefined`). Note that this *wraps* rather than
 * *converts* — passing an iterable like a `Set` yields `[set]`, not its spread
 * contents (use `Array.from` for that).
 *
 * Based on `castArray` from `es-toolkit/compat`, but with two enhancements:
 * sharper typing (an existing array — including a tuple — keeps its exact type,
 * any other value widens to `value[]`), and nullish values collapse to `[]`
 * instead of `castArray`'s `[null]` / `[undefined]`.
 * @param value - The value to ensure is an array.
 * @returns The original array, a new single-element array wrapping `value`, or
 * an empty array when `value` is nullish.
 * @example
 * // Wraps a non-array
 * arrayify(1);
 * // [1]
 * @example
 * // Returns an existing array untouched (preserving tuple types)
 * arrayify([1, 2, 3]);
 * // [1, 2, 3]
 * @example
 * // Wraps rather than converts — a Set is not spread
 * arrayify(new Set([1, 2, 3]));
 * // [Set(3) {1, 2, 3}]
 * @example
 * // Nullish input collapses to an empty array
 * arrayify(undefined);
 * // []
 * arrayify(null);
 * // []
 */
export function arrayify(value: null | undefined): [];
export function arrayify<T extends readonly unknown[]>(value: T | null | undefined): T;
export function arrayify<T>(value: T | null | undefined): NonNullable<T>[];
export function arrayify(value: unknown): unknown {
  if (value == null) {
    return [];
  }

  return Array.isArray(value) ? (value as unknown[]) : [value];
}
