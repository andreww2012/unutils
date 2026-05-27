import {escapeHtml} from '../../src/string/escape-html.ts';

describe('string/escapeHtml', () => {
  it('basic test', () => {
    expect(escapeHtml('This is a <div> element.')).toBe('This is a &lt;div&gt; element.');
  });
});
