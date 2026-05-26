import {arrayShuffle} from '../../src/array/array-shuffle.ts';

describe('array/arrayShuffle', () => {
  it('basic test', () => {
    expect(arrayShuffle([1, 2, 3, 4, 5]).toSorted()).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
