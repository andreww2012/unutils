import {toUpperCase} from '../../src/string/to-upper-case.ts';

declare const nonLiteralString: string;

describe('string/toUpperCase', () => {
  it('types a string literal as the precise space-joined upper-cased literal', () => {
    expectTypeOf(toUpperCase('fooBar')).toEqualTypeOf<'FOO BAR'>();
    expectTypeOf(toUpperCase('XMLHttpRequest')).toEqualTypeOf<'XML HTTP REQUEST'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toUpperCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
