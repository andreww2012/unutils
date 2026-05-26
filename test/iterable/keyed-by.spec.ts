import {keyedBy} from '../../src/iterable/keyed-by.ts';

function* words() {
  yield 'apple';
  yield 'banana';
  yield 'avocado';
}

describe('iterable/keyedBy', () => {
  it('indexes array items by a derived key', () => {
    const items = [
      {id: 1, name: 'a'},
      {id: 2, name: 'b'},
      {id: 3, name: 'c'},
    ];

    expect(keyedBy(items, (item) => item.id)).toStrictEqual(
      new Map([
        [1, {id: 1, name: 'a'}],
        [2, {id: 2, name: 'b'}],
        [3, {id: 3, name: 'c'}],
      ]),
    );
  });

  it('keeps the last item when keys collide', () => {
    const items = [
      {category: 'fruit', name: 'apple'},
      {category: 'fruit', name: 'banana'},
      {category: 'vegetable', name: 'carrot'},
    ];

    expect(keyedBy(items, (item) => item.category)).toStrictEqual(
      new Map([
        ['fruit', {category: 'fruit', name: 'banana'}],
        ['vegetable', {category: 'vegetable', name: 'carrot'}],
      ]),
    );
  });

  it('exposes index to mapper', () => {
    expect(keyedBy(['a', 'b', 'c'], (_item, index) => index)).toStrictEqual(
      new Map([
        [0, 'a'],
        [1, 'b'],
        [2, 'c'],
      ]),
    );
  });

  it('indexes Map entries (iterated as [key, value] pairs)', () => {
    const scores = new Map([
      ['alice', 90],
      ['bob', 75],
      ['carol', 60],
    ]);

    expect(keyedBy(scores, ([, score]) => (score >= 90 ? 'A' : 'B'))).toStrictEqual(
      new Map<string, [string, number]>([
        ['A', ['alice', 90]],
        ['B', ['carol', 60]],
      ]),
    );
  });

  it('indexes Set items by key', () => {
    expect(keyedBy(new Set([1, 2, 3]), (item) => item * 10)).toStrictEqual(
      new Map([
        [10, 1],
        [20, 2],
        [30, 3],
      ]),
    );
  });

  it('indexes items from a generator', () => {
    expect(keyedBy(words(), (word) => word[0])).toStrictEqual(
      new Map([
        ['a', 'avocado'],
        ['b', 'banana'],
      ]),
    );
  });

  it('returns empty map for empty iterable', () => {
    expect(keyedBy([], (item) => item)).toStrictEqual(new Map());
  });
});
