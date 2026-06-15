import {arrayDropFirstBy} from '../../src/array/array-drop-first-by.ts';

const ascendingSorting = (a: number, b: number) => a - b;

describe('array/arrayDropFirstBy', () => {
  it('drops the n smallest elements, keeping the rest (order unspecified)', () => {
    expect(
      // eslint-disable-next-line unicorn/no-array-sort -- own the array, sort in place
      arrayDropFirstBy([3, 1, 4, 1, 5], 2, (value) => value).sort(ascendingSorting),
    ).toStrictEqual([3, 4, 5]);
  });

  it('drops the n largest with a descending rule (order unspecified)', () => {
    expect(
      // eslint-disable-next-line unicorn/no-array-sort -- own the array, sort in place
      arrayDropFirstBy([3, 1, 4, 1, 5], 2, [(value) => value, 'desc']).sort(ascendingSorting),
    ).toStrictEqual([1, 1, 3]);
  });

  it('does not mutate the input', () => {
    const source = [3, 1, 2];
    arrayDropFirstBy(source, 2, (value) => value);

    expect(source).toStrictEqual([3, 1, 2]);
  });
});
