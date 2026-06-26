import type {IsReadonlyKeyOf} from '../../src/types/is-readonly-key-of.ts';

describe('types/IsReadonlyKeyOf', () => {
  it('basic test', () => {
    expectTypeOf<IsReadonlyKeyOf<{readonly a: 1}, 'a'>>().toEqualTypeOf<true>();
  });
});
