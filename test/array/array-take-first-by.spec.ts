import {arrayTakeFirstBy} from '../../src/array/array-take-first-by.ts';

const ascendingSorting = (a: number, b: number) => a - b;

describe('array/arrayTakeFirstBy', () => {
  it('takes the n smallest elements by the ordering (order unspecified)', () => {
    expect(
      // eslint-disable-next-line unicorn/no-array-sort -- own the array, sort in place
      arrayTakeFirstBy([3, 1, 4, 1, 5], 2, (value) => value).sort(ascendingSorting),
    ).toStrictEqual([1, 1]);
  });

  it('takes the n largest with a descending rule (order unspecified)', () => {
    expect(
      // eslint-disable-next-line unicorn/no-array-sort -- own the array, sort in place
      arrayTakeFirstBy([3, 1, 4, 1, 5], 2, [(value) => value, 'desc']).sort(ascendingSorting),
    ).toStrictEqual([4, 5]);
  });

  it('does not mutate the input', () => {
    const source = [3, 1, 2];
    arrayTakeFirstBy(source, 2, (value) => value);

    expect(source).toStrictEqual([3, 1, 2]);
  });
});
