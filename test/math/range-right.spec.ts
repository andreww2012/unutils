import {rangeRight} from '../../src/math/range-right.ts';

describe('math/rangeRight', () => {
  it('basic test', () => {
    expect(rangeRight(4)).toStrictEqual([3, 2, 1, 0]);
  });
});
