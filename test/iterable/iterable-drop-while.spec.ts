import {iterableDropWhile} from '../../src/iterable/iterable-drop-while.ts';

describe('iterable/iterableDropWhile', () => {
  it('skips the leading matching elements only', () => {
    expect([...iterableDropWhile([1, 2, 3, 1], (value) => value < 3)]).toStrictEqual([3, 1]);
  });
});
