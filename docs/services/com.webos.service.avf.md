# `com.webos.service.avf`

Appears to drive the 'My Zoom'/AVF video feature and picture-in-picture: zoom capture and playback, PIP show/hide, freeze, and object/coordinate tracking. _(inferred from the service's methods)_

41 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`activateMyZoom`](#activatemyzoom) | private |  | tv-broadcast | inferred | Activates the my zoom. |
| [`cancelMyZoomRecording`](#cancelmyzoomrecording) | private |  | tv-broadcast | inferred | Cancels the my zoom recording. |
| [`closePIP`](#closepip) | private |  | tv-broadcast | inferred | Closes the PIP. |
| [`commandZoomDebug`](#commandzoomdebug) | private |  | tv-broadcast | inferred | Handles the command zoom debug. |
| [`debug/setDebugCmd`](#debug_setdebugcmd) | private |  | tv-broadcast | inferred | Sets the debug cmd (debug) |
| [`freeze`](#freeze) | private |  | tv-broadcast | inferred | Handles the freeze. |
| [`getMemKilledApp`](#getmemkilledapp) | private |  | tv-broadcast | inferred | Returns the mem killed app. |
| [`getMyZoomFileIndex`](#getmyzoomfileindex) | private |  | tv-broadcast | inferred | Returns the my zoom file index. |
| [`getMyZoomNewFile`](#getmyzoomnewfile) | private |  | tv-broadcast | inferred | Returns the my zoom new file. |
| [`getMyZoomPlayParam`](#getmyzoomplayparam) | private |  | tv-broadcast | inferred | Returns the my zoom play param. |
| [`getMyZoomVideoStatus`](#getmyzoomvideostatus) | private |  | tv-broadcast | inferred | Returns the my zoom video status. |
| [`getObjectInfo`](#getobjectinfo) | private |  | tv-broadcast | inferred | Returns the object info. |
| [`getUmaCoord`](#getumacoord) | private |  | tv-broadcast | inferred | Returns the uma coord. |
| [`getZoomStatus`](#getzoomstatus) | private |  | tv-broadcast | inferred | Returns the zoom status. |
| [`hidePIP`](#hidepip) | private |  | tv-broadcast | inferred | Hides the PIP. |
| [`runDebug`](#rundebug) | private |  | tv-broadcast | inferred | Runs the debug. |
| [`setAlgorithmDebug`](#setalgorithmdebug) | private |  | tv-broadcast | inferred | Sets the algorithm debug. |
| [`setCursorPos`](#setcursorpos) | private |  | tv-broadcast | inferred | Sets the cursor pos. |
| [`setDvrModePIP`](#setdvrmodepip) | private |  | tv-broadcast | inferred | Sets the DVR mode PIP. |
| [`setInputSrcPIP`](#setinputsrcpip) | private |  | tv-broadcast | inferred | Sets the input src PIP. |
| [`setMainScreen`](#setmainscreen) | private |  | tv-broadcast | inferred | Sets the main screen. |
| [`setMyZoomFlag`](#setmyzoomflag) | private |  | tv-broadcast | inferred | Sets the my zoom flag. |
| [`setMyZoomRecFlag`](#setmyzoomrecflag) | private |  | tv-broadcast | inferred | Sets the my zoom rec flag. |
| [`setMyZoomRecordParam`](#setmyzoomrecordparam) | private |  | tv-broadcast | inferred | Sets the my zoom record param. |
| [`setMyZoomRecTrickCmd`](#setmyzoomrectrickcmd) | private |  | tv-broadcast | inferred | Sets the my zoom rec trick cmd. |
| [`setMyZoomRemovedUri`](#setmyzoomremoveduri) | private |  | tv-broadcast | inferred | Sets the my zoom removed URI. ⚠️ |
| [`setMyZoomTrickCmd`](#setmyzoomtrickcmd) | private |  | tv-broadcast | inferred | Sets the my zoom trick cmd. |
| [`setMyZoomUsbFlag`](#setmyzoomusbflag) | private |  | tv-broadcast | inferred | Sets the my zoom USB flag. |
| [`setMyZoomUsbLoad`](#setmyzoomusbload) | private |  | tv-broadcast | inferred | Sets the my zoom USB load. |
| [`setMyZoomUsbRealOffset`](#setmyzoomusbrealoffset) | private |  | tv-broadcast | inferred | Sets the my zoom USB real offset. |
| [`setMyZoomUsbSave`](#setmyzoomusbsave) | private |  | tv-broadcast | inferred | Sets the my zoom USB save. |
| [`setMyZoomUsbTrickCmd`](#setmyzoomusbtrickcmd) | private |  | tv-broadcast | inferred | Sets the my zoom USB trick cmd. |
| [`setMyZoomUsbUri`](#setmyzoomusburi) | private |  | tv-broadcast | inferred | Sets the my zoom USB URI. |
| [`setObjectInfo`](#setobjectinfo) | private |  | tv-broadcast | inferred | Sets the object info. |
| [`setPIP`](#setpip) | private |  | tv-broadcast | inferred | Sets the PIP. |
| [`showPIP`](#showpip) | private |  | tv-broadcast | inferred | Shows the PIP. |
| [`startMyZoomPlay`](#startmyzoomplay) | private |  | tv-broadcast | inferred | Starts the my zoom play. |
| [`startMyZoomRecording`](#startmyzoomrecording) | private |  | tv-broadcast | inferred | Starts the my zoom recording. |
| [`stopMyZoomPlay`](#stopmyzoomplay) | private |  | tv-broadcast | inferred | Stops the my zoom play. |
| [`stopMyZoomRecording`](#stopmyzoomrecording) | private |  | tv-broadcast | inferred | Stops the my zoom recording. |
| [`withdraw`](#withdraw) | private |  | tv-broadcast | inferred | Handles the withdraw. |

<a id="activatemyzoom"></a>
## `activateMyZoom`

`luna://com.webos.service.avf/activateMyZoom`

Activates the my zoom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/activateMyZoom '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="cancelmyzoomrecording"></a>
## `cancelMyZoomRecording`

`luna://com.webos.service.avf/cancelMyZoomRecording`

Cancels the my zoom recording.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/cancelMyZoomRecording '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="closepip"></a>
## `closePIP`

`luna://com.webos.service.avf/closePIP`

Closes the PIP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/closePIP '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="commandzoomdebug"></a>
## `commandZoomDebug`

`luna://com.webos.service.avf/commandZoomDebug`

Handles the command zoom debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/commandZoomDebug '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debug_setdebugcmd"></a>
## `debug/setDebugCmd`

`luna://com.webos.service.avf/debug/setDebugCmd`

Sets the debug cmd (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/debug/setDebugCmd '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="freeze"></a>
## `freeze`

`luna://com.webos.service.avf/freeze`

Handles the freeze.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/freeze '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmemkilledapp"></a>
## `getMemKilledApp`

`luna://com.webos.service.avf/getMemKilledApp`

Returns the mem killed app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getMemKilledApp '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmyzoomfileindex"></a>
## `getMyZoomFileIndex`

`luna://com.webos.service.avf/getMyZoomFileIndex`

Returns the my zoom file index.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getMyZoomFileIndex '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmyzoomnewfile"></a>
## `getMyZoomNewFile`

`luna://com.webos.service.avf/getMyZoomNewFile`

Returns the my zoom new file.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getMyZoomNewFile '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmyzoomplayparam"></a>
## `getMyZoomPlayParam`

`luna://com.webos.service.avf/getMyZoomPlayParam`

Returns the my zoom play param.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getMyZoomPlayParam '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmyzoomvideostatus"></a>
## `getMyZoomVideoStatus`

`luna://com.webos.service.avf/getMyZoomVideoStatus`

Returns the my zoom video status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getMyZoomVideoStatus '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getobjectinfo"></a>
## `getObjectInfo`

`luna://com.webos.service.avf/getObjectInfo`

Returns the object info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getObjectInfo '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getumacoord"></a>
## `getUmaCoord`

`luna://com.webos.service.avf/getUmaCoord`

Returns the uma coord.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getUmaCoord '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getzoomstatus"></a>
## `getZoomStatus`

`luna://com.webos.service.avf/getZoomStatus`

Returns the zoom status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/getZoomStatus '{}'
```

> ACG groups: avf.zoomInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hidepip"></a>
## `hidePIP`

`luna://com.webos.service.avf/hidePIP`

Hides the PIP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/hidePIP '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rundebug"></a>
## `runDebug`

`luna://com.webos.service.avf/runDebug`

Runs the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/runDebug '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalgorithmdebug"></a>
## `setAlgorithmDebug`

`luna://com.webos.service.avf/setAlgorithmDebug`

Sets the algorithm debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setAlgorithmDebug '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcursorpos"></a>
## `setCursorPos`

`luna://com.webos.service.avf/setCursorPos`

Sets the cursor pos.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setCursorPos '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdvrmodepip"></a>
## `setDvrModePIP`

`luna://com.webos.service.avf/setDvrModePIP`

Sets the DVR mode PIP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setDvrModePIP '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setinputsrcpip"></a>
## `setInputSrcPIP`

`luna://com.webos.service.avf/setInputSrcPIP`

Sets the input src PIP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setInputSrcPIP '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmainscreen"></a>
## `setMainScreen`

`luna://com.webos.service.avf/setMainScreen`

Sets the main screen.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMainScreen '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomflag"></a>
## `setMyZoomFlag`

`luna://com.webos.service.avf/setMyZoomFlag`

Sets the my zoom flag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomFlag '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomrecflag"></a>
## `setMyZoomRecFlag`

`luna://com.webos.service.avf/setMyZoomRecFlag`

Sets the my zoom rec flag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomRecFlag '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomrecordparam"></a>
## `setMyZoomRecordParam`

`luna://com.webos.service.avf/setMyZoomRecordParam`

Sets the my zoom record param.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomRecordParam '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomrectrickcmd"></a>
## `setMyZoomRecTrickCmd`

`luna://com.webos.service.avf/setMyZoomRecTrickCmd`

Sets the my zoom rec trick cmd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomRecTrickCmd '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomremoveduri"></a>
## `setMyZoomRemovedUri` ⚠️ DANGEROUS

`luna://com.webos.service.avf/setMyZoomRemovedUri`

Sets the my zoom removed URI.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomRemovedUri '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomtrickcmd"></a>
## `setMyZoomTrickCmd`

`luna://com.webos.service.avf/setMyZoomTrickCmd`

Sets the my zoom trick cmd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomTrickCmd '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomusbflag"></a>
## `setMyZoomUsbFlag`

`luna://com.webos.service.avf/setMyZoomUsbFlag`

Sets the my zoom USB flag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomUsbFlag '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomusbload"></a>
## `setMyZoomUsbLoad`

`luna://com.webos.service.avf/setMyZoomUsbLoad`

Sets the my zoom USB load.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomUsbLoad '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomusbrealoffset"></a>
## `setMyZoomUsbRealOffset`

`luna://com.webos.service.avf/setMyZoomUsbRealOffset`

Sets the my zoom USB real offset.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomUsbRealOffset '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomusbsave"></a>
## `setMyZoomUsbSave`

`luna://com.webos.service.avf/setMyZoomUsbSave`

Sets the my zoom USB save.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomUsbSave '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomusbtrickcmd"></a>
## `setMyZoomUsbTrickCmd`

`luna://com.webos.service.avf/setMyZoomUsbTrickCmd`

Sets the my zoom USB trick cmd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomUsbTrickCmd '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmyzoomusburi"></a>
## `setMyZoomUsbUri`

`luna://com.webos.service.avf/setMyZoomUsbUri`

Sets the my zoom USB URI.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setMyZoomUsbUri '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setobjectinfo"></a>
## `setObjectInfo`

`luna://com.webos.service.avf/setObjectInfo`

Sets the object info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setObjectInfo '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpip"></a>
## `setPIP`

`luna://com.webos.service.avf/setPIP`

Sets the PIP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/setPIP '{}'
```

> ACG groups: avf.control, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="showpip"></a>
## `showPIP`

`luna://com.webos.service.avf/showPIP`

Shows the PIP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/showPIP '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startmyzoomplay"></a>
## `startMyZoomPlay`

`luna://com.webos.service.avf/startMyZoomPlay`

Starts the my zoom play.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/startMyZoomPlay '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startmyzoomrecording"></a>
## `startMyZoomRecording`

`luna://com.webos.service.avf/startMyZoomRecording`

Starts the my zoom recording.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/startMyZoomRecording '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopmyzoomplay"></a>
## `stopMyZoomPlay`

`luna://com.webos.service.avf/stopMyZoomPlay`

Stops the my zoom play.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/stopMyZoomPlay '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopmyzoomrecording"></a>
## `stopMyZoomRecording`

`luna://com.webos.service.avf/stopMyZoomRecording`

Stops the my zoom recording.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/stopMyZoomRecording '{}'
```

> ACG groups: avf.enable, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="withdraw"></a>
## `withdraw`

`luna://com.webos.service.avf/withdraw`

Handles the withdraw.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.avf/withdraw '{}'
```

> ACG groups: configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
