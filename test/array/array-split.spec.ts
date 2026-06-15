import {arraySplit} from '../../src/array/array-split.ts';

describe('array/arraySplit', () => {
  it('splits at a positive index', () => {
    expect(arraySplit([1, 2, 3, 4, 5], 2)).toStrictEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });

  it('splits at a negative index, counting from the end', () => {
    expect(arraySplit([1, 2, 3, 4, 5], -2)).toStrictEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  it('returns the whole array as the first part when the index is past the end', () => {
    expect(arraySplit([1, 2, 3], 10)).toStrictEqual([[1, 2, 3], []]);
  });

  it('splits at the first element matching the predicate', () => {
    expect(arraySplit([1, 2, 3, 4, 1], (value) => value > 2)).toStrictEqual([
      [1, 2],
      [3, 4, 1],
    ]);
  });

  it('passes the value, index, and source array to the predicate', () => {
    const source = [10, 20];
    const calls: [number, number, readonly number[]][] = [];

    arraySplit(source, (value, index, array) => {
      calls.push([value, index, array]);
      return false;
    });

    expect(calls).toStrictEqual([
      [10, 0, source],
      [20, 1, source],
    ]);
  });

  it('puts everything in the first part when the predicate never matches', () => {
    expect(arraySplit([1, 2, 3], (value) => value > 10)).toStrictEqual([[1, 2, 3], []]);
  });

  it('does not mutate the input', () => {
    const source = [1, 2, 3];
    arraySplit(source, 1);

    expect(source).toStrictEqual([1, 2, 3]);
  });
});
