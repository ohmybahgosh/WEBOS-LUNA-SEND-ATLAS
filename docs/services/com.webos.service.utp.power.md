# `com.webos.service.utp.power`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`checkBamActivityRequired`](#checkbamactivityrequired) | private |  | power | Method on com.webos.service.utp.power (introspected on-device; parameters undocumented). |
| [`registerWarmStandByComplete`](#registerwarmstandbycomplete) | private |  | power | Method on com.webos.service.utp.power (introspected on-device; parameters undocumented). |

<a id="checkbamactivityrequired"></a>
## `checkBamActivityRequired`

`luna://com.webos.service.utp.power/checkBamActivityRequired`

Method on com.webos.service.utp.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.power/checkBamActivityRequired '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerwarmstandbycomplete"></a>
## `registerWarmStandByComplete`

`luna://com.webos.service.utp.power/registerWarmStandByComplete`

Method on com.webos.service.utp.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.power/registerWarmStandByComplete '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
