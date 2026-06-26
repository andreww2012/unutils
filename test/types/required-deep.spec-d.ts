import type {RequiredDeep} from '../../src/types/required-deep.ts';

describe('types/RequiredDeep', () => {
  it('basic test', () => {
    expectTypeOf<RequiredDeep<{a?: {b?: number}}>>().toEqualTypeOf<{a: {b: number}}>();
  });
});
