# `com.webos.service.utp.externaldevice`

19 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getCurrentInput`](#getcurrentinput) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`getExternalInputStatusList`](#getexternalinputstatuslist) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`getLastInput`](#getlastinput) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`getLastInputInfoDB`](#getlastinputinfodb) | private |  | db | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`getMaximumExternalDeviceNumber`](#getmaximumexternaldevicenumber) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/bindFakePipeline`](#input_bindfakepipeline) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/close`](#input_close) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/getCurrentAudioCodecType`](#input_getcurrentaudiocodectype) | private |  | audio | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/getExternalInputState`](#input_getexternalinputstate) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/getSignalState`](#input_getsignalstate) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/getSwitchResult`](#input_getswitchresult) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/open`](#input_open) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/pause`](#input_pause) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/setCECUniqueId`](#input_setcecuniqueid) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/stop`](#input_stop) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`input/switchExternalInput`](#input_switchexternalinput) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`setHdmiInfo`](#sethdmiinfo) | private |  | input | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |
| [`setLastInputInfoDB`](#setlastinputinfodb) | private |  | db | Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented). |

<a id="getcurrentinput"></a>
## `getCurrentInput`

`luna://com.webos.service.utp.externaldevice/getCurrentInput`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getCurrentInput '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getexternalinputstatuslist"></a>
## `getExternalInputStatusList`

`luna://com.webos.service.utp.externaldevice/getExternalInputStatusList`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getExternalInputStatusList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getlastinput"></a>
## `getLastInput`

`luna://com.webos.service.utp.externaldevice/getLastInput`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getLastInput '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getlastinputinfodb"></a>
## `getLastInputInfoDB`

`luna://com.webos.service.utp.externaldevice/getLastInputInfoDB`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getLastInputInfoDB '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmaximumexternaldevicenumber"></a>
## `getMaximumExternalDeviceNumber`

`luna://com.webos.service.utp.externaldevice/getMaximumExternalDeviceNumber`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getMaximumExternalDeviceNumber '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.utp.externaldevice/getVideoInfo`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/getVideoInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_bindfakepipeline"></a>
## `input/bindFakePipeline`

`luna://com.webos.service.utp.externaldevice/input/bindFakePipeline`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/bindFakePipeline '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_close"></a>
## `input/close`

`luna://com.webos.service.utp.externaldevice/input/close`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/close '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getcurrentaudiocodectype"></a>
## `input/getCurrentAudioCodecType`

`luna://com.webos.service.utp.externaldevice/input/getCurrentAudioCodecType`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getCurrentAudioCodecType '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getexternalinputstate"></a>
## `input/getExternalInputState`

`luna://com.webos.service.utp.externaldevice/input/getExternalInputState`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getExternalInputState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getsignalstate"></a>
## `input/getSignalState`

`luna://com.webos.service.utp.externaldevice/input/getSignalState`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getSignalState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_getswitchresult"></a>
## `input/getSwitchResult`

`luna://com.webos.service.utp.externaldevice/input/getSwitchResult`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/getSwitchResult '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_open"></a>
## `input/open`

`luna://com.webos.service.utp.externaldevice/input/open`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/open '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_pause"></a>
## `input/pause`

`luna://com.webos.service.utp.externaldevice/input/pause`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/pause '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_setcecuniqueid"></a>
## `input/setCECUniqueId`

`luna://com.webos.service.utp.externaldevice/input/setCECUniqueId`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/setCECUniqueId '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_stop"></a>
## `input/stop`

`luna://com.webos.service.utp.externaldevice/input/stop`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/stop '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="input_switchexternalinput"></a>
## `input/switchExternalInput`

`luna://com.webos.service.utp.externaldevice/input/switchExternalInput`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/input/switchExternalInput '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sethdmiinfo"></a>
## `setHdmiInfo`

`luna://com.webos.service.utp.externaldevice/setHdmiInfo`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/setHdmiInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setlastinputinfodb"></a>
## `setLastInputInfoDB`

`luna://com.webos.service.utp.externaldevice/setLastInputInfoDB`

Method on com.webos.service.utp.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.externaldevice/setLastInputInfoDB '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
