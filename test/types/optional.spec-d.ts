import type {Optional} from '../../src/types/optional.ts';

describe('types/Optional', () => {
  it('basic test', () => {
    expectTypeOf<Optional<{a: 1}>>().toEqualTypeOf<{a: 1} | undefined>();
  });
});
