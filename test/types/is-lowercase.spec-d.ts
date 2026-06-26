import type {IsLowercase} from '../../src/types/is-lowercase.ts';

describe('types/IsLowercase', () => {
  it('basic test', () => {
    expectTypeOf<IsLowercase<'abc'>>().toEqualTypeOf<true>();
  });
});
