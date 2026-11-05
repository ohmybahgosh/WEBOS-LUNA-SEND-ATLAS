# `com.example.service.native3`

Example native-service template for webOS development, with placeholder hello methods for DEV, OEM and PART build variants. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`hello`](#hello) | private |  | misc | inferred | Handles the hello. |
| [`hello_DEV`](#hello_dev) | private |  | misc | inferred | Handles the hello DEV. |
| [`hello_OEM`](#hello_oem) | private |  | misc | inferred | Handles the hello OEM. |
| [`hello_PART`](#hello_part) | private |  | misc | inferred | Handles the hello PART. |

<a id="hello"></a>
## `hello`

`luna://com.example.service.native3/hello`

Handles the hello.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.example.service.native3/hello '{}'
```

> ACG groups: native3.example. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hello_dev"></a>
## `hello_DEV`

`luna://com.example.service.native3/hello_DEV`

Handles the hello DEV.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.example.service.native3/hello_DEV '{}'
```

> ACG groups: native3_DEV.example. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hello_oem"></a>
## `hello_OEM`

`luna://com.example.service.native3/hello_OEM`

Handles the hello OEM.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.example.service.native3/hello_OEM '{}'
```

> ACG groups: native3_OEM.example. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hello_part"></a>
## `hello_PART`

`luna://com.example.service.native3/hello_PART`

Handles the hello PART.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.example.service.native3/hello_PART '{}'
```

> ACG groups: native3_PART.example. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
