# `com.webos.service.applicationManager`

Application manager (TV): reports installed app and package info, foreground apps, and resolves handler apps for MIME types, file extensions and URLs.

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addContent`](#addcontent) | private |  | apps | inferred | Adds the content. |
| [`addVirtualApp`](#addvirtualapp) | private |  | apps | inferred | Adds the virtual app. |
| [`blockSystemApp`](#blocksystemapp) | private |  | apps | inferred | Blocks the system app. |
| [`changeRunningAppId`](#changerunningappid) | private |  | apps | inferred | Changes the running app ID. |
| [`closeAllApps`](#closeallapps) | private |  | apps | inferred | Closes the all apps. |
| [`debug/traceApi`](#debug_traceapi) | private |  | apps | inferred | Handles the trace api (debug) |
| [`dev/listPackages`](#dev_listpackages) | private |  | apps | inferred | Lists the packages (dev) |
| [`getAppLoadStatus`](#getapploadstatus) | public |  | apps | documented | Checks whether an app exists/is loadable |
| [`getContents`](#getcontents) | public |  | apps | inferred | Returns the contents. |
| [`getForegroundApps`](#getforegroundapps) | private |  | apps | inferred | Returns the foreground apps. |
| [`getHandlerForExtension`](#gethandlerforextension) | public |  | apps | inferred | Returns the handler for extension. |
| [`getHandlerForMimeType`](#gethandlerformimetype) | public |  | apps | inferred | Returns the handler for mime type. |
| [`getHandlerForMimeTypeByVerb`](#gethandlerformimetypebyverb) | public |  | apps | inferred | Returns the handler for mime type by verb. |
| [`getHandlerForUrl`](#gethandlerforurl) | public |  | apps | inferred | Returns the handler for URL. |
| [`getHandlerForUrlByVerb`](#gethandlerforurlbyverb) | public |  | apps | inferred | Returns the handler for URL by verb. |
| [`getHistoricalBackInfo`](#gethistoricalbackinfo) | private |  | apps | inferred | Returns the historical back info. |
| [`getLastOrder`](#getlastorder) | private |  | apps | inferred | Returns the last order. |
| [`getPackageInfo`](#getpackageinfo) | private |  | apps | inferred | Returns the package info. |
| [`isPromotionalAppOn`](#ispromotionalappon) | public |  | apps | inferred | Reports whether the promotional app on is set. |
| [`launchDefaultApp`](#launchdefaultapp) | private |  | apps | inferred | Launches the default app. |
| [`launchVirtualApp`](#launchvirtualapp) | private |  | apps | inferred | Launches the virtual app. |
| [`listAllHandlersForMime`](#listallhandlersformime) | public |  | apps | inferred | Lists the all handlers for mime. |
| [`listAllHandlersForMimeByVerb`](#listallhandlersformimebyverb) | public |  | apps | inferred | Lists the all handlers for mime by verb. |
| [`listAllHandlersForMultipleMime`](#listallhandlersformultiplemime) | public |  | apps | inferred | Lists the all handlers for multiple mime. |
| [`listAllHandlersForMultipleUrlPattern`](#listallhandlersformultipleurlpattern) | public |  | apps | inferred | Lists the all handlers for multiple URL pattern. |
| [`listAllHandlersForUrl`](#listallhandlersforurl) | public |  | apps | inferred | Lists the all handlers for URL. |
| [`listAllHandlersForUrlByVerb`](#listallhandlersforurlbyverb) | public |  | apps | inferred | Lists the all handlers for URL by verb. |
| [`listAllHandlersForUrlPattern`](#listallhandlersforurlpattern) | public |  | apps | inferred | Lists the all handlers for URL pattern. |
| [`listExtensionMap`](#listextensionmap) | public |  | apps | inferred | Lists the extension map. |
| [`listLaunchPointsForLocale`](#listlaunchpointsforlocale) | private |  | apps | inferred | Lists the launch points for locale. |
| [`listPackages`](#listpackages) | private |  | apps | inferred | Lists the packages. |
| [`lockAllApps`](#lockallapps) | private |  | apps | inferred | Locks the all apps. |
| [`mimeTypeForExtension`](#mimetypeforextension) | public |  | apps | inferred | Handles the mime type for extension. |
| [`moveLaunchPoint`](#movelaunchpoint) | private |  | apps | inferred | Moves the launch point. |
| [`notifyAlertClosed`](#notifyalertclosed) | private |  | apps | inferred | Notifies of the alert closed. |
| [`notifySplashTimeout`](#notifysplashtimeout) | private |  | apps | inferred | Notifies of the splash timeout. |
| [`onLaunch`](#onlaunch) | private |  | apps | inferred | Event handler: fires on the launch. |
| [`registerVerbsForRedirect`](#registerverbsforredirect) | private |  | apps | inferred | Registers the verbs for redirect. |
| [`registerVerbsForResource`](#registerverbsforresource) | private |  | apps | inferred | Registers the verbs for resource. |
| [`releaseBlockSystemApp`](#releaseblocksystemapp) | private |  | apps | inferred | Releases the block system app. |
| [`removeAllContents`](#removeallcontents) | private |  | apps | inferred | Removes the all contents. ⚠️ |
| [`removeContent`](#removecontent) | private |  | apps | inferred | Removes the content. ⚠️ |
| [`removeVirtualApp`](#removevirtualapp) | private |  | apps | inferred | Removes the virtual app. ⚠️ |
| [`run`](#run) | private |  | apps | inferred | Runs the application manager. |
| [`saveOrder`](#saveorder) | private |  | apps | inferred | Saves the order. |
| [`searchApps`](#searchapps) | private |  | apps | inferred | Searches for apps. |
| [`setContents`](#setcontents) | public |  | apps | inferred | Sets the contents. |
| [`setOrder`](#setorder) | private |  | apps | inferred | Sets the order. |

<a id="addcontent"></a>
## `addContent`

`luna://com.webos.service.applicationManager/addContent`

Adds the content.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/addContent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="addvirtualapp"></a>
## `addVirtualApp`

`luna://com.webos.service.applicationManager/addVirtualApp`

Adds the virtual app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/addVirtualApp '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blocksystemapp"></a>
## `blockSystemApp`

`luna://com.webos.service.applicationManager/blockSystemApp`

Blocks the system app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/blockSystemApp '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changerunningappid"></a>
## `changeRunningAppId`

`luna://com.webos.service.applicationManager/changeRunningAppId`

Changes the running app ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/changeRunningAppId '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeallapps"></a>
## `closeAllApps`

`luna://com.webos.service.applicationManager/closeAllApps`

Closes the all apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/closeAllApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_traceapi"></a>
## `debug/traceApi`

`luna://com.webos.service.applicationManager/debug/traceApi`

Handles the trace api (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/debug/traceApi '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dev_listpackages"></a>
## `dev/listPackages`

`luna://com.webos.service.applicationManager/dev/listPackages`

Lists the packages (dev)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Returns the contents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getContents '{}'
```

> ACG groups: public, all, applications.internal. \|\| ACG groups: public, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundapps"></a>
## `getForegroundApps`

`luna://com.webos.service.applicationManager/getForegroundApps`

Returns the foreground apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `appCategory` |  |
| `appId` |  |
| `foregroundApps` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getForegroundApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerforextension"></a>
## `getHandlerForExtension`

`luna://com.webos.service.applicationManager/getHandlerForExtension`

Returns the handler for extension.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForExtension '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerformimetype"></a>
## `getHandlerForMimeType`

`luna://com.webos.service.applicationManager/getHandlerForMimeType`

Returns the handler for mime type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForMimeType '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerformimetypebyverb"></a>
## `getHandlerForMimeTypeByVerb`

`luna://com.webos.service.applicationManager/getHandlerForMimeTypeByVerb`

Returns the handler for mime type by verb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForMimeTypeByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerforurl"></a>
## `getHandlerForUrl`

`luna://com.webos.service.applicationManager/getHandlerForUrl`

Returns the handler for URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForUrl '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethandlerforurlbyverb"></a>
## `getHandlerForUrlByVerb`

`luna://com.webos.service.applicationManager/getHandlerForUrlByVerb`

Returns the handler for URL by verb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHandlerForUrlByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethistoricalbackinfo"></a>
## `getHistoricalBackInfo`

`luna://com.webos.service.applicationManager/getHistoricalBackInfo`

Returns the historical back info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getHistoricalBackInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastorder"></a>
## `getLastOrder`

`luna://com.webos.service.applicationManager/getLastOrder`

Returns the last order.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getLastOrder '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpackageinfo"></a>
## `getPackageInfo`

`luna://com.webos.service.applicationManager/getPackageInfo`

Returns the package info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/getPackageInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ispromotionalappon"></a>
## `isPromotionalAppOn`

`luna://com.webos.service.applicationManager/isPromotionalAppOn`

Reports whether the promotional app on is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/isPromotionalAppOn '{}'
```

> ACG groups: public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchdefaultapp"></a>
## `launchDefaultApp`

`luna://com.webos.service.applicationManager/launchDefaultApp`

Launches the default app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/launchDefaultApp '{}'
```

> ACG groups: applications.launch, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchvirtualapp"></a>
## `launchVirtualApp`

`luna://com.webos.service.applicationManager/launchVirtualApp`

Launches the virtual app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/launchVirtualApp '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformime"></a>
## `listAllHandlersForMime`

`luna://com.webos.service.applicationManager/listAllHandlersForMime`

Lists the all handlers for mime.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMime '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformimebyverb"></a>
## `listAllHandlersForMimeByVerb`

`luna://com.webos.service.applicationManager/listAllHandlersForMimeByVerb`

Lists the all handlers for mime by verb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMimeByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformultiplemime"></a>
## `listAllHandlersForMultipleMime`

`luna://com.webos.service.applicationManager/listAllHandlersForMultipleMime`

Lists the all handlers for multiple mime.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMultipleMime '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersformultipleurlpattern"></a>
## `listAllHandlersForMultipleUrlPattern`

`luna://com.webos.service.applicationManager/listAllHandlersForMultipleUrlPattern`

Lists the all handlers for multiple URL pattern.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForMultipleUrlPattern '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersforurl"></a>
## `listAllHandlersForUrl`

`luna://com.webos.service.applicationManager/listAllHandlersForUrl`

Lists the all handlers for URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForUrl '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersforurlbyverb"></a>
## `listAllHandlersForUrlByVerb`

`luna://com.webos.service.applicationManager/listAllHandlersForUrlByVerb`

Lists the all handlers for URL by verb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForUrlByVerb '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listallhandlersforurlpattern"></a>
## `listAllHandlersForUrlPattern`

`luna://com.webos.service.applicationManager/listAllHandlersForUrlPattern`

Lists the all handlers for URL pattern.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listAllHandlersForUrlPattern '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listextensionmap"></a>
## `listExtensionMap`

`luna://com.webos.service.applicationManager/listExtensionMap`

Lists the extension map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `bmp` |  |
| `extensionMap` |  |
| `gif` |  |
| `html` |  |
| `jpe` |  |
| `jpeg` |  |
| `jpg` |  |
| `png` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listExtensionMap '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listlaunchpointsforlocale"></a>
## `listLaunchPointsForLocale`

`luna://com.webos.service.applicationManager/listLaunchPointsForLocale`

Lists the launch points for locale.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listLaunchPointsForLocale '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listpackages"></a>
## `listPackages`

`luna://com.webos.service.applicationManager/listPackages`

Lists the packages.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `allInOneVoiceUi` |  |
| `app` |  |
| `containerInfo` |  |
| `dependencies` |  |
| `folderPath` |  |
| `id` |  |
| `loc_name` |  |
| `package_format_version` |  |
| `packages` |  |
| `privilegedJail` |  |
| `requiredEULA` |  |
| `requiredMemory` |  |
| `requiredPermissions` |  |
| `services` |  |
| `standAloneLaunchable` |  |
| `sttEngine` |  |
| `textNlpEngine` |  |
| `title` |  |
| `vendor` |  |
| `version` |  |
| `voiceManifest` |  |
| `voiceNlpEngine` |  |
| `voicePerformer` |  |
| `webruntimeVersion` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/listPackages '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="lockallapps"></a>
## `lockAllApps`

`luna://com.webos.service.applicationManager/lockAllApps`

Locks the all apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/lockAllApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mimetypeforextension"></a>
## `mimeTypeForExtension`

`luna://com.webos.service.applicationManager/mimeTypeForExtension`

Handles the mime type for extension.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/mimeTypeForExtension '{}'
```

> ACG groups: applications.query, public, private, applications, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="movelaunchpoint"></a>
## `moveLaunchPoint`

`luna://com.webos.service.applicationManager/moveLaunchPoint`

Moves the launch point.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/moveLaunchPoint '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyalertclosed"></a>
## `notifyAlertClosed`

`luna://com.webos.service.applicationManager/notifyAlertClosed`

Notifies of the alert closed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/notifyAlertClosed '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifysplashtimeout"></a>
## `notifySplashTimeout`

`luna://com.webos.service.applicationManager/notifySplashTimeout`

Notifies of the splash timeout.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/notifySplashTimeout '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onlaunch"></a>
## `onLaunch`

`luna://com.webos.service.applicationManager/onLaunch`

Event handler: fires on the launch.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/onLaunch '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerverbsforredirect"></a>
## `registerVerbsForRedirect`

`luna://com.webos.service.applicationManager/registerVerbsForRedirect`

Registers the verbs for redirect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/registerVerbsForRedirect '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerverbsforresource"></a>
## `registerVerbsForResource`

`luna://com.webos.service.applicationManager/registerVerbsForResource`

Registers the verbs for resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/registerVerbsForResource '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseblocksystemapp"></a>
## `releaseBlockSystemApp`

`luna://com.webos.service.applicationManager/releaseBlockSystemApp`

Releases the block system app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/releaseBlockSystemApp '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeallcontents"></a>
## `removeAllContents` ⚠️ DANGEROUS

`luna://com.webos.service.applicationManager/removeAllContents`

Removes the all contents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/removeAllContents '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removecontent"></a>
## `removeContent` ⚠️ DANGEROUS

`luna://com.webos.service.applicationManager/removeContent`

Removes the content.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/removeContent '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removevirtualapp"></a>
## `removeVirtualApp` ⚠️ DANGEROUS

`luna://com.webos.service.applicationManager/removeVirtualApp`

Removes the virtual app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/removeVirtualApp '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="run"></a>
## `run`

`luna://com.webos.service.applicationManager/run`

Runs the application manager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/run '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="saveorder"></a>
## `saveOrder`

`luna://com.webos.service.applicationManager/saveOrder`

Saves the order.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/saveOrder '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="searchapps"></a>
## `searchApps`

`luna://com.webos.service.applicationManager/searchApps`

Searches for apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/searchApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcontents"></a>
## `setContents`

`luna://com.webos.service.applicationManager/setContents`

Sets the contents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/setContents '{}'
```

> ACG groups: public, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setorder"></a>
## `setOrder`

`luna://com.webos.service.applicationManager/setOrder`

Sets the order.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.applicationManager/setOrder '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
