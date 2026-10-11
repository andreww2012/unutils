import {isArray} from '../../src/predicate/is-array.ts';

describe('predicate/isArray', () => {
  it('narrows readonly arrays in both branches', () => {
    const value = 'a' as string | readonly string[];

    if (isArray(value)) {
      expectTypeOf(value).toEqualTypeOf<readonly string[]>();
    } else {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });

  it('keeps mutable arrays and tuples as they are', () => {
    const value = 1 as number | number[] | [1, 2] | readonly [3];

    if (isArray(value)) {
      expectTypeOf(value).toEqualTypeOf<number[] | [1, 2] | readonly [3]>();
    } else {
      expectTypeOf(value).toEqualTypeOf<number>();
    }
  });

  it('narrows `unknown` to a readonly array', () => {
    const value: unknown = [];

    if (isArray(value)) {
      expectTypeOf(value).toEqualTypeOf<readonly unknown[]>();
    }
  });
});
