import {clearBit} from '../../src/bitwise/clear-bit.ts';

describe('bitwise/clearBit', () => {
  it('sets a bit to 0', () => {
    expect(clearBit(0b0111, 1)).toBe(0b0101);
    expect(clearBit(0b0101, 1)).toBe(0b0101);
  });

  it('returns an unsigned integer', () => {
    expect(clearBit(-1, 0)).toBe(2 ** 32 - 2);
  });
});
