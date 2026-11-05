# `com.webos.service.systemmanager`

System manager exposing boot status (single getBootStatus method). _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getBootStatus`](#getbootstatus) | public |  | misc | inferred | Returns the boot status. |

<a id="getbootstatus"></a>
## `getBootStatus`

`luna://com.webos.service.systemmanager/getBootStatus`

Returns the boot status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemmanager/getBootStatus '{}'
```

> ACG groups: private, public, system, settings, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
