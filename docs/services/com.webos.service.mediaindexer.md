# `com.webos.service.mediaindexer`

Media indexer: scans internal and USB storage for audio, video and image files and extracts metadata, exposing media lists and per-device plugins.

23 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`AudioList`](#audiolist) | unknown |  | media | documented | Contains the detailed information about the audio files. |
| [`AudioMetadata`](#audiometadata) | unknown |  | media | documented | Contains the information about the AudioList, and also provides detailed information that are not included in AudioList. |
| [`deviceList`](#devicelist) | unknown |  | media | documented | Provides the detailed information about the specific device connected to the media indexer service. |
| [`getAudioList`](#getaudiolist) | public | yes | media | documented | Gets the available audio file list included in attached devices. Note : If the uri is specified, the audio file list for specified uri is pr |
| [`getAudioMetadata`](#getaudiometadata) | public |  | media | documented | Gets the detailed meta data information of the specified uri for the given audio file. |
| [`getDeviceList`](#getdevicelist) | public | yes | media | documented | Gets the list of all the attached storage devices. Note : The list can contain devices that are currently attached or the devices attached i |
| [`getImageList`](#getimagelist) | public | yes | media | documented | Gets all the available image file list included in the attached devices. Note : If the uri is specified, the image file list for specified u |
| [`getImageMetadata`](#getimagemetadata) | public |  | media | documented | Gets the detailed meta data information of specified uri of the image file. |
| [`getMediaDbPermission`](#getmediadbpermission) | public |  | media | documented | Enables the downloadable services or apps (built-in or downloadable) to acquire, access permission of the DB managed by the media indexer se |
| [`getPlugin`](#getplugin) | public |  | media | documented | Requests to retrieve the plugin from the plugin factory and to then activate the plugin. |
| [`getPluginList`](#getpluginlist) | public |  | media | documented | Gets a list of available plugins. |
| [`getVideoList`](#getvideolist) | public | yes | media | documented | Gets the available video files list included in the attached devices. Note : If the uri is specified, the video file list for specified uri  |
| [`getVideoMetadata`](#getvideometadata) | public |  | media | documented | Gets the detailed meta data information for the specified uri of the video file. |
| [`ImageList`](#imagelist) | unknown |  | media | documented | Detailed information about video files. |
| [`ImageMetadata`](#imagemetadata) | unknown |  | media | documented | Contains the information in the ImageList, and also provides detailed information that are not included in ImageList. |
| [`pluginList`](#pluginlist) | unknown |  | media | documented | Defines the supported device types by the media indexer service. |
| [`putPlugin`](#putplugin) | public |  | media | documented | Requests to add the plugin to the plugin factory. |
| [`requestDelete`](#requestdelete) | public |  | media | documented | Requests deletion of media item from media DB connector. |
| [`requestMediaScan`](#requestmediascan) | public |  | media | documented | Scans device for media item. |
| [`runDetect`](#rundetect) | public |  | media | documented | Requests to check plugins that are available in the known devices databases and then enables the device detection to notify the observer. |
| [`stopDetect`](#stopdetect) | public |  | media | documented | Requests not to detect the plugin in database for the known device and do not enable the device detection to notify the observer. |
| [`VideoList`](#videolist) | unknown |  | media | documented | Contains the detailed information about the video files. |
| [`VideoMetadata`](#videometadata) | unknown |  | media | documented | Contains the information about the VideoList, provides information about the video files that are not included in the VideoList. |

<a id="audiolist"></a>
## `AudioList`

`luna://com.webos.service.mediaindexer/AudioList`

Contains the detailed information about the audio files.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/AudioList '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="audiometadata"></a>
## `AudioMetadata`

`luna://com.webos.service.mediaindexer/AudioMetadata`

Contains the information about the AudioList, and also provides detailed information that are not included in AudioList.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/AudioMetadata '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="devicelist"></a>
## `deviceList`

`luna://com.webos.service.mediaindexer/deviceList`

Provides the detailed information about the specific device connected to the media indexer service.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/deviceList '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getaudiolist"></a>
## `getAudioList`

`luna://com.webos.service.mediaindexer/getAudioList`

Gets the available audio file list included in attached devices. Note : If the uri is specified, the audio file list for specified uri is provided. Else the audio file list for all attached devices is provided.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (optional) Indicates the uri of the device mounted on the target that contains the source path of the audio files. The format is given as: <protocol name>://<device uuid> Example: msc://D94A-BE4D |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default: false Note : Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other services such as physical device manager. |
| `count` | Number (optional) Limits the number of entries in the returned audio file list. Default: 500 |

**Returns:**

| Field | Type / notes |
|---|---|
| `audioList` | Object: audioList (optional) Indicates the supported device types. |
| `errorCode` | Number (optional) The error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getAudioList '{"uri":"msc://D94A-BE4D"}
```

> ACG: mediaindexer.operation \| Returns: audioList:Object: audioList; returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getaudiometadata"></a>
## `getAudioMetadata`

`luna://com.webos.service.mediaindexer/getAudioMetadata`

Gets the detailed meta data information of the specified uri for the given audio file.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) Indicates the uri of the audio file. Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleAudio.mp3 |

**Returns:**

| Field | Type / notes |
|---|---|
| `metadata` | Object array: AudioMetadata (optional) Indicates the meta data information of specified audio file. |
| `errorCode` | Number (optional) The error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getAudioMetadata '{"uri": "<uri>"}'
```

> ACG: mediaindexer.operation \| Returns: metadata:Object array: AudioMetadata; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getdevicelist"></a>
## `getDeviceList`

`luna://com.webos.service.mediaindexer/getDeviceList`

Gets the list of all the attached storage devices. Note : The list can contain devices that are currently attached or the devices attached in the past.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get the notifications. Possible values are: true : Subscribe for notifications. false : Not subscribed Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `pluginList` | Object array: pluginList (required) Indicates the supported device types. |
| `errorCode` | Number (optional) The error code for the operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 2 -f luna://com.webos.service.mediaindexer/getDeviceList '{"subscribe":true}
```

> ACG: mediaindexer.operation \| Returns: pluginList:Object array: pluginList; returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getimagelist"></a>
## `getImageList`

`luna://com.webos.service.mediaindexer/getImageList`

Gets all the available image file list included in the attached devices. Note : If the uri is specified, the image file list for specified uri is provided. Else the image file list for all attached devices is provided.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (optional) Indicates the uri of the device mounted on the target that contains the source path of the image files. Format: <protocol name>://<device uuid>. Example: msc://D94A-BE4D |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default: false Note : Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other services such as physical device manager. |
| `count` | Number (optional) Limits the number of entries in the returned image file list. Default: 500 |

**Returns:**

| Field | Type / notes |
|---|---|
| `imageList` | Object: imageList (optional) Specifies the supported device types. See imageList for details. |
| `errorCode` | Number (optional) The error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getImageList '{}
```

> ACG: mediaindexer.operation \| Returns: imageList:Object: imageList; returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getimagemetadata"></a>
## `getImageMetadata`

`luna://com.webos.service.mediaindexer/getImageMetadata`

Gets the detailed meta data information of specified uri of the image file.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) Indicates the uri of the audio file. Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleImage.jpg |

**Returns:**

| Field | Type / notes |
|---|---|
| `metadata` | Object array: imageList (optional) Indicates the metadata information of specified audio file. |
| `errorCode` | Number (optional) The error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getImageMetadata '{"uri":"msc://D94A-BE4D/tmp/usb/sdh/sdh1/SampleImage2.jpg"}
```

> ACG: mediaindexer.operation \| Returns: metadata:Object array: imageList; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getmediadbpermission"></a>
## `getMediaDbPermission`

`luna://com.webos.service.mediaindexer/getMediaDbPermission`

Enables the downloadable services or apps (built-in or downloadable) to acquire, access permission of the DB managed by the media indexer service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `serviceName` | String (required) Indicates the name of the downloadable services or apps (built-in or downloadable) to access the DB of the media indexer service. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getMediaDbPermission '{"serviceName":"com.webos.mediaindexer.app.qml"}
```

> ACG: mediaindexer.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getplugin"></a>
## `getPlugin`

`luna://com.webos.service.mediaindexer/getPlugin`

Requests to retrieve the plugin from the plugin factory and to then activate the plugin.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (optional) URI of the plugin to be retrieved and activated. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getPlugin '{"uri": "mtp"}
```

> ACG: mediaindexer.devutility \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getpluginlist"></a>
## `getPluginList`

`luna://com.webos.service.mediaindexer/getPluginList`

Gets a list of available plugins.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `pluginList` | Object array: pluginList (optional) Contains list of all installed plugins. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getPluginList '{}
```

> ACG: mediaindexer.devutility \| Returns: returnValue:Boolean; pluginList:Object array: pluginList \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getvideolist"></a>
## `getVideoList`

`luna://com.webos.service.mediaindexer/getVideoList`

Gets the available video files list included in the attached devices. Note : If the uri is specified, the video file list for specified uri is provided. Else the video file list for all attached devices is provided.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (optional) Specifies uri of device mounted on target that provided video files belongs to. Format: <protocol name>://<device uuid>. Example: msc://D94A-BE4D |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default: false Note : Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other services such as physical device manager. |
| `count` | Number (optional) Limits the number of entries in the returned video file list. Default: 500 |

**Returns:**

| Field | Type / notes |
|---|---|
| `videoList` | Object: videoList (optional) Indicates the supported device types. |
| `errorCode` | Number (optional) The error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getVideoList '{}
```

> ACG: mediaindexer.operation \| Returns: videoList:Object: videoList; returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="getvideometadata"></a>
## `getVideoMetadata`

`luna://com.webos.service.mediaindexer/getVideoMetadata`

Gets the detailed meta data information for the specified uri of the video file.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) Indicates the uri of the video file. Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleVideo.mp4 |

**Returns:**

| Field | Type / notes |
|---|---|
| `metadata` | Object array: VideoMetadata (optional) Indicates the meta data information of specified video file. |
| `errorCode` | Number (optional) The error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/getVideoMetadata '{"uri":"msc://D94A-BE4D/tmp/usb/sdh/sdh1/SampleVideofiles2.mp4"}
```

> ACG: mediaindexer.operation \| Returns: metadata:Object array: VideoMetadata; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="imagelist"></a>
## `ImageList`

`luna://com.webos.service.mediaindexer/ImageList`

Detailed information about video files.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/ImageList '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="imagemetadata"></a>
## `ImageMetadata`

`luna://com.webos.service.mediaindexer/ImageMetadata`

Contains the information in the ImageList, and also provides detailed information that are not included in ImageList.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/ImageMetadata '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="pluginlist"></a>
## `pluginList`

`luna://com.webos.service.mediaindexer/pluginList`

Defines the supported device types by the media indexer service.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/pluginList '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="putplugin"></a>
## `putPlugin`

`luna://com.webos.service.mediaindexer/putPlugin`

Requests to add the plugin to the plugin factory.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) URI of the plugin to be added. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/putPlugin '{"uri": "mtp"}
```

> ACG: mediaindexer.devutility \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="requestdelete"></a>
## `requestDelete`

`luna://com.webos.service.mediaindexer/requestDelete`

Requests deletion of media item from media DB connector.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) Playback URI for the given media item. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `count` | Number (optional) Provides the list of medial files which are deleted from database. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/requestDelete '{"uri": "/home/root/resolution_4.mp4"}
```

> ACG: mediaindexer.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; count:Number \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="requestmediascan"></a>
## `requestMediaScan`

`luna://com.webos.service.mediaindexer/requestMediaScan`

Scans device for media item.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `path` | String (required) Playback URI for the given media item. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (required) The error code for the failed operation. |
| `errorText` | String (required) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/requestMediaScan '{"path": "/media"}
```

> ACG: mediaindexer.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="rundetect"></a>
## `runDetect`

`luna://com.webos.service.mediaindexer/runDetect`

Requests to check plugins that are available in the known devices databases and then enables the device detection to notify the observer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (optional) URI of the plugin. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/runDetect '{"uri": "msc"}
```

> ACG: mediaindexer.devutility \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="stopdetect"></a>
## `stopDetect`

`luna://com.webos.service.mediaindexer/stopDetect`

Requests not to detect the plugin in database for the known device and do not enable the device detection to notify the observer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (optional) URI of the plugin. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/stopDetect '{"uri": "mtp"}
```

> ACG: mediaindexer.devutility \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="videolist"></a>
## `VideoList`

`luna://com.webos.service.mediaindexer/VideoList`

Contains the detailed information about the video files.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/VideoList '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)

<a id="videometadata"></a>
## `VideoMetadata`

`luna://com.webos.service.mediaindexer/VideoMetadata`

Contains the information about the VideoList, provides information about the video files that are not included in the VideoList.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediaindexer/VideoMetadata '{}'
```

> Service: Provides the functionalities that scan media files (audios, videos, images) from internal / external storage devices such as the usb devices and extracts the meta data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediaindexer/)
