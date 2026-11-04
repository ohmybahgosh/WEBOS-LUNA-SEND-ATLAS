# `com.webos.service.ruleengine`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`deleteRule`](#deleterule) | private |  | misc | Method on com.webos.service.ruleengine (introspected on-device; parameters undocumented). ⚠️ |
| [`get`](#get) | private |  | misc | Getter on com.webos.service.ruleengine (introspected on-device; parameters undocumented). |
| [`set`](#set) | private |  | misc | Setter on com.webos.service.ruleengine (introspected on-device; parameters undocumented). |

<a id="deleterule"></a>
## `deleteRule` ⚠️ DANGEROUS

`luna://com.webos.service.ruleengine/deleteRule`

Method on com.webos.service.ruleengine (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ruleengine/deleteRule '{}'
```

> ACG groups: all, ruleengine.operation. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="get"></a>
## `get`

`luna://com.webos.service.ruleengine/get`

Getter on com.webos.service.ruleengine (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ruleengine/get '{}'
```

> ACG groups: all, ruleengine.operation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="set"></a>
## `set`

`luna://com.webos.service.ruleengine/set`

Setter on com.webos.service.ruleengine (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ruleengine/set '{}'
```

> ACG groups: all, ruleengine.operation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
