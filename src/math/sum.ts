import {sumBy, sum as sumFromEsToolkit} from 'es-toolkit/math';

/**
 * Calculates the sum of a collection of numbers. When the second argument is
 * omitted, the input is treated as a `readonly number[]` and summed directly
 * (delegates to `sum` from `es-toolkit`). When a `getValue` function is
 * provided, each element (along with its zero-based index) is mapped through
 * it first and the resulting numbers are summed (delegates to `sumBy`).
 *
 * Returns `0` for an empty input.
 * @param items - The collection to sum. Not mutated.
 * @param getValue - Optional selector that produces the numeric value to add
 * from each element. Receives the element and its zero-based index.
 * @returns The sum of the resolved numeric values, or `0` if `items` is empty.
 * @example
 * // Basic sum of a number array
 * sum([1, 2, 3, 4, 5]);
 * // 15
 * @example
 * // With a selector — sum a numeric field of objects
 * sum([{a: 1}, {a: 2}, {a: 3}], (item) => item.a);
 * // 6
 * @example
 * // The selector receives the index too
 * sum([{a: 1}, {a: 2}, {a: 3}], (item, index) => item.a * index);
 * // 8
 * @example
 * // Empty input returns 0
 * sum([]);
 * // 0
 */
export function sum<T>(
  items: readonly T[],
  getValue: (element: T, index: number) => number,
): number;
export function sum(items: readonly number[]): number;
export function sum<T>(
  items: readonly T[],
  getValue?: (element: T, index: number) => number,
): number {
  if (getValue) {
    return sumBy(items, getValue);
  }

  return sumFromEsToolkit(items as readonly number[]);
}
