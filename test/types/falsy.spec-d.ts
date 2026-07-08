import type {Falsy} from '../../src/types/falsy.ts';

describe('types/Falsy', () => {
  it('is the union of all literal-representable falsy values', () => {
    expectTypeOf<Falsy>().toEqualTypeOf<false | 0 | 0n | '' | null | undefined>();
  });

  it('subtracts falsy members from a union via Exclude', () => {
    expectTypeOf<Exclude<0 | 1 | '' | 'a', Falsy>>().toEqualTypeOf<1 | 'a'>();
  });
});
