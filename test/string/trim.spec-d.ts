import {trim} from '../../src/string/trim.ts';

declare const nonLiteralString: string;

describe('string/trim', () => {
  it('types the result as the precise trimmed literal', () => {
    expectTypeOf(trim(' x ')).toEqualTypeOf<'x'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(trim(nonLiteralString)).toEqualTypeOf<string>();
  });
});
