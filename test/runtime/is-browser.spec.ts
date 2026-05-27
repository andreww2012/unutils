import {isBrowser} from '../../src/runtime/is-browser.ts';

describe('runtime/isBrowser', () => {
  it('basic test', () => {
    expect(isBrowser()).toBeTypeOf('boolean');
  });
});
