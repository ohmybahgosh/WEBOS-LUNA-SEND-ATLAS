# `com.webos.service.update`

Software/firmware update service: checks for, downloads and applies system updates, reports progress and current software/hardware versions, and manages update modes.

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelUpdate`](#cancelupdate) | private |  | update | inferred | Cancels the update. |
| [`checkAutoUpdate`](#checkautoupdate) | private |  | update | inferred | Checks the auto update. |
| [`checkLocalizedString`](#checklocalizedstring) | private |  | update | inferred | Checks the localized string. |
| [`checkUpdate`](#checkupdate) | private |  | update | inferred | Checks the update. |
| [`debug`](#debug) | private |  | update | inferred | Handles the debug. |
| [`deleteUpdateInfo`](#deleteupdateinfo) | private |  | update | inferred | Deletes the update info. ⚠️ |
| [`downloadPakImage`](#downloadpakimage) | private |  | update | inferred | Downloads the pak image. |
| [`enterISPMode`](#enterispmode) | private |  | update | inferred | Enters the ISP mode. |
| [`getCheckUpdateTimeout`](#getcheckupdatetimeout) | private |  | input | inferred | Returns the check update timeout. |
| [`getContent`](#getcontent) | private |  | update | inferred | Returns the content. |
| [`getCurProgress`](#getcurprogress) | private |  | update | inferred | Returns the cur progress. |
| [`getCurrentSWInformation`](#getcurrentswinformation) | private |  | update | documented | Returns current software/firmware info |
| [`getCurStatus`](#getcurstatus) | private |  | update | documented | Returns updater state (idle when not busy) |
| [`getExpertMode`](#getexpertmode) | private |  | update | documented | Update-service expert mode method: getExpertMode |
| [`getHWVersion`](#gethwversion) | private |  | update | inferred | Returns the hardware version. |
| [`getNSUMode`](#getnsumode) | private |  | update | inferred | Returns the NSU mode. |
| [`getNSUType`](#getnsutype) | private |  | update | inferred | Returns the NSU type. |
| [`getProductId`](#getproductid) | private |  | update | inferred | Returns the product ID. |
| [`getProgress`](#getprogress) | ssap |  | update | documented | Get firmware update progress |
| [`getSchedule`](#getschedule) | private |  | update | inferred | Returns the schedule. |
| [`getServerType`](#getservertype) | private |  | update | inferred | Returns the server type. |
| [`getStatus`](#getstatus) | private |  | update | documented | Updater status (name seen only) |
| [`getUpdateDetail`](#getupdatedetail) | private |  | update | inferred | Returns the update detail. |
| [`getUpdateHistory`](#getupdatehistory) | private |  | update | inferred | Returns the update history. |
| [`getUpdateInUsb`](#getupdateinusb) | private |  | update | inferred | Returns the update in USB. |
| [`getVersion`](#getversion) | private |  | update | inferred | Returns the version. |
| [`getVersionChecked`](#getversionchecked) | private |  | update | inferred | Returns the version checked. |
| [`isNSURunning`](#isnsurunning) | private |  | update | inferred | Reports whether the NSU running is set. |
| [`listUpdatesInUsb`](#listupdatesinusb) | private |  | update | inferred | Lists the updates in USB. |
| [`reInstallPak`](#reinstallpak) | private |  | update | inferred | Handles the re install pak. |
| [`ReloadPartInfo`](#reloadpartinfo) | public |  | update | inferred | Reloads the part info. |
| [`revertSWImage`](#revertswimage) | private |  | update | inferred | Reverts the software image. |
| [`setCheckUpdateTimeout`](#setcheckupdatetimeout) | private |  | input | inferred | Sets the check update timeout. |
| [`setDebugSetting`](#setdebugsetting) | private |  | update | inferred | Sets the debug setting. |
| [`setExpertMode`](#setexpertmode) | private |  | update | documented | Enables update "expert mode" so the firmware-update UI accepts downgrades/USB images ⚠️ |
| [`setHWVersion`](#sethwversion) | private |  | update | inferred | Sets the hardware version. |
| [`setNSUMode`](#setnsumode) | private |  | update | inferred | Sets the NSU mode. |
| [`setNSURetryCount`](#setnsuretrycount) | private |  | update | inferred | Sets the NSU retry count. |
| [`setNSUTimeout`](#setnsutimeout) | private |  | input | inferred | Sets the NSU timeout. |
| [`setNSUType`](#setnsutype) | private |  | update | inferred | Sets the NSU type. |
| [`setServerType`](#setservertype) | private |  | update | inferred | Sets the server type. ⚠️ |
| [`setUpdateType`](#setupdatetype) | private |  | update | inferred | Sets the update type. |
| [`startedByActivitymanager`](#startedbyactivitymanager) | private |  | db | inferred | Handles the started by activitymanager. |
| [`startISPStart`](#startispstart) | private |  | update | inferred | Starts the ISP start. |
| [`startUpdate`](#startupdate) | private |  | update | inferred | Starts the update. |
| [`startUpdateByRemoteApp`](#startupdatebyremoteapp) | ssap |  | update | documented | Start a firmware update initiated from a remote app ⚠️ |
| [`startUpdateByRemoteService`](#startupdatebyremoteservice) | private |  | update | inferred | Starts the update by remote service. |
| [`startUpdateThruUsb`](#startupdatethruusb) | private |  | update | inferred | Starts the update thru USB. |

<a id="cancelupdate"></a>
## `cancelUpdate`

`luna://com.webos.service.update/cancelUpdate`

Cancels the update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/cancelUpdate '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkautoupdate"></a>
## `checkAutoUpdate`

`luna://com.webos.service.update/checkAutoUpdate`

Checks the auto update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/checkAutoUpdate '{}'
```

> ACG groups: applications.internal, private, update.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checklocalizedstring"></a>
## `checkLocalizedString`

`luna://com.webos.service.update/checkLocalizedString`

Checks the localized string.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/checkLocalizedString '{}'
```

> ACG groups: private, all, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkupdate"></a>
## `checkUpdate`

`luna://com.webos.service.update/checkUpdate`

Checks the update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/checkUpdate '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.update/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/debug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteupdateinfo"></a>
## `deleteUpdateInfo` ⚠️ DANGEROUS

`luna://com.webos.service.update/deleteUpdateInfo`

Deletes the update info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/deleteUpdateInfo '{}'
```

> ACG groups: private, all, applications.internal, update.action. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="downloadpakimage"></a>
## `downloadPakImage`

`luna://com.webos.service.update/downloadPakImage`

Downloads the pak image.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/downloadPakImage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enterispmode"></a>
## `enterISPMode`

`luna://com.webos.service.update/enterISPMode`

Enters the ISP mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/enterISPMode '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcheckupdatetimeout"></a>
## `getCheckUpdateTimeout`

`luna://com.webos.service.update/getCheckUpdateTimeout`

Returns the check update timeout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getCheckUpdateTimeout '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontent"></a>
## `getContent`

`luna://com.webos.service.update/getContent`

Returns the content.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getContent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurprogress"></a>
## `getCurProgress`

`luna://com.webos.service.update/getCurProgress`

Returns the cur progress.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.update/getExpertMode '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="gethwversion"></a>
## `getHWVersion`

`luna://com.webos.service.update/getHWVersion`

Returns the hardware version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getHWVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnsumode"></a>
## `getNSUMode`

`luna://com.webos.service.update/getNSUMode`

Returns the NSU mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getNSUMode '{}'
```

> ACG groups: private, all, update.read. Example reply (W22O 7.0): { "returnValue": true, "mode": "user" }

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnsutype"></a>
## `getNSUType`

`luna://com.webos.service.update/getNSUType`

Returns the NSU type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getNSUType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproductid"></a>
## `getProductId`

`luna://com.webos.service.update/getProductId`

Returns the product ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.update/getProgress","payload":{}}
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getschedule"></a>
## `getSchedule`

`luna://com.webos.service.update/getSchedule`

Returns the schedule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getSchedule '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservertype"></a>
## `getServerType`

`luna://com.webos.service.update/getServerType`

Returns the server type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.update/getStatus '{}'
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/probe.js), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getupdatedetail"></a>
## `getUpdateDetail`

`luna://com.webos.service.update/getUpdateDetail`

Returns the update detail.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getUpdateDetail '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getupdatehistory"></a>
## `getUpdateHistory`

`luna://com.webos.service.update/getUpdateHistory`

Returns the update history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getUpdateHistory '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getupdateinusb"></a>
## `getUpdateInUsb`

`luna://com.webos.service.update/getUpdateInUsb`

Returns the update in USB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getUpdateInUsb '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.update/getVersion`

Returns the version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getVersion '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getversionchecked"></a>
## `getVersionChecked`

`luna://com.webos.service.update/getVersionChecked`

Returns the version checked.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/getVersionChecked '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isnsurunning"></a>
## `isNSURunning`

`luna://com.webos.service.update/isNSURunning`

Reports whether the NSU running is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/isNSURunning '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listupdatesinusb"></a>
## `listUpdatesInUsb`

`luna://com.webos.service.update/listUpdatesInUsb`

Lists the updates in USB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/listUpdatesInUsb '{}'
```

> ACG groups: private, all, update.read, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reinstallpak"></a>
## `reInstallPak`

`luna://com.webos.service.update/reInstallPak`

Handles the re install pak.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/reInstallPak '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reloadpartinfo"></a>
## `ReloadPartInfo`

`luna://com.webos.service.update/ReloadPartInfo`

Reloads the part info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/ReloadPartInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="revertswimage"></a>
## `revertSWImage`

`luna://com.webos.service.update/revertSWImage`

Reverts the software image.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/revertSWImage '{}'
```

> ACG groups: private, all, applications.internal, update.action.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcheckupdatetimeout"></a>
## `setCheckUpdateTimeout`

`luna://com.webos.service.update/setCheckUpdateTimeout`

Sets the check update timeout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setCheckUpdateTimeout '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebugsetting"></a>
## `setDebugSetting`

`luna://com.webos.service.update/setDebugSetting`

Sets the debug setting.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Sets the hardware version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setHWVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsumode"></a>
## `setNSUMode`

`luna://com.webos.service.update/setNSUMode`

Sets the NSU mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSUMode '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsuretrycount"></a>
## `setNSURetryCount`

`luna://com.webos.service.update/setNSURetryCount`

Sets the NSU retry count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSURetryCount '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsutimeout"></a>
## `setNSUTimeout`

`luna://com.webos.service.update/setNSUTimeout`

Sets the NSU timeout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSUTimeout '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnsutype"></a>
## `setNSUType`

`luna://com.webos.service.update/setNSUType`

Sets the NSU type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setNSUType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setservertype"></a>
## `setServerType` ⚠️ DANGEROUS

`luna://com.webos.service.update/setServerType`

Sets the server type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setServerType '{}'
```

> ACG groups: update.write, private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setupdatetype"></a>
## `setUpdateType`

`luna://com.webos.service.update/setUpdateType`

Sets the update type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/setUpdateType '{}'
```

> ACG groups: update.write, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startedbyactivitymanager"></a>
## `startedByActivitymanager`

`luna://com.webos.service.update/startedByActivitymanager`

Handles the started by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/startedByActivitymanager '{}'
```

> ACG groups: activities.callbacks, applications.internal, configurator.callbacks, private, update.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startispstart"></a>
## `startISPStart`

`luna://com.webos.service.update/startISPStart`

Starts the ISP start.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/startISPStart '{}'
```

> ACG groups: update.start, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startupdate"></a>
## `startUpdate`

`luna://com.webos.service.update/startUpdate`

Starts the update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.update/startUpdateByRemoteApp","payload":{}}
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="startupdatebyremoteservice"></a>
## `startUpdateByRemoteService`

`luna://com.webos.service.update/startUpdateByRemoteService`

Starts the update by remote service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/startUpdateByRemoteService '{}'
```

> ACG groups: update.start, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startupdatethruusb"></a>
## `startUpdateThruUsb`

`luna://com.webos.service.update/startUpdateThruUsb`

Starts the update thru USB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.update/startUpdateThruUsb '{}'
```

> ACG groups: update.start, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
