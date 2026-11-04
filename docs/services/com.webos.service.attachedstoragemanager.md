# `com.webos.service.attachedstoragemanager`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`ejectDevice`](#ejectdevice) | private |  | storage | Eject a USB device |
| [`listDevices`](#listdevices) | ssap |  | storage | List attached storage devices |

<a id="ejectdevice"></a>
## `ejectDevice`

`luna://com.webos.service.attachedstoragemanager/ejectDevice`

Eject a USB device

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** older webOS only; not newer webOS  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `deviceId` | string from listDevices |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.attachedstoragemanager/ejectDevice","params":{}}],"onclose":{"uri":"luna://com.webos.service.attachedstoragemanager/ejectDevice","params":{}},"onfail":{"uri":"luna://com.webos.service.attachedstoragemanager/ejectDevice","params":{}}}}
```

> bscpylgtv: access disabled at some point / 'does not work anymore on newer WebOS versions'. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="listdevices"></a>
## `listDevices`

`luna://com.webos.service.attachedstoragemanager/listDevices`

List attached storage devices

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `deviceType` | array of: usb, internal camera, internal samples, internal igallery, dms, internal store demo |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.attachedstoragemanager/listDevices","payload":{"deviceType":["usb"]}}
```

> Response key: devices (each has deviceId used by ejectDevice).

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md)
