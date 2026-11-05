# `com.webos.service.voiceinput.network`

Networked voice-input service: lists devices, starts and streams voice input over the network, and manages a session timer. _(inferred from the service's methods)_

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDevices`](#getdevices) | private |  | input | inferred | Returns the devices. |
| [`respondEvent`](#respondevent) | private |  | input | inferred | Responds to the event. |
| [`restartTimer`](#restarttimer) | private |  | input | inferred | Restarts the timer. |
| [`start`](#start) | private |  | input | inferred | Starts the voiceinput network. |
| [`startStreaming`](#startstreaming) | private |  | input | inferred | Starts the streaming. |
| [`stopStreaming`](#stopstreaming) | private |  | input | inferred | Stops the streaming. |

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.voiceinput.network/getDevices`

Returns the devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.network/getDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="respondevent"></a>
## `respondEvent`

`luna://com.webos.service.voiceinput.network/respondEvent`

Responds to the event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.network/respondEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="restarttimer"></a>
## `restartTimer`

`luna://com.webos.service.voiceinput.network/restartTimer`

Restarts the timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.network/restartTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.voiceinput.network/start`

Starts the voiceinput network.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.network/start '{}'
```

> ACG groups: configurator.callbacks, private, activities.callbacks, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstreaming"></a>
## `startStreaming`

`luna://com.webos.service.voiceinput.network/startStreaming`

Starts the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.network/startStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopstreaming"></a>
## `stopStreaming`

`luna://com.webos.service.voiceinput.network/stopStreaming`

Stops the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.network/stopStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
