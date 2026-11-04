# `com.webos.service.externaldevice`

15 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`gpio/getState`](#gpio_getstate) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`gpio/getStatus`](#gpio_getstatus) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`gpio/readADC`](#gpio_readadc) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`gpio/readAll`](#gpio_readall) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`gpio/setState`](#gpio_setstate) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`gpio/writeAll`](#gpio_writeall) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`humidity/getStatus`](#humidity_getstatus) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`humidity/read`](#humidity_read) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`light/getStatus`](#light_getstatus) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`light/read`](#light_read) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`rfid/getState`](#rfid_getstate) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`rfid/readTag`](#rfid_readtag) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`rfid/setState`](#rfid_setstate) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`temperature/getStatus`](#temperature_getstatus) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |
| [`temperature/read`](#temperature_read) | public |  | input | Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented). |

<a id="gpio_getstate"></a>
## `gpio/getState`

`luna://com.webos.service.externaldevice/gpio/getState`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/getState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_getstatus"></a>
## `gpio/getStatus`

`luna://com.webos.service.externaldevice/gpio/getStatus`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_readadc"></a>
## `gpio/readADC`

`luna://com.webos.service.externaldevice/gpio/readADC`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/readADC '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_readall"></a>
## `gpio/readAll`

`luna://com.webos.service.externaldevice/gpio/readAll`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/readAll '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_setstate"></a>
## `gpio/setState`

`luna://com.webos.service.externaldevice/gpio/setState`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/setState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_writeall"></a>
## `gpio/writeAll`

`luna://com.webos.service.externaldevice/gpio/writeAll`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/writeAll '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="humidity_getstatus"></a>
## `humidity/getStatus`

`luna://com.webos.service.externaldevice/humidity/getStatus`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/humidity/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="humidity_read"></a>
## `humidity/read`

`luna://com.webos.service.externaldevice/humidity/read`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/humidity/read '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="light_getstatus"></a>
## `light/getStatus`

`luna://com.webos.service.externaldevice/light/getStatus`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/light/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="light_read"></a>
## `light/read`

`luna://com.webos.service.externaldevice/light/read`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/light/read '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rfid_getstate"></a>
## `rfid/getState`

`luna://com.webos.service.externaldevice/rfid/getState`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/rfid/getState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rfid_readtag"></a>
## `rfid/readTag`

`luna://com.webos.service.externaldevice/rfid/readTag`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/rfid/readTag '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rfid_setstate"></a>
## `rfid/setState`

`luna://com.webos.service.externaldevice/rfid/setState`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/rfid/setState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="temperature_getstatus"></a>
## `temperature/getStatus`

`luna://com.webos.service.externaldevice/temperature/getStatus`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/temperature/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="temperature_read"></a>
## `temperature/read`

`luna://com.webos.service.externaldevice/temperature/read`

Method on com.webos.service.externaldevice (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/temperature/read '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
