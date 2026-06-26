import type {GreaterThanOrEqual} from '../../src/types/greater-than-or-equal.ts';

describe('types/GreaterThanOrEqual', () => {
  it('basic test', () => {
    expectTypeOf<GreaterThanOrEqual<2, 2>>().toEqualTypeOf<true>();
  });
});
