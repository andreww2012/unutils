import type {GlobalThis} from '../../src/types/global-this.ts';

describe('types/GlobalThis', () => {
  it('basic test', () => {
    expectTypeOf<GlobalThis extends object ? true : false>().toEqualTypeOf<true>();
  });
});
