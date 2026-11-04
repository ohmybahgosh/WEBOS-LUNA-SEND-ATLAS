# `com.webos.service.pdm`

26 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`audioDeviceList`](#audiodevicelist) | unknown |  | storage | List of audio device(s) connected. |
| [`dev/getAttachedDeviceList`](#dev_getattacheddevicelist) | unknown |  | storage | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only |
| [`dev/setDeviceForSession`](#dev_setdeviceforsession) | private |  | storage | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.management); name only |
| [`deviceListInfo`](#devicelistinfo) | unknown |  | storage | An array containing information about the currently connected device(s). |
| [`deviceStatusList`](#devicestatuslist) | unknown |  | storage | List of the storage and non-storage devices connected and their statuses. |
| [`driveStatusList`](#drivestatuslist) | unknown |  | storage | List of the drives in the connected storage devices and their statuses. |
| [`eject`](#eject) | public |  | storage | Unmounts all drives of the storage device for safe removal. Prerequisite: The storage device must be connected. |
| [`format`](#format) | public |  | storage | Formats the connected drive. |
| [`fsck`](#fsck) | public |  | storage | Checks the file system by performing fsck (File System Check) of the corresponding connected drive. Note : On connecting a USB device with a |
| [`getAttachedAllDeviceList`](#getattachedalldevicelist) | unknown |  | storage | Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only |
| [`getAttachedDeviceStatus`](#getattacheddevicestatus) | public | yes | storage | Gets the status information of connected device(s). |
| [`getAttachedNonStorageDeviceList`](#getattachednonstoragedevicelist) | public | yes | storage | Gets the status information of connected non-storage device(s). |
| [`getAttachedStorageDeviceList`](#getattachedstoragedevicelist) | public | yes | storage | Gets status information of connected storage device(s). |
| [`getExample`](#getexample) | public |  | storage | Provides debug logs with detailed information of all connected storage and non-storage device list. |
| [`getSpaceInfo`](#getspaceinfo) | public |  | storage | Gets the space information of the connected drive. Note : The drive must be mounted. |
| [`isWritableDrive`](#iswritabledrive) | public |  | storage | Checks the file system attribute of the drive and returns whether it is writable. |
| [`mountandFullFsck`](#mountandfullfsck) | public |  | storage | Mounts the device without performing Fsck. Alternatively, it can be configured to perform Fsck and then mount the device. |
| [`netDeviceList`](#netdevicelist) | unknown |  | storage | List of Communication Device Class (CDC) device(s) connected. |
| [`nonStorageDeviceList`](#nonstoragedevicelist) | unknown |  | storage | List of information about the non-storage devices that are currently connected. |
| [`setVolumeLabel`](#setvolumelabel) | public |  | storage | Sets the volume label of the drive. It is supported only when file system type is FAT. |
| [`spaceInfo`](#spaceinfo) | unknown |  | storage | Information about the drive space. |
| [`storageDeviceList`](#storagedevicelist) | unknown |  | storage | List of information about the storage devices that are currently connected. |
| [`storageDriveList`](#storagedrivelist) | unknown |  | storage | List of the drives in storage devices connected. |
| [`subDeviceList`](#subdevicelist) | unknown |  | storage | Contains info of sub-devices Note: Sub-devices are multiple camera or sound devices inside single camera or sound device. |
| [`umountAllDrive`](#umountalldrive) | public |  | storage | Unmounts all drives. |
| [`videoDeviceList`](#videodevicelist) | unknown |  | storage | List of video device(s) connected. |

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

<a id="dev_getattacheddevicelist"></a>
## `dev/getAttachedDeviceList`

`luna://com.webos.service.pdm/dev/getAttachedDeviceList`

Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

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
- **Confidence:** code

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

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/fsck '{"driveName":"sda"}
```

> ACG: physicaldevice.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

<a id="getattachedalldevicelist"></a>
## `getAttachedAllDeviceList`

`luna://com.webos.service.pdm/getAttachedAllDeviceList`

Registered in webOS OSE sysbus api.json (ACG group physicaldevice.query); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getAttachedAllDeviceList '{}'
```

> Listed under ACG group "physicaldevice.query" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.pdm/blob/master/files/sysbus_auto/com.webos.service.pdm.api.json.in)

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

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getAttachedStorageDeviceList '{ "subscribe" : true }
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; powerStatus:String; storageDeviceList:Object array: storageDeviceList \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

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

```sh
luna-send -n 1 -f luna://com.webos.service.pdm/getSpaceInfo '{ "driveName" : "sda" , "directCheck" : true }
```

> ACG: physicaldevice.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; spaceInfo:Object: spaceInfo \| Service: Manages USB devices that are connected to the webOS system. Main Functions: Mount/unmount of Mass Storage Class (MSC) USB devices Format, Fdisk, File system check (FSCK) Detect USB device Supported US

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-pdm/)

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
