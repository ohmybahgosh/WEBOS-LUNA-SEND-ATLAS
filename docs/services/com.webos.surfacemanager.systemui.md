# `com.webos.surfacemanager.systemui`

Surface-manager system-UI helper exposing a single method to close all system UI surfaces. Narrow UI role. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closeAllSystemUI`](#closeallsystemui) | private |  | ui | inferred | Closes the all system UI. |

<a id="closeallsystemui"></a>
## `closeAllSystemUI`

`luna://com.webos.surfacemanager.systemui/closeAllSystemUI`

Closes the all system UI.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.systemui/closeAllSystemUI '{}'
```

> ACG groups: private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
