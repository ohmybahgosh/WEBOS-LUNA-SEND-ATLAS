# `com.webos.service.blegatt`

15 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`client/connect`](#client_connect) | public | yes | bluetooth | Connects to GATT profile on remote device. |
| [`client/disconnect`](#client_disconnect) | public |  | bluetooth | Disconnects GATT. |
| [`client/discoverServices`](#client_discoverservices) | public |  | bluetooth | Discovers services. |
| [`client/getServices`](#client_getservices) | public |  | bluetooth | Gets available services. |
| [`client/readCharacteristic`](#client_readcharacteristic) | public |  | bluetooth | Reads a characteristic. |
| [`client/readDescriptor`](#client_readdescriptor) | public |  | bluetooth | Reads a descriptor. |
| [`client/setCharacteristicNotification`](#client_setcharacteristicnotification) | public |  | bluetooth | Enable/disable notifications for a characteristic. |
| [`client/writeCharacteristic`](#client_writecharacteristic) | public |  | bluetooth | Writes a characteristic value. |
| [`client/writeDescriptor`](#client_writedescriptor) | public |  | bluetooth | Writes a descriptor value. |
| [`getState`](#getstate) | public | yes | bluetooth | Scanning state, connected and paired devices. |
| [`isEnabled`](#isenabled) | public | yes | bluetooth | Checks if Bluetooth is enabled. |
| [`pair`](#pair) | public | yes | bluetooth | Pairs a remote device. |
| [`startScan`](#startscan) | public | yes | bluetooth | Starts scanning for BLE devices. |
| [`stopScan`](#stopscan) | public |  | bluetooth | Stops BLE scanning. |
| [`unpair`](#unpair) | public |  | bluetooth | Unpairs a remote device. |

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
