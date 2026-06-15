import {arraySplit} from '../../src/array/array-split.ts';

describe('array/arraySplit', () => {
  it('splits a tuple at a literal index into exact sub-tuples', () => {
    expectTypeOf(arraySplit(['a', 1, true, 'b'] as const, 2)).toEqualTypeOf<
      [['a', 1], [true, 'b']]
    >();
  });

  it('supports a negative literal index, counting from the end', () => {
    expectTypeOf(arraySplit(['a', 1, true, 'b'] as const, -1)).toEqualTypeOf<
      [['a', 1, true], ['b']]
    >();
  });

  it('falls back to element arrays for a non-literal index', () => {
    expectTypeOf(arraySplit(['a', 1, true, 'b'] as const, 2 as number)).toEqualTypeOf<
      [('a' | 1 | true | 'b')[], ('a' | 1 | true | 'b')[]]
    >();
  });

  it('falls back to element arrays for the predicate form', () => {
    expectTypeOf(arraySplit([1, 2, 3], (value) => value > 2)).toEqualTypeOf<[number[], number[]]>();
  });
});
