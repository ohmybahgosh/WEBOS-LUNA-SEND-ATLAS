# `com.webos.service.systemUIManager`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`closeByAppId`](#closebyappid) | public |  | misc | Method on com.webos.service.systemUIManager (introspected on-device; parameters undocumented). |
| [`getForegroundAppInfo`](#getforegroundappinfo) | public |  | misc | Getter on com.webos.service.systemUIManager (introspected on-device; parameters undocumented). |
| [`launch`](#launch) | public |  | apps | Method on com.webos.service.systemUIManager (introspected on-device; parameters undocumented). |

<a id="closebyappid"></a>
## `closeByAppId`

`luna://com.webos.service.systemUIManager/closeByAppId`

Method on com.webos.service.systemUIManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.systemUIManager/closeByAppId '{}'
```

> ACG groups: surfaces.control, public, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundappinfo"></a>
## `getForegroundAppInfo`

`luna://com.webos.service.systemUIManager/getForegroundAppInfo`

Getter on com.webos.service.systemUIManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.systemUIManager/getForegroundAppInfo '{}'
```

> ACG groups: surfaces.status, public, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launch"></a>
## `launch`

`luna://com.webos.service.systemUIManager/launch`

Method on com.webos.service.systemUIManager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.systemUIManager/launch '{}'
```

> ACG groups: surfaces.control, public, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
