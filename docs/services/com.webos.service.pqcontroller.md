# `com.webos.service.pqcontroller`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getInfo`](#getinfo) | private |  | picture | Reads PQ info, e.g. ambient lux |
| [`setProperties`](#setproperties) | private |  | picture | Set picture-quality controller properties; used to trigger USB Dolby Vision config Update/Restore |
| [`setWhiteBalance`](#setwhitebalance) | private |  | picture | Set white balance in Ez-Adjust service menu ⚠️ |

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
