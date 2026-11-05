# `com.webos.service.videooutput`

Video output service: connects video sources to the display, sets display window, resolution, scaling, and compositing, and reports output capabilities and supported resolutions.

33 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`blankVideo`](#blankvideo) | public |  | display | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`ComposeOrder`](#composeorder) | unknown |  | display | documented | Object to represent compositing parameters for the video sinks. |
| [`connect`](#connect) | public |  | display | documented | Connects a video source to a video sink |
| [`disconnect`](#disconnect) | public |  | display | documented | Disconnects video from sink. |
| [`display/debugScalerStatus`](#display_debugscalerstatus) | public |  | display | inferred | Handles the debug scaler status (display) |
| [`display/getApplyDoneWindowRegion`](#display_getapplydonewindowregion) | public |  | display | inferred | Returns the apply done window region (display) |
| [`display/getOutputCapabilities`](#display_getoutputcapabilities) | public |  | display | documented | Helper method to query the set video limits |
| [`display/getParam`](#display_getparam) | public |  | display | documented | Gets information of parameters for video sinks to render video frames |
| [`display/getSupportedResolution`](#display_getsupportedresolution) | public |  | display | inferred | Returns the supported resolution (display) |
| [`display/getSupportedResolutions`](#display_getsupportedresolutions) | private |  | display | inferred | Returns the supported resolutions (display) |
| [`display/getVideoLimits`](#display_getvideolimits) | public |  | display | inferred | Returns the video limits (display) |
| [`display/requestVideoDelay`](#display_requestvideodelay) | public |  | display | inferred | Requests the video delay (display) |
| [`display/setBBD`](#display_setbbd) | public |  | display | inferred | Sets the BBD (display) |
| [`display/setCompositing`](#display_setcompositing) | public |  | display | documented | Sets compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video ou |
| [`display/setDisplayResolution`](#display_setdisplayresolution) | public |  | display | inferred | Sets the display resolution (display) |
| [`display/setDisplayScreen`](#display_setdisplayscreen) | public |  | display | inferred | Sets the display screen (display) |
| [`display/setDisplayWindow`](#display_setdisplaywindow) | public |  | display | documented | Setup video output location on the screen for specified sink. |
| [`display/setDisplayWindowProperty`](#display_setdisplaywindowproperty) | public |  | display | inferred | Sets the display window property (display) |
| [`display/setFrameDelay`](#display_setframedelay) | private |  | display | inferred | Sets the frame delay (display) |
| [`display/setNMRM`](#display_setnmrm) | public |  | display | inferred | Sets the NMRM (display) |
| [`display/setParam`](#display_setparam) | public |  | display | inferred | Sets the param (display) |
| [`display/setReportBspError`](#display_setreportbsperror) | public |  | display | inferred | Sets the report bsp error (display) |
| [`getStatus`](#getstatus) | public | yes | display | documented | Lists all video sinks and their status. |
| [`orbit/debug`](#orbit_debug) | public |  | display | inferred | Handles the debug (orbit) |
| [`Planes`](#planes) | unknown |  | display | documented | Object to represent video planes and available size of scaling. |
| [`register`](#register) | public |  | display | documented | Registers pipeline ID to videooutputd. Note: If this API is required to be called, make sure it is called before the connect API call. |
| [`reset/resetVideoSettings`](#reset_resetvideosettings) | public |  | settings | inferred | Resets the video settings (reset) ⚠️ |
| [`setVideoData`](#setvideodata) | public |  | display | documented | Sets video data needed for playback. |
| [`systemproperty/getProperties`](#systemproperty_getproperties) | public |  | system-info | inferred | Returns the properties (systemproperty) |
| [`unregister`](#unregister) | public |  | display | documented | Unregisters pipeline ID from videooutputd. |
| [`Video`](#video) | unknown |  | display | documented | Object to represent the status of video sinks. |
| [`VideoRect`](#videorect) | unknown |  | display | documented | Object to represent the video window coordinates. |
| [`VideoSize`](#videosize) | unknown |  | display | documented | Object to represent video size. |

<a id="blankvideo"></a>
## `blankVideo`

`luna://com.webos.service.videooutput/blankVideo`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

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

**Returns:**

| Field | Type / notes |
|---|---|
| `planeID` | Number (int8\_t) (required) Numeric plane ID of the sink. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/disconnect '{"sink":"MAIN"}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="display_debugscalerstatus"></a>
## `display/debugScalerStatus`

`luna://com.webos.service.videooutput/display/debugScalerStatus`

Handles the debug scaler status (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/debugScalerStatus '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_getapplydonewindowregion"></a>
## `display/getApplyDoneWindowRegion`

`luna://com.webos.service.videooutput/display/getApplyDoneWindowRegion`

Returns the apply done window region (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/getApplyDoneWindowRegion '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_getoutputcapabilities"></a>
## `display/getOutputCapabilities`

`luna://com.webos.service.videooutput/display/getOutputCapabilities`

Helper method to query the set video limits

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `numPlanes` | Number (int8\_t) (required) Total hardware planes available on the platform for rendering |
| `planes` | Object array: Planes (required) See "Planes" object. |
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `sink` | String (optional) Video sink. Each value corresponds to overlay plane ID of display. For example, raspberrypi have overlay planes whose IDs are 44, 45, 46, 47. Each possible string value corresponds to the ID values above. Possible values are: - MAIN - SUB0 |
| `planeId` | Number (int32\_t) (optional) Numeric plane ID of the sink. |
| `crtcId` | Number (int32\_t) (optional) Numeric crtc ID of the sink. |
| `connId` | Number (int32\_t) (optional) Numeric connector ID of the sink. |
| `numConnector` | Number (int32\_t) (optional) Number of connected displays |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/getParam '{"command":"DRMResources","sink":"MAIN"}
```

> ACG: videooutput.query \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String; sink:String; planeId:Number (int32_t); crtcId:Number (int32_t); connId:Number (int32_t); numConnector:Number (int32_t) \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="display_getsupportedresolution"></a>
## `display/getSupportedResolution`

`luna://com.webos.service.videooutput/display/getSupportedResolution`

Returns the supported resolution (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/getSupportedResolution '{}'
```

> ACG groups: media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="display_getsupportedresolutions"></a>
## `display/getSupportedResolutions`

`luna://com.webos.service.videooutput/display/getSupportedResolutions`

Returns the supported resolutions (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/getSupportedResolutions '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_getvideolimits"></a>
## `display/getVideoLimits`

`luna://com.webos.service.videooutput/display/getVideoLimits`

Returns the video limits (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/getVideoLimits '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_requestvideodelay"></a>
## `display/requestVideoDelay`

`luna://com.webos.service.videooutput/display/requestVideoDelay`

Requests the video delay (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/requestVideoDelay '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_setbbd"></a>
## `display/setBBD`

`luna://com.webos.service.videooutput/display/setBBD`

Sets the BBD (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setBBD '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="display_setdisplayresolution"></a>
## `display/setDisplayResolution`

`luna://com.webos.service.videooutput/display/setDisplayResolution`

Sets the display resolution (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setDisplayResolution '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_setdisplayscreen"></a>
## `display/setDisplayScreen`

`luna://com.webos.service.videooutput/display/setDisplayScreen`

Sets the display screen (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setDisplayScreen '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setDisplayWindow '{ "sink":"MAIN", "fullScreen":false, "displayOutput":{ "x":1000, "y":500, "width":920, "height":580 } }
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="display_setdisplaywindowproperty"></a>
## `display/setDisplayWindowProperty`

`luna://com.webos.service.videooutput/display/setDisplayWindowProperty`

Sets the display window property (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setDisplayWindowProperty '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_setframedelay"></a>
## `display/setFrameDelay`

`luna://com.webos.service.videooutput/display/setFrameDelay`

Sets the frame delay (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setFrameDelay '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_setnmrm"></a>
## `display/setNMRM`

`luna://com.webos.service.videooutput/display/setNMRM`

Sets the NMRM (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setNMRM '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_setparam"></a>
## `display/setParam`

`luna://com.webos.service.videooutput/display/setParam`

Sets the param (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setParam '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="display_setreportbsperror"></a>
## `display/setReportBspError`

`luna://com.webos.service.videooutput/display/setReportBspError`

Sets the report bsp error (display)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/display/setReportBspError '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.videooutput/getStatus`

Lists all video sinks and their status.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 4+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications when value changes. Possible values are: true - Get notifications false - Notifications are not required Note: This returns one entry for each video sink |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `video` | Object array: Video (optional) See "Video" object. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/getStatus '{"subscribe":true}
```

> ACG: videooutput.query \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String; subscribed:Boolean; video:Object array: Video \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/), [2](https://github.com/webosbrew/hyperion-webos/blob/HEAD/src/service.c), [3](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="orbit_debug"></a>
## `orbit/debug`

`luna://com.webos.service.videooutput/orbit/debug`

Handles the debug (orbit)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/orbit/debug '{}'
```

> ACG groups: private, all, media, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/register '{"context":"_rf8D3OiiIsX6Wk"}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="reset_resetvideosettings"></a>
## `reset/resetVideoSettings` ⚠️ DANGEROUS

`luna://com.webos.service.videooutput/reset/resetVideoSettings`

Resets the video settings (reset)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/reset/resetVideoSettings '{}'
```

> ACG groups: private, all, media, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/setVideoData '{"sink":"MAIN","frameRate":24,"width":854,"height":480}
```

> ACG: videooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorMessage:String \| Service: Connects the video source to the video output device and also controls post-processing and scaling on the video device. The service exposes methods that make the HAL calls to connect source to sink an

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-videooutput/)

<a id="systemproperty_getproperties"></a>
## `systemproperty/getProperties`

`luna://com.webos.service.videooutput/systemproperty/getProperties`

Returns the properties (systemproperty)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videooutput/systemproperty/getProperties '{}'
```

> ACG groups: media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorMessage` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

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
