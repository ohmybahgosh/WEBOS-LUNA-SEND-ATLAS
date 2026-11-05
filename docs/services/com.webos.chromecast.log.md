# `com.webos.chromecast.log`

Logging helper for the built-in Chromecast/Google Cast component: starts and stops log capture. Narrow diagnostic role. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`start`](#start) | private |  | security | inferred | Starts the chromecast log. |
| [`stop`](#stop) | private |  | security | inferred | Stops the chromecast log. |

<a id="start"></a>
## `start`

`luna://com.webos.chromecast.log/start`

Starts the chromecast log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.chromecast.log/start '{}'
```

> ACG groups: com.webos.chromecast.log.group, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.chromecast.log/stop`

Stops the chromecast log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.chromecast.log/stop '{}'
```

> ACG groups: com.webos.chromecast.log.group, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
