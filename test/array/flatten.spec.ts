import {flatten} from '../../src/array/flatten.ts';

describe('array/flatten', () => {
  it('deeply flattens when depth is omitted', () => {
    expect(flatten([1, [2, [3, [4]]]])).toStrictEqual([1, 2, 3, 4]);
  });

  it('flattens one level when depth is 1', () => {
    expect(flatten([1, [2, [3, [4]]]], 1)).toStrictEqual([1, 2, [3, [4]]]);
  });

  it('flattens two levels when depth is 2', () => {
    expect(flatten([1, [2, [3, [4]]]], 2)).toStrictEqual([1, 2, 3, [4]]);
  });

  it('returns a shallow copy when depth is 0', () => {
    const input = [1, [2, 3]];
    const result = flatten(input, 0);

    expect(result).toStrictEqual([1, [2, 3]]);
    expect(result).not.toBe(input);
  });

  it('deeply flattens when depth is Infinity', () => {
    expect(flatten([1, [2, [3, [4]]]], Number.POSITIVE_INFINITY)).toStrictEqual([1, 2, 3, 4]);
  });

  it('returns an empty array for an empty input', () => {
    expect(flatten([])).toStrictEqual([]);
  });

  it('preserves non-array values', () => {
    expect(flatten([1, [2, 'x'], [{id: 3}, [null]]])).toStrictEqual([1, 2, 'x', {id: 3}, null]);
  });

  it('treats negative depth as no flattening (native flat semantics)', () => {
    expect(flatten([1, [2, 3]], -1)).toStrictEqual([1, [2, 3]]);
  });
});
