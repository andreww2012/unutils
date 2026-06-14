import {arrayMap} from '../../src/array/array-map.ts';

describe('array/arrayMap', () => {
  it('maps each element through the callback', () => {
    expect(arrayMap([1, 2, 3], (value) => value * 2)).toStrictEqual([2, 4, 6]);
  });

  it('passes the value, index, and source array to the callback', () => {
    const source = [10, 20, 30];
    const calls: [number, number, readonly number[]][] = [];

    arrayMap(source, (value, index, array) => {
      calls.push([value, index, array]);
      return value;
    });

    expect(calls).toStrictEqual([
      [10, 0, source],
      [20, 1, source],
      [30, 2, source],
    ]);
  });

  it('returns a new array (does not mutate the input)', () => {
    const source = [1, 2, 3];
    const result = arrayMap(source, (value) => value);

    expect(result).not.toBe(source);
    expect(source).toStrictEqual([1, 2, 3]);
  });

  it('returns an empty array for an empty input', () => {
    expect(arrayMap([], (value) => value)).toStrictEqual([]);
  });
});
