import type {Jsonifiable} from '../../src/types/jsonifiable.ts';

describe('types/Jsonifiable', () => {
  it('basic test', () => {
    expectTypeOf<{a: Date} extends Jsonifiable ? true : false>().toEqualTypeOf<true>();
  });
});
