import {every} from '../../src/iterable/every.ts';

const isEven = (value: number) => value % 2 === 0;

function* positives() {
  yield 1;
  yield 2;
  yield 3;
}

describe('iterable/every', () => {
  it('returns true when every element matches', () => {
    expect(every([2, 4, 6], isEven)).toBe(true);
  });

  it('returns false when at least one element does not match', () => {
    expect(every([2, 3, 4], isEven)).toBe(false);
  });

  it('returns true for an empty iterable', () => {
    expect(every([], isEven)).toBe(true);
  });

  it('short-circuits on the first non-matching element', () => {
    const seen: number[] = [];

    every([1, 2, 3, 4], (value) => {
      seen.push(value);
      return value < 3;
    });

    expect(seen).toStrictEqual([1, 2, 3]);
  });

  it('works on Sets', () => {
    expect(every(new Set([2, 4, 6]), isEven)).toBe(true);
    expect(every(new Set([2, 3]), isEven)).toBe(false);
  });

  it('works on generators', () => {
    expect(every(positives(), (value) => value > 0)).toBe(true);
  });
});
