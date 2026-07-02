import {stringConcat} from '../../src/string/string-concat.ts';

describe('string/stringConcat', () => {
  it('concatenates the given strings', () => {
    expect(stringConcat('a', 'b', 'c')).toBe('abc');
  });
});
