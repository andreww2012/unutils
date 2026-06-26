import type {ReadonlyDeep} from '../../src/types/readonly-deep.ts';

describe('types/ReadonlyDeep', () => {
  it('basic test', () => {
    expectTypeOf<ReadonlyDeep<{a: {b: number}}>>().toEqualTypeOf<{
      readonly a: {readonly b: number};
    }>();
  });
});
