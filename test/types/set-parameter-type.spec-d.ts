import type {SetParameterType} from '../../src/types/set-parameter-type.ts';

describe('types/SetParameterType', () => {
  it('basic test', () => {
    expectTypeOf<SetParameterType<(a: number) => void, {0: string}>>().toEqualTypeOf<
      (a: string) => void
    >();
  });
});
