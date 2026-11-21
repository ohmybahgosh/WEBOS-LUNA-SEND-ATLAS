# `com.palm.applicationManager`

Legacy Palm/HP webOS application manager: launches, closes and lists installed apps and their launch points, and reports running apps.

8 methods.  Platforms seen: HP webOS, Palm, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | root |  | apps | documented | Closes a running process |
| [`closeByAppId`](#closebyappid) | private |  | apps | documented | Closes the by app ID. |
| [`launch`](#launch) | root |  | apps | documented | Launches an app |
| [`launchDefaultApp`](#launchdefaultapp) | private |  | apps | documented | Launches the default app. |
| [`listApps`](#listapps) | private |  | apps | documented | Lists the apps. |
| [`listLaunchPoints`](#listlaunchpoints) | root |  | apps | documented | Lists all installed apps/launch points |
| [`rescan`](#rescan) | root |  | apps | documented | Refreshes the Launcher |
| [`running`](#running) | root |  | apps | documented | Lists running apps with process ids |

<a id="close"></a>
## `close`

`luna://com.palm.applicationManager/close`

Closes a running process

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `processId` | string |

```sh
luna-send -n 1 palm://com.palm.applicationManager/close '{"processId":"1058"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="closebyappid"></a>
## `closeByAppId`

`luna://com.palm.applicationManager/closeByAppId`

Closes the by app ID.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Application ID to be closed. |

```sh
luna-send -n 1 -f luna://com.palm.applicationManager/closeByAppId '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launch"></a>
## `launch`

`luna://com.palm.applicationManager/launch`

Launches an app

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | string app id |
| `params` | object launch params |

```sh
luna-send -n 1 palm://com.palm.applicationManager/launch '{"id":"com.palm.app.browser","params":{"scene":"page","target":"http://www.google.com"}}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="launchdefaultapp"></a>
## `launchDefaultApp`

`luna://com.palm.applicationManager/launchDefaultApp`

Launches the default app.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (required) app category name |

```sh
luna-send -n 1 -f luna://com.palm.applicationManager/launchDefaultApp '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listapps"></a>
## `listApps`

`luna://com.palm.applicationManager/listApps`

Lists the apps.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `properties` | Array (optional) Get application information for service-user selected properties. |
| `subscribe` | Boolean (optional) listApps support subscription to notify when Apps are updated, i.e., an app is installed or removed or edit |

```sh
luna-send -n 1 -f luna://com.palm.applicationManager/listApps '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listlaunchpoints"></a>
## `listLaunchPoints`

`luna://com.palm.applicationManager/listLaunchPoints`

Lists all installed apps/launch points

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) listLaunchPoints support subscription to notify when launch points are updated, i.e., an app is installed or removed |

```sh
luna-send -n 1 "palm://com.palm.applicationManager/listLaunchPoints" "{}"
```

> Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="rescan"></a>
## `rescan`

`luna://com.palm.applicationManager/rescan`

Refreshes the Launcher

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

```sh
luna-send -n 1 palm://com.palm.applicationManager/rescan {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="running"></a>
## `running`

`luna://com.palm.applicationManager/running`

Lists running apps with process ids

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) |

```sh
luna-send -n 1 palm://com.palm.applicationManager/running '{}'
```

> Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
