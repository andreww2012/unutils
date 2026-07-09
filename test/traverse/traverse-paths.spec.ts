import {traversePaths} from '../../src/traverse/traverse-paths.ts';

describe('traverse/traversePaths', () => {
  it('enumerates the path of every node depth-first, root first', () => {
    expect(traversePaths({a: {b: 1}})).toStrictEqual([[], ['a'], ['a', 'b']]);
  });
});
