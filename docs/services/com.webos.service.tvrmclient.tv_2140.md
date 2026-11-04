# `com.webos.service.tvrmclient.tv_2140`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getData`](#getdata) | private |  | tv-broadcast | Getter on com.webos.service.tvrmclient.tv_2140 (introspected on-device; parameters undocumented). |

<a id="getdata"></a>
## `getData`

`luna://com.webos.service.tvrmclient.tv_2140/getData`

Getter on com.webos.service.tvrmclient.tv_2140 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvrmclient.tv_2140/getData '{}'
```

> ACG groups: private, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
