import {toSnakeCaseKeys} from '../../src/object/to-snake-case-keys.ts';

describe('object/toSnakeCaseKeys', () => {
  it('basic test', () => {
    expect(toSnakeCaseKeys({fooBar: 1})).toStrictEqual({foo_bar: 1});
  });
});
