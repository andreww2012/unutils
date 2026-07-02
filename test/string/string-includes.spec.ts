import {stringIncludes} from '../../src/string/string-includes.ts';

describe('string/stringIncludes', () => {
  it('reports whether the string contains the search value', () => {
    expect(stringIncludes('hello', 'ell')).toBe(true);
    expect(stringIncludes('hello', 'xyz')).toBe(false);
  });
});
