import {isArray} from '../../src/predicate/is-array.ts';

describe('predicate/isArray', () => {
  it('basic test', () => {
    const arrays: unknown[] = [[], Object.freeze([1, 2])];
    const nonArrays: unknown[] = ['abc', {length: 0}, new Set([1]), new Uint8Array(1)];

    expect(arrays.every(isArray)).toBe(true);
    expect(nonArrays.some(isArray)).toBe(false);
  });
});
