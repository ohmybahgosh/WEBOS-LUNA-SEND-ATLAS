# `com.webos.service.utp.frontend`

Broadcast tuner front-end helper; reports signal status for self-check. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getSignalStatusforSelfCheck`](#getsignalstatusforselfcheck) | private |  | misc | inferred | Returns the signal status (self-check) |

<a id="getsignalstatusforselfcheck"></a>
## `getSignalStatusforSelfCheck`

`luna://com.webos.service.utp.frontend/getSignalStatusforSelfCheck`

Returns the signal status (self-check)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.frontend/getSignalStatusforSelfCheck '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
