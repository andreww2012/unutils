import {traverseSome} from '../../src/traverse/traverse-some.ts';

describe('traverse/traverseSome', () => {
  it('returns true when at least one node matches', () => {
    expect(traverseSome({a: 1, b: 2}, (_context, node) => node === 2)).toBe(true);
  });

  it('returns false when no node matches', () => {
    expect(traverseSome({a: 1, b: 2}, (_context, node) => node === 9)).toBe(false);
  });
});
