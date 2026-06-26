import type {ArrayLength} from '../../src/types/array-length.ts';

describe('types/ArrayLength', () => {
  it('basic test', () => {
    expectTypeOf<ArrayLength<[1, 2, 3]>>().toEqualTypeOf<3>();
  });
});
