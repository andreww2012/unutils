import {generateSequence} from '../../src/iterable/generate-sequence.ts';
import {iterableTakeWhile} from '../../src/iterable/iterable-take-while.ts';

describe('iterable/iterableTakeWhile', () => {
  it('takes the leading matching elements only', () => {
    expect([...iterableTakeWhile([1, 2, 3, 1], (value) => value < 3)]).toStrictEqual([1, 2]);
  });

  it('bounds an infinite iterable', () => {
    expect([
      ...iterableTakeWhile(
        generateSequence(1, (value) => value * 3),
        (value) => value < 100,
      ),
    ]).toStrictEqual([1, 3, 9, 27, 81]);
  });
});
