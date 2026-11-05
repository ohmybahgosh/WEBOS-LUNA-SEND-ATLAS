# `com.webos.pipeline.camera`

Camera preview pipeline service (webOS OSE): starts and stops a camera preview, sets its window and input position, and reports pipeline info.

5 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`inputPos`](#inputpos) | unknown |  | camera | documented | Input position details. |
| [`setWindow`](#setwindow) | public |  | camera | documented | Sets the window's position and size, display ID, and overlay/mirror options. |
| [`start`](#start) | public |  | camera | documented | Starts the preview. |
| [`stop`](#stop) | public |  | camera | documented | Stops the preview. |
| [`subscribePipeLineInfo`](#subscribepipelineinfo) | public | yes | camera | documented | Gets notification when there is an error event from pipeline. |

<a id="inputpos"></a>
## `inputPos`

`luna://com.webos.pipeline.camera/inputPos`

Input position details.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.camera/inputPos '{}'
```

> Service: Provide an interface to preview camera data. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-camera/)

<a id="setwindow"></a>
## `setWindow`

`luna://com.webos.pipeline.camera/setWindow`

Sets the window's position and size, display ID, and overlay/mirror options.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `x` | Number (optional) The horizontal position of the window on the screen. It is measured in pixels from the left edge. The value can range from 0 to 1920. The default value is 0. |
| `y` | Number (optional) The vertical position of the window on the screen. It is measured in pixels from the top edge. The value can range from 0 to 1080. The default value is 0. |
| `w` | Number (optional) The width of the window in pixels. The value can range from 0 to 1920. The default value is 1920. |
| `h` | Number (optional) The height of the window in pixels. The value can range from 0 to 1080. The default value is 1080. |
| `displayId` | Number (optional) The identifier for the display where the window will appear. This helps to specify which screen to use. https://www.webosose.org/docs/guides/setup/setting-up-dual-displays/ Possible values are: 0 (Default): Primary display (HDMI0) 1: Secondary display (HDMI1) |
| `overlay` | Boolean (optional) Indicates if the window should be an overlay on top of other content. Possible values are: true: Overlay. The window will appear above other windows. false (Default): No overlay |
| `mirror` | Boolean (optional) Indicates if the content should be mirrored horizontally. Possible values are: true: Mirror content. The content will be flipped from left to right. false (Default): Do not mirror content. |

```sh
luna-send -n 1 -f luna://com.webos.pipeline.camera._ZuqSwL30000AlU/setWindow '{ "x": 0, "y": 0, "w": 960, "h": 540, "displayId": 0, "overlay": false, "mirror": false }
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provide an interface to preview camera data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-camera/)

<a id="start"></a>
## `start`

`luna://com.webos.pipeline.camera/start`

Starts the preview.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Indicates the application ID |
| `windowId` | String (required) Window ID. |
| `videoDisplayMode` | String (required) Indicates the display mode of the pipeline. |
| `width` | Number (required) The width of the video |
| `height` | Number (required) The height of the video |
| `format` | String (required) Indicates the video format. |
| `frameRate` | Number (required) Indicates the video frame rate. |
| `memType` | String (required) Indicates the memory type. |
| `memSrc` | String (required) Indicates the memory source. |
| `primary` | Boolean (required) Indicates the priority. |
| `cameraId` | String (required) Camera ID. |

**Returns:**

| Field | Type / notes |
|---|---|
| `pid` | Number (required) Process ID |

```sh
luna-send -n 1 -f luna://com.webos.pipeline.camera._ZuqSwL30000AlU/start '{ "appId": "com.webos.app.mediaevents-test", "windowId": "_Window_Id_1", "videoDisplayMode": "Textured", "width": 1280, "height": 720, "format": "JPEG", "frameRate": 30, "memType": "shmem", "memSrc": "7010", "primary": true, "cameraId": "camera1" }
```

> ACG: None \| Returns: pid:Number; returnValue:Boolean \| Service: Provide an interface to preview camera data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-camera/)

<a id="stop"></a>
## `stop`

`luna://com.webos.pipeline.camera/stop`

Stops the preview.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.camera._ZuqSwL30000AlU/stop '{}
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provide an interface to preview camera data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-camera/)

<a id="subscribepipelineinfo"></a>
## `subscribePipeLineInfo`

`luna://com.webos.pipeline.camera/subscribePipeLineInfo`

Gets notification when there is an error event from pipeline.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe to receive updates from this method. Possible values are: true (Default): Subscribed. false: Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.pipeline.camera._ZuqSwL30000AlU/subscribePipeLineInfo '{"subscribe":true}
```

> ACG: None \| Returns: subscribed:Boolean; returnValue:Boolean \| Service: Provide an interface to preview camera data.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-camera/)
