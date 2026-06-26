import type {GreaterThan} from '../../src/types/greater-than.ts';

describe('types/GreaterThan', () => {
  it('basic test', () => {
    expectTypeOf<GreaterThan<3, 2>>().toEqualTypeOf<true>();
  });
});
