import {stringLength} from '../../src/string/string-length.ts';

declare const nonLiteralString: string;

describe('string/stringLength', () => {
  it('types the result as the precise numeric literal', () => {
    expectTypeOf(stringLength('hello')).toEqualTypeOf<5>();
  });

  it('widens a non-literal string to number', () => {
    expectTypeOf(stringLength(nonLiteralString)).toEqualTypeOf<number>();
  });
});
