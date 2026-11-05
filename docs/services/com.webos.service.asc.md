# `com.webos.service.asc`

ASC service handling BLE advertising and device registration (including Wake-on-BLE): start/stop advertising, read/register BLE devices, verify localization. _(inferred from the service's methods)_

8 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAdvertisingStatus`](#getadvertisingstatus) | public |  | misc | inferred | Returns the advertising status. |
| [`readBleDevices`](#readbledevices) | public |  | db | inferred | Reads the ble devices. |
| [`registerDevice`](#registerdevice) | public |  | misc | inferred | Registers the device. |
| [`resetWoBLE`](#resetwoble) | public |  | misc | inferred | Resets the wo BLE. ⚠️ |
| [`startAdvertising`](#startadvertising) | public |  | misc | inferred | Starts the advertising. |
| [`stopAdvertising`](#stopadvertising) | public |  | misc | inferred | Stops the advertising. |
| [`unRegisterDevice`](#unregisterdevice) | public |  | misc | inferred | Handles the un register device. |
| [`vertifyLocalization`](#vertifylocalization) | public |  | misc | inferred | Handles the vertify localization. |

<a id="getadvertisingstatus"></a>
## `getAdvertisingStatus`

`luna://com.webos.service.asc/getAdvertisingStatus`

Returns the advertising status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `advertising` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.asc/getAdvertisingStatus '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="readbledevices"></a>
## `readBleDevices`

`luna://com.webos.service.asc/readBleDevices`

Reads the ble devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `address` |  |
| `count` |  |
| `devices` |  |
| `name` |  |
| `user_selection` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.asc/readBleDevices '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerdevice"></a>
## `registerDevice`

`luna://com.webos.service.asc/registerDevice`

Registers the device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.asc/registerDevice '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetwoble"></a>
## `resetWoBLE` ⚠️ DANGEROUS

`luna://com.webos.service.asc/resetWoBLE`

Resets the wo BLE.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.asc/resetWoBLE '{}'
```

> ACG groups: private, all, public, bluetooth.manage. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startadvertising"></a>
## `startAdvertising`

`luna://com.webos.service.asc/startAdvertising`

Starts the advertising.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.asc/startAdvertising '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopadvertising"></a>
## `stopAdvertising`

`luna://com.webos.service.asc/stopAdvertising`

Stops the advertising.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.asc/stopAdvertising '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisterdevice"></a>
## `unRegisterDevice`

`luna://com.webos.service.asc/unRegisterDevice`

Handles the un register device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.asc/unRegisterDevice '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vertifylocalization"></a>
## `vertifyLocalization`

`luna://com.webos.service.asc/vertifyLocalization`

Handles the vertify localization.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.asc/vertifyLocalization '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
