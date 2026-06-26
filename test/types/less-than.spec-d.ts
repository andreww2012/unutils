import type {LessThan} from '../../src/types/less-than.ts';

describe('types/LessThan', () => {
  it('basic test', () => {
    expectTypeOf<LessThan<2, 3>>().toEqualTypeOf<true>();
  });
});
