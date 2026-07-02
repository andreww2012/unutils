# Package: [`yieldable-json`](https://npmx.dev/yieldable-json)

> **Legend:** ✅ added · ❌ not added (see notes) · 🚧 under consideration · ⌛ planned

| Original function group and name   | Status | Our function group and name | Notes                                                                                             |
| ---------------------------------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------- |
| [`parseAsync`][yieldable-json]     | ✅     | `json/jsonParseAsync`       | Promisified, typed; non-blocking `JSON.parse` that yields to the event loop. Optional `intensity` |
| [`stringifyAsync`][yieldable-json] | ✅     | `json/jsonStringifyAsync`   | Promisified, typed; non-blocking `JSON.stringify`. Optional `replacer`/`space`/`intensity`        |

> **Note:** `yieldable-json`'s own argument parser mishandles `stringifyAsync`'s `space`/`intensity` when both are passed; the wrapper works around it. Its `ParseError`/`StringifyError` do not extend `Error`, so rejections carry those objects as-is.

[yieldable-json]: https://github.com/ibmruntimes/yieldable-json
