import {stringReverse} from '../../src/string/string-reverse.ts';

describe('string/stringReverse', () => {
  it('basic test', () => {
    expect(stringReverse('abc')).toBe('cba');
  });
});
