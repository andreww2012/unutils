import {spread} from '../../src/function/spread.ts';

const add = (a: number, b: number, c: number) => a + b + c;

describe('function/spread', () => {
  it('basic test', () => {
    const spreadAdd = spread(add);

    expect(spreadAdd([1, 2, 3])).toBe(6);
  });
});
