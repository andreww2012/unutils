import type {AbsoluteValue} from '../../src/types/absolute-value.ts';

describe('types/AbsoluteValue', () => {
  it('basic test', () => {
    expectTypeOf<AbsoluteValue<-5>>().toEqualTypeOf<5>();
  });
});
