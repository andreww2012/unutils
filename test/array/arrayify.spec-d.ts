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

  describe('union mixing arrays with other values', () => {
    type Value = 'a' | ['b', {c: number}];

    it('keeps the array members and wraps the others one by one', () => {
      const value = 'a' as Value;
      expectTypeOf(arrayify(value)).toEqualTypeOf<['a'] | ['b', {c: number}]>();
    });

    it('lets a destructured element keep its own type', () => {
      const [name, options] = arrayify('a' as Value);
      expectTypeOf(name).toEqualTypeOf<'a' | 'b'>();
      expectTypeOf(options).toEqualTypeOf<{c: number} | undefined>();
    });

    it('adds an empty array for nullish members', () => {
      const value = 'a' as Value | null | undefined;
      expectTypeOf(arrayify(value)).toEqualTypeOf<[] | ['a'] | ['b', {c: number}]>();
    });

    it('wraps nullish members under `shouldWrapNullish`', () => {
      const value = 'a' as Value | null;
      expectTypeOf(arrayify(value, true)).toEqualTypeOf<[null] | ['a'] | ['b', {c: number}]>();
    });
  });
});
