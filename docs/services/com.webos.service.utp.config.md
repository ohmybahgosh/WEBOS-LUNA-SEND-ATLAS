# `com.webos.service.utp.config`

UTP config helper exposing a query for supported broadcast standards. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getBroadcastStandardsSupport`](#getbroadcaststandardssupport) | private |  | settings | inferred | Returns the broadcast standards support. |

<a id="getbroadcaststandardssupport"></a>
## `getBroadcastStandardsSupport`

`luna://com.webos.service.utp.config/getBroadcastStandardsSupport`

Returns the broadcast standards support.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.config/getBroadcastStandardsSupport '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
