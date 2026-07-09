import {traverseFind} from '../../src/traverse/traverse-find.ts';

describe('traverse/traverseFind', () => {
  it('returns the first node matching the predicate', () => {
    expect(
      traverseFind({a: 1, b: 5}, (_context, node) => typeof node === 'number' && node > 3),
    ).toBe(5);
  });

  it('returns undefined when nothing matches', () => {
    expect(traverseFind({a: 1}, () => false)).toBeUndefined();
  });
});
