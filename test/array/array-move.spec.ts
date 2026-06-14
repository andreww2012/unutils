import {arrayMove} from '../../src/array/array-move.ts';

describe('array/arrayMove', () => {
  it('basic test', () => {
    expect(arrayMove([1, 2, 3], 0, 2)).toStrictEqual([2, 3, 1]);
  });
});
