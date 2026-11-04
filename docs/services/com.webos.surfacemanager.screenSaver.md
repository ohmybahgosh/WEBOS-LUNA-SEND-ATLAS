# `com.webos.surfacemanager.screenSaver`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`restartUserActivityTimer`](#restartuseractivitytimer) | public |  | ui | Method on com.webos.surfacemanager.screenSaver (introspected on-device; parameters undocumented). |

<a id="restartuseractivitytimer"></a>
## `restartUserActivityTimer`

`luna://com.webos.surfacemanager.screenSaver/restartUserActivityTimer`

Method on com.webos.surfacemanager.screenSaver (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.screenSaver/restartUserActivityTimer '{}'
```

> ACG groups: private, launcher.control, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
