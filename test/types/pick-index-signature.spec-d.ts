import type {PickIndexSignature} from '../../src/types/pick-index-signature.ts';

describe('types/PickIndexSignature', () => {
  it('basic test', () => {
    // eslint-disable-next-line ts/consistent-indexed-object-style -- needs a literal key alongside the index signature
    expectTypeOf<PickIndexSignature<{[k: string]: unknown; a: 1}>>().toEqualTypeOf<{
      [k: string]: unknown;
    }>();
  });
});
