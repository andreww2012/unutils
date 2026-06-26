import type {KeysAsStrings} from '../../src/types/keys-as-strings.ts';

describe('types/KeysAsStrings', () => {
  it('basic test', () => {
    expectTypeOf<KeysAsStrings<{a: 1}>>().toEqualTypeOf<'a'>();
  });
});
