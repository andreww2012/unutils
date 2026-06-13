import {isPropertyNotNullish} from '../../src/predicate/is-property-not-nullish.ts';

describe('predicate/isPropertyNotNullish', () => {
  it('basic test', () => {
    const items = [{value: 1}, {value: null}, {value: undefined}];

    expect(items.filter(isPropertyNotNullish('value'))).toStrictEqual([{value: 1}]);
  });
});
