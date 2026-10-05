import {mapGetOrInsert} from '../../src/map/map-get-or-insert.ts';

describe('map/mapGetOrInsert', () => {
  it('inserts and returns the default value when the key is missing', () => {
    const sample = new Map<string, number>();

    expect(mapGetOrInsert(sample, 'a', 1)).toBe(1);
    expect(sample).toStrictEqual(new Map([['a', 1]]));
  });

  it('returns the existing value without overwriting it', () => {
    const sample = new Map([['a', 1]]);

    expect(mapGetOrInsert(sample, 'a', 99)).toBe(1);
    expect(sample).toStrictEqual(new Map([['a', 1]]));
  });

  it('treats a stored `undefined` as present', () => {
    const sample = new Map<string, number | undefined>([['a', undefined]]);

    expect(mapGetOrInsert(sample, 'a', 42)).toBeUndefined();
    expect(sample.get('a')).toBeUndefined();
  });

  it('returns the very same reference on subsequent calls', () => {
    const sample = new Map<string, number[]>();
    const inserted = mapGetOrInsert(sample, 'a', []);

    inserted.push(1);

    expect(mapGetOrInsert(sample, 'a', [])).toBe(inserted);
    expect(sample.get('a')).toStrictEqual([1]);
  });

  it('uses SameValueZero key equality, like `Map` itself', () => {
    const sample = new Map<number, string>([[Number.NaN, 'nan']]);

    expect(mapGetOrInsert(sample, Number.NaN, 'other')).toBe('nan');
    expect(mapGetOrInsert(sample, -0, 'zero')).toBe('zero');
    expect(mapGetOrInsert(sample, 0, 'other')).toBe('zero');
  });
});
