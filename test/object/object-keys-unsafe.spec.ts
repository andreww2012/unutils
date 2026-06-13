import {objectKeysUnsafe} from '../../src/object/object-keys-unsafe.ts';

describe('object/objectKeysUnsafe', () => {
  it('basic test', () => {
    expect(objectKeysUnsafe({a: 1, b: 2, c: 3})).toStrictEqual(['a', 'b', 'c']);
  });
});
