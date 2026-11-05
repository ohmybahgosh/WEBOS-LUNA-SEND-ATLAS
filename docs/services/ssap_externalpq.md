# `ssap:externalpq`

SSAP (second-screen protocol) endpoint for external picture-quality data: gets and sets external PQ data. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getExternalPqData`](#getexternalpqdata) | ssap |  | picture | documented | Read back calibration data |
| [`setExternalPqData`](#setexternalpqdata) | ssap |  | picture | documented | Calibration/picture-quality upload API (CalMAN/ColourSpace style): set 1D/3D LUTs, gamut matrices, UI values, tone-map, iTPG patterns |

<a id="getexternalpqdata"></a>
## `getExternalPqData`

`ssap://externalpq/getExternalPqData`

Read back calibration data

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `command` | GET_1D_DPG_DATA \| GET_3D_LUT_DATA \| GET_1D_2_2_EN \| GET_1D_0_45_EN \| GET_3BY3_GAMUT_DATA \| GET_HDR_3BY3_GAMUT_DATA |

```sh
{"type":"request","id":"1","uri":"ssap://externalpq/getExternalPqData","payload":{"command":"GET_1D_DPG_DATA"}}
```

> Response: data (base64), dataCount, dataType ('unsigned char'\|'unsigned integer16'\|'float'). The SSAP namespace 'externalpq' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="setexternalpqdata"></a>
## `setExternalPqData`

`ssap://externalpq/setExternalPqData`

Calibration/picture-quality upload API (CalMAN/ColourSpace style): set 1D/3D LUTs, gamut matrices, UI values, tone-map, iTPG patterns

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `command` | one of the commands in params.commands |
| `profileNo` | 0 |
| `programID` | 1 |
| `picMode` | picture mode (CAL_START) |
| `data` | base64 of raw bytes |
| `dataCount` | int element count |
| `dataType` | 'unsigned char' (uint8) \| 'unsigned integer16' (uint16) \| 'float' (float32) |
| `dataOpt` | 0 apply \| 1 apply and save \| 2 reset (send empty array) |
| `commands` | <25 entries, see docs/settings-keys.md> |

```sh
{"type":"request","id":"1","uri":"ssap://externalpq/setExternalPqData","payload":{"command":"CAL_START","profileNo":0,"programID":1,"picMode":"expert1"}}
```

> Public SSAP namespace 'externalpq'. Used by bscpylgtv/aiopylgtv for calibration; backlight/contrast/brightness/color via *_UI_DATA. Must call CAL_START before uploads and CAL_END after. The SSAP namespace 'externalpq' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/cal_commands.py), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [4](https://github.com/bendavid/aiopylgtv/blob/master/aiopylgtv/cal_commands.py), [5](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)
