import type {OmitConditional} from '../../src/types/omit-conditional.ts';

describe('types/OmitConditional', () => {
  it('basic test', () => {
    expectTypeOf<OmitConditional<{a: string; b: number}, string>>().toEqualTypeOf<{b: number}>();
  });
});
