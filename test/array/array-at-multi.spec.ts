import {arrayAtMulti} from '../../src/array/array-at-multi.ts';

describe('array/arrayAtMulti', () => {
  it('basic test', () => {
    const result = arrayAtMulti([10, 20, 30, 40, 50], [1, 3, 5]);

    expect(result).toStrictEqual([20, 40, undefined]);
  });
});
