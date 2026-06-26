import type {SomeElementExtends} from '../../src/types/some-element-extends.ts';

describe('types/SomeElementExtends', () => {
  it('basic test', () => {
    expectTypeOf<SomeElementExtends<[1, 'x'], number>>().toEqualTypeOf<true>();
  });
});
