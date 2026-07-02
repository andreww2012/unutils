<!-- cspell:ignore behaviour -->

# `unutils`

`unutils` is a project aiming at providing as much utility functions as possible from a single source.
It collects utilities from popular utility libraries, such as `es-toolkit`, and provides its own.
All without zero dependencies because all external dependencies are bundled.

## Style guide

### Code

- Use `const` instead of `let` whenever possible.
- Prefer arrow functions whenever possible.
- Avoid common shorthands like `str`, `arr`, `cls`, `brk`, `err`, etc. Use full words. Exceptions: `dict`, `ctx`, `acc`.
- Don't add any comments unless they explain the non-obvious "why" behind the code. Avoid verbosity but not sacrifice clarity.
- Never omit curly braces around blocks (like `if`, `else`, etc.)
- Let the type system infer types whenever possible, i.e. avoid specifying types as much as possible.
- Do not `export` symbols not used outside the current file and not provided publicly.
- Hoist symbols and literals (like regexes, functions, constants) as much as possible.

### Misc

- The project targets modern JavaScript execution environments (Node.js 22+ and "Baseline Widely Available" web features).
- All FS names are written in `kebab-case`.
- Avoid British variants of words like behaviour.

## Testing tools

Prefer running on the *all* changed files (not only source files!) unless not possible or instructed otherwise.

- **Types**: `nr lint:types:go`
- **ESLint**: `pnpm exec eslint list.ext1 of.ext2 changed.ext3 files.ext4`
- **Prettier**: `pnpm exec prettier --write --log-level warn changed.ts files.js`
- **Vitest**: `nr test:vitest:cov --coverage.reporter=text changed.spec.ts files.spec.js`
- Other project-wide tests: `nr knip && nr spellcheck && build:test`
- If the lockfile was modified: `nr deps:check`

<!-- eslint-disable-next-line markdown-preferences/heading-casing -->
### CSpell

Prefer ignoring words only encountered in a single file in that file itself with the top-level CSpell comment `cspell:ignore words to disable`.

## General workflow

- If you are absolutely sure have finished the current task, run testing tools and fix the found issues, ignoring the pre-existing ones.
  If you make any further changes, the above process applies.
- Update `README.md` to reflect the made changes after you've finished.
- Always challenge your implementation for performance issues and find ways to improve it, primarily algorithmic and memory related.
  Don't over-engineer or over-optimize things though.
- Never commit or stage changes without explicit ask.

<!-- eslint-disable-next-line markdown-preferences/heading-casing -->
### How to implement X

Find an appropriate skill at `.agents/skills`.

## Domain description

### Utility

*Utility* is an exported function or a TypeScript type located at `src/<group-name>/<utility-name>.ts`.
This file might also export utility-related symbols like types or constants.
Utility belongs to a single group.
It is re-exported in `src/<group-name>/index.ts`.
