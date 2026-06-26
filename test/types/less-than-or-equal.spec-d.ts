import type {LessThanOrEqual} from '../../src/types/less-than-or-equal.ts';

describe('types/LessThanOrEqual', () => {
  it('basic test', () => {
    expectTypeOf<LessThanOrEqual<2, 2>>().toEqualTypeOf<true>();
  });
});
