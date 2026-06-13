import {arrayAt} from '../../src/array/array-at.ts';

describe('array/arrayAt', () => {
  it('basic test', () => {
    const result = arrayAt([10, 20, 30, 40, 50], [1, 3, 5]);

    expect(result).toStrictEqual([20, 40, undefined]);
  });

  it('single index', () => {
    expect(arrayAt([10, 20, 30], 1)).toBe(20);
  });

  it('single negative index', () => {
    expect(arrayAt([10, 20, 30], -1)).toBe(30);
  });

  it('single out-of-bounds index returns undefined', () => {
    expect(arrayAt([10, 20, 30], 5)).toBeUndefined();
  });

  it('empty index array returns an empty array', () => {
    expect(arrayAt([10, 20, 30], [])).toStrictEqual([]);
  });
});
