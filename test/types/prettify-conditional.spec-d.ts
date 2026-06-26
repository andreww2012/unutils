import type {PrettifyConditional} from '../../src/types/prettify-conditional.ts';

describe('types/PrettifyConditional', () => {
  it('basic test', () => {
    expectTypeOf<PrettifyConditional<{a: 1} & {b: 2}>>().toEqualTypeOf<{a: 1; b: 2}>();
  });
});
