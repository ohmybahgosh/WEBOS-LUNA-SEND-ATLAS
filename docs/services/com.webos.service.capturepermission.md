# `com.webos.service.capturepermission`

Screen-capture permission service: checks and sets whether screen capture is permitted. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkPermission`](#checkpermission) | private |  | media | inferred | Checks the permission. |
| [`setPermission`](#setpermission) | private |  | media | inferred | Sets the permission. |

<a id="checkpermission"></a>
## `checkPermission`

`luna://com.webos.service.capturepermission/checkPermission`

Checks the permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.capturepermission/checkPermission '{}'
```

> ACG groups: private, all, capturepermission.security.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpermission"></a>
## `setPermission`

`luna://com.webos.service.capturepermission/setPermission`

Sets the permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.capturepermission/setPermission '{}'
```

> ACG groups: private, all, capturepermission.security.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
