import type {IsUppercase} from '../../src/types/is-uppercase.ts';

describe('types/IsUppercase', () => {
  it('basic test', () => {
    expectTypeOf<IsUppercase<'ABC'>>().toEqualTypeOf<true>();
  });
});
