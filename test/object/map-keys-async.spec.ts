import {mapKeysAsync} from '../../src/object/map-keys-async.ts';

describe('object/mapKeysAsync', () => {
  it('maps keys with an async function', async () => {
    await expect(
      mapKeysAsync({a: 1, b: 2}, (value, key) => Promise.resolve(`${key}${value}`)),
    ).resolves.toStrictEqual({a1: 1, b2: 2});
  });
});
