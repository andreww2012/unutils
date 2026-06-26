import type {ObjectValues} from '../../src/types/object-values.ts';

describe('types/ObjectValues', () => {
  it('basic test', () => {
    expectTypeOf<ObjectValues<{a: 1; b: 'x'}>>().toEqualTypeOf<1 | 'x'>();
  });
});
