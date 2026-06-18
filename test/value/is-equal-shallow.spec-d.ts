import {isEqualShallow} from '../../src/value/is-equal-shallow.ts';

describe('value/isEqualShallow', () => {
  it('narrows the first value to the second when used as a guard', () => {
    const value = {kind: 'a'} as {kind: 'a'} | {kind: 'b'};

    if (isEqualShallow(value, {kind: 'a'} as const)) {
      expectTypeOf(value).toEqualTypeOf<{kind: 'a'}>();
    }
  });
});
