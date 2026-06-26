import type {ArraySlice} from '../../src/types/array-slice.ts';

describe('types/ArraySlice', () => {
  it('basic test', () => {
    expectTypeOf<ArraySlice<[1, 2, 3, 4], 1, 3>>().toEqualTypeOf<[2, 3]>();
  });
});
