import type {ElementFromSelector} from '../../src/dom/element-from-selector.ts';

describe('dom/ElementFromSelector', () => {
  it('resolves a tag qualified by id, class or attribute', () => {
    expectTypeOf<ElementFromSelector<'div#app'>>().toEqualTypeOf<HTMLDivElement>();
    expectTypeOf<ElementFromSelector<'div.container'>>().toEqualTypeOf<HTMLDivElement>();
    expectTypeOf<
      ElementFromSelector<'input.form-control[name=username]'>
    >().toEqualTypeOf<HTMLInputElement>();
  });

  it('takes the rightmost tag of a compound selector', () => {
    expectTypeOf<
      ElementFromSelector<'form#login > button.submit'>
    >().toEqualTypeOf<HTMLButtonElement>();
    expectTypeOf<ElementFromSelector<'h1 + p'>>().toEqualTypeOf<HTMLParagraphElement>();
    expectTypeOf<ElementFromSelector<'body div'>>().toEqualTypeOf<HTMLDivElement>();
  });

  it('produces a union for grouping selectors', () => {
    expectTypeOf<ElementFromSelector<'div, span'>>().toEqualTypeOf<
      HTMLDivElement | HTMLSpanElement
    >();
  });

  it('produces a union for :is() and :where()', () => {
    expectTypeOf<ElementFromSelector<':is(div#id, span.class)'>>().toEqualTypeOf<
      HTMLDivElement | HTMLSpanElement
    >();
    expectTypeOf<ElementFromSelector<':where(div#id, span.class)'>>().toEqualTypeOf<
      HTMLDivElement | HTMLSpanElement
    >();
  });

  it('resolves SVG tags', () => {
    expectTypeOf<ElementFromSelector<'circle'>>().toEqualTypeOf<SVGCircleElement>();
  });

  it('falls back for an unknown tag, honoring a custom fallback', () => {
    expectTypeOf<ElementFromSelector<'my-widget'>>().toEqualTypeOf<Element>();
    expectTypeOf<ElementFromSelector<'my-widget', HTMLElement>>().toEqualTypeOf<HTMLElement>();
  });

  it('falls back for a widened, non-literal selector', () => {
    expectTypeOf<ElementFromSelector<string>>().toEqualTypeOf<Element>();
  });

  it('falls back for a malformed selector', () => {
    expectTypeOf<ElementFromSelector<'div#app >'>>().toEqualTypeOf<Element>();
  });
});
