import {iterablePartition} from '../../src/iterable/iterable-partition.ts';

describe('iterable/iterablePartition', () => {
  it('splits into matched and unmatched elements', () => {
    expect(iterablePartition(new Set([1, 2, 3, 4]), (value) => value % 2 === 0)).toStrictEqual([
      [2, 4],
      [1, 3],
    ]);
  });
});
