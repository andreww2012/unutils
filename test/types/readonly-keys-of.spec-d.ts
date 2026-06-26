import type {ReadonlyKeysOf} from '../../src/types/readonly-keys-of.ts';

describe('types/ReadonlyKeysOf', () => {
  it('basic test', () => {
    expectTypeOf<ReadonlyKeysOf<{readonly a: 1; b: 2}>>().toEqualTypeOf<'a'>();
  });
});
