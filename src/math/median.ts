import {medianBy, median as medianFromEsToolkit} from 'es-toolkit/math';

/**
 * Calculates the median of a collection of numbers. When the second argument
 * is omitted, the input is treated as a `readonly number[]` and the median is
 * computed directly (delegates to `median` from `es-toolkit`). When a
 * `getValue` function is provided, each element is mapped through it first
 * and the resulting numbers are used (delegates to `medianBy`).
 *
 * For an odd-length input the median is the middle value of the sorted
 * sequence; for an even-length input it is the average of the two middle
 * values. Returns `NaN` for an empty input.
 * @param items - The collection to compute the median of. Not mutated.
 * @param getValue - Optional selector that produces the numeric value to
 * use from each element.
 * @returns The median, or `NaN` if `items` is empty.
 * @example
 * // Odd-length number array
 * median([1, 2, 3, 4, 5]);
 * // 3
 * @example
 * // Even-length number array — average of the two middle values
 * median([1, 2, 3, 4]);
 * // 2.5
 * @example
 * // With a selector — median of a numeric field of objects
 * median([{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}], (item) => item.a);
 * // 3
 * @example
 * // Empty input returns NaN
 * median([]);
 * // NaN
 */
export function median<T>(items: readonly T[], getValue: (element: T) => number): number;
export function median(items: readonly number[]): number;
export function median<T>(items: readonly T[], getValue?: (element: T) => number): number {
  if (getValue) {
    return medianBy(items, getValue);
  }

  return medianFromEsToolkit(items as readonly number[]);
}
