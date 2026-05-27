import {unescapeHtml} from '../../src/string/unescape-html.ts';

describe('string/unescapeHtml', () => {
  it('basic test', () => {
    expect(unescapeHtml('This is a &lt;div&gt; element.')).toBe('This is a <div> element.');
  });
});
