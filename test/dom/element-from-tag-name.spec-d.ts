import type {ElementFromTagName} from '../../src/dom/element-from-tag-name.ts';

describe('dom/ElementFromTagName', () => {
  it('resolves an HTML tag', () => {
    expectTypeOf<ElementFromTagName<'canvas'>>().toEqualTypeOf<HTMLCanvasElement>();
    expectTypeOf<ElementFromTagName<'a'>>().toEqualTypeOf<HTMLAnchorElement>();
  });

  it('resolves an SVG tag', () => {
    expectTypeOf<ElementFromTagName<'circle'>>().toEqualTypeOf<SVGCircleElement>();
  });

  it('falls back for an unknown tag, honoring a custom fallback', () => {
    expectTypeOf<ElementFromTagName<'my-widget'>>().toEqualTypeOf<Element>();
    expectTypeOf<ElementFromTagName<'my-widget', HTMLElement>>().toEqualTypeOf<HTMLElement>();
  });

  it('falls back for anything beyond a bare tag name', () => {
    expectTypeOf<ElementFromTagName<'div#app'>>().toEqualTypeOf<Element>();
  });
});
