import {escapeRegExp} from '../../src/string/escape-regexp.ts';

describe('string/escapeRegExp', () => {
  it('basic test', () => {
    expect(escapeRegExp('a.b*c')).toBe(String.raw`a\.b\*c`);
  });
});
