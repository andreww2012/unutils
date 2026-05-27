import {withMaxArity} from '../../src/function/with-max-arity.ts';

const collect = (...args: number[]) => args;

describe('function/withMaxArity', () => {
  it('basic test', () => {
    const capped = withMaxArity(collect, 2);

    expect(capped(1, 2, 3, 4)).toStrictEqual([1, 2]);
  });
});
