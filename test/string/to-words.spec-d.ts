import {toWords} from '../../src/string/to-words.ts';

declare const nonLiteralString: string;

describe('string/toWords', () => {
  it('types a string literal as the precise tuple of word literals', () => {
    expectTypeOf(toWords('fooBarBaz')).toEqualTypeOf<['foo', 'Bar', 'Baz']>();
    expectTypeOf(toWords('XMLHttpRequest')).toEqualTypeOf<['XML', 'Http', 'Request']>();
  });

  it('widens a non-literal string to string[]', () => {
    expectTypeOf(toWords(nonLiteralString)).toEqualTypeOf<string[]>();
  });
});
