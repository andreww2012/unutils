import {isNode} from '../../src/runtime/is-node.ts';

describe('runtime/isNode', () => {
  it('basic test', () => {
    expect(isNode()).toBe(true);
  });
});
