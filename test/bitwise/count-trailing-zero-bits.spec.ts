import {countTrailingZeroBits} from '../../src/bitwise/count-trailing-zero-bits.ts';

describe('bitwise/countTrailingZeroBits', () => {
  it('counts the zero bits below the lowest set bit', () => {
    expect(countTrailingZeroBits(1)).toBe(0);
    expect(countTrailingZeroBits(0b1000)).toBe(3);
    expect(countTrailingZeroBits(0b1010_0000)).toBe(5);
    expect(countTrailingZeroBits(2 ** 31)).toBe(31);
  });

  it('returns 32 for 0', () => {
    expect(countTrailingZeroBits(0)).toBe(32);
  });
});
