import type {NonNullableDeep} from '../../src/types/non-nullable-deep.ts';

describe('types/NonNullableDeep', () => {
  it('basic test', () => {
    expectTypeOf<NonNullableDeep<{a: {b: number | null}}>>().toEqualTypeOf<{a: {b: number}}>();
  });
});
