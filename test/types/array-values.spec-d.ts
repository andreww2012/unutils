import type {ArrayValues} from '../../src/types/array-values.ts';

describe('types/ArrayValues', () => {
  it('basic test', () => {
    expectTypeOf<ArrayValues<[1, 2]>>().toEqualTypeOf<1 | 2>();
  });
});
