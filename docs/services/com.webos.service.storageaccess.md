# `com.webos.service.storageaccess`

Storage-access service: lists storage providers and attached devices, reports device properties, and performs file operations (copy, move, rename, remove, eject).

13 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`device/copy`](#device_copy) | public | yes | storage | documented | Copies a file or directory from the source location to the destination. |
| [`device/eject`](#device_eject) | public |  | storage | documented | Ejects the storage device. In case of "cloud" storage type, it acts as a logout operation. Note: This operation is not applicable for "inter |
| [`device/getProperties`](#device_getproperties) | public |  | storage | documented | Gets properties of the given storage provider or the specified file or directory. |
| [`device/handleExtraCommand`](#device_handleextracommand) | public |  | storage | documented | Handles addtional operation related to various providers. |
| [`device/list`](#device_list) | public |  | storage | documented | Lists contents of the specified directory. |
| [`device/move`](#device_move) | public | yes | storage | documented | Moves a file or directory from the source location to the destination. |
| [`device/remove`](#device_remove) | public |  | storage | documented | Deletes the specified file or directory. |
| [`device/rename`](#device_rename) | public |  | storage | documented | Renames the specified file or directory. |
| [`files`](#files) | unknown |  | storage | documented | Provides information of the file or directory. |
| [`listStorageProviders`](#liststorageproviders) | public | yes | storage | documented | Provides a list of storages providers and the corresponding drive information. |
| [`operation`](#operation) | unknown |  | storage | documented | Provides details of the operation. |
| [`payload`](#payload) | unknown |  | storage | documented | Arguments required for the operation in the form of key value pair |
| [`storageProviders`](#storageproviders) | unknown |  | storage | documented | Provides information about the storage provider. |

<a id="device_copy"></a>
## `device/copy`

`luna://com.webos.service.storageaccess/device/copy`

Copies a file or directory from the source location to the destination.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `srcStorageType` | String (required) Indicates the source storage provider. Possible values are: cloud usb internal network Note: This method is not supported for UPnPmediaserver. |
| `srcDriveId` | String (required) Indicates the source drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `srcPath` | String (required) Indicates the path of the source file or directory. |
| `destStorageType` | String (required) Indicates the destination storage provider. Possible values are: cloud usb internal network Note: This method is not supported for UPnPmediaserver. |
| `destDriveId` | String (required) Indicates the destination drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `destPath` | String (required) Indicates the path of the destination directory. |
| `overwrite` | Boolean (optional) Indicates if destination file must be overwritten, if it already exists. Possible values are: true : Overwrite existing copy. false : Do not overwrite exisitng copy. |
| `subscribe` | Boolean (optional) Subscribe to get notified on the progress of the copy operation. Possible values are: true - Subscribed for notifications false - Not subscribed |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) Indicates the error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/device/copy '{ "srcStorageType":"cloud", "srcDriveId":"ojydIxW8yBZUV8J3NiyNBvJn", "destStorageType":"cloud", "destDriveId":"ojydIxW8yBZUV8J4NiyNBvJn", "srcPath":"/SAF/SAF_DEMO/test1.PNG", "destPath":"/SAF" }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="device_eject"></a>
## `device/eject`

`luna://com.webos.service.storageaccess/device/eject`

Ejects the storage device. In case of "cloud" storage type, it acts as a logout operation. Note: This operation is not applicable for "internal" storage type.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `storageType` | String (required) Indicates the storage provider. Possible values are: cloud usb internal network Note: This method is not supported for UPnPmediaserver. |
| `driveId` | String (required) Indicates the drive ID. Note: The drive ID can be found by using the listStorageProviders method. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | String (optional) Indicates the error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/device/eject '{ "storageType":"usb", "driveId":"4C531001600127113005-A7BE-1862" }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; errorCode:String; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="device_getproperties"></a>
## `device/getProperties`

`luna://com.webos.service.storageaccess/device/getProperties`

Gets properties of the given storage provider or the specified file or directory.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `storageType` | String (required) Indicates the storage provider. Possible values are: cloud usb internal network |
| `driveId` | String (required) Indicates the drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `path` | String (optional) Indicates the path of the file or directory. |

**Returns:**

| Field | Type / notes |
|---|---|
| `storageType` | String (optional) Indicates the type of storage provider. |
| `writable` | Boolean (optional) True if the device is writable. |
| `deletable` | Boolean (optional) True if the device is deletable. |
| `totalSpace` | Number (optional) Total storage space |
| `freeSpace` | Number (optional) Available free space |
| `attributes` | Object array (optional) Array of key value pair. Example: {"noatime": true} Note: These is just an example format. It may vary depending on the file system. |
| `extAttributes` | Object array (optional) Array of key value pair. Example: {"user.comment": "saf comment"} Note: These is just an example format. It may vary depending on the file system. |
| `errorCode` | Number (optional) Indicates the error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -i -f luna://com.webos.service.storageaccess/device/getProperties '{ "storageType":"cloud", "driveId":"_4Z7KLy4uyH47NwJTB5FtIoT" }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; storageType:String; writable:Boolean; deletable:Boolean; totalSpace:Number; freeSpace:Number; attributes:Object array; extAttributes:Object array; errorCode:Number; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="device_handleextracommand"></a>
## `device/handleExtraCommand`

`luna://com.webos.service.storageaccess/device/handleExtraCommand`

Handles addtional operation related to various providers.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `storageType` | String (required) Indicates the source storage provider. Possible values are: cloud usb internal network |
| `driveId` | String (optional) Indicates the drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `operation` | Object: operation (required) Object consisting of details of the operation. |

**Returns:**

| Field | Type / notes |
|---|---|
| `responsePayload` | Object array (optional) Response from the storage provider. |
| `errorCode` | Number (optional) Indicates the error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/device/handleExtraCommand '{ "storageType":"cloud", "driveId":"3OVs_ttW39gu", "operation":{ "type":"authenticate", "payload":{ "secretToken":"4/1AY0e-gmLYrDMo0affZ8" } } }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; responsePayload:Object array; errorCode:Number; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="device_list"></a>
## `device/list`

`luna://com.webos.service.storageaccess/device/list`

Lists contents of the specified directory.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `storageType` | String (required) Indicates the source storage provider. Possible values are: cloud usb internal network |
| `driveId` | String (required) Indicates the drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `path` | String (required) Indicates the path of the directory. |
| `offset` | Number (required) Indicates the index/offset from where to list the files or directories. |
| `limit` | Number (required) Indicates the count of entries to be listed (1 - 100). |

**Returns:**

| Field | Type / notes |
|---|---|
| `files` | Object array: files (optional) Provides information of the files or directories. |
| `totalCount` | Number (optional) Total number of files or directories in the given path. |
| `fullPath` | String (optional) Full path of this file or directory. |
| `errorCode` | Number (optional) Indicates the error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/device/list '{ "storageType":"cloud", "driveId":"ojydIxW8yBZUV8J3NiyNBvJn", "path":"/saf_demo_folder", "limit":10, "offset":1 }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; files:Object array: files; totalCount:Number; fullPath:String; errorCode:Number; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="device_move"></a>
## `device/move`

`luna://com.webos.service.storageaccess/device/move`

Moves a file or directory from the source location to the destination.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `srcStorageType` | String (required) Indicates the source storage provider. Possible values are: cloud usb internal network Note: This method is not supported for UPnPmediaserver. |
| `srcDriveId` | String (required) Indicates the source drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `destStorageType` | String (required) Indicates the destination storage provider. Possible values are: cloud usb internal network Note: This method is not supported for UPnPmediaserver. |
| `destDriveId` | String (required) Indicates the destination drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `srcPath` | String (required) Indicates the path of the source file or directory. |
| `destPath` | String (required) Indicates the path of the destination directory. |
| `overwrite` | Boolean (optional) Indicates if destination file must be overwritten, if it already exists. Possible values are: true : Overwrite existing copy. false : Do not overwrite exisitng copy. |
| `subscribe` | Boolean (optional) Subscribe to get notified on the progress of the copy operation. Possible values are: true - Subscribed for notifications false - Not subscribed |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) Indicates the error code for the failed operation |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/device/move '{ "srcStorageType":"cloud", "srcDriveId":"ojydIxW8yBZUV8J3NiyNBvJn", "destStorageType":"cloud", "destDriveId":"ojydIxW8yBZUV8J3NiyNBvJn", "srcPath":"/SAF/SAF_DEMO/test1.PNG", "destPath":"/SAF" }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="device_remove"></a>
## `device/remove`

`luna://com.webos.service.storageaccess/device/remove`

Deletes the specified file or directory.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `storageType` | String (required) Indicates the storage provider. Possible values are: cloud usb internal network Note: This method is not supported for UPnPmediaserver. |
| `driveId` | String (required) Indicates the drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `path` | String (required) Inddicates the path of the file or directory. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | String (optional) Indicates the error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/device/remove '{ "storageType": "cloud", "driveId": "ojydIxW8yBZUV8J3NiyNBvJn", "path": "/SAF/test1.PNG" }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; errorCode:String; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="device_rename"></a>
## `device/rename`

`luna://com.webos.service.storageaccess/device/rename`

Renames the specified file or directory.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `storageType` | String (required) Indicates the storage provider. Possible values are: cloud usb internal network Note: This method is not supported for UPnPmediaserver. |
| `driveId` | String (required) Indicates the drive ID. Note: The drive ID can be found by using the listStorageProviders method. |
| `path` | String (required) Indicates the path of the file or directory. |
| `newName` | String (required) Indicates the new name. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) Indicates the error code for the failed operation |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/device/rename '{ "storageType":"cloud", "driveId":"ojydIxW8yBZUV8J3NiyNBvJn", "path":"/SAF/test1.PNG", "newName":"17.PNG" }
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="files"></a>
## `files`

`luna://com.webos.service.storageaccess/files`

Provides information of the file or directory.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/files '{}'
```

> Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="liststorageproviders"></a>
## `listStorageProviders`

`luna://com.webos.service.storageaccess/listStorageProviders`

Provides a list of storages providers and the corresponding drive information.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe to get notifications. Possible values are: true - Subscribed for notifications false - Not subscribed |

**Returns:**

| Field | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. |
| `storageProviders` | Object array: storageProviders (optional) Provides information of the storage providers. |
| `errorCode` | Number (optional) Indicates the error code for the failed operation |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/listStorageProviders '{"subscribe": true}
```

> ACG: storageaccess.operation \| Returns: returnValue:Boolean; subscribe:Boolean; storageProviders:Object array: storageProviders; errorCode:Number; errorText:String \| Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="operation"></a>
## `operation`

`luna://com.webos.service.storageaccess/operation`

Provides details of the operation.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/operation '{}'
```

> Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="payload"></a>
## `payload`

`luna://com.webos.service.storageaccess/payload`

Arguments required for the operation in the form of key value pair

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/payload '{}'
```

> Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)

<a id="storageproviders"></a>
## `storageProviders`

`luna://com.webos.service.storageaccess/storageProviders`

Provides information about the storage provider.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.storageaccess/storageProviders '{}'
```

> Service: Provides a unified interface to access contents in different storage systems: USB storage Cloud storage provider (only Google Drive is supported) Network storage provider ( SambaServer and UPnPMediaSe \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-storageaccess/)
