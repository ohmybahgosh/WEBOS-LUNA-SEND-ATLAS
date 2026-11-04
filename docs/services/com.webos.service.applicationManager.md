# `com.webos.service.applicationManager`

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addContent`](#addcontent) | private |  | apps | Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented). |
| [`addVirtualApp`](#addvirtualapp) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`blockSystemApp`](#blocksystemapp) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`changeRunningAppId`](#changerunningappid) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`closeAllApps`](#closeallapps) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`debug/traceApi`](#debug_traceapi) | private |  | apps | Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented). |
| [`dev/listPackages`](#dev_listpackages) | private |  | apps | Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented). |
| [`getAppLoadStatus`](#getapploadstatus) | public |  | apps | Checks whether an app exists/is loadable |
| [`getContents`](#getcontents) | public |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getForegroundApps`](#getforegroundapps) | private |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getHandlerForExtension`](#gethandlerforextension) | public |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getHandlerForMimeType`](#gethandlerformimetype) | public |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getHandlerForMimeTypeByVerb`](#gethandlerformimetypebyverb) | public |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getHandlerForUrl`](#gethandlerforurl) | public |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getHandlerForUrlByVerb`](#gethandlerforurlbyverb) | public |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getHistoricalBackInfo`](#gethistoricalbackinfo) | private |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`getLastOrder`](#getlastorder) | private |  | apps | Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented). |
| [`getPackageInfo`](#getpackageinfo) | private |  | apps | Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`isPromotionalAppOn`](#ispromotionalappon) | public |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`launchDefaultApp`](#launchdefaultapp) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`launchVirtualApp`](#launchvirtualapp) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listAllHandlersForMime`](#listallhandlersformime) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listAllHandlersForMimeByVerb`](#listallhandlersformimebyverb) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listAllHandlersForMultipleMime`](#listallhandlersformultiplemime) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listAllHandlersForMultipleUrlPattern`](#listallhandlersformultipleurlpattern) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listAllHandlersForUrl`](#listallhandlersforurl) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listAllHandlersForUrlByVerb`](#listallhandlersforurlbyverb) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listAllHandlersForUrlPattern`](#listallhandlersforurlpattern) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listExtensionMap`](#listextensionmap) | public |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`listLaunchPointsForLocale`](#listlaunchpointsforlocale) | private |  | apps | Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented). |
| [`listPackages`](#listpackages) | private |  | apps | Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`lockAllApps`](#lockallapps) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`mimeTypeForExtension`](#mimetypeforextension) | public |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`moveLaunchPoint`](#movelaunchpoint) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`notifyAlertClosed`](#notifyalertclosed) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`notifySplashTimeout`](#notifysplashtimeout) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`onLaunch`](#onlaunch) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`registerVerbsForRedirect`](#registerverbsforredirect) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`registerVerbsForResource`](#registerverbsforresource) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`releaseBlockSystemApp`](#releaseblocksystemapp) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`removeAllContents`](#removeallcontents) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). ⚠️ |
| [`removeContent`](#removecontent) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). ⚠️ |
| [`removeVirtualApp`](#removevirtualapp) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). ⚠️ |
| [`run`](#run) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`saveOrder`](#saveorder) | private |  | apps | Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented). |
| [`searchApps`](#searchapps) | private |  | apps | Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`setContents`](#setcontents) | public |  | apps | Setter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |
| [`setOrder`](#setorder) | private |  | apps | Setter on com.webos.service.applicationManager (introspected on-device; parameters undocumented). |

<a id="addcontent"></a>
## `addContent`

`luna://com.webos.service.applicationManager/addContent`

Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/addContent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="addvirtualapp"></a>
## `addVirtualApp`

`luna://com.webos.service.applicationManager/addVirtualApp`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/addVirtualApp '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blocksystemapp"></a>
## `blockSystemApp`

`luna://com.webos.service.applicationManager/blockSystemApp`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/blockSystemApp '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changerunningappid"></a>
## `changeRunningAppId`

`luna://com.webos.service.applicationManager/changeRunningAppId`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/changeRunningAppId '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeallapps"></a>
## `closeAllApps`

`luna://com.webos.service.applicationManager/closeAllApps`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/closeAllApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_traceapi"></a>
## `debug/traceApi`

`luna://com.webos.service.applicationManager/debug/traceApi`

Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/debug/traceApi '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dev_listpackages"></a>
## `dev/listPackages`

`luna://com.webos.service.applicationManager/dev/listPackages`

Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/dev/listPackages '{}'
```

> ACG groups: applications.dev, applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getapploadstatus"></a>
## `getAppLoadStatus`

`luna://com.webos.service.applicationManager/getAppLoadStatus`

Checks whether an app exists/is loadable

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 5+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `appId` | string |

```sh
luna-send-pub -n 1 luna://com.webos.service.applicationManager/getAppLoadStatus '{"appId":"com.example.app"}'
```

> Returns {exist:bool}. dev-manager treats LunaUnknownMethod as unsupported on older firmware.

Sources: [1](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/app-manager.service.ts)

<a id="getcontents"></a>
## `getContents`

`luna://com.webos.service.applicationManager/getContents`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getContents '{}'
```

> ACG groups: public, all, applications.internal. \|\| ACG groups: public, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundapps"></a>
## `getForegroundApps`

`luna://com.webos.service.applicationManager/getForegroundApps`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getForegroundApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerforextension"></a>
## `getHandlerForExtension`

`luna://com.webos.service.applicationManager/getHandlerForExtension`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForExtension '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerformimetype"></a>
## `getHandlerForMimeType`

`luna://com.webos.service.applicationManager/getHandlerForMimeType`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForMimeType '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerformimetypebyverb"></a>
## `getHandlerForMimeTypeByVerb`

`luna://com.webos.service.applicationManager/getHandlerForMimeTypeByVerb`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForMimeTypeByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerforurl"></a>
## `getHandlerForUrl`

`luna://com.webos.service.applicationManager/getHandlerForUrl`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForUrl '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerforurlbyverb"></a>
## `getHandlerForUrlByVerb`

`luna://com.webos.service.applicationManager/getHandlerForUrlByVerb`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForUrlByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethistoricalbackinfo"></a>
## `getHistoricalBackInfo`

`luna://com.webos.service.applicationManager/getHistoricalBackInfo`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHistoricalBackInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastorder"></a>
## `getLastOrder`

`luna://com.webos.service.applicationManager/getLastOrder`

Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getLastOrder '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpackageinfo"></a>
## `getPackageInfo`

`luna://com.webos.service.applicationManager/getPackageInfo`

Getter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getPackageInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ispromotionalappon"></a>
## `isPromotionalAppOn`

`luna://com.webos.service.applicationManager/isPromotionalAppOn`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/isPromotionalAppOn '{}'
```

> ACG groups: public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchdefaultapp"></a>
## `launchDefaultApp`

`luna://com.webos.service.applicationManager/launchDefaultApp`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/launchDefaultApp '{}'
```

> ACG groups: applications.launch, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchvirtualapp"></a>
## `launchVirtualApp`

`luna://com.webos.service.applicationManager/launchVirtualApp`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/launchVirtualApp '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformime"></a>
## `listAllHandlersForMime`

`luna://com.webos.service.applicationManager/listAllHandlersForMime`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMime '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformimebyverb"></a>
## `listAllHandlersForMimeByVerb`

`luna://com.webos.service.applicationManager/listAllHandlersForMimeByVerb`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMimeByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformultiplemime"></a>
## `listAllHandlersForMultipleMime`

`luna://com.webos.service.applicationManager/listAllHandlersForMultipleMime`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMultipleMime '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformultipleurlpattern"></a>
## `listAllHandlersForMultipleUrlPattern`

`luna://com.webos.service.applicationManager/listAllHandlersForMultipleUrlPattern`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMultipleUrlPattern '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersforurl"></a>
## `listAllHandlersForUrl`

`luna://com.webos.service.applicationManager/listAllHandlersForUrl`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForUrl '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersforurlbyverb"></a>
## `listAllHandlersForUrlByVerb`

`luna://com.webos.service.applicationManager/listAllHandlersForUrlByVerb`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForUrlByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersforurlpattern"></a>
## `listAllHandlersForUrlPattern`

`luna://com.webos.service.applicationManager/listAllHandlersForUrlPattern`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForUrlPattern '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listextensionmap"></a>
## `listExtensionMap`

`luna://com.webos.service.applicationManager/listExtensionMap`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listExtensionMap '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listlaunchpointsforlocale"></a>
## `listLaunchPointsForLocale`

`luna://com.webos.service.applicationManager/listLaunchPointsForLocale`

Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listLaunchPointsForLocale '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listpackages"></a>
## `listPackages`

`luna://com.webos.service.applicationManager/listPackages`

Lister on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listPackages '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="lockallapps"></a>
## `lockAllApps`

`luna://com.webos.service.applicationManager/lockAllApps`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/lockAllApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mimetypeforextension"></a>
## `mimeTypeForExtension`

`luna://com.webos.service.applicationManager/mimeTypeForExtension`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/mimeTypeForExtension '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="movelaunchpoint"></a>
## `moveLaunchPoint`

`luna://com.webos.service.applicationManager/moveLaunchPoint`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/moveLaunchPoint '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyalertclosed"></a>
## `notifyAlertClosed`

`luna://com.webos.service.applicationManager/notifyAlertClosed`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/notifyAlertClosed '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifysplashtimeout"></a>
## `notifySplashTimeout`

`luna://com.webos.service.applicationManager/notifySplashTimeout`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/notifySplashTimeout '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onlaunch"></a>
## `onLaunch`

`luna://com.webos.service.applicationManager/onLaunch`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/onLaunch '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerverbsforredirect"></a>
## `registerVerbsForRedirect`

`luna://com.webos.service.applicationManager/registerVerbsForRedirect`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/registerVerbsForRedirect '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerverbsforresource"></a>
## `registerVerbsForResource`

`luna://com.webos.service.applicationManager/registerVerbsForResource`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/registerVerbsForResource '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseblocksystemapp"></a>
## `releaseBlockSystemApp`

`luna://com.webos.service.applicationManager/releaseBlockSystemApp`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/releaseBlockSystemApp '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeallcontents"></a>
## `removeAllContents` ⚠️ DANGEROUS

`luna://com.webos.service.applicationManager/removeAllContents`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/removeAllContents '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removecontent"></a>
## `removeContent` ⚠️ DANGEROUS

`luna://com.webos.service.applicationManager/removeContent`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/removeContent '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removevirtualapp"></a>
## `removeVirtualApp` ⚠️ DANGEROUS

`luna://com.webos.service.applicationManager/removeVirtualApp`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/removeVirtualApp '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="run"></a>
## `run`

`luna://com.webos.service.applicationManager/run`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/run '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="saveorder"></a>
## `saveOrder`

`luna://com.webos.service.applicationManager/saveOrder`

Method on com.webos.service.applicationManager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/saveOrder '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="searchapps"></a>
## `searchApps`

`luna://com.webos.service.applicationManager/searchApps`

Method on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/searchApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcontents"></a>
## `setContents`

`luna://com.webos.service.applicationManager/setContents`

Setter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/setContents '{}'
```

> ACG groups: public, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setorder"></a>
## `setOrder`

`luna://com.webos.service.applicationManager/setOrder`

Setter on com.webos.service.applicationManager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/setOrder '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
