import type {Spread} from '../../src/types/spread.ts';

describe('types/Spread', () => {
  it('basic test', () => {
    expectTypeOf<Spread<{a: 1; b: 2}, {b: 3; c: 4}>>().toEqualTypeOf<{a: 1; b: 3; c: 4}>();
  });
});
