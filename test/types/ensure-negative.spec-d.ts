import type {EnsureNegative} from '../../src/types/ensure-negative.ts';

describe('types/EnsureNegative', () => {
  it('basic test', () => {
    expectTypeOf<EnsureNegative<-1>>().toEqualTypeOf<-1>();
  });
});
