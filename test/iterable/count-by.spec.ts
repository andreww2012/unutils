import {countBy} from '../../src/iterable/count-by.ts';

function* words() {
  yield 'apple';
  yield 'banana';
  yield 'avocado';
  yield 'blueberry';
}

describe('iterable/countBy', () => {
  it('counts array items by key', () => {
    expect(countBy(['a', 'b', 'a', 'c', 'b', 'a'], (item) => item)).toStrictEqual(
      new Map([
        ['a', 3],
        ['b', 2],
        ['c', 1],
      ]),
    );
  });

  it('counts array items by derived key', () => {
    expect(countBy([1, 2, 3, 4, 5], (item) => (item % 2 === 0 ? 'even' : 'odd'))).toStrictEqual(
      new Map([
        ['odd', 3],
        ['even', 2],
      ]),
    );
  });

  it('exposes index to mapper', () => {
    expect(
      countBy(['a', 'b', 'c', 'd'], (_item, index) => (index < 2 ? 'first' : 'rest')),
    ).toStrictEqual(
      new Map([
        ['first', 2],
        ['rest', 2],
      ]),
    );
  });

  it('counts Map entries (iterated as [key, value] pairs)', () => {
    const map = new Map([
      ['x', 1],
      ['y', 2],
      ['z', 1],
    ]);

    expect(countBy(map, ([, value]) => value)).toStrictEqual(
      new Map([
        [1, 2],
        [2, 1],
      ]),
    );
  });

  it('counts Set items by key', () => {
    expect(
      countBy(new Set([1, 2, 3, 4, 5]), (item) => (item % 2 === 0 ? 'even' : 'odd')),
    ).toStrictEqual(
      new Map([
        ['odd', 3],
        ['even', 2],
      ]),
    );
  });

  it('counts items from a generator', () => {
    expect(countBy(words(), (word) => word[0])).toStrictEqual(
      new Map([
        ['a', 2],
        ['b', 2],
      ]),
    );
  });

  it('returns empty map for empty iterable', () => {
    expect(countBy([], (item) => item)).toStrictEqual(new Map());
  });
});
