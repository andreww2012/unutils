import {toSnakeCaseKeys} from '../../src/object/to-snake-case-keys.ts';

describe('object/toSnakeCaseKeys', () => {
  it('snake-cases only the top-level keys', () => {
    expect(toSnakeCaseKeys({fooBar: {bazQux: 1}})).toStrictEqual({foo_bar: {bazQux: 1}});
  });
});
