import {arraySort} from '../../src/array/array-sort.ts';

const ascending = (a: number, b: number) => a - b;

describe('array/arraySort', () => {
  it('sorts the elements by the comparator', () => {
    expect(arraySort([4, 2, 7, 5], ascending)).toStrictEqual([2, 4, 5, 7]);
  });

  it('does not mutate the input', () => {
    const source = [3, 1, 2];
    arraySort(source, ascending);

    expect(source).toStrictEqual([3, 1, 2]);
  });
});
