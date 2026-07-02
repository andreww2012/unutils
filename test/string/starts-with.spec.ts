import {startsWith} from '../../src/string/starts-with.ts';

describe('string/startsWith', () => {
  it('reports whether the string starts with the search value', () => {
    expect(startsWith('hello', 'he')).toBe(true);
    expect(startsWith('hello', 'lo')).toBe(false);
  });
});
