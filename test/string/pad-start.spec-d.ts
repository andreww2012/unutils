import {padStart} from '../../src/string/pad-start.ts';

describe('string/padStart', () => {
  it('types the result as the precise padded literal', () => {
    expectTypeOf(padStart('5', 3, '0')).toEqualTypeOf<'005'>();
  });
});
