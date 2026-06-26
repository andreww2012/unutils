import type {ArrayExcludeRestElement} from '../../src/types/array-exclude-rest-element.ts';

describe('types/ArrayExcludeRestElement', () => {
  it('basic test', () => {
    expectTypeOf<ArrayExcludeRestElement<[1, 2, ...number[]]>>().toEqualTypeOf<[1, 2]>();
  });
});
