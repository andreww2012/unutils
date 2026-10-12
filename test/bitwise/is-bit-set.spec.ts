import {isBitSet} from '../../src/bitwise/is-bit-set.ts';

describe('bitwise/isBitSet', () => {
  it('checks whether a bit is 1', () => {
    expect(isBitSet(0b0101, 0)).toBe(true);
    expect(isBitSet(0b0101, 1)).toBe(false);
    expect(isBitSet(0b0101, 2)).toBe(true);
    expect(isBitSet(0, 0)).toBe(false);
  });

  it('reads the sign bit of negative numbers', () => {
    expect(isBitSet(-1, 31)).toBe(true);
    expect(isBitSet(2 ** 31, 31)).toBe(true);
    expect(isBitSet(2 ** 31 - 1, 31)).toBe(false);
  });
});
