import {memoize} from '../../src/function/memoize.ts';

describe('function/memoize', () => {
  it('basic test', () => {
    let calls = 0;
    const slow = (value: number) => {
      calls++;
      return value * 2;
    };
    const memoized = memoize(slow);

    expect(memoized(3)).toBe(6);
    expect(memoized(3)).toBe(6);
    expect(calls).toBe(1);
  });
});
