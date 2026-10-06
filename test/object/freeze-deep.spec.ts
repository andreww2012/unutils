import {freezeDeep} from '../../src/object/freeze-deep.ts';

describe('object/freezeDeep', () => {
  it('freezes the object and every nested object and array', () => {
    const object = freezeDeep({user: {tags: ['a']}});

    expect(Object.isFrozen(object)).toBe(true);
    expect(Object.isFrozen(object.user)).toBe(true);
    expect(Object.isFrozen(object.user.tags)).toBe(true);
  });
});
