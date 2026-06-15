import {arrayReverse} from '../../src/array/array-reverse.ts';

describe('array/arrayReverse', () => {
  it('preserves the tuple structure, reversing element types', () => {
    expectTypeOf(arrayReverse([1, 'a', true] as const)).toEqualTypeOf<readonly [true, 'a', 1]>();
  });

  it('reverses a regular array to the same element array type', () => {
    expectTypeOf(arrayReverse([1, 2, 3])).toEqualTypeOf<number[]>();
  });
});
