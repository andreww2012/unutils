import type {ArrayElement} from '../../src/types/array-element.ts';

describe('types/ArrayElement', () => {
  it('basic test', () => {
    expectTypeOf<ArrayElement<number[]>>().toEqualTypeOf<number>();
  });
});
