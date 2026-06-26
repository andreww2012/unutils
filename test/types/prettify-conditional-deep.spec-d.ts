import type {PrettifyConditionalDeep} from '../../src/types/prettify-conditional-deep.ts';

describe('types/PrettifyConditionalDeep', () => {
  it('basic test', () => {
    expectTypeOf<PrettifyConditionalDeep<{a: {b: 1} & {c: 2}}>>().toEqualTypeOf<{
      a: {b: 1; c: 2};
    }>();
  });
});
