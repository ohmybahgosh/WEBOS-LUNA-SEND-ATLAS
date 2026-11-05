# `com.webos.surfacemanager.home`

Surface-manager helper that reports the current Home UI state. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getCurrentHomeUIState`](#getcurrenthomeuistate) | private |  | ui | inferred | Returns the current home UI state. |

<a id="getcurrenthomeuistate"></a>
## `getCurrentHomeUIState`

`luna://com.webos.surfacemanager.home/getCurrentHomeUIState`

Returns the current home UI state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.home/getCurrentHomeUIState '{}'
```

> ACG groups: launcher.status, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
