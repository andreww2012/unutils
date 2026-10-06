import type {StripReadonly} from '../../src/types/strip-readonly.ts';

describe('types/StripReadonly', () => {
  it('basic test', () => {
    expectTypeOf<StripReadonly<{readonly a: 1; readonly b: 2}>>().toEqualTypeOf<{a: 1; b: 2}>();
  });

  it('keeps an index signature as is', () => {
    expectTypeOf<StripReadonly<{readonly [key: string]: number; readonly a: 1}>>().toEqualTypeOf<{
      [key: string]: number;
      a: 1;
    }>();
  });
});
