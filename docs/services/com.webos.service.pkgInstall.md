# `com.webos.service.pkgInstall`

Package installer service: installs, removes, and cancels packages, queries install capacity, and reports status.

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancel`](#cancel) | private |  | misc | documented | Cancels the pkg install. |
| [`install`](#install) | private |  | misc | documented | Installs the pkg install. |
| [`internal/start`](#internal_start) | private |  | misc | inferred | Starts the pkg install (internal) |
| [`queryInstallCapacity`](#queryinstallcapacity) | private |  | misc | documented | Queries the install capacity. |
| [`remove`](#remove) | private |  | misc | documented | Removes the pkg install. ⚠️ |
| [`status`](#status) | private |  | misc | documented | Handles the status. |

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.pkgInstall/cancel`

Cancels the pkg install.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of package to be cancel. |

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/cancel '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="install"></a>
## `install`

`luna://com.webos.service.pkgInstall/install`

Installs the pkg install.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of application to be installed. |
| `target` | Object (optional) |
| `type` | String (optional) Indicates install type. If type is stub install stub app, else install full app Possible values: stub, op |
| `silence` | Boolean (optional) Indicates install performed without any user notification. Default is true Default: True |
| `wait` | Boolean (optional) request for multiple sequential installation Default: False |
| `subscribe` | Boolean (optional) Subscribe this call and subscribers can receive install progress. |

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/install '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_start"></a>
## `internal/start`

`luna://com.webos.service.pkgInstall/internal/start`

Starts the pkg install (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/internal/start '{}'
```

> ACG groups: pkginstalld.internal. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="queryinstallcapacity"></a>
## `queryInstallCapacity`

`luna://com.webos.service.pkgInstall/queryInstallCapacity`

Queries the install capacity.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of package to be checked. |
| `size` | Number (required) Packed package byte size. |
| `uncompressedSize` | Number (required) Unpacked package byte size. |
| `freeupSpace` | Boolean (optional) Request to free up internal storage. Default: False |
| `dependencies` | Array (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/queryInstallCapacity '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="remove"></a>
## `remove` ⚠️ DANGEROUS

`luna://com.webos.service.pkgInstall/remove`

Removes the pkg install.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of application to be removed. |
| `type` | String (optional) Indicates remove type. If system app need to initialze, type should be initialize. Possible values: initialize |
| `subscribe` | Boolean (optional) Subscribe this call and subscribers can receive remove progress. |

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/remove '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.pkgInstall/status`

Handles the status.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe this call and subscribers can receive app version status changes. |

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/status '{}'
```

> ACG groups: configurator.callbacks, pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
