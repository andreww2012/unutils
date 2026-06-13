import {structuredParse} from '../../src/json/structured-parse.ts';
import {structuredStringify} from '../../src/json/structured-stringify.ts';

describe('json/structuredParse', () => {
  it('basic test', () => {
    const original = new Map<string, number>([['a', 1]]);
    const revived = structuredParse(structuredStringify(original)) as Map<string, number>;

    expect(revived).toBeInstanceOf(Map);
    expect(revived.get('a')).toBe(1);
  });
});
