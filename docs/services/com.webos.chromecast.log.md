# `com.webos.chromecast.log`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`start`](#start) | private |  | security | Method on com.webos.chromecast.log (introspected on-device; parameters undocumented). |
| [`stop`](#stop) | private |  | security | Method on com.webos.chromecast.log (introspected on-device; parameters undocumented). |

<a id="start"></a>
## `start`

`luna://com.webos.chromecast.log/start`

Method on com.webos.chromecast.log (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.chromecast.log/start '{}'
```

> ACG groups: com.webos.chromecast.log.group, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.chromecast.log/stop`

Method on com.webos.chromecast.log (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.chromecast.log/stop '{}'
```

> ACG groups: com.webos.chromecast.log.group, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
