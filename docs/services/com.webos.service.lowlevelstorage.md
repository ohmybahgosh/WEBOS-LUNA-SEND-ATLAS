# `com.webos.service.lowlevelstorage`

Low-level key/value storage service exposing get/set data and shutdown. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getData`](#getdata) | private |  | storage | documented | Reads low-level storage (factory/model DB) values by dbid and item name |
| [`setData`](#setdata) | private |  | storage | inferred | Sets the data. |
| [`shutdown`](#shutdown) | private |  | storage | inferred | Shuts down the lowlevelstorage. ⚠️ |

<a id="getdata"></a>
## `getData`

`luna://com.webos.service.lowlevelstorage/getData`

Reads low-level storage (factory/model DB) values by dbid and item name

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `dbgroups` | array of {dbid, items[]} |

```sh
luna-send -n 1 -f 'luna://com.webos.service.lowlevelstorage/getData' '{"dbgroups":[{"dbid":"factorydb","items":["ITEM"]}]}'
```

> Used by webosbrew docs generator for factory export options (/etc/factorymanager/db/exportOptions.json).

Sources: [1](https://github.com/webosbrew/webosbrew.github.io/blob/HEAD/src/views/hacking/dump_lls.js)

<a id="setdata"></a>
## `setData`

`luna://com.webos.service.lowlevelstorage/setData`

Sets the data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.lowlevelstorage/setData '{}'
```

> ACG groups: private, all, lls.data.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown"></a>
## `shutdown` ⚠️ DANGEROUS

`luna://com.webos.service.lowlevelstorage/shutdown`

Shuts down the lowlevelstorage.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.lowlevelstorage/shutdown '{}'
```

> ACG groups: private, all, lls.data. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
