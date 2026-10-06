import {arrayMapWithAccumulator} from '../../src/array/array-map-with-accumulator.ts';

describe('array/arrayMapWithAccumulator', () => {
  it('returns the successive accumulator values (running sum)', () => {
    expect(
      arrayMapWithAccumulator([1, 2, 3, 4], (accumulator, value) => accumulator + value, 0),
    ).toStrictEqual([1, 3, 6, 10]);
  });

  it('passes the accumulator, value, index, and the elements processed so far to the callback', () => {
    const calls: [number, number, number, number[]][] = [];

    arrayMapWithAccumulator(
      [10, 20],
      (accumulator, value, index, processed) => {
        calls.push([accumulator, value, index, [...processed]]);
        return accumulator + value;
      },
      0,
    );

    expect(calls).toStrictEqual([
      [0, 10, 0, [10]],
      [10, 20, 1, [10, 20]],
    ]);
  });

  it('returns an empty array for an empty input', () => {
    expect(arrayMapWithAccumulator([], (accumulator: number) => accumulator, 0)).toStrictEqual([]);
  });

  it('does not mutate the input', () => {
    const source = [1, 2, 3];
    arrayMapWithAccumulator(source, (accumulator, value) => accumulator + value, 0);

    expect(source).toStrictEqual([1, 2, 3]);
  });
});
