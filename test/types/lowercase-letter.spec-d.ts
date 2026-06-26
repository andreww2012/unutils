import type {LowercaseLetter} from '../../src/types/lowercase-letter.ts';

describe('types/LowercaseLetter', () => {
  it('basic test', () => {
    expectTypeOf<'a' extends LowercaseLetter ? true : false>().toEqualTypeOf<true>();
  });
});
