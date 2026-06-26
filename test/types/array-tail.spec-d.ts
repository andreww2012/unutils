import type {ArrayTail} from '../../src/types/array-tail.ts';

describe('types/ArrayTail', () => {
  it('basic test', () => {
    expectTypeOf<ArrayTail<[1, 2, 3]>>().toEqualTypeOf<[2, 3]>();
  });
});
