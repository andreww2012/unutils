import type {HasRequiredKeys} from '../../src/types/has-required-keys.ts';

describe('types/HasRequiredKeys', () => {
  it('basic test', () => {
    expectTypeOf<HasRequiredKeys<{a: 1}>>().toEqualTypeOf<true>();
  });
});
