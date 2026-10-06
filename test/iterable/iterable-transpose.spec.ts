import {iterableRange} from '../../src/iterable/iterable-range.ts';
import {iterableTranspose} from '../../src/iterable/iterable-transpose.ts';

describe('iterable/iterableTranspose', () => {
  it('pairs elements and stops at the shortest iterable', () => {
    expect([
      ...iterableTranspose([
        [1, 2, 3],
        ['a', 'b'],
      ]),
    ]).toStrictEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  it('works with infinite iterables', () => {
    expect([
      ...iterableTranspose([iterableRange(1, Number.POSITIVE_INFINITY), new Set(['x', 'y'])]),
    ]).toStrictEqual([
      [1, 'x'],
      [2, 'y'],
    ]);
  });
});
