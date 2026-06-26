import type {ArrayReverse} from '../../src/types/array-reverse.ts';

describe('types/ArrayReverse', () => {
  it('basic test', () => {
    expectTypeOf<ArrayReverse<[1, 2, 3]>>().toEqualTypeOf<[3, 2, 1]>();
  });
});
