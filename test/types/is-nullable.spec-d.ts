import type {IsNullable} from '../../src/types/is-nullable.ts';

describe('types/IsNullable', () => {
  it('basic test', () => {
    expectTypeOf<IsNullable<string | null>>().toEqualTypeOf<true>();
  });
});
