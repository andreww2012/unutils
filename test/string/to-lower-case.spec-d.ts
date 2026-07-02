import {toLowerCase} from '../../src/string/to-lower-case.ts';

declare const nonLiteralString: string;

describe('string/toLowerCase', () => {
  it('types a string literal as the precise space-joined lower-cased literal', () => {
    expectTypeOf(toLowerCase('fooBar')).toEqualTypeOf<'foo bar'>();
    expectTypeOf(toLowerCase('XMLHttpRequest')).toEqualTypeOf<'xml http request'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(toLowerCase(nonLiteralString)).toEqualTypeOf<string>();
  });
});
