import type {Truthy} from '../../src/types/truthy.ts';

describe('types/Truthy', () => {
  it('removes the literal falsy members from a union', () => {
    expectTypeOf<Truthy<0 | 1 | '' | 'a'>>().toEqualTypeOf<1 | 'a'>();
  });

  it('strips the nullish members, keeping the wide type', () => {
    expectTypeOf<Truthy<string | null | undefined>>().toEqualTypeOf<string>();
  });
});
