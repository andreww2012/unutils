import {stringReverse} from '../../src/string/string-reverse.ts';

declare const nonLiteralString: string;

describe('string/stringReverse', () => {
  it('types a string literal as the precise reversed literal', () => {
    expectTypeOf(stringReverse('abc')).toEqualTypeOf<'cba'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(stringReverse(nonLiteralString)).toEqualTypeOf<string>();
  });
});
