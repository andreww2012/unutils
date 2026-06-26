import type {IsWritableKeyOf} from '../../src/types/is-writable-key-of.ts';

describe('types/IsWritableKeyOf', () => {
  it('basic test', () => {
    expectTypeOf<IsWritableKeyOf<{a: 1}, 'a'>>().toEqualTypeOf<true>();
  });
});
