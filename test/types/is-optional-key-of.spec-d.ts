import type {IsOptionalKeyOf} from '../../src/types/is-optional-key-of.ts';

describe('types/IsOptionalKeyOf', () => {
  it('basic test', () => {
    expectTypeOf<IsOptionalKeyOf<{a?: 1}, 'a'>>().toEqualTypeOf<true>();
  });
});
