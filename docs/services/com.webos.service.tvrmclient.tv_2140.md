# `com.webos.service.tvrmclient.tv_2140`

TV resource-manager client instance; exposes a single getData method. Opaque beyond that. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getData`](#getdata) | private |  | tv-broadcast | inferred | Returns the data. |

<a id="getdata"></a>
## `getData`

`luna://com.webos.service.tvrmclient.tv_2140/getData`

Returns the data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrmclient.tv_2140/getData '{}'
```

> ACG groups: private, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
