import {forEach} from '../../src/iterable/for-each.ts';

function* oneAndTwo() {
  yield 1;
  yield 2;
}

describe('iterable/forEach', () => {
  it('invokes the callback once per element in iteration order', () => {
    const seen: number[] = [];

    forEach([1, 2, 3], (value) => {
      seen.push(value);
    });

    expect(seen).toStrictEqual([1, 2, 3]);
  });

  it('does not invoke the callback for an empty iterable', () => {
    let calls = 0;

    forEach([], () => {
      calls++;
    });

    expect(calls).toBe(0);
  });

  it('works on Sets', () => {
    const seen: string[] = [];

    forEach(new Set(['a', 'b']), (value) => {
      seen.push(value);
    });

    expect(seen).toStrictEqual(['a', 'b']);
  });

  it('works on generators', () => {
    const seen: number[] = [];

    forEach(oneAndTwo(), (value) => {
      seen.push(value);
    });

    expect(seen).toStrictEqual([1, 2]);
  });
});
