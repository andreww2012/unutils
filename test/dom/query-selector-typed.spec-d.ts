import {querySelectorTyped} from '../../src/dom/query-selector-typed.ts';

interface MyWidget extends HTMLElement {
  value: number;
}

describe('dom/querySelectorTyped', () => {
  it('types the result from the selector literal', () => {
    expectTypeOf(querySelectorTyped('button#submit')).toEqualTypeOf<HTMLButtonElement | null>();
    expectTypeOf(querySelectorTyped('input[name=email]')).toEqualTypeOf<HTMLInputElement | null>();
  });

  it('produces a union for grouping selectors', () => {
    expectTypeOf(querySelectorTyped('div, span')).toEqualTypeOf<
      HTMLDivElement | HTMLSpanElement | null
    >();
  });

  it('accepts any ParentNode as the root without widening the result', () => {
    const fragment = {} as DocumentFragment;
    const container = {} as HTMLDivElement;

    expectTypeOf(querySelectorTyped('li', fragment)).toEqualTypeOf<HTMLLIElement | null>();
    expectTypeOf(querySelectorTyped('li', container)).toEqualTypeOf<HTMLLIElement | null>();
  });

  it('falls back to Element for a widened, non-literal selector', () => {
    const selector = 'div' as string;

    expectTypeOf(querySelectorTyped(selector)).toEqualTypeOf<Element | null>();
  });

  it('falls back to Element for a custom element', () => {
    expectTypeOf(querySelectorTyped('my-widget')).toEqualTypeOf<Element | null>();
  });

  it('types a custom element through .as', () => {
    expectTypeOf(querySelectorTyped.as<MyWidget>('my-widget')).toEqualTypeOf<MyWidget | null>();
    expectTypeOf(
      querySelectorTyped.as<MyWidget>('my-widget', document),
    ).toEqualTypeOf<MyWidget | null>();
  });
});
