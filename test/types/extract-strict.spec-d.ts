import type {ExtractStrict} from '../../src/types/extract-strict.ts';

describe('types/ExtractStrict', () => {
  it('basic test', () => {
    expectTypeOf<ExtractStrict<1 | 2 | 'x', number>>().toEqualTypeOf<1 | 2>();
  });
});
