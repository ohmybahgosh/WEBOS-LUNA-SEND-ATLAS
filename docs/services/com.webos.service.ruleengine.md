# `com.webos.service.ruleengine`

Rule engine: gets, sets and deletes automation rules. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`deleteRule`](#deleterule) | private |  | misc | inferred | Deletes the rule. ⚠️ |
| [`get`](#get) | private |  | misc | inferred | Returns the ruleengine. |
| [`set`](#set) | private |  | misc | inferred | Sets the ruleengine. |

<a id="deleterule"></a>
## `deleteRule` ⚠️ DANGEROUS

`luna://com.webos.service.ruleengine/deleteRule`

Deletes the rule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ruleengine/deleteRule '{}'
```

> ACG groups: all, ruleengine.operation. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="get"></a>
## `get`

`luna://com.webos.service.ruleengine/get`

Returns the ruleengine.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ruleengine/get '{}'
```

> ACG groups: all, ruleengine.operation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="set"></a>
## `set`

`luna://com.webos.service.ruleengine/set`

Sets the ruleengine.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ruleengine/set '{}'
```

> ACG groups: all, ruleengine.operation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
