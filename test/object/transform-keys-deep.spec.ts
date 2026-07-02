import {transformKeysDeep} from '../../src/object/transform-keys-deep.ts';

describe('object/transformKeysDeep', () => {
  it('applies the transform to every key recursively', () => {
    expect(transformKeysDeep({aB: {cD: 1}}, (key) => key.toUpperCase())).toStrictEqual({
      AB: {CD: 1},
    });
  });
});
