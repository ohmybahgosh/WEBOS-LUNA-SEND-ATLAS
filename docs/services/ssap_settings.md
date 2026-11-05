# `ssap:settings`

SSAP (second-screen protocol) endpoint that sets system settings. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`setSystemSettings`](#setsystemsettings) | ssap |  | settings | documented | Public SSAP setter for system settings (same payload as the luna settingsservice call) |

<a id="setsystemsettings"></a>
## `setSystemSettings`

`ssap://settings/setSystemSettings`

Public SSAP setter for system settings (same payload as the luna settingsservice call)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 9 (2024)+ per bscpylgtv; rejected on webOS 26 firmware 43.21.60 per LG_Buddy docs  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | string |
| `settings` | object |
| `current_app` | bool |
| `public_ssap_settable_keys_G6` | <11 entries, see docs/settings-keys.md> |

```sh
{"type":"request","id":"1","uri":"ssap://settings/setSystemSettings","payload":{"category":"picture","settings":{"pictureMode":"cinema"}}}
```

> Only a subset of keys is settable via the public API (public_ssap_settable_keys_G6, taken from bscpylgtv docs). bscpylgtv `set_system_settings` / `set_system_picture_mode` ('requires WebOS v9 (2024) or newer'). LGWebOSRemote setPictureMode sends it. LG_Buddy docs: webOS 24 (9.2.2-61) accepts direct SSAP write; webOS 26 (43.21.60) rejects direct SSAP writes and legacy signed registration, but accepts the alert-backed luna route. The SSAP alias presumably dispatches to com.webos.settingsservice (not stated).

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [2](https://github.com/klattimer/LGWebOSRemote/blob/master/LGTV/remote.py), [3](https://github.com/chros73/bscpylgtv/blob/master/docs/available_settings_G6.md), [4](https://github.com/Staphylococcus/LG_Buddy/blob/main/docs/webos-testing.md)
