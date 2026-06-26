import type {OmitIndexSignature} from '../../src/types/omit-index-signature.ts';

describe('types/OmitIndexSignature', () => {
  it('basic test', () => {
    expectTypeOf<OmitIndexSignature<{[k: string]: unknown; a: 1}>>().toEqualTypeOf<{a: 1}>();
  });
});
