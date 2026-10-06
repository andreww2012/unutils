import {generateSequence} from '../../src/iterable/generate-sequence.ts';
import {iterableTakeWhile} from '../../src/iterable/iterable-take-while.ts';

describe('iterable/generateSequence', () => {
  it('starts with the seed and applies the function repeatedly', () => {
    expect([
      ...iterableTakeWhile(
        generateSequence(1, (value) => value * 2),
        (value) => value < 50,
      ),
    ]).toStrictEqual([1, 2, 4, 8, 16, 32]);
  });
});
