import type {IsUnion} from '../../src/types/is-union.ts';

describe('types/IsUnion', () => {
  it('basic test', () => {
    expectTypeOf<IsUnion<1 | 2>>().toEqualTypeOf<true>();
  });
});
