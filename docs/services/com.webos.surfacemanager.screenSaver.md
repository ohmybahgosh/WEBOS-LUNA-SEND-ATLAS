# `com.webos.surfacemanager.screenSaver`

Screensaver helper in the surface manager; restarts the user-activity timer to defer the screensaver. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`restartUserActivityTimer`](#restartuseractivitytimer) | public |  | ui | inferred | Restarts the user activity timer. |

<a id="restartuseractivitytimer"></a>
## `restartUserActivityTimer`

`luna://com.webos.surfacemanager.screenSaver/restartUserActivityTimer`

Restarts the user activity timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.screenSaver/restartUserActivityTimer '{}'
```

> ACG groups: private, launcher.control, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
