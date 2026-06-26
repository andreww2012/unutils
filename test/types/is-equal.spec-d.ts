import type {IsEqual} from '../../src/types/is-equal.ts';

describe('types/IsEqual', () => {
  it('basic test', () => {
    expectTypeOf<IsEqual<1, 1>>().toEqualTypeOf<true>();
    expectTypeOf<IsEqual<1, 2>>().toEqualTypeOf<false>();
  });
});
