import type {SetRequiredDeep} from '../../src/types/set-required-deep.ts';

describe('types/SetRequiredDeep', () => {
  it('basic test', () => {
    expectTypeOf<SetRequiredDeep<{a?: {b?: number}}, 'a'>>().toEqualTypeOf<{a: {b?: number}}>();
  });
});
