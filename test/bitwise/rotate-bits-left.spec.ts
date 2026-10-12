import {rotateBitsLeft} from '../../src/bitwise/rotate-bits-left.ts';

describe('bitwise/rotateBitsLeft', () => {
  it('moves the bits falling off the left end to the right end', () => {
    expect(rotateBitsLeft(0x80_00_00_01, 1)).toBe(3);
    expect(rotateBitsLeft(0x12_34_56_78, 8)).toBe(0x34_56_78_12);
  });

  it('returns the value unchanged for a count of 0', () => {
    expect(rotateBitsLeft(0x12_34_56_78, 0)).toBe(0x12_34_56_78);
  });

  it('returns an unsigned integer', () => {
    expect(rotateBitsLeft(1, 31)).toBe(2 ** 31);
  });
});
