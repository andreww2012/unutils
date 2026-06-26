import type {MaybeArray} from '../../src/types/maybe-array.ts';

describe('types/MaybeArray', () => {
  it('basic test', () => {
    expectTypeOf<MaybeArray<number>>().toEqualTypeOf<number | number[]>();
  });
});
