import type {GetBrandMetadata} from '../../src/types/get-brand-metadata.ts';
import type {Branded} from '../../src/types/index.ts';

describe('types/GetBrandMetadata', () => {
  it('basic test', () => {
    expectTypeOf<GetBrandMetadata<Branded<number, 'Id', 'meta'>, 'Id'>>().toEqualTypeOf<'meta'>();
  });
});
