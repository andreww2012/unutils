import {iterableCount} from '../../src/iterable/iterable-count.ts';

describe('iterable/iterableCount', () => {
  it('counts the elements', () => {
    expect(iterableCount(new Set([1, 2, 3]))).toBe(3);
    expect(iterableCount([])).toBe(0);
  });
});
