# `com.webos.service.settingsui`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getTargetPanelEnable`](#gettargetpanelenable) | private |  | settings | Method on com.webos.service.settingsui (from on-device permission registry; parameters undocumented). |
| [`startDebugMode`](#startdebugmode) | private |  | settings | Method on com.webos.service.settingsui (from on-device permission registry; parameters undocumented). |

<a id="gettargetpanelenable"></a>
## `getTargetPanelEnable`

`luna://com.webos.service.settingsui/getTargetPanelEnable`

Method on com.webos.service.settingsui (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.settingsui/getTargetPanelEnable '{}'
```

> ACG groups: com.webos.service.settingsui, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startdebugmode"></a>
## `startDebugMode`

`luna://com.webos.service.settingsui/startDebugMode`

Method on com.webos.service.settingsui (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.settingsui/startDebugMode '{}'
```

> ACG groups: com.webos.service.settingsui, configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
