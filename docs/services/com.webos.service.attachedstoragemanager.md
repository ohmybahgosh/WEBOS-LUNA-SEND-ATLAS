# `com.webos.service.attachedstoragemanager`

24 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancelRequest`](#cancelrequest) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`changeDeviceStatus`](#changedevicestatus) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`checkDevicePerformance`](#checkdeviceperformance) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`cleanDevice`](#cleandevice) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`copy`](#copy) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`decompress`](#decompress) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`delete`](#delete) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). ⚠️ |
| [`ejectDevice`](#ejectdevice) | private |  | storage | Eject a USB device |
| [`format`](#format) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). ⚠️ |
| [`getAudioMetadata`](#getaudiometadata) | private |  | audio | Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`getChangedContent`](#getchangedcontent) | private |  | storage | Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`getCopyStatus`](#getcopystatus) | private |  | storage | Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`getFileOperationStatus`](#getfileoperationstatus) | private |  | storage | Method on com.webos.service.attachedstoragemanager (from on-device permission registry; parameters undocumented). |
| [`getProperties`](#getproperties) | private |  | storage | Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`listContentsByCamera`](#listcontentsbycamera) | private |  | storage | Lister on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`listDevices`](#listdevices) | ssap |  | storage | List attached storage devices |
| [`listDevices2`](#listdevices2) | private |  | storage | Lister on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`listFolderContents`](#listfoldercontents) | private |  | storage | Lister on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`move`](#move) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`refreshDeviceList`](#refreshdevicelist) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`registerDeviceStatus`](#registerdevicestatus) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`responseDeviceStatus`](#responsedevicestatus) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`triggeredActivity`](#triggeredactivity) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |
| [`unregisterDeviceStatus`](#unregisterdevicestatus) | private |  | storage | Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented). |

<a id="cancelrequest"></a>
## `cancelRequest`

`luna://com.webos.service.attachedstoragemanager/cancelRequest`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/cancelRequest '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changedevicestatus"></a>
## `changeDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/changeDeviceStatus`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/changeDeviceStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkdeviceperformance"></a>
## `checkDevicePerformance`

`luna://com.webos.service.attachedstoragemanager/checkDevicePerformance`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/checkDevicePerformance '{}'
```

> ACG groups: attachedstoragemanager.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cleandevice"></a>
## `cleanDevice`

`luna://com.webos.service.attachedstoragemanager/cleanDevice`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/cleanDevice '{}'
```

> ACG groups: attachedstoragemanager.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="copy"></a>
## `copy`

`luna://com.webos.service.attachedstoragemanager/copy`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/copy '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="decompress"></a>
## `decompress`

`luna://com.webos.service.attachedstoragemanager/decompress`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/decompress '{}'
```

> ACG groups: private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delete"></a>
## `delete` ⚠️ DANGEROUS

`luna://com.webos.service.attachedstoragemanager/delete`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/delete '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="format"></a>
## `format` ⚠️ DANGEROUS

`luna://com.webos.service.attachedstoragemanager/format`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/format '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiometadata"></a>
## `getAudioMetadata`

`luna://com.webos.service.attachedstoragemanager/getAudioMetadata`

Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getAudioMetadata '{}'
```

> ACG groups: private, all, attachedstoragemanager.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchangedcontent"></a>
## `getChangedContent`

`luna://com.webos.service.attachedstoragemanager/getChangedContent`

Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getChangedContent '{}'
```

> ACG groups: private, all, attachedstoragemanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcopystatus"></a>
## `getCopyStatus`

`luna://com.webos.service.attachedstoragemanager/getCopyStatus`

Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getCopyStatus '{}'
```

> ACG groups: private, all, attachedstoragemanager.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfileoperationstatus"></a>
## `getFileOperationStatus`

`luna://com.webos.service.attachedstoragemanager/getFileOperationStatus`

Method on com.webos.service.attachedstoragemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getFileOperationStatus '{}'
```

> ACG groups: attachedstoragemanager.read, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.attachedstoragemanager/getProperties`

Getter on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getProperties '{}'
```

> ACG groups: private, all, attachedstoragemanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listcontentsbycamera"></a>
## `listContentsByCamera`

`luna://com.webos.service.attachedstoragemanager/listContentsByCamera`

Lister on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/listContentsByCamera '{}'
```

> ACG groups: private, attachedstoragemanager.list, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="listdevices2"></a>
## `listDevices2`

`luna://com.webos.service.attachedstoragemanager/listDevices2`

Lister on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/listDevices2 '{}'
```

> ACG groups: private, attachedstoragemanager.list, configurator.callbacks, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listfoldercontents"></a>
## `listFolderContents`

`luna://com.webos.service.attachedstoragemanager/listFolderContents`

Lister on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/listFolderContents '{}'
```

> ACG groups: private, attachedstoragemanager.list, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="move"></a>
## `move`

`luna://com.webos.service.attachedstoragemanager/move`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/move '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="refreshdevicelist"></a>
## `refreshDeviceList`

`luna://com.webos.service.attachedstoragemanager/refreshDeviceList`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/refreshDeviceList '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerdevicestatus"></a>
## `registerDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/registerDeviceStatus`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/registerDeviceStatus '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responsedevicestatus"></a>
## `responseDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/responseDeviceStatus`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/responseDeviceStatus '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="triggeredactivity"></a>
## `triggeredActivity`

`luna://com.webos.service.attachedstoragemanager/triggeredActivity`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/triggeredActivity '{}'
```

> ACG groups: attachedstoragemanager.control, private, configurator.callbacks, all, activities.callbacks, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisterdevicestatus"></a>
## `unregisterDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/unregisterDeviceStatus`

Method on com.webos.service.attachedstoragemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/unregisterDeviceStatus '{}'
```

> ACG groups: attachedstoragemanager.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
