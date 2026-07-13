import type {StringLength} from '../../src/types/string-length.ts';

describe('types/StringLength', () => {
  it('returns the length of a string literal', () => {
    expectTypeOf<StringLength<'abcde'>>().toEqualTypeOf<5>();
  });

  it('distributes over a union of string literals', () => {
    expectTypeOf<StringLength<'abcde' | 'fgh'>>().toEqualTypeOf<3 | 5>();
  });

  it('widens to number for a non-literal string', () => {
    expectTypeOf<StringLength<string>>().toEqualTypeOf<number>();
  });
});
