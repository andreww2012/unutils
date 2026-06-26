import type {OptionalKeysOf} from '../../src/types/optional-keys-of.ts';

describe('types/OptionalKeysOf', () => {
  it('basic test', () => {
    expectTypeOf<OptionalKeysOf<{a: 1; b?: 2}>>().toEqualTypeOf<'b'>();
  });
});
