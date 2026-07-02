import {toConstantCase} from '../../src/string/to-constant-case.ts';

declare const nonLiteralString: string;

describe('string/toConstantCase', () => {
  it('types a string literal as the precise constant-cased literal', () => {
    expectTypeOf(toConstantCase('fooBar')).toEqualTypeOf<'FOO_BAR'>();
    expectTypeOf(toConstantCase('XMLHttpRequest')).toEqualTypeOf<'XML_HTTP_REQUEST'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toConstantCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
