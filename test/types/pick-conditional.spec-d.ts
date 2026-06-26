import type {PickConditional} from '../../src/types/pick-conditional.ts';

describe('types/PickConditional', () => {
  it('basic test', () => {
    expectTypeOf<PickConditional<{a: string; b: number}, string>>().toEqualTypeOf<{a: string}>();
  });
});
