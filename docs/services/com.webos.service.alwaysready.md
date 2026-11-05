# `com.webos.service.alwaysready`

Always-ready/standby service: manages the always-on-display (AOD) status, monitors device and GPIO state, and controls standby timers. _(inferred from the service's methods)_

8 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`aod/getStatus`](#aod_getstatus) | private |  | misc | inferred | Returns the status (aod) |
| [`aod/setStatus`](#aod_setstatus) | private |  | misc | inferred | Sets the status (aod) |
| [`monitor/getDeviceState`](#monitor_getdevicestate) | private |  | misc | inferred | Returns the device state (monitor) |
| [`monitor/getGPIOState`](#monitor_getgpiostate) | private |  | misc | inferred | Returns the GPIO state (monitor) |
| [`test`](#test) | private |  | misc | inferred | Tests the alwaysready. |
| [`timer/pause`](#timer_pause) | private |  | input | inferred | Pauses the alwaysready (timer) |
| [`timer/reset`](#timer_reset) | private |  | input | inferred | Resets the alwaysready (timer) ⚠️ |
| [`timer/skipOnTimer`](#timer_skipontimer) | private |  | input | inferred | Skips the on timer (timer) |

<a id="aod_getstatus"></a>
## `aod/getStatus`

`luna://com.webos.service.alwaysready/aod/getStatus`

Returns the status (aod)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/aod/getStatus '{}'
```

> ACG groups: private, all, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="aod_setstatus"></a>
## `aod/setStatus`

`luna://com.webos.service.alwaysready/aod/setStatus`

Sets the status (aod)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/aod/setStatus '{}'
```

> ACG groups: private, all, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="monitor_getdevicestate"></a>
## `monitor/getDeviceState`

`luna://com.webos.service.alwaysready/monitor/getDeviceState`

Returns the device state (monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/monitor/getDeviceState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="monitor_getgpiostate"></a>
## `monitor/getGPIOState`

`luna://com.webos.service.alwaysready/monitor/getGPIOState`

Returns the GPIO state (monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/monitor/getGPIOState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.alwaysready/test`

Tests the alwaysready.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_pause"></a>
## `timer/pause`

`luna://com.webos.service.alwaysready/timer/pause`

Pauses the alwaysready (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/timer/pause '{}'
```

> ACG groups: private, all, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_reset"></a>
## `timer/reset` ⚠️ DANGEROUS

`luna://com.webos.service.alwaysready/timer/reset`

Resets the alwaysready (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/timer/reset '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_skipontimer"></a>
## `timer/skipOnTimer`

`luna://com.webos.service.alwaysready/timer/skipOnTimer`

Skips the on timer (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/timer/skipOnTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
