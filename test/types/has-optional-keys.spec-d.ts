import type {HasOptionalKeys} from '../../src/types/has-optional-keys.ts';

describe('types/HasOptionalKeys', () => {
  it('basic test', () => {
    expectTypeOf<HasOptionalKeys<{a?: 1}>>().toEqualTypeOf<true>();
  });
});
