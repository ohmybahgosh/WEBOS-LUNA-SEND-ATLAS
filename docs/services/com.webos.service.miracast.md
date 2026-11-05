# `com.webos.service.miracast`

Miracast (Wi-Fi Display) service: manages device discovery, pairing and connection, reports connection/media/P2P state and statistics, and handles UIBC and WiDi settings.

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | ssap |  | media | documented | Close Miracast session |
| [`debug`](#debug) | private |  | security | inferred | Handles the debug. |
| [`deletePairedDeviceList`](#deletepaireddevicelist) | private |  | security | inferred | Deletes the paired device list. ⚠️ |
| [`destroyListenModeNotification`](#destroylistenmodenotification) | private |  | notifications | inferred | Handles the destroy listen mode notification. |
| [`get3dMediaInfo`](#get3dmediainfo) | private |  | media | inferred | Returns the 3 d media info. |
| [`getBBDInfo`](#getbbdinfo) | private |  | security | inferred | Returns the BBD info. |
| [`getBlockedDeviceInfo`](#getblockeddeviceinfo) | private |  | security | inferred | Returns the blocked device info. |
| [`getConnectedDeviceInfo`](#getconnecteddeviceinfo) | private |  | security | inferred | Returns the connected device info. |
| [`getConnectionStatus`](#getconnectionstatus) | ssap |  | media | documented | Get Miracast connection status |
| [`getDeviceInfo`](#getdeviceinfo) | private |  | security | inferred | Returns the device info. |
| [`getMediaInfo`](#getmediainfo) | private |  | media | inferred | Returns the media info. |
| [`getMiracastStatistics`](#getmiracaststatistics) | private |  | security | inferred | Returns the miracast statistics. |
| [`getOverlayBlockedAppList`](#getoverlayblockedapplist) | private |  | security | inferred | Returns the overlay blocked app list. |
| [`getP2pState`](#getp2pstate) | ssap |  | media | documented | Get Miracast P2P state |
| [`getPerformanceStatistics`](#getperformancestatistics) | private |  | security | inferred | Returns the performance statistics. |
| [`getSourceProperty`](#getsourceproperty) | private |  | security | inferred | Returns the source property. |
| [`getState`](#getstate) | private |  | security | inferred | Returns the state. |
| [`getUACSettings`](#getuacsettings) | private |  | settings | inferred | Returns the UAC settings. |
| [`getWFDConnectionMode`](#getwfdconnectionmode) | private |  | security | inferred | Returns the WFD connection mode. |
| [`initProperty`](#initproperty) | private |  | security | inferred | Initializes the property. |
| [`launchFullApp`](#launchfullapp) | private |  | apps | inferred | Launches the full app. |
| [`launchOverlayApp`](#launchoverlayapp) | private |  | apps | inferred | Launches the overlay app. |
| [`notifyAppSettingChanged`](#notifyappsettingchanged) | private |  | security | inferred | Notifies of the app setting changed. |
| [`notifySettingMenu`](#notifysettingmenu) | private |  | security | inferred | Notifies of the setting menu. |
| [`open`](#open) | private |  | security | inferred | Opens the miracast. |
| [`popupTest`](#popuptest) | private |  | security | inferred | Handles the popup test. |
| [`registerActionHandler`](#registeractionhandler) | private |  | security | inferred | Registers the action handler. |
| [`registerInfoCallback`](#registerinfocallback) | private |  | security | inferred | Registers the info callback. |
| [`releaseProperty`](#releaseproperty) | private |  | security | inferred | Releases the property. |
| [`seamlessConnection`](#seamlessconnection) | private |  | security | inferred | Handles the seamless connection. |
| [`sendIDRRequest`](#sendidrrequest) | private |  | security | inferred | Sends the IDR request. |
| [`sendPauseRequest`](#sendpauserequest) | private |  | security | inferred | Sends the pause request. |
| [`sendPlayInfo`](#sendplayinfo) | private |  | security | inferred | Sends the play info. |
| [`sendPlayRequest`](#sendplayrequest) | private |  | security | inferred | Sends the play request. |
| [`sendRTSPRequest`](#sendrtsprequest) | private |  | security | inferred | Sends the RTSP request. |
| [`setForceAvahiPublish`](#setforceavahipublish) | private |  | security | inferred | Sets the force avahi publish. |
| [`setOverlayAvailableState`](#setoverlayavailablestate) | private |  | security | inferred | Sets the overlay available state. |
| [`setOverlayBlockedApp`](#setoverlayblockedapp) | private |  | security | inferred | Sets the overlay blocked app. |
| [`setUACSettings`](#setuacsettings) | ssap |  | media | documented | Set Miracast UAC settings |
| [`setWFDConnectionMode`](#setwfdconnectionmode) | private |  | security | inferred | Sets the WFD connection mode. |
| [`stopP2pThread`](#stopp2pthread) | private |  | security | inferred | Stops the p 2 p thread. |
| [`uibc/createKeyEvent`](#uibc_createkeyevent) | private |  | security | inferred | Creates the key event (uibc) |
| [`uibc/createMouseEvent`](#uibc_createmouseevent) | private |  | security | inferred | Creates the mouse event (uibc) |
| [`uibc/createTouchEvent`](#uibc_createtouchevent) | private |  | security | inferred | Creates the touch event (uibc) |
| [`uibc/getUibcKeyEvent`](#uibc_getuibckeyevent) | ssap |  | media | documented | Get Miracast UIBC key event |
| [`unregisterInfoCallback`](#unregisterinfocallback) | private |  | security | inferred | Unregisters the info callback. |
| [`widi/registerMouseEventCallback`](#widi_registermouseeventcallback) | private |  | security | inferred | Registers the mouse event callback (widi) |
| [`widi/unregisterMouseEventCallback`](#widi_unregistermouseeventcallback) | private |  | security | inferred | Unregisters the mouse event callback (widi) |

<a id="close"></a>
## `close`

`luna://com.webos.service.miracast/close`

Close Miracast session

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/close","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="debug"></a>
## `debug`

`luna://com.webos.service.miracast/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/debug '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletepaireddevicelist"></a>
## `deletePairedDeviceList` ⚠️ DANGEROUS

`luna://com.webos.service.miracast/deletePairedDeviceList`

Deletes the paired device list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/deletePairedDeviceList '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="destroylistenmodenotification"></a>
## `destroyListenModeNotification`

`luna://com.webos.service.miracast/destroyListenModeNotification`

Handles the destroy listen mode notification.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/destroyListenModeNotification '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="get3dmediainfo"></a>
## `get3dMediaInfo`

`luna://com.webos.service.miracast/get3dMediaInfo`

Returns the 3 d media info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/get3dMediaInfo '{}'
```

> ACG groups: miracast.read, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbbdinfo"></a>
## `getBBDInfo`

`luna://com.webos.service.miracast/getBBDInfo`

Returns the BBD info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getBBDInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getblockeddeviceinfo"></a>
## `getBlockedDeviceInfo`

`luna://com.webos.service.miracast/getBlockedDeviceInfo`

Returns the blocked device info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getBlockedDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnecteddeviceinfo"></a>
## `getConnectedDeviceInfo`

`luna://com.webos.service.miracast/getConnectedDeviceInfo`

Returns the connected device info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getConnectedDeviceInfo '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnectionstatus"></a>
## `getConnectionStatus`

`luna://com.webos.service.miracast/getConnectionStatus`

Get Miracast connection status

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/getConnectionStatus","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getdeviceinfo"></a>
## `getDeviceInfo`

`luna://com.webos.service.miracast/getDeviceInfo`

Returns the device info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmediainfo"></a>
## `getMediaInfo`

`luna://com.webos.service.miracast/getMediaInfo`

Returns the media info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getMediaInfo '{}'
```

> ACG groups: private, all, system.remote, miracast.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmiracaststatistics"></a>
## `getMiracastStatistics`

`luna://com.webos.service.miracast/getMiracastStatistics`

Returns the miracast statistics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getMiracastStatistics '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoverlayblockedapplist"></a>
## `getOverlayBlockedAppList`

`luna://com.webos.service.miracast/getOverlayBlockedAppList`

Returns the overlay blocked app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getOverlayBlockedAppList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getp2pstate"></a>
## `getP2pState`

`luna://com.webos.service.miracast/getP2pState`

Get Miracast P2P state

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/getP2pState","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getperformancestatistics"></a>
## `getPerformanceStatistics`

`luna://com.webos.service.miracast/getPerformanceStatistics`

Returns the performance statistics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getPerformanceStatistics '{}'
```

> ACG groups: private, all, system.remote, miracast.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsourceproperty"></a>
## `getSourceProperty`

`luna://com.webos.service.miracast/getSourceProperty`

Returns the source property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getSourceProperty '{}'
```

> ACG groups: miracast.read, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.miracast/getState`

Returns the state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getState '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getuacsettings"></a>
## `getUACSettings`

`luna://com.webos.service.miracast/getUACSettings`

Returns the UAC settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getUACSettings '{}'
```

> ACG groups: miracast.read, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwfdconnectionmode"></a>
## `getWFDConnectionMode`

`luna://com.webos.service.miracast/getWFDConnectionMode`

Returns the WFD connection mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getWFDConnectionMode '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="initproperty"></a>
## `initProperty`

`luna://com.webos.service.miracast/initProperty`

Initializes the property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/initProperty '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchfullapp"></a>
## `launchFullApp`

`luna://com.webos.service.miracast/launchFullApp`

Launches the full app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/launchFullApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchoverlayapp"></a>
## `launchOverlayApp`

`luna://com.webos.service.miracast/launchOverlayApp`

Launches the overlay app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/launchOverlayApp '{}'
```

> ACG groups: private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyappsettingchanged"></a>
## `notifyAppSettingChanged`

`luna://com.webos.service.miracast/notifyAppSettingChanged`

Notifies of the app setting changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/notifyAppSettingChanged '{}'
```

> ACG groups: miracast.function, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifysettingmenu"></a>
## `notifySettingMenu`

`luna://com.webos.service.miracast/notifySettingMenu`

Notifies of the setting menu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/notifySettingMenu '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.miracast/open`

Opens the miracast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/open '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="popuptest"></a>
## `popupTest`

`luna://com.webos.service.miracast/popupTest`

Handles the popup test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/popupTest '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registeractionhandler"></a>
## `registerActionHandler`

`luna://com.webos.service.miracast/registerActionHandler`

Registers the action handler.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/registerActionHandler '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerinfocallback"></a>
## `registerInfoCallback`

`luna://com.webos.service.miracast/registerInfoCallback`

Registers the info callback.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/registerInfoCallback '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releaseproperty"></a>
## `releaseProperty`

`luna://com.webos.service.miracast/releaseProperty`

Releases the property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/releaseProperty '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="seamlessconnection"></a>
## `seamlessConnection`

`luna://com.webos.service.miracast/seamlessConnection`

Handles the seamless connection.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/seamlessConnection '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendidrrequest"></a>
## `sendIDRRequest`

`luna://com.webos.service.miracast/sendIDRRequest`

Sends the IDR request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendIDRRequest '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpauserequest"></a>
## `sendPauseRequest`

`luna://com.webos.service.miracast/sendPauseRequest`

Sends the pause request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendPauseRequest '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendplayinfo"></a>
## `sendPlayInfo`

`luna://com.webos.service.miracast/sendPlayInfo`

Sends the play info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendPlayInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendplayrequest"></a>
## `sendPlayRequest`

`luna://com.webos.service.miracast/sendPlayRequest`

Sends the play request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendPlayRequest '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendrtsprequest"></a>
## `sendRTSPRequest`

`luna://com.webos.service.miracast/sendRTSPRequest`

Sends the RTSP request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendRTSPRequest '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setforceavahipublish"></a>
## `setForceAvahiPublish`

`luna://com.webos.service.miracast/setForceAvahiPublish`

Sets the force avahi publish.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/setForceAvahiPublish '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoverlayavailablestate"></a>
## `setOverlayAvailableState`

`luna://com.webos.service.miracast/setOverlayAvailableState`

Sets the overlay available state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/setOverlayAvailableState '{}'
```

> ACG groups: private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setoverlayblockedapp"></a>
## `setOverlayBlockedApp`

`luna://com.webos.service.miracast/setOverlayBlockedApp`

Sets the overlay blocked app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/setOverlayBlockedApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setuacsettings"></a>
## `setUACSettings`

`luna://com.webos.service.miracast/setUACSettings`

Set Miracast UAC settings

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/setUACSettings","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="setwfdconnectionmode"></a>
## `setWFDConnectionMode`

`luna://com.webos.service.miracast/setWFDConnectionMode`

Sets the WFD connection mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/setWFDConnectionMode '{}'
```

> ACG groups: private, all, system.remote, miracast.write.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopp2pthread"></a>
## `stopP2pThread`

`luna://com.webos.service.miracast/stopP2pThread`

Stops the p 2 p thread.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/stopP2pThread '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="uibc_createkeyevent"></a>
## `uibc/createKeyEvent`

`luna://com.webos.service.miracast/uibc/createKeyEvent`

Creates the key event (uibc)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/uibc/createKeyEvent '{}'
```

> ACG groups: private, miracast.uibc, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uibc_createmouseevent"></a>
## `uibc/createMouseEvent`

`luna://com.webos.service.miracast/uibc/createMouseEvent`

Creates the mouse event (uibc)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/uibc/createMouseEvent '{}'
```

> ACG groups: private, miracast.uibc, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uibc_createtouchevent"></a>
## `uibc/createTouchEvent`

`luna://com.webos.service.miracast/uibc/createTouchEvent`

Creates the touch event (uibc)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/uibc/createTouchEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uibc_getuibckeyevent"></a>
## `uibc/getUibcKeyEvent`

`luna://com.webos.service.miracast/uibc/getUibcKeyEvent`

Get Miracast UIBC key event

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/uibc/getUibcKeyEvent","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="unregisterinfocallback"></a>
## `unregisterInfoCallback`

`luna://com.webos.service.miracast/unregisterInfoCallback`

Unregisters the info callback.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/unregisterInfoCallback '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="widi_registermouseeventcallback"></a>
## `widi/registerMouseEventCallback`

`luna://com.webos.service.miracast/widi/registerMouseEventCallback`

Registers the mouse event callback (widi)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/widi/registerMouseEventCallback '{}'
```

> ACG groups: private, all, system.remote, miracast.widi.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="widi_unregistermouseeventcallback"></a>
## `widi/unregisterMouseEventCallback`

`luna://com.webos.service.miracast/widi/unregisterMouseEventCallback`

Unregisters the mouse event callback (widi)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/widi/unregisterMouseEventCallback '{}'
```

> ACG groups: miracast.widi, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
