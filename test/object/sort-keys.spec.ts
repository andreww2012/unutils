import {sortKeys} from '../../src/object/sort-keys.ts';

describe('object/sortKeys', () => {
  it('basic test', () => {
    expect(Object.keys(sortKeys({b: 1, a: 2, c: 3}))).toStrictEqual(['a', 'b', 'c']);
  });
});
