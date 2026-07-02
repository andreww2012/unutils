import {endsWith} from '../../src/string/ends-with.ts';

declare const nonLiteralString: string;

describe('string/endsWith', () => {
  it('types the result as the precise boolean literal', () => {
    expectTypeOf(endsWith('hello', 'lo')).toEqualTypeOf<true>();
    expectTypeOf(endsWith('hello', 'he')).toEqualTypeOf<false>();
  });

  it('widens a non-literal string to boolean', () => {
    expectTypeOf(endsWith(nonLiteralString, 'lo')).toEqualTypeOf<boolean>();
  });
});
