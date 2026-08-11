import type {ParseSelector} from 'typed-query-selector/parser';

/**
 * Resolves a CSS selector *literal* to the element type it matches, by parsing the
 * selector at the type level.
 *
 * Tag names are looked up in `HTMLElementTagNameMap` and then `SVGElementTagNameMap`,
 * so `'div#app'` resolves to `HTMLDivElement` and `'circle'` to `SVGCircleElement`.
 * Only the rightmost tag of a compound selector decides the result: in `'form > input'`
 * that is `input`, giving `HTMLInputElement`.
 * Grouping produces a union, and `:is()` / `:where()` behave the same way.
 *
 * When the selector cannot be parsed, names an unknown tag (a custom element), or is
 * a widened `string` rather than a literal, the result is `Fallback`.
 * Use `ElementFromSelectorStrict` to turn a selector it cannot parse into `never` instead.
 * @example
 * type App = ElementFromSelector<'div#app'>; // HTMLDivElement
 * @example
 * type Submit = ElementFromSelector<'form#login > button.submit'>; // HTMLButtonElement
 * @example
 * type Either = ElementFromSelector<'div, span'>; // HTMLDivElement | HTMLSpanElement
 * @example
 * // Unknown tags fall back, and the fallback is configurable
 * type Widget = ElementFromSelector<'my-widget'>; // Element
 * type Typed = ElementFromSelector<'my-widget', HTMLElement>; // HTMLElement
 */
export type ElementFromSelector<
  Selector extends string,
  Fallback extends Element = Element,
> = ParseSelector<Selector, Fallback>;
