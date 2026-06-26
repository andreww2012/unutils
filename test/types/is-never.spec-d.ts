import type {IsNever} from '../../src/types/is-never.ts';

describe('types/IsNever', () => {
  it('basic test', () => {
    expectTypeOf<IsNever<never>>().toEqualTypeOf<true>();
  });
});
