# `com.webos.service.tvlinkcmdprocessor`

TV-Link command processor: receives commands and reports OSD lock status. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`osdLockStatus`](#osdlockstatus) | public |  | misc | inferred | Handles the OSD lock status. |
| [`receiveCommand`](#receivecommand) | public |  | misc | inferred | Handles the receive command. |

<a id="osdlockstatus"></a>
## `osdLockStatus`

`luna://com.webos.service.tvlinkcmdprocessor/osdLockStatus`

Handles the OSD lock status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvlinkcmdprocessor/osdLockStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="receivecommand"></a>
## `receiveCommand`

`luna://com.webos.service.tvlinkcmdprocessor/receiveCommand`

Handles the receive command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvlinkcmdprocessor/receiveCommand '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
