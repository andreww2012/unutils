import type {SetNonNullableDeep} from '../../src/types/set-non-nullable-deep.ts';

describe('types/SetNonNullableDeep', () => {
  it('basic test', () => {
    expectTypeOf<SetNonNullableDeep<{a: {b: number | null}}, 'a'>>().toEqualTypeOf<{
      a: {b: number | null};
    }>();
  });
});
