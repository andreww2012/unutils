import type {InvariantType} from '../../src/types/invariant-type.ts';

describe('types/InvariantType', () => {
  it('basic test', () => {
    expectTypeOf<InvariantType<{a: 1}> extends {a: 1} ? true : false>().toEqualTypeOf<true>();
  });
});
