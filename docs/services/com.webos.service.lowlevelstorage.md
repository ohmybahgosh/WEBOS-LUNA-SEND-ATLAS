# `com.webos.service.lowlevelstorage`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getData`](#getdata) | private |  | storage | Reads low-level storage (factory/model DB) values by dbid and item name |
| [`setData`](#setdata) | private |  | storage | Setter on com.webos.service.lowlevelstorage (introspected on-device; parameters undocumented). |
| [`shutdown`](#shutdown) | private |  | storage | Method on com.webos.service.lowlevelstorage (introspected on-device; parameters undocumented). ⚠️ |

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

<a id="setdata"></a>
## `setData`

`luna://com.webos.service.lowlevelstorage/setData`

Setter on com.webos.service.lowlevelstorage (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.lowlevelstorage/setData '{}'
```

> ACG groups: private, all, lls.data.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown"></a>
## `shutdown` ⚠️ DANGEROUS

`luna://com.webos.service.lowlevelstorage/shutdown`

Method on com.webos.service.lowlevelstorage (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.lowlevelstorage/shutdown '{}'
```

> ACG groups: private, all, lls.data. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
