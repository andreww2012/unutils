import {arrayFirstBy} from '../../src/array/array-first-by.ts';

describe('array/arrayFirstBy', () => {
  it('includes `undefined` for a regular (possibly empty) array', () => {
    expectTypeOf(arrayFirstBy([1, 2, 3], (value) => value)).toEqualTypeOf<number | undefined>();
  });

  it('omits `undefined` for a non-empty tuple', () => {
    expectTypeOf(arrayFirstBy([1, 2, 3] as const, (value) => value)).toEqualTypeOf<1 | 2 | 3>();
  });

  it('types the projected item', () => {
    arrayFirstBy(['a', 'b'] as const, (word) => {
      expectTypeOf(word).toEqualTypeOf<'a' | 'b'>();
      return word;
    });
  });
});
