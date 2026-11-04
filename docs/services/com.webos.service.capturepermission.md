# `com.webos.service.capturepermission`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`checkPermission`](#checkpermission) | private |  | media | Method on com.webos.service.capturepermission (introspected on-device; parameters undocumented). |
| [`setPermission`](#setpermission) | private |  | media | Setter on com.webos.service.capturepermission (introspected on-device; parameters undocumented). |

<a id="checkpermission"></a>
## `checkPermission`

`luna://com.webos.service.capturepermission/checkPermission`

Method on com.webos.service.capturepermission (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capturepermission/checkPermission '{}'
```

> ACG groups: private, all, capturepermission.security.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpermission"></a>
## `setPermission`

`luna://com.webos.service.capturepermission/setPermission`

Setter on com.webos.service.capturepermission (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capturepermission/setPermission '{}'
```

> ACG groups: private, all, capturepermission.security.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
