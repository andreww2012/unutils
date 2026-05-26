import {flatMap} from '../../src/array/flat-map.ts';

describe('array/flatMap', () => {
  it('deeply flattens when depth is omitted', () => {
    expect(flatMap([[1, [2]], [[3]]], (item) => item)).toStrictEqual([1, 2, 3]);
  });

  it('flattens one level when depth is 1', () => {
    expect(flatMap([1, 2, 3], (n) => [[n, n]], 1)).toStrictEqual([
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
  });

  it('flattens two levels when depth is 2', () => {
    expect(flatMap([1, 2], (n) => [[[n, n]]], 2)).toStrictEqual([
      [1, 1],
      [2, 2],
    ]);
  });

  it('does not flatten when depth is 0', () => {
    expect(flatMap([1, 2], (n) => [n, n], 0)).toStrictEqual([
      [1, 1],
      [2, 2],
    ]);
  });

  it('deeply flattens when depth is Infinity', () => {
    expect(flatMap([[1, [2, [3, [4]]]]], (item) => item, Number.POSITIVE_INFINITY)).toStrictEqual([
      1, 2, 3, 4,
    ]);
  });

  it('passes (item, index, array) to the iteratee', () => {
    const source = ['a', 'b', 'c'];
    const calls: [string, number, readonly string[]][] = [];

    flatMap(source, (item, index, array) => {
      calls.push([item, index, array]);
      return [item];
    });

    expect(calls).toStrictEqual([
      ['a', 0, source],
      ['b', 1, source],
      ['c', 2, source],
    ]);
  });

  it('preserves non-array values returned by the iteratee', () => {
    expect(flatMap([1, 2, 3], (n) => (n % 2 === 0 ? n : [n, n]))).toStrictEqual([1, 1, 2, 3, 3]);
  });

  it('returns an empty array for an empty input', () => {
    expect(flatMap([], (item) => [item])).toStrictEqual([]);
  });

  it('treats negative depth as no flattening (native flat semantics)', () => {
    expect(flatMap([1, 2], (n) => [n, n], -1)).toStrictEqual([
      [1, 1],
      [2, 2],
    ]);
  });
});
