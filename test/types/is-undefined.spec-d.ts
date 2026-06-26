import type {IsUndefined} from '../../src/types/is-undefined.ts';

describe('types/IsUndefined', () => {
  it('basic test', () => {
    expectTypeOf<IsUndefined<undefined>>().toEqualTypeOf<true>();
  });
});
