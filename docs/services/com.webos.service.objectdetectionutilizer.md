# `com.webos.service.objectdetectionutilizer`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getStatus`](#getstatus) | private |  | misc | Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented). |
| [`setStatus`](#setstatus) | private |  | misc | Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented). |
| [`start`](#start) | private |  | misc | Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented). |
| [`stop`](#stop) | private |  | misc | Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented). |

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.objectdetectionutilizer/getStatus`

Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.objectdetectionutilizer/getStatus '{}'
```

> ACG groups: objectdetectionutilizer.query, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setstatus"></a>
## `setStatus`

`luna://com.webos.service.objectdetectionutilizer/setStatus`

Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.objectdetectionutilizer/setStatus '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, objectdetectionutilizer.operation, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.objectdetectionutilizer/start`

Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.objectdetectionutilizer/start '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, objectdetectionutilizer.operation, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.objectdetectionutilizer/stop`

Method on com.webos.service.objectdetectionutilizer (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.objectdetectionutilizer/stop '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, objectdetectionutilizer.operation, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
