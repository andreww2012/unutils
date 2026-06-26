import type {OmitDistributed} from '../../src/types/omit-distributed.ts';

describe('types/OmitDistributed', () => {
  it('basic test', () => {
    expectTypeOf<OmitDistributed<{a: 1; b: 2}, 'b'>>().toEqualTypeOf<{a: 1}>();
  });
});
