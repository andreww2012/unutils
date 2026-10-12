import {indexesOfSetBits} from '../../src/bitwise/indexes-of-set-bits.ts';

describe('bitwise/indexesOfSetBits', () => {
  it('lists the indexes of the set bits in ascending order', () => {
    expect(indexesOfSetBits(0b1010)).toStrictEqual([1, 3]);
    expect(indexesOfSetBits(1)).toStrictEqual([0]);
  });

  it('returns an empty array for 0', () => {
    expect(indexesOfSetBits(0)).toStrictEqual([]);
  });

  it('includes the sign bit', () => {
    expect(indexesOfSetBits(-(2 ** 31))).toStrictEqual([31]);
    expect(indexesOfSetBits(2 ** 31)).toStrictEqual([31]);
    expect(indexesOfSetBits(-1)).toStrictEqual(Array.from({length: 32}, (_, i) => i));
  });
});
