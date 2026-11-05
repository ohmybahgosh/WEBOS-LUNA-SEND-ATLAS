# `com.webos.service.hdcp2`

HDCP 2.x receiver service: opens/closes the HDCP link and reports status, decryption key and key inspection data. _(inferred from the service's methods)_

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`rx/close`](#rx_close) | private |  | misc | inferred | Closes the HDCP 2 (rx) |
| [`rx/debug`](#rx_debug) | private |  | misc | inferred | Handles the debug (rx) |
| [`rx/getDecryptionKey`](#rx_getdecryptionkey) | private |  | misc | inferred | Returns the decryption key (rx) |
| [`rx/getStatus`](#rx_getstatus) | private |  | misc | inferred | Returns the status (rx) |
| [`rx/inspectKey`](#rx_inspectkey) | private |  | misc | inferred | Handles the inspect key (rx) |
| [`rx/open`](#rx_open) | private |  | misc | inferred | Opens the HDCP 2 (rx) |

<a id="rx_close"></a>
## `rx/close`

`luna://com.webos.service.hdcp2/rx/close`

Closes the HDCP 2 (rx)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hdcp2/rx/close '{}'
```

> ACG groups: hdcp2.rx, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rx_debug"></a>
## `rx/debug`

`luna://com.webos.service.hdcp2/rx/debug`

Handles the debug (rx)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hdcp2/rx/debug '{}'
```

> ACG groups: hdcp2.rx, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rx_getdecryptionkey"></a>
## `rx/getDecryptionKey`

`luna://com.webos.service.hdcp2/rx/getDecryptionKey`

Returns the decryption key (rx)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hdcp2/rx/getDecryptionKey '{}'
```

> ACG groups: hdcp2.rx, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rx_getstatus"></a>
## `rx/getStatus`

`luna://com.webos.service.hdcp2/rx/getStatus`

Returns the status (rx)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hdcp2/rx/getStatus '{}'
```

> ACG groups: hdcp2.rx, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rx_inspectkey"></a>
## `rx/inspectKey`

`luna://com.webos.service.hdcp2/rx/inspectKey`

Handles the inspect key (rx)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hdcp2/rx/inspectKey '{}'
```

> ACG groups: hdcp2.rx, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rx_open"></a>
## `rx/open`

`luna://com.webos.service.hdcp2/rx/open`

Opens the HDCP 2 (rx)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hdcp2/rx/open '{}'
```

> ACG groups: hdcp2.rx, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
