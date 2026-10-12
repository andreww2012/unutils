import {isBitIndex} from '../../src/bitwise/is-bit-index.ts';

describe('bitwise/isBitIndex', () => {
  it('accepts integers from 0 to 31', () => {
    Array.from({length: 32}, (_, i) => i).forEach((index) => {
      expect(isBitIndex(index)).toBe(true);
    });
  });

  it('rejects integers out of range', () => {
    expect(isBitIndex(-1)).toBe(false);
    expect(isBitIndex(32)).toBe(false);
  });

  it('rejects non-integers', () => {
    expect(isBitIndex(1.5)).toBe(false);
    expect(isBitIndex(Number.NaN)).toBe(false);
    expect(isBitIndex(Number.POSITIVE_INFINITY)).toBe(false);
  });

  it('rejects non-numbers', () => {
    expect(isBitIndex('1')).toBe(false);
    expect(isBitIndex(1n)).toBe(false);
    expect(isBitIndex(null)).toBe(false);
  });
});
