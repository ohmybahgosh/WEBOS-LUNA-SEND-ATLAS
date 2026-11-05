# `com.webos.service.externaldevice`

External-device I/O service: reads and writes GPIO and ADC pins and reads attached humidity, light, temperature and RFID peripherals. _(inferred from the service's methods)_

15 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`gpio/getState`](#gpio_getstate) | public |  | input | inferred | Returns the state (gpio) |
| [`gpio/getStatus`](#gpio_getstatus) | public |  | input | inferred | Returns the status (gpio) |
| [`gpio/readADC`](#gpio_readadc) | public |  | input | inferred | Reads the ADC (gpio) |
| [`gpio/readAll`](#gpio_readall) | public |  | input | inferred | Reads the all (gpio) |
| [`gpio/setState`](#gpio_setstate) | public |  | input | inferred | Sets the state (gpio) |
| [`gpio/writeAll`](#gpio_writeall) | public |  | input | inferred | Writes the all (gpio) |
| [`humidity/getStatus`](#humidity_getstatus) | public |  | input | inferred | Returns the status (humidity) |
| [`humidity/read`](#humidity_read) | public |  | input | inferred | Reads the externaldevice (humidity) |
| [`light/getStatus`](#light_getstatus) | public |  | input | inferred | Returns the status (light) |
| [`light/read`](#light_read) | public |  | input | inferred | Reads the externaldevice (light) |
| [`rfid/getState`](#rfid_getstate) | public |  | input | inferred | Returns the state (rfid) |
| [`rfid/readTag`](#rfid_readtag) | public |  | input | inferred | Reads the tag (rfid) |
| [`rfid/setState`](#rfid_setstate) | public |  | input | inferred | Sets the state (rfid) |
| [`temperature/getStatus`](#temperature_getstatus) | public |  | input | inferred | Returns the status (temperature) |
| [`temperature/read`](#temperature_read) | public |  | input | inferred | Reads the externaldevice (temperature) |

<a id="gpio_getstate"></a>
## `gpio/getState`

`luna://com.webos.service.externaldevice/gpio/getState`

Returns the state (gpio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/getState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_getstatus"></a>
## `gpio/getStatus`

`luna://com.webos.service.externaldevice/gpio/getStatus`

Returns the status (gpio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_readadc"></a>
## `gpio/readADC`

`luna://com.webos.service.externaldevice/gpio/readADC`

Reads the ADC (gpio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/readADC '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_readall"></a>
## `gpio/readAll`

`luna://com.webos.service.externaldevice/gpio/readAll`

Reads the all (gpio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/readAll '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_setstate"></a>
## `gpio/setState`

`luna://com.webos.service.externaldevice/gpio/setState`

Sets the state (gpio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/setState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gpio_writeall"></a>
## `gpio/writeAll`

`luna://com.webos.service.externaldevice/gpio/writeAll`

Writes the all (gpio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/gpio/writeAll '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="humidity_getstatus"></a>
## `humidity/getStatus`

`luna://com.webos.service.externaldevice/humidity/getStatus`

Returns the status (humidity)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/humidity/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="humidity_read"></a>
## `humidity/read`

`luna://com.webos.service.externaldevice/humidity/read`

Reads the externaldevice (humidity)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/humidity/read '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="light_getstatus"></a>
## `light/getStatus`

`luna://com.webos.service.externaldevice/light/getStatus`

Returns the status (light)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/light/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="light_read"></a>
## `light/read`

`luna://com.webos.service.externaldevice/light/read`

Reads the externaldevice (light)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/light/read '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rfid_getstate"></a>
## `rfid/getState`

`luna://com.webos.service.externaldevice/rfid/getState`

Returns the state (rfid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/rfid/getState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rfid_readtag"></a>
## `rfid/readTag`

`luna://com.webos.service.externaldevice/rfid/readTag`

Reads the tag (rfid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/rfid/readTag '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="rfid_setstate"></a>
## `rfid/setState`

`luna://com.webos.service.externaldevice/rfid/setState`

Sets the state (rfid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/rfid/setState '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="temperature_getstatus"></a>
## `temperature/getStatus`

`luna://com.webos.service.externaldevice/temperature/getStatus`

Returns the status (temperature)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/temperature/getStatus '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="temperature_read"></a>
## `temperature/read`

`luna://com.webos.service.externaldevice/temperature/read`

Reads the externaldevice (temperature)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.externaldevice/temperature/read '{}'
```

> ACG groups: externaldevice.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
