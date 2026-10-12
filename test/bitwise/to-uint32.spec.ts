import {toUint32} from '../../src/bitwise/to-uint32.ts';

describe('bitwise/toUint32', () => {
  it('reads a signed 32-bit value as unsigned', () => {
    expect(toUint32(-1)).toBe(2 ** 32 - 1);
    expect(toUint32(1 << 31)).toBe(2 ** 31);
    expect(toUint32(5)).toBe(5);
  });

  it('drops the fractional part and the bits above the 32nd', () => {
    expect(toUint32(5.9)).toBe(5);
    expect(toUint32(2 ** 32 + 7)).toBe(7);
  });
});
