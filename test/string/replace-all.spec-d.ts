import {replaceAll} from '../../src/string/replace-all.ts';

declare const nonLiteralString: string;

describe('string/replaceAll', () => {
  it('types the result as the precise replaced literal', () => {
    expectTypeOf(replaceAll('a-b-c', '-', '+')).toEqualTypeOf<'a+b+c'>();
  });

  it('widens a non-literal string to string', () => {
    expectTypeOf(replaceAll(nonLiteralString, '-', '+')).toEqualTypeOf<string>();
  });
});
