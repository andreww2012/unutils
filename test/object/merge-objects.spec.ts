import {mergeObjects} from '../../src/object/merge-objects.ts';

describe('object/mergeObjects', () => {
  it('merges left to right, later objects overriding', () => {
    expect(mergeObjects([{a: 1}, {b: 2}, {a: 3}])).toStrictEqual({a: 3, b: 2});
  });

  it('merges heterogeneous objects', () => {
    expect(mergeObjects([{a: 1}, {b: 'x'}])).toStrictEqual({a: 1, b: 'x'});
  });

  it('does not mutate the inputs', () => {
    const first = {a: 1};
    mergeObjects([first, {b: 2}]);

    expect(first).toStrictEqual({a: 1});
  });
});
