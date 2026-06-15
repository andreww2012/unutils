import {arrayNthBy} from '../../src/array/array-nth-by.ts';

describe('array/arrayNthBy', () => {
  it('returns the element type or undefined', () => {
    expectTypeOf(arrayNthBy([1, 2, 3], 0, (value) => value)).toEqualTypeOf<number | undefined>();
  });

  it('types the projected item', () => {
    arrayNthBy(['a', 'b'] as const, 0, (word) => {
      expectTypeOf(word).toEqualTypeOf<'a' | 'b'>();
      return word;
    });
  });
});
