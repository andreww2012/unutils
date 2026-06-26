import type {TupleToUnion} from '../../src/types/tuple-to-union.ts';

describe('types/TupleToUnion', () => {
  it('basic test', () => {
    expectTypeOf<TupleToUnion<[1, 2, 3]>>().toEqualTypeOf<1 | 2 | 3>();
  });
});
