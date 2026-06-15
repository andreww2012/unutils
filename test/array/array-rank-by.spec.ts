import {arrayRankBy} from '../../src/array/array-rank-by.ts';

describe('array/arrayRankBy', () => {
  it('returns how many elements sort before the item', () => {
    expect(arrayRankBy([5, 1, 3, 2], 3, (value) => value)).toBe(2);
  });

  it('works for an item not present in the array', () => {
    expect(arrayRankBy([5, 1, 3, 2], 4, (value) => value)).toBe(3);
  });

  it('respects a descending rule', () => {
    expect(arrayRankBy([5, 1, 3, 2], 3, [(value) => value, 'desc'])).toBe(1);
  });

  it('does not mutate the input', () => {
    const source = [5, 1, 3, 2];
    arrayRankBy(source, 3, (value) => value);

    expect(source).toStrictEqual([5, 1, 3, 2]);
  });
});
