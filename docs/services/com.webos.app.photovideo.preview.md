# `com.webos.app.photovideo.preview`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`deviceStatusByActivitymanager`](#devicestatusbyactivitymanager) | private |  | activity | Method on com.webos.app.photovideo.preview (from on-device permission registry; parameters undocumented). |
| [`listDevicesByActivitymanager`](#listdevicesbyactivitymanager) | private |  | activity | Method on com.webos.app.photovideo.preview (from on-device permission registry; parameters undocumented). |

<a id="devicestatusbyactivitymanager"></a>
## `deviceStatusByActivitymanager`

`luna://com.webos.app.photovideo.preview/deviceStatusByActivitymanager`

Method on com.webos.app.photovideo.preview (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.app.photovideo.preview/deviceStatusByActivitymanager '{}'
```

> ACG groups: configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listdevicesbyactivitymanager"></a>
## `listDevicesByActivitymanager`

`luna://com.webos.app.photovideo.preview/listDevicesByActivitymanager`

Method on com.webos.app.photovideo.preview (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.app.photovideo.preview/listDevicesByActivitymanager '{}'
```

> ACG groups: configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
