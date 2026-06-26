import type {If} from '../../src/types/if.ts';

describe('types/If', () => {
  it('basic test', () => {
    expectTypeOf<If<true, 'yes', 'no'>>().toEqualTypeOf<'yes'>();
  });
});
