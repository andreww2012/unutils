import {arrayFirstBy} from '../../src/array/array-first-by.ts';

describe('array/arrayFirstBy', () => {
  it('returns the minimum with a single ascending rule', () => {
    expect(arrayFirstBy([3, 1, 2], (value) => value)).toBe(1);
  });

  it('returns the maximum with a descending rule', () => {
    expect(arrayFirstBy([3, 1, 2], [(value) => value, 'desc'])).toBe(3);
  });

  it('uses later rules as tie-breakers', () => {
    expect(
      arrayFirstBy(
        ['bb', 'a', 'cc', 'b'],
        (word) => word.length,
        (word) => word,
      ),
    ).toBe('a');
  });

  it('returns undefined for an empty array', () => {
    expect(arrayFirstBy([] as string[], (value) => value)).toBeUndefined();
  });

  it('does not mutate the input', () => {
    const source = [3, 1, 2];
    arrayFirstBy(source, (value) => value);

    expect(source).toStrictEqual([3, 1, 2]);
  });
});
