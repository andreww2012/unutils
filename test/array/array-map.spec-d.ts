import {arrayMap} from '../../src/array/array-map.ts';

describe('array/arrayMap', () => {
  it('preserves the tuple length in the return type', () => {
    expectTypeOf(arrayMap(['a', 'b', 'c'] as const, (value) => value.toUpperCase())).toEqualTypeOf<
      [string, string, string]
    >();
  });

  it('widens a regular array to `U[]`', () => {
    expectTypeOf(arrayMap([1, 2, 3], String)).toEqualTypeOf<string[]>();
  });

  it('types the callback value as the element type', () => {
    arrayMap(['a', 1, true] as const, (value) => {
      expectTypeOf(value).toEqualTypeOf<'a' | 1 | true>();
      return value;
    });
  });
});
