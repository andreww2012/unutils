import {regexEscape} from '../../src/regex/regex-escape.ts';

describe('regex/regexEscape', () => {
  it('basic test', () => {
    expect(regexEscape('a.b*c')).toBe(String.raw`a\.b\*c`);
  });
});
