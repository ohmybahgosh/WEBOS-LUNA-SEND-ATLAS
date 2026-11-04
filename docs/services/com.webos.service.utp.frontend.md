# `com.webos.service.utp.frontend`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getSignalStatusforSelfCheck`](#getsignalstatusforselfcheck) | private |  | misc | Getter on com.webos.service.utp.frontend (introspected on-device; parameters undocumented). |

<a id="getsignalstatusforselfcheck"></a>
## `getSignalStatusforSelfCheck`

`luna://com.webos.service.utp.frontend/getSignalStatusforSelfCheck`

Getter on com.webos.service.utp.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.frontend/getSignalStatusforSelfCheck '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
