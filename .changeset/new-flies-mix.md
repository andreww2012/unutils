---
'unutils': patch
---

The package now declares the `sideEffects` field in `package.json`, so bundlers drop unused modules: for example, importing a single utility from the main entrypoint no longer adds ~19 KB of unused code to the bundle
