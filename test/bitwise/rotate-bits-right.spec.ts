import {rotateBitsRight} from '../../src/bitwise/rotate-bits-right.ts';

describe('bitwise/rotateBitsRight', () => {
  it('moves the bits falling off the right end to the left end', () => {
    expect(rotateBitsRight(3, 1)).toBe(0x80_00_00_01);
    expect(rotateBitsRight(0x12_34_56_78, 8)).toBe(0x78_12_34_56);
  });

  it('returns the value unchanged for a count of 0', () => {
    expect(rotateBitsRight(0x12_34_56_78, 0)).toBe(0x12_34_56_78);
  });
});
