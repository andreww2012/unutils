import {rangeRight} from '../../src/math/range-right.ts';

describe('math/rangeRight', () => {
  it('basic test', () => {
    expect(rangeRight(4)).toStrictEqual([3, 2, 1, 0]);
  });

  it('supports bigints', () => {
    expect(rangeRight(3n)).toStrictEqual([2n, 1n, 0n]);
    expect(rangeRight(0n, 20n, 5n)).toStrictEqual([15n, 10n, 5n, 0n]);
  });
});
