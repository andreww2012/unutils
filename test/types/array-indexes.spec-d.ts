import type {ArrayIndexes} from '../../src/types/array-indexes.ts';

describe('types/ArrayIndexes', () => {
  it('basic test', () => {
    expectTypeOf<ArrayIndexes<[1, 2, 3]>>().toEqualTypeOf<0 | 1 | 2>();
  });
});
