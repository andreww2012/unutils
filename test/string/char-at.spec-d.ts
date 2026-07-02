import {charAt} from '../../src/string/char-at.ts';

declare const nonLiteralString: string;

describe('string/charAt', () => {
  it('types the result as the precise character literal', () => {
    expectTypeOf(charAt('hello', 1)).toEqualTypeOf<'e'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(charAt(nonLiteralString, 1)).toEqualTypeOf<string>();
  });
});
