# `com.webos.app.photovideo.preview`

Helper for the photo/video preview app that lists connected storage devices and reports their status via ActivityManager callbacks. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`deviceStatusByActivitymanager`](#devicestatusbyactivitymanager) | private |  | activity | inferred | Handles the device status by activitymanager. |
| [`listDevicesByActivitymanager`](#listdevicesbyactivitymanager) | private |  | activity | inferred | Lists the devices by activitymanager. |

<a id="devicestatusbyactivitymanager"></a>
## `deviceStatusByActivitymanager`

`luna://com.webos.app.photovideo.preview/deviceStatusByActivitymanager`

Handles the device status by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.photovideo.preview/deviceStatusByActivitymanager '{}'
```

> ACG groups: configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listdevicesbyactivitymanager"></a>
## `listDevicesByActivitymanager`

`luna://com.webos.app.photovideo.preview/listDevicesByActivitymanager`

Lists the devices by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.app.photovideo.preview/listDevicesByActivitymanager '{}'
```

> ACG groups: configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
