import type {SetReturnType} from '../../src/types/set-return-type.ts';

describe('types/SetReturnType', () => {
  it('basic test', () => {
    expectTypeOf<SetReturnType<(a: number) => void, string>>().toEqualTypeOf<
      (a: number) => string
    >();
  });
});
