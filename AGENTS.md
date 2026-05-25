# `unutils`

`unutils` is a project aiming at providing as much utility functions as possible from a single source.
It collects utilities from popular utility libraries, such as `es-toolkit`, and provides its own.
All without zero dependencies because the external dependencies are bundled.

- Each utility belongs to a single group like `array`, `function`, `browser`, etc. and lives in its own file at `src/<group name>/<utility-name>.ts`
- Each utility must be tested to cover wide range of usage patterns, including various kinds of edge cases
- The corresponding test should placed in `test/<group name>/<utility-name>.spec.ts` and must have a single describe called `<group name>/utilityName`
- Only if an utility is a pure re-export from the external package, there should only be one test called `basic test`, testing the basic function usage
- We target modern JavaScript execution environments (node 22+ and features from "Baseline Widely Available" group)
- Update `README.md` to reflect the made changes after you've finished.

## Testing

At the end of your work (after you are confident that the given task is complete), run linters & other tools on the changed files (if the latter is allowed by the used tool) and fix the found issues, ignoring the pre-existing ones.

- **Types**: `nr lint:types:go`
- **ESLint**: `pnpm exec eslint changed.ts files.js`
- **Prettier**: `pnpm exec prettier --write --log-level warn changed.ts files.js`
- **Vitest**: `nr test:vitest:cov changed.spec.ts files.spec.js`
- Other project-wide tests: `nr knip && nr spellcheck && build:test`
- If the lockfile was modified: `nr deps:check`
