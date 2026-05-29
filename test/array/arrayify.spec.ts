import {arrayify} from '../../src/array/arrayify.ts';

describe('array/arrayify', () => {
  it('wraps a non-array value in a single-element array', () => {
    expect(arrayify(1)).toStrictEqual([1]);
  });

  it('wraps a string rather than spreading its characters', () => {
    expect(arrayify('ab')).toStrictEqual(['ab']);
  });

  it('returns an existing array untouched (same reference)', () => {
    const input = [1, 2, 3];

    expect(arrayify(input)).toBe(input);
  });

  it('wraps rather than converts an iterable', () => {
    const set = new Set([1, 2, 3]);

    expect(arrayify(set)).toStrictEqual([set]);
  });

  it('returns an empty array for `undefined`', () => {
    expect(arrayify(undefined)).toStrictEqual([]);
  });

  it('returns an empty array for `null`', () => {
    expect(arrayify(null)).toStrictEqual([]);
  });

  it('returns an empty array untouched', () => {
    const input: number[] = [];

    expect(arrayify(input)).toBe(input);
  });

  it('returns a nullable array as-is rather than wrapping it', () => {
    const input = [1, 2, 3] as number[] | undefined;
    const result = arrayify(input);

    expect(result).toStrictEqual([1, 2, 3]);
  });
});
