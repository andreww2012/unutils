import type {FindGlobalType} from '../../src/types/find-global-type.ts';

describe('types/FindGlobalType', () => {
  it('basic test', () => {
    expectTypeOf<FindGlobalType<'Date'>>().toEqualTypeOf<DateConstructor>();
  });
});
