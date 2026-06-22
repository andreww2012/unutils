import type {Merge} from 'unutils';

const merged: Merge<{a: 1; b: 2}, {b: 3}> = {a: 1, b: 3};
void merged;
