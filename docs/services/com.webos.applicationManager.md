# `com.webos.applicationManager`

76 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addContent`](#addcontent) | private |  | apps | Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented). |
| [`addLaunchPoint`](#addlaunchpoint) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`addVirtualApp`](#addvirtualapp) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`blockSystemApp`](#blocksystemapp) | private |  | apps | Blocks a system app (used by webos-homebar to replace LG Home) ⚠️ |
| [`changeRunningAppId`](#changerunningappid) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`close`](#close) | ssap |  | apps | Close an app by id (SSAP) |
| [`closeAllApps`](#closeallapps) | private |  | apps | Closes all running apps (as used by webos-homebar helper) |
| [`closeByAppId`](#closebyappid) | public |  | apps | Closes a running app by id |
| [`debug/traceApi`](#debug_traceapi) | private |  | apps | Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented). |
| [`dev/close`](#dev_close) | unknown |  | apps | Registered in webOS OSE sysbus api.json (ACG group application.devmode); name only |
| [`dev/closeByAppId`](#dev_closebyappid) | public |  | apps | Developer-mode variant of closeByAppId used by ares-launch to close a dev app |
| [`dev/listApps`](#dev_listapps) | public |  | apps | Lists developer-mode (and dev-visible) apps with id, version, folderPath, icon |
| [`dev/listPackages`](#dev_listpackages) | private |  | apps | Lister on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`dev/managerInfo`](#dev_managerinfo) | unknown |  | apps | Registered in webOS OSE sysbus api.json (ACG group application.devmode); name only |
| [`dev/running`](#dev_running) | public |  | apps | Developer-mode listing of running apps (ares-launch --running) |
| [`getAllContents`](#getallcontents) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getAppBasePath`](#getappbasepath) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getAppInfo`](#getappinfo) | ssap |  | apps | Get info for one installed app |
| [`getAppLifeEvents`](#getapplifeevents) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getAppLifeStatus`](#getapplifestatus) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getAppLoadStatus`](#getapploadstatus) | public |  | apps | Returns whether the app with the given ID is installed (webOS TV 4.0+). |
| [`getAppStatus`](#getappstatus) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getContents`](#getcontents) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getForegroundAppInfo`](#getforegroundappinfo) | ssap | yes | apps | Get (or subscribe to) the foreground app |
| [`getForegroundApps`](#getforegroundapps) | private |  | apps | Getter on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`getHandlerForExtension`](#gethandlerforextension) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getHandlerForMimeType`](#gethandlerformimetype) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getHandlerForMimeTypeByVerb`](#gethandlerformimetypebyverb) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getHandlerForUrl`](#gethandlerforurl) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getHandlerForUrlByVerb`](#gethandlerforurlbyverb) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`getHistoricalBackInfo`](#gethistoricalbackinfo) | private |  | apps | Getter on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`getLastOrder`](#getlastorder) | private |  | apps | Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented). |
| [`getPackageInfo`](#getpackageinfo) | private |  | apps | Getter on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`isPromotionalAppOn`](#ispromotionalappon) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`launch`](#launch) | public |  | apps | Launches the app with the given app ID, optionally with params. ⚠️ |
| [`launchDefaultApp`](#launchdefaultapp) | private |  | apps | Launches the default app (listed by ls-monitor -i, parameters unread) |
| [`launchVirtualApp`](#launchvirtualapp) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listAllHandlersForMime`](#listallhandlersformime) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listAllHandlersForMimeByVerb`](#listallhandlersformimebyverb) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listAllHandlersForMultipleMime`](#listallhandlersformultiplemime) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listAllHandlersForMultipleUrlPattern`](#listallhandlersformultipleurlpattern) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listAllHandlersForUrl`](#listallhandlersforurl) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listAllHandlersForUrlByVerb`](#listallhandlersforurlbyverb) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listAllHandlersForUrlPattern`](#listallhandlersforurlpattern) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listApps`](#listapps) | private |  | apps | Lists installed apps |
| [`listExtensionMap`](#listextensionmap) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`listLaunchPoints`](#listlaunchpoints) | ssap | yes | apps | List launcher launch points (apps visible in launcher) |
| [`listLaunchPointsForLocale`](#listlaunchpointsforlocale) | private |  | apps | Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented). |
| [`listPackages`](#listpackages) | private |  | apps | Lister on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`lockAllApps`](#lockallapps) | private |  | apps | Method on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`lockApp`](#lockapp) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`mimeTypeForExtension`](#mimetypeforextension) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`moveLaunchPoint`](#movelaunchpoint) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`notifyAlertClosed`](#notifyalertclosed) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`notifySplashTimeout`](#notifysplashtimeout) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`onLaunch`](#onlaunch) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`open`](#open) | ssap |  | apps | Open an app by id (SSAP) |
| [`pause`](#pause) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`registerApp`](#registerapp) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`registerNativeApp`](#registernativeapp) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`registerVerbsForRedirect`](#registerverbsforredirect) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`registerVerbsForResource`](#registerverbsforresource) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`releaseBlockSystemApp`](#releaseblocksystemapp) | private |  | apps | Releases a blocked system app |
| [`removeAllContents`](#removeallcontents) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`removeContent`](#removecontent) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`removeLaunchPoint`](#removelaunchpoint) | private |  | apps | Removes a launch point by id |
| [`removeVirtualApp`](#removevirtualapp) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`run`](#run) | private |  | apps | Method on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`running`](#running) | private | yes | apps | Lists running apps |
| [`saveOrder`](#saveorder) | private |  | apps | Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented). |
| [`scan`](#scan) | private |  | apps | Triggers the app manager to rescan app directories |
| [`searchApps`](#searchapps) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`setContents`](#setcontents) | public |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`setDefaultApp`](#setdefaultapp) | private |  | apps | Setter on com.webos.applicationManager (introspected on-device; parameters undocumented). |
| [`setOrder`](#setorder) | private |  | apps | Method registered by com.webos.applicationManager (root category) |
| [`updateLaunchPoint`](#updatelaunchpoint) | private |  | apps | Method registered by com.webos.applicationManager (root category) |

<a id="addcontent"></a>
## `addContent`

`luna://com.webos.applicationManager/addContent`

Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/addContent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="addlaunchpoint"></a>
## `addLaunchPoint`

`luna://com.webos.applicationManager/addLaunchPoint`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/addLaunchPoint '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.launcher" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="addvirtualapp"></a>
## `addVirtualApp`

`luna://com.webos.applicationManager/addVirtualApp`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/addVirtualApp '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="blocksystemapp"></a>
## `blockSystemApp` ⚠️ DANGEROUS

`luna://com.webos.applicationManager/blockSystemApp`

Blocks a system app (used by webos-homebar to replace LG Home)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 7+ (not present on webOS 6)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | string |
| `forceBlockSystemApp` | boolean (schema on newer firmware) |

```sh
luna-send -n 1 luna://com.webos.applicationManager/blockSystemApp '{"id":"com.webos.app.home"}'
```

> Counterpart releaseBlockSystemApp {id}. If left blocked and the replacement fails you may have no Home.

Sources: [1](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/home-takeover.sh)

<a id="changerunningappid"></a>
## `changeRunningAppId`

`luna://com.webos.applicationManager/changeRunningAppId`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/changeRunningAppId '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="close"></a>
## `close`

`luna://com.webos.applicationManager/close`

Close an app by id (SSAP)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | string app id |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.applicationManager/close","payload":{"id":"netflix"}}
```

> Defined in homebridge-webos-tv as WEBOS_URI_CLOSE_APP (params: id). bscpylgtv/aiowebostv use system.launcher/close instead. \|\| Used as fallback when closeByAppId fails.

Sources: [1](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [2](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/helper/running.js), [3](https://github.com/gprot42/webos-launch-home/blob/HEAD/voice/daemon/luna_service.py)

<a id="closeallapps"></a>
## `closeAllApps`

`luna://com.webos.applicationManager/closeAllApps`

Closes all running apps (as used by webos-homebar helper)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 10  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.applicationManager/closeAllApps '{}'
```

> The helper comments that LG also closes the overlay app; watchdog preloads it again.

Sources: [1](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/helper/service.js)

<a id="closebyappid"></a>
## `closeByAppId`

`luna://com.webos.applicationManager/closeByAppId`

Closes a running app by id

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `id` | string (required) |

```sh
luna-send -n 1 'luna://com.webos.applicationManager/closeByAppId' '{"id":"netflix"}'
```

> Cheatsheet shows com.webos.service.applicationManager alias. Does not close LG Home (Actually-Good-WebOS notes it is ignored for LG Home). On webOS 6 closeByAppId is the call that works and plain close is the fallback (cleanyourtv).

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [2](https://gist.github.com/Ircama/1f29c2d2def75da6604756a3c91a8ab4), [3](https://github.com/diaahussein/WebOS_LG_TV_Scripts/blob/HEAD/README.md), [4](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/tv/default-home), [5](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/helper/running.js)

<a id="debug_traceapi"></a>
## `debug/traceApi`

`luna://com.webos.applicationManager/debug/traceApi`

Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/debug/traceApi '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dev_close"></a>
## `dev/close`

`luna://com.webos.applicationManager/dev/close`

Registered in webOS OSE sysbus api.json (ACG group application.devmode); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/dev/close '{}'
```

> Listed under ACG group "application.devmode" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="dev_closebyappid"></a>
## `dev/closeByAppId`

`luna://com.webos.applicationManager/dev/closeByAppId`

Developer-mode variant of closeByAppId used by ares-launch to close a dev app

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | string (required) |
| `subscribe` | boolean |

```sh
luna-send-pub -n 1 'luna://com.webos.applicationManager/dev/closeByAppId' '{"id":"com.example.app"}'
```

> Callable by the developer-mode user (prisoner) via luna-send-pub.

Sources: [1](https://github.com/webosbrew/ares-cli-rs/blob/HEAD/ares-launch/src/close.rs)

<a id="dev_listapps"></a>
## `dev/listApps`

`luna://com.webos.applicationManager/dev/listApps`

Lists developer-mode (and dev-visible) apps with id, version, folderPath, icon

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send-pub -n 1 luna://com.webos.applicationManager/dev/listApps '{}'
```

> Used by ares-install --list, dev-manager, and Homebrew Channel getAppInfo.

Sources: [1](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/app-manager.service.ts), [2](https://github.com/webosbrew/ares-cli-rs/blob/HEAD/ares-install/src/list.rs), [3](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="dev_listpackages"></a>
## `dev/listPackages`

`luna://com.webos.applicationManager/dev/listPackages`

Lister on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/dev/listPackages '{}'
```

> ACG groups: private, applications.dev, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dev_managerinfo"></a>
## `dev/managerInfo`

`luna://com.webos.applicationManager/dev/managerInfo`

Registered in webOS OSE sysbus api.json (ACG group application.devmode); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/dev/managerInfo '{}'
```

> Listed under ACG group "application.devmode" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="dev_running"></a>
## `dev/running`

`luna://com.webos.applicationManager/dev/running`

Developer-mode listing of running apps (ares-launch --running)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send-pub -n 1 luna://com.webos.applicationManager/dev/running '{}'
```

Sources: [1](https://github.com/webosbrew/ares-cli-rs/blob/HEAD/ares-launch/src/running.rs)

<a id="getallcontents"></a>
## `getAllContents`

`luna://com.webos.applicationManager/getAllContents`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getAllContents '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getappbasepath"></a>
## `getAppBasePath`

`luna://com.webos.applicationManager/getAppBasePath`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getAppBasePath '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="getappinfo"></a>
## `getAppInfo`

`luna://com.webos.applicationManager/getAppInfo`

Get info for one installed app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `id` | string app id |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.applicationManager/getAppInfo","payload":{"id":"com.webos.app.hdmi1"}}
```

> Response contains appInfo object and appId (snabb/webostv mapps.go). \|\| Homebrew Channel README: luna://org.webosbrew.hbchannel.service/getAppInfo replicates this call using devmode-only endpoints for non-privileged callers.

Sources: [1](https://github.com/snabb/webostv/blob/master/mapps.go), [2](https://github.com/Tenzer/alga/blob/main/src), [3](https://gist.github.com/Ircama/1f29c2d2def75da6604756a3c91a8ab4), [4](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/README.md), [5](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/app-manager.service.ts)

<a id="getapplifeevents"></a>
## `getAppLifeEvents`

`luna://com.webos.applicationManager/getAppLifeEvents`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getAppLifeEvents '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="getapplifestatus"></a>
## `getAppLifeStatus`

`luna://com.webos.applicationManager/getAppLifeStatus`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getAppLifeStatus '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, activities.callbacks, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="getapploadstatus"></a>
## `getAppLoadStatus`

`luna://com.webos.applicationManager/getAppLoadStatus`

Returns whether the app with the given ID is installed (webOS TV 4.0+).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getAppLoadStatus '{"appId":"com.yourdomain.callee"}'
```

> Returns {exist:boolean}.

Sources: [1](https://webostv.developer.lge.com/develop/references/application-manager)

<a id="getappstatus"></a>
## `getAppStatus`

`luna://com.webos.applicationManager/getAppStatus`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getAppStatus '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, configurator.callbacks, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="getcontents"></a>
## `getContents`

`luna://com.webos.applicationManager/getContents`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getContents '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getforegroundappinfo"></a>
## `getForegroundAppInfo`

`luna://com.webos.applicationManager/getForegroundAppInfo`

Get (or subscribe to) the foreground app

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `subscribe` | bool |
| `extraInfo` | boolean (adds windowType etc.) |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.applicationManager/getForegroundAppInfo","payload":{}}
```

> Response: {appId, windowId, processId, returnValue}. appId is e.g. com.webos.app.hdmi2 when an HDMI input is shown (bscpylgtv uses this as 'current input'). \|\| Reply fields: appId, windowId, processId, returnValue. extraInfo:true adds windowType (webos-homebar). Alias com.webos.service.applicationmanager/getForegroundAppInfo is public per Ircama gist. On webOS 10 a non-root caller can be denied; some apps shell out as root (gprot42).

Sources: [1](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [4](https://github.com/snabb/webostv/blob/master/mapps.go), [5](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [6](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna.md), [7](https://gist.github.com/Ircama/1f29c2d2def75da6604756a3c91a8ab4), [8](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/home-takeover.sh)

<a id="getforegroundapps"></a>
## `getForegroundApps`

`luna://com.webos.applicationManager/getForegroundApps`

Getter on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getForegroundApps '{}'
```

> ACG groups: private, configurator.callbacks, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerforextension"></a>
## `getHandlerForExtension`

`luna://com.webos.applicationManager/getHandlerForExtension`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getHandlerForExtension '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethandlerformimetype"></a>
## `getHandlerForMimeType`

`luna://com.webos.applicationManager/getHandlerForMimeType`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getHandlerForMimeType '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethandlerformimetypebyverb"></a>
## `getHandlerForMimeTypeByVerb`

`luna://com.webos.applicationManager/getHandlerForMimeTypeByVerb`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getHandlerForMimeTypeByVerb '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethandlerforurl"></a>
## `getHandlerForUrl`

`luna://com.webos.applicationManager/getHandlerForUrl`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getHandlerForUrl '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethandlerforurlbyverb"></a>
## `getHandlerForUrlByVerb`

`luna://com.webos.applicationManager/getHandlerForUrlByVerb`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getHandlerForUrlByVerb '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethistoricalbackinfo"></a>
## `getHistoricalBackInfo`

`luna://com.webos.applicationManager/getHistoricalBackInfo`

Getter on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getHistoricalBackInfo '{}'
```

> ACG groups: private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastorder"></a>
## `getLastOrder`

`luna://com.webos.applicationManager/getLastOrder`

Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getLastOrder '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpackageinfo"></a>
## `getPackageInfo`

`luna://com.webos.applicationManager/getPackageInfo`

Getter on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/getPackageInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ispromotionalappon"></a>
## `isPromotionalAppOn`

`luna://com.webos.applicationManager/isPromotionalAppOn`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/isPromotionalAppOn '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="launch"></a>
## `launch` ⚠️ DANGEROUS

`luna://com.webos.applicationManager/launch`

Launches the app with the given app ID, optionally with params.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted); webOS 3+; webOS 1+  
- **Confidence:** documented, code, community

| Param | Type / notes |
|---|---|
| `id` | String (required) app ID |
| `params` | Object (optional) passed to target app |
| `contentId` | string (deep link content id) |
| `params.extend` | true |
| `subscribe` | false |
| `noSplash` | boolean |
| `spinner` | boolean |
| `keepAlive` | boolean (keep window alive while other apps run) |
| `params.id` | executeFactory |
| `params.irKey` | inStart\|ezAdjust\|inStop\|pCheck\|sCheck\|tilt\|powerOnly |
| `params.activateType` | energy-saving-mode |

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/launch '{"id":"com.yourdomain.callee","params":{"customParam1":"value1"}}'
```

> Errors: -101 app not found, -102 locked, -103 security check failed, -104 privileged dev-mode app, -105 invalid id. \|\| SSAP path 'com.webos.applicationManager/launch' is addressed as service/method (full service name) per the secondscreen.gateway interface file format. Response includes processId (snabb/webostv). LGWebOSRemote exposes it as openAppWithPayload (used to start com.webos.app.factorywin with params {id:'executeFactory',irKey:'inStart'\|'ezAdjust'}). Luna form luna://com.webos.applicationManager/launch is also used by root-side tools. \|\| This is what webOS Dev Manager Desktop calls (pub=true) to extend the session. The same app also has a web renewal path: dev-manager-desktop renew script calls https://developer.lge.com/secure/ResetDevModeSession.dev?sessionToken=... with a token read from the TV. A rooted TV with /var/luna/preferences/devmode_enabled as a directory does not need renewal (webosbrew rooting notes). \|\| The lowercase alias luna://com.webos.service.applicationmanager/launch and the camel alias luna://com.webos.service.applicationManager/launch are also used in the wild. Public callers can launch apps via luna-send-pub. Params examples: {"id":"com.palm.app.settings","params":{"target":"picture"}} (targets seen: picture, sound, channel, network, general, accessibility), {"id":"com.webos.app.browser","params":{"target":"https://..."}}, {"id":"com.webos.app.home","params":{"activateType":"home","launchType":"homeKey"}}, {"id":"com.webos.app.hdmi3} sw

Sources: [1](https://webostv.developer.lge.com/develop/references/application-manager), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [4](https://github.com/klattimer/LGWebOSRemote/blob/master/LGTV/remote.py), [5](https://github.com/klattimer/LGWebOSRemote/blob/master/LGTV/instart.py), [6](https://github.com/snabb/webostv/blob/master/mapps.go), [7](https://github.com/webosbrew/webosbrew.github.io/blob/main/src/views/develop/guides/system-mods.md), [8](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/device-manager.service.ts)

<a id="launchdefaultapp"></a>
## `launchDefaultApp`

`luna://com.webos.applicationManager/launchDefaultApp`

Launches the default app (listed by ls-monitor -i, parameters unread)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.applicationManager/launchDefaultApp '{}'
```

> Only the method name was seen (lumen recon).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/HEAD/docs/device/b9.md)

<a id="launchvirtualapp"></a>
## `launchVirtualApp`

`luna://com.webos.applicationManager/launchVirtualApp`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/launchVirtualApp '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listallhandlersformime"></a>
## `listAllHandlersForMime`

`luna://com.webos.applicationManager/listAllHandlersForMime`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listAllHandlersForMime '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listallhandlersformimebyverb"></a>
## `listAllHandlersForMimeByVerb`

`luna://com.webos.applicationManager/listAllHandlersForMimeByVerb`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listAllHandlersForMimeByVerb '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listallhandlersformultiplemime"></a>
## `listAllHandlersForMultipleMime`

`luna://com.webos.applicationManager/listAllHandlersForMultipleMime`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listAllHandlersForMultipleMime '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listallhandlersformultipleurlpattern"></a>
## `listAllHandlersForMultipleUrlPattern`

`luna://com.webos.applicationManager/listAllHandlersForMultipleUrlPattern`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listAllHandlersForMultipleUrlPattern '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listallhandlersforurl"></a>
## `listAllHandlersForUrl`

`luna://com.webos.applicationManager/listAllHandlersForUrl`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listAllHandlersForUrl '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listallhandlersforurlbyverb"></a>
## `listAllHandlersForUrlByVerb`

`luna://com.webos.applicationManager/listAllHandlersForUrlByVerb`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listAllHandlersForUrlByVerb '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listallhandlersforurlpattern"></a>
## `listAllHandlersForUrlPattern`

`luna://com.webos.applicationManager/listAllHandlersForUrlPattern`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listAllHandlersForUrlPattern '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listapps"></a>
## `listApps`

`luna://com.webos.applicationManager/listApps`

Lists installed apps

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.applicationManager/listApps '{}'
```

> Non-dev variant; dev-manager falls back to it when dev/listApps is unknown. \|\| Response key: apps.

Sources: [1](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/app-manager.service.ts), [2](https://github.com/gprot42/webos-launch-home/blob/HEAD/src/js/luna.js), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [5](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)

<a id="listextensionmap"></a>
## `listExtensionMap`

`luna://com.webos.applicationManager/listExtensionMap`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listExtensionMap '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listlaunchpoints"></a>
## `listLaunchPoints`

`luna://com.webos.applicationManager/listLaunchPoints`

List launcher launch points (apps visible in launcher)

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.applicationManager/listLaunchPoints","payload":{}}
```

> Response key: launchPoints. \|\| Magic mapper and Ircama gist use alias com.palm.applicationManager; webos-homebar uses com.webos.applicationManager. Reply used to find app ids for launch.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [4](https://gist.github.com/Ircama/1f29c2d2def75da6604756a3c91a8ab4), [5](https://github.com/andrewfraley/magic_mapper/blob/HEAD/magic_mapper.py), [6](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/mode-switch.sh), [7](https://github.com/gprot42/webos-launch-home/blob/HEAD/src/js/luna.js)

<a id="listlaunchpointsforlocale"></a>
## `listLaunchPointsForLocale`

`luna://com.webos.applicationManager/listLaunchPointsForLocale`

Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listLaunchPointsForLocale '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listpackages"></a>
## `listPackages`

`luna://com.webos.applicationManager/listPackages`

Lister on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/listPackages '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="lockallapps"></a>
## `lockAllApps`

`luna://com.webos.applicationManager/lockAllApps`

Method on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/lockAllApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="lockapp"></a>
## `lockApp`

`luna://com.webos.applicationManager/lockApp`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/lockApp '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.launcher" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="mimetypeforextension"></a>
## `mimeTypeForExtension`

`luna://com.webos.applicationManager/mimeTypeForExtension`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/mimeTypeForExtension '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.query, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="movelaunchpoint"></a>
## `moveLaunchPoint`

`luna://com.webos.applicationManager/moveLaunchPoint`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/moveLaunchPoint '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notifyalertclosed"></a>
## `notifyAlertClosed`

`luna://com.webos.applicationManager/notifyAlertClosed`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/notifyAlertClosed '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notifysplashtimeout"></a>
## `notifySplashTimeout`

`luna://com.webos.applicationManager/notifySplashTimeout`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/notifySplashTimeout '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="onlaunch"></a>
## `onLaunch`

`luna://com.webos.applicationManager/onLaunch`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/onLaunch '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="open"></a>
## `open`

`luna://com.webos.applicationManager/open`

Open an app by id (SSAP)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | string app id |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.applicationManager/open","payload":{"id":"netflix"}}
```

> Defined in homebridge-webos-tv as WEBOS_URI_OPEN_APP (params: id). Not exposed by bscpylgtv/aiowebostv.

Sources: [1](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js)

<a id="pause"></a>
## `pause`

`luna://com.webos.applicationManager/pause`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/pause '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.launcher" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="registerapp"></a>
## `registerApp`

`luna://com.webos.applicationManager/registerApp`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/registerApp '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="registernativeapp"></a>
## `registerNativeApp`

`luna://com.webos.applicationManager/registerNativeApp`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/registerNativeApp '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, applications, public, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="registerverbsforredirect"></a>
## `registerVerbsForRedirect`

`luna://com.webos.applicationManager/registerVerbsForRedirect`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/registerVerbsForRedirect '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="registerverbsforresource"></a>
## `registerVerbsForResource`

`luna://com.webos.applicationManager/registerVerbsForResource`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/registerVerbsForResource '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="releaseblocksystemapp"></a>
## `releaseBlockSystemApp`

`luna://com.webos.applicationManager/releaseBlockSystemApp`

Releases a blocked system app

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 7+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | string |

```sh
luna-send -n 1 luna://com.webos.applicationManager/releaseBlockSystemApp '{"id":"com.webos.app.home"}'
```

Sources: [1](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/home-takeover.sh)

<a id="removeallcontents"></a>
## `removeAllContents`

`luna://com.webos.applicationManager/removeAllContents`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/removeAllContents '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="removecontent"></a>
## `removeContent`

`luna://com.webos.applicationManager/removeContent`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/removeContent '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="removelaunchpoint"></a>
## `removeLaunchPoint`

`luna://com.webos.applicationManager/removeLaunchPoint`

Removes a launch point by id

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `launchPointId` | string |

```sh
luna-send -n 1 luna://com.webos.applicationManager/removeLaunchPoint '{"launchPointId":"ID"}'
```

> Seen in Glasshouse apps.js. Also updateLaunchPoint and moveLaunchPoint are referenced in its docs.

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/apps.js)

<a id="removevirtualapp"></a>
## `removeVirtualApp`

`luna://com.webos.applicationManager/removeVirtualApp`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/removeVirtualApp '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="run"></a>
## `run`

`luna://com.webos.applicationManager/run`

Method on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/run '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="running"></a>
## `running`

`luna://com.webos.applicationManager/running`

Lists running apps

- **Access:** private  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `subscribe` | boolean |

```sh
luna-send -n 1 luna://com.webos.applicationManager/running '{}'
```

> Reply contains "running" array of app objects with id. A dev-only variant luna://com.webos.applicationManager/dev/running is used by ares-launch.

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/tv/settings-key), [2](https://github.com/webosbrew/ares-cli-rs/blob/HEAD/ares-launch/src/running.rs), [3](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/helper/running.js)

<a id="saveorder"></a>
## `saveOrder`

`luna://com.webos.applicationManager/saveOrder`

Method on com.webos.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/saveOrder '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan"></a>
## `scan`

`luna://com.webos.applicationManager/scan`

Triggers the app manager to rescan app directories

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.applicationManager/scan '{}'
```

> Seen in Hearth takeover script.

Sources: [1](https://github.com/rudra-avatar/Hearth/blob/HEAD/src/takeover/takeover.sh)

<a id="searchapps"></a>
## `searchApps`

`luna://com.webos.applicationManager/searchApps`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/searchApps '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setcontents"></a>
## `setContents`

`luna://com.webos.applicationManager/setContents`

Method registered by com.webos.applicationManager (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/setContents '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setdefaultapp"></a>
## `setDefaultApp`

`luna://com.webos.applicationManager/setDefaultApp`

Setter on com.webos.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/setDefaultApp '{}'
```

> ACG groups: applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setorder"></a>
## `setOrder`

`luna://com.webos.applicationManager/setOrder`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/setOrder '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="updatelaunchpoint"></a>
## `updateLaunchPoint`

`luna://com.webos.applicationManager/updateLaunchPoint`

Method registered by com.webos.applicationManager (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/updateLaunchPoint '{}'
```

> Seen via `ls-monitor -i com.webos.applicationManager` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, applications.internal. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "application.launcher" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)
