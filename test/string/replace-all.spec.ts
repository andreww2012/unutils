import {replaceAll} from '../../src/string/replace-all.ts';

describe('string/replaceAll', () => {
  it('replaces every occurrence of the search value', () => {
    expect(replaceAll('a-b-c', '-', '+')).toBe('a+b+c');
  });
});
