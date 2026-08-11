import {querySelectorAllTyped} from '../../src/dom/query-selector-all-typed.ts';

interface MyWidget extends HTMLElement {
  value: number;
}

describe('dom/querySelectorAllTyped', () => {
  it('types an array, not a NodeList, from the selector literal', () => {
    expectTypeOf(querySelectorAllTyped('span.badge')).toEqualTypeOf<HTMLSpanElement[]>();
  });

  it('produces a union element type for grouping selectors', () => {
    expectTypeOf(querySelectorAllTyped('div, span')).toEqualTypeOf<
      (HTMLDivElement | HTMLSpanElement)[]
    >();
  });

  it('accepts any ParentNode as the root without widening the result', () => {
    const fragment = {} as DocumentFragment;

    expectTypeOf(querySelectorAllTyped('li', fragment)).toEqualTypeOf<HTMLLIElement[]>();
  });

  it('falls back to Element for a widened, non-literal selector', () => {
    const selector = 'div' as string;

    expectTypeOf(querySelectorAllTyped(selector)).toEqualTypeOf<Element[]>();
  });

  it('falls back to Element for a custom element', () => {
    expectTypeOf(querySelectorAllTyped('my-widget')).toEqualTypeOf<Element[]>();
  });

  it('types a custom element through .as', () => {
    expectTypeOf(querySelectorAllTyped.as<MyWidget>('my-widget')).toEqualTypeOf<MyWidget[]>();
  });
});
