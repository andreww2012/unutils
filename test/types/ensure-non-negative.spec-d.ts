import type {EnsureNonNegative} from '../../src/types/ensure-non-negative.ts';

describe('types/EnsureNonNegative', () => {
  it('basic test', () => {
    expectTypeOf<EnsureNonNegative<1>>().toEqualTypeOf<1>();
  });
});
