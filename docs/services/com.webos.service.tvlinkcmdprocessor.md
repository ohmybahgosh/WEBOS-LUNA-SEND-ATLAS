# `com.webos.service.tvlinkcmdprocessor`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`osdLockStatus`](#osdlockstatus) | public |  | misc | Method on com.webos.service.tvlinkcmdprocessor (introspected on-device; parameters undocumented). |
| [`receiveCommand`](#receivecommand) | public |  | misc | Method on com.webos.service.tvlinkcmdprocessor (introspected on-device; parameters undocumented). |

<a id="osdlockstatus"></a>
## `osdLockStatus`

`luna://com.webos.service.tvlinkcmdprocessor/osdLockStatus`

Method on com.webos.service.tvlinkcmdprocessor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvlinkcmdprocessor/osdLockStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="receivecommand"></a>
## `receiveCommand`

`luna://com.webos.service.tvlinkcmdprocessor/receiveCommand`

Method on com.webos.service.tvlinkcmdprocessor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvlinkcmdprocessor/receiveCommand '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
