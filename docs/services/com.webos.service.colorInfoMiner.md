# `com.webos.service.colorInfoMiner`

Appears to drive Philips-Hue-style ambient sync (hueSync): reports status and toggles automatic or manual color extraction from on-screen content. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`hueSync/getStatus`](#huesync_getstatus) | public |  | misc | inferred | Returns the status (hue sync) |
| [`hueSync/setAutoEnable`](#huesync_setautoenable) | public |  | misc | inferred | Sets the auto enable (hue sync) |
| [`hueSync/setManualEnable`](#huesync_setmanualenable) | public |  | misc | inferred | Sets the manual enable (hue sync) |
| [`startUp`](#startup) | public |  | misc | inferred | Starts the up. |

<a id="huesync_getstatus"></a>
## `hueSync/getStatus`

`luna://com.webos.service.colorInfoMiner/hueSync/getStatus`

Returns the status (hue sync)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/hueSync/getStatus '{}'
```

> ACG groups: colorInfoMiner, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="huesync_setautoenable"></a>
## `hueSync/setAutoEnable`

`luna://com.webos.service.colorInfoMiner/hueSync/setAutoEnable`

Sets the auto enable (hue sync)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/hueSync/setAutoEnable '{}'
```

> ACG groups: colorInfoMiner, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="huesync_setmanualenable"></a>
## `hueSync/setManualEnable`

`luna://com.webos.service.colorInfoMiner/hueSync/setManualEnable`

Sets the manual enable (hue sync)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/hueSync/setManualEnable '{}'
```

> ACG groups: colorInfoMiner, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startup"></a>
## `startUp`

`luna://com.webos.service.colorInfoMiner/startUp`

Starts the up.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.colorInfoMiner/startUp '{}'
```

> ACG groups: activities.callbacks, colorInfoMiner, configurator.callbacks, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
