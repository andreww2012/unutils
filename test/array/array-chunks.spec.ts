import {arrayChunks} from '../../src/array/array-chunks.ts';

describe('array/arrayChunks', () => {
  it('basic test', () => {
    expect(arrayChunks([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
  });
});
