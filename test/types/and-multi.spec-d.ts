import type {AndMulti} from '../../src/types/and-multi.ts';

describe('types/AndMulti', () => {
  it('basic test', () => {
    expectTypeOf<AndMulti<[true, true, true]>>().toEqualTypeOf<true>();
  });
});
