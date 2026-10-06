import {minBy} from '../../src/array/min-by.ts';

describe('array/minBy', () => {
  it('basic test', () => {
    expect(minBy([{a: 1}, {a: 3}, {a: 2}], (item) => item.a)).toStrictEqual({a: 1});
  });

  it('supports bigint values', () => {
    expect(minBy([{id: 10n}, {id: 30n}, {id: 5n}], (item) => item.id)).toStrictEqual({id: 5n});
  });
});
