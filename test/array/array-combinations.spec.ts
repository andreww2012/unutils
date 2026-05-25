import {arrayCombinations} from '../../src/array/array-combinations.ts';

describe('array/arrayCombinations', () => {
  it('basic test', () => {
    expect(arrayCombinations([1, 2, 3], 2)).toStrictEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });
});
