import type {SetRequired} from '../../src/types/set-required.ts';

describe('types/SetRequired', () => {
  it('basic test', () => {
    expectTypeOf<SetRequired<{a: 1; b?: 2}, 'b'>>().toEqualTypeOf<{a: 1; b: 2}>();
  });
});
