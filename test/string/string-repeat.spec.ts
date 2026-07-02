// cspell:ignore ababab
import {stringRepeat} from '../../src/string/string-repeat.ts';

describe('string/stringRepeat', () => {
  it('repeats the string the given number of times', () => {
    expect(stringRepeat('ab', 3)).toBe('ababab');
    expect(stringRepeat('ab', 0)).toBe('');
  });
});
