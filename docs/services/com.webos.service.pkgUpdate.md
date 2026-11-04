# `com.webos.service.pkgUpdate`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`check`](#check) | private |  | update | Method on com.webos.service.pkgUpdate (from on-device permission registry; parameters undocumented). |
| [`statusAll`](#statusall) | private |  | update | Method on com.webos.service.pkgUpdate (from on-device permission registry; parameters undocumented). |

<a id="check"></a>
## `check`

`luna://com.webos.service.pkgUpdate/check`

Method on com.webos.service.pkgUpdate (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgUpdate/check '{}'
```

> ACG groups: configurator.callbacks, pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="statusall"></a>
## `statusAll`

`luna://com.webos.service.pkgUpdate/statusAll`

Method on com.webos.service.pkgUpdate (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pkgUpdate/statusAll '{}'
```

> ACG groups: pkginstalld.internal, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
