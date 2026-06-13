import {objectValuesUnsafe} from '../../src/object/object-values-unsafe.ts';

describe('object/objectValuesUnsafe', () => {
  it('basic test', () => {
    expect(objectValuesUnsafe({a: 1, b: 2, c: 3})).toStrictEqual([1, 2, 3]);
  });
});
