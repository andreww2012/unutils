import type {StructuredCloneable} from '../../src/types/structured-cloneable.ts';

describe('types/StructuredCloneable', () => {
  it('basic test', () => {
    expectTypeOf<Date extends StructuredCloneable ? true : false>().toEqualTypeOf<true>();
  });
});
