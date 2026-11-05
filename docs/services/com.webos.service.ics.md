# `com.webos.service.ics`

IR-blaster / universal-control service: manages a database of IR and IP-controlled devices, with brand/model/key lists, device add/delete and history, HDMI plugin info and pin codes. _(inferred from the service's methods)_

51 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`blaster/addDevice`](#blaster_adddevice) | private |  | input | inferred | Adds the device (blaster) |
| [`blaster/blockIRDevice`](#blaster_blockirdevice) | private |  | input | inferred | Blocks the IR device (blaster) |
| [`blaster/clearSettingCash`](#blaster_clearsettingcash) | private |  | security | inferred | Clears the setting cash (blaster) |
| [`blaster/delDevice`](#blaster_deldevice) | private |  | input | inferred | Handles the del device (blaster) |
| [`blaster/delDeviceHistory`](#blaster_deldevicehistory) | private |  | input | inferred | Handles the del device history (blaster) |
| [`blaster/deleteIPConnectionHistory`](#blaster_deleteipconnectionhistory) | private |  | input | inferred | Deletes the IP connection history (blaster) ⚠️ |
| [`blaster/getAutoLookUpVersion`](#blaster_getautolookupversion) | private |  | input | inferred | Returns the auto look up version (blaster) |
| [`blaster/getBrandList`](#blaster_getbrandlist) | private |  | input | inferred | Returns the brand list (blaster) |
| [`blaster/getBrandListByPredictive`](#blaster_getbrandlistbypredictive) | private |  | input | inferred | Returns the brand list by predictive (blaster) |
| [`blaster/getDeviceHistory`](#blaster_getdevicehistory) | private |  | input | inferred | Returns the device history (blaster) |
| [`blaster/getDevices`](#blaster_getdevices) | private |  | input | inferred | Returns the devices (blaster) |
| [`blaster/getHDMIPluginInfo`](#blaster_gethdmiplugininfo) | private |  | input | inferred | Returns the HDMI plugin info (blaster) |
| [`blaster/getIPDeviceList`](#blaster_getipdevicelist) | private |  | input | inferred | Returns the IP device list (blaster) |
| [`blaster/getIrDbVersion`](#blaster_getirdbversion) | private |  | db | inferred | Returns the IR db version (blaster) |
| [`blaster/getKeyList`](#blaster_getkeylist) | private |  | input | inferred | Returns the key list (blaster) |
| [`blaster/getKeyTestResult`](#blaster_getkeytestresult) | private |  | input | inferred | Returns the key test result (blaster) |
| [`blaster/getModelList`](#blaster_getmodellist) | private |  | input | inferred | Returns the model list (blaster) |
| [`blaster/getPinCodeInfo`](#blaster_getpincodeinfo) | private |  | input | inferred | Returns the pin code info (blaster) |
| [`blaster/getSearchedModelInfo`](#blaster_getsearchedmodelinfo) | private |  | input | inferred | Returns the searched model info (blaster) |
| [`blaster/getUEICountryCode`](#blaster_getueicountrycode) | private |  | input | inferred | Returns the UEI country code (blaster) |
| [`blaster/getUEIDeviceStatus`](#blaster_getueidevicestatus) | private |  | input | inferred | Returns the UEI device status (blaster) |
| [`blaster/getUniversalControlSettingHistory`](#blaster_getuniversalcontrolsettinghistory) | private |  | input | inferred | Returns the universal control setting history (blaster) |
| [`blaster/getURLforUEIDevices`](#blaster_geturlforueidevices) | private |  | input | inferred | Returns the UR lfor UEI devices (blaster) |
| [`blaster/isSupported`](#blaster_issupported) | private |  | input | inferred | Reports whether the supported is set (blaster) |
| [`blaster/nextKeyTest`](#blaster_nextkeytest) | private |  | input | inferred | Handles the next key test (blaster) |
| [`blaster/sendCommand`](#blaster_sendcommand) | private |  | input | inferred | Sends the command (blaster) |
| [`blaster/setChannel`](#blaster_setchannel) | private |  | input | inferred | Sets the channel (blaster) |
| [`blaster/setDeviceBrand`](#blaster_setdevicebrand) | private |  | input | inferred | Sets the device brand (blaster) |
| [`blaster/setDeviceType`](#blaster_setdevicetype) | private |  | input | inferred | Sets the device type (blaster) |
| [`blaster/setModelName`](#blaster_setmodelname) | private |  | input | inferred | Sets the model name (blaster) |
| [`blaster/setUEIServer`](#blaster_setueiserver) | private |  | input | inferred | Sets the UEI server (blaster) |
| [`blaster/startDetectDevices`](#blaster_startdetectdevices) | private |  | input | inferred | Starts the detect devices (blaster) |
| [`blaster/startKeyTest`](#blaster_startkeytest) | private |  | input | inferred | Starts the key test (blaster) |
| [`blaster/startService`](#blaster_startservice) | private |  | input | inferred | Starts the service (blaster) |
| [`blaster/subscribeChannelChange`](#blaster_subscribechannelchange) | private |  | input | inferred | Subscribes to the channel change (blaster) |
| [`blaster/updateServerKeyList`](#blaster_updateserverkeylist) | private |  | update | inferred | Updates the server key list (blaster) |
| [`debug/setDebugCmd`](#debug_setdebugcmd) | private |  | input | inferred | Sets the debug cmd (debug) |
| [`getCurrentChannelNumber`](#getcurrentchannelnumber) | private |  | input | inferred | Returns the current channel number. |
| [`getCurrentChannelNumberDirect`](#getcurrentchannelnumberdirect) | private |  | input | inferred | Returns the current channel number direct. |
| [`getMsoEncDecString`](#getmsoencdecstring) | private |  | input | inferred | Returns the mso enc dec string. |
| [`getNewDeviceInfo`](#getnewdeviceinfo) | private |  | input | inferred | Returns the new device info. |
| [`getToastMsg`](#gettoastmsg) | private |  | notifications | inferred | Returns the toast msg. |
| [`getUeiAppList`](#getueiapplist) | private |  | input | inferred | Returns the uei app list. |
| [`iot/getAllIoTDevices`](#iot_getalliotdevices) | private |  | input | inferred | Returns the all io t devices (iot) |
| [`iot/getIoTBrandList`](#iot_getiotbrandlist) | private |  | input | inferred | Returns the io t brand list (iot) |
| [`iot/getIoTDevice`](#iot_getiotdevice) | private |  | input | inferred | Returns the io t device (iot) |
| [`iot/replyEventCallback`](#iot_replyeventcallback) | private |  | input | inferred | Handles the reply event callback (iot) |
| [`iot/selectIoTDevice`](#iot_selectiotdevice) | private |  | input | inferred | Selects the io t device (iot) |
| [`iot/setIoTDevice`](#iot_setiotdevice) | private |  | input | inferred | Sets the io t device (iot) |
| [`sendDirectCommand`](#senddirectcommand) | private |  | input | inferred | Sends the direct command. |
| [`setNewDevicePort`](#setnewdeviceport) | private |  | input | inferred | Sets the new device port. |

<a id="blaster_adddevice"></a>
## `blaster/addDevice`

`luna://com.webos.service.ics/blaster/addDevice`

Adds the device (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/addDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_blockirdevice"></a>
## `blaster/blockIRDevice`

`luna://com.webos.service.ics/blaster/blockIRDevice`

Blocks the IR device (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/blockIRDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_clearsettingcash"></a>
## `blaster/clearSettingCash`

`luna://com.webos.service.ics/blaster/clearSettingCash`

Clears the setting cash (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/clearSettingCash '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_deldevice"></a>
## `blaster/delDevice`

`luna://com.webos.service.ics/blaster/delDevice`

Handles the del device (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/delDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_deldevicehistory"></a>
## `blaster/delDeviceHistory`

`luna://com.webos.service.ics/blaster/delDeviceHistory`

Handles the del device history (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/delDeviceHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_deleteipconnectionhistory"></a>
## `blaster/deleteIPConnectionHistory` ⚠️ DANGEROUS

`luna://com.webos.service.ics/blaster/deleteIPConnectionHistory`

Deletes the IP connection history (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/deleteIPConnectionHistory '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getautolookupversion"></a>
## `blaster/getAutoLookUpVersion`

`luna://com.webos.service.ics/blaster/getAutoLookUpVersion`

Returns the auto look up version (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getAutoLookUpVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getbrandlist"></a>
## `blaster/getBrandList`

`luna://com.webos.service.ics/blaster/getBrandList`

Returns the brand list (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getBrandList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getbrandlistbypredictive"></a>
## `blaster/getBrandListByPredictive`

`luna://com.webos.service.ics/blaster/getBrandListByPredictive`

Returns the brand list by predictive (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getBrandListByPredictive '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getdevicehistory"></a>
## `blaster/getDeviceHistory`

`luna://com.webos.service.ics/blaster/getDeviceHistory`

Returns the device history (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getDeviceHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getdevices"></a>
## `blaster/getDevices`

`luna://com.webos.service.ics/blaster/getDevices`

Returns the devices (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_gethdmiplugininfo"></a>
## `blaster/getHDMIPluginInfo`

`luna://com.webos.service.ics/blaster/getHDMIPluginInfo`

Returns the HDMI plugin info (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getHDMIPluginInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getipdevicelist"></a>
## `blaster/getIPDeviceList`

`luna://com.webos.service.ics/blaster/getIPDeviceList`

Returns the IP device list (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getIPDeviceList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getirdbversion"></a>
## `blaster/getIrDbVersion`

`luna://com.webos.service.ics/blaster/getIrDbVersion`

Returns the IR db version (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getIrDbVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getkeylist"></a>
## `blaster/getKeyList`

`luna://com.webos.service.ics/blaster/getKeyList`

Returns the key list (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getKeyList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getkeytestresult"></a>
## `blaster/getKeyTestResult`

`luna://com.webos.service.ics/blaster/getKeyTestResult`

Returns the key test result (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getKeyTestResult '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getmodellist"></a>
## `blaster/getModelList`

`luna://com.webos.service.ics/blaster/getModelList`

Returns the model list (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getModelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getpincodeinfo"></a>
## `blaster/getPinCodeInfo`

`luna://com.webos.service.ics/blaster/getPinCodeInfo`

Returns the pin code info (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getPinCodeInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getsearchedmodelinfo"></a>
## `blaster/getSearchedModelInfo`

`luna://com.webos.service.ics/blaster/getSearchedModelInfo`

Returns the searched model info (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getSearchedModelInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getueicountrycode"></a>
## `blaster/getUEICountryCode`

`luna://com.webos.service.ics/blaster/getUEICountryCode`

Returns the UEI country code (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getUEICountryCode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getueidevicestatus"></a>
## `blaster/getUEIDeviceStatus`

`luna://com.webos.service.ics/blaster/getUEIDeviceStatus`

Returns the UEI device status (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getUEIDeviceStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_getuniversalcontrolsettinghistory"></a>
## `blaster/getUniversalControlSettingHistory`

`luna://com.webos.service.ics/blaster/getUniversalControlSettingHistory`

Returns the universal control setting history (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getUniversalControlSettingHistory '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_geturlforueidevices"></a>
## `blaster/getURLforUEIDevices`

`luna://com.webos.service.ics/blaster/getURLforUEIDevices`

Returns the UR lfor UEI devices (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/getURLforUEIDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_issupported"></a>
## `blaster/isSupported`

`luna://com.webos.service.ics/blaster/isSupported`

Reports whether the supported is set (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/isSupported '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_nextkeytest"></a>
## `blaster/nextKeyTest`

`luna://com.webos.service.ics/blaster/nextKeyTest`

Handles the next key test (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/nextKeyTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_sendcommand"></a>
## `blaster/sendCommand`

`luna://com.webos.service.ics/blaster/sendCommand`

Sends the command (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/sendCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_setchannel"></a>
## `blaster/setChannel`

`luna://com.webos.service.ics/blaster/setChannel`

Sets the channel (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/setChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_setdevicebrand"></a>
## `blaster/setDeviceBrand`

`luna://com.webos.service.ics/blaster/setDeviceBrand`

Sets the device brand (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/setDeviceBrand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_setdevicetype"></a>
## `blaster/setDeviceType`

`luna://com.webos.service.ics/blaster/setDeviceType`

Sets the device type (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/setDeviceType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_setmodelname"></a>
## `blaster/setModelName`

`luna://com.webos.service.ics/blaster/setModelName`

Sets the model name (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/setModelName '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_setueiserver"></a>
## `blaster/setUEIServer`

`luna://com.webos.service.ics/blaster/setUEIServer`

Sets the UEI server (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/setUEIServer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_startdetectdevices"></a>
## `blaster/startDetectDevices`

`luna://com.webos.service.ics/blaster/startDetectDevices`

Starts the detect devices (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/startDetectDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_startkeytest"></a>
## `blaster/startKeyTest`

`luna://com.webos.service.ics/blaster/startKeyTest`

Starts the key test (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/startKeyTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_startservice"></a>
## `blaster/startService`

`luna://com.webos.service.ics/blaster/startService`

Starts the service (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/startService '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_subscribechannelchange"></a>
## `blaster/subscribeChannelChange`

`luna://com.webos.service.ics/blaster/subscribeChannelChange`

Subscribes to the channel change (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/subscribeChannelChange '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blaster_updateserverkeylist"></a>
## `blaster/updateServerKeyList`

`luna://com.webos.service.ics/blaster/updateServerKeyList`

Updates the server key list (blaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/blaster/updateServerKeyList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_setdebugcmd"></a>
## `debug/setDebugCmd`

`luna://com.webos.service.ics/debug/setDebugCmd`

Sets the debug cmd (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/debug/setDebugCmd '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannelnumber"></a>
## `getCurrentChannelNumber`

`luna://com.webos.service.ics/getCurrentChannelNumber`

Returns the current channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/getCurrentChannelNumber '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannelnumberdirect"></a>
## `getCurrentChannelNumberDirect`

`luna://com.webos.service.ics/getCurrentChannelNumberDirect`

Returns the current channel number direct.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/getCurrentChannelNumberDirect '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmsoencdecstring"></a>
## `getMsoEncDecString`

`luna://com.webos.service.ics/getMsoEncDecString`

Returns the mso enc dec string.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/getMsoEncDecString '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnewdeviceinfo"></a>
## `getNewDeviceInfo`

`luna://com.webos.service.ics/getNewDeviceInfo`

Returns the new device info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/getNewDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettoastmsg"></a>
## `getToastMsg`

`luna://com.webos.service.ics/getToastMsg`

Returns the toast msg.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/getToastMsg '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getueiapplist"></a>
## `getUeiAppList`

`luna://com.webos.service.ics/getUeiAppList`

Returns the uei app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/getUeiAppList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="iot_getalliotdevices"></a>
## `iot/getAllIoTDevices`

`luna://com.webos.service.ics/iot/getAllIoTDevices`

Returns the all io t devices (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/iot/getAllIoTDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="iot_getiotbrandlist"></a>
## `iot/getIoTBrandList`

`luna://com.webos.service.ics/iot/getIoTBrandList`

Returns the io t brand list (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/iot/getIoTBrandList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="iot_getiotdevice"></a>
## `iot/getIoTDevice`

`luna://com.webos.service.ics/iot/getIoTDevice`

Returns the io t device (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/iot/getIoTDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="iot_replyeventcallback"></a>
## `iot/replyEventCallback`

`luna://com.webos.service.ics/iot/replyEventCallback`

Handles the reply event callback (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/iot/replyEventCallback '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="iot_selectiotdevice"></a>
## `iot/selectIoTDevice`

`luna://com.webos.service.ics/iot/selectIoTDevice`

Selects the io t device (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/iot/selectIoTDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="iot_setiotdevice"></a>
## `iot/setIoTDevice`

`luna://com.webos.service.ics/iot/setIoTDevice`

Sets the io t device (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/iot/setIoTDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="senddirectcommand"></a>
## `sendDirectCommand`

`luna://com.webos.service.ics/sendDirectCommand`

Sends the direct command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/sendDirectCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setnewdeviceport"></a>
## `setNewDevicePort`

`luna://com.webos.service.ics/setNewDevicePort`

Sets the new device port.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.ics/setNewDevicePort '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
