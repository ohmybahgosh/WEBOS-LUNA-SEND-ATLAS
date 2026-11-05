# `com.webos.service.pdm`

Physical Device Manager: detects and manages attached USB and storage devices, listing attached devices, ejecting, formatting, and running file-system checks (fsck).

42 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`audioDeviceList`](#audiodevicelist) | unknown |  | storage | documented | List of audio device(s) connected. |
| [`checkUSBPort`](#checkusbport) | private |  | storage | inferred | Checks the USB port. |
| [`dev/getAttachedDeviceList`](#dev_getattacheddevicelist) | unknown |  | storage | documented | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only |
| [`dev/setDeviceForSession`](#dev_setdeviceforsession) | private |  | storage | documented | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.management); name only |
| [`deviceListInfo`](#devicelistinfo) | unknown |  | storage | documented | An array containing information about the currently connected device(s). |
| [`deviceStatusList`](#devicestatuslist) | unknown |  | storage | documented | List of the storage and non-storage devices connected and their statuses. |
| [`driveStatusList`](#drivestatuslist) | unknown |  | storage | documented | List of the drives in the connected storage devices and their statuses. |
| [`eject`](#eject) | public |  | storage | documented | Unmounts all drives of the storage device for safe removal. Prerequisite: The storage device must be connected. |
| [`format`](#format) | public |  | storage | documented | Formats the connected drive. |
| [`fsck`](#fsck) | public |  | storage | documented | Checks the file system by performing fsck (File System Check) of the corresponding connected drive. Note : On connecting a USB device with a |
| [`fsckAlert`](#fsckalert) | private |  | storage | inferred | Handles the fsck alert. |
| [`getAttachedAllDeviceList`](#getattachedalldevicelist) | unknown |  | storage | documented | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only |
| [`getAttachedDeviceList`](#getattacheddevicelist) | private |  | storage | inferred | Returns the attached device list. |
| [`getAttachedDeviceStatus`](#getattacheddevicestatus) | public | yes | storage | documented | Gets the status information of connected device(s). |
| [`getAttachedNonStorageDeviceList`](#getattachednonstoragedevicelist) | public | yes | storage | documented | Gets the status information of connected non-storage device(s). |
| [`getAttachedStorageDeviceList`](#getattachedstoragedevicelist) | public | yes | storage | documented | Gets status information of connected storage device(s). |
| [`getBuiltInUnknownCount`](#getbuiltinunknowncount) | private |  | storage | inferred | Returns the built in unknown count. |
| [`getExample`](#getexample) | public |  | storage | documented | Provides debug logs with detailed information of all connected storage and non-storage device list. |
| [`getIoPerformance`](#getioperformance) | private |  | storage | inferred | Returns the io performance. |
| [`getSpaceInfo`](#getspaceinfo) | public |  | storage | documented | Gets the space information of the connected drive. Note : The drive must be mounted. |
| [`getTouchPanelDisconnectCount`](#gettouchpaneldisconnectcount) | private |  | storage | inferred | Returns the touch panel disconnect count. |
| [`getTouchRoute`](#gettouchroute) | private |  | storage | inferred | Returns the touch route. |
| [`getUsbPowerControl`](#getusbpowercontrol) | private |  | power | inferred | Returns the USB power control. |
| [`getUSBResumeDone`](#getusbresumedone) | private |  | storage | inferred | Returns the USB resume done. |
| [`getUSBSwitch`](#getusbswitch) | private |  | storage | inferred | Returns the USB switch. |
| [`isWritableDrive`](#iswritabledrive) | public |  | storage | documented | Checks the file system attribute of the drive and returns whether it is writable. |
| [`mountandFullFsck`](#mountandfullfsck) | public |  | storage | documented | Mounts the device without performing Fsck. Alternatively, it can be configured to perform Fsck and then mount the device. |
| [`netDeviceList`](#netdevicelist) | unknown |  | storage | documented | List of Communication Device Class (CDC) device(s) connected. |
| [`nonStorageDeviceList`](#nonstoragedevicelist) | unknown |  | storage | documented | List of information about the non-storage devices that are currently connected. |
| [`pdmStatistics`](#pdmstatistics) | private |  | storage | inferred | Handles the pdm statistics. |
| [`resetVbus`](#resetvbus) | private |  | storage | inferred | Resets the vbus. ⚠️ |
| [`setTouchRoute`](#settouchroute) | private |  | storage | inferred | Sets the touch route. |
| [`setUsbPowerControl`](#setusbpowercontrol) | private |  | power | inferred | Sets the USB power control. |
| [`setUSBSwitch`](#setusbswitch) | private |  | storage | inferred | Sets the USB switch. |
| [`setVolumeLabel`](#setvolumelabel) | public |  | storage | documented | Sets the volume label of the drive. It is supported only when file system type is FAT. |
| [`spaceInfo`](#spaceinfo) | unknown |  | storage | documented | Information about the drive space. |
| [`storageDeviceList`](#storagedevicelist) | unknown |  | storage | documented | List of information about the storage devices that are currently connected. |
| [`storageDriveList`](#storagedrivelist) | unknown |  | storage | documented | List of the drives in storage devices connected. |
| [`subDeviceList`](#subdevicelist) | unknown |  | storage | documented | Contains info of sub-devices Note: Sub-devices are multiple camera or sound devices inside single camera or sound device. |
| [`umountAllDrive`](#umountalldrive) | public |  | storage | documented | Unmounts all drives. |
| [`videoDeviceList`](#videodevicelist) | unknown |  | storage | documented | List of video device(s) connected. |
| [`wakeupHdd`](#wakeuphdd) | private |  | storage | inferred | Handles the wakeup hdd. |

<a id="audiodevicelist"></a>
## `audioDeviceList`

`luna://com.webos.service.pdm/audioDeviceList`

List of audio device(s) connected.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/audioDeviceList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="checkusbport"></a>
## `checkUSBPort`

`luna://com.webos.service.pdm/checkUSBPort`

Checks the USB port.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/checkUSBPort '{}'
```

> ACG groups: physicaldevice.query, private, all, pdm.control, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dev_getattacheddevicelist"></a>
## `dev/getAttachedDeviceList`

`luna://com.webos.service.pdm/dev/getAttachedDeviceList`

Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/dev/getAttachedDeviceList '{}'
```

> Listed under ACG group "physicaldevice.query" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.pdm/blob/master/files/sysbus_auto/com.webos.service.pdm.api.json.in)

<a id="dev_setdeviceforsession"></a>
## `dev/setDeviceForSession`

`luna://com.webos.service.pdm/dev/setDeviceForSession`

Registered in webOS OSE sysbus api.json (ACG group physicaldevice.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/dev/setDeviceForSession '{}'
```

> Listed under ACG group "physicaldevice.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.pdm/blob/master/files/sysbus_auto/com.webos.service.pdm.api.json.in)

<a id="devicelistinfo"></a>
## `deviceListInfo`

`luna://com.webos.service.pdm/deviceListInfo`

An array containing information about the currently connected device(s).

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/deviceListInfo '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="devicestatuslist"></a>
## `deviceStatusList`

`luna://com.webos.service.pdm/deviceStatusList`

List of the storage and non-storage devices connected and their statuses.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/deviceStatusList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="drivestatuslist"></a>
## `driveStatusList`

`luna://com.webos.service.pdm/driveStatusList`

List of the drives in the connected storage devices and their statuses.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/driveStatusList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="eject"></a>
## `eject`

`luna://com.webos.service.pdm/eject`

Unmounts all drives of the storage device for safe removal. Prerequisite: The storage device must be connected.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `deviceNum` | Number (required) Indicates the unique identifier of the device. It is auto-assigned when the device is connected. Note : Use the getAttachedDeviceStatus() method to get a list of devices and their device numbers. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/eject '{"deviceNum":2}
```

> ACG: physicaldevice.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="format"></a>
## `format`

`luna://com.webos.service.pdm/format`

Formats the connected drive.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `driveName` | String (required) Indicates the information that can identify the drive. Example: sda1 |
| `fsType` | String (optional) Indicates the file system type. Possible values are: fat ntfs Default: fat |
| `volumeLabel` | String (optional) Indicates the volume label for the drive. Default: volumeLabel not set |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/format '{ "driveName":"sda", "fsType":"fat", "volumeLabel":"test" }
```

> ACG: physicaldevice.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="fsck"></a>
## `fsck`

`luna://com.webos.service.pdm/fsck`

Checks the file system by performing fsck (File System Check) of the corresponding connected drive. Note : On connecting a USB device with a large number of files, the PDM service prompts for “Check & Repair” and “Open Now”. The fsck() API will do the file system checking when “Check & Repair” is selected.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `driveName` | String (required) Indicates the information that can identify the drive. Example: sda1 |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/fsck '{"driveName":"sda"}
```

> ACG: physicaldevice.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="fsckalert"></a>
## `fsckAlert`

`luna://com.webos.service.pdm/fsckAlert`

Handles the fsck alert.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/fsckAlert '{}'
```

> ACG groups: private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getattachedalldevicelist"></a>
## `getAttachedAllDeviceList`

`luna://com.webos.service.pdm/getAttachedAllDeviceList`

Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getAttachedAllDeviceList '{}'
```

> Listed under ACG group "physicaldevice.query" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.pdm/blob/master/files/sysbus_auto/com.webos.service.pdm.api.json.in)

<a id="getattacheddevicelist"></a>
## `getAttachedDeviceList`

`luna://com.webos.service.pdm/getAttachedDeviceList`

Returns the attached device list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getAttachedDeviceList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getattacheddevicestatus"></a>
## `getAttachedDeviceStatus`

`luna://com.webos.service.pdm/getAttachedDeviceStatus`

Gets the status information of connected device(s).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe to get notified when the device status information changes. Possible values are: true - Subscribe for changes. false - Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `deviceStatusList` | Object array: deviceStatusList (optional) An array containing the status information of the device. |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getAttachedDeviceStatus '{ "subscribe" : true}
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; deviceStatusList:Object array: deviceStatusList \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="getattachednonstoragedevicelist"></a>
## `getAttachedNonStorageDeviceList`

`luna://com.webos.service.pdm/getAttachedNonStorageDeviceList`

Gets the status information of connected non-storage device(s).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe to get notified when a device is connected and the list of non-storage device changes. Possible values are: true - Subscribe for changes. false - Not subscribed. |
| `category` | String (optional) Category of non-storage device. Possible values are: Audio Video Net |
| `groupSubDevices` | Boolean (optional) Indicates grouping of sub devices. Possible values are: true - Groups sub-devices into subDeviceList which is part of videoDeviceList or audioDeviceList. false (default) - Gives audioDeviceList without subDeviceList and videoDeviceList (backward compatible). |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `powerStatus` | String (optional) Power-on status of the device. Note: This value always defaults to " normal". |
| `nonStorageDeviceList` | Object array: nonStorageDeviceList (optional) An array containing the information about the non-storage device that is currently connected. Note: Returned only when " category" is NOT provided. |
| `videoDeviceList` | Object array: videoDeviceList (optional) An array of video device lists connected. Note: Returned only when " category" is " Video". |
| `audioDeviceList` | Object array: audioDeviceList (optional) An array of audio device list connected. Note: Returned only when " category" is " Audio". |
| `netDeviceList` | Object array: netDeviceList (optional) An array of net device list connected. Note: Returned only when " category" is " Net". |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getAttachedNonStorageDeviceList '{ "subscribe" : true }
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; powerStatus:String; nonStorageDeviceList:Object array: nonStorageDeviceList; videoDeviceList:Object array: videoDeviceList; audioDeviceList:Object array: audioDeviceList; netDeviceList:Object array: netDeviceList \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="getattachedstoragedevicelist"></a>
## `getAttachedStorageDeviceList`

`luna://com.webos.service.pdm/getAttachedStorageDeviceList`

Gets status information of connected storage device(s).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get the notifications. Possible values are: true : Subscribe for notifications. false : Not subscribed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `powerStatus` | String (optional) Indicates the power-on status of the device. Note: This value always defaults to " normal". |
| `storageDeviceList` | Object array: storageDeviceList (optional) Indicates an array containing information about the currently connected storage device(s). |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getAttachedStorageDeviceList '{ "subscribe" : true }
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; powerStatus:String; storageDeviceList:Object array: storageDeviceList \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="getbuiltinunknowncount"></a>
## `getBuiltInUnknownCount`

`luna://com.webos.service.pdm/getBuiltInUnknownCount`

Returns the built in unknown count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getBuiltInUnknownCount '{}'
```

> ACG groups: private, all, physicaldevice.devutility.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getexample"></a>
## `getExample`

`luna://com.webos.service.pdm/getExample`

Provides debug logs with detailed information of all connected storage and non-storage device list.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getExample '{ }
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="getioperformance"></a>
## `getIoPerformance`

`luna://com.webos.service.pdm/getIoPerformance`

Returns the io performance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getIoPerformance '{}'
```

> ACG groups: pdm.read, physicaldevice.query, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getspaceinfo"></a>
## `getSpaceInfo`

`luna://com.webos.service.pdm/getSpaceInfo`

Gets the space information of the connected drive. Note : The drive must be mounted.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `driveName` | String (required) Information that can identify the drive (e.g. sda1) |
| `directCheck` | Boolean (optional) Indicates if PDM needs to newly measure the drive space information at the time of API call. Possible values are: true - Newly measures the information false - Returns periodically measured information |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `spaceInfo` | Object: spaceInfo (optional) Information about the drive space. |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getSpaceInfo '{ "driveName" : "sda" , "directCheck" : true }
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; spaceInfo:Object: spaceInfo \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="gettouchpaneldisconnectcount"></a>
## `getTouchPanelDisconnectCount`

`luna://com.webos.service.pdm/getTouchPanelDisconnectCount`

Returns the touch panel disconnect count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getTouchPanelDisconnectCount '{}'
```

> ACG groups: private, all, physicaldevice.devutility.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettouchroute"></a>
## `getTouchRoute`

`luna://com.webos.service.pdm/getTouchRoute`

Returns the touch route.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getTouchRoute '{}'
```

> ACG groups: devices, physicaldevice.devutility, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getusbpowercontrol"></a>
## `getUsbPowerControl`

`luna://com.webos.service.pdm/getUsbPowerControl`

Returns the USB power control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getUsbPowerControl '{}'
```

> ACG groups: physicaldevice.devutility. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getusbresumedone"></a>
## `getUSBResumeDone`

`luna://com.webos.service.pdm/getUSBResumeDone`

Returns the USB resume done.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getUSBResumeDone '{}'
```

> ACG groups: pdm.read, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getusbswitch"></a>
## `getUSBSwitch`

`luna://com.webos.service.pdm/getUSBSwitch`

Returns the USB switch.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getUSBSwitch '{}'
```

> ACG groups: private, all, physicaldevice.devutility.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="iswritabledrive"></a>
## `isWritableDrive`

`luna://com.webos.service.pdm/isWritableDrive`

Checks the file system attribute of the drive and returns whether it is writable.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `driveName` | String (required) Information that can identify the drive (e.g. sda1) |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `isWritable` | Boolean (optional) Indicates if data can be written on the drive. Possible values are: - true- Writable drive - false- Cannot be written |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/isWritableDrive '{ "driveName" : "sda" }
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; isWritable:Boolean \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="mountandfullfsck"></a>
## `mountandFullFsck`

`luna://com.webos.service.pdm/mountandFullFsck`

Mounts the device without performing Fsck. Alternatively, it can be configured to perform Fsck and then mount the device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mountName` | String (required) USB device name (If the device detected by /dev/sda, the device name is sda). |
| `needFsck` | Boolean (optional) Indicates whether Fsck is needed. Possible values are: true - Perform Fsck and then mount the device false (default) - Mount the device directly without performing Fsck. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/mountandFullFsck'{ "mountName" : "sda"}
```

> ACG: physicaldevice.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="netdevicelist"></a>
## `netDeviceList`

`luna://com.webos.service.pdm/netDeviceList`

List of Communication Device Class (CDC) device(s) connected.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/netDeviceList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="nonstoragedevicelist"></a>
## `nonStorageDeviceList`

`luna://com.webos.service.pdm/nonStorageDeviceList`

List of information about the non-storage devices that are currently connected.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/nonStorageDeviceList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="pdmstatistics"></a>
## `pdmStatistics`

`luna://com.webos.service.pdm/pdmStatistics`

Handles the pdm statistics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/pdmStatistics '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetvbus"></a>
## `resetVbus` ⚠️ DANGEROUS

`luna://com.webos.service.pdm/resetVbus`

Resets the vbus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/resetVbus '{}'
```

> ACG groups: all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settouchroute"></a>
## `setTouchRoute`

`luna://com.webos.service.pdm/setTouchRoute`

Sets the touch route.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/setTouchRoute '{}'
```

> ACG groups: devices, physicaldevice.devutility, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setusbpowercontrol"></a>
## `setUsbPowerControl`

`luna://com.webos.service.pdm/setUsbPowerControl`

Sets the USB power control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/setUsbPowerControl '{}'
```

> ACG groups: physicaldevice.devutility. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setusbswitch"></a>
## `setUSBSwitch`

`luna://com.webos.service.pdm/setUSBSwitch`

Sets the USB switch.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/setUSBSwitch '{}'
```

> ACG groups: private, all, physicaldevice.devutility.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvolumelabel"></a>
## `setVolumeLabel`

`luna://com.webos.service.pdm/setVolumeLabel`

Sets the volume label of the drive. It is supported only when file system type is FAT.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `driveName` | String (required) Information that can identify the drive (e.g. sda1) |
| `volumeLabel` | String (required) Volume label for the drive. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/setVolumeLabel '{ "driveName" : "sda", "volumeLabel" : "webos" }
```

> ACG: physicaldevice.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="spaceinfo"></a>
## `spaceInfo`

`luna://com.webos.service.pdm/spaceInfo`

Information about the drive space.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/spaceInfo '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="storagedevicelist"></a>
## `storageDeviceList`

`luna://com.webos.service.pdm/storageDeviceList`

List of information about the storage devices that are currently connected.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/storageDeviceList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="storagedrivelist"></a>
## `storageDriveList`

`luna://com.webos.service.pdm/storageDriveList`

List of the drives in storage devices connected.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/storageDriveList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="subdevicelist"></a>
## `subDeviceList`

`luna://com.webos.service.pdm/subDeviceList`

Contains info of sub-devices Note: Sub-devices are multiple camera or sound devices inside single camera or sound device.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/subDeviceList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="umountalldrive"></a>
## `umountAllDrive`

`luna://com.webos.service.pdm/umountAllDrive`

Unmounts all drives.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/umountAllDrive '{}
```

> ACG: physicaldevice.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="videodevicelist"></a>
## `videoDeviceList`

`luna://com.webos.service.pdm/videoDeviceList`

List of video device(s) connected.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/videoDeviceList '{}'
```

> Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="wakeuphdd"></a>
## `wakeupHdd`

`luna://com.webos.service.pdm/wakeupHdd`

Handles the wakeup hdd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/wakeupHdd '{}'
```

> ACG groups: physicaldevice.management, private, all, pdm.control, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
