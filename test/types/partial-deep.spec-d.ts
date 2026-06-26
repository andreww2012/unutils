import type {PartialDeep} from '../../src/types/partial-deep.ts';

describe('types/PartialDeep', () => {
  it('basic test', () => {
    expectTypeOf<PartialDeep<{a: {b: number}}>>().toEqualTypeOf<{a?: {b?: number}}>();
  });
});
