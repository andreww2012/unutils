import {objectEntriesUnsafe} from '../../src/object/object-entries-unsafe.ts';

describe('object/objectEntriesUnsafe', () => {
  it('basic test', () => {
    expect(objectEntriesUnsafe({a: 1, b: 2})).toStrictEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
