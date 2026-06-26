import type {StripReadonlyDeep} from '../../src/types/strip-readonly-deep.ts';

describe('types/StripReadonlyDeep', () => {
  it('basic test', () => {
    expectTypeOf<StripReadonlyDeep<{readonly a: {readonly b: number}}>>().toEqualTypeOf<{
      a: {b: number};
    }>();
  });
});
