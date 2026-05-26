import {sortBy} from '../../src/array/sort-by.ts';

describe('array/sortBy', () => {
  it('basic test', () => {
    expect(
      sortBy(
        [
          {user: 'foo', age: 24},
          {user: 'bar', age: 7},
          {user: 'foo', age: 8},
          {user: 'bar', age: 29},
        ],
        ['user', 'age'],
      ),
    ).toStrictEqual([
      {user: 'bar', age: 7},
      {user: 'bar', age: 29},
      {user: 'foo', age: 8},
      {user: 'foo', age: 24},
    ]);
  });
});
