# `com.webos.service.irdbmanager`

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addDevice`](#adddevice) | private |  | input | IR blaster database method: addDevice |
| [`delDevice`](#deldevice) | private |  | input | IR blaster database method: delDevice |
| [`getIrData`](#getirdata) | private |  | input | IR blaster database method: getIrData |
| [`getIrDb`](#getirdb) | private |  | input | IR blaster database method: getIrDb |
| [`getKeyList`](#getkeylist) | private |  | keys | Lists valid IR key codes for a device type |
| [`getManufacturerList`](#getmanufacturerlist) | private |  | input | IR blaster database method: getManufacturerList |
| [`isSupported`](#issupported) | private |  | input | IR blaster database method: isSupported |
| [`requestSettopPowerIr`](#requestsettoppowerir) | private |  | input | IR blaster database method: requestSettopPowerIr |
| [`sendIrCommand`](#sendircommand) | private |  | keys | Sends an IR blaster command to a configured device such as a soundbar |
| [`setChannel`](#setchannel) | private |  | input | IR blaster database method: setChannel |

<a id="adddevice"></a>
## `addDevice`

`luna://com.webos.service.irdbmanager/addDevice`

IR blaster database method: addDevice

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/addDevice '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="deldevice"></a>
## `delDevice`

`luna://com.webos.service.irdbmanager/delDevice`

IR blaster database method: delDevice

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/delDevice '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getirdata"></a>
## `getIrData`

`luna://com.webos.service.irdbmanager/getIrData`

IR blaster database method: getIrData

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getIrData '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getirdb"></a>
## `getIrDb`

`luna://com.webos.service.irdbmanager/getIrDb`

IR blaster database method: getIrDb

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getIrDb '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getkeylist"></a>
## `getKeyList`

`luna://com.webos.service.irdbmanager/getKeyList`

Lists valid IR key codes for a device type

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `deviceType` | audio |

```sh
luna-send -n 1 luna://com.webos.service.irdbmanager/getKeyList -f '{"deviceType":"audio"}'
```

Sources: [1](https://github.com/andrewfraley/magic_mapper/blob/HEAD/notes/luna_notes.md)

<a id="getmanufacturerlist"></a>
## `getManufacturerList`

`luna://com.webos.service.irdbmanager/getManufacturerList`

IR blaster database method: getManufacturerList

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getManufacturerList '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="issupported"></a>
## `isSupported`

`luna://com.webos.service.irdbmanager/isSupported`

IR blaster database method: isSupported

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/isSupported '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="requestsettoppowerir"></a>
## `requestSettopPowerIr`

`luna://com.webos.service.irdbmanager/requestSettopPowerIr`

IR blaster database method: requestSettopPowerIr

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/requestSettopPowerIr '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="sendircommand"></a>
## `sendIrCommand`

`luna://com.webos.service.irdbmanager/sendIrCommand`

Sends an IR blaster command to a configured device such as a soundbar

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `keyCode` | IR_KEY_POWER\|IR_KEY_VOLUP |
| `buttonState` | single |
| `connectedInput` | OPTICAL |
| `deviceType` | audio |

```sh
luna-send -n 1 luna://com.webos.service.irdbmanager/sendIrCommand -f '{"keyCode":"IR_KEY_VOLUP","buttonState":"single","connectedInput":"OPTICAL","deviceType":"audio"}'
```

> Found via ls-monitor.

Sources: [1](https://github.com/andrewfraley/magic_mapper/blob/HEAD/notes/luna_notes.md)

<a id="setchannel"></a>
## `setChannel`

`luna://com.webos.service.irdbmanager/setChannel`

IR blaster database method: setChannel

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setChannel '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)
