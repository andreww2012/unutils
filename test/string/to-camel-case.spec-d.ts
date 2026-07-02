import {toCamelCase} from '../../src/string/to-camel-case.ts';

declare const nonLiteralString: string;

describe('string/toCamelCase', () => {
  it('types a string literal as the precise camel-cased literal', () => {
    expectTypeOf(toCamelCase('foo-bar')).toEqualTypeOf<'fooBar'>();
    expectTypeOf(toCamelCase('XMLHttpRequest')).toEqualTypeOf<'xmlHttpRequest'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toCamelCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
