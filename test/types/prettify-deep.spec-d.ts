import type {PrettifyDeep} from '../../src/types/prettify-deep.ts';

describe('types/PrettifyDeep', () => {
  it('basic test', () => {
    expectTypeOf<PrettifyDeep<{a: {b: 1} & {c: 2}}>>().toEqualTypeOf<{a: {b: 1; c: 2}}>();
  });
});
