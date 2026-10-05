---
'unutils': minor
---

Added two new `map` utilities that mirror the native `Map#getOrInsert` and `Map#getOrInsertComputed` methods, which are not yet widely available:

- `mapGetOrInsert` - returns the value stored under a key, inserting an eagerly built default first when the key is missing
- `mapGetOrInsertComputed` - the lazy counterpart, building the default only on a miss

Both return a non-optional value, so `mapGetOrInsertComputed(map, key, () => []).push(item)` replaces the usual read-check-insert dance.
