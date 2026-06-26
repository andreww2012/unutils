import type {ExactShape} from '../../src/types/exact-shape.ts';

describe('types/ExactShape', () => {
  it('basic test', () => {
    expectTypeOf<ExactShape<{a: 1}, {a: 1}>>().toEqualTypeOf<{a: 1}>();
  });
});
