import {replace} from '../../src/string/replace.ts';

describe('string/replace', () => {
  it('replaces the first occurrence of the search value', () => {
    expect(replace('a-b-c', '-', '+')).toBe('a+b-c');
  });
});
