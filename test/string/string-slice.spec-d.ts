import {stringSlice} from '../../src/string/string-slice.ts';

declare const nonLiteralString: string;

describe('string/stringSlice', () => {
  it('types the result as the precise sliced literal', () => {
    expectTypeOf(stringSlice('hello world', 0, 5)).toEqualTypeOf<'hello'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(stringSlice(nonLiteralString, 0, 5)).toEqualTypeOf<string>();
  });
});
