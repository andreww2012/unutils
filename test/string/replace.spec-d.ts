import {replace} from '../../src/string/replace.ts';

declare const nonLiteralString: string;

describe('string/replace', () => {
  it('types the result as the precise replaced literal', () => {
    expectTypeOf(replace('a-b-c', '-', '+')).toEqualTypeOf<'a+b-c'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(replace(nonLiteralString, '-', '+')).toEqualTypeOf<string>();
  });
});
