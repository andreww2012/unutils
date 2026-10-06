import {toDisposable} from '../../src/function/to-disposable.ts';

describe('function/toDisposable', () => {
  it('runs a sync callback on sync disposal', () => {
    const callback = vi.fn<() => void>();
    const disposable = toDisposable(callback);

    disposable[Symbol.dispose]();

    expect(callback).toHaveBeenCalledOnce();
  });

  it('awaits the callback on async disposal', async () => {
    const order: string[] = [];
    const disposable = toDisposable(async () => {
      await Promise.resolve();
      order.push('callback');
    });

    await disposable[Symbol.asyncDispose]();
    order.push('after');

    expect(order).toStrictEqual(['callback', 'after']);
  });
});
