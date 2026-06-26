import type {SetOptional} from '../../src/types/set-optional.ts';

describe('types/SetOptional', () => {
  it('basic test', () => {
    expectTypeOf<SetOptional<{a: 1; b: 2}, 'b'>>().toEqualTypeOf<{a: 1; b?: 2}>();
  });
});
