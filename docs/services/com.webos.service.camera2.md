# `com.webos.service.camera2`

39 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`camera_capability`](#camera_capability) | unknown |  | camera | Contains the capability of the camera |
| [`camera_capture_format`](#camera_capture_format) | unknown |  | camera | Indicates the size and the format in which images are to be captured. |
| [`camera_format`](#camera_format) | unknown |  | camera | Indicates the size and format for the preview stream and images. |
| [`camera_memory_source`](#camera_memory_source) | unknown |  | camera | Indicates the type of the memory for the preview data to be written. |
| [`camera_properties`](#camera_properties) | unknown |  | camera | Contains the properties of the camera. |
| [`capture`](#capture) | public |  | camera | Starts capturing images using the camera. The captured images are stored as separate files at the specified location. The default file name  |
| [`capture_info`](#capture_info) | unknown |  | camera | Indicates the information about the camera. |
| [`captureImage`](#captureimage) | private |  | camera | Method on com.webos.service.camera2 (introspected on-device; parameters undocumented). |
| [`close`](#close) | public |  | camera | Closes the connection between the camera and the webOS device. |
| [`deviceList`](#devicelist) | unknown |  | camera | Contains the list of cameras connected to the webOS device. |
| [`getCameraList`](#getcameralist) | public | yes | camera | Gets the list of cameras connected to the webOS device. Returns IDs for each of the cameras connected to the device. |
| [`getEventNotification`](#geteventnotification) | public | yes | camera | Gets a notification when there is a change in any of the camera properties and formats or when there is an error event on your device. |
| [`getFd`](#getfd) | public |  | camera | Provides the FD (File Descriptor) for the POSIX shared memory. Note: It returns the FD by attaching it using LS2 attach fd interface to the  |
| [`getFormat`](#getformat) | public | yes | camera | Gets the current resolution, FPS, and format settings of the connected camera device. |
| [`getInfo`](#getinfo) | public |  | camera | Gets information about a camera that is connected to the webOS device. |
| [`getMediaFile`](#getmediafile) | private |  | media | Getter on com.webos.service.camera2 (introspected on-device; parameters undocumented). |
| [`getMediaFileList`](#getmediafilelist) | private |  | media | Getter on com.webos.service.camera2 (introspected on-device; parameters undocumented). |
| [`getProperties`](#getproperties) | public | yes | camera | Gets the current settings of the connected camera device. |
| [`getSolutions`](#getsolutions) | public |  | camera | Gets the current status of the supported camera solutions. |
| [`inputInfo`](#inputinfo) | unknown |  | camera | Indicates the details of user input on the screen. |
| [`open`](#open) | public |  | camera | Establishes a connection between a camera and the webOS device. Returns the device handle for this connection instance. |
| [`picture`](#picture) | unknown |  | camera | Indicates the image size and image format. |
| [`removeMediaFile`](#removemediafile) | private |  | media | Method on com.webos.service.camera2 (introspected on-device; parameters undocumented). ⚠️ |
| [`setFormat`](#setformat) | public |  | camera | Sets the size and format of the preview stream. This includes the height and width of the frame and the format in which data is to be writte |
| [`setPermission`](#setpermission) | private |  | camera | Setter on com.webos.service.camera2 (introspected on-device; parameters undocumented). |
| [`setProperties`](#setproperties) | public |  | camera | Sets the properties of the connected camera device. |
| [`setSolutions`](#setsolutions) | public |  | camera | Enables and disables camera solutions. |
| [`setWindow`](#setwindow) | public |  | camera | Sets the window's position and size, display ID, and overlay/mirror options. |
| [`solution_params`](#solution_params) | unknown |  | camera | Detailed information of a specific solution. |
| [`solutions`](#solutions) | unknown |  | camera | Information of all supported camera solutions. |
| [`startCamera`](#startcamera) | public |  | camera | Starts camera and turns on streaming of captured image frames into the shared memory (SystemV or POSIX). The method returns a key or an FD f |
| [`startCapture`](#startcapture) | public |  | camera | Starts capturing images using the camera. The captured images are stored as separate files at the location given by the "path" parameter. Th |
| [`startPreview`](#startpreview) | public |  | camera | Turns on camera streaming of captured image frames into the shared memory (SystemV or POSIX) and shows preview on the specified surface. The |
| [`stopCamera`](#stopcamera) | public |  | camera | Stops camera and turns off streaming into the shared memory. Note: Applications that called startCamera() should call this method to stop st |
| [`stopCapture`](#stopcapture) | public |  | camera | Stops camera from capturing images in the continuous mode. Continuous mode captures frames in succession till the stopCapture() method is ca |
| [`stopPreview`](#stoppreview) | public |  | camera | Turns off camera streaming and finishes showing the preview on the surface. Note: The applications should call this method to stop streaming |
| [`test`](#test) | private |  | camera | Method on com.webos.service.camera2 (introspected on-device; parameters undocumented). |
| [`video`](#video) | unknown |  | camera | Indicates the video size and the video format. |
| [`window_params`](#window_params) | unknown |  | camera | Defines a window's position, size, display ID, and overlay/mirror options. Note: At least one property must be mandatory. |

<a id="camera_capability"></a>
## `camera_capability`

`luna://com.webos.service.camera2/camera_capability`

Contains the capability of the camera

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/camera_capability '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="camera_capture_format"></a>
## `camera_capture_format`

`luna://com.webos.service.camera2/camera_capture_format`

Indicates the size and the format in which images are to be captured.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/camera_capture_format '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="camera_format"></a>
## `camera_format`

`luna://com.webos.service.camera2/camera_format`

Indicates the size and format for the preview stream and images.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/camera_format '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="camera_memory_source"></a>
## `camera_memory_source`

`luna://com.webos.service.camera2/camera_memory_source`

Indicates the type of the memory for the preview data to be written.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/camera_memory_source '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="camera_properties"></a>
## `camera_properties`

`luna://com.webos.service.camera2/camera_properties`

Contains the properties of the camera.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/camera_properties '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="capture"></a>
## `capture`

`luna://com.webos.service.camera2/capture`

Starts capturing images using the camera. The captured images are stored as separate files at the specified location. The default file name is of the format PictureDDMMYYYY-HHMMSS , where DDMMYYYY-HHMMSS is current date and time. Example: Picture11022019-204128.jpeg Note: This method should be called after startPreview().

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |
| `nimage` | Number (optional) Indicates the number of images to be captured. The value can range from 1 to 30. The default value is 1. |
| `path` | String (optional) Indicates the location where the captured images are to be saved. By default, captured images are saved in the /tmp/ folder. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/capture '{"handle": 189,"nimage": 2}
```

> ACG: camera.operation \| Returns: returnValue:Boolean; path:String array \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="capture_info"></a>
## `capture_info`

`luna://com.webos.service.camera2/capture_info`

Indicates the information about the camera.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/capture_info '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="captureimage"></a>
## `captureImage`

`luna://com.webos.service.camera2/captureImage`

Method on com.webos.service.camera2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/captureImage '{}'
```

> ACG groups: private, camera.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.camera2/close`

Closes the connection between the camera and the webOS device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/close '{"handle":886}
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="devicelist"></a>
## `deviceList`

`luna://com.webos.service.camera2/deviceList`

Contains the list of cameras connected to the webOS device.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/deviceList '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="getcameralist"></a>
## `getCameraList`

`luna://com.webos.service.camera2/getCameraList`

Gets the list of cameras connected to the webOS device. Returns IDs for each of the cameras connected to the device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications on changes. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getCameraList '{}
```

> ACG: camera.query \| Returns: deviceList:Object array: deviceList; returnValue:Boolean; subscribed:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="geteventnotification"></a>
## `getEventNotification`

`luna://com.webos.service.camera2/getEventNotification`

Gets a notification when there is a change in any of the camera properties and formats or when there is an error event on your device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.service.camera2/getEventNotification '{"subscribe":true}
```

> ACG: camera.operation \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="getfd"></a>
## `getFd`

`luna://com.webos.service.camera2/getFd`

Provides the FD (File Descriptor) for the POSIX shared memory. Note: It returns the FD by attaching it using LS2 attach fd interface to the client.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |
| `type` | String (required) Indicates the FD type. Possible values are: buffer: Indicates the FD of the buffer in camera shared memory. signal: Indicates the FD for the synchronization signal of the Camera Shared Memory. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getFd '{"handle": 886, "type": "buffer"}
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="getformat"></a>
## `getFormat`

`luna://com.webos.service.camera2/getFormat`

Gets the current resolution, FPS, and format settings of the connected camera device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Indicates the camera id for the device obtained using the getCameraList() API. Note: The camera must be opened first. |
| `subscribe` | Boolean (optional) Subscribe for notifications on changes. Possible values are: true: Subscribed. false: (default) Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getFormat '{ "id":"camera1"}
```

> ACG: camera.operation \| Returns: returnValue:Boolean; subscribed:Boolean; params:Object: camera_format; errorCode:Number; errorText:String \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="getinfo"></a>
## `getInfo`

`luna://com.webos.service.camera2/getInfo`

Gets information about a camera that is connected to the webOS device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Indicates id of the camera obtained using the getCameraList() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getInfo '{ "id":"camera1"}
```

> ACG: camera.query \| Returns: info:Object: capture_info; returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="getmediafile"></a>
## `getMediaFile`

`luna://com.webos.service.camera2/getMediaFile`

Getter on com.webos.service.camera2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getMediaFile '{}'
```

> ACG groups: private, camera.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmediafilelist"></a>
## `getMediaFileList`

`luna://com.webos.service.camera2/getMediaFileList`

Getter on com.webos.service.camera2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getMediaFileList '{}'
```

> ACG groups: private, camera.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.camera2/getProperties`

Gets the current settings of the connected camera device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `params` | String array (optional) Indicates the list of specific properties for which settings are returned. |
| `id` | String (required) Indicates the camera id for the device obtained using the getCameraList() API. Note: The camera must be opened first. |
| `subscribe` | Boolean (optional) Subscribe for notifications on changes. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getProperties '{"id":"camera1", "subscribe":true}
```

> ACG: camera.operation \| Returns: params:Object: camera_properties; returnValue:Boolean; subscribed:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="getsolutions"></a>
## `getSolutions`

`luna://com.webos.service.camera2/getSolutions`

Gets the current status of the supported camera solutions.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (optional) Indicates the handle for the device. It is obtained using the open() API. Note : Either one of "handle" or "id" must be provided. |
| `id` | String (optional) Indicates the camera id for the device. It is obtained using the getCameraList() API. Note : Either one of "handle" or "id" must be provided. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/getSolutions '{"id": "camera1"}
```

> ACG: camera.operation \| Returns: returnValue:Boolean; solutions:Object array: solutions \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="inputinfo"></a>
## `inputInfo`

`luna://com.webos.service.camera2/inputInfo`

Indicates the details of user input on the screen.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/inputInfo '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="open"></a>
## `open`

`luna://com.webos.service.camera2/open`

Establishes a connection between a camera and the webOS device. Returns the device handle for this connection instance.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Indicates the unique identifier of the camera obtained using the getCameraList() API. |
| `mode` | String (optional) Indicates whether the calling app can update the camera settings. Note: If no mode is selected, then the first call to open the camera gets primary access, and others are given secondary access. If there are multiple calls with the mode set as primary, then only the first call gets primary access. Possible values are: primary: Calling app can update the camera settings. secondary |
| `appId` | String (optional) ID of the application Note: App must have permission to open the camera. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/open '{"id":"camera1"}
```

> ACG: camera.operation \| Returns: returnValue:Boolean; handle:Number \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="picture"></a>
## `picture`

`luna://com.webos.service.camera2/picture`

Indicates the image size and image format.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/picture '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="removemediafile"></a>
## `removeMediaFile` ⚠️ DANGEROUS

`luna://com.webos.service.camera2/removeMediaFile`

Method on com.webos.service.camera2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/removeMediaFile '{}'
```

> ACG groups: private, camera.operation, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setformat"></a>
## `setFormat`

`luna://com.webos.service.camera2/setFormat`

Sets the size and format of the preview stream. This includes the height and width of the frame and the format in which data is to be written to the shared buffer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the camera handle obtained using the open() API. |
| `params` | Object: camera_format (required) Indicates the size and format of the preview stream. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/setFormat '{ "handle":9383, "params":{ "width":640, "height":480, "format":"JPEG", "fps":30 } }
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="setpermission"></a>
## `setPermission`

`luna://com.webos.service.camera2/setPermission`

Setter on com.webos.service.camera2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/setPermission '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.camera2/setProperties`

Sets the properties of the connected camera device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |
| `params` | Object: camera_properties (required) Indicates an object containing properties of the camera. Note: Even though the API succeeds when an empty params object is provided, we recommend that at least one value must be included. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/setProperties '{ "handle": 9383, "params": { "contrast": 100 } }
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="setsolutions"></a>
## `setSolutions`

`luna://com.webos.service.camera2/setSolutions`

Enables and disables camera solutions.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (optional) Indicates the handle for the device. It is obtained using the open() API. Note : Either one of "handle" or "id" must be provided. |
| `id` | String (optional) Indicates the camera id for the device. It is obtained using the getCameraList() API. Note : Either one of "handle" or "id" must be provided. |
| `solutions` | Object array: solutions (required) Specifies the current status of the supported camera solutions. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/setSolutions '{ "id": "camera1", "solutions": [ { "name": "AutoContrast", "params": { "enable": true } }, { "name": "FaceDetection", "params": { "enable": true } } ] }
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="setwindow"></a>
## `setWindow`

`luna://com.webos.service.camera2/setWindow`

Sets the window's position and size, display ID, and overlay/mirror options.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |
| `params` | Object: window_params (required) Defines a window's position, size, display ID, and overlay/mirror options. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/setWindow '{ "handle": 189, "params": { "x": 960, "y": 0, "w": 960, "h": 540, "mirror": false, "overlay": false, "displayId": 0 } }
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="solution_params"></a>
## `solution_params`

`luna://com.webos.service.camera2/solution_params`

Detailed information of a specific solution.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/solution_params '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="solutions"></a>
## `solutions`

`luna://com.webos.service.camera2/solutions`

Information of all supported camera solutions.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/solutions '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="startcamera"></a>
## `startCamera`

`luna://com.webos.service.camera2/startCamera`

Starts camera and turns on streaming of captured image frames into the shared memory (SystemV or POSIX). The method returns a key or an FD for accessing the shared memory, which is required for applications to access data from the shared memory. Notes: Use this method if the application needs only to access image frame data kept in the shared memory. In order to set the image resolution and format of the image frame, use the setFormat() method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | String (required) Indicates the handle for the device obtained using the open() API. |
| `params` | Object: camera_memory_source (required) Defines the type and source of memory. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/startCamera '{"handle": 5699}
```

> ACG: camera.operation \| Returns: returnValue:Boolean; key:Number \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="startcapture"></a>
## `startCapture`

`luna://com.webos.service.camera2/startCapture`

Starts capturing images using the camera. The captured images are stored as separate files at the location given by the "path" parameter. The default file name is of the format PictureDDMMYYYY-HHMMSS, where DDMMYYYY-HHMMSS is current date and time. Example: Picture11022019-204128.jpeg

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |
| `params` | Object: camera_capture_format (required) Indicates the size and format of the images to be captured. |
| `path` | String (optional) Indicates the location where the captured images are to be saved. Note: By default, captured images are saved in the /tmp/ folder. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/startCapture '{ "handle": 9383, "params": { "width": 640, "height": 480, "format": "JPEG", "mode":"MODE_BURST", "nimage":2 } }
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="startpreview"></a>
## `startPreview`

`luna://com.webos.service.camera2/startPreview`

Turns on camera streaming of captured image frames into the shared memory (SystemV or POSIX) and shows preview on the specified surface. The method returns a key or an fd for accessing the shared memory for applications to utilize. Notes: Use this API if the application needs to render image frames on the specified surface. While the camera is previewing, the application can access the shared memory for purposes except for preview. In order to set the image resolution and format of the image frame, use the setFormat() method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |
| `windowId` | String (optional) Indicates windowId associated with the surface. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/startPreview '{ "handle": 189, "windowId": "_Window_Id_1" }
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="stopcamera"></a>
## `stopCamera`

`luna://com.webos.service.camera2/stopCamera`

Stops camera and turns off streaming into the shared memory. Note: Applications that called startCamera() should call this method to stop streaming.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/stopCamera '{"handle": 5699}
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="stopcapture"></a>
## `stopCapture`

`luna://com.webos.service.camera2/stopCapture`

Stops camera from capturing images in the continuous mode. Continuous mode captures frames in succession till the stopCapture() method is called.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/stopCapture '{"handle":9383}
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="stoppreview"></a>
## `stopPreview`

`luna://com.webos.service.camera2/stopPreview`

Turns off camera streaming and finishes showing the preview on the surface. Note: The applications should call this method to stop streaming and preview when the applications called startPreview().

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `handle` | Number (required) Indicates the handle for the device obtained using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/stopPreview '{"handle":9383}
```

> ACG: camera.operation \| Returns: returnValue:Boolean \| Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="test"></a>
## `test`

`luna://com.webos.service.camera2/test`

Method on com.webos.service.camera2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/test '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="video"></a>
## `video`

`luna://com.webos.service.camera2/video`

Indicates the video size and the video format.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/video '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)

<a id="window_params"></a>
## `window_params`

`luna://com.webos.service.camera2/window_params`

Defines a window's position, size, display ID, and overlay/mirror options. Note: At least one property must be mandatory.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.camera2/window_params '{}'
```

> Service: Provides an interface to capture and stream images from a camera that is connected to a webOS device. Note: Currently, only V4L2 USB cameras are supported. It provides the following features: Live Cam \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-camera2/)
