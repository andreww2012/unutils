import type {RequiredKeysOf} from '../../src/types/required-keys-of.ts';

describe('types/RequiredKeysOf', () => {
  it('basic test', () => {
    expectTypeOf<RequiredKeysOf<{a: 1; b?: 2}>>().toEqualTypeOf<'a'>();
  });
});
