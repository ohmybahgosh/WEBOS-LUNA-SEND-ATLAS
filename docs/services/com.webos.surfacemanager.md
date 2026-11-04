# `com.webos.surfacemanager`

38 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`alertChoice`](#alertchoice) | private |  | ui | Method on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`captureCompositorOutput`](#capturecompositoroutput) | public |  | display | Takes a screenshot of the content that the compositor generates. The content can be either a frame that contains the graphics composition re |
| [`changeMultiViewLayout`](#changemultiviewlayout) | private |  | ui | Method on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`clearRecentsList`](#clearrecentslist) | private |  | ui | Method on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`closeAssistiveMenu`](#closeassistivemenu) | private |  | ui | Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented). |
| [`closeByAppId`](#closebyappid) | public |  | display | Close an application's surface with given appId. In most cases, closing the surface leads the application to quit. But with this method, the |
| [`closeLRUSurface`](#closelrusurface) | private |  | ui | Method on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`createAssistiveMenu`](#createassistivemenu) | private |  | ui | Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented). |
| [`foregroundAppInfo`](#foregroundappinfo) | unknown |  | display | Provides information about a surface that is shown in the foreground. |
| [`getAlertViewState`](#getalertviewstate) | private |  | ui | Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented). |
| [`getAppMirroring`](#getappmirroring) | public | yes | display | Gets the status of the app mirroring. |
| [`getCurrentState`](#getcurrentstate) | private |  | ui | Returns surface manager currentState (home-chooser polls it for readiness) |
| [`getFocusedWindowInfo`](#getfocusedwindowinfo) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getForegroundAppInfo`](#getforegroundappinfo) | public | yes | display | Provides the list of applications that are currently visible in the foreground. Note: This is a private method that can be used by SAM only. |
| [`getForegroundAppState`](#getforegroundappstate) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getForegroundVideoWindow`](#getforegroundvideowindow) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getForegroundWindowInfo`](#getforegroundwindowinfo) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getLastInputType`](#getlastinputtype) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getMultiViewLayoutAnimationState`](#getmultiviewlayoutanimationstate) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getOverlayPlayVideoState`](#getoverlayplayvideostate) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getRecentsAppList`](#getrecentsapplist) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getScreenMode`](#getscreenmode) | private |  | ui | Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented). |
| [`getScreenVisible`](#getscreenvisible) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getToastViewState`](#gettoastviewstate) | private |  | notifications | Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented). |
| [`getWindowGroupInfo`](#getwindowgroupinfo) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`getZoomStatus`](#getzoomstatus) | private |  | ui | Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`mirroringInfo`](#mirroringinfo) | unknown |  | display | Indicates mirroring status of each display. |
| [`setAppMirroring`](#setappmirroring) | public |  | display | Starts or stops app mirroring for a given display pair. |
| [`setMultiViewLayout`](#setmultiviewlayout) | private |  | ui | Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`setPinOverlayView`](#setpinoverlayview) | private |  | ui | Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`setScreenMode`](#setscreenmode) | private |  | ui | Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented). |
| [`setScreenVisible`](#setscreenvisible) | private |  | ui | Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`setZoom`](#setzoom) | private |  | ui | Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`showIndicator`](#showindicator) | private |  | ui | Method on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`showInputPicker`](#showinputpicker) | private |  | ui | Shows the input picker |
| [`showQuickSettings`](#showquicksettings) | private |  | ui | Method on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`showSpinner`](#showspinner) | private |  | ui | Method on com.webos.surfacemanager (introspected on-device; parameters undocumented). |
| [`showUserAgreement`](#showuseragreement) | private |  | ui | Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented). |

<a id="alertchoice"></a>
## `alertChoice`

`luna://com.webos.surfacemanager/alertChoice`

Method on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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

<a id="changemultiviewlayout"></a>
## `changeMultiViewLayout`

`luna://com.webos.surfacemanager/changeMultiViewLayout`

Method on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/changeMultiViewLayout '{}'
```

> ACG groups: surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearrecentslist"></a>
## `clearRecentsList`

`luna://com.webos.surfacemanager/clearRecentsList`

Method on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/clearRecentsList '{}'
```

> ACG groups: surfaces.control, ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeassistivemenu"></a>
## `closeAssistiveMenu`

`luna://com.webos.surfacemanager/closeAssistiveMenu`

Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

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

```sh
luna-send -n 1 luna://com.webos.surfacemanager/closeByAppId '{"id":"com.webos.app.test"}
```

> ACG: surfacemanager.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="closelrusurface"></a>
## `closeLRUSurface`

`luna://com.webos.surfacemanager/closeLRUSurface`

Method on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/closeLRUSurface '{}'
```

> ACG groups: surfaces.control, ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createassistivemenu"></a>
## `createAssistiveMenu`

`luna://com.webos.surfacemanager/createAssistiveMenu`

Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

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

Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

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

<a id="getfocusedwindowinfo"></a>
## `getFocusedWindowInfo`

`luna://com.webos.surfacemanager/getFocusedWindowInfo`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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

```sh
luna-send -n 1 luna://com.webos.surfacemanager/getForegroundAppInfo '{}
```

> ACG: surfacemanager.query \| Returns: foregroundAppInfo:Object array: foregroundAppInfo; returnValue:Boolean; subscribed:Boolean; reason:String; mode:String; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="getforegroundappstate"></a>
## `getForegroundAppState`

`luna://com.webos.surfacemanager/getForegroundAppState`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getForegroundAppState '{}'
```

> ACG groups: surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundvideowindow"></a>
## `getForegroundVideoWindow`

`luna://com.webos.surfacemanager/getForegroundVideoWindow`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getForegroundVideoWindow '{}'
```

> ACG groups: surfaces.status, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundwindowinfo"></a>
## `getForegroundWindowInfo`

`luna://com.webos.surfacemanager/getForegroundWindowInfo`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getForegroundWindowInfo '{}'
```

> ACG groups: surfaces.status, private, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastinputtype"></a>
## `getLastInputType`

`luna://com.webos.surfacemanager/getLastInputType`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getLastInputType '{}'
```

> ACG groups: surfaces.status, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewlayoutanimationstate"></a>
## `getMultiViewLayoutAnimationState`

`luna://com.webos.surfacemanager/getMultiViewLayoutAnimationState`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getMultiViewLayoutAnimationState '{}'
```

> ACG groups: surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoverlayplayvideostate"></a>
## `getOverlayPlayVideoState`

`luna://com.webos.surfacemanager/getOverlayPlayVideoState`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getOverlayPlayVideoState '{}'
```

> ACG groups: surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecentsapplist"></a>
## `getRecentsAppList`

`luna://com.webos.surfacemanager/getRecentsAppList`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getRecentsAppList '{}'
```

> ACG groups: surfaces.status, ux.control, private, all, launcher.status, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getscreenmode"></a>
## `getScreenMode`

`luna://com.webos.surfacemanager/getScreenMode`

Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getScreenMode '{}'
```

> ACG groups: launcher.status, private, surfaces.status. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getscreenvisible"></a>
## `getScreenVisible`

`luna://com.webos.surfacemanager/getScreenVisible`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getScreenVisible '{}'
```

> ACG groups: private, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettoastviewstate"></a>
## `getToastViewState`

`luna://com.webos.surfacemanager/getToastViewState`

Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getToastViewState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwindowgroupinfo"></a>
## `getWindowGroupInfo`

`luna://com.webos.surfacemanager/getWindowGroupInfo`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/getWindowGroupInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getzoomstatus"></a>
## `getZoomStatus`

`luna://com.webos.surfacemanager/getZoomStatus`

Getter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setAppMirroring '{ "mirror":true, "from":0, "to":1 }
```

> ACG: surfacemanager.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Handles the UX, animations of windows. It manages all system and application input handling.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-surfacemanager/)

<a id="setmultiviewlayout"></a>
## `setMultiViewLayout`

`luna://com.webos.surfacemanager/setMultiViewLayout`

Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setMultiViewLayout '{}'
```

> ACG groups: surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpinoverlayview"></a>
## `setPinOverlayView`

`luna://com.webos.surfacemanager/setPinOverlayView`

Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setPinOverlayView '{}'
```

> ACG groups: surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setscreenmode"></a>
## `setScreenMode`

`luna://com.webos.surfacemanager/setScreenMode`

Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setScreenMode '{}'
```

> ACG groups: launcher.control, private, surfaces.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setscreenvisible"></a>
## `setScreenVisible`

`luna://com.webos.surfacemanager/setScreenVisible`

Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setScreenVisible '{}'
```

> ACG groups: surfaces.control, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setzoom"></a>
## `setZoom`

`luna://com.webos.surfacemanager/setZoom`

Setter on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/setZoom '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showindicator"></a>
## `showIndicator`

`luna://com.webos.surfacemanager/showIndicator`

Method on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.surfacemanager/showInputPicker '{}'
```

> Listed as public in bscpylgtv (SHOW_INPUT_PICKER) and aiowebostv lists it under LUNA_ endpoints (LUNA_SHOW_INPUT_PICKER), homebridge-lgwebos-tv calls it as luna://. Behaviour differs by firmware.

Sources: [1](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/HEAD/src/constants.js), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="showquicksettings"></a>
## `showQuickSettings`

`luna://com.webos.surfacemanager/showQuickSettings`

Method on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/showQuickSettings '{}'
```

> ACG groups: ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showspinner"></a>
## `showSpinner`

`luna://com.webos.surfacemanager/showSpinner`

Method on com.webos.surfacemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/showSpinner '{}'
```

> ACG groups: ux.control, private, launcher.control, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showuseragreement"></a>
## `showUserAgreement`

`luna://com.webos.surfacemanager/showUserAgreement`

Method on com.webos.surfacemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager/showUserAgreement '{}'
```

> ACG groups: launcher.status. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
