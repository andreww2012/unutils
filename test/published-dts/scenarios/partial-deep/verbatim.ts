import type {PartialDeep} from 'unutils/types';

const value: PartialDeep<{a: {b: number}}> = {a: {}};
void value;
