import type {ArrayLastElement} from '../../src/types/array-last-element.ts';

describe('types/ArrayLastElement', () => {
  it('basic test', () => {
    expectTypeOf<ArrayLastElement<[1, 2, 3]>>().toEqualTypeOf<3>();
  });
});
