# `com.webos.surfacemanager`

Surface manager (window compositor): reports foreground app and window/surface info, manages surface lifecycle and multiview layout, captures compositor output and assistive menu.

38 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`alertChoice`](#alertchoice) | private |  | ui | inferred | Handles the alert choice. |
| [`captureCompositorOutput`](#capturecompositoroutput) | public |  | display | documented | Takes a screenshot of the content that the compositor generates. The content can be either a frame that contains the graphics composition re |
| [`changeMultiViewLayout`](#changemultiviewlayout) | private |  | ui | inferred | Changes the multi view layout. |
| [`clearRecentsList`](#clearrecentslist) | private |  | ui | inferred | Clears the recents list. |
| [`closeAssistiveMenu`](#closeassistivemenu) | private |  | ui | inferred | Closes the assistive menu. |
| [`closeByAppId`](#closebyappid) | public |  | display | documented | Close an application's surface with given appId. In most cases, closing the surface leads the application to quit. But with this method, the |
| [`closeLRUSurface`](#closelrusurface) | private |  | ui | inferred | Closes the LRU surface. |
| [`createAssistiveMenu`](#createassistivemenu) | private |  | ui | inferred | Creates the assistive menu. |
| [`foregroundAppInfo`](#foregroundappinfo) | unknown |  | display | documented | Provides information about a surface that is shown in the foreground. |
| [`getAlertViewState`](#getalertviewstate) | private |  | ui | inferred | Returns the alert view state. |
| [`getAppMirroring`](#getappmirroring) | public | yes | display | documented | Gets the status of the app mirroring. |
| [`getCurrentState`](#getcurrentstate) | private |  | ui | documented | Returns surface manager currentState (home-chooser polls it for readiness) |
| [`getFocusedWindowInfo`](#getfocusedwindowinfo) | private |  | ui | inferred | Returns the focused window info. |
| [`getForegroundAppInfo`](#getforegroundappinfo) | public | yes | display | documented | Provides the list of applications that are currently visible in the foreground. Note: This is a private method that can be used by SAM only. |
| [`getForegroundAppState`](#getforegroundappstate) | private |  | ui | inferred | Returns the foreground app state. |
| [`getForegroundVideoWindow`](#getforegroundvideowindow) | private |  | ui | inferred | Returns the foreground video window. |
| [`getForegroundWindowInfo`](#getforegroundwindowinfo) | private |  | ui | inferred | Returns the foreground window info. |
| [`getLastInputType`](#getlastinputtype) | private |  | ui | inferred | Returns the last input type. |
| [`getMultiViewLayoutAnimationState`](#getmultiviewlayoutanimationstate) | private |  | ui | inferred | Returns the multi view layout animation state. |
| [`getOverlayPlayVideoState`](#getoverlayplayvideostate) | private |  | ui | inferred | Returns the overlay play video state. |
| [`getRecentsAppList`](#getrecentsapplist) | private |  | ui | inferred | Returns the recents app list. |
| [`getScreenMode`](#getscreenmode) | private |  | ui | inferred | Returns the screen mode. |
| [`getScreenVisible`](#getscreenvisible) | private |  | ui | inferred | Returns the screen visible. |
| [`getToastViewState`](#gettoastviewstate) | private |  | notifications | inferred | Returns the toast view state. |
| [`getWindowGroupInfo`](#getwindowgroupinfo) | private |  | ui | inferred | Returns the window group info. |
| [`getZoomStatus`](#getzoomstatus) | private |  | ui | inferred | Returns the zoom status. |
| [`mirroringInfo`](#mirroringinfo) | unknown |  | display | documented | Indicates mirroring status of each display. |
| [`setAppMirroring`](#setappmirroring) | public |  | display | documented | Starts or stops app mirroring for a given display pair. |
| [`setMultiViewLayout`](#setmultiviewlayout) | private |  | ui | inferred | Sets the multi view layout. |
| [`setPinOverlayView`](#setpinoverlayview) | private |  | ui | inferred | Sets the pin overlay view. |
| [`setScreenMode`](#setscreenmode) | private |  | ui | inferred | Sets the screen mode. |
| [`setScreenVisible`](#setscreenvisible) | private |  | ui | inferred | Sets the screen visible. |
| [`setZoom`](#setzoom) | private |  | ui | inferred | Sets the zoom. |
| [`showIndicator`](#showindicator) | private |  | ui | inferred | Shows the indicator. |
| [`showInputPicker`](#showinputpicker) | private |  | ui | documented | Shows the input picker |
| [`showQuickSettings`](#showquicksettings) | private |  | ui | inferred | Shows the quick settings. |
| [`showSpinner`](#showspinner) | private |  | ui | inferred | Shows the spinner. |
| [`showUserAgreement`](#showuseragreement) | private |  | ui | inferred | Shows the user agreement. |

<a id="alertchoice"></a>
## `alertChoice`

`luna://com.webos.surfacemanager/alertChoice`

Handles the alert choice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/alertChoice '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="capturecompositoroutput"></a>
## `captureCompositorOutput`

`luna://com.webos.surfacemanager/captureCompositorOutput`

Takes a screenshot of the content that the compositor generates. The content can be either a frame that contains the graphics composition result or an application surface that is being composited. Note: This method can be used when a privileged webOS component wants to take a screenshot for its own purpose. It should not be allowed for public use since the screenshot may contain security-sensitive information. As this method is provided by LSM (Luna Surface Manager), the content is limited to what LSM is able to composite. It may not be possible to take video area with this method due to this technical limitation. Scaling is not supported.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 4+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `output` | String (required) Indicates the absolute path of the output image file. |
| `appId` | String (optional) Indicates the id of the application. Note: If not specified, then the entire composited frame will be captured. |
| `format` | String (optional) Indicates the output image format. Possible values are: BMP: bitmap (default) JPG: JPEG compressed PNG: PNG compressed |
| `displayId` | Number (optional) Indicates the id of display to be captured. |

**Returns:**

| Field | Type / notes |
|---|---|
| `output` | String (optional) Indicates the absolute path of output image file. |
| `resolution` | String (optional) Indicates the resolution of the output image in the form of <width>x<height>. Example: 1920x1080 |
| `format` | String (optional) Indicates the output image format. Possible values are: - BMP: bitmap (default) - JPG: JPEG compressed - PNG: PNG compressed |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |

```sh
luna-send -n 1 luna://com.webos.surfacemanager/captureCompositorOutput '{ "output":"/tmp/test.bmp", "appId":"com.webos.app.test", "format":"BMP" }'
```

> ACG: surfacemanager.devutility \| Returns: output:String; resolution:String; format:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/), [2](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [3](https://github.com/diaahussein/WebOS_LG_TV_Scripts/blob/HEAD/README.md)

<a id="changemultiviewlayout"></a>
## `changeMultiViewLayout`

`luna://com.webos.surfacemanager/changeMultiViewLayout`

Changes the multi view layout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/changeMultiViewLayout '{}'
```

> ACG groups: surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearrecentslist"></a>
## `clearRecentsList`

`luna://com.webos.surfacemanager/clearRecentsList`

Clears the recents list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/clearRecentsList '{}'
```

> ACG groups: surfaces.control, ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeassistivemenu"></a>
## `closeAssistiveMenu`

`luna://com.webos.surfacemanager/closeAssistiveMenu`

Closes the assistive menu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/closeAssistiveMenu '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 luna://com.webos.surfacemanager/closeByAppId '{"id":"com.webos.app.test"}
```

> ACG: surfacemanager.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="closelrusurface"></a>
## `closeLRUSurface`

`luna://com.webos.surfacemanager/closeLRUSurface`

Closes the LRU surface.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/closeLRUSurface '{}'
```

> ACG groups: surfaces.control, ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createassistivemenu"></a>
## `createAssistiveMenu`

`luna://com.webos.surfacemanager/createAssistiveMenu`

Creates the assistive menu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/createAssistiveMenu '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

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

<a id="getalertviewstate"></a>
## `getAlertViewState`

`luna://com.webos.surfacemanager/getAlertViewState`

Returns the alert view state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getAlertViewState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `mirroringInfo` | Object array: mirroringInfo (required) Indicates the mirroring status of each display. |

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
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.surfacemanager/getCurrentState '{}'
```

> Reply field read: currentState.

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/service/src/homekey.c)

<a id="getfocusedwindowinfo"></a>
## `getFocusedWindowInfo`

`luna://com.webos.surfacemanager/getFocusedWindowInfo`

Returns the focused window info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getFocusedWindowInfo '{}'
```

> ACG groups: surfaces.status, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `foregroundAppInfo` | Object array: foregroundAppInfo (optional) Information about a surface that is shown in the foreground. |
| `reason` | String (optional) Indicates if it allows full-screen to become empty. Possible values are: - forceMinimize: Allows full-screen become empty - empty: (default) |
| `mode` | String (optional) Indicates if full-screen view mode is multiview. Possible values are: - multiview: Multiview mode - normal: (default) Normal mode |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |

```sh
luna-send -n 1 luna://com.webos.surfacemanager/getForegroundAppInfo '{}
```

> ACG: surfacemanager.query \| Returns: foregroundAppInfo:Object array: foregroundAppInfo; returnValue:Boolean; subscribed:Boolean; reason:String; mode:String; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="getforegroundappstate"></a>
## `getForegroundAppState`

`luna://com.webos.surfacemanager/getForegroundAppState`

Returns the foreground app state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getForegroundAppState '{}'
```

> ACG groups: surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundvideowindow"></a>
## `getForegroundVideoWindow`

`luna://com.webos.surfacemanager/getForegroundVideoWindow`

Returns the foreground video window.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getForegroundVideoWindow '{}'
```

> ACG groups: surfaces.status, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundwindowinfo"></a>
## `getForegroundWindowInfo`

`luna://com.webos.surfacemanager/getForegroundWindowInfo`

Returns the foreground window info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getForegroundWindowInfo '{}'
```

> ACG groups: surfaces.status, private, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastinputtype"></a>
## `getLastInputType`

`luna://com.webos.surfacemanager/getLastInputType`

Returns the last input type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getLastInputType '{}'
```

> ACG groups: surfaces.status, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewlayoutanimationstate"></a>
## `getMultiViewLayoutAnimationState`

`luna://com.webos.surfacemanager/getMultiViewLayoutAnimationState`

Returns the multi view layout animation state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getMultiViewLayoutAnimationState '{}'
```

> ACG groups: surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoverlayplayvideostate"></a>
## `getOverlayPlayVideoState`

`luna://com.webos.surfacemanager/getOverlayPlayVideoState`

Returns the overlay play video state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getOverlayPlayVideoState '{}'
```

> ACG groups: surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecentsapplist"></a>
## `getRecentsAppList`

`luna://com.webos.surfacemanager/getRecentsAppList`

Returns the recents app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getRecentsAppList '{}'
```

> ACG groups: surfaces.status, ux.control, private, all, launcher.status, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getscreenmode"></a>
## `getScreenMode`

`luna://com.webos.surfacemanager/getScreenMode`

Returns the screen mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getScreenMode '{}'
```

> ACG groups: launcher.status, private, surfaces.status. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getscreenvisible"></a>
## `getScreenVisible`

`luna://com.webos.surfacemanager/getScreenVisible`

Returns the screen visible.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getScreenVisible '{}'
```

> ACG groups: private, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettoastviewstate"></a>
## `getToastViewState`

`luna://com.webos.surfacemanager/getToastViewState`

Returns the toast view state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getToastViewState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwindowgroupinfo"></a>
## `getWindowGroupInfo`

`luna://com.webos.surfacemanager/getWindowGroupInfo`

Returns the window group info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getWindowGroupInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getzoomstatus"></a>
## `getZoomStatus`

`luna://com.webos.surfacemanager/getZoomStatus`

Returns the zoom status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getZoomStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setAppMirroring '{ "mirror":true, "from":0, "to":1 }
```

> ACG: surfacemanager.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="setmultiviewlayout"></a>
## `setMultiViewLayout`

`luna://com.webos.surfacemanager/setMultiViewLayout`

Sets the multi view layout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setMultiViewLayout '{}'
```

> ACG groups: surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpinoverlayview"></a>
## `setPinOverlayView`

`luna://com.webos.surfacemanager/setPinOverlayView`

Sets the pin overlay view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setPinOverlayView '{}'
```

> ACG groups: surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setscreenmode"></a>
## `setScreenMode`

`luna://com.webos.surfacemanager/setScreenMode`

Sets the screen mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setScreenMode '{}'
```

> ACG groups: launcher.control, private, surfaces.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setscreenvisible"></a>
## `setScreenVisible`

`luna://com.webos.surfacemanager/setScreenVisible`

Sets the screen visible.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setScreenVisible '{}'
```

> ACG groups: surfaces.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setzoom"></a>
## `setZoom`

`luna://com.webos.surfacemanager/setZoom`

Sets the zoom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setZoom '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showindicator"></a>
## `showIndicator`

`luna://com.webos.surfacemanager/showIndicator`

Shows the indicator.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/showIndicator '{}'
```

> ACG groups: launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showinputpicker"></a>
## `showInputPicker`

`luna://com.webos.surfacemanager/showInputPicker`

Shows the input picker

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.surfacemanager/showInputPicker '{}'
```

> Listed as public in bscpylgtv (SHOW_INPUT_PICKER) and aiowebostv lists it under LUNA_ endpoints (LUNA_SHOW_INPUT_PICKER), homebridge-lgwebos-tv calls it as luna://. Behaviour differs by firmware.

Sources: [1](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/HEAD/src/constants.js), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="showquicksettings"></a>
## `showQuickSettings`

`luna://com.webos.surfacemanager/showQuickSettings`

Shows the quick settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/showQuickSettings '{}'
```

> ACG groups: ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showspinner"></a>
## `showSpinner`

`luna://com.webos.surfacemanager/showSpinner`

Shows the spinner.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/showSpinner '{}'
```

> ACG groups: ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showuseragreement"></a>
## `showUserAgreement`

`luna://com.webos.surfacemanager/showUserAgreement`

Shows the user agreement.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/showUserAgreement '{}'
```

> ACG groups: launcher.status. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
