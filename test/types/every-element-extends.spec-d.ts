import type {EveryElementExtends} from '../../src/types/every-element-extends.ts';

describe('types/EveryElementExtends', () => {
  it('basic test', () => {
    expectTypeOf<EveryElementExtends<[1, 2], number>>().toEqualTypeOf<true>();
  });
});
