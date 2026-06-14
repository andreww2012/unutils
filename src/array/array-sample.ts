import {sample, sampleSize} from 'es-toolkit/array';

/**
 * Returns one or more elements drawn uniformly at random from `array`. Without
 * the second argument, a single element is returned directly (delegates to
 * `sample` from `es-toolkit`).
 *
 * When `size` is provided, a new array of that many elements is returned. By
 * default elements are sampled **without replacement** — each can appear at
 * most once, so `size` may not exceed `array.length` (delegates to `sampleSize`
 * via Floyd's algorithm). Pass `{withReplacement: true}` to sample **with
 * replacement** instead: each draw is independent, elements may repeat, and
 * `size` may exceed `array.length`.
 * @param array - The array to sample from. Not mutated.
 * @param size - Optional number of elements to draw.
 * @param options - Sampling options.
 * @param options.withReplacement - When `true`, the same element may be drawn
 * more than once and `size` may exceed `array.length`. Defaults to `false`.
 * @returns When `size` is omitted, a single random element (or `undefined`
 * if `array` is empty). When `size` is provided, a new array of that many
 * randomly chosen elements (empty when sampling with replacement from an empty
 * array).
 * @throws {Error} Without replacement, when `size` is greater than `array.length`.
 * @example
 * // Single element
 * arraySample([1, 2, 3, 4, 5]);
 * // e.g. 3
 * @example
 * // Multiple distinct elements, sampled without replacement
 * arraySample([1, 2, 3, 4, 5], 2);
 * // e.g. [4, 1]
 * @example
 * // With replacement, elements may repeat and `size` may exceed the length
 * arraySample([1, 2, 3], 4, {withReplacement: true});
 * // e.g. [2, 2, 1, 3]
 * @example
 * // Size 0 always returns an empty array
 * arraySample([1, 2, 3], 0);
 * // []
 */
export function arraySample<T>(
  array: readonly T[],
  size: number,
  options?: {withReplacement?: boolean},
): T[];
export function arraySample<T>(array: readonly T[]): T;
export function arraySample<T>(
  array: readonly T[],
  size?: number,
  options?: {withReplacement?: boolean},
): T | T[] {
  if (size == null) {
    return sample(array);
  }

  if (options?.withReplacement) {
    if (array.length === 0) {
      return [];
    }

    return Array.from({length: size}, () => sample(array));
  }

  return sampleSize(array, size);
}
