import {toInt32} from '../../src/bitwise/to-int32.ts';

describe('bitwise/toInt32', () => {
  it('reads an unsigned 32-bit value as signed', () => {
    expect(toInt32(2 ** 32 - 1)).toBe(-1);
    expect(toInt32(2 ** 31)).toBe(-(2 ** 31));
    expect(toInt32(2 ** 31 - 1)).toBe(2 ** 31 - 1);
  });

  it('drops the fractional part and the bits above the 32nd', () => {
    expect(toInt32(5.9)).toBe(5);
    expect(toInt32(2 ** 32 + 7)).toBe(7);
  });
});
