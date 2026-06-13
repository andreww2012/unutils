import {jsonStringifyAsync} from '../../src/json/json-stringify-async.ts';

describe('json/jsonStringifyAsync', () => {
  it('serializes asynchronously', async () => {
    await expect(jsonStringifyAsync({a: 1, b: [2, 3]})).resolves.toBe('{"a":1,"b":[2,3]}');
  });

  it('honors the replacer and space arguments', async () => {
    await expect(jsonStringifyAsync({a: 1, b: 2}, ['a'], 2)).resolves.toBe(
      JSON.stringify({a: 1, b: 2}, ['a'], 2),
    );
  });

  it('honors space alongside a custom intensity', async () => {
    await expect(jsonStringifyAsync({a: 1}, null, 2, 8)).resolves.toBe(
      JSON.stringify({a: 1}, null, 2),
    );
  });

  it('rejects when serialization fails', async () => {
    const circular: {self?: unknown} = {};
    circular.self = circular;

    await expect(jsonStringifyAsync(circular)).rejects.toBeDefined();
  });
});
