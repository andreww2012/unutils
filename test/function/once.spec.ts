import {once} from '../../src/function/once.ts';

describe('function/once', () => {
  it('basic test', () => {
    let calls = 0;
    const sample = once(() => ++calls);

    expect(sample()).toBe(1);
    expect(sample()).toBe(1);
    expect(calls).toBe(1);
  });
});
