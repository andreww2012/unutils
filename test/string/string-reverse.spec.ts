import {stringReverse} from '../../src/string/string-reverse.ts';

describe('string/stringReverse', () => {
  it('basic test', () => {
    expect(stringReverse('abc')).toBe('cba');
  });

  it('reverses by grapheme, keeping multi-code-unit characters intact', () => {
    expect(stringReverse('ab👍')).toBe('👍ba');
  });
});
