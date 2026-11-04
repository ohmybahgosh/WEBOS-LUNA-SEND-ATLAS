# `com.webos.service.camera`

33 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`acquire`](#acquire) | private |  | camera | USB camera method: acquire |
| [`applyPhotoEffect`](#applyphotoeffect) | private |  | camera | USB camera method: applyPhotoEffect |
| [`close`](#close) | private |  | camera | USB camera method: close |
| [`getFirmwareVersion`](#getfirmwareversion) | private |  | camera | USB camera method: getFirmwareVersion |
| [`getInfo`](#getinfo) | public |  | camera | Returns detailed info of a camera/microphone device. |
| [`getList`](#getlist) | public | yes | camera | Lists camera and microphone devices connected to the TV. |
| [`getProperties`](#getproperties) | private |  | camera | USB camera method: getProperties |
| [`getServiceStatus`](#getservicestatus) | public |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`initializePhotoEffect`](#initializephotoeffect) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`isCovered`](#iscovered) | public | yes | camera | Cover status of the built-in camera. |
| [`isUpdating`](#isupdating) | public |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`open`](#open) | private |  | camera | USB camera method: open |
| [`previewPhotoEffect`](#previewphotoeffect) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/getERLE`](#recognition_geterle) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/getFrequencyResponse`](#recognition_getfrequencyresponse) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/getProperties`](#recognition_getproperties) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/getRecordedTriggerKeyword`](#recognition_getrecordedtriggerkeyword) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/getReverberationTime`](#recognition_getreverberationtime) | private |  | input | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/getSignalLevel`](#recognition_getsignallevel) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/getVoiceActivityDetection`](#recognition_getvoiceactivitydetection) | private |  | input | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/setProperties`](#recognition_setproperties) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/subscribeRecognition`](#recognition_subscriberecognition) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`recognition/unsubscribeRecognition`](#recognition_unsubscriberecognition) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`release`](#release) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`requestRefreshFrame`](#requestrefreshframe) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`setProperties`](#setproperties) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`start`](#start) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`stop`](#stop) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`takePicture`](#takepicture) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`updateFirmware`](#updatefirmware) | private |  | update | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). ⚠️ |
| [`wakeup`](#wakeup) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`yuv/getProperties`](#yuv_getproperties) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |
| [`yuv/setProperties`](#yuv_setproperties) | private |  | camera | Method on com.webos.service.camera (from on-device permission registry; parameters undocumented). |

<a id="acquire"></a>
## `acquire`

`luna://com.webos.service.camera/acquire`

USB camera method: acquire

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/acquire '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="applyphotoeffect"></a>
## `applyPhotoEffect`

`luna://com.webos.service.camera/applyPhotoEffect`

USB camera method: applyPhotoEffect

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/applyPhotoEffect '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="close"></a>
## `close`

`luna://com.webos.service.camera/close`

USB camera method: close

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/close '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getfirmwareversion"></a>
## `getFirmwareVersion`

`luna://com.webos.service.camera/getFirmwareVersion`

USB camera method: getFirmwareVersion

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getFirmwareVersion '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getinfo"></a>
## `getInfo`

`luna://com.webos.service.camera/getInfo`

Returns detailed info of a camera/microphone device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 1-3; Deprecated from 4.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) device URI |

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getInfo '{"uri":"camera://com.webos.service.camera/camera1"}'
```

> Deprecated from webOS TV 4.0.

Sources: [1](https://webostv.developer.lge.com/develop/references/camera)

<a id="getlist"></a>
## `getList`

`luna://com.webos.service.camera/getList`

Lists camera and microphone devices connected to the TV.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 1-3; Deprecated from 4.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.camera/getList '{}'
```

> Deprecated from webOS TV 4.0.

Sources: [1](https://webostv.developer.lge.com/develop/references/camera)

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.camera/getProperties`

USB camera method: getProperties

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getProperties '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getservicestatus"></a>
## `getServiceStatus`

`luna://com.webos.service.camera/getServiceStatus`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getServiceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="initializephotoeffect"></a>
## `initializePhotoEffect`

`luna://com.webos.service.camera/initializePhotoEffect`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/initializePhotoEffect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iscovered"></a>
## `isCovered`

`luna://com.webos.service.camera/isCovered`

Cover status of the built-in camera.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 1-3; Deprecated from 4.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) |
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.camera/isCovered '{"uri":"camera://com.webos.service.camera/camera1"}'
```

> Deprecated from webOS TV 4.0.

Sources: [1](https://webostv.developer.lge.com/develop/references/camera)

<a id="isupdating"></a>
## `isUpdating`

`luna://com.webos.service.camera/isUpdating`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/isUpdating '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.camera/open`

USB camera method: open

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/open '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="previewphotoeffect"></a>
## `previewPhotoEffect`

`luna://com.webos.service.camera/previewPhotoEffect`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/previewPhotoEffect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_geterle"></a>
## `recognition/getERLE`

`luna://com.webos.service.camera/recognition/getERLE`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getERLE '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getfrequencyresponse"></a>
## `recognition/getFrequencyResponse`

`luna://com.webos.service.camera/recognition/getFrequencyResponse`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getFrequencyResponse '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getproperties"></a>
## `recognition/getProperties`

`luna://com.webos.service.camera/recognition/getProperties`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getrecordedtriggerkeyword"></a>
## `recognition/getRecordedTriggerKeyword`

`luna://com.webos.service.camera/recognition/getRecordedTriggerKeyword`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getRecordedTriggerKeyword '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getreverberationtime"></a>
## `recognition/getReverberationTime`

`luna://com.webos.service.camera/recognition/getReverberationTime`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getReverberationTime '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getsignallevel"></a>
## `recognition/getSignalLevel`

`luna://com.webos.service.camera/recognition/getSignalLevel`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getSignalLevel '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getvoiceactivitydetection"></a>
## `recognition/getVoiceActivityDetection`

`luna://com.webos.service.camera/recognition/getVoiceActivityDetection`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getVoiceActivityDetection '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_setproperties"></a>
## `recognition/setProperties`

`luna://com.webos.service.camera/recognition/setProperties`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/setProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_subscriberecognition"></a>
## `recognition/subscribeRecognition`

`luna://com.webos.service.camera/recognition/subscribeRecognition`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/subscribeRecognition '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_unsubscriberecognition"></a>
## `recognition/unsubscribeRecognition`

`luna://com.webos.service.camera/recognition/unsubscribeRecognition`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/unsubscribeRecognition '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="release"></a>
## `release`

`luna://com.webos.service.camera/release`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/release '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestrefreshframe"></a>
## `requestRefreshFrame`

`luna://com.webos.service.camera/requestRefreshFrame`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/requestRefreshFrame '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.camera/setProperties`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/setProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.camera/start`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/start '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.camera/stop`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/stop '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="takepicture"></a>
## `takePicture`

`luna://com.webos.service.camera/takePicture`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/takePicture '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatefirmware"></a>
## `updateFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.camera/updateFirmware`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/updateFirmware '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wakeup"></a>
## `wakeup`

`luna://com.webos.service.camera/wakeup`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/wakeup '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="yuv_getproperties"></a>
## `yuv/getProperties`

`luna://com.webos.service.camera/yuv/getProperties`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/yuv/getProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="yuv_setproperties"></a>
## `yuv/setProperties`

`luna://com.webos.service.camera/yuv/setProperties`

Method on com.webos.service.camera (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera/yuv/setProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
