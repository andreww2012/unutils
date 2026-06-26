import type {ToWords} from '../../src/types/to-words.ts';

describe('types/ToWords', () => {
  it('basic test', () => {
    expectTypeOf<ToWords<'fooBar'>>().toEqualTypeOf<['foo', 'Bar']>();
  });
});
