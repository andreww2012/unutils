import {startsWith} from '../../src/string/starts-with.ts';

declare const nonLiteralString: string;

describe('string/startsWith', () => {
  it('types the result as the precise boolean literal', () => {
    expectTypeOf(startsWith('hello', 'he')).toEqualTypeOf<true>();
    expectTypeOf(startsWith('hello', 'lo')).toEqualTypeOf<false>();
  });

  it('widens a non-literal string to boolean', () => {
    expectTypeOf(startsWith(nonLiteralString, 'he')).toEqualTypeOf<boolean>();
  });
});
