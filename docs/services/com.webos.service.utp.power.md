# `com.webos.service.utp.power`

UTP power helper: registers warm-standby completion and checks whether BAM activity is required. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkBamActivityRequired`](#checkbamactivityrequired) | private |  | power | inferred | Checks the bam activity required. |
| [`registerWarmStandByComplete`](#registerwarmstandbycomplete) | private |  | power | inferred | Registers the warm stand by complete. |

<a id="checkbamactivityrequired"></a>
## `checkBamActivityRequired`

`luna://com.webos.service.utp.power/checkBamActivityRequired`

Checks the bam activity required.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.power/checkBamActivityRequired '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerwarmstandbycomplete"></a>
## `registerWarmStandByComplete`

`luna://com.webos.service.utp.power/registerWarmStandByComplete`

Registers the warm stand by complete.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.power/registerWarmStandByComplete '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
