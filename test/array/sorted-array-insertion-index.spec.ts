import {sortedArrayInsertionIndex} from '../../src/array/sorted-array-insertion-index.ts';

describe('array/sortedArrayInsertionIndex', () => {
  describe('leftmost (the default)', () => {
    it('returns the insertion point before any equal elements', () => {
      expect(sortedArrayInsertionIndex([10, 20, 30, 30, 40], 30)).toBe(2);
    });

    it('returns 0 for a value smaller than every element', () => {
      expect(sortedArrayInsertionIndex([10, 20, 30], 5)).toBe(0);
    });

    it('returns the length for a value larger than every element', () => {
      expect(sortedArrayInsertionIndex([10, 20, 30], 40)).toBe(3);
    });

    it('returns 0 for an empty array', () => {
      expect(sortedArrayInsertionIndex([], 1)).toBe(0);
    });

    it('orders strings lexicographically', () => {
      expect(sortedArrayInsertionIndex(['a', 'c', 'e'], 'd')).toBe(2);
    });
  });

  describe('rightmost', () => {
    it('returns the insertion point after any equal elements', () => {
      expect(sortedArrayInsertionIndex([10, 20, 30, 30, 40], 30, {rightmost: true})).toBe(4);
    });

    it('matches the leftmost result when there are no equal elements', () => {
      expect(sortedArrayInsertionIndex([10, 20, 40], 30, {rightmost: true})).toBe(2);
    });
  });

  describe('with an iteratee', () => {
    it('compares by the derived key', () => {
      expect(
        sortedArrayInsertionIndex(
          [{age: 20}, {age: 40}],
          {age: 30},
          {iteratee: (item) => item.age},
        ),
      ).toBe(1);
    });

    it('honors the rightmost flag alongside an iteratee', () => {
      const data = [{age: 20}, {age: 30}, {age: 30}, {age: 40}];

      expect(
        sortedArrayInsertionIndex(data, {age: 30}, {iteratee: (item) => item.age, rightmost: true}),
      ).toBe(3);
    });
  });
});
