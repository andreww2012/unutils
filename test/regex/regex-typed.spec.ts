import {regexTyped} from '../../src/regex/regex-typed.ts';

describe('regex/regexTyped', () => {
  it('basic test', () => {
    const pattern = regexTyped('^a.c$', 'i');
    const matching = 'abc' as string;
    const nonMatching = 'xyz' as string;

    expect(pattern).toBeInstanceOf(RegExp);
    expect(pattern.flags).toBe('i');
    expect(pattern.test(matching)).toBe(true);
    expect(pattern.test(nonMatching)).toBe(false);
  });
});
