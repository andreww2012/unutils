import {toDelimiterCase} from '../../src/string/to-delimiter-case.ts';

describe('string/toDelimiterCase', () => {
  it('joins words with the delimiter, preserving case', () => {
    expect(toDelimiterCase('fooBar', '.')).toBe('foo.Bar');
    expect(toDelimiterCase('XMLHttpRequest', '/')).toBe('XML/Http/Request');
  });

  it('returns an empty string for word-less input', () => {
    expect(toDelimiterCase('', '.')).toBe('');
    expect(toDelimiterCase(' '.repeat(3), '.')).toBe('');
  });
});
