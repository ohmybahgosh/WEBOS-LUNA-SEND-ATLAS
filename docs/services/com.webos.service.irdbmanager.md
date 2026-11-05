# `com.webos.service.irdbmanager`

IR database manager: manages the infrared code database for controlling external devices, listing brands/manufacturers and key lists, adding devices, retrieving IR data, and creating alerts/toasts. _(inferred from the service's methods)_

35 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addDevice`](#adddevice) | private |  | input | documented | IR blaster database method: addDevice |
| [`blockIRDevice`](#blockirdevice) | private |  | db | inferred | Blocks the IR device. |
| [`channelChanged`](#channelchanged) | private |  | db | inferred | Handles the channel changed. |
| [`clearSettingCash`](#clearsettingcash) | private |  | db | inferred | Clears the setting cash. |
| [`createAlert`](#createalert) | private |  | db | inferred | Creates the alert. |
| [`createToast`](#createtoast) | private |  | notifications | inferred | Creates the toast. |
| [`delDevice`](#deldevice) | private |  | input | documented | IR blaster database method: delDevice |
| [`delDeviceHistory`](#deldevicehistory) | private |  | db | inferred | Handles the del device history. |
| [`getBrandList`](#getbrandlist) | private |  | db | inferred | Returns the brand list. |
| [`getBrandListByPredictive`](#getbrandlistbypredictive) | private |  | db | inferred | Returns the brand list by predictive. |
| [`getDeviceHistory`](#getdevicehistory) | private |  | db | inferred | Returns the device history. |
| [`getDevices`](#getdevices) | private |  | db | inferred | Returns the devices. |
| [`getIPDeviceList`](#getipdevicelist) | private |  | db | inferred | Returns the IP device list. |
| [`getIrData`](#getirdata) | private |  | input | documented | IR blaster database method: getIrData |
| [`getIrDb`](#getirdb) | private |  | input | documented | IR blaster database method: getIrDb |
| [`getIrDbVersion`](#getirdbversion) | private |  | db | inferred | Returns the IR db version. |
| [`getKeyList`](#getkeylist) | private |  | keys | documented | Lists valid IR key codes for a device type |
| [`getManufacturerList`](#getmanufacturerlist) | private |  | input | documented | IR blaster database method: getManufacturerList |
| [`getModelList`](#getmodellist) | private |  | db | inferred | Returns the model list. |
| [`getPinCodeInfo`](#getpincodeinfo) | private |  | db | inferred | Returns the pin code info. |
| [`getRemoteData`](#getremotedata) | private |  | db | inferred | Returns the remote data. |
| [`getSearchedModelInfo`](#getsearchedmodelinfo) | private |  | db | inferred | Returns the searched model info. |
| [`getServiceList`](#getservicelist) | private |  | db | inferred | Returns the service list. |
| [`isSupported`](#issupported) | private |  | input | documented | IR blaster database method: isSupported |
| [`nextKeyTest`](#nextkeytest) | private |  | db | inferred | Handles the next key test. |
| [`requestSettopPowerIr`](#requestsettoppowerir) | private |  | input | documented | IR blaster database method: requestSettopPowerIr |
| [`sendIrCommand`](#sendircommand) | private |  | keys | documented | Sends an IR blaster command to a configured device such as a soundbar |
| [`setChannel`](#setchannel) | private |  | input | documented | IR blaster database method: setChannel |
| [`setDeviceBrand`](#setdevicebrand) | private |  | db | inferred | Sets the device brand. |
| [`setDeviceType`](#setdevicetype) | private |  | db | inferred | Sets the device type. |
| [`setModelName`](#setmodelname) | private |  | db | inferred | Sets the model name. |
| [`setSoundOutSetting`](#setsoundoutsetting) | private |  | db | inferred | Sets the sound out setting. |
| [`startKeyTest`](#startkeytest) | private |  | db | inferred | Starts the key test. |
| [`subscribeChannelChange`](#subscribechannelchange) | private |  | db | inferred | Subscribes to the channel change. |
| [`updateServerKeyList`](#updateserverkeylist) | private |  | db | inferred | Updates the server key list. |

<a id="adddevice"></a>
## `addDevice`

`luna://com.webos.service.irdbmanager/addDevice`

IR blaster database method: addDevice

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/addDevice '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="blockirdevice"></a>
## `blockIRDevice`

`luna://com.webos.service.irdbmanager/blockIRDevice`

Blocks the IR device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/blockIRDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="channelchanged"></a>
## `channelChanged`

`luna://com.webos.service.irdbmanager/channelChanged`

Handles the channel changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/channelChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearsettingcash"></a>
## `clearSettingCash`

`luna://com.webos.service.irdbmanager/clearSettingCash`

Clears the setting cash.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/clearSettingCash '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createalert"></a>
## `createAlert`

`luna://com.webos.service.irdbmanager/createAlert`

Creates the alert.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/createAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createtoast"></a>
## `createToast`

`luna://com.webos.service.irdbmanager/createToast`

Creates the toast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/delDevice '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="deldevicehistory"></a>
## `delDeviceHistory`

`luna://com.webos.service.irdbmanager/delDeviceHistory`

Handles the del device history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/delDeviceHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbrandlist"></a>
## `getBrandList`

`luna://com.webos.service.irdbmanager/getBrandList`

Returns the brand list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getBrandList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbrandlistbypredictive"></a>
## `getBrandListByPredictive`

`luna://com.webos.service.irdbmanager/getBrandListByPredictive`

Returns the brand list by predictive.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getBrandListByPredictive '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicehistory"></a>
## `getDeviceHistory`

`luna://com.webos.service.irdbmanager/getDeviceHistory`

Returns the device history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getDeviceHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.irdbmanager/getDevices`

Returns the devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getDevices '{}'
```

> ACG groups: private, configurator.callbacks, all, irdbmanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getipdevicelist"></a>
## `getIPDeviceList`

`luna://com.webos.service.irdbmanager/getIPDeviceList`

Returns the IP device list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getIrDb '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getirdbversion"></a>
## `getIrDbVersion`

`luna://com.webos.service.irdbmanager/getIrDbVersion`

Returns the IR db version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getManufacturerList '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getmodellist"></a>
## `getModelList`

`luna://com.webos.service.irdbmanager/getModelList`

Returns the model list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getModelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpincodeinfo"></a>
## `getPinCodeInfo`

`luna://com.webos.service.irdbmanager/getPinCodeInfo`

Returns the pin code info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getPinCodeInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getremotedata"></a>
## `getRemoteData`

`luna://com.webos.service.irdbmanager/getRemoteData`

Returns the remote data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getRemoteData '{}'
```

> ACG groups: private, all, irdbmanager.read, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsearchedmodelinfo"></a>
## `getSearchedModelInfo`

`luna://com.webos.service.irdbmanager/getSearchedModelInfo`

Returns the searched model info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/getSearchedModelInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicelist"></a>
## `getServiceList`

`luna://com.webos.service.irdbmanager/getServiceList`

Returns the service list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/isSupported '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="nextkeytest"></a>
## `nextKeyTest`

`luna://com.webos.service.irdbmanager/nextKeyTest`

Handles the next key test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setChannel '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="setdevicebrand"></a>
## `setDeviceBrand`

`luna://com.webos.service.irdbmanager/setDeviceBrand`

Sets the device brand.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setDeviceBrand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdevicetype"></a>
## `setDeviceType`

`luna://com.webos.service.irdbmanager/setDeviceType`

Sets the device type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setDeviceType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmodelname"></a>
## `setModelName`

`luna://com.webos.service.irdbmanager/setModelName`

Sets the model name.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setModelName '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsoundoutsetting"></a>
## `setSoundOutSetting`

`luna://com.webos.service.irdbmanager/setSoundOutSetting`

Sets the sound out setting.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/setSoundOutSetting '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startkeytest"></a>
## `startKeyTest`

`luna://com.webos.service.irdbmanager/startKeyTest`

Starts the key test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/startKeyTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribechannelchange"></a>
## `subscribeChannelChange`

`luna://com.webos.service.irdbmanager/subscribeChannelChange`

Subscribes to the channel change.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/subscribeChannelChange '{}'
```

> ACG groups: private, irdbmanager.action, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateserverkeylist"></a>
## `updateServerKeyList`

`luna://com.webos.service.irdbmanager/updateServerKeyList`

Updates the server key list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.irdbmanager/updateServerKeyList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
