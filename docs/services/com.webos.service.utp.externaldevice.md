# `com.webos.service.utp.externaldevice`

UTP external-input/device service: reports current and last input, external-input and signal state, switches inputs, and handles CEC IDs and HDMI info. _(inferred from the service's methods)_

19 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getCurrentInput`](#getcurrentinput) | private |  | input | inferred | Returns the current input. |
| [`getExternalInputStatusList`](#getexternalinputstatuslist) | private |  | input | inferred | Returns the external input status list. |
| [`getLastInput`](#getlastinput) | private |  | input | inferred | Returns the last input. |
| [`getLastInputInfoDB`](#getlastinputinfodb) | private |  | db | inferred | Returns the last input info DB. |
| [`getMaximumExternalDeviceNumber`](#getmaximumexternaldevicenumber) | private |  | input | inferred | Returns the maximum external device number. |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | inferred | Returns the video info. |
| [`input/bindFakePipeline`](#input_bindfakepipeline) | private |  | input | inferred | Binds the fake pipeline (input) |
| [`input/close`](#input_close) | private |  | input | inferred | Closes the UTP externaldevice (input) |
| [`input/getCurrentAudioCodecType`](#input_getcurrentaudiocodectype) | private |  | audio | inferred | Returns the current audio codec type (input) |
| [`input/getExternalInputState`](#input_getexternalinputstate) | private |  | input | inferred | Returns the external input state (input) |
| [`input/getSignalState`](#input_getsignalstate) | private |  | input | inferred | Returns the signal state (input) |
| [`input/getSwitchResult`](#input_getswitchresult) | private |  | input | inferred | Returns the switch result (input) |
| [`input/open`](#input_open) | private |  | input | inferred | Opens the UTP externaldevice (input) |
| [`input/pause`](#input_pause) | private |  | input | inferred | Pauses the UTP externaldevice (input) |
| [`input/setCECUniqueId`](#input_setcecuniqueid) | private |  | input | inferred | Sets the CEC unique ID (input) |
| [`input/stop`](#input_stop) | private |  | input | inferred | Stops the UTP externaldevice (input) |
| [`input/switchExternalInput`](#input_switchexternalinput) | private |  | input | inferred | Switches the external input (input) |
| [`setHdmiInfo`](#sethdmiinfo) | private |  | input | inferred | Sets the HDMI info. |
| [`setLastInputInfoDB`](#setlastinputinfodb) | private |  | db | inferred | Sets the last input info DB. |

<a id="getcurrentinput"></a>
## `getCurrentInput`

`luna://com.webos.service.utp.externaldevice/getCurrentInput`

Returns the current input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getCurrentInput '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getexternalinputstatuslist"></a>
## `getExternalInputStatusList`

`luna://com.webos.service.utp.externaldevice/getExternalInputStatusList`

Returns the external input status list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getExternalInputStatusList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getlastinput"></a>
## `getLastInput`

`luna://com.webos.service.utp.externaldevice/getLastInput`

Returns the last input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getLastInput '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getlastinputinfodb"></a>
## `getLastInputInfoDB`

`luna://com.webos.service.utp.externaldevice/getLastInputInfoDB`

Returns the last input info DB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getLastInputInfoDB '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmaximumexternaldevicenumber"></a>
## `getMaximumExternalDeviceNumber`

`luna://com.webos.service.utp.externaldevice/getMaximumExternalDeviceNumber`

Returns the maximum external device number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getMaximumExternalDeviceNumber '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.utp.externaldevice/getVideoInfo`

Returns the video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getVideoInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_bindfakepipeline"></a>
## `input/bindFakePipeline`

`luna://com.webos.service.utp.externaldevice/input/bindFakePipeline`

Binds the fake pipeline (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/bindFakePipeline '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_close"></a>
## `input/close`

`luna://com.webos.service.utp.externaldevice/input/close`

Closes the UTP externaldevice (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/close '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getcurrentaudiocodectype"></a>
## `input/getCurrentAudioCodecType`

`luna://com.webos.service.utp.externaldevice/input/getCurrentAudioCodecType`

Returns the current audio codec type (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getCurrentAudioCodecType '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getexternalinputstate"></a>
## `input/getExternalInputState`

`luna://com.webos.service.utp.externaldevice/input/getExternalInputState`

Returns the external input state (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getExternalInputState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getsignalstate"></a>
## `input/getSignalState`

`luna://com.webos.service.utp.externaldevice/input/getSignalState`

Returns the signal state (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getSignalState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getswitchresult"></a>
## `input/getSwitchResult`

`luna://com.webos.service.utp.externaldevice/input/getSwitchResult`

Returns the switch result (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getSwitchResult '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_open"></a>
## `input/open`

`luna://com.webos.service.utp.externaldevice/input/open`

Opens the UTP externaldevice (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/open '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_pause"></a>
## `input/pause`

`luna://com.webos.service.utp.externaldevice/input/pause`

Pauses the UTP externaldevice (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/pause '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_setcecuniqueid"></a>
## `input/setCECUniqueId`

`luna://com.webos.service.utp.externaldevice/input/setCECUniqueId`

Sets the CEC unique ID (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/setCECUniqueId '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_stop"></a>
## `input/stop`

`luna://com.webos.service.utp.externaldevice/input/stop`

Stops the UTP externaldevice (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/stop '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_switchexternalinput"></a>
## `input/switchExternalInput`

`luna://com.webos.service.utp.externaldevice/input/switchExternalInput`

Switches the external input (input)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/switchExternalInput '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sethdmiinfo"></a>
## `setHdmiInfo`

`luna://com.webos.service.utp.externaldevice/setHdmiInfo`

Sets the HDMI info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/setHdmiInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setlastinputinfodb"></a>
## `setLastInputInfoDB`

`luna://com.webos.service.utp.externaldevice/setLastInputInfoDB`

Sets the last input info DB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/setLastInputInfoDB '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
