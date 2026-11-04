# `com.webos.service.lowlevelstorage`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getData`](#getdata) | private |  | storage | Reads low-level storage (factory/model DB) values by dbid and item name |

<a id="getdata"></a>
## `getData`

`luna://com.webos.service.lowlevelstorage/getData`

Reads low-level storage (factory/model DB) values by dbid and item name

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `dbgroups` | array of {dbid, items[]} |

```sh
luna-send -n 1 -f 'luna://com.webos.service.lowlevelstorage/getData' '{"dbgroups":[{"dbid":"factorydb","items":["ITEM"]}]}'
```

> Used by webosbrew docs generator for factory export options (/etc/factorymanager/db/exportOptions.json).

Sources: [1](https://github.com/webosbrew/webosbrew.github.io/blob/HEAD/src/views/hacking/dump_lls.js)
