import {swapObjectProperties} from '../../src/object/swap-object-properties.ts';

describe('object/swapObjectProperties', () => {
  it('swaps the values of two properties', () => {
    expect(swapObjectProperties({a: 1, b: 'x'}, 'a', 'b')).toStrictEqual({a: 'x', b: 1});
  });

  it('does not mutate the input', () => {
    const source = {a: 1, b: 2};
    swapObjectProperties(source, 'a', 'b');

    expect(source).toStrictEqual({a: 1, b: 2});
  });
});
