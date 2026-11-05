# `com.webos.service.updatefw.utilmgr`

Firmware-update utility manager: triggers auto-install and master download, manages recurring update times and ticket/build info. _(inferred from the service's methods)_

11 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`autoInstall`](#autoinstall) | public |  | update | inferred | Handles the auto install. |
| [`downloadMaster`](#downloadmaster) | public |  | update | inferred | Downloads the master. |
| [`getRecurTimes`](#getrecurtimes) | public |  | input | inferred | Returns the recur times. |
| [`getTicketInfo`](#getticketinfo) | public |  | update | inferred | Returns the ticket info. |
| [`info`](#info) | public |  | update | inferred | Handles the info. |
| [`quit`](#quit) | public |  | update | inferred | Quits the updatefw utilmgr. |
| [`saveBuildInfo`](#savebuildinfo) | public |  | update | inferred | Saves the build info. |
| [`saveJInfo`](#savejinfo) | public |  | update | inferred | Saves the j info. |
| [`savePlatformInfo`](#saveplatforminfo) | public |  | update | inferred | Saves the platform info. |
| [`setRecurTimes`](#setrecurtimes) | public |  | input | inferred | Sets the recur times. |
| [`writeEnyoTicketInfo`](#writeenyoticketinfo) | public |  | update | inferred | Writes the enyo ticket info. |

<a id="autoinstall"></a>
## `autoInstall`

`luna://com.webos.service.updatefw.utilmgr/autoInstall`

Handles the auto install.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/autoInstall '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, private, public, services, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="downloadmaster"></a>
## `downloadMaster`

`luna://com.webos.service.updatefw.utilmgr/downloadMaster`

Downloads the master.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/downloadMaster '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrecurtimes"></a>
## `getRecurTimes`

`luna://com.webos.service.updatefw.utilmgr/getRecurTimes`

Returns the recur times.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/getRecurTimes '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getticketinfo"></a>
## `getTicketInfo`

`luna://com.webos.service.updatefw.utilmgr/getTicketInfo`

Returns the ticket info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/getTicketInfo '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.updatefw.utilmgr/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/info '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.updatefw.utilmgr/quit`

Quits the updatefw utilmgr.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/quit '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="savebuildinfo"></a>
## `saveBuildInfo`

`luna://com.webos.service.updatefw.utilmgr/saveBuildInfo`

Saves the build info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/saveBuildInfo '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="savejinfo"></a>
## `saveJInfo`

`luna://com.webos.service.updatefw.utilmgr/saveJInfo`

Saves the j info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/saveJInfo '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="saveplatforminfo"></a>
## `savePlatformInfo`

`luna://com.webos.service.updatefw.utilmgr/savePlatformInfo`

Saves the platform info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/savePlatformInfo '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setrecurtimes"></a>
## `setRecurTimes`

`luna://com.webos.service.updatefw.utilmgr/setRecurTimes`

Sets the recur times.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/setRecurTimes '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="writeenyoticketinfo"></a>
## `writeEnyoTicketInfo`

`luna://com.webos.service.updatefw.utilmgr/writeEnyoTicketInfo`

Writes the enyo ticket info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.updatefw.utilmgr/writeEnyoTicketInfo '{}'
```

> ACG groups: private, public, updatefw.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
