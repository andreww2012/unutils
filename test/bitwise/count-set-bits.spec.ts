import {countSetBits} from '../../src/bitwise/count-set-bits.ts';

describe('bitwise/countSetBits', () => {
  it('counts the set bits', () => {
    expect(countSetBits(0)).toBe(0);
    expect(countSetBits(0b1011)).toBe(3);
    expect(countSetBits(2 ** 31)).toBe(1);
  });

  it('treats negative numbers as 32-bit integers', () => {
    expect(countSetBits(-1)).toBe(32);
  });
});
