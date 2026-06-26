import type {UnknownSet} from '../../src/types/unknown-set.ts';

describe('types/UnknownSet', () => {
  it('basic test', () => {
    expectTypeOf<Set<number> extends UnknownSet ? true : false>().toEqualTypeOf<true>();
  });
});
