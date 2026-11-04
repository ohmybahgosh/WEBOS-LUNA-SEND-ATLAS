# `com.webos.service.alwaysready`

8 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`aod/getStatus`](#aod_getstatus) | private |  | misc | Getter on com.webos.service.alwaysready (introspected on-device; parameters undocumented). |
| [`aod/setStatus`](#aod_setstatus) | private |  | misc | Setter on com.webos.service.alwaysready (introspected on-device; parameters undocumented). |
| [`monitor/getDeviceState`](#monitor_getdevicestate) | private |  | misc | Getter on com.webos.service.alwaysready (introspected on-device; parameters undocumented). |
| [`monitor/getGPIOState`](#monitor_getgpiostate) | private |  | misc | Getter on com.webos.service.alwaysready (introspected on-device; parameters undocumented). |
| [`test`](#test) | private |  | misc | Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented). |
| [`timer/pause`](#timer_pause) | private |  | input | Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented). |
| [`timer/reset`](#timer_reset) | private |  | input | Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented). ⚠️ |
| [`timer/skipOnTimer`](#timer_skipontimer) | private |  | input | Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented). |

<a id="aod_getstatus"></a>
## `aod/getStatus`

`luna://com.webos.service.alwaysready/aod/getStatus`

Getter on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/aod/getStatus '{}'
```

> ACG groups: private, all, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="aod_setstatus"></a>
## `aod/setStatus`

`luna://com.webos.service.alwaysready/aod/setStatus`

Setter on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/aod/setStatus '{}'
```

> ACG groups: private, all, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="monitor_getdevicestate"></a>
## `monitor/getDeviceState`

`luna://com.webos.service.alwaysready/monitor/getDeviceState`

Getter on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/monitor/getDeviceState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="monitor_getgpiostate"></a>
## `monitor/getGPIOState`

`luna://com.webos.service.alwaysready/monitor/getGPIOState`

Getter on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/monitor/getGPIOState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.alwaysready/test`

Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_pause"></a>
## `timer/pause`

`luna://com.webos.service.alwaysready/timer/pause`

Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/timer/pause '{}'
```

> ACG groups: private, all, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_reset"></a>
## `timer/reset` ⚠️ DANGEROUS

`luna://com.webos.service.alwaysready/timer/reset`

Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/timer/reset '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_skipontimer"></a>
## `timer/skipOnTimer`

`luna://com.webos.service.alwaysready/timer/skipOnTimer`

Method on com.webos.service.alwaysready (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.alwaysready/timer/skipOnTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
