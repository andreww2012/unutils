import type {ArrayExtractRestElement} from '../../src/types/array-extract-rest-element.ts';

describe('types/ArrayExtractRestElement', () => {
  it('basic test', () => {
    expectTypeOf<ArrayExtractRestElement<[1, 2, ...number[]]>>().toEqualTypeOf<number>();
  });
});
