import type {OmitDeep} from '../../src/types/omit-deep.ts';

describe('types/OmitDeep', () => {
  it('basic test', () => {
    expectTypeOf<OmitDeep<{a: {b: 1; c: 2}}, 'a.c'>>().toEqualTypeOf<{a: {b: 1}}>();
  });
});
