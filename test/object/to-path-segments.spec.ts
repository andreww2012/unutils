import {toPathSegments} from '../../src/object/to-path-segments.ts';

describe('object/toPathSegments', () => {
  it('parses a path string into segments, numeric ones as numbers', () => {
    expect(toPathSegments('a.b[0].c')).toStrictEqual(['a', 'b', 0, 'c']);
  });

  it('returns an array input as a shallow copy', () => {
    const input = ['a', 0, 'b'];
    const result = toPathSegments(input);

    expect(result).toStrictEqual(['a', 0, 'b']);
    expect(result).not.toBe(input);
  });
});
