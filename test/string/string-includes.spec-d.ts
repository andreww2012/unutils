import {stringIncludes} from '../../src/string/string-includes.ts';

declare const nonLiteralString: string;

describe('string/stringIncludes', () => {
  it('types the result as the precise boolean literal', () => {
    expectTypeOf(stringIncludes('hello', 'ell')).toEqualTypeOf<true>();
    expectTypeOf(stringIncludes('hello', 'xyz')).toEqualTypeOf<false>();
  });

  it('widens a non-literal string to boolean', () => {
    expectTypeOf(stringIncludes(nonLiteralString, 'ell')).toEqualTypeOf<boolean>();
  });
});
