/**
 * Finds the largest number in an iterable, in a single pass and without
 * materializing an intermediate array — so it works on lazy sequences
 * (generators, `Set`s, …) and stays correct where `Math.max(...array)` breaks:
 * it never overflows the argument/stack limit on large inputs, and returns
 * `undefined` (rather than `-Infinity`) for an empty input.
 *
 * To find the element with the largest *derived* value instead, use
 * `array/maxBy`, which returns the element rather than the number.
 * @param items - The iterable of numbers to scan. Not mutated.
 * @returns The largest number, or `undefined` if `items` is empty.
 * @example
 * // Largest of an array
 * max([3, 1, 4, 1, 5]);
 * // 5
 * @example
 * // Works on any iterable
 * max(new Set([10, 20, 30]));
 * // 30
 * @example
 * // Empty input returns `undefined`
 * max([]);
 * // undefined
 */
export const max = (items: Iterable<number>): number | undefined => {
  let result: number | undefined;

  for (const value of items) {
    if (result === undefined || value > result) {
      result = value;
    }
  }

  return result;
};
