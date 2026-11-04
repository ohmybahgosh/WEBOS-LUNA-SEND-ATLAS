# `com.webos.service.pqcontroller`

24 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getExternalPqData`](#getexternalpqdata) | public |  | picture | Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`getEyeqSensorData`](#geteyeqsensordata) | public |  | picture | Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`getInfo`](#getinfo) | private |  | picture | Reads PQ info, e.g. ambient lux |
| [`getNpointWB`](#getnpointwb) | public |  | picture | Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`getProperties`](#getproperties) | public |  | picture | Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`getPwmInitDoneStatus`](#getpwminitdonestatus) | private |  | picture | Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`getWhiteBalance`](#getwhitebalance) | public |  | picture | Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`reduceLuminance`](#reduceluminance) | public |  | picture | Method on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`resetPictureSettings`](#resetpicturesettings) | public |  | picture | Method on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). ⚠️ |
| [`resetWhiteBalance`](#resetwhitebalance) | public |  | picture | Method on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). ⚠️ |
| [`set360VrData`](#set360vrdata) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setAI`](#setai) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setDebuggingData`](#setdebuggingdata) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setExternalEyeSensor`](#setexternaleyesensor) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setExternalPqData`](#setexternalpqdata) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setFormatNotificationFlag`](#setformatnotificationflag) | public |  | notifications | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). ⚠️ |
| [`setNotificationResult`](#setnotificationresult) | public |  | notifications | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setNpointWB`](#setnpointwb) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setOCPAlertResult`](#setocpalertresult) | private |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setParameter`](#setparameter) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setPQ`](#setpq) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setProperties`](#setproperties) | private |  | picture | Set picture-quality controller properties; used to trigger USB Dolby Vision config Update/Restore |
| [`setWbPattern`](#setwbpattern) | public |  | picture | Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented). |
| [`setWhiteBalance`](#setwhitebalance) | private |  | picture | Set white balance in Ez-Adjust service menu ⚠️ |

<a id="getexternalpqdata"></a>
## `getExternalPqData`

`luna://com.webos.service.pqcontroller/getExternalPqData`

Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getExternalPqData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteyeqsensordata"></a>
## `getEyeqSensorData`

`luna://com.webos.service.pqcontroller/getEyeqSensorData`

Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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

Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getNpointWB '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.pqcontroller/getProperties`

Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getProperties '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpwminitdonestatus"></a>
## `getPwmInitDoneStatus`

`luna://com.webos.service.pqcontroller/getPwmInitDoneStatus`

Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getPwmInitDoneStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getwhitebalance"></a>
## `getWhiteBalance`

`luna://com.webos.service.pqcontroller/getWhiteBalance`

Getter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/getWhiteBalance '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reduceluminance"></a>
## `reduceLuminance`

`luna://com.webos.service.pqcontroller/reduceLuminance`

Method on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/reduceLuminance '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetpicturesettings"></a>
## `resetPictureSettings` ⚠️ DANGEROUS

`luna://com.webos.service.pqcontroller/resetPictureSettings`

Method on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/resetPictureSettings '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetwhitebalance"></a>
## `resetWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.pqcontroller/resetWhiteBalance`

Method on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/resetWhiteBalance '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="set360vrdata"></a>
## `set360VrData`

`luna://com.webos.service.pqcontroller/set360VrData`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/set360VrData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setai"></a>
## `setAI`

`luna://com.webos.service.pqcontroller/setAI`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setAI '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebuggingdata"></a>
## `setDebuggingData`

`luna://com.webos.service.pqcontroller/setDebuggingData`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setDebuggingData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setexternaleyesensor"></a>
## `setExternalEyeSensor`

`luna://com.webos.service.pqcontroller/setExternalEyeSensor`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setExternalEyeSensor '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setexternalpqdata"></a>
## `setExternalPqData`

`luna://com.webos.service.pqcontroller/setExternalPqData`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setExternalPqData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setformatnotificationflag"></a>
## `setFormatNotificationFlag` ⚠️ DANGEROUS

`luna://com.webos.service.pqcontroller/setFormatNotificationFlag`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setFormatNotificationFlag '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnotificationresult"></a>
## `setNotificationResult`

`luna://com.webos.service.pqcontroller/setNotificationResult`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setNotificationResult '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnpointwb"></a>
## `setNpointWB`

`luna://com.webos.service.pqcontroller/setNpointWB`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setNpointWB '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setocpalertresult"></a>
## `setOCPAlertResult`

`luna://com.webos.service.pqcontroller/setOCPAlertResult`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setOCPAlertResult '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setparameter"></a>
## `setParameter`

`luna://com.webos.service.pqcontroller/setParameter`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pqcontroller/setParameter '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpq"></a>
## `setPQ`

`luna://com.webos.service.pqcontroller/setPQ`

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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

Setter on com.webos.service.pqcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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
