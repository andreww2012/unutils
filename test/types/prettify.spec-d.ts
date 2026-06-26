import type {Prettify} from '../../src/types/prettify.ts';

describe('types/Prettify', () => {
  it('basic test', () => {
    expectTypeOf<Prettify<{a: 1} & {b: 2}>>().toEqualTypeOf<{a: 1; b: 2}>();
  });
});
