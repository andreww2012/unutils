import {objectFromEntriesUnsafe} from '../../src/object/object-from-entries-unsafe.ts';

describe('object/objectFromEntriesUnsafe', () => {
  it('basic test', () => {
    expect(
      objectFromEntriesUnsafe([
        ['a', 1],
        ['b', 2],
      ]),
    ).toStrictEqual({a: 1, b: 2});
  });
});
