import type {Or} from '../../src/types/or.ts';

describe('types/Or', () => {
  it('basic test', () => {
    expectTypeOf<Or<false, true>>().toEqualTypeOf<true>();
  });
});
