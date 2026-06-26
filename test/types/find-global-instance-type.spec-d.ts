import type {FindGlobalInstanceType} from '../../src/types/find-global-instance-type.ts';

describe('types/FindGlobalInstanceType', () => {
  it('basic test', () => {
    expectTypeOf<FindGlobalInstanceType<'Date'>>().toEqualTypeOf<Date>();
  });
});
