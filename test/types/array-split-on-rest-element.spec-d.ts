import type {ArraySplitOnRestElement} from '../../src/types/array-split-on-rest-element.ts';

describe('types/ArraySplitOnRestElement', () => {
  it('basic test', () => {
    expectTypeOf<ArraySplitOnRestElement<[1, ...number[], 2]>>().toEqualTypeOf<
      [[1], number[], [2]]
    >();
  });
});
