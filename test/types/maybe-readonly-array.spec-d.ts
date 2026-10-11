import type {MaybeReadonlyArray} from '../../src/types/maybe-readonly-array.ts';

describe('types/MaybeReadonlyArray', () => {
  it('basic test', () => {
    expectTypeOf<MaybeReadonlyArray<number>>().toEqualTypeOf<number | readonly number[]>();
  });

  it('accepts mutable and readonly arrays', () => {
    expectTypeOf([1, 2]).toExtend<MaybeReadonlyArray<number>>();
    expectTypeOf([1, 2] as const).toExtend<MaybeReadonlyArray<number>>();
  });
});
