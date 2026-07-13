import type {StringToNumber} from '../../src/types/string-to-number.ts';

describe('types/StringToNumber', () => {
  it('converts a numeric string to its number literal', () => {
    expectTypeOf<StringToNumber<'1234'>>().toEqualTypeOf<1234>();
  });

  it('handles negative and fractional values', () => {
    expectTypeOf<StringToNumber<'-1234.56'>>().toEqualTypeOf<-1234.56>();
  });

  it('resolves to never for strings without a matching numeric literal', () => {
    expectTypeOf<StringToNumber<'12_345'>>().toEqualTypeOf<never>();
  });
});
