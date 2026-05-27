import {noop} from '../../src/function/noop.ts';

describe('function/noopAsync', () => {
  it('basic test', () => {
    // eslint-disable-next-line ts/no-confusing-void-expression
    expect(noop()).toBeUndefined();
  });
});
