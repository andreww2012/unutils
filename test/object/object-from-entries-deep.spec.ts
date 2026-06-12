import {objectFromEntriesDeep} from '../../src/object/object-from-entries-deep.ts';

describe('object/objectFromEntriesDeep', () => {
  it('builds nested objects and arrays from deep paths', () => {
    const result = objectFromEntriesDeep([
      ['a.b[0].c', 1],
      ['a.b[1].d', 2],
    ]);

    expect(result).toStrictEqual({a: {b: [{c: 1}, {d: 2}]}});
  });

  it('behaves like Object.fromEntries for flat keys', () => {
    expect(
      objectFromEntriesDeep([
        ['x', 1],
        ['y', 2],
      ]),
    ).toStrictEqual({x: 1, y: 2});
  });

  it('consumes any iterable of entries', () => {
    const entries = new Map<string, number>([
      ['a.b', 1],
      ['a.c', 2],
    ]);

    expect(objectFromEntriesDeep(entries)).toStrictEqual({a: {b: 1, c: 2}});
  });
});
