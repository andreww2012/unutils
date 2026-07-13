import type {StringToArray} from '../../src/types/string-to-array.ts';

describe('types/StringToArray', () => {
  it('splits a string literal into a tuple of its characters', () => {
    expectTypeOf<StringToArray<'abc'>>().toEqualTypeOf<['a', 'b', 'c']>();
  });

  it('returns an empty tuple for an empty string', () => {
    expectTypeOf<StringToArray<''>>().toEqualTypeOf<[]>();
  });

  it('preserves literal parts around a non-literal segment', () => {
    expectTypeOf<StringToArray<`foo${string}bar`>>().toEqualTypeOf<
      ['f', 'o', 'o', ...string[], 'b', 'a', 'r']
    >();
  });
});
