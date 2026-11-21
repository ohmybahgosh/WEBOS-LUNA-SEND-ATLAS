# `com.webos.service.firstuse`

First-use/initial-setup service: reads and writes the settings captured during the TV's out-of-box setup flow. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getSettings`](#getsettings) | private |  | settings | documented | Returns the settings. |
| [`setSettings`](#setsettings) | private |  | settings | documented | Sets the settings. |

<a id="getsettings"></a>
## `getSettings`

`luna://com.webos.service.firstuse/getSettings`

Returns the settings.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Setting key to read (must be a supported first-use key). |
| `params` | Object (optional) Extra parameters for the key lookup. |

```sh
luna-send -n 1 -f luna://com.webos.service.firstuse/getSettings '{}'
```

> ACG groups: configurator.callbacks, service.firstuse. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsettings"></a>
## `setSettings`

`luna://com.webos.service.firstuse/setSettings`

Sets the settings.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Setting key to write (must be a supported first-use key). |
| `value` | Any (required) Value to set for the key. |

```sh
luna-send -n 1 -f luna://com.webos.service.firstuse/setSettings '{}'
```

> ACG groups: configurator.callbacks, service.firstuse. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
