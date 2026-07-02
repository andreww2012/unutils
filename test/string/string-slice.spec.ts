import {stringSlice} from '../../src/string/string-slice.ts';

describe('string/stringSlice', () => {
  it('slices the string between the given indexes', () => {
    expect(stringSlice('hello world', 0, 5)).toBe('hello');
    expect(stringSlice('hello', -3)).toBe('llo');
  });
});
