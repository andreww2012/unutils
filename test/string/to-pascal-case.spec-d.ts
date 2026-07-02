import {toPascalCase} from '../../src/string/to-pascal-case.ts';

declare const nonLiteralString: string;

describe('string/toPascalCase', () => {
  it('types a string literal as the precise Pascal-cased literal', () => {
    expectTypeOf(toPascalCase('foo-bar')).toEqualTypeOf<'FooBar'>();
    expectTypeOf(toPascalCase('XMLHttpRequest')).toEqualTypeOf<'XmlHttpRequest'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toPascalCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
