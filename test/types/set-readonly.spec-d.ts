import type {SetReadonly} from '../../src/types/set-readonly.ts';

describe('types/SetReadonly', () => {
  it('basic test', () => {
    expectTypeOf<SetReadonly<{a: 1; b: 2}, 'b'>>().toEqualTypeOf<{a: 1; readonly b: 2}>();
  });
});
