# `com.webos.service.ppm`

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`checkPermission`](#checkpermission) | private |  | misc | Method on com.webos.service.ppm (introspected on-device; parameters undocumented). |
| [`notifyAlertClosed`](#notifyalertclosed) | private |  | misc | Method on com.webos.service.ppm (introspected on-device; parameters undocumented). |
| [`queryPermissions`](#querypermissions) | private |  | misc | Method on com.webos.service.ppm (introspected on-device; parameters undocumented). |
| [`removePermission`](#removepermission) | private |  | misc | Method on com.webos.service.ppm (introspected on-device; parameters undocumented). ⚠️ |
| [`requestPermission`](#requestpermission) | public |  | misc | Method on com.webos.service.ppm (introspected on-device; parameters undocumented). |
| [`setPermission`](#setpermission) | private |  | misc | Setter on com.webos.service.ppm (introspected on-device; parameters undocumented). |
| [`updatePermission`](#updatepermission) | private |  | update | Method on com.webos.service.ppm (introspected on-device; parameters undocumented). |

<a id="checkpermission"></a>
## `checkPermission`

`luna://com.webos.service.ppm/checkPermission`

Method on com.webos.service.ppm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/checkPermission '{}'
```

> ACG groups: private, all, ppm.validation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyalertclosed"></a>
## `notifyAlertClosed`

`luna://com.webos.service.ppm/notifyAlertClosed`

Method on com.webos.service.ppm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/notifyAlertClosed '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="querypermissions"></a>
## `queryPermissions`

`luna://com.webos.service.ppm/queryPermissions`

Method on com.webos.service.ppm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/queryPermissions '{}'
```

> ACG groups: private, all, ppm.query.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepermission"></a>
## `removePermission` ⚠️ DANGEROUS

`luna://com.webos.service.ppm/removePermission`

Method on com.webos.service.ppm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/removePermission '{}'
```

> ACG groups: ppm.management, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpermission"></a>
## `requestPermission`

`luna://com.webos.service.ppm/requestPermission`

Method on com.webos.service.ppm (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/requestPermission '{}'
```

> ACG groups: public, all, ppm.validation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpermission"></a>
## `setPermission`

`luna://com.webos.service.ppm/setPermission`

Setter on com.webos.service.ppm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/setPermission '{}'
```

> ACG groups: ppm.management, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatepermission"></a>
## `updatePermission`

`luna://com.webos.service.ppm/updatePermission`

Method on com.webos.service.ppm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/updatePermission '{}'
```

> ACG groups: ppm.management, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
