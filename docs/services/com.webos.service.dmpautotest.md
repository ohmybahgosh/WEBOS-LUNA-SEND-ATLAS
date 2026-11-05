# `com.webos.service.dmpautotest`

Auto-test helper exposing a single ActivityManager callback; appears to support automated DMP testing. Opaque/. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`activityCallback`](#activitycallback) | private |  | activity | inferred | Handles the activity callback. |

<a id="activitycallback"></a>
## `activityCallback`

`luna://com.webos.service.dmpautotest/activityCallback`

Handles the activity callback.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmpautotest/activityCallback '{}'
```

> ACG groups: configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
