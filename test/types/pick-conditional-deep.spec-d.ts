import type {PickConditionalDeep} from '../../src/types/pick-conditional-deep.ts';

describe('types/PickConditionalDeep', () => {
  it('basic test', () => {
    expectTypeOf<PickConditionalDeep<{a: string; b: number}, string>>().toEqualTypeOf<{
      a: string;
    }>();
  });
});
