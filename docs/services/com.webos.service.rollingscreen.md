# `com.webos.service.rollingscreen`

Rollable-screen controller (rollable OLED): drives motor roll position and curve/shade/view states, reports motor/MICOM status, and handles calibration. _(inferred from the service's methods)_

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`adjustZeroPositionAdjustment`](#adjustzeropositionadjustment) | public |  | display | inferred | Adjusts the zero position adjustment. |
| [`changeCurve`](#changecurve) | private |  | display | documented | Select curve preset on bendable/Flex display (e.g. LG OLED Flex) |
| [`changeShade`](#changeshade) | public |  | display | inferred | Changes the shade. |
| [`changeView`](#changeview) | public |  | display | inferred | Changes the view. |
| [`getAutoRollingTestMode`](#getautorollingtestmode) | public |  | display | inferred | Returns the auto rolling test mode. |
| [`getCurveState`](#getcurvestate) | public |  | display | inferred | Returns the curve state. |
| [`getDebugPathMode`](#getdebugpathmode) | public |  | display | inferred | Returns the debug path mode. |
| [`getMotorDeviceStatus`](#getmotordevicestatus) | public |  | display | inferred | Returns the motor device status. |
| [`getMotorMicomVersion`](#getmotormicomversion) | public |  | power | inferred | Returns the motor MICOM version. |
| [`getPartialViewPositionOffset`](#getpartialviewpositionoffset) | public |  | display | inferred | Returns the partial view position offset. |
| [`getRollingAdjMode`](#getrollingadjmode) | public |  | display | inferred | Returns the rolling adj mode. |
| [`getRollingCount`](#getrollingcount) | public |  | display | inferred | Returns the rolling count. |
| [`getShadeState`](#getshadestate) | public |  | display | inferred | Returns the shade state. |
| [`getViewState`](#getviewstate) | public |  | display | inferred | Returns the view state. |
| [`pressUpDown`](#pressupdown) | public |  | display | inferred | Handles the press up down. |
| [`registerSyncTransition`](#registersynctransition) | public |  | display | inferred | Registers the sync transition. |
| [`responseSyncTransition`](#responsesynctransition) | public |  | display | inferred | Handles the response sync transition. |
| [`setAutoRollingTest`](#setautorollingtest) | public |  | display | inferred | Sets the auto rolling test. |
| [`setDebugPath`](#setdebugpath) | public |  | display | inferred | Sets the debug path. |
| [`setPartialViewPositionOffset`](#setpartialviewpositionoffset) | public |  | display | inferred | Sets the partial view position offset. |
| [`setRollingAdjMode`](#setrollingadjmode) | public |  | display | inferred | Sets the rolling adj mode. |
| [`testLocalization`](#testlocalization) | public |  | display | inferred | Tests the localization. |
| [`testMotorDeviceAbnormal`](#testmotordeviceabnormal) | public |  | display | inferred | Tests the motor device abnormal. |
| [`updateCurvature`](#updatecurvature) | private |  | display | documented | Adjust the curvature percentage of a curve preset |
| [`updateMotorDeviceStatus`](#updatemotordevicestatus) | public |  | display | inferred | Updates the motor device status. |
| [`updateMotorMicomFirmware`](#updatemotormicomfirmware) | public |  | power | inferred | Updates the motor MICOM firmware. ⚠️ |

<a id="adjustzeropositionadjustment"></a>
## `adjustZeroPositionAdjustment`

`luna://com.webos.service.rollingscreen/adjustZeroPositionAdjustment`

Adjusts the zero position adjustment.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Changes the shade.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/changeShade '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changeview"></a>
## `changeView`

`luna://com.webos.service.rollingscreen/changeView`

Changes the view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/changeView '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getautorollingtestmode"></a>
## `getAutoRollingTestMode`

`luna://com.webos.service.rollingscreen/getAutoRollingTestMode`

Returns the auto rolling test mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getAutoRollingTestMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurvestate"></a>
## `getCurveState`

`luna://com.webos.service.rollingscreen/getCurveState`

Returns the curve state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getCurveState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdebugpathmode"></a>
## `getDebugPathMode`

`luna://com.webos.service.rollingscreen/getDebugPathMode`

Returns the debug path mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getDebugPathMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmotordevicestatus"></a>
## `getMotorDeviceStatus`

`luna://com.webos.service.rollingscreen/getMotorDeviceStatus`

Returns the motor device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getMotorDeviceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmotormicomversion"></a>
## `getMotorMicomVersion`

`luna://com.webos.service.rollingscreen/getMotorMicomVersion`

Returns the motor MICOM version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getMotorMicomVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpartialviewpositionoffset"></a>
## `getPartialViewPositionOffset`

`luna://com.webos.service.rollingscreen/getPartialViewPositionOffset`

Returns the partial view position offset.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getPartialViewPositionOffset '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrollingadjmode"></a>
## `getRollingAdjMode`

`luna://com.webos.service.rollingscreen/getRollingAdjMode`

Returns the rolling adj mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getRollingAdjMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrollingcount"></a>
## `getRollingCount`

`luna://com.webos.service.rollingscreen/getRollingCount`

Returns the rolling count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getRollingCount '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getshadestate"></a>
## `getShadeState`

`luna://com.webos.service.rollingscreen/getShadeState`

Returns the shade state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getShadeState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getviewstate"></a>
## `getViewState`

`luna://com.webos.service.rollingscreen/getViewState`

Returns the view state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/getViewState '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pressupdown"></a>
## `pressUpDown`

`luna://com.webos.service.rollingscreen/pressUpDown`

Handles the press up down.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/pressUpDown '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registersynctransition"></a>
## `registerSyncTransition`

`luna://com.webos.service.rollingscreen/registerSyncTransition`

Registers the sync transition.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/registerSyncTransition '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responsesynctransition"></a>
## `responseSyncTransition`

`luna://com.webos.service.rollingscreen/responseSyncTransition`

Handles the response sync transition.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/responseSyncTransition '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setautorollingtest"></a>
## `setAutoRollingTest`

`luna://com.webos.service.rollingscreen/setAutoRollingTest`

Sets the auto rolling test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setAutoRollingTest '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdebugpath"></a>
## `setDebugPath`

`luna://com.webos.service.rollingscreen/setDebugPath`

Sets the debug path.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setDebugPath '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpartialviewpositionoffset"></a>
## `setPartialViewPositionOffset`

`luna://com.webos.service.rollingscreen/setPartialViewPositionOffset`

Sets the partial view position offset.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setPartialViewPositionOffset '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setrollingadjmode"></a>
## `setRollingAdjMode`

`luna://com.webos.service.rollingscreen/setRollingAdjMode`

Sets the rolling adj mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/setRollingAdjMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testlocalization"></a>
## `testLocalization`

`luna://com.webos.service.rollingscreen/testLocalization`

Tests the localization.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/testLocalization '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testmotordeviceabnormal"></a>
## `testMotorDeviceAbnormal`

`luna://com.webos.service.rollingscreen/testMotorDeviceAbnormal`

Tests the motor device abnormal.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Updates the motor device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/updateMotorDeviceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatemotormicomfirmware"></a>
## `updateMotorMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.rollingscreen/updateMotorMicomFirmware`

Updates the motor MICOM firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.rollingscreen/updateMotorMicomFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
