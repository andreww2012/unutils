import {mapObjectValuesByKey} from '../../src/object/map-object-values-by-key.ts';

describe('object/mapObjectValuesByKey', () => {
  it('reflects each transformer return type, keeping untouched keys', () => {
    expectTypeOf(
      mapObjectValuesByKey({count: 1, label: 'a'}, {count: (value) => value + 1}),
    ).toEqualTypeOf<{count: number; label: string}>();
  });

  it('updates the type of a transformed key', () => {
    expectTypeOf(
      mapObjectValuesByKey({price: 5, name: 'x'}, {price: (value) => `$${value}`}),
    ).toEqualTypeOf<{price: string; name: string}>();
  });
});
