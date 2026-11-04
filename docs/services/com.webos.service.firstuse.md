# `com.webos.service.firstuse`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getSettings`](#getsettings) | private |  | settings | Method on com.webos.service.firstuse (from on-device permission registry; parameters undocumented). |
| [`setSettings`](#setsettings) | private |  | settings | Method on com.webos.service.firstuse (from on-device permission registry; parameters undocumented). |

<a id="getsettings"></a>
## `getSettings`

`luna://com.webos.service.firstuse/getSettings`

Method on com.webos.service.firstuse (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.firstuse/getSettings '{}'
```

> ACG groups: configurator.callbacks, service.firstuse. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsettings"></a>
## `setSettings`

`luna://com.webos.service.firstuse/setSettings`

Method on com.webos.service.firstuse (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.firstuse/setSettings '{}'
```

> ACG groups: configurator.callbacks, service.firstuse. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
