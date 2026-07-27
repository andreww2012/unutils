<!-- cspell:ignore behaviour organisation -->

# `unutils`

`unutils` is a project aiming at providing as much utility functions as possible from a single source.
It collects utilities from popular utility libraries, such as `es-toolkit`, and provides its own.
All without zero dependencies because all external dependencies are bundled.

## Style guide

Follow [this guide](./.agents/style-guide.md).

### Misc

- The project targets modern JavaScript execution environments (Node.js 22+ and "Baseline Widely Available" web features).
- Update `README.md` to reflect the made changes after you've finished.

## Domain description

### Utility

*Utility* is an exported function or a TypeScript type located at `src/<group-name>/<utility-name>.ts`.
This file might also export utility-related symbols like types or constants.
Utility belongs to a single group.
It is re-exported in `src/<group-name>/index.ts`.
