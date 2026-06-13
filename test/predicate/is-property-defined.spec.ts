import {isPropertyDefined} from '../../src/predicate/is-property-defined.ts';

describe('predicate/isPropertyDefined', () => {
  it('basic test', () => {
    const items = [{value: 1}, {value: undefined}];

    expect(items.filter(isPropertyDefined('value'))).toStrictEqual([{value: 1}]);
  });
});
