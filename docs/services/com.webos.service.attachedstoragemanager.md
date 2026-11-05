# `com.webos.service.attachedstoragemanager`

Manages attached USB storage: lists devices and folder contents, copies, deletes, decompresses and formats, ejects devices, and extracts media metadata.

24 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelRequest`](#cancelrequest) | private |  | storage | inferred | Cancels the request. |
| [`changeDeviceStatus`](#changedevicestatus) | private |  | storage | inferred | Changes the device status. |
| [`checkDevicePerformance`](#checkdeviceperformance) | private |  | storage | inferred | Checks the device performance. |
| [`cleanDevice`](#cleandevice) | private |  | storage | inferred | Handles the clean device. |
| [`copy`](#copy) | private |  | storage | inferred | Copies the attachedstoragemanager. |
| [`decompress`](#decompress) | private |  | storage | inferred | Handles the decompress. |
| [`delete`](#delete) | private |  | storage | inferred | Deletes the attachedstoragemanager. ⚠️ |
| [`ejectDevice`](#ejectdevice) | private |  | storage | documented | Eject a USB device |
| [`format`](#format) | private |  | storage | inferred | Formats the attachedstoragemanager. ⚠️ |
| [`getAudioMetadata`](#getaudiometadata) | private |  | audio | inferred | Returns the audio metadata. |
| [`getChangedContent`](#getchangedcontent) | private |  | storage | inferred | Returns the changed content. |
| [`getCopyStatus`](#getcopystatus) | private |  | storage | inferred | Returns the copy status. |
| [`getFileOperationStatus`](#getfileoperationstatus) | private |  | storage | inferred | Returns the file operation status. |
| [`getProperties`](#getproperties) | private |  | storage | inferred | Returns the properties. |
| [`listContentsByCamera`](#listcontentsbycamera) | private |  | storage | inferred | Lists the contents by camera. |
| [`listDevices`](#listdevices) | ssap |  | storage | documented | List attached storage devices |
| [`listDevices2`](#listdevices2) | private |  | storage | inferred | Lists the devices 2. |
| [`listFolderContents`](#listfoldercontents) | private |  | storage | inferred | Lists the folder contents. |
| [`move`](#move) | private |  | storage | inferred | Moves the attachedstoragemanager. |
| [`refreshDeviceList`](#refreshdevicelist) | private |  | storage | inferred | Refreshes the device list. |
| [`registerDeviceStatus`](#registerdevicestatus) | private |  | storage | inferred | Registers the device status. |
| [`responseDeviceStatus`](#responsedevicestatus) | private |  | storage | inferred | Handles the response device status. |
| [`triggeredActivity`](#triggeredactivity) | private |  | storage | inferred | Handles the triggered activity. |
| [`unregisterDeviceStatus`](#unregisterdevicestatus) | private |  | storage | inferred | Unregisters the device status. |

<a id="cancelrequest"></a>
## `cancelRequest`

`luna://com.webos.service.attachedstoragemanager/cancelRequest`

Cancels the request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/cancelRequest '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changedevicestatus"></a>
## `changeDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/changeDeviceStatus`

Changes the device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/changeDeviceStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkdeviceperformance"></a>
## `checkDevicePerformance`

`luna://com.webos.service.attachedstoragemanager/checkDevicePerformance`

Checks the device performance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/checkDevicePerformance '{}'
```

> ACG groups: attachedstoragemanager.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cleandevice"></a>
## `cleanDevice`

`luna://com.webos.service.attachedstoragemanager/cleanDevice`

Handles the clean device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/cleanDevice '{}'
```

> ACG groups: attachedstoragemanager.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="copy"></a>
## `copy`

`luna://com.webos.service.attachedstoragemanager/copy`

Copies the attachedstoragemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/copy '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="decompress"></a>
## `decompress`

`luna://com.webos.service.attachedstoragemanager/decompress`

Handles the decompress.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/decompress '{}'
```

> ACG groups: private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delete"></a>
## `delete` ⚠️ DANGEROUS

`luna://com.webos.service.attachedstoragemanager/delete`

Deletes the attachedstoragemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Formats the attachedstoragemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/format '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiometadata"></a>
## `getAudioMetadata`

`luna://com.webos.service.attachedstoragemanager/getAudioMetadata`

Returns the audio metadata.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getAudioMetadata '{}'
```

> ACG groups: private, all, attachedstoragemanager.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchangedcontent"></a>
## `getChangedContent`

`luna://com.webos.service.attachedstoragemanager/getChangedContent`

Returns the changed content.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getChangedContent '{}'
```

> ACG groups: private, all, attachedstoragemanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcopystatus"></a>
## `getCopyStatus`

`luna://com.webos.service.attachedstoragemanager/getCopyStatus`

Returns the copy status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getCopyStatus '{}'
```

> ACG groups: private, all, attachedstoragemanager.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfileoperationstatus"></a>
## `getFileOperationStatus`

`luna://com.webos.service.attachedstoragemanager/getFileOperationStatus`

Returns the file operation status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getFileOperationStatus '{}'
```

> ACG groups: attachedstoragemanager.read, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.attachedstoragemanager/getProperties`

Returns the properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/getProperties '{}'
```

> ACG groups: private, all, attachedstoragemanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listcontentsbycamera"></a>
## `listContentsByCamera`

`luna://com.webos.service.attachedstoragemanager/listContentsByCamera`

Lists the contents by camera.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `deviceType` | array of: usb, internal camera, internal samples, internal igallery, dms, internal store demo |

**Returns:**

| Field | Type / notes |
|---|---|
| `deviceId` |  |
| `deviceName` |  |
| `deviceType` |  |
| `deviceUri` |  |
| `devices` |  |
| `ipAddress` |  |
| `manufacturer` |  |
| `modelDescription` |  |
| `thumbnailUri` |  |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.attachedstoragemanager/listDevices","payload":{"deviceType":["usb"]}}
```

> Response key: devices (each has deviceId used by ejectDevice).

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md)

<a id="listdevices2"></a>
## `listDevices2`

`luna://com.webos.service.attachedstoragemanager/listDevices2`

Lists the devices 2.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `deviceId` |  |
| `deviceName` |  |
| `deviceType` |  |
| `deviceUri` |  |
| `devices` |  |
| `ipAddress` |  |
| `manufacturer` |  |
| `modelDescription` |  |
| `thumbnailUri` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/listDevices2 '{}'
```

> ACG groups: private, attachedstoragemanager.list, configurator.callbacks, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listfoldercontents"></a>
## `listFolderContents`

`luna://com.webos.service.attachedstoragemanager/listFolderContents`

Lists the folder contents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/listFolderContents '{}'
```

> ACG groups: private, attachedstoragemanager.list, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="move"></a>
## `move`

`luna://com.webos.service.attachedstoragemanager/move`

Moves the attachedstoragemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/move '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="refreshdevicelist"></a>
## `refreshDeviceList`

`luna://com.webos.service.attachedstoragemanager/refreshDeviceList`

Refreshes the device list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/refreshDeviceList '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerdevicestatus"></a>
## `registerDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/registerDeviceStatus`

Registers the device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/registerDeviceStatus '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responsedevicestatus"></a>
## `responseDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/responseDeviceStatus`

Handles the response device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/responseDeviceStatus '{}'
```

> ACG groups: attachedstoragemanager.control, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="triggeredactivity"></a>
## `triggeredActivity`

`luna://com.webos.service.attachedstoragemanager/triggeredActivity`

Handles the triggered activity.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/triggeredActivity '{}'
```

> ACG groups: attachedstoragemanager.control, private, configurator.callbacks, all, activities.callbacks, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisterdevicestatus"></a>
## `unregisterDeviceStatus`

`luna://com.webos.service.attachedstoragemanager/unregisterDeviceStatus`

Unregisters the device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.attachedstoragemanager/unregisterDeviceStatus '{}'
```

> ACG groups: attachedstoragemanager.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
