import type {PickDeep} from '../../src/types/pick-deep.ts';

describe('types/PickDeep', () => {
  it('basic test', () => {
    expectTypeOf<PickDeep<{a: {b: 1; c: 2}}, 'a.b'>>().toEqualTypeOf<{a: {b: 1}}>();
  });
});
