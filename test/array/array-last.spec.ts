import {arrayLast} from '../../src/array/array-last.ts';

describe('array/arrayLast', () => {
  it('basic test', () => {
    const empty: string[] = [];

    expect(arrayLast(['a', 'b', 'c'])).toBe('c');
    expect(arrayLast(empty)).toBeUndefined();
  });
});
