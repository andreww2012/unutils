import type {IsUnknown} from '../../src/types/is-unknown.ts';

describe('types/IsUnknown', () => {
  it('basic test', () => {
    expectTypeOf<IsUnknown<unknown>>().toEqualTypeOf<true>();
  });
});
