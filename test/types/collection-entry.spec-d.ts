import type {CollectionEntry} from '../../src/types/collection-entry.ts';

describe('types/CollectionEntry', () => {
  it('basic test', () => {
    expectTypeOf<CollectionEntry<{a: 1}>>().toEqualTypeOf<['a', 1]>();
  });
});
