# `unutils`

`unutils` is a project aiming at providing as much utility functions as possible from a single source.
It collects utilities from popular utility libraries, such as `es-toolkit`, and provides its own.
All without zero dependencies because the external dependencies are bundled.

## Domain

<!-- eslint-disable-next-line markdown-preferences/heading-casing -->
### Primary entity: Utility

- Utility is *usually* a single exported function placed in `src/<group name>/<utility-name>.ts`.
  It should be further re-exported in `src/<group name>/index.ts`.
  If you add a new group, add a new export in `src/index.ts` and `package.json`.
- It might be in one of 3 different forms:
  1. Pure re-export from an external package.
     Example: `src/array/array-combinations.ts`.
  2. Enhanced version if external package's utility(-ies).
     Example: `src/array/array-difference.ts`.
  3. Fully custom implementation.

  The latter two forms require it to have comprehensive JSDoc documentation with purpose, parameters and return value descriptions, as well as block of examples.

### General guidance

- If you are absolutely sure your implementation is ready (the corresponding task is complete), run testing tools and fix the found issues, ignoring the pre-existing ones.
  If you make any further changes, don't also forget to test your work.
- We target modern JavaScript execution environments (node 22+ and features from "Baseline Widely Available" group), so write code appropriately.
- Update `README.md` to reflect the made changes after you've finished.
- Always challenge your implementation for performance issues and find ways to improve it, primarily algorithmic and memory related.
  Don't over-engineer or over-optimize things though.

<!-- eslint-disable-next-line markdown-preferences/heading-casing -->
### Adding an Utility

- When you're asked to add an array utility, ask yourself: would it make sense and work for any kind of iterable (example: `src/iterable/count-by.ts`).
  If you think it is, ask user whether he/she would like to create a more generalized version of the current function.
- Every utility must be tested and 100% coverage must be achieved on all metrics.
  - The corresponding test should placed in `test/<group name>/<utility-name>.spec.ts` and must have a single describe called `<group name>/utilityName`.
  - Only if the utility is in the form (1), there should only be one test called `basic test`, testing the basic function usage.
- The name of the added utility must exactly match the name of the function that it mirrors or based on - unless there are multiple candidates for the form (2).
  If the name wasn't provided and it is not inferable, explicitly ask user about it.

## Testing tools

Prefer running on the changed files unless not possible or instructed otherwise.

- **Types**: `nr lint:types:go`
- **ESLint**: `pnpm exec eslint changed.ts files.js`
- **Prettier**: `pnpm exec prettier --write --log-level warn changed.ts files.js`
- **Vitest**: `nr test:vitest:cov changed.spec.ts files.spec.js`
- Other project-wide tests: `nr knip && nr spellcheck && build:test`
- If the lockfile was modified: `nr deps:check`
