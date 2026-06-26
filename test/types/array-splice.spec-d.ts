import type {ArraySplice} from '../../src/types/array-splice.ts';

describe('types/ArraySplice', () => {
  it('basic test', () => {
    expectTypeOf<ArraySplice<[1, 2, 3], 1, 1, [9]>>().toEqualTypeOf<[1, 9, 3]>();
  });
});
