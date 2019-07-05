# frd-formatters

A Formatter collection for me.

## Install

```
npm install frd-formatters
```

## Formatter list

| Name | Description                |
| ---- | -------------------------- |
| z2h  | Convert zenkaku to hankaku |

## Apply formatter to Vue filters

```typescript
import { z2h } from "frd-formatters/dist/index";
Vue.filter("z2h", z2h);
```
