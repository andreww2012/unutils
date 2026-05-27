import {throttle} from '../../src/function/throttle.ts';

describe('function/throttle', () => {
  it('basic test', async () => {
    const seen: number[] = [];
    const fn = throttle(
      (value: number) => {
        seen.push(value);
      },
      30,
      {edges: ['leading']},
    );

    fn(1);
    fn(2);
    fn(3);

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 60);
    });

    expect(seen).toStrictEqual([1]);
  });
});
