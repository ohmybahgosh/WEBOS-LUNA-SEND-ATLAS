# `com.webos.service.mycar`

Opaque service exposing a single handlePushMessage method, apparently handling a 'MyCar' push-message feature. Role not inferable beyond that. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`handlePushMessage`](#handlepushmessage) | private |  | misc | inferred | Handles the push message. |

<a id="handlepushmessage"></a>
## `handlePushMessage`

`luna://com.webos.service.mycar/handlePushMessage`

Handles the push message.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mycar/handlePushMessage '{}'
```

> ACG groups: mycar.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
