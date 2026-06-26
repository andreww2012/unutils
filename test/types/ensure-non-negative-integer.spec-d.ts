import type {EnsureNonNegativeInteger} from '../../src/types/ensure-non-negative-integer.ts';

describe('types/EnsureNonNegativeInteger', () => {
  it('basic test', () => {
    expectTypeOf<EnsureNonNegativeInteger<1>>().toEqualTypeOf<1>();
  });
});
