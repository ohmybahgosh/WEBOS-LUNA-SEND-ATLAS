# `com.webos.service.colorInfoMiner`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`hueSync/getStatus`](#huesync_getstatus) | public |  | misc | Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented). |
| [`hueSync/setAutoEnable`](#huesync_setautoenable) | public |  | misc | Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented). |
| [`hueSync/setManualEnable`](#huesync_setmanualenable) | public |  | misc | Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented). |
| [`startUp`](#startup) | public |  | misc | Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented). |

<a id="huesync_getstatus"></a>
## `hueSync/getStatus`

`luna://com.webos.service.colorInfoMiner/hueSync/getStatus`

Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/hueSync/getStatus '{}'
```

> ACG groups: colorInfoMiner, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="huesync_setautoenable"></a>
## `hueSync/setAutoEnable`

`luna://com.webos.service.colorInfoMiner/hueSync/setAutoEnable`

Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/hueSync/setAutoEnable '{}'
```

> ACG groups: colorInfoMiner, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="huesync_setmanualenable"></a>
## `hueSync/setManualEnable`

`luna://com.webos.service.colorInfoMiner/hueSync/setManualEnable`

Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/hueSync/setManualEnable '{}'
```

> ACG groups: colorInfoMiner, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startup"></a>
## `startUp`

`luna://com.webos.service.colorInfoMiner/startUp`

Method on com.webos.service.colorInfoMiner (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/startUp '{}'
```

> ACG groups: activities.callbacks, colorInfoMiner, configurator.callbacks, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
