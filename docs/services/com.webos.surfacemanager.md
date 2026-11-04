# `com.webos.surfacemanager`

9 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`captureCompositorOutput`](#capturecompositoroutput) | public |  | display | Takes a screenshot of the content that the compositor generates. The content can be either a frame that contains the graphics composition re |
| [`closeByAppId`](#closebyappid) | public |  | display | Close an application's surface with given appId. In most cases, closing the surface leads the application to quit. But with this method, the |
| [`foregroundAppInfo`](#foregroundappinfo) | unknown |  | display | Provides information about a surface that is shown in the foreground. |
| [`getAppMirroring`](#getappmirroring) | public | yes | display | Gets the status of the app mirroring. |
| [`getCurrentState`](#getcurrentstate) | private |  | ui | Returns surface manager currentState (home-chooser polls it for readiness) |
| [`getForegroundAppInfo`](#getforegroundappinfo) | public | yes | display | Provides the list of applications that are currently visible in the foreground. Note: This is a private method that can be used by SAM only. |
| [`mirroringInfo`](#mirroringinfo) | unknown |  | display | Indicates mirroring status of each display. |
| [`setAppMirroring`](#setappmirroring) | public |  | display | Starts or stops app mirroring for a given display pair. |
| [`showInputPicker`](#showinputpicker) | private |  | ui | Shows the input picker |

<a id="capturecompositoroutput"></a>
## `captureCompositorOutput`

`luna://com.webos.surfacemanager/captureCompositorOutput`

Takes a screenshot of the content that the compositor generates. The content can be either a frame that contains the graphics composition result or an application surface that is being composited. Note: This method can be used when a privileged webOS component wants to take a screenshot for its own purpose. It should not be allowed for public use since the screenshot may contain security-sensitive information. As this method is provided by LSM (Luna Surface Manager), the content is limited to what LSM is able to composite. It may not be possible to take video area with this method due to this technical limitation. Scaling is not supported.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 4+  
- **Confidence:** documented, community

| Param | Type / notes |
|---|---|
| `output` | String (required) Indicates the absolute path of the output image file. |
| `appId` | String (optional) Indicates the id of the application. Note: If not specified, then the entire composited frame will be captured. |
| `format` | String (optional) Indicates the output image format. Possible values are: BMP: bitmap (default) JPG: JPEG compressed PNG: PNG compressed |
| `displayId` | Number (optional) Indicates the id of display to be captured. |

```sh
luna-send -n 1 luna://com.webos.surfacemanager/captureCompositorOutput '{ "output":"/tmp/test.bmp", "appId":"com.webos.app.test", "format":"BMP" }'
```

> ACG: surfacemanager.devutility \| Returns: output:String; resolution:String; format:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/), [2](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [3](https://github.com/diaahussein/WebOS_LG_TV_Scripts/blob/HEAD/README.md)

<a id="closebyappid"></a>
## `closeByAppId`

`luna://com.webos.surfacemanager/closeByAppId`

Close an application's surface with given appId. In most cases, closing the surface leads the application to quit. But with this method, the compositor doesn't discard its surface item (a container of the surface). It is useful when the compositor wants to keep the application's context from the compositor side even when the application is not running anymore. A typical use case of this method is to reclaim the memory by Memory Manager.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Application ID |

```sh
luna-send -n 1 luna://com.webos.surfacemanager/closeByAppId '{"id":"com.webos.app.test"}
```

> ACG: surfacemanager.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="foregroundappinfo"></a>
## `foregroundAppInfo`

`luna://com.webos.surfacemanager/foregroundAppInfo`

Provides information about a surface that is shown in the foreground.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/foregroundAppInfo '{}'
```

> Service: Handles the UX, animations of windows. It manages all system and application input handling. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="getappmirroring"></a>
## `getAppMirroring`

`luna://com.webos.surfacemanager/getAppMirroring`

Gets the status of the app mirroring.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default: false |

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getAppMirroring '{}
```

> ACG: surfacemanager.query \| Returns: mirroringInfo:Object array: mirroringInfo; returnValue:Boolean \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="getcurrentstate"></a>
## `getCurrentState`

`luna://com.webos.surfacemanager/getCurrentState`

Returns surface manager currentState (home-chooser polls it for readiness)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.surfacemanager/getCurrentState '{}'
```

> Reply field read: currentState.

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/service/src/homekey.c)

<a id="getforegroundappinfo"></a>
## `getForegroundAppInfo`

`luna://com.webos.surfacemanager/getForegroundAppInfo`

Provides the list of applications that are currently visible in the foreground. Note: This is a private method that can be used by SAM only. For public use, refer to the com.webos.applicationManager/getForegroundAppInfo method.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default: false |

```sh
luna-send -n 1 luna://com.webos.surfacemanager/getForegroundAppInfo '{}
```

> ACG: surfacemanager.query \| Returns: foregroundAppInfo:Object array: foregroundAppInfo; returnValue:Boolean; subscribed:Boolean; reason:String; mode:String; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="mirroringinfo"></a>
## `mirroringInfo`

`luna://com.webos.surfacemanager/mirroringInfo`

Indicates mirroring status of each display.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/mirroringInfo '{}'
```

> Service: Handles the UX, animations of windows. It manages all system and application input handling. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="setappmirroring"></a>
## `setAppMirroring`

`luna://com.webos.surfacemanager/setAppMirroring`

Starts or stops app mirroring for a given display pair.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mirror` | Boolean (required) Indicates whether to mirror the app. Possible values are: true: Start mirroring false: Stop mirroring |
| `from` | Number (required) Indicates id of the display from which the app is mirrored. |
| `to` | Number (required) Indicates id of the display mirrored by the app. |

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setAppMirroring '{ "mirror":true, "from":0, "to":1 }
```

> ACG: surfacemanager.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="showinputpicker"></a>
## `showInputPicker`

`luna://com.webos.surfacemanager/showInputPicker`

Shows the input picker

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.surfacemanager/showInputPicker '{}'
```

> Listed as public in bscpylgtv (SHOW_INPUT_PICKER) and aiowebostv lists it under LUNA_ endpoints (LUNA_SHOW_INPUT_PICKER), homebridge-lgwebos-tv calls it as luna://. Behaviour differs by firmware.

Sources: [1](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/HEAD/src/constants.js), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)
