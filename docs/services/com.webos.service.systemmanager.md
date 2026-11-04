# `com.webos.service.systemmanager`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getBootStatus`](#getbootstatus) | public |  | misc | Getter on com.webos.service.systemmanager (introspected on-device; parameters undocumented). |

<a id="getbootstatus"></a>
## `getBootStatus`

`luna://com.webos.service.systemmanager/getBootStatus`

Getter on com.webos.service.systemmanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.systemmanager/getBootStatus '{}'
```

> ACG groups: private, public, system, settings, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
