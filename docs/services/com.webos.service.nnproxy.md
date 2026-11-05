# `com.webos.service.nnproxy`

Neural-network proxy for picture processing; exposes get/set and debug for picture-related NN data. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`picture/debug`](#picture_debug) | private |  | misc | inferred | Handles the debug (picture) |
| [`picture/get`](#picture_get) | private |  | misc | inferred | Returns the nnproxy (picture) |
| [`picture/set`](#picture_set) | private |  | misc | inferred | Sets the nnproxy (picture) |

<a id="picture_debug"></a>
## `picture/debug`

`luna://com.webos.service.nnproxy/picture/debug`

Handles the debug (picture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nnproxy/picture/debug '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="picture_get"></a>
## `picture/get`

`luna://com.webos.service.nnproxy/picture/get`

Returns the nnproxy (picture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nnproxy/picture/get '{}'
```

> ACG groups: system, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="picture_set"></a>
## `picture/set`

`luna://com.webos.service.nnproxy/picture/set`

Sets the nnproxy (picture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nnproxy/picture/set '{}'
```

> ACG groups: system, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
