import {setMapValues} from '../../src/set/set-map-values.ts';

describe('set/setMapValues', () => {
  it('basic test', () => {
    const result = setMapValues(new Set([1, 2, 3]), (value) => value * 10);

    expect([...result]).toStrictEqual([10, 20, 30]);
  });
});
