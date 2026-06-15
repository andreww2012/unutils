import {sortedArrayInsertionIndexWith} from '../../src/array/sorted-array-insertion-index-with.ts';

describe('array/sortedArrayInsertionIndexWith', () => {
  it('returns the first index where the predicate becomes false', () => {
    expect(sortedArrayInsertionIndexWith([1, 2, 2, 3], (value) => value < 2)).toBe(1);
  });

  it('returns 0 when the predicate is false for every element', () => {
    expect(sortedArrayInsertionIndexWith([1, 2, 3], (value) => value < 0)).toBe(0);
  });

  it('returns the length when the predicate is true for every element', () => {
    expect(sortedArrayInsertionIndexWith([1, 2, 3], (value) => value < 10)).toBe(3);
  });

  it('locates a boundary by a derived key', () => {
    expect(
      sortedArrayInsertionIndexWith([{age: 10}, {age: 20}, {age: 30}], (item) => item.age < 25),
    ).toBe(2);
  });
});
