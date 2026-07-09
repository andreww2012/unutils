import {traverseFilter} from '../../src/traverse/traverse-filter.ts';

describe('traverse/traverseFilter', () => {
  it('collects every matching node into a flat array', () => {
    expect(
      traverseFilter(
        {a: 1, b: 2, c: {d: 4}},
        (_context, node) => typeof node === 'number' && node % 2 === 0,
      ),
    ).toStrictEqual([2, 4]);
  });
});
