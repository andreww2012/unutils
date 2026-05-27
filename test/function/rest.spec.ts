import {rest} from '../../src/function/rest.ts';

const joiner = (label: string, tail: number[]) => `${label}: ${tail.join(',')}`;

describe('function/rest', () => {
  it('basic test', () => {
    const wrapped = rest(joiner, 1);

    expect(wrapped('nums', 1, 2, 3)).toBe('nums: 1,2,3');
  });
});
