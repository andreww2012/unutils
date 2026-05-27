import {debounce} from '../../src/function/debounce.ts';

describe('function/debounce', () => {
  it('basic test', async () => {
    const seen: number[] = [];
    const fn = debounce((value: number) => {
      seen.push(value);
    }, 10);

    fn(1);
    fn(2);
    fn(3);

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 30);
    });

    expect(seen).toStrictEqual([3]);
  });
});
