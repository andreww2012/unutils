import type {OmitStrict} from '../../src/types/omit-strict.ts';

describe('types/OmitStrict', () => {
  it('basic test', () => {
    expectTypeOf<OmitStrict<{a: 1; b: 2}, 'b'>>().toEqualTypeOf<{a: 1}>();
  });
});
