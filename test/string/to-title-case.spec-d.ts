import {toTitleCase} from '../../src/string/to-title-case.ts';

declare const nonLiteralString: string;

describe('string/toTitleCase', () => {
  it('types a string literal as the precise title-cased literal', () => {
    expectTypeOf(toTitleCase('hello world')).toEqualTypeOf<'Hello World'>();
  });

  it('preserves consecutive uppercase in the type by default', () => {
    expectTypeOf(toTitleCase('XMLHttpRequest')).toEqualTypeOf<'XML Http Request'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toTitleCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
