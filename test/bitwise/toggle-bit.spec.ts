import {toggleBit} from '../../src/bitwise/toggle-bit.ts';

describe('bitwise/toggleBit', () => {
  it('flips a bit', () => {
    expect(toggleBit(0b0101, 1)).toBe(0b0111);
    expect(toggleBit(0b0101, 2)).toBe(0b0001);
  });

  it('returns an unsigned integer', () => {
    expect(toggleBit(0, 31)).toBe(2 ** 31);
  });
});
