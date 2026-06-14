import {toForwardSlashes} from '../../src/string/to-forward-slashes.ts';

describe('string/toForwardSlashes', () => {
  it('basic test', () => {
    expect(toForwardSlashes(String.raw`a\b\c`)).toBe('a/b/c');
  });
});
