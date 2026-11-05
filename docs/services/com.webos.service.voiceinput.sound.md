# `com.webos.service.voiceinput.sound`

Voice-input sound/mic subservice: enumerates mic devices, streams mic audio, reports mic-switch status, and runs mic test/localization. _(inferred from the service's methods)_

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDevices`](#getdevices) | private |  | input | inferred | Returns the devices. |
| [`getMicSwitchStatus`](#getmicswitchstatus) | private |  | input | inferred | Returns the mic switch status. |
| [`restartTimer`](#restarttimer) | private |  | input | inferred | Restarts the timer. |
| [`start`](#start) | private |  | input | inferred | Starts the voiceinput sound. |
| [`startStreaming`](#startstreaming) | private |  | input | inferred | Starts the streaming. |
| [`stopStreaming`](#stopstreaming) | private |  | input | inferred | Stops the streaming. |
| [`tas/endTest`](#tas_endtest) | private |  | input | inferred | Handles the end test (tas) |
| [`tas/readyTest`](#tas_readytest) | private |  | input | inferred | Handles the ready test (tas) |
| [`tas/runTest`](#tas_runtest) | private |  | input | inferred | Runs the test (tas) |
| [`util/localizationTest`](#util_localizationtest) | private |  | input | inferred | Handles the localization test (util) |

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.voiceinput.sound/getDevices`

Returns the devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/getDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmicswitchstatus"></a>
## `getMicSwitchStatus`

`luna://com.webos.service.voiceinput.sound/getMicSwitchStatus`

Returns the mic switch status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/getMicSwitchStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="restarttimer"></a>
## `restartTimer`

`luna://com.webos.service.voiceinput.sound/restartTimer`

Restarts the timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/restartTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.voiceinput.sound/start`

Starts the voiceinput sound.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/start '{}'
```

> ACG groups: configurator.callbacks, private, activities.callbacks, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstreaming"></a>
## `startStreaming`

`luna://com.webos.service.voiceinput.sound/startStreaming`

Starts the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/startStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopstreaming"></a>
## `stopStreaming`

`luna://com.webos.service.voiceinput.sound/stopStreaming`

Stops the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/stopStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_endtest"></a>
## `tas/endTest`

`luna://com.webos.service.voiceinput.sound/tas/endTest`

Handles the end test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/tas/endTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_readytest"></a>
## `tas/readyTest`

`luna://com.webos.service.voiceinput.sound/tas/readyTest`

Handles the ready test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/tas/readyTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_runtest"></a>
## `tas/runTest`

`luna://com.webos.service.voiceinput.sound/tas/runTest`

Runs the test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/tas/runTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_localizationtest"></a>
## `util/localizationTest`

`luna://com.webos.service.voiceinput.sound/util/localizationTest`

Handles the localization test (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.sound/util/localizationTest '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
