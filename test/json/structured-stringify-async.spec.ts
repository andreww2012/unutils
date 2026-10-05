import {structuredParse} from '../../src/json/structured-parse.ts';
import {structuredStringifyAsync} from '../../src/json/structured-stringify-async.ts';
import {StructuredStringifyError} from '../../src/json/structured-stringify.ts';

describe('json/structuredStringifyAsync', () => {
  it('serializes what nested promises resolve to', async () => {
    const serialized = await structuredStringifyAsync({
      tags: Promise.resolve(new Set(['a'])),
      nested: [Promise.resolve(1n)],
    });

    expect(structuredParse(serialized)).toStrictEqual({tags: new Set(['a']), nested: [1n]});
  });

  it('rejects with the reason of a rejected nested promise', async () => {
    const reason = new Error('boom');

    await expect(structuredStringifyAsync({a: Promise.reject(reason)})).rejects.toBe(reason);
  });

  it('rejects with `StructuredStringifyError` on an unserializable value', async () => {
    await expect(structuredStringifyAsync({a: Promise.resolve(() => 1)})).rejects.toBeInstanceOf(
      StructuredStringifyError,
    );
  });
});
