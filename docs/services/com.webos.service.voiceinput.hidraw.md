# `com.webos.service.voiceinput.hidraw`

Raw-HID voice-input service: lists voice-capable input devices and starts/stops microphone streaming from the remote. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDevices`](#getdevices) | private |  | input | inferred | Returns the devices. |
| [`restartTimer`](#restarttimer) | private |  | input | inferred | Restarts the timer. |
| [`start`](#start) | private |  | input | inferred | Starts the voiceinput hidraw. |
| [`startStreaming`](#startstreaming) | private |  | input | inferred | Starts the streaming. |
| [`stopStreaming`](#stopstreaming) | private |  | input | inferred | Stops the streaming. |

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.voiceinput.hidraw/getDevices`

Returns the devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.hidraw/getDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="restarttimer"></a>
## `restartTimer`

`luna://com.webos.service.voiceinput.hidraw/restartTimer`

Restarts the timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.hidraw/restartTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.voiceinput.hidraw/start`

Starts the voiceinput hidraw.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.hidraw/start '{}'
```

> ACG groups: configurator.callbacks, private, activities.callbacks, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstreaming"></a>
## `startStreaming`

`luna://com.webos.service.voiceinput.hidraw/startStreaming`

Starts the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.hidraw/startStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopstreaming"></a>
## `stopStreaming`

`luna://com.webos.service.voiceinput.hidraw/stopStreaming`

Stops the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.hidraw/stopStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
