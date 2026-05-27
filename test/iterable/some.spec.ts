import {some} from '../../src/iterable/some.ts';

const isEven = (value: number) => value % 2 === 0;

function* oneToThree() {
  yield 1;
  yield 2;
  yield 3;
}

describe('iterable/some', () => {
  it('returns true on the first matching element', () => {
    expect(some([1, 2, 3], isEven)).toBe(true);
  });

  it('returns false when no element matches', () => {
    expect(some([1, 3, 5], isEven)).toBe(false);
  });

  it('returns false for an empty iterable', () => {
    expect(some([], () => true)).toBe(false);
  });

  it('short-circuits on the first match', () => {
    const seen: number[] = [];

    some([1, 2, 3, 4], (value) => {
      seen.push(value);
      return value === 2;
    });

    expect(seen).toStrictEqual([1, 2]);
  });

  it('works on Sets', () => {
    expect(some(new Set([1, 2, 3]), isEven)).toBe(true);
    expect(some(new Set([1, 3]), isEven)).toBe(false);
  });

  it('works on generators', () => {
    expect(some(oneToThree(), isEven)).toBe(true);
  });
});
