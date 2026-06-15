import {arrayNthBy} from '../../src/array/array-nth-by.ts';

describe('array/arrayNthBy', () => {
  it('returns the element at the given sorted position', () => {
    expect(arrayNthBy([3, 1, 2], 1, (value) => value)).toBe(2);
  });

  it('respects a descending rule', () => {
    expect(arrayNthBy([3, 1, 2], 0, [(value) => value, 'desc'])).toBe(3);
  });

  it('returns undefined when the index is out of bounds', () => {
    expect(arrayNthBy([3, 1, 2], 9, (value) => value)).toBeUndefined();
  });

  it('does not mutate the input', () => {
    const source = [3, 1, 2];
    arrayNthBy(source, 0, (value) => value);

    expect(source).toStrictEqual([3, 1, 2]);
  });
});
