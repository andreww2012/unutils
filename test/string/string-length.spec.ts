import {stringLength} from '../../src/string/string-length.ts';

describe('string/stringLength', () => {
  it('returns the length of the string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('')).toBe(0);
  });
});
