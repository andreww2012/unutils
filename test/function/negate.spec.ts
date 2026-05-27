import {negate} from '../../src/function/negate.ts';

const isEven = (value: number) => value % 2 === 0;

describe('function/negate', () => {
  it('basic test', () => {
    const isOdd = negate(isEven);

    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
  });
});
