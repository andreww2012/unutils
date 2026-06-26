import type {Sum} from '../../src/types/sum.ts';

describe('types/Sum', () => {
  it('basic test', () => {
    expectTypeOf<Sum<2, 3>>().toEqualTypeOf<5>();
  });
});
