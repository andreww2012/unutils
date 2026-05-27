import {meanBy, mean as meanFromEsToolkit} from 'es-toolkit/math';

/**
 * Calculates the arithmetic mean of a collection of numbers. When the second
 * argument is omitted, the input is treated as a `readonly number[]` and
 * averaged directly (delegates to `mean` from `es-toolkit`). When a `getValue`
 * function is provided, each element is mapped through it first and the
 * resulting numbers are averaged (delegates to `meanBy`).
 *
 * Returns `NaN` for an empty input.
 * @param items - The collection to average. Not mutated.
 * @param getValue - Optional selector that produces the numeric value to
 * average from each element.
 * @returns The arithmetic mean, or `NaN` if `items` is empty.
 * @example
 * // Basic average of a number array
 * mean([1, 2, 3, 4, 5]);
 * // 3
 * @example
 * // With a selector — average a numeric field of objects
 * mean([{a: 1}, {a: 2}, {a: 3}], (item) => item.a);
 * // 2
 * @example
 * // Empty input returns NaN
 * mean([]);
 * // NaN
 */
export function mean<T>(items: readonly T[], getValue: (element: T) => number): number;
export function mean(items: readonly number[]): number;
export function mean<T>(items: readonly T[], getValue?: (element: T) => number): number {
  if (getValue) {
    return meanBy(items, getValue);
  }

  return meanFromEsToolkit(items as readonly number[]);
}
