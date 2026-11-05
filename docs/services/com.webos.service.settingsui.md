# `com.webos.service.settingsui`

Settings-UI helper: reports target-panel-enable state and starts a debug mode. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getTargetPanelEnable`](#gettargetpanelenable) | private |  | settings | inferred | Returns the target panel enable. |
| [`startDebugMode`](#startdebugmode) | private |  | settings | inferred | Starts the debug mode. |

<a id="gettargetpanelenable"></a>
## `getTargetPanelEnable`

`luna://com.webos.service.settingsui/getTargetPanelEnable`

Returns the target panel enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.settingsui/getTargetPanelEnable '{}'
```

> ACG groups: com.webos.service.settingsui, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startdebugmode"></a>
## `startDebugMode`

`luna://com.webos.service.settingsui/startDebugMode`

Starts the debug mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.settingsui/startDebugMode '{}'
```

> ACG groups: com.webos.service.settingsui, configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
