// @vitest-environment happy-dom
import {querySelectorAllTyped} from '../../src/dom/query-selector-all-typed.ts';

describe('dom/querySelectorAllTyped', () => {
  let list: HTMLUListElement;

  beforeEach(() => {
    document.body.replaceChildren();
    list = document.createElement('ul');
    list.innerHTML = '<li>one</li><li>two</li><li>three</li>';
    document.body.append(list);
  });

  it('returns a real array rather than a NodeList', () => {
    const items = querySelectorAllTyped('li');

    expect(items).toBeInstanceOf(Array);
    expect(items.map((item) => item.textContent)).toStrictEqual(['one', 'two', 'three']);
  });

  it('returns an empty array when nothing matches', () => {
    expect(querySelectorAllTyped('td')).toStrictEqual([]);
  });

  it('restricts the search to the given root', () => {
    const other = document.createElement('ol');
    other.innerHTML = '<li>four</li>';
    document.body.append(other);

    expect(querySelectorAllTyped('li')).toHaveLength(4);
    expect(querySelectorAllTyped('li', other)).toHaveLength(1);
  });

  it('collects every branch of a grouping selector', () => {
    document.body.append(document.createElement('span'));

    expect(querySelectorAllTyped('li, span')).toHaveLength(4);
  });

  it('throws on a malformed selector, exactly as the native method does', () => {
    expect(() => querySelectorAllTyped('div[unclosed')).toThrow();
  });

  it('looks up custom elements through .as', () => {
    list.append(document.createElement('my-widget'), document.createElement('my-widget'));

    expect(querySelectorAllTyped.as('my-widget')).toHaveLength(2);
    expect(querySelectorAllTyped.as('my-widget', document.createElement('div'))).toStrictEqual([]);
  });
});
