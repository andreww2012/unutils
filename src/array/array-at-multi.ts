import {at} from 'es-toolkit';

/**
 * Reads one or more elements from an array by index. Extends `at` from
 * `es-toolkit` so that a single index can be passed directly (returning the
 * element itself), in addition to the original array-of-indices form
 * (returning a same-length array of elements). Negative indices count from
 * the end of the array, and out-of-bounds indices yield `undefined` in the
 * corresponding slot.
 * @param array - The array to read from. Not mutated.
 * @param indices - Either a single index, or an array of indices. Negative
 * values are counted from the end of the array.
 * @returns When `indices` is a single number, the element at that index, or
 * `undefined` if the index is out of bounds. When `indices` is an array, a
 * new array of elements in the same order as the requested indices, with
 * `undefined` in slots whose index is out of bounds.
 * @example
 * // Single index — returns the element directly
 * arrayAtMulti(['a', 'b', 'c'], 1);
 * // 'b'
 * @example
 * // Single index, out of bounds — returns undefined
 * arrayAtMulti(['a', 'b', 'c'], 10);
 * // undefined
 * @example
 * // Negative single index counts from the end
 * arrayAtMulti(['a', 'b', 'c'], -1);
 * // 'c'
 * @example
 * // Array of indices — returns a same-length array
 * arrayAtMulti(['a', 'b', 'c', 'd'], [0, 2]);
 * // ['a', 'c']
 * @example
 * // Array of indices may mix positive, negative and out-of-bounds values
 * arrayAtMulti(['a', 'b', 'c'], [0, -1, 10]);
 * // ['a', 'c', undefined]
 * @example
 * // An empty index array returns an empty array
 * arrayAtMulti(['a', 'b', 'c'], []);
 * // []
 */
export function arrayAtMulti<T>(array: readonly T[], indices: number[]): T[];
export function arrayAtMulti<T>(array: readonly T[], indices: number): T | undefined;
export function arrayAtMulti<T>(
  array: readonly T[],
  indices: number | number[],
): T | T[] | undefined {
  if (Array.isArray(indices)) {
    return at(array, indices);
  }

  return at(array, [indices])[0];
}
