import type {ExcludeExactly} from '../../src/types/exclude-exactly.ts';

describe('types/ExcludeExactly', () => {
  it('basic test', () => {
    expectTypeOf<ExcludeExactly<1 | 2, 1>>().toEqualTypeOf<2>();
  });
});
