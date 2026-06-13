import {structuredStringify} from '../../src/json/structured-stringify.ts';

describe('json/structuredStringify', () => {
  it('basic test', () => {
    const serialized = structuredStringify(new Map([['a', 1]]));

    expect(serialized).toBeTypeOf('string');
    expect(serialized).toContain('Map');
  });
});
