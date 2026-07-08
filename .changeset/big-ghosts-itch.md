---
'unutils': patch
---

`arrayify` now correctly flattens heterogeneous array types (`(T | T[])[]` becomes `T[]`)