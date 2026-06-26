import type {ArrayIncludes} from '../../src/types/array-includes.ts';

describe('types/ArrayIncludes', () => {
  it('basic test', () => {
    expectTypeOf<ArrayIncludes<[1, 2, 3], 2>>().toEqualTypeOf<true>();
  });
});
