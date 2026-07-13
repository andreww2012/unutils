import {chunk} from 'es-toolkit/array';
import {chunkBy} from 'es-toolkit/fp';

/**
 * Splits an array into smaller arrays. The chunking strategy depends on the
 * second argument:
 *
 * - When a positive integer `size` is passed, the array is split into
 *   consecutive chunks of at most `size` elements.
 * - When an iteratee `(value) => key` is passed, a new chunk is started
 *   whenever the derived key differs from the previous element's key by strict
 *   inequality — i.e. the result is the runs of consecutive same-key elements.
 * @param array - The array to split. Not mutated.
 * @param sizeOrIteratee - A positive integer chunk size, or a function mapping each element to its comparison key.
 * @returns A new two-dimensional array of chunks.
 * @throws {Error} When `sizeOrIteratee` is a number that is not a positive integer.
 * @example
 * // Fixed-size chunks
 * arrayChunks([1, 2, 3, 4, 5], 2);
 * // [[1, 2], [3, 4], [5]]
 * @example
 * // Runs of consecutive same-key elements
 * arrayChunks([1, 1, 2, 3, 3], (value) => value);
 * // [[1, 1], [2], [3, 3]]
 * @example
 * // Group consecutive items by a derived key
 * arrayChunks(
 *   [{type: 'a'}, {type: 'a'}, {type: 'b'}, {type: 'a'}],
 *   (item) => item.type,
 * );
 * // [[{type: 'a'}, {type: 'a'}], [{type: 'b'}], [{type: 'a'}]]
 */
export const arrayChunks = <T>(
  array: readonly T[],
  sizeOrIteratee: number | ((value: T) => unknown),
) =>
  typeof sizeOrIteratee === 'function'
    ? chunkBy(sizeOrIteratee)(array)
    : chunk(array, sizeOrIteratee);
