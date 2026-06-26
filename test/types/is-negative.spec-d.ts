import type {IsNegative} from '../../src/types/is-negative.ts';

describe('types/IsNegative', () => {
  it('basic test', () => {
    expectTypeOf<IsNegative<-1>>().toEqualTypeOf<true>();
  });
});
