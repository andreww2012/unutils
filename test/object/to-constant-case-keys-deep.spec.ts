import {toConstantCaseKeysDeep} from '../../src/object/to-constant-case-keys-deep.ts';

describe('object/toConstantCaseKeysDeep', () => {
  it('constant-cases keys recursively', () => {
    expect(toConstantCaseKeysDeep({fooBar: {bazQux: 1}})).toStrictEqual({
      FOO_BAR: {BAZ_QUX: 1},
    });
  });
});
