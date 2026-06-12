import {createPathGetter} from '../../src/object/create-path-getter.ts';

describe('object/createPathGetter', () => {
  it('basic test', () => {
    const getName = createPathGetter('user.name');

    expect(getName({user: {name: 'Ann'}})).toBe('Ann');
  });
});
