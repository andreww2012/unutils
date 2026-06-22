import type {ValueAtPath} from 'unutils/types';

const found: ValueAtPath<{a: {b: number}}, 'a.b'> = 1;
void found;
// @ts-expect-error the value at 'a.b' is a number, not a string (fails if the bundled type collapsed to `any`)
const wrong: ValueAtPath<{a: {b: number}}, 'a.b'> = 'x';
void wrong;
