import {arrayIncludes} from '../../src/array/array-includes.ts';

describe('array/arrayIncludes', () => {
  it('basic test', () => {
    expect(arrayIncludes(['a', 'b', 'c'], 'a')).toBe(true);
    expect(arrayIncludes(['a', 'b', 'c'], 'z')).toBe(false);
  });
});
