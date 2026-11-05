# `com.palm.webappmanager`

Web app manager: launches apps and URLs, kills/pauses apps, lists running apps, clears browsing data, and manages web-process memory.

21 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeWindowType`](#changewindowtype) | private |  | apps | inferred | Changes the window type. |
| [`clearBrowsingData`](#clearbrowsingdata) | private |  | apps | inferred | Clears the browsing data. |
| [`closeAllApps`](#closeallapps) | private |  | apps | inferred | Closes the all apps. |
| [`closeByProcessId`](#closebyprocessid) | private |  | apps | inferred | Closes the by process ID. |
| [`deliverPushMessage`](#deliverpushmessage) | private |  | apps | inferred | Handles the deliver push message. |
| [`discardCodeCache`](#discardcodecache) | private |  | apps | inferred | Handles the discard code cache. |
| [`fireNotificationEvent`](#firenotificationevent) | private |  | notifications | inferred | Handles the fire notification event. |
| [`getMemoryStatus`](#getmemorystatus) | private |  | apps | inferred | Returns the memory status. |
| [`getWebProcessSize`](#getwebprocesssize) | private |  | apps | inferred | Returns the web process size. |
| [`killApp`](#killapp) | private |  | apps | inferred | Handles the kill app. |
| [`launchApp`](#launchapp) | private |  | apps | inferred | Launches the app. |
| [`launchUrl`](#launchurl) | private |  | apps | inferred | Launches the URL. |
| [`launchUrlChild`](#launchurlchild) | private |  | apps | inferred | Launches the URL child. |
| [`listRunningApps`](#listrunningapps) | private |  | apps | inferred | Lists the running apps. |
| [`logControl`](#logcontrol) | private |  | apps | inferred | Handles the log control. |
| [`pauseApp`](#pauseapp) | private |  | apps | inferred | Pauses the app. |
| [`performLowMemoryActions`](#performlowmemoryactions) | private |  | apps | inferred | Handles the perform low memory actions. |
| [`requestUsbFileAccessPermission`](#requestusbfileaccesspermission) | private |  | apps | inferred | Requests the USB file access permission. |
| [`setInspectorEnable`](#setinspectorenable) | private |  | apps | inferred | Sets the inspector enable. |
| [`setWindowGeometry`](#setwindowgeometry) | private |  | apps | inferred | Sets the window geometry. |
| [`webProcessCreated`](#webprocesscreated) | private |  | apps | inferred | Handles the web process created. |

<a id="changewindowtype"></a>
## `changeWindowType`

`luna://com.palm.webappmanager/changeWindowType`

Changes the window type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/changeWindowType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearbrowsingdata"></a>
## `clearBrowsingData`

`luna://com.palm.webappmanager/clearBrowsingData`

Clears the browsing data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/clearBrowsingData '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeallapps"></a>
## `closeAllApps`

`luna://com.palm.webappmanager/closeAllApps`

Closes the all apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/closeAllApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closebyprocessid"></a>
## `closeByProcessId`

`luna://com.palm.webappmanager/closeByProcessId`

Closes the by process ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/closeByProcessId '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deliverpushmessage"></a>
## `deliverPushMessage`

`luna://com.palm.webappmanager/deliverPushMessage`

Handles the deliver push message.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/deliverPushMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="discardcodecache"></a>
## `discardCodeCache`

`luna://com.palm.webappmanager/discardCodeCache`

Handles the discard code cache.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/discardCodeCache '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="firenotificationevent"></a>
## `fireNotificationEvent`

`luna://com.palm.webappmanager/fireNotificationEvent`

Handles the fire notification event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/fireNotificationEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmemorystatus"></a>
## `getMemoryStatus`

`luna://com.palm.webappmanager/getMemoryStatus`

Returns the memory status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/getMemoryStatus '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwebprocesssize"></a>
## `getWebProcessSize`

`luna://com.palm.webappmanager/getWebProcessSize`

Returns the web process size.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/getWebProcessSize '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="killapp"></a>
## `killApp`

`luna://com.palm.webappmanager/killApp`

Handles the kill app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/killApp '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchapp"></a>
## `launchApp`

`luna://com.palm.webappmanager/launchApp`

Launches the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/launchApp '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchurl"></a>
## `launchUrl`

`luna://com.palm.webappmanager/launchUrl`

Launches the URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/launchUrl '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchurlchild"></a>
## `launchUrlChild`

`luna://com.palm.webappmanager/launchUrlChild`

Launches the URL child.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/launchUrlChild '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listrunningapps"></a>
## `listRunningApps`

`luna://com.palm.webappmanager/listRunningApps`

Lists the running apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/listRunningApps '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="logcontrol"></a>
## `logControl`

`luna://com.palm.webappmanager/logControl`

Handles the log control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/logControl '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pauseapp"></a>
## `pauseApp`

`luna://com.palm.webappmanager/pauseApp`

Pauses the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/pauseApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="performlowmemoryactions"></a>
## `performLowMemoryActions`

`luna://com.palm.webappmanager/performLowMemoryActions`

Handles the perform low memory actions.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/performLowMemoryActions '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestusbfileaccesspermission"></a>
## `requestUsbFileAccessPermission`

`luna://com.palm.webappmanager/requestUsbFileAccessPermission`

Requests the USB file access permission.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/requestUsbFileAccessPermission '{}'
```

> ACG groups: usbFileAccess.privacy, private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinspectorenable"></a>
## `setInspectorEnable`

`luna://com.palm.webappmanager/setInspectorEnable`

Sets the inspector enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/setInspectorEnable '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwindowgeometry"></a>
## `setWindowGeometry`

`luna://com.palm.webappmanager/setWindowGeometry`

Sets the window geometry.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/setWindowGeometry '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webprocesscreated"></a>
## `webProcessCreated`

`luna://com.palm.webappmanager/webProcessCreated`

Handles the web process created.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/webProcessCreated '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
