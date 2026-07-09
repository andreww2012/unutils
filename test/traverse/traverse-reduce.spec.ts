import {traverseReduce} from '../../src/traverse/traverse-reduce.ts';

describe('traverse/traverseReduce', () => {
  it('folds every node into a single accumulator', () => {
    const sum = traverseReduce(
      {a: 1, b: {c: 2, d: 3}},
      (_context, accumulator, node) => accumulator + (typeof node === 'number' ? node : 0),
      0,
    );

    expect(sum).toBe(6);
  });

  it('passes (context, accumulator, node) in that order', () => {
    const seen: {contextHasPath: boolean; accumulator: unknown; node: unknown}[] = [];
    traverseReduce(
      {a: 1},
      (context, accumulator: string, node) => {
        seen.push({contextHasPath: 'path' in context, accumulator, node});
        return accumulator;
      },
      'ACC',
    );

    expect(seen).toStrictEqual([
      {contextHasPath: true, accumulator: 'ACC', node: {a: 1}},
      {contextHasPath: true, accumulator: 'ACC', node: 1},
    ]);
  });
});
