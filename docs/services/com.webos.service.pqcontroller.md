# `com.webos.service.pqcontroller`

Picture-quality (PQ) controller: adjusts white balance and N-point white balance, luminance, AI picture and external PQ data, and resets picture settings.

24 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getExternalPqData`](#getexternalpqdata) | public |  | picture | inferred | Returns the external PQ data. |
| [`getEyeqSensorData`](#geteyeqsensordata) | public |  | picture | inferred | Returns the eyeq sensor data. |
| [`getInfo`](#getinfo) | private |  | picture | documented | Reads PQ info, e.g. ambient lux |
| [`getNpointWB`](#getnpointwb) | public |  | picture | inferred | Returns the npoint WB. |
| [`getProperties`](#getproperties) | public |  | picture | inferred | Returns the properties. |
| [`getPwmInitDoneStatus`](#getpwminitdonestatus) | private |  | picture | inferred | Returns the pwm init done status. |
| [`getWhiteBalance`](#getwhitebalance) | public |  | picture | inferred | Returns the white balance. |
| [`reduceLuminance`](#reduceluminance) | public |  | picture | inferred | Handles the reduce luminance. |
| [`resetPictureSettings`](#resetpicturesettings) | public |  | picture | inferred | Resets the picture settings. ⚠️ |
| [`resetWhiteBalance`](#resetwhitebalance) | public |  | picture | inferred | Resets the white balance. ⚠️ |
| [`set360VrData`](#set360vrdata) | public |  | picture | inferred | Sets the 360 vr data. |
| [`setAI`](#setai) | public |  | picture | inferred | Sets the AI. |
| [`setDebuggingData`](#setdebuggingdata) | public |  | picture | inferred | Sets the debugging data. |
| [`setExternalEyeSensor`](#setexternaleyesensor) | public |  | picture | inferred | Sets the external eye sensor. |
| [`setExternalPqData`](#setexternalpqdata) | public |  | picture | inferred | Sets the external PQ data. |
| [`setFormatNotificationFlag`](#setformatnotificationflag) | public |  | notifications | inferred | Sets the format notification flag. ⚠️ |
| [`setNotificationResult`](#setnotificationresult) | public |  | notifications | inferred | Sets the notification result. |
| [`setNpointWB`](#setnpointwb) | public |  | picture | inferred | Sets the npoint WB. |
| [`setOCPAlertResult`](#setocpalertresult) | private |  | picture | inferred | Sets the OCP alert result. |
| [`setParameter`](#setparameter) | public |  | picture | inferred | Sets the parameter. |
| [`setPQ`](#setpq) | public |  | picture | inferred | Sets the PQ. |
| [`setProperties`](#setproperties) | private |  | picture | documented | Set picture-quality controller properties; used to trigger USB Dolby Vision config Update/Restore |
| [`setWbPattern`](#setwbpattern) | public |  | picture | inferred | Sets the wb pattern. |
| [`setWhiteBalance`](#setwhitebalance) | private |  | picture | documented | Set white balance in Ez-Adjust service menu ⚠️ |

<a id="getexternalpqdata"></a>
## `getExternalPqData`

`luna://com.webos.service.pqcontroller/getExternalPqData`

Returns the external PQ data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getExternalPqData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteyeqsensordata"></a>
## `getEyeqSensorData`

`luna://com.webos.service.pqcontroller/getEyeqSensorData`

Returns the eyeq sensor data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `Eyeqsensorcheck` |  |
| `backlightValue` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getEyeqSensorData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinfo"></a>
## `getInfo`

`luna://com.webos.service.pqcontroller/getInfo`

Reads PQ info, e.g. ambient lux

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | eyeQLux |

```sh
luna-send -n 1 luna://com.webos.service.pqcontroller/getInfo '{"key":"eyeQLux"}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getnpointwb"></a>
## `getNpointWB`

`luna://com.webos.service.pqcontroller/getNpointWB`

Returns the npoint WB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getNpointWB '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.pqcontroller/getProperties`

Returns the properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getProperties '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpwminitdonestatus"></a>
## `getPwmInitDoneStatus`

`luna://com.webos.service.pqcontroller/getPwmInitDoneStatus`

Returns the pwm init done status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getPwmInitDoneStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getwhitebalance"></a>
## `getWhiteBalance`

`luna://com.webos.service.pqcontroller/getWhiteBalance`

Returns the white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getWhiteBalance '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reduceluminance"></a>
## `reduceLuminance`

`luna://com.webos.service.pqcontroller/reduceLuminance`

Handles the reduce luminance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/reduceLuminance '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetpicturesettings"></a>
## `resetPictureSettings` ⚠️ DANGEROUS

`luna://com.webos.service.pqcontroller/resetPictureSettings`

Resets the picture settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/resetPictureSettings '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetwhitebalance"></a>
## `resetWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.pqcontroller/resetWhiteBalance`

Resets the white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/resetWhiteBalance '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="set360vrdata"></a>
## `set360VrData`

`luna://com.webos.service.pqcontroller/set360VrData`

Sets the 360 vr data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/set360VrData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setai"></a>
## `setAI`

`luna://com.webos.service.pqcontroller/setAI`

Sets the AI.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setAI '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebuggingdata"></a>
## `setDebuggingData`

`luna://com.webos.service.pqcontroller/setDebuggingData`

Sets the debugging data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setDebuggingData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setexternaleyesensor"></a>
## `setExternalEyeSensor`

`luna://com.webos.service.pqcontroller/setExternalEyeSensor`

Sets the external eye sensor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setExternalEyeSensor '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setexternalpqdata"></a>
## `setExternalPqData`

`luna://com.webos.service.pqcontroller/setExternalPqData`

Sets the external PQ data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setExternalPqData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setformatnotificationflag"></a>
## `setFormatNotificationFlag` ⚠️ DANGEROUS

`luna://com.webos.service.pqcontroller/setFormatNotificationFlag`

Sets the format notification flag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setFormatNotificationFlag '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnotificationresult"></a>
## `setNotificationResult`

`luna://com.webos.service.pqcontroller/setNotificationResult`

Sets the notification result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setNotificationResult '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnpointwb"></a>
## `setNpointWB`

`luna://com.webos.service.pqcontroller/setNpointWB`

Sets the npoint WB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setNpointWB '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setocpalertresult"></a>
## `setOCPAlertResult`

`luna://com.webos.service.pqcontroller/setOCPAlertResult`

Sets the OCP alert result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setOCPAlertResult '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setparameter"></a>
## `setParameter`

`luna://com.webos.service.pqcontroller/setParameter`

Sets the parameter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setParameter '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpq"></a>
## `setPQ`

`luna://com.webos.service.pqcontroller/setPQ`

Sets the PQ.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setPQ '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.pqcontroller/setProperties`

Set picture-quality controller properties; used to trigger USB Dolby Vision config Update/Restore

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `dolbyCfgAlertReturn` | 'Update'\|'Restore' |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.pqcontroller/setProperties","params":{}}],"onclose":{"uri":"luna://com.webos.service.pqcontroller/setProperties","params":{}},"onfail":{"uri":"luna://com.webos.service.pqcontroller/setProperties","params":{}}}}
```

> bscpylgtv `set_usb_dolby_vision_config(action)`: uploads (Update) or restores a DolbyVision_UserDisplayConfiguration.txt placed on a USB stick. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)

<a id="setwbpattern"></a>
## `setWbPattern`

`luna://com.webos.service.pqcontroller/setWbPattern`

Sets the wb pattern.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setWbPattern '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwhitebalance"></a>
## `setWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.pqcontroller/setWhiteBalance`

Set white balance in Ez-Adjust service menu

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `colorTemp` | 'cool'\|'medium'\|'warm' |
| `gain` | [R,G,B] 0-255 |
| `offset` | [R,G,B] 0-255 (bscpylgtv default 64) |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.pqcontroller/setWhiteBalance","params":{}}],"onclose":{"uri":"luna://com.webos.service.pqcontroller/setWhiteBalance","params":{}},"onfail":{"uri":"luna://com.webos.service.pqcontroller/setWhiteBalance","params":{}}}}
```

> bscpylgtv `set_sm_white_balance(color_temp, rg, gg, bg, rc=64, gc=64, bc=64)`. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)
