import {iterableUnique} from '../../src/iterable/iterable-unique.ts';

describe('iterable/iterableUnique', () => {
  it('removes duplicates', () => {
    expect([...iterableUnique([1, 2, 1, 3, 2])]).toStrictEqual([1, 2, 3]);
  });

  it('compares by the mapped key', () => {
    expect([...iterableUnique([1.1, 1.2, 2.3, 2.4], Math.floor)]).toStrictEqual([1.1, 2.3]);
  });
});
