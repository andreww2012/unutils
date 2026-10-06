import {iterableCartesianProduct} from '../../src/iterable/iterable-cartesian-product.ts';

describe('iterable/iterableCartesianProduct', () => {
  it('infers the tuple type', () => {
    expectTypeOf(iterableCartesianProduct([1], new Set(['a']))).toEqualTypeOf<
      IteratorObject<[number, string], undefined>
    >();
  });
});
