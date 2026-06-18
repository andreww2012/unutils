// cspell:ignore randint RANDBETWEEN
import {type RandomInteger, randomInteger} from 'remeda';

/**
 * Returns a pseudo-random integer in the **inclusive** range `[minimum, maximum]`.
 * Called with a single argument the range is `[0, maximum]`. When both bounds are
 * numeric literals spanning a small range the return type narrows to the precise
 * literal union of possible results (via `remeda`'s `RandomInteger`); otherwise it
 * is `number`.
 *
 * Both bounds are inclusive — the "random between" convention of lodash `_.random`,
 * Python `randint`, and spreadsheet `RANDBETWEEN`. For an exclusive upper bound
 * (e.g. random array indexing) use `randomIntExclusive`. Not cryptographically
 * secure: the runtime delegates to `remeda`'s `randomInteger` (which uses
 * `Math.random`).
 * @param minimum - The inclusive lower bound. When called with a single argument this slot is the inclusive upper bound instead and the lower bound defaults to `0`.
 * @param maximum - The inclusive upper bound.
 * @returns A random integer within the inclusive range.
 * @example
 * // Inclusive of both ends — a fair six-sided die
 * randomIntInclusive(1, 6);
 * // 1 | 2 | 3 | 4 | 5 | 6 (e.g. 4)
 * @example
 * // Single argument — range is [0, maximum]
 * randomIntInclusive(3);
 * // 0 | 1 | 2 | 3 (e.g. 2)
 */
export function randomIntInclusive<Minimum extends number, Maximum extends number>(
  minimum: Minimum,
  maximum: Maximum,
): RandomInteger<Minimum, Maximum>;
export function randomIntInclusive<Maximum extends number>(
  maximum: Maximum,
): RandomInteger<0, Maximum>;
export function randomIntInclusive(minimumOrMaximum: number, maximum?: number) {
  return maximum == null
    ? randomInteger(0, minimumOrMaximum)
    : randomInteger(minimumOrMaximum, maximum);
}
