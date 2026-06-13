import {arrayFirst} from '../../src/array/array-first.ts';

describe('array/arrayFirst', () => {
  it('basic test', () => {
    const empty: string[] = [];

    expect(arrayFirst(['a', 'b', 'c'])).toBe('a');
    expect(arrayFirst(empty)).toBeUndefined();
  });
});
