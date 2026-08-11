import type {ElementFromSelectorStrict} from '../../src/dom/element-from-selector-strict.ts';

describe('dom/ElementFromSelectorStrict', () => {
  it('resolves a valid selector exactly like the lenient variant', () => {
    expectTypeOf<ElementFromSelectorStrict<'div#app'>>().toEqualTypeOf<HTMLDivElement>();
    expectTypeOf<
      ElementFromSelectorStrict<'form#login > button.submit'>
    >().toEqualTypeOf<HTMLButtonElement>();
    expectTypeOf<ElementFromSelectorStrict<'div, span'>>().toEqualTypeOf<
      HTMLDivElement | HTMLSpanElement
    >();
  });

  it('resolves a malformed selector to never instead of falling back', () => {
    expectTypeOf<ElementFromSelectorStrict<'div#app >'>>().toBeNever();
    expectTypeOf<ElementFromSelectorStrict<'div#app ?'>>().toBeNever();
    expectTypeOf<ElementFromSelectorStrict<'123bad'>>().toBeNever();
  });

  it('does not catch every kind of syntax error, by design', () => {
    // An unterminated attribute bracket is dropped during preprocessing, leaving a valid tag
    expectTypeOf<ElementFromSelectorStrict<'div[test'>>().toEqualTypeOf<HTMLDivElement>();
  });

  it('still falls back for an unknown tag, honoring a custom fallback', () => {
    expectTypeOf<ElementFromSelectorStrict<'my-widget'>>().toEqualTypeOf<Element>();
    expectTypeOf<
      ElementFromSelectorStrict<'my-widget', HTMLElement>
    >().toEqualTypeOf<HTMLElement>();
  });

  it('falls back for a widened, non-literal selector, having nothing to validate', () => {
    expectTypeOf<ElementFromSelectorStrict<string>>().toEqualTypeOf<Element>();
  });
});
