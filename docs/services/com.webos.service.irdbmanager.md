# `com.webos.service.irdbmanager`

35 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addDevice`](#adddevice) | private |  | input | IR blaster database method: addDevice |
| [`blockIRDevice`](#blockirdevice) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`channelChanged`](#channelchanged) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`clearSettingCash`](#clearsettingcash) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`createAlert`](#createalert) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`createToast`](#createtoast) | private |  | notifications | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`delDevice`](#deldevice) | private |  | input | IR blaster database method: delDevice |
| [`delDeviceHistory`](#deldevicehistory) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getBrandList`](#getbrandlist) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getBrandListByPredictive`](#getbrandlistbypredictive) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getDeviceHistory`](#getdevicehistory) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getDevices`](#getdevices) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getIPDeviceList`](#getipdevicelist) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getIrData`](#getirdata) | private |  | input | IR blaster database method: getIrData |
| [`getIrDb`](#getirdb) | private |  | input | IR blaster database method: getIrDb |
| [`getIrDbVersion`](#getirdbversion) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getKeyList`](#getkeylist) | private |  | keys | Lists valid IR key codes for a device type |
| [`getManufacturerList`](#getmanufacturerlist) | private |  | input | IR blaster database method: getManufacturerList |
| [`getModelList`](#getmodellist) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getPinCodeInfo`](#getpincodeinfo) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getRemoteData`](#getremotedata) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getSearchedModelInfo`](#getsearchedmodelinfo) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`getServiceList`](#getservicelist) | private |  | db | Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`isSupported`](#issupported) | private |  | input | IR blaster database method: isSupported |
| [`nextKeyTest`](#nextkeytest) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`requestSettopPowerIr`](#requestsettoppowerir) | private |  | input | IR blaster database method: requestSettopPowerIr |
| [`sendIrCommand`](#sendircommand) | private |  | keys | Sends an IR blaster command to a configured device such as a soundbar |
| [`setChannel`](#setchannel) | private |  | input | IR blaster database method: setChannel |
| [`setDeviceBrand`](#setdevicebrand) | private |  | db | Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`setDeviceType`](#setdevicetype) | private |  | db | Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`setModelName`](#setmodelname) | private |  | db | Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`setSoundOutSetting`](#setsoundoutsetting) | private |  | db | Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`startKeyTest`](#startkeytest) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`subscribeChannelChange`](#subscribechannelchange) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |
| [`updateServerKeyList`](#updateserverkeylist) | private |  | db | Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented). |

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

<a id="blockirdevice"></a>
## `blockIRDevice`

`luna://com.webos.service.irdbmanager/blockIRDevice`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/blockIRDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="channelchanged"></a>
## `channelChanged`

`luna://com.webos.service.irdbmanager/channelChanged`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/channelChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearsettingcash"></a>
## `clearSettingCash`

`luna://com.webos.service.irdbmanager/clearSettingCash`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/clearSettingCash '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createalert"></a>
## `createAlert`

`luna://com.webos.service.irdbmanager/createAlert`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/createAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createtoast"></a>
## `createToast`

`luna://com.webos.service.irdbmanager/createToast`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/createToast '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="deldevicehistory"></a>
## `delDeviceHistory`

`luna://com.webos.service.irdbmanager/delDeviceHistory`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/delDeviceHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbrandlist"></a>
## `getBrandList`

`luna://com.webos.service.irdbmanager/getBrandList`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getBrandList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbrandlistbypredictive"></a>
## `getBrandListByPredictive`

`luna://com.webos.service.irdbmanager/getBrandListByPredictive`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getBrandListByPredictive '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicehistory"></a>
## `getDeviceHistory`

`luna://com.webos.service.irdbmanager/getDeviceHistory`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getDeviceHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.irdbmanager/getDevices`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getDevices '{}'
```

> ACG groups: private, configurator.callbacks, all, irdbmanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getipdevicelist"></a>
## `getIPDeviceList`

`luna://com.webos.service.irdbmanager/getIPDeviceList`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getIPDeviceList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="getirdbversion"></a>
## `getIrDbVersion`

`luna://com.webos.service.irdbmanager/getIrDbVersion`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getIrDbVersion '{}'
```

> ACG groups: private, all, irdbmanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="getmodellist"></a>
## `getModelList`

`luna://com.webos.service.irdbmanager/getModelList`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getModelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpincodeinfo"></a>
## `getPinCodeInfo`

`luna://com.webos.service.irdbmanager/getPinCodeInfo`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getPinCodeInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getremotedata"></a>
## `getRemoteData`

`luna://com.webos.service.irdbmanager/getRemoteData`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getRemoteData '{}'
```

> ACG groups: private, all, irdbmanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsearchedmodelinfo"></a>
## `getSearchedModelInfo`

`luna://com.webos.service.irdbmanager/getSearchedModelInfo`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getSearchedModelInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicelist"></a>
## `getServiceList`

`luna://com.webos.service.irdbmanager/getServiceList`

Getter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getServiceList '{}'
```

> ACG groups: private, all, irdbmanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="nextkeytest"></a>
## `nextKeyTest`

`luna://com.webos.service.irdbmanager/nextKeyTest`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/nextKeyTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

<a id="setdevicebrand"></a>
## `setDeviceBrand`

`luna://com.webos.service.irdbmanager/setDeviceBrand`

Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setDeviceBrand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdevicetype"></a>
## `setDeviceType`

`luna://com.webos.service.irdbmanager/setDeviceType`

Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setDeviceType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmodelname"></a>
## `setModelName`

`luna://com.webos.service.irdbmanager/setModelName`

Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setModelName '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsoundoutsetting"></a>
## `setSoundOutSetting`

`luna://com.webos.service.irdbmanager/setSoundOutSetting`

Setter on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setSoundOutSetting '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startkeytest"></a>
## `startKeyTest`

`luna://com.webos.service.irdbmanager/startKeyTest`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/startKeyTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribechannelchange"></a>
## `subscribeChannelChange`

`luna://com.webos.service.irdbmanager/subscribeChannelChange`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/subscribeChannelChange '{}'
```

> ACG groups: private, irdbmanager.action, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateserverkeylist"></a>
## `updateServerKeyList`

`luna://com.webos.service.irdbmanager/updateServerKeyList`

Method on com.webos.service.irdbmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/updateServerKeyList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
