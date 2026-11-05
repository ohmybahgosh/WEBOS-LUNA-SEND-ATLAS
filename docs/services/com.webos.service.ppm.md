# `com.webos.service.ppm`

Permission manager (PPM): requests, checks, sets, updates, removes and queries app permissions. _(inferred from the service's methods)_

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkPermission`](#checkpermission) | private |  | misc | inferred | Checks the permission. |
| [`notifyAlertClosed`](#notifyalertclosed) | private |  | misc | inferred | Notifies of the alert closed. |
| [`queryPermissions`](#querypermissions) | private |  | misc | inferred | Queries the permissions. |
| [`removePermission`](#removepermission) | private |  | misc | inferred | Removes the permission. ⚠️ |
| [`requestPermission`](#requestpermission) | public |  | misc | inferred | Requests the permission. |
| [`setPermission`](#setpermission) | private |  | misc | inferred | Sets the permission. |
| [`updatePermission`](#updatepermission) | private |  | update | inferred | Updates the permission. |

<a id="checkpermission"></a>
## `checkPermission`

`luna://com.webos.service.ppm/checkPermission`

Checks the permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/checkPermission '{}'
```

> ACG groups: private, all, ppm.validation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyalertclosed"></a>
## `notifyAlertClosed`

`luna://com.webos.service.ppm/notifyAlertClosed`

Notifies of the alert closed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/notifyAlertClosed '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="querypermissions"></a>
## `queryPermissions`

`luna://com.webos.service.ppm/queryPermissions`

Queries the permissions.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/queryPermissions '{}'
```

> ACG groups: private, all, ppm.query.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepermission"></a>
## `removePermission` ⚠️ DANGEROUS

`luna://com.webos.service.ppm/removePermission`

Removes the permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/removePermission '{}'
```

> ACG groups: ppm.management, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpermission"></a>
## `requestPermission`

`luna://com.webos.service.ppm/requestPermission`

Requests the permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/requestPermission '{}'
```

> ACG groups: public, all, ppm.validation.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpermission"></a>
## `setPermission`

`luna://com.webos.service.ppm/setPermission`

Sets the permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/setPermission '{}'
```

> ACG groups: ppm.management, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatepermission"></a>
## `updatePermission`

`luna://com.webos.service.ppm/updatePermission`

Updates the permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ppm/updatePermission '{}'
```

> ACG groups: ppm.management, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
