import type {ExtractExactly} from '../../src/types/extract-exactly.ts';

describe('types/ExtractExactly', () => {
  it('keeps only members exactly identical to the match', () => {
    expectTypeOf<ExtractExactly<'a' | 'b' | 1 | 2, 'a' | 'b'>>().toEqualTypeOf<'a' | 'b'>();
  });

  it('does not extract merely-assignable members, unlike Extract', () => {
    expectTypeOf<
      ExtractExactly<{a: string} | {a: string; b: string}, {a: string}>
    >().toEqualTypeOf<{a: string}>();
  });

  it('resolves to never when nothing matches exactly', () => {
    expectTypeOf<ExtractExactly<'a' | 'b' | 1 | 2 | 3, string>>().toEqualTypeOf<never>();
  });
});
