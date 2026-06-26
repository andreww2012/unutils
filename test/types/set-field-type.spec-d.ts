import type {SetFieldType} from '../../src/types/set-field-type.ts';

describe('types/SetFieldType', () => {
  it('basic test', () => {
    expectTypeOf<SetFieldType<{a: 1; b: 2}, 'b', string>>().toEqualTypeOf<{a: 1; b: string}>();
  });
});
