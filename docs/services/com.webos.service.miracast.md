# `com.webos.service.miracast`

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`close`](#close) | ssap |  | media | Close Miracast session |
| [`debug`](#debug) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`deletePairedDeviceList`](#deletepaireddevicelist) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). ⚠️ |
| [`destroyListenModeNotification`](#destroylistenmodenotification) | private |  | notifications | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`get3dMediaInfo`](#get3dmediainfo) | private |  | media | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`getBBDInfo`](#getbbdinfo) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getBlockedDeviceInfo`](#getblockeddeviceinfo) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getConnectedDeviceInfo`](#getconnecteddeviceinfo) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getConnectionStatus`](#getconnectionstatus) | ssap |  | media | Get Miracast connection status |
| [`getDeviceInfo`](#getdeviceinfo) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getMediaInfo`](#getmediainfo) | private |  | media | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getMiracastStatistics`](#getmiracaststatistics) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getOverlayBlockedAppList`](#getoverlayblockedapplist) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getP2pState`](#getp2pstate) | ssap |  | media | Get Miracast P2P state |
| [`getPerformanceStatistics`](#getperformancestatistics) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getSourceProperty`](#getsourceproperty) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`getState`](#getstate) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`getUACSettings`](#getuacsettings) | private |  | settings | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`getWFDConnectionMode`](#getwfdconnectionmode) | private |  | security | Getter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`initProperty`](#initproperty) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`launchFullApp`](#launchfullapp) | private |  | apps | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`launchOverlayApp`](#launchoverlayapp) | private |  | apps | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`notifyAppSettingChanged`](#notifyappsettingchanged) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`notifySettingMenu`](#notifysettingmenu) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`open`](#open) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`popupTest`](#popuptest) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`registerActionHandler`](#registeractionhandler) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`registerInfoCallback`](#registerinfocallback) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`releaseProperty`](#releaseproperty) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`seamlessConnection`](#seamlessconnection) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`sendIDRRequest`](#sendidrrequest) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`sendPauseRequest`](#sendpauserequest) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`sendPlayInfo`](#sendplayinfo) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`sendPlayRequest`](#sendplayrequest) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`sendRTSPRequest`](#sendrtsprequest) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`setForceAvahiPublish`](#setforceavahipublish) | private |  | security | Setter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`setOverlayAvailableState`](#setoverlayavailablestate) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`setOverlayBlockedApp`](#setoverlayblockedapp) | private |  | security | Setter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`setUACSettings`](#setuacsettings) | ssap |  | media | Set Miracast UAC settings |
| [`setWFDConnectionMode`](#setwfdconnectionmode) | private |  | security | Setter on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`stopP2pThread`](#stopp2pthread) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`uibc/createKeyEvent`](#uibc_createkeyevent) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`uibc/createMouseEvent`](#uibc_createmouseevent) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`uibc/createTouchEvent`](#uibc_createtouchevent) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`uibc/getUibcKeyEvent`](#uibc_getuibckeyevent) | ssap |  | media | Get Miracast UIBC key event |
| [`unregisterInfoCallback`](#unregisterinfocallback) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |
| [`widi/registerMouseEventCallback`](#widi_registermouseeventcallback) | private |  | security | Method on com.webos.service.miracast (introspected on-device; parameters undocumented). |
| [`widi/unregisterMouseEventCallback`](#widi_unregistermouseeventcallback) | private |  | security | Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented). |

<a id="close"></a>
## `close`

`luna://com.webos.service.miracast/close`

Close Miracast session

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/close","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="debug"></a>
## `debug`

`luna://com.webos.service.miracast/debug`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/debug '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletepaireddevicelist"></a>
## `deletePairedDeviceList` ⚠️ DANGEROUS

`luna://com.webos.service.miracast/deletePairedDeviceList`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/deletePairedDeviceList '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="destroylistenmodenotification"></a>
## `destroyListenModeNotification`

`luna://com.webos.service.miracast/destroyListenModeNotification`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/destroyListenModeNotification '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="get3dmediainfo"></a>
## `get3dMediaInfo`

`luna://com.webos.service.miracast/get3dMediaInfo`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/get3dMediaInfo '{}'
```

> ACG groups: miracast.read, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbbdinfo"></a>
## `getBBDInfo`

`luna://com.webos.service.miracast/getBBDInfo`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getBBDInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getblockeddeviceinfo"></a>
## `getBlockedDeviceInfo`

`luna://com.webos.service.miracast/getBlockedDeviceInfo`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getBlockedDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnecteddeviceinfo"></a>
## `getConnectedDeviceInfo`

`luna://com.webos.service.miracast/getConnectedDeviceInfo`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/getConnectionStatus","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getdeviceinfo"></a>
## `getDeviceInfo`

`luna://com.webos.service.miracast/getDeviceInfo`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmediainfo"></a>
## `getMediaInfo`

`luna://com.webos.service.miracast/getMediaInfo`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getMediaInfo '{}'
```

> ACG groups: private, all, system.remote, miracast.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmiracaststatistics"></a>
## `getMiracastStatistics`

`luna://com.webos.service.miracast/getMiracastStatistics`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getMiracastStatistics '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoverlayblockedapplist"></a>
## `getOverlayBlockedAppList`

`luna://com.webos.service.miracast/getOverlayBlockedAppList`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/getP2pState","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getperformancestatistics"></a>
## `getPerformanceStatistics`

`luna://com.webos.service.miracast/getPerformanceStatistics`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getPerformanceStatistics '{}'
```

> ACG groups: private, all, system.remote, miracast.read.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsourceproperty"></a>
## `getSourceProperty`

`luna://com.webos.service.miracast/getSourceProperty`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getSourceProperty '{}'
```

> ACG groups: miracast.read, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.miracast/getState`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getState '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getuacsettings"></a>
## `getUACSettings`

`luna://com.webos.service.miracast/getUACSettings`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getUACSettings '{}'
```

> ACG groups: miracast.read, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwfdconnectionmode"></a>
## `getWFDConnectionMode`

`luna://com.webos.service.miracast/getWFDConnectionMode`

Getter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/getWFDConnectionMode '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="initproperty"></a>
## `initProperty`

`luna://com.webos.service.miracast/initProperty`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/initProperty '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchfullapp"></a>
## `launchFullApp`

`luna://com.webos.service.miracast/launchFullApp`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/launchFullApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchoverlayapp"></a>
## `launchOverlayApp`

`luna://com.webos.service.miracast/launchOverlayApp`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/launchOverlayApp '{}'
```

> ACG groups: private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyappsettingchanged"></a>
## `notifyAppSettingChanged`

`luna://com.webos.service.miracast/notifyAppSettingChanged`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/notifyAppSettingChanged '{}'
```

> ACG groups: miracast.function, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifysettingmenu"></a>
## `notifySettingMenu`

`luna://com.webos.service.miracast/notifySettingMenu`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/notifySettingMenu '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.miracast/open`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/open '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="popuptest"></a>
## `popupTest`

`luna://com.webos.service.miracast/popupTest`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/popupTest '{}'
```

> ACG groups: miracast.function, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registeractionhandler"></a>
## `registerActionHandler`

`luna://com.webos.service.miracast/registerActionHandler`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/registerActionHandler '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerinfocallback"></a>
## `registerInfoCallback`

`luna://com.webos.service.miracast/registerInfoCallback`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/registerInfoCallback '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releaseproperty"></a>
## `releaseProperty`

`luna://com.webos.service.miracast/releaseProperty`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/releaseProperty '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="seamlessconnection"></a>
## `seamlessConnection`

`luna://com.webos.service.miracast/seamlessConnection`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/seamlessConnection '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendidrrequest"></a>
## `sendIDRRequest`

`luna://com.webos.service.miracast/sendIDRRequest`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendIDRRequest '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpauserequest"></a>
## `sendPauseRequest`

`luna://com.webos.service.miracast/sendPauseRequest`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendPauseRequest '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendplayinfo"></a>
## `sendPlayInfo`

`luna://com.webos.service.miracast/sendPlayInfo`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendPlayInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendplayrequest"></a>
## `sendPlayRequest`

`luna://com.webos.service.miracast/sendPlayRequest`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendPlayRequest '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendrtsprequest"></a>
## `sendRTSPRequest`

`luna://com.webos.service.miracast/sendRTSPRequest`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/sendRTSPRequest '{}'
```

> ACG groups: private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setforceavahipublish"></a>
## `setForceAvahiPublish`

`luna://com.webos.service.miracast/setForceAvahiPublish`

Setter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/setForceAvahiPublish '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoverlayavailablestate"></a>
## `setOverlayAvailableState`

`luna://com.webos.service.miracast/setOverlayAvailableState`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/setOverlayAvailableState '{}'
```

> ACG groups: private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setoverlayblockedapp"></a>
## `setOverlayBlockedApp`

`luna://com.webos.service.miracast/setOverlayBlockedApp`

Setter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/setUACSettings","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="setwfdconnectionmode"></a>
## `setWFDConnectionMode`

`luna://com.webos.service.miracast/setWFDConnectionMode`

Setter on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/setWFDConnectionMode '{}'
```

> ACG groups: private, all, system.remote, miracast.write.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopp2pthread"></a>
## `stopP2pThread`

`luna://com.webos.service.miracast/stopP2pThread`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/stopP2pThread '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="uibc_createkeyevent"></a>
## `uibc/createKeyEvent`

`luna://com.webos.service.miracast/uibc/createKeyEvent`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/uibc/createKeyEvent '{}'
```

> ACG groups: private, miracast.uibc, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uibc_createmouseevent"></a>
## `uibc/createMouseEvent`

`luna://com.webos.service.miracast/uibc/createMouseEvent`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/uibc/createMouseEvent '{}'
```

> ACG groups: private, miracast.uibc, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uibc_createtouchevent"></a>
## `uibc/createTouchEvent`

`luna://com.webos.service.miracast/uibc/createTouchEvent`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.miracast/uibc/getUibcKeyEvent","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv from the SSAP service list; payload unknown.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="unregisterinfocallback"></a>
## `unregisterInfoCallback`

`luna://com.webos.service.miracast/unregisterInfoCallback`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/unregisterInfoCallback '{}'
```

> ACG groups: miracast.function, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="widi_registermouseeventcallback"></a>
## `widi/registerMouseEventCallback`

`luna://com.webos.service.miracast/widi/registerMouseEventCallback`

Method on com.webos.service.miracast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/widi/registerMouseEventCallback '{}'
```

> ACG groups: private, all, system.remote, miracast.widi.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="widi_unregistermouseeventcallback"></a>
## `widi/unregisterMouseEventCallback`

`luna://com.webos.service.miracast/widi/unregisterMouseEventCallback`

Method on com.webos.service.miracast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.miracast/widi/unregisterMouseEventCallback '{}'
```

> ACG groups: miracast.widi, private, system.remote. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
