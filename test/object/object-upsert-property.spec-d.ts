import {objectUpsertProperty} from '../../src/object/object-upsert-property.ts';

describe('object/objectUpsertProperty', () => {
  it('widens the type to include an inserted key', () => {
    expectTypeOf(objectUpsertProperty({a: 1}, 'b', 2)).toEqualTypeOf<{a: number; b: number}>();
  });

  it('updates the type of an overwritten key', () => {
    expectTypeOf(objectUpsertProperty({a: 1}, 'a', 'now a string')).toEqualTypeOf<{a: string}>();
  });
});
