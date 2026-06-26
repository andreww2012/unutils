import type {CollectionEntries} from '../../src/types/collection-entries.ts';

describe('types/CollectionEntries', () => {
  it('basic test', () => {
    expectTypeOf<CollectionEntries<{a: 1}>>().toEqualTypeOf<['a', 1][]>();
  });
});
