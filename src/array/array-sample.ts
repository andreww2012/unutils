import {sample, sampleSize} from 'es-toolkit/array';

/**
 * Returns one or more elements drawn uniformly at random from `array`. Without
 * the second argument, a single element is returned directly (delegates to
 * `sample` from `es-toolkit`). When `size` is provided, an array of exactly
 * `size` distinct elements is returned, sampled without replacement using
 * Floyd's algorithm (delegates to `sampleSize`).
 * @param array - The array to sample from. Not mutated.
 * @param size - Optional number of elements to draw. Must not exceed `array.length`.
 * @returns When `size` is omitted, a single random element (or `undefined`
 * if `array` is empty). When `size` is provided, a new array of that many
 * randomly chosen elements.
 * @throws {Error} When `size` is greater than `array.length`.
 * @example
 * // Single element
 * arraySample([1, 2, 3, 4, 5]);
 * // e.g. 3
 * @example
 * // Multiple elements, sampled without replacement
 * arraySample([1, 2, 3, 4, 5], 2);
 * // e.g. [4, 1]
 * @example
 * // Drawing all elements yields a shuffled copy
 * arraySample(['a', 'b', 'c'], 3);
 * // e.g. ['c', 'a', 'b']
 * @example
 * // Size 0 always returns an empty array
 * arraySample([1, 2, 3], 0);
 * // []
 */
export function arraySample<T>(array: readonly T[], size: number): T[];
export function arraySample<T>(array: readonly T[]): T;
export function arraySample<T>(array: readonly T[], size?: number): T | T[] {
  if (size == null) {
    return sample(array);
  }

  return sampleSize(array, size);
}
