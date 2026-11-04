# `com.webos.service.update`

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancelUpdate`](#cancelupdate) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`checkAutoUpdate`](#checkautoupdate) | private |  | update | Method on com.webos.service.update (from on-device permission registry; parameters undocumented). |
| [`checkLocalizedString`](#checklocalizedstring) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`checkUpdate`](#checkupdate) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`debug`](#debug) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`deleteUpdateInfo`](#deleteupdateinfo) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). ⚠️ |
| [`downloadPakImage`](#downloadpakimage) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`enterISPMode`](#enterispmode) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getCheckUpdateTimeout`](#getcheckupdatetimeout) | private |  | input | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getContent`](#getcontent) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getCurProgress`](#getcurprogress) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getCurrentSWInformation`](#getcurrentswinformation) | private |  | update | Returns current software/firmware info |
| [`getCurStatus`](#getcurstatus) | private |  | update | Returns updater state (idle when not busy) |
| [`getExpertMode`](#getexpertmode) | private |  | update | Update-service expert mode method: getExpertMode |
| [`getHWVersion`](#gethwversion) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getNSUMode`](#getnsumode) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getNSUType`](#getnsutype) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getProductId`](#getproductid) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getProgress`](#getprogress) | ssap |  | update | Get firmware update progress |
| [`getSchedule`](#getschedule) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getServerType`](#getservertype) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getStatus`](#getstatus) | private |  | update | Updater status (name seen only) |
| [`getUpdateDetail`](#getupdatedetail) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getUpdateHistory`](#getupdatehistory) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getUpdateInUsb`](#getupdateinusb) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getVersion`](#getversion) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`getVersionChecked`](#getversionchecked) | private |  | update | Getter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`isNSURunning`](#isnsurunning) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`listUpdatesInUsb`](#listupdatesinusb) | private |  | update | Lister on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`reInstallPak`](#reinstallpak) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`ReloadPartInfo`](#reloadpartinfo) | public |  | update | Method on com.webos.service.update (from on-device permission registry; parameters undocumented). |
| [`revertSWImage`](#revertswimage) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setCheckUpdateTimeout`](#setcheckupdatetimeout) | private |  | input | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setDebugSetting`](#setdebugsetting) | private |  | update | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setExpertMode`](#setexpertmode) | private |  | update | Enables update "expert mode" so the firmware-update UI accepts downgrades/USB images ⚠️ |
| [`setHWVersion`](#sethwversion) | private |  | update | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setNSUMode`](#setnsumode) | private |  | update | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setNSURetryCount`](#setnsuretrycount) | private |  | update | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setNSUTimeout`](#setnsutimeout) | private |  | input | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setNSUType`](#setnsutype) | private |  | update | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`setServerType`](#setservertype) | private |  | update | Setter on com.webos.service.update (introspected on-device; parameters undocumented). ⚠️ |
| [`setUpdateType`](#setupdatetype) | private |  | update | Setter on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`startedByActivitymanager`](#startedbyactivitymanager) | private |  | db | Method on com.webos.service.update (from on-device permission registry; parameters undocumented). |
| [`startISPStart`](#startispstart) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`startUpdate`](#startupdate) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`startUpdateByRemoteApp`](#startupdatebyremoteapp) | ssap |  | update | Start a firmware update initiated from a remote app ⚠️ |
| [`startUpdateByRemoteService`](#startupdatebyremoteservice) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |
| [`startUpdateThruUsb`](#startupdatethruusb) | private |  | update | Method on com.webos.service.update (introspected on-device; parameters undocumented). |

<a id="cancelupdate"></a>
## `cancelUpdate`

`luna://com.webos.service.update/cancelUpdate`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/cancelUpdate '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkautoupdate"></a>
## `checkAutoUpdate`

`luna://com.webos.service.update/checkAutoUpdate`

Method on com.webos.service.update (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/checkAutoUpdate '{}'
```

> ACG groups: applications.internal, private, update.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checklocalizedstring"></a>
## `checkLocalizedString`

`luna://com.webos.service.update/checkLocalizedString`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/checkLocalizedString '{}'
```

> ACG groups: private, all, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkupdate"></a>
## `checkUpdate`

`luna://com.webos.service.update/checkUpdate`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/checkUpdate '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.update/debug`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/debug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteupdateinfo"></a>
## `deleteUpdateInfo` ⚠️ DANGEROUS

`luna://com.webos.service.update/deleteUpdateInfo`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/deleteUpdateInfo '{}'
```

> ACG groups: private, all, applications.internal, update.action. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="downloadpakimage"></a>
## `downloadPakImage`

`luna://com.webos.service.update/downloadPakImage`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/downloadPakImage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enterispmode"></a>
## `enterISPMode`

`luna://com.webos.service.update/enterISPMode`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/enterISPMode '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcheckupdatetimeout"></a>
## `getCheckUpdateTimeout`

`luna://com.webos.service.update/getCheckUpdateTimeout`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getCheckUpdateTimeout '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontent"></a>
## `getContent`

`luna://com.webos.service.update/getContent`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getContent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurprogress"></a>
## `getCurProgress`

`luna://com.webos.service.update/getCurProgress`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getCurProgress '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentswinformation"></a>
## `getCurrentSWInformation`

`luna://com.webos.service.update/getCurrentSWInformation`

Returns current software/firmware info

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send -q 'model_name' -n 1 'luna://com.webos.service.update/getCurrentSWInformation' '{}'
```

> -q extracts one field from the JSON reply. Used by downgr8 and LGTVCompanion. \|\| Fields seen: product_name (e.g. 'webOS'), model_name (e.g. HE_DTV_WT1M_AFAAABAA; bscpylgtv derives 3D-LUT size / Dolby Vision config version from chars 7-11 of model_name: W18H..W26H, W18O..W26O, W24G, W25G, W26G), sw_type ('FIRMWARE').

Sources: [1](https://github.com/throwaway96/downgr8/blob/HEAD/README.md), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [5](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getcurstatus"></a>
## `getCurStatus`

`luna://com.webos.service.update/getCurStatus`

Returns updater state (idle when not busy)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.update/getCurStatus '{}'
```

> Reply status "idle" is used as a precondition before touching the update state.

Sources: [1](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/engine.js), [2](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/probe.js)

<a id="getexpertmode"></a>
## `getExpertMode`

`luna://com.webos.service.update/getExpertMode`

Update-service expert mode method: getExpertMode

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.update/getExpertMode '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="gethwversion"></a>
## `getHWVersion`

`luna://com.webos.service.update/getHWVersion`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getHWVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnsumode"></a>
## `getNSUMode`

`luna://com.webos.service.update/getNSUMode`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getNSUMode '{}'
```

> ACG groups: private, all, update.read. Example reply (W22O 7.0): { "returnValue": true, "mode": "user" }

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnsutype"></a>
## `getNSUType`

`luna://com.webos.service.update/getNSUType`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getNSUType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproductid"></a>
## `getProductId`

`luna://com.webos.service.update/getProductId`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getProductId '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprogress"></a>
## `getProgress`

`luna://com.webos.service.update/getProgress`

Get firmware update progress

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.update/getProgress","payload":{}}
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getschedule"></a>
## `getSchedule`

`luna://com.webos.service.update/getSchedule`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getSchedule '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservertype"></a>
## `getServerType`

`luna://com.webos.service.update/getServerType`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getServerType '{}'
```

> ACG groups: private, all. Example reply (W22O 7.0): { "returnValue": true, "type": "sdp" }

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.update/getStatus`

Updater status (name seen only)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.update/getStatus '{}'
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/probe.js), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getupdatedetail"></a>
## `getUpdateDetail`

`luna://com.webos.service.update/getUpdateDetail`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getUpdateDetail '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getupdatehistory"></a>
## `getUpdateHistory`

`luna://com.webos.service.update/getUpdateHistory`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getUpdateHistory '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getupdateinusb"></a>
## `getUpdateInUsb`

`luna://com.webos.service.update/getUpdateInUsb`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getUpdateInUsb '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.update/getVersion`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getVersion '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getversionchecked"></a>
## `getVersionChecked`

`luna://com.webos.service.update/getVersionChecked`

Getter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/getVersionChecked '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isnsurunning"></a>
## `isNSURunning`

`luna://com.webos.service.update/isNSURunning`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/isNSURunning '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listupdatesinusb"></a>
## `listUpdatesInUsb`

`luna://com.webos.service.update/listUpdatesInUsb`

Lister on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/listUpdatesInUsb '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reinstallpak"></a>
## `reInstallPak`

`luna://com.webos.service.update/reInstallPak`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/reInstallPak '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reloadpartinfo"></a>
## `ReloadPartInfo`

`luna://com.webos.service.update/ReloadPartInfo`

Method on com.webos.service.update (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/ReloadPartInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="revertswimage"></a>
## `revertSWImage`

`luna://com.webos.service.update/revertSWImage`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/revertSWImage '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcheckupdatetimeout"></a>
## `setCheckUpdateTimeout`

`luna://com.webos.service.update/setCheckUpdateTimeout`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setCheckUpdateTimeout '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebugsetting"></a>
## `setDebugSetting`

`luna://com.webos.service.update/setDebugSetting`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setDebugSetting '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setexpertmode"></a>
## `setExpertMode` ⚠️ DANGEROUS

`luna://com.webos.service.update/setExpertMode`

Enables update "expert mode" so the firmware-update UI accepts downgrades/USB images

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** removed/patched on newer firmware (see downgr8)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `mode` | boolean |

```sh
luna-send -n 1 luna://com.webos.service.update/setExpertMode '{"mode":true}'
```

> Followed by launching com.webos.app.softwareupdate with params {"mode":"expert","flagUpdate":true}. Firmware downgrades can brick a TV; webOS 4+ recovery may be impossible.

Sources: [1](https://github.com/throwaway96/downgr8/blob/HEAD/service.js), [2](https://github.com/throwaway96/downgr8/blob/HEAD/README.md)

<a id="sethwversion"></a>
## `setHWVersion`

`luna://com.webos.service.update/setHWVersion`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setHWVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsumode"></a>
## `setNSUMode`

`luna://com.webos.service.update/setNSUMode`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSUMode '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsuretrycount"></a>
## `setNSURetryCount`

`luna://com.webos.service.update/setNSURetryCount`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSURetryCount '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsutimeout"></a>
## `setNSUTimeout`

`luna://com.webos.service.update/setNSUTimeout`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSUTimeout '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsutype"></a>
## `setNSUType`

`luna://com.webos.service.update/setNSUType`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSUType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setservertype"></a>
## `setServerType` ⚠️ DANGEROUS

`luna://com.webos.service.update/setServerType`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setServerType '{}'
```

> ACG groups: update.write, private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setupdatetype"></a>
## `setUpdateType`

`luna://com.webos.service.update/setUpdateType`

Setter on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/setUpdateType '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startedbyactivitymanager"></a>
## `startedByActivitymanager`

`luna://com.webos.service.update/startedByActivitymanager`

Method on com.webos.service.update (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/startedByActivitymanager '{}'
```

> ACG groups: activities.callbacks, applications.internal, configurator.callbacks, private, update.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startispstart"></a>
## `startISPStart`

`luna://com.webos.service.update/startISPStart`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/startISPStart '{}'
```

> ACG groups: update.start, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startupdate"></a>
## `startUpdate`

`luna://com.webos.service.update/startUpdate`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/startUpdate '{}'
```

> ACG groups: update.start, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startupdatebyremoteapp"></a>
## `startUpdateByRemoteApp` ⚠️ DANGEROUS

`luna://com.webos.service.update/startUpdateByRemoteApp`

Start a firmware update initiated from a remote app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.update/startUpdateByRemoteApp","payload":{}}
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="startupdatebyremoteservice"></a>
## `startUpdateByRemoteService`

`luna://com.webos.service.update/startUpdateByRemoteService`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/startUpdateByRemoteService '{}'
```

> ACG groups: update.start, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startupdatethruusb"></a>
## `startUpdateThruUsb`

`luna://com.webos.service.update/startUpdateThruUsb`

Method on com.webos.service.update (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.update/startUpdateThruUsb '{}'
```

> ACG groups: update.start, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
