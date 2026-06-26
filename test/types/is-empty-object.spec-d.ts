import type {EmptyObject} from '../../src/types/index.ts';
import type {IsEmptyObject} from '../../src/types/is-empty-object.ts';

describe('types/IsEmptyObject', () => {
  it('basic test', () => {
    expectTypeOf<IsEmptyObject<EmptyObject>>().toEqualTypeOf<true>();
    expectTypeOf<IsEmptyObject<{a: 1}>>().toEqualTypeOf<false>();
  });
});
