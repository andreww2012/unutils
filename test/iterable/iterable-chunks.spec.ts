import {iterableChunks} from '../../src/iterable/iterable-chunks.ts';

describe('iterable/iterableChunks', () => {
  it('splits into chunks, the last one may be shorter', () => {
    expect([...iterableChunks(new Set([1, 2, 3, 4, 5]), 2)]).toStrictEqual([[1, 2], [3, 4], [5]]);
  });
});
