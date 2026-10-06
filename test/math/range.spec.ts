import {range} from '../../src/math/range.ts';

describe('math/range', () => {
  it('basic test', () => {
    expect(range(4)).toStrictEqual([0, 1, 2, 3]);
  });

  it('supports bigints', () => {
    expect(range(3n)).toStrictEqual([0n, 1n, 2n]);
    expect(range(0n, 20n, 5n)).toStrictEqual([0n, 5n, 10n, 15n]);
  });
});
