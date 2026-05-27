import {stringPad} from '../../src/string/string-pad.ts';

describe('string/stringPad', () => {
  it('basic test', () => {
    expect(stringPad('abc', 7, '*')).toBe('**abc**');
    expect(stringPad('abc', 8, '_-')).toBe('_-abc_-_');
  });
});
