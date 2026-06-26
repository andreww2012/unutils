import type {WritableKeysOf} from '../../src/types/writable-keys-of.ts';

describe('types/WritableKeysOf', () => {
  it('basic test', () => {
    expectTypeOf<WritableKeysOf<{readonly a: 1; b: 2}>>().toEqualTypeOf<'b'>();
  });
});
