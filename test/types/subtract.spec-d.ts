import type {Subtract} from '../../src/types/subtract.ts';

describe('types/Subtract', () => {
  it('basic test', () => {
    expectTypeOf<Subtract<5, 3>>().toEqualTypeOf<2>();
  });
});
