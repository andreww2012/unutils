import {mapObjectValuesByKey} from '../../src/object/map-object-values-by-key.ts';

describe('object/mapObjectValuesByKey', () => {
  it('transforms only the listed keys, keeping the rest', () => {
    expect(
      mapObjectValuesByKey({count: 1, label: 'a'}, {count: (value) => value + 1}),
    ).toStrictEqual({count: 2, label: 'a'});
  });

  it('applies a different function per key, including a type change', () => {
    expect(
      mapObjectValuesByKey({price: 5, name: 'x'}, {price: (value) => `$${value}`}),
    ).toStrictEqual({price: '$5', name: 'x'});
  });

  it('does not mutate the input', () => {
    const source = {count: 1};
    mapObjectValuesByKey(source, {count: (value) => value + 1});

    expect(source).toStrictEqual({count: 1});
  });
});
