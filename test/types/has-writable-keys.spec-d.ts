import type {HasWritableKeys} from '../../src/types/has-writable-keys.ts';

describe('types/HasWritableKeys', () => {
  it('basic test', () => {
    expectTypeOf<HasWritableKeys<{a: 1}>>().toEqualTypeOf<true>();
  });
});
