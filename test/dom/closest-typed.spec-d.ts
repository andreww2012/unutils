import {closestTyped} from '../../src/dom/closest-typed.ts';

interface MyWidget extends HTMLElement {
  value: number;
}

describe('dom/closestTyped', () => {
  const element = {} as HTMLInputElement;

  it('types the result from the selector literal', () => {
    expectTypeOf(closestTyped(element, 'form#login')).toEqualTypeOf<HTMLFormElement | null>();
  });

  it('produces a union for grouping selectors', () => {
    expectTypeOf(closestTyped(element, 'form, fieldset')).toEqualTypeOf<
      HTMLFormElement | HTMLFieldSetElement | null
    >();
  });

  it('falls back to Element for a widened, non-literal selector', () => {
    const selector = 'div' as string;

    expectTypeOf(closestTyped(element, selector)).toEqualTypeOf<Element | null>();
  });

  it('falls back to Element for a custom element', () => {
    expectTypeOf(closestTyped(element, 'my-widget')).toEqualTypeOf<Element | null>();
  });

  it('types a custom element through .as', () => {
    expectTypeOf(closestTyped.as<MyWidget>(element, 'my-widget')).toEqualTypeOf<MyWidget | null>();
  });
});
