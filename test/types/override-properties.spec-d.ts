import type {OverrideProperties} from '../../src/types/override-properties.ts';

describe('types/OverrideProperties', () => {
  it('basic test', () => {
    expectTypeOf<OverrideProperties<{a: number; b: string}, {b: number}>>().toEqualTypeOf<{
      a: number;
      b: number;
    }>();
  });
});
