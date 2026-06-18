import {objectUpsertProperty} from '../../src/object/object-upsert-property.ts';

describe('object/objectUpsertProperty', () => {
  it('inserts a new property', () => {
    expect(objectUpsertProperty({a: 1}, 'b', 2)).toStrictEqual({a: 1, b: 2});
  });

  it('overwrites an existing property', () => {
    expect(objectUpsertProperty({a: 1}, 'a', 'now a string')).toStrictEqual({a: 'now a string'});
  });

  it('does not mutate the input', () => {
    const source = {a: 1};
    objectUpsertProperty(source, 'b', 2);

    expect(source).toStrictEqual({a: 1});
  });
});
