import type {OrMulti} from '../../src/types/or-multi.ts';

describe('types/OrMulti', () => {
  it('basic test', () => {
    expectTypeOf<OrMulti<[false, false, true]>>().toEqualTypeOf<true>();
  });
});
