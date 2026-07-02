import {endsWith} from '../../src/string/ends-with.ts';

describe('string/endsWith', () => {
  it('reports whether the string ends with the search value', () => {
    expect(endsWith('hello', 'lo')).toBe(true);
    expect(endsWith('hello', 'he')).toBe(false);
  });
});
