import type {IsRequiredKeyOf} from '../../src/types/is-required-key-of.ts';

describe('types/IsRequiredKeyOf', () => {
  it('basic test', () => {
    expectTypeOf<IsRequiredKeyOf<{a: 1}, 'a'>>().toEqualTypeOf<true>();
  });
});
