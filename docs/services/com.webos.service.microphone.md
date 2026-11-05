# `com.webos.service.microphone`

Microphone service: enumerates microphones, opens/starts/stops capture, reports info, and requests microphone permission.

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closeMicrophone`](#closemicrophone) | private |  | misc | inferred | Closes the microphone. |
| [`getInfo`](#getinfo) | private |  | misc | inferred | Returns the info. |
| [`getMicrophones`](#getmicrophones) | private |  | misc | inferred | Returns the microphones. |
| [`openMicrophone`](#openmicrophone) | private |  | misc | inferred | Opens the microphone. |
| [`requestMicrophonePermission`](#requestmicrophonepermission) | private |  | misc | inferred | Requests the microphone permission. |
| [`startMicrophone`](#startmicrophone) | private |  | misc | inferred | Starts the microphone. |
| [`stopMicrophone`](#stopmicrophone) | private |  | misc | inferred | Stops the microphone. |

<a id="closemicrophone"></a>
## `closeMicrophone`

`luna://com.webos.service.microphone/closeMicrophone`

Closes the microphone.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.microphone/closeMicrophone '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinfo"></a>
## `getInfo`

`luna://com.webos.service.microphone/getInfo`

Returns the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.microphone/getInfo '{}'
```

> ACG groups: microphone.privacy, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmicrophones"></a>
## `getMicrophones`

`luna://com.webos.service.microphone/getMicrophones`

Returns the microphones.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `deviceList` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.microphone/getMicrophones '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="openmicrophone"></a>
## `openMicrophone`

`luna://com.webos.service.microphone/openMicrophone`

Opens the microphone.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.microphone/openMicrophone '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestmicrophonepermission"></a>
## `requestMicrophonePermission`

`luna://com.webos.service.microphone/requestMicrophonePermission`

Requests the microphone permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.microphone/requestMicrophonePermission '{}'
```

> ACG groups: microphone.privacy, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startmicrophone"></a>
## `startMicrophone`

`luna://com.webos.service.microphone/startMicrophone`

Starts the microphone.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.microphone/startMicrophone '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopmicrophone"></a>
## `stopMicrophone`

`luna://com.webos.service.microphone/stopMicrophone`

Stops the microphone.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.microphone/stopMicrophone '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
