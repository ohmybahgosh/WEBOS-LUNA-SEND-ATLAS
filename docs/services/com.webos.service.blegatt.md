# `com.webos.service.blegatt`

33 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`buttonEvent`](#buttonevent) | public |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`checkPopup`](#checkpopup) | private |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`client/connect`](#client_connect) | public | yes | bluetooth | Connects to GATT profile on remote device. |
| [`client/disconnect`](#client_disconnect) | public |  | bluetooth | Disconnects GATT. |
| [`client/discoverServices`](#client_discoverservices) | public |  | bluetooth | Discovers services. |
| [`client/getServices`](#client_getservices) | public |  | bluetooth | Gets available services. |
| [`client/readCharacteristic`](#client_readcharacteristic) | public |  | bluetooth | Reads a characteristic. |
| [`client/readDescriptor`](#client_readdescriptor) | public |  | bluetooth | Reads a descriptor. |
| [`client/setCharacteristicNotification`](#client_setcharacteristicnotification) | public |  | bluetooth | Enable/disable notifications for a characteristic. |
| [`client/writeCharacteristic`](#client_writecharacteristic) | public |  | bluetooth | Writes a characteristic value. |
| [`client/writeDescriptor`](#client_writedescriptor) | public |  | bluetooth | Writes a descriptor value. |
| [`ftms/readCharacteristic`](#ftms_readcharacteristic) | public |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`ftms/readDescriptor`](#ftms_readdescriptor) | public |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`ftms/setCharacteristicNotification`](#ftms_setcharacteristicnotification) | public |  | notifications | Setter on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`ftms/startAlwaysScan`](#ftms_startalwaysscan) | private |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`ftms/stopAlwaysScan`](#ftms_stopalwaysscan) | private |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`ftms/writeCharacteristic`](#ftms_writecharacteristic) | public |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`ftms/writeDescriptor`](#ftms_writedescriptor) | public |  | bluetooth | Method on com.webos.service.blegatt (introspected on-device; parameters undocumented). |
| [`getState`](#getstate) | public | yes | bluetooth | Scanning state, connected and paired devices. |
| [`isEnabled`](#isenabled) | public | yes | bluetooth | Checks if Bluetooth is enabled. |
| [`pair`](#pair) | public | yes | bluetooth | Pairs a remote device. |
| [`server/addService`](#server_addservice) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`server/close`](#server_close) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`server/disconnect`](#server_disconnect) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`server/notifyCharacteristicChanged`](#server_notifycharacteristicchanged) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`server/open`](#server_open) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`server/removeService`](#server_removeservice) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). ⚠️ |
| [`server/sendResponse`](#server_sendresponse) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`server/startAdvertising`](#server_startadvertising) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`server/stopAdvertising`](#server_stopadvertising) | public |  | bluetooth | Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented). |
| [`startScan`](#startscan) | public | yes | bluetooth | Starts scanning for BLE devices. |
| [`stopScan`](#stopscan) | public |  | bluetooth | Stops BLE scanning. |
| [`unpair`](#unpair) | public |  | bluetooth | Unpairs a remote device. |

<a id="buttonevent"></a>
## `buttonEvent`

`luna://com.webos.service.blegatt/buttonEvent`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/buttonEvent '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkpopup"></a>
## `checkPopup`

`luna://com.webos.service.blegatt/checkPopup`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/checkPopup '{}'
```

> ACG groups: all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="client_connect"></a>
## `client/connect`

`luna://com.webos.service.blegatt/client/connect`

Connects to GATT profile on remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |
| `subscribe` | Boolean (required) |

```sh
luna-send -i -f luna://com.webos.service.blegatt/client/connect '{"subscribe":true,"address":"<device-address>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_disconnect"></a>
## `client/disconnect`

`luna://com.webos.service.blegatt/client/disconnect`

Disconnects GATT.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/disconnect '{"address":"<device-address>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_discoverservices"></a>
## `client/discoverServices`

`luna://com.webos.service.blegatt/client/discoverServices`

Discovers services.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/discoverServices '{"address":"<device-address>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_getservices"></a>
## `client/getServices`

`luna://com.webos.service.blegatt/client/getServices`

Gets available services.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/getServices '{"address":"<device-address>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_readcharacteristic"></a>
## `client/readCharacteristic`

`luna://com.webos.service.blegatt/client/readCharacteristic`

Reads a characteristic.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |
| `service` | String (required) |
| `characteristic` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/readCharacteristic '{"address":"<device-address>","service":"<service-UUID>","characteristic":"<characteristic-UUID>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_readdescriptor"></a>
## `client/readDescriptor`

`luna://com.webos.service.blegatt/client/readDescriptor`

Reads a descriptor.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |
| `service` | String (required) |
| `characteristic` | String (required) |
| `descriptor` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/readDescriptor '{"address":"<device-address>","service":"<service-UUID>","characteristic":"<characteristic-UUID>","descriptor":"<descriptor-UUID>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_setcharacteristicnotification"></a>
## `client/setCharacteristicNotification`

`luna://com.webos.service.blegatt/client/setCharacteristicNotification`

Enable/disable notifications for a characteristic.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |
| `service` | String (required) |
| `characteristic` | String (required) |
| `enable` | Boolean (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/setCharacteristicNotification '{"address":"<device-address>","service":"<service-UUID>","characteristic":"<characteristic-UUID>","enable":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_writecharacteristic"></a>
## `client/writeCharacteristic`

`luna://com.webos.service.blegatt/client/writeCharacteristic`

Writes a characteristic value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |
| `service` | String (required) |
| `characteristic` | String (required) |
| `value` | Object (required) {bytes:[..]} |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/writeCharacteristic '{"address":"<device-address>","service":"<service-UUID>","characteristic":"<characteristic-UUID>","value":{"bytes":[0]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="client_writedescriptor"></a>
## `client/writeDescriptor`

`luna://com.webos.service.blegatt/client/writeDescriptor`

Writes a descriptor value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |
| `service` | String (required) |
| `characteristic` | String (required) |
| `descriptor` | String (required) |
| `value` | Object (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/client/writeDescriptor '{"address":"<device-address>","service":"<service-UUID>","characteristic":"<characteristic-UUID>","descriptor":"<descriptor-UUID>","value":{"bytes":[0]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="ftms_readcharacteristic"></a>
## `ftms/readCharacteristic`

`luna://com.webos.service.blegatt/ftms/readCharacteristic`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/ftms/readCharacteristic '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftms_readdescriptor"></a>
## `ftms/readDescriptor`

`luna://com.webos.service.blegatt/ftms/readDescriptor`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/ftms/readDescriptor '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftms_setcharacteristicnotification"></a>
## `ftms/setCharacteristicNotification`

`luna://com.webos.service.blegatt/ftms/setCharacteristicNotification`

Setter on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/ftms/setCharacteristicNotification '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftms_startalwaysscan"></a>
## `ftms/startAlwaysScan`

`luna://com.webos.service.blegatt/ftms/startAlwaysScan`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/ftms/startAlwaysScan '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftms_stopalwaysscan"></a>
## `ftms/stopAlwaysScan`

`luna://com.webos.service.blegatt/ftms/stopAlwaysScan`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/ftms/stopAlwaysScan '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftms_writecharacteristic"></a>
## `ftms/writeCharacteristic`

`luna://com.webos.service.blegatt/ftms/writeCharacteristic`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/ftms/writeCharacteristic '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftms_writedescriptor"></a>
## `ftms/writeDescriptor`

`luna://com.webos.service.blegatt/ftms/writeDescriptor`

Method on com.webos.service.blegatt (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/ftms/writeDescriptor '{}'
```

> ACG groups: private, all, public, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.blegatt/getState`

Scanning state, connected and paired devices.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.blegatt/getState '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="isenabled"></a>
## `isEnabled`

`luna://com.webos.service.blegatt/isEnabled`

Checks if Bluetooth is enabled.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.blegatt/isEnabled '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="pair"></a>
## `pair`

`luna://com.webos.service.blegatt/pair`

Pairs a remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.blegatt/pair '{"address":"<device-address>","subscribe":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="server_addservice"></a>
## `server/addService`

`luna://com.webos.service.blegatt/server/addService`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/addService '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_close"></a>
## `server/close`

`luna://com.webos.service.blegatt/server/close`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/close '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_disconnect"></a>
## `server/disconnect`

`luna://com.webos.service.blegatt/server/disconnect`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/disconnect '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_notifycharacteristicchanged"></a>
## `server/notifyCharacteristicChanged`

`luna://com.webos.service.blegatt/server/notifyCharacteristicChanged`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/notifyCharacteristicChanged '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_open"></a>
## `server/open`

`luna://com.webos.service.blegatt/server/open`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/open '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_removeservice"></a>
## `server/removeService` ⚠️ DANGEROUS

`luna://com.webos.service.blegatt/server/removeService`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/removeService '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_sendresponse"></a>
## `server/sendResponse`

`luna://com.webos.service.blegatt/server/sendResponse`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/sendResponse '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_startadvertising"></a>
## `server/startAdvertising`

`luna://com.webos.service.blegatt/server/startAdvertising`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/startAdvertising '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="server_stopadvertising"></a>
## `server/stopAdvertising`

`luna://com.webos.service.blegatt/server/stopAdvertising`

Method on com.webos.service.blegatt (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/server/stopAdvertising '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startscan"></a>
## `startScan`

`luna://com.webos.service.blegatt/startScan`

Starts scanning for BLE devices.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) |
| `uuid` | String (required) service UUID |
| `serviceData` | Object (optional) |

```sh
luna-send -i -f luna://com.webos.service.blegatt/startScan '{"subscribe":true,"uuid":"<service-UUID>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="stopscan"></a>
## `stopScan`

`luna://com.webos.service.blegatt/stopScan`

Stops BLE scanning.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uuid` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/stopScan '{"uuid":"<service-UUID>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)

<a id="unpair"></a>
## `unpair`

`luna://com.webos.service.blegatt/unpair`

Unpairs a remote device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.blegatt/unpair '{"address":"<device-address>"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/ble-gatt)
