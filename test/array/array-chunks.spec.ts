import {arrayChunks} from '../../src/array/array-chunks.ts';

describe('array/arrayChunks', () => {
  describe('by size', () => {
    it('splits into consecutive fixed-size chunks', () => {
      expect(arrayChunks([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
    });

    it('returns a single chunk when the size covers the whole array', () => {
      expect(arrayChunks([1, 2, 3], 5)).toStrictEqual([[1, 2, 3]]);
    });

    it('returns an empty array for an empty input', () => {
      expect(arrayChunks([], 2)).toStrictEqual([]);
    });

    it('throws for a non-positive-integer size', () => {
      expect(() => arrayChunks([1, 2, 3], 0)).toThrow();
    });
  });

  describe('by iteratee', () => {
    it('groups runs of consecutive same-key elements', () => {
      expect(arrayChunks([1, 1, 2, 3, 3], (value) => value)).toStrictEqual([[1, 1], [2], [3, 3]]);
    });

    it('starts a new chunk whenever the derived key changes', () => {
      expect(
        arrayChunks([{type: 'a'}, {type: 'a'}, {type: 'b'}, {type: 'a'}], (item) => item.type),
      ).toStrictEqual([[{type: 'a'}, {type: 'a'}], [{type: 'b'}], [{type: 'a'}]]);
    });

    it('returns an empty array for an empty input', () => {
      expect(arrayChunks([], (value) => value)).toStrictEqual([]);
    });
  });
});
