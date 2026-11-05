# `com.webos.service.voiceinput.preprocessor`

Voice-input preprocessor: starts and stops microphone streaming, sets the trigger point, and runs beamforming/web-BSI utilities over the mic devices. _(inferred from the service's methods)_

11 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDataVersion`](#getdataversion) | private |  | input | inferred | Returns the data version. |
| [`getDevices`](#getdevices) | private |  | input | inferred | Returns the devices. |
| [`restartTimer`](#restarttimer) | private |  | input | inferred | Restarts the timer. |
| [`setTriggerPoint`](#settriggerpoint) | private |  | input | inferred | Sets the trigger point. |
| [`start`](#start) | private |  | input | inferred | Starts the voiceinput preprocessor. |
| [`startStreaming`](#startstreaming) | private |  | input | inferred | Starts the streaming. |
| [`stopStreaming`](#stopstreaming) | private |  | input | inferred | Stops the streaming. |
| [`util/runByFile`](#util_runbyfile) | private |  | input | inferred | Runs the by file (util) |
| [`util/startWebBSI`](#util_startwebbsi) | private |  | input | inferred | Starts the web BSI (util) |
| [`util/stopWebBSI`](#util_stopwebbsi) | private |  | input | inferred | Stops the web BSI (util) |
| [`util/subscribeFileOutput`](#util_subscribefileoutput) | private |  | input | inferred | Subscribes to the file output (util) |

<a id="getdataversion"></a>
## `getDataVersion`

`luna://com.webos.service.voiceinput.preprocessor/getDataVersion`

Returns the data version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `version` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/getDataVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.voiceinput.preprocessor/getDevices`

Returns the devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `deviceName` |  |
| `deviceType` |  |
| `devices` |  |
| `id` |  |
| `key` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/getDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="restarttimer"></a>
## `restartTimer`

`luna://com.webos.service.voiceinput.preprocessor/restartTimer`

Restarts the timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/restartTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settriggerpoint"></a>
## `setTriggerPoint`

`luna://com.webos.service.voiceinput.preprocessor/setTriggerPoint`

Sets the trigger point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/setTriggerPoint '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.voiceinput.preprocessor/start`

Starts the voiceinput preprocessor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/start '{}'
```

> ACG groups: configurator.callbacks, private, activities.callbacks, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstreaming"></a>
## `startStreaming`

`luna://com.webos.service.voiceinput.preprocessor/startStreaming`

Starts the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/startStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopstreaming"></a>
## `stopStreaming`

`luna://com.webos.service.voiceinput.preprocessor/stopStreaming`

Stops the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/stopStreaming '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_runbyfile"></a>
## `util/runByFile`

`luna://com.webos.service.voiceinput.preprocessor/util/runByFile`

Runs the by file (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/util/runByFile '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_startwebbsi"></a>
## `util/startWebBSI`

`luna://com.webos.service.voiceinput.preprocessor/util/startWebBSI`

Starts the web BSI (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/util/startWebBSI '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_stopwebbsi"></a>
## `util/stopWebBSI`

`luna://com.webos.service.voiceinput.preprocessor/util/stopWebBSI`

Stops the web BSI (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/util/stopWebBSI '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_subscribefileoutput"></a>
## `util/subscribeFileOutput`

`luna://com.webos.service.voiceinput.preprocessor/util/subscribeFileOutput`

Subscribes to the file output (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput.preprocessor/util/subscribeFileOutput '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
