import {arrayify} from '../../src/array/arrayify.ts';

describe('array/arrayify', () => {
  it('normalizes a `T | T[]` union to `T[]`', () => {
    const value = 1 as number | number[];
    expectTypeOf(arrayify(value)).toEqualTypeOf<number[]>();
  });

  it('normalizes a nullable `T | T[]` union to `T[]`', () => {
    const value = 1 as number | number[] | null | undefined;
    expectTypeOf(arrayify(value)).toEqualTypeOf<number[]>();
  });

  it('wraps a plain value as `T[]`', () => {
    expectTypeOf(arrayify(1)).toEqualTypeOf<number[]>();
  });

  it('preserves an existing tuple type', () => {
    expectTypeOf(arrayify([1, 2, 3] as const)).toEqualTypeOf<readonly [1, 2, 3]>();
  });

  it('normalizes a `T | T[]` union under `shouldWrapNullish`', () => {
    const value = 1 as number | number[];
    expectTypeOf(arrayify(value, true)).toEqualTypeOf<number[]>();
  });
});
