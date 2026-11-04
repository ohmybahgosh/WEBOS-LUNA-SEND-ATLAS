# `com.webos.service.rollingscreen`

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`adjustZeroPositionAdjustment`](#adjustzeropositionadjustment) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`changeCurve`](#changecurve) | private |  | display | Select curve preset on bendable/Flex display (e.g. LG OLED Flex) |
| [`changeShade`](#changeshade) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`changeView`](#changeview) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getAutoRollingTestMode`](#getautorollingtestmode) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getCurveState`](#getcurvestate) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getDebugPathMode`](#getdebugpathmode) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getMotorDeviceStatus`](#getmotordevicestatus) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getMotorMicomVersion`](#getmotormicomversion) | public |  | power | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getPartialViewPositionOffset`](#getpartialviewpositionoffset) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getRollingAdjMode`](#getrollingadjmode) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getRollingCount`](#getrollingcount) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getShadeState`](#getshadestate) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`getViewState`](#getviewstate) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`pressUpDown`](#pressupdown) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`registerSyncTransition`](#registersynctransition) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`responseSyncTransition`](#responsesynctransition) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`setAutoRollingTest`](#setautorollingtest) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`setDebugPath`](#setdebugpath) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`setPartialViewPositionOffset`](#setpartialviewpositionoffset) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`setRollingAdjMode`](#setrollingadjmode) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`testLocalization`](#testlocalization) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`testMotorDeviceAbnormal`](#testmotordeviceabnormal) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`updateCurvature`](#updatecurvature) | private |  | display | Adjust the curvature percentage of a curve preset |
| [`updateMotorDeviceStatus`](#updatemotordevicestatus) | public |  | display | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). |
| [`updateMotorMicomFirmware`](#updatemotormicomfirmware) | public |  | power | Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented). ⚠️ |

<a id="adjustzeropositionadjustment"></a>
## `adjustZeroPositionAdjustment`

`luna://com.webos.service.rollingscreen/adjustZeroPositionAdjustment`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/adjustZeroPositionAdjustment '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changecurve"></a>
## `changeCurve`

`luna://com.webos.service.rollingscreen/changeCurve`

Select curve preset on bendable/Flex display (e.g. LG OLED Flex)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `type` | 'flat'\|'curvature1'\|'curvature2'\|'curvature3' |
| `reason` | 'com.pal.app.settings' |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.rollingscreen/changeCurve","params":{}}],"onclose":{"uri":"luna://com.webos.service.rollingscreen/changeCurve","params":{}},"onfail":{"uri":"luna://com.webos.service.rollingscreen/changeCurve","params":{}}}}
```

> LGTV Companion -set_curve_preset [flat\|1\|2\|3] (payload built in companion.cpp). Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/LGTV%20Companion%20Service/companion.cpp)

<a id="changeshade"></a>
## `changeShade`

`luna://com.webos.service.rollingscreen/changeShade`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/changeShade '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changeview"></a>
## `changeView`

`luna://com.webos.service.rollingscreen/changeView`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/changeView '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getautorollingtestmode"></a>
## `getAutoRollingTestMode`

`luna://com.webos.service.rollingscreen/getAutoRollingTestMode`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getAutoRollingTestMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurvestate"></a>
## `getCurveState`

`luna://com.webos.service.rollingscreen/getCurveState`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getCurveState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdebugpathmode"></a>
## `getDebugPathMode`

`luna://com.webos.service.rollingscreen/getDebugPathMode`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getDebugPathMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmotordevicestatus"></a>
## `getMotorDeviceStatus`

`luna://com.webos.service.rollingscreen/getMotorDeviceStatus`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getMotorDeviceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmotormicomversion"></a>
## `getMotorMicomVersion`

`luna://com.webos.service.rollingscreen/getMotorMicomVersion`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getMotorMicomVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpartialviewpositionoffset"></a>
## `getPartialViewPositionOffset`

`luna://com.webos.service.rollingscreen/getPartialViewPositionOffset`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getPartialViewPositionOffset '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrollingadjmode"></a>
## `getRollingAdjMode`

`luna://com.webos.service.rollingscreen/getRollingAdjMode`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getRollingAdjMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrollingcount"></a>
## `getRollingCount`

`luna://com.webos.service.rollingscreen/getRollingCount`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getRollingCount '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getshadestate"></a>
## `getShadeState`

`luna://com.webos.service.rollingscreen/getShadeState`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getShadeState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getviewstate"></a>
## `getViewState`

`luna://com.webos.service.rollingscreen/getViewState`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getViewState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pressupdown"></a>
## `pressUpDown`

`luna://com.webos.service.rollingscreen/pressUpDown`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/pressUpDown '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registersynctransition"></a>
## `registerSyncTransition`

`luna://com.webos.service.rollingscreen/registerSyncTransition`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/registerSyncTransition '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responsesynctransition"></a>
## `responseSyncTransition`

`luna://com.webos.service.rollingscreen/responseSyncTransition`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/responseSyncTransition '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setautorollingtest"></a>
## `setAutoRollingTest`

`luna://com.webos.service.rollingscreen/setAutoRollingTest`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setAutoRollingTest '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdebugpath"></a>
## `setDebugPath`

`luna://com.webos.service.rollingscreen/setDebugPath`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setDebugPath '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpartialviewpositionoffset"></a>
## `setPartialViewPositionOffset`

`luna://com.webos.service.rollingscreen/setPartialViewPositionOffset`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setPartialViewPositionOffset '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setrollingadjmode"></a>
## `setRollingAdjMode`

`luna://com.webos.service.rollingscreen/setRollingAdjMode`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setRollingAdjMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testlocalization"></a>
## `testLocalization`

`luna://com.webos.service.rollingscreen/testLocalization`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/testLocalization '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testmotordeviceabnormal"></a>
## `testMotorDeviceAbnormal`

`luna://com.webos.service.rollingscreen/testMotorDeviceAbnormal`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/testMotorDeviceAbnormal '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatecurvature"></a>
## `updateCurvature`

`luna://com.webos.service.rollingscreen/updateCurvature`

Adjust the curvature percentage of a curve preset

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `type` | 'curvature1'\|'curvature2'\|'curvature3' |
| `value` | string '0%'..'100%' |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.rollingscreen/updateCurvature","params":{}}],"onclose":{"uri":"luna://com.webos.service.rollingscreen/updateCurvature","params":{}},"onfail":{"uri":"luna://com.webos.service.rollingscreen/updateCurvature","params":{}}}}
```

> LGTV Companion -adjust_curve_preset [1-3] [0-100] and -set_curvature. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/LGTV%20Companion%20Service/companion.cpp)

<a id="updatemotordevicestatus"></a>
## `updateMotorDeviceStatus`

`luna://com.webos.service.rollingscreen/updateMotorDeviceStatus`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/updateMotorDeviceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatemotormicomfirmware"></a>
## `updateMotorMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.rollingscreen/updateMotorMicomFirmware`

Method on com.webos.service.rollingscreen (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/updateMotorMicomFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
