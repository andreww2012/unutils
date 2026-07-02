import {toSnakeCase} from '../../src/string/to-snake-case.ts';

declare const nonLiteralString: string;

describe('string/toSnakeCase', () => {
  it('types a string literal as the precise snake-cased literal', () => {
    expectTypeOf(toSnakeCase('fooBar')).toEqualTypeOf<'foo_bar'>();
    expectTypeOf(toSnakeCase('XMLHttpRequest')).toEqualTypeOf<'xml_http_request'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toSnakeCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
