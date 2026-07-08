import type {Nullable} from '../../src/types/nullable.ts';

describe('types/Nullable', () => {
  it('widens a type with null and undefined', () => {
    expectTypeOf<Nullable<number>>().toEqualTypeOf<number | null | undefined>();
  });

  it('is inverted by NonNullable', () => {
    expectTypeOf<NonNullable<Nullable<string>>>().toEqualTypeOf<string>();
  });
});
