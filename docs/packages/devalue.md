# Package: [`devalue`](https://npmx.dev/devalue)

> **Legend:** ✅ added · ❌ not added (see notes) · 🚧 under consideration · ⌛ planned

| Original function group and name | Status | Our function group and name | Notes                                                                                                |
| -------------------------------- | ------ | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`stringify`][devalue]           | ✅     | `json/structuredStringify`  | Renamed; serializes `Date`/`Map`/`Set`/`BigInt`/etc. and circular refs. Output is **NOT** valid JSON |
| [`parse`][devalue]               | ✅     | `json/structuredParse`      | Renamed; revives a string produced by `structuredStringify` (paired, closed format)                  |
| [`uneval`][devalue]              | ❌     | *(not added)*               | Emits evaluatable JS source; needs `eval`/inlining to consume — niche and easy to misuse             |
| [`stringifyAsync`][devalue]      | 🚧     | *(under consideration)*     | Awaits `Promise`s in the graph; narrow use case                                                      |

[devalue]: https://github.com/Rich-Harris/devalue
