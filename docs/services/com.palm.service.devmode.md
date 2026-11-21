# `com.palm.service.devmode`

Legacy Palm developer-mode service: enables or disables developer mode and retrieves its passphrase and status. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDevMode`](#getdevmode) | public |  | devmode | documented | Returns the dev mode. |
| [`getPassphrase`](#getpassphrase) | public |  | devmode | documented | Returns the passphrase. |
| [`info`](#info) | public |  | devmode | inferred | Handles the info. |
| [`quit`](#quit) | public |  | devmode | inferred | Quits the devmode. |
| [`setDevMode`](#setdevmode) | public |  | devmode | documented | Sets the dev mode. |

<a id="getdevmode"></a>
## `getDevMode`

`luna://com.palm.service.devmode/getDevMode`

Returns the dev mode.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.devmode/getDevMode '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Takes no request parameters.  Returns `enabled` (Boolean) indicating whether Developer Mode is on.  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpassphrase"></a>
## `getPassphrase`

`luna://com.palm.service.devmode/getPassphrase`

Returns the passphrase.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.devmode/getPassphrase '{}'
```

> ACG groups: private, public, system.devmode. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Takes no request parameters.  Returns a 6-character `passphrase` derived from the device nduid.  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.palm.service.devmode/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.service.devmode/info '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.palm.service.devmode/quit`

Quits the devmode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.service.devmode/quit '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdevmode"></a>
## `setDevMode`

`luna://com.palm.service.devmode/setDevMode`

Sets the dev mode.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enabled` | Boolean (required) True to enable Developer Mode, false to disable. |

```sh
luna-send -n 1 -f luna://com.palm.service.devmode/setDevMode '{}'
```

> ACG groups: private, public, system.devmode. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Enabling or disabling Developer Mode reboots the TV.  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
