import {iterableScan} from '../../src/iterable/iterable-scan.ts';

describe('iterable/iterableScan', () => {
  it('yields the initial value and every accumulator', () => {
    expect([...iterableScan([1, 2, 3], (total, value) => total + value, 0)]).toStrictEqual([
      0, 1, 3, 6,
    ]);
  });

  it('passes the index', () => {
    expect([
      ...iterableScan(['a', 'b'], (result, value, index) => `${result}${value}${index}`, ''),
    ]).toStrictEqual(['', 'a0', 'a0b1']);
  });
});
