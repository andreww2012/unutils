import {setBit} from '../../src/bitwise/set-bit.ts';

describe('bitwise/setBit', () => {
  it('sets a bit to 1', () => {
    expect(setBit(0b0001, 2)).toBe(0b0101);
    expect(setBit(0b0101, 2)).toBe(0b0101);
  });

  it('sets a bit to 0 when isSet is false', () => {
    expect(setBit(0b0111, 1, false)).toBe(0b0101);
    expect(setBit(0b0101, 1, false)).toBe(0b0101);
  });

  it('returns an unsigned integer', () => {
    expect(setBit(0, 31)).toBe(2 ** 31);
    expect(setBit(-1, 0, false)).toBe(2 ** 32 - 2);
  });
});
