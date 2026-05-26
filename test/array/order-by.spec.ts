import {orderBy} from '../../src/array/order-by.ts';

describe('array/orderBy', () => {
  it('basic test', () => {
    expect(
      orderBy(
        [
          {user: 'fred', age: 48},
          {user: 'barney', age: 34},
          {user: 'fred', age: 40},
          {user: 'barney', age: 36},
        ],
        ['user', 'age'],
        ['asc', 'desc'],
      ),
    ).toStrictEqual([
      {user: 'barney', age: 36},
      {user: 'barney', age: 34},
      {user: 'fred', age: 48},
      {user: 'fred', age: 40},
    ]);
  });
});
