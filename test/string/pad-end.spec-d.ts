import {padEnd} from '../../src/string/pad-end.ts';

describe('string/padEnd', () => {
  it('types the result as the precise padded literal', () => {
    expectTypeOf(padEnd('5', 3, '0')).toEqualTypeOf<'500'>();
  });
});
