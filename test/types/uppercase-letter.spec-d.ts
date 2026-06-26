import type {UppercaseLetter} from '../../src/types/uppercase-letter.ts';

describe('types/UppercaseLetter', () => {
  it('basic test', () => {
    expectTypeOf<'A' extends UppercaseLetter ? true : false>().toEqualTypeOf<true>();
  });
});
