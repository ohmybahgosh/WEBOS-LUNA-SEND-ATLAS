# `com.webos.service.qbd`

Opaque input-related service; appears to manage device resume timeout and reset timing based on its get/set methods. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDevicesResumeTimeout`](#getdevicesresumetimeout) | private |  | input | inferred | Returns the devices resume timeout. |
| [`getResetTime`](#getresettime) | private |  | input | inferred | Returns the reset time. |
| [`setDevicesResumeTimeout`](#setdevicesresumetimeout) | private |  | input | inferred | Sets the devices resume timeout. |
| [`setResetTime`](#setresettime) | private |  | input | inferred | Sets the reset time. ⚠️ |
| [`test`](#test) | private |  | misc | inferred | Tests the qbd. |

<a id="getdevicesresumetimeout"></a>
## `getDevicesResumeTimeout`

`luna://com.webos.service.qbd/getDevicesResumeTimeout`

Returns the devices resume timeout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `timeout` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.qbd/getDevicesResumeTimeout '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresettime"></a>
## `getResetTime`

`luna://com.webos.service.qbd/getResetTime`

Returns the reset time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.qbd/getResetTime '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdevicesresumetimeout"></a>
## `setDevicesResumeTimeout`

`luna://com.webos.service.qbd/setDevicesResumeTimeout`

Sets the devices resume timeout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.qbd/setDevicesResumeTimeout '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setresettime"></a>
## `setResetTime` ⚠️ DANGEROUS

`luna://com.webos.service.qbd/setResetTime`

Sets the reset time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.qbd/setResetTime '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.qbd/test`

Tests the qbd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.qbd/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
