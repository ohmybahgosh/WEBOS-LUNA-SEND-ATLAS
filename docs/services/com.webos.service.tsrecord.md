# `com.webos.service.tsrecord`

Transport-stream recording service: initializes, loads, starts and stops TS recording and reports recording status/time and an MPD manifest. _(inferred from the service's methods)_

11 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`record/destroy`](#record_destroy) | private |  | misc | inferred | Handles the destroy (record) |
| [`record/getMPD`](#record_getmpd) | private |  | misc | inferred | Returns the MPD (record) |
| [`record/getRecInfo`](#record_getrecinfo) | private |  | misc | inferred | Returns the rec info (record) |
| [`record/getRecStatus`](#record_getrecstatus) | private |  | misc | inferred | Returns the rec status (record) |
| [`record/getRecTime`](#record_getrectime) | private |  | input | inferred | Returns the rec time (record) |
| [`record/initialize`](#record_initialize) | private |  | misc | inferred | Initializes the tsrecord (record) |
| [`record/load`](#record_load) | private |  | misc | inferred | Loads the tsrecord (record) |
| [`record/start`](#record_start) | private |  | misc | inferred | Starts the tsrecord (record) |
| [`record/stop`](#record_stop) | private |  | misc | inferred | Stops the tsrecord (record) |
| [`record/unload`](#record_unload) | private |  | misc | inferred | Unloads the tsrecord (record) |
| [`record/updateMetaData`](#record_updatemetadata) | private |  | update | inferred | Updates the meta data (record) |

<a id="record_destroy"></a>
## `record/destroy`

`luna://com.webos.service.tsrecord/record/destroy`

Handles the destroy (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/destroy '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getmpd"></a>
## `record/getMPD`

`luna://com.webos.service.tsrecord/record/getMPD`

Returns the MPD (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/getMPD '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecinfo"></a>
## `record/getRecInfo`

`luna://com.webos.service.tsrecord/record/getRecInfo`

Returns the rec info (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/getRecInfo '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecstatus"></a>
## `record/getRecStatus`

`luna://com.webos.service.tsrecord/record/getRecStatus`

Returns the rec status (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/getRecStatus '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrectime"></a>
## `record/getRecTime`

`luna://com.webos.service.tsrecord/record/getRecTime`

Returns the rec time (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/getRecTime '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_initialize"></a>
## `record/initialize`

`luna://com.webos.service.tsrecord/record/initialize`

Initializes the tsrecord (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/initialize '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_load"></a>
## `record/load`

`luna://com.webos.service.tsrecord/record/load`

Loads the tsrecord (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/load '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_start"></a>
## `record/start`

`luna://com.webos.service.tsrecord/record/start`

Starts the tsrecord (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/start '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stop"></a>
## `record/stop`

`luna://com.webos.service.tsrecord/record/stop`

Stops the tsrecord (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/stop '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_unload"></a>
## `record/unload`

`luna://com.webos.service.tsrecord/record/unload`

Unloads the tsrecord (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/unload '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_updatemetadata"></a>
## `record/updateMetaData`

`luna://com.webos.service.tsrecord/record/updateMetaData`

Updates the meta data (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tsrecord/record/updateMetaData '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
