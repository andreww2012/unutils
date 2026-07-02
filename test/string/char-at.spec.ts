import {charAt} from '../../src/string/char-at.ts';

describe('string/charAt', () => {
  it('returns the character at the given index', () => {
    expect(charAt('hello', 1)).toBe('e');
  });
});
