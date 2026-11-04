# `com.webos.service.utp.boot`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`boot`](#boot) | private |  | misc | Method on com.webos.service.utp.boot (introspected on-device; parameters undocumented). |
| [`getLastChannelId`](#getlastchannelid) | private |  | misc | Getter on com.webos.service.utp.boot (introspected on-device; parameters undocumented). |

<a id="boot"></a>
## `boot`

`luna://com.webos.service.utp.boot/boot`

Method on com.webos.service.utp.boot (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.boot/boot '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastchannelid"></a>
## `getLastChannelId`

`luna://com.webos.service.utp.boot/getLastChannelId`

Getter on com.webos.service.utp.boot (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.boot/getLastChannelId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
