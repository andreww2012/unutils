import {traverseNodes} from '../../src/traverse/traverse-nodes.ts';

describe('traverse/traverseNodes', () => {
  it('returns every node including containers, depth-first', () => {
    expect(traverseNodes({x: 1, y: {z: 2}})).toStrictEqual([{x: 1, y: {z: 2}}, 1, {z: 2}, 2]);
  });

  it('can be filtered down to leaf values', () => {
    expect(
      traverseNodes({x: 1, y: {z: 2}}).filter((node) => typeof node === 'number'),
    ).toStrictEqual([1, 2]);
  });
});
