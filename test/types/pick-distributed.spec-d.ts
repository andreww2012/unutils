import type {PickDistributed} from '../../src/types/pick-distributed.ts';

describe('types/PickDistributed', () => {
  it('basic test', () => {
    expectTypeOf<PickDistributed<{a: 1; b: 2}, 'a'>>().toEqualTypeOf<{a: 1}>();
  });
});
