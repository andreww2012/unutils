import type {EnsureNegativeInteger} from '../../src/types/ensure-negative-integer.ts';

describe('types/EnsureNegativeInteger', () => {
  it('basic test', () => {
    expectTypeOf<EnsureNegativeInteger<-1>>().toEqualTypeOf<-1>();
  });
});
