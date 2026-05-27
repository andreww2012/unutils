import {range} from '../../src/math/range.ts';

describe('math/range', () => {
  it('basic test', () => {
    expect(range(4)).toStrictEqual([0, 1, 2, 3]);
  });
});
