# `com.webos.service.camera`

Camera service: acquires, opens and closes the camera, lists devices and properties, reports firmware and cover state, applies photo effects, and exposes audio-recognition diagnostics.

33 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`acquire`](#acquire) | private |  | camera | documented | USB camera method: acquire |
| [`applyPhotoEffect`](#applyphotoeffect) | private |  | camera | documented | USB camera method: applyPhotoEffect |
| [`close`](#close) | private |  | camera | documented | USB camera method: close |
| [`getFirmwareVersion`](#getfirmwareversion) | private |  | camera | documented | USB camera method: getFirmwareVersion |
| [`getInfo`](#getinfo) | public |  | camera | documented | Returns detailed info of a camera/microphone device. |
| [`getList`](#getlist) | public | yes | camera | documented | Lists camera and microphone devices connected to the TV. |
| [`getProperties`](#getproperties) | private |  | camera | documented | USB camera method: getProperties |
| [`getServiceStatus`](#getservicestatus) | public |  | camera | inferred | Returns the service status. |
| [`initializePhotoEffect`](#initializephotoeffect) | private |  | camera | inferred | Initializes the photo effect. |
| [`isCovered`](#iscovered) | public | yes | camera | documented | Cover status of the built-in camera. |
| [`isUpdating`](#isupdating) | public |  | camera | inferred | Reports whether the updating is set. |
| [`open`](#open) | private |  | camera | documented | USB camera method: open |
| [`previewPhotoEffect`](#previewphotoeffect) | private |  | camera | inferred | Handles the preview photo effect. |
| [`recognition/getERLE`](#recognition_geterle) | private |  | camera | inferred | Returns the ERLE (recognition) |
| [`recognition/getFrequencyResponse`](#recognition_getfrequencyresponse) | private |  | camera | inferred | Returns the frequency response (recognition) |
| [`recognition/getProperties`](#recognition_getproperties) | private |  | camera | inferred | Returns the properties (recognition) |
| [`recognition/getRecordedTriggerKeyword`](#recognition_getrecordedtriggerkeyword) | private |  | camera | inferred | Returns the recorded trigger keyword (recognition) |
| [`recognition/getReverberationTime`](#recognition_getreverberationtime) | private |  | input | inferred | Returns the reverberation time (recognition) |
| [`recognition/getSignalLevel`](#recognition_getsignallevel) | private |  | camera | inferred | Returns the signal level (recognition) |
| [`recognition/getVoiceActivityDetection`](#recognition_getvoiceactivitydetection) | private |  | input | inferred | Returns the voice activity detection (recognition) |
| [`recognition/setProperties`](#recognition_setproperties) | private |  | camera | inferred | Sets the properties (recognition) |
| [`recognition/subscribeRecognition`](#recognition_subscriberecognition) | private |  | camera | inferred | Subscribes to the recognition (recognition) |
| [`recognition/unsubscribeRecognition`](#recognition_unsubscriberecognition) | private |  | camera | inferred | Unsubscribes from the recognition (recognition) |
| [`release`](#release) | private |  | camera | inferred | Releases the camera. |
| [`requestRefreshFrame`](#requestrefreshframe) | private |  | camera | inferred | Requests the refresh frame. |
| [`setProperties`](#setproperties) | private |  | camera | inferred | Sets the properties. |
| [`start`](#start) | private |  | camera | inferred | Starts the camera. |
| [`stop`](#stop) | private |  | camera | inferred | Stops the camera. |
| [`takePicture`](#takepicture) | private |  | camera | inferred | Handles the take picture. |
| [`updateFirmware`](#updatefirmware) | private |  | update | inferred | Updates the firmware. ⚠️ |
| [`wakeup`](#wakeup) | private |  | camera | inferred | Handles the wakeup. |
| [`yuv/getProperties`](#yuv_getproperties) | private |  | camera | inferred | Returns the properties (yuv) |
| [`yuv/setProperties`](#yuv_setproperties) | private |  | camera | inferred | Sets the properties (yuv) |

<a id="acquire"></a>
## `acquire`

`luna://com.webos.service.camera/acquire`

USB camera method: acquire

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getProperties '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getservicestatus"></a>
## `getServiceStatus`

`luna://com.webos.service.camera/getServiceStatus`

Returns the service status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getServiceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="initializephotoeffect"></a>
## `initializePhotoEffect`

`luna://com.webos.service.camera/initializePhotoEffect`

Initializes the photo effect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

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

Reports whether the updating is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera/open '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="previewphotoeffect"></a>
## `previewPhotoEffect`

`luna://com.webos.service.camera/previewPhotoEffect`

Handles the preview photo effect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/previewPhotoEffect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_geterle"></a>
## `recognition/getERLE`

`luna://com.webos.service.camera/recognition/getERLE`

Returns the ERLE (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getERLE '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getfrequencyresponse"></a>
## `recognition/getFrequencyResponse`

`luna://com.webos.service.camera/recognition/getFrequencyResponse`

Returns the frequency response (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getFrequencyResponse '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getproperties"></a>
## `recognition/getProperties`

`luna://com.webos.service.camera/recognition/getProperties`

Returns the properties (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getrecordedtriggerkeyword"></a>
## `recognition/getRecordedTriggerKeyword`

`luna://com.webos.service.camera/recognition/getRecordedTriggerKeyword`

Returns the recorded trigger keyword (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getRecordedTriggerKeyword '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getreverberationtime"></a>
## `recognition/getReverberationTime`

`luna://com.webos.service.camera/recognition/getReverberationTime`

Returns the reverberation time (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getReverberationTime '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getsignallevel"></a>
## `recognition/getSignalLevel`

`luna://com.webos.service.camera/recognition/getSignalLevel`

Returns the signal level (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getSignalLevel '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_getvoiceactivitydetection"></a>
## `recognition/getVoiceActivityDetection`

`luna://com.webos.service.camera/recognition/getVoiceActivityDetection`

Returns the voice activity detection (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/getVoiceActivityDetection '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_setproperties"></a>
## `recognition/setProperties`

`luna://com.webos.service.camera/recognition/setProperties`

Sets the properties (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/setProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_subscriberecognition"></a>
## `recognition/subscribeRecognition`

`luna://com.webos.service.camera/recognition/subscribeRecognition`

Subscribes to the recognition (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/subscribeRecognition '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognition_unsubscriberecognition"></a>
## `recognition/unsubscribeRecognition`

`luna://com.webos.service.camera/recognition/unsubscribeRecognition`

Unsubscribes from the recognition (recognition)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/recognition/unsubscribeRecognition '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="release"></a>
## `release`

`luna://com.webos.service.camera/release`

Releases the camera.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/release '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestrefreshframe"></a>
## `requestRefreshFrame`

`luna://com.webos.service.camera/requestRefreshFrame`

Requests the refresh frame.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/requestRefreshFrame '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.camera/setProperties`

Sets the properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/setProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.camera/start`

Starts the camera.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/start '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.camera/stop`

Stops the camera.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/stop '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="takepicture"></a>
## `takePicture`

`luna://com.webos.service.camera/takePicture`

Handles the take picture.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/takePicture '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatefirmware"></a>
## `updateFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.camera/updateFirmware`

Updates the firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/updateFirmware '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wakeup"></a>
## `wakeup`

`luna://com.webos.service.camera/wakeup`

Handles the wakeup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/wakeup '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="yuv_getproperties"></a>
## `yuv/getProperties`

`luna://com.webos.service.camera/yuv/getProperties`

Returns the properties (yuv)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/yuv/getProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="yuv_setproperties"></a>
## `yuv/setProperties`

`luna://com.webos.service.camera/yuv/setProperties`

Sets the properties (yuv)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.camera/yuv/setProperties '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
