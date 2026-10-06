import {iterableFirst} from '../../src/iterable/iterable-first.ts';
import {iterableRange} from '../../src/iterable/iterable-range.ts';

describe('iterable/iterableRange', () => {
  it('yields the numbers of the range', () => {
    expect([...iterableRange(4)]).toStrictEqual([0, 1, 2, 3]);
    expect([...iterableRange(0, 20, 5)]).toStrictEqual([0, 5, 10, 15]);
    expect([...iterableRange(3, 0, -1)]).toStrictEqual([3, 2, 1]);
  });

  it('is lazy, so the end can be infinite', () => {
    expect(iterableFirst(iterableRange(5, Number.POSITIVE_INFINITY))).toBe(5);
  });
});
