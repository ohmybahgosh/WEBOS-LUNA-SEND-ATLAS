# `com.webos.service.webappportable`

Web-app process manager: launches, pauses, closes and kills web apps, reports web-process size and creation, clears browsing data and code cache, and toggles the inspector. _(inferred from the service's methods)_

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`clearBrowsingData`](#clearbrowsingdata) | private |  | misc | inferred | Clears the browsing data. |
| [`closeAllApps`](#closeallapps) | private |  | misc | inferred | Closes the all apps. |
| [`closeByProcessId`](#closebyprocessid) | private |  | misc | inferred | Closes the by process ID. |
| [`discardCodeCache`](#discardcodecache) | private |  | misc | inferred | Handles the discard code cache. |
| [`getWebProcessSize`](#getwebprocesssize) | private |  | misc | inferred | Returns the web process size. |
| [`killApp`](#killapp) | private |  | misc | inferred | Handles the kill app. |
| [`launchApp`](#launchapp) | private |  | apps | inferred | Launches the app. |
| [`listRunningApps`](#listrunningapps) | private |  | misc | inferred | Lists the running apps. |
| [`logControl`](#logcontrol) | private |  | misc | inferred | Handles the log control. |
| [`pauseApp`](#pauseapp) | private |  | misc | inferred | Pauses the app. |
| [`setInspectorEnable`](#setinspectorenable) | private |  | misc | inferred | Sets the inspector enable. |
| [`webProcessCreated`](#webprocesscreated) | private |  | misc | inferred | Handles the web process created. |

<a id="clearbrowsingdata"></a>
## `clearBrowsingData`

`luna://com.webos.service.webappportable/clearBrowsingData`

Clears the browsing data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/clearBrowsingData '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="closeallapps"></a>
## `closeAllApps`

`luna://com.webos.service.webappportable/closeAllApps`

Closes the all apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/closeAllApps '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="closebyprocessid"></a>
## `closeByProcessId`

`luna://com.webos.service.webappportable/closeByProcessId`

Closes the by process ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/closeByProcessId '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="discardcodecache"></a>
## `discardCodeCache`

`luna://com.webos.service.webappportable/discardCodeCache`

Handles the discard code cache.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/discardCodeCache '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwebprocesssize"></a>
## `getWebProcessSize`

`luna://com.webos.service.webappportable/getWebProcessSize`

Returns the web process size.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/getWebProcessSize '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="killapp"></a>
## `killApp`

`luna://com.webos.service.webappportable/killApp`

Handles the kill app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/killApp '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchapp"></a>
## `launchApp`

`luna://com.webos.service.webappportable/launchApp`

Launches the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/launchApp '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listrunningapps"></a>
## `listRunningApps`

`luna://com.webos.service.webappportable/listRunningApps`

Lists the running apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/listRunningApps '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="logcontrol"></a>
## `logControl`

`luna://com.webos.service.webappportable/logControl`

Handles the log control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/logControl '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pauseapp"></a>
## `pauseApp`

`luna://com.webos.service.webappportable/pauseApp`

Pauses the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/pauseApp '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setinspectorenable"></a>
## `setInspectorEnable`

`luna://com.webos.service.webappportable/setInspectorEnable`

Sets the inspector enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/setInspectorEnable '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="webprocesscreated"></a>
## `webProcessCreated`

`luna://com.webos.service.webappportable/webProcessCreated`

Handles the web process created.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.webappportable/webProcessCreated '{}'
```

> ACG groups: applications.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
