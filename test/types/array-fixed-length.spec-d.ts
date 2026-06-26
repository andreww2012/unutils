import type {ArrayFixedLength} from '../../src/types/array-fixed-length.ts';

describe('types/ArrayFixedLength', () => {
  it('basic test', () => {
    expectTypeOf<ArrayFixedLength<number, 2>['length']>().toEqualTypeOf<2>();
  });
});
