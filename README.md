# frd-formatters

A Formatter collection for me.


## Formatter list

| Name | Description|
| ---  | ---        |
| z2h  | Convert zenkaku to hankaku |


## (Tips) Apply formatters to Vue filters

```typescript
import {z2h} from "frd-formatters/dist/index";
Vue.filter("z2h",z2h);
```




