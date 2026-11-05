# `com.webos.statisticsManager`

Statistics manager exposing a single call to save statistics; its broader role is not inferable. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`saveStatistics`](#savestatistics) | private |  | input | inferred | Saves the statistics. |

<a id="savestatistics"></a>
## `saveStatistics`

`luna://com.webos.statisticsManager/saveStatistics`

Saves the statistics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.statisticsManager/saveStatistics '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
