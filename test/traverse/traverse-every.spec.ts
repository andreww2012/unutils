import {traverseEvery} from '../../src/traverse/traverse-every.ts';

describe('traverse/traverseEvery', () => {
  it('returns true when every node matches', () => {
    expect(
      traverseEvery({a: 2, b: 4}, (_context, node) => typeof node !== 'number' || node % 2 === 0),
    ).toBe(true);
  });

  it('returns false when any node fails', () => {
    expect(
      traverseEvery({a: 2, b: 3}, (_context, node) => typeof node !== 'number' || node % 2 === 0),
    ).toBe(false);
  });
});
