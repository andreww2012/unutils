import {createObjectGetter} from '../../src/object/create-object-getter.ts';

describe('object/createObjectGetter', () => {
  it('basic test', () => {
    const read = createObjectGetter({user: {name: 'Ann'}});

    expect(read('user.name')).toBe('Ann');
  });
});
