# `com.webos.service.pkgInstall`

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancel`](#cancel) | private |  | misc | Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented). |
| [`install`](#install) | private |  | misc | Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented). |
| [`internal/start`](#internal_start) | private |  | misc | Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented). |
| [`queryInstallCapacity`](#queryinstallcapacity) | private |  | misc | Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented). |
| [`remove`](#remove) | private |  | misc | Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented). ⚠️ |
| [`status`](#status) | private |  | misc | Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented). |

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.pkgInstall/cancel`

Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/cancel '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="install"></a>
## `install`

`luna://com.webos.service.pkgInstall/install`

Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/install '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_start"></a>
## `internal/start`

`luna://com.webos.service.pkgInstall/internal/start`

Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/internal/start '{}'
```

> ACG groups: pkginstalld.internal. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="queryinstallcapacity"></a>
## `queryInstallCapacity`

`luna://com.webos.service.pkgInstall/queryInstallCapacity`

Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/queryInstallCapacity '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="remove"></a>
## `remove` ⚠️ DANGEROUS

`luna://com.webos.service.pkgInstall/remove`

Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/remove '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.pkgInstall/status`

Method on com.webos.service.pkgInstall (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgInstall/status '{}'
```

> ACG groups: configurator.callbacks, pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
