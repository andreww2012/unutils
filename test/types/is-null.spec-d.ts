import type {IsNull} from '../../src/types/is-null.ts';

describe('types/IsNull', () => {
  it('basic test', () => {
    expectTypeOf<IsNull<null>>().toEqualTypeOf<true>();
  });
});
