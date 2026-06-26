import type {DigitCharacter} from '../../src/types/digit-character.ts';

describe('types/DigitCharacter', () => {
  it('basic test', () => {
    expectTypeOf<'1' extends DigitCharacter ? true : false>().toEqualTypeOf<true>();
  });
});
