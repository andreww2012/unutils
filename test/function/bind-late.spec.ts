import {bindLate} from '../../src/function/bind-late.ts';

describe('function/bindLate', () => {
  it('basic test', () => {
    const object = {
      greet(greeting: string, name: string) {
        return `${greeting}, ${name}`;
      },
    };
    const greet = bindLate(object, 'greet', 'Hi');

    expect(greet('Ann')).toBe('Hi, Ann');

    object.greet = (greeting, name) => `${greeting.toUpperCase()} ${name}`;

    expect(greet('Bob')).toBe('HI Bob');
  });
});
