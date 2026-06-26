import type {DeepReplaceValues} from '../../src/types/deep-replace-values.ts';

describe('types/DeepReplaceValues', () => {
  it('basic test', () => {
    expectTypeOf<DeepReplaceValues<{a: string; b: {c: string}}, number>>().toEqualTypeOf<{
      a: number;
      b: {c: number};
    }>();
  });
});
