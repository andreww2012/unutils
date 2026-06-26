import type {Branded} from '../../src/types/branded.ts';

describe('types/Branded', () => {
  it('basic test', () => {
    expectTypeOf<Branded<number, 'Id'> extends number ? true : false>().toEqualTypeOf<true>();
    expectTypeOf<number extends Branded<number, 'Id'> ? true : false>().toEqualTypeOf<false>();
  });
});
