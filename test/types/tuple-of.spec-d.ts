import type {TupleOf} from '../../src/types/tuple-of.ts';

describe('types/TupleOf', () => {
  it('basic test', () => {
    expectTypeOf<TupleOf<2, number>>().toEqualTypeOf<[number, number]>();
  });
});
