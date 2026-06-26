import type {ConditionalKeys} from '../../src/types/conditional-keys.ts';

describe('types/ConditionalKeys', () => {
  it('basic test', () => {
    expectTypeOf<ConditionalKeys<{a: string; b: number}, string>>().toEqualTypeOf<'a'>();
  });
});
