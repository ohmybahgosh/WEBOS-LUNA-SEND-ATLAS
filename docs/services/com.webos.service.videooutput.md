# `com.webos.service.videooutput`

16 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`blankVideo`](#blankvideo) | unknown |  | display | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`ComposeOrder`](#composeorder) | unknown |  | display | Object to represent compositing parameters for the video sinks. |
| [`connect`](#connect) | public |  | display | Connects a video source to a video sink |
| [`disconnect`](#disconnect) | public |  | display | Disconnects video from sink. |
| [`display/getOutputCapabilities`](#display_getoutputcapabilities) | public |  | display | Helper method to query the set video limits |
| [`display/getParam`](#display_getparam) | public |  | display | Gets information of parameters for video sinks to render video frames |
| [`display/setCompositing`](#display_setcompositing) | public |  | display | Sets compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video ou |
| [`display/setDisplayWindow`](#display_setdisplaywindow) | public |  | display | Setup video output location on the screen for specified sink. |
| [`getStatus`](#getstatus) | public | yes | display | Lists all video sinks and their status. |
| [`Planes`](#planes) | unknown |  | display | Object to represent video planes and available size of scaling. |
| [`register`](#register) | public |  | display | Registers pipeline ID to videooutputd. Note: If this API is required to be called, make sure it is called before the connect API call. |
| [`setVideoData`](#setvideodata) | public |  | display | Sets video data needed for playback. |
| [`unregister`](#unregister) | public |  | display | Unregisters pipeline ID from videooutputd. |
| [`Video`](#video) | unknown |  | display | Object to represent the status of video sinks. |
| [`VideoRect`](#videorect) | unknown |  | display | Object to represent the video window coordinates. |
| [`VideoSize`](#videosize) | unknown |  | display | Object to represent video size. |

<a id="blankvideo"></a>
## `blankVideo`

`luna://com.webos.service.videooutput/blankVideo`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/blankVideo '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.videooutput/blob/master/files/sysbus/com.webos.service.videooutput.api.json)

<a id="composeorder"></a>
## `ComposeOrder`

`luna://com.webos.service.videooutput/ComposeOrder`

Object to represent compositing parameters for the video sinks.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/ComposeOrder '{}'
```

> Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="connect"></a>
## `connect`

`luna://com.webos.service.videooutput/connect`

Connects a video source to a video sink

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Video source. Possible values are: VDEC HDMI ADC AVD JPEG |
| `sourcePort` | Number (int8_t) (optional) Port of the source to which sink is connected |
| `sink` | String (required) Video sink. Each value corresponds to overlay plane ID of display. For example, raspberrypi have overlay planes whose IDs are 44 and 45. Each possible string value corresponds to the ID values above. Possible values are: MAIN SUB0 |
| `context` | String (optional) Registered pipeline ID. |
| `appId` | String (optional) Registered application ID. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/connect '{"source": "VDEC", "sourcePort":0, "sink":"MAIN"}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; planeID:Number (int8_t) \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.videooutput/disconnect`

Disconnects video from sink.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Video sink. Each value corresponds to overlay plane ID of display. For example, raspberrypi have overlay planes whose IDs are 44, 45, 46, 47. Each possible string value corresponds to the ID values above. Possible values are: MAIN SUB0 |
| `context` | String (optional) Specifies registered pipeline ID |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/disconnect '{"sink":"MAIN"}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="display_getoutputcapabilities"></a>
## `display/getOutputCapabilities`

`luna://com.webos.service.videooutput/display/getOutputCapabilities`

Helper method to query the set video limits

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/getOutputCapabilities '{}
```

> ACG: videooutput.query \| Returns: returnValue:Boolean; numPlanes:Number (int8_t); planes:Object array: Planes; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="display_getparam"></a>
## `display/getParam`

`luna://com.webos.service.videooutput/display/getParam`

Gets information of parameters for video sinks to render video frames

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `command` | String (required) Type of command. Possible values are: DRMResources - Get DRM/KMS related information. NumConnector - Get the number of connected displays. |
| `sink` | String (optional) Video sink. Each value corresponds to overlay plane ID of display. For example, raspberrypi have overlay planes whose IDs are 44, 45, 46, 47. Each possible string value corresponds to the ID values above. Possible values are: MAIN SUB0 |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/getParam '{"command":"DRMResources","sink":"MAIN"}
```

> ACG: videooutput.query \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String; sink:String; planeId:Number (int32_t); crtcId:Number (int32_t); connId:Number (int32_t); numConnector:Number (int32_t) \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="display_setcompositing"></a>
## `display/setCompositing`

`luna://com.webos.service.videooutput/display/setCompositing`

Sets compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video outputs simultaneously.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `composeOrder` | Object array: ComposeOrder (required) See "ComposeOrder" object. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setCompositing '{"composeOrder": {"sink": "MAIN", "opacity": 255, "zOrder": 0, "context": "test"}}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="display_setdisplaywindow"></a>
## `display/setDisplayWindow`

`luna://com.webos.service.videooutput/display/setDisplayWindow`

Setup video output location on the screen for specified sink.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Video sink. Each value corresponds to overlay plane ID of display. For example, raspberrypi have overlay planes whose IDs are 44, 45, 46, 47. Each possible string value corresponds to the ID values above. Possible values are: MAIN SUB0 |
| `fullScreen` | Boolean (required) Indicates whether the output is fullscreen. Possible values are: true : output is fullscreen false : use data from displayOuput |
| `sourceInput` | Object: VideoRect (optional) Source input rectangle. Note : Full video frame if not set. |
| `displayOutput` | Object: VideoRect (optional) Display output rectangle. Note : Required if fullscreen is false. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setDisplayWindow '{ "sink":"MAIN", "fullScreen":false, "displayOutput":{ "x":1000, "y":500, "width":920, "height":580 } }
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.videooutput/getStatus`

Lists all video sinks and their status.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 4+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications when value changes. Possible values are: true - Get notifications false - Notifications are not required Note: This returns one entry for each video sink |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/getStatus '{"subscribe":true}
```

> ACG: videooutput.query \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String; subscribed:Boolean; video:Object array: Video \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/), [2](https://github.com/webosbrew/hyperion-webos/blob/HEAD/src/service.c), [3](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="planes"></a>
## `Planes`

`luna://com.webos.service.videooutput/Planes`

Object to represent video planes and available size of scaling.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/Planes '{}'
```

> Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="register"></a>
## `register`

`luna://com.webos.service.videooutput/register`

Registers pipeline ID to videooutputd. Note: If this API is required to be called, make sure it is called before the connect API call.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `context` | String (required) Pipeline ID for registration. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/register '{"context":"_rf8D3OiiIsX6Wk"}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="setvideodata"></a>
## `setVideoData`

`luna://com.webos.service.videooutput/setVideoData`

Sets video data needed for playback.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `contentType` | String (optional) Type of media content. Possible values are: movie photo atsc30 dtv hdmi atv av component |
| `context` | String (optional) Registered pipeline ID. |
| `frameRate` | Number (double) (required) Video frame rate. |
| `width` | Number (uint32_t) (required) Video frame width. |
| `height` | Number (uint32_t) (required) Video frame height. |
| `scanType` | String (optional) Type of scan. Possible values are: progressive interlaced |
| `sink` | String (required) Video sink. Each value corresponds to overlay plane ID of display. For example, raspberrypi have overlay planes whose IDs are 44, 45, 46, 47. Each possible string value corresponds to the ID values above. Possible values are: MAIN SUB0 |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/setVideoData '{"sink":"MAIN","frameRate":24,"width":854,"height":480}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="unregister"></a>
## `unregister`

`luna://com.webos.service.videooutput/unregister`

Unregisters pipeline ID from videooutputd.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `context` | String (required) Registered pipeline ID. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/unregister '{"context":"_fkluA2iyTUgqNM"}
```

> ACG: videooutput.management \| Returns: returnValue:String; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="video"></a>
## `Video`

`luna://com.webos.service.videooutput/Video`

Object to represent the status of video sinks.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/Video '{}'
```

> Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="videorect"></a>
## `VideoRect`

`luna://com.webos.service.videooutput/VideoRect`

Object to represent the video window coordinates.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/VideoRect '{}'
```

> Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="videosize"></a>
## `VideoSize`

`luna://com.webos.service.videooutput/VideoSize`

Object to represent video size.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/VideoSize '{}'
```

> Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)
