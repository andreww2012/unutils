import type {Alphanumeric} from '../../src/types/alphanumeric.ts';

describe('types/Alphanumeric', () => {
  it('basic test', () => {
    expectTypeOf<'a' extends Alphanumeric ? true : false>().toEqualTypeOf<true>();
  });
});
