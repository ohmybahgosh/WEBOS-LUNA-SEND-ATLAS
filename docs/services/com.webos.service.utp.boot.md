# `com.webos.service.utp.boot`

UTP boot helper that performs boot and returns the last channel ID. Opaque/. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`boot`](#boot) | private |  | misc | inferred | Handles the boot. |
| [`getLastChannelId`](#getlastchannelid) | private |  | misc | inferred | Returns the last channel ID. |

<a id="boot"></a>
## `boot`

`luna://com.webos.service.utp.boot/boot`

Handles the boot.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.boot/boot '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastchannelid"></a>
## `getLastChannelId`

`luna://com.webos.service.utp.boot/getLastChannelId`

Returns the last channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `channelId` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.utp.boot/getLastChannelId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
