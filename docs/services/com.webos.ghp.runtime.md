# `com.webos.ghp.runtime`

Appears to be a smart-home runtime exposing homes, rooms, structures, controllers and devices and sending commands to them, with a web-view URL. _(inferred from the service's methods)_

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getController`](#getcontroller) | private |  | input | inferred | Returns the controller. |
| [`getDevices`](#getdevices) | private |  | input | inferred | Returns the devices. |
| [`getPLPAL`](#getplpal) | private |  | input | inferred | Returns the PLPAL. |
| [`getRooms`](#getrooms) | private |  | input | inferred | Returns the rooms. |
| [`getStatus`](#getstatus) | private |  | input | inferred | Returns the status. |
| [`getStructures`](#getstructures) | private |  | input | inferred | Returns the structures. |
| [`getWebViewUrl`](#getwebviewurl) | private |  | input | inferred | Returns the web view URL. |
| [`sendCommand`](#sendcommand) | private |  | input | inferred | Sends the command. |
| [`setController`](#setcontroller) | private |  | input | inferred | Sets the controller. |
| [`setPLPAL`](#setplpal) | private |  | input | inferred | Sets the PLPAL. |

<a id="getcontroller"></a>
## `getController`

`luna://com.webos.ghp.runtime/getController`

Returns the controller.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `isEnableAppId` |  |
| `isEnabled` |  |

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/getController '{}'
```

> ACG groups: all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.ghp.runtime/getDevices`

Returns the devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/getDevices '{}'
```

> ACG groups: private, all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getplpal"></a>
## `getPLPAL`

`luna://com.webos.ghp.runtime/getPLPAL`

Returns the PLPAL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `application_version_number` |  |
| `channel_frequency` |  |
| `connectivity_status` |  |
| `debug_mode` |  |
| `developer_mode` |  |
| `device_model` |  |
| `device_version` |  |
| `ethernet_dns_sd_supported` |  |
| `manufacturer` |  |
| `network_id_hash` |  |
| `platform_build_type` |  |
| `platform_name` |  |
| `platform_version_number` |  |
| `snr` |  |
| `standby_capabilities` |  |
| `type` |  |
| `wifi_dns_sd_supported` |  |
| `zone_index` |  |

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/getPLPAL '{}'
```

> ACG groups: all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrooms"></a>
## `getRooms`

`luna://com.webos.ghp.runtime/getRooms`

Returns the rooms.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/getRooms '{}'
```

> ACG groups: private, all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.ghp.runtime/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `status` |  |

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/getStatus '{}'
```

> ACG groups: private, all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstructures"></a>
## `getStructures`

`luna://com.webos.ghp.runtime/getStructures`

Returns the structures.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/getStructures '{}'
```

> ACG groups: private, all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getwebviewurl"></a>
## `getWebViewUrl`

`luna://com.webos.ghp.runtime/getWebViewUrl`

Returns the web view URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/getWebViewUrl '{}'
```

> ACG groups: private, all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendcommand"></a>
## `sendCommand`

`luna://com.webos.ghp.runtime/sendCommand`

Sends the command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/sendCommand '{}'
```

> ACG groups: private, all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcontroller"></a>
## `setController`

`luna://com.webos.ghp.runtime/setController`

Sets the controller.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/setController '{}'
```

> ACG groups: all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setplpal"></a>
## `setPLPAL`

`luna://com.webos.ghp.runtime/setPLPAL`

Sets the PLPAL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.ghp.runtime/setPLPAL '{}'
```

> ACG groups: all, com.webos.ghp.runtime.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
