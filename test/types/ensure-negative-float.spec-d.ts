import type {EnsureNegativeFloat} from '../../src/types/ensure-negative-float.ts';

describe('types/EnsureNegativeFloat', () => {
  it('basic test', () => {
    expectTypeOf<EnsureNegativeFloat<-1.5>>().toEqualTypeOf<-1.5>();
  });
});
