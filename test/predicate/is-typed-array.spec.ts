import {isTypedArray} from '../../src/predicate/is-typed-array.ts';

describe('predicate/isTypedArray', () => {
  it('basic test', () => {
    const typed: unknown = new Uint8Array([1, 2, 3]);

    expect(isTypedArray(typed)).toBe(true);
    expect(isTypedArray([1, 2, 3])).toBe(false);
    expect(isTypedArray(new ArrayBuffer(8))).toBe(false);
  });
});
