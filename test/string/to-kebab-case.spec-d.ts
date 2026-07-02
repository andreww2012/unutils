import {toKebabCase} from '../../src/string/to-kebab-case.ts';

declare const nonLiteralString: string;

describe('string/toKebabCase', () => {
  it('types a string literal as the precise kebab-cased literal', () => {
    expectTypeOf(toKebabCase('fooBar')).toEqualTypeOf<'foo-bar'>();
    expectTypeOf(toKebabCase('XMLHttpRequest')).toEqualTypeOf<'xml-http-request'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toKebabCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
