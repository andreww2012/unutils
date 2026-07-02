import {toDelimiterCase} from '../../src/string/to-delimiter-case.ts';

declare const nonLiteralString: string;

describe('string/toDelimiterCase', () => {
  it('types literal inputs as the precise delimited literal', () => {
    expectTypeOf(toDelimiterCase('fooBar', '.')).toEqualTypeOf<'foo.Bar'>();
    expectTypeOf(toDelimiterCase('XMLHttpRequest', '/')).toEqualTypeOf<'XML/Http/Request'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toDelimiterCase(nonLiteralString, '.')).toEqualTypeOf<string>();
  });
});
