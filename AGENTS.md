Before your first response, you MUST read [the project guidelines](./.agents/guidelines.md) in full.
Follow them in everything you do, even when you are only answering a question.

# `unutils`

`unutils` is a project aiming at providing as much utility functions as possible from a single source.
It collects utilities from popular utility libraries, such as `es-toolkit`, and provides its own.
All without zero dependencies because all external dependencies are bundled.

## Misc

- The project targets modern JavaScript execution environments (Node.js 22+ and "Baseline Widely Available" web features).
- Update `README.md` to reflect the made changes after you've finished.
- The `sideEffects` field in `package.json` tells bundlers that only `*.global.ts` modules have side effects, so they drop any other module whose exports are unused.
  Other modules, including the code of bundled packages, must not do anything on import that matters even when their exports are unused (patch globals or prototypes, add listeners, etc.)
  `nr test:side-effects` snapshots the code that bundlers can't drop: when the snapshot changes (often after bumping a bundled package), check that the new code doesn't do that.
- When you bump the version of a bundled package, describe only the changes we make ourselves: utilities added, removed or renamed, and behavior changes we make in our code or by patching the package (`patches/`).
  Upstream changes are covered by a link to the full upstream diff between the old and the new version (e.g. a GitHub compare link), which you always add.
  They include fixes, behavior and type changes of utilities we already export, even when our wrappers had to be adjusted to them (e.g. a wrapper signature updated to match a new upstream type).
  If the package has no tags for these versions, use commit hashes the versions were published from.
  This applies everywhere you describe the bump: changesets, commit messages, `README.md` and your replies, etc.
- In changesets, link each upstream utility name to its docs page when it has one, and write enumerations of more than a few items as a (nested) Markdown list.

## Domain description

### Utility

*Utility* is an exported function or a TypeScript type located at `src/<group-name>/<utility-name>.ts`.
This file might also export utility-related symbols like types or constants.
Utility belongs to a single group.
It is re-exported in `src/<group-name>/index.ts`.
