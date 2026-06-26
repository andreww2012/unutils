import type {StripReadonly} from '../../src/types/strip-readonly.ts';

describe('types/StripReadonly', () => {
  it('basic test', () => {
    expectTypeOf<StripReadonly<{readonly a: 1; readonly b: 2}>>().toEqualTypeOf<{a: 1; b: 2}>();
  });
});
