import {toPathSegments} from '../../src/object/to-path-segments.ts';

describe('object/toPathSegments', () => {
  it('parses a literal path string into a precisely-typed tuple', () => {
    expectTypeOf(toPathSegments('a.b[0].c')).toEqualTypeOf<['a', 'b', 0, 'c']>();
  });

  it('returns an array input as its own tuple type', () => {
    expectTypeOf(toPathSegments(['a', 0, 'b'] as const)).toEqualTypeOf<readonly ['a', 0, 'b']>();
  });
});
