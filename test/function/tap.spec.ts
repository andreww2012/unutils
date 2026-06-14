import {tap} from '../../src/function/tap.ts';

describe('function/tap', () => {
  it('basic test', () => {
    const sideEffects: number[] = [];
    const result = tap(5, (value) => {
      sideEffects.push(value);
    });

    expect(result).toBe(5);
    expect(sideEffects).toStrictEqual([5]);
  });
});
