import type {StringifiedValues} from '../../src/types/stringified-values.ts';

describe('types/StringifiedValues', () => {
  it('basic test', () => {
    expectTypeOf<StringifiedValues<{a: 1; b: 'x'}>>().toEqualTypeOf<{a: string; b: string}>();
  });
});
