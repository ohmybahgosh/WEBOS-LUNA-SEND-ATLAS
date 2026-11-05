# `com.webos.service.wowplay`

WOWCAST wireless-audio/soundbar service: pairs and connects soundbars over BLE and Wi-Fi P2P, reports soundbar status, calibration and EDID, and controls playback. _(inferred from the service's methods)_

22 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`bleConnect`](#bleconnect) | private |  | media | inferred | Handles the ble connect. |
| [`bleDisconnect`](#bledisconnect) | private |  | media | inferred | Handles the ble disconnect. |
| [`cancelDiscovery`](#canceldiscovery) | private |  | media | inferred | Cancels the discovery. |
| [`getCalibrationStatus`](#getcalibrationstatus) | private |  | media | inferred | Returns the calibration status. |
| [`getLatestConnectionInfo`](#getlatestconnectioninfo) | private |  | media | inferred | Returns the latest connection info. |
| [`getProperty`](#getproperty) | private |  | media | inferred | Returns the property. |
| [`getSoundbarStatus`](#getsoundbarstatus) | private |  | db | inferred | Returns the soundbar status. |
| [`getWowcastEdidInfo`](#getwowcastedidinfo) | private |  | security | inferred | Returns the wowcast EDID info. |
| [`getWOWCASTState`](#getwowcaststate) | public |  | security | inferred | Returns the WOWCAST state. |
| [`p2pConnect`](#p2pconnect) | private |  | media | inferred | Handles the p 2 p connect. |
| [`p2pDisconnect`](#p2pdisconnect) | private |  | media | inferred | Handles the p 2 p disconnect. |
| [`p2pSearch`](#p2psearch) | private |  | media | inferred | Handles the p 2 p search. |
| [`p2pStopSearch`](#p2pstopsearch) | private |  | media | inferred | Handles the p 2 p stop search. |
| [`pause`](#pause) | private |  | media | inferred | Pauses the wowplay. |
| [`play`](#play) | private |  | media | inferred | Plays the wowplay. |
| [`playRingToneSound`](#playringtonesound) | private |  | media | inferred | Plays the ring tone sound. |
| [`removePairedDevice`](#removepaireddevice) | private |  | media | inferred | Removes the paired device. ⚠️ |
| [`requestSoundbarStatus`](#requestsoundbarstatus) | private |  | db | inferred | Requests the soundbar status. |
| [`setProperty`](#setproperty) | private |  | media | inferred | Sets the property. |
| [`startCalibration`](#startcalibration) | private |  | media | inferred | Starts the calibration. |
| [`startDiscovery`](#startdiscovery) | private |  | media | inferred | Starts the discovery. |
| [`stopCalibration`](#stopcalibration) | private |  | media | inferred | Stops the calibration. |

<a id="bleconnect"></a>
## `bleConnect`

`luna://com.webos.service.wowplay/bleConnect`

Handles the ble connect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/bleConnect '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bledisconnect"></a>
## `bleDisconnect`

`luna://com.webos.service.wowplay/bleDisconnect`

Handles the ble disconnect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/bleDisconnect '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="canceldiscovery"></a>
## `cancelDiscovery`

`luna://com.webos.service.wowplay/cancelDiscovery`

Cancels the discovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/cancelDiscovery '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcalibrationstatus"></a>
## `getCalibrationStatus`

`luna://com.webos.service.wowplay/getCalibrationStatus`

Returns the calibration status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/getCalibrationStatus '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlatestconnectioninfo"></a>
## `getLatestConnectionInfo`

`luna://com.webos.service.wowplay/getLatestConnectionInfo`

Returns the latest connection info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/getLatestConnectionInfo '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperty"></a>
## `getProperty`

`luna://com.webos.service.wowplay/getProperty`

Returns the property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/getProperty '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsoundbarstatus"></a>
## `getSoundbarStatus`

`luna://com.webos.service.wowplay/getSoundbarStatus`

Returns the soundbar status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `modelName` |  |
| `rearL` |  |
| `rearLStatus` |  |
| `rearR` |  |
| `rearRStatus` |  |
| `soundbarName` |  |
| `status` |  |
| `woofer` |  |
| `wooferStatus` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/getSoundbarStatus '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getwowcastedidinfo"></a>
## `getWowcastEdidInfo`

`luna://com.webos.service.wowplay/getWowcastEdidInfo`

Returns the wowcast EDID info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `SADB` |  |
| `SADs` |  |
| `atmos` |  |
| `dynamicEdid` |  |
| `edidInfo` |  |
| `inputType` |  |
| `port` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/getWowcastEdidInfo '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getwowcaststate"></a>
## `getWOWCASTState`

`luna://com.webos.service.wowplay/getWOWCASTState`

Returns the WOWCAST state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `advancedCapability` |  |
| `capability` |  |
| `soundModeList` |  |
| `soundModeType` |  |
| `supportATMOS` |  |
| `supportIamf` |  |
| `wowOrchestra` |  |
| `wowOrchestraDevice` |  |
| `wowcastActivation` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/getWOWCASTState '{}'
```

> ACG groups: private, all, public, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2pconnect"></a>
## `p2pConnect`

`luna://com.webos.service.wowplay/p2pConnect`

Handles the p 2 p connect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/p2pConnect '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2pdisconnect"></a>
## `p2pDisconnect`

`luna://com.webos.service.wowplay/p2pDisconnect`

Handles the p 2 p disconnect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/p2pDisconnect '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2psearch"></a>
## `p2pSearch`

`luna://com.webos.service.wowplay/p2pSearch`

Handles the p 2 p search.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/p2pSearch '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="p2pstopsearch"></a>
## `p2pStopSearch`

`luna://com.webos.service.wowplay/p2pStopSearch`

Handles the p 2 p stop search.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/p2pStopSearch '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.wowplay/pause`

Pauses the wowplay.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/pause '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play"></a>
## `play`

`luna://com.webos.service.wowplay/play`

Plays the wowplay.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/play '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="playringtonesound"></a>
## `playRingToneSound`

`luna://com.webos.service.wowplay/playRingToneSound`

Plays the ring tone sound.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/playRingToneSound '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepaireddevice"></a>
## `removePairedDevice` ⚠️ DANGEROUS

`luna://com.webos.service.wowplay/removePairedDevice`

Removes the paired device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/removePairedDevice '{}'
```

> ACG groups: private, all, wowplay.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestsoundbarstatus"></a>
## `requestSoundbarStatus`

`luna://com.webos.service.wowplay/requestSoundbarStatus`

Requests the soundbar status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/requestSoundbarStatus '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperty"></a>
## `setProperty`

`luna://com.webos.service.wowplay/setProperty`

Sets the property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/setProperty '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startcalibration"></a>
## `startCalibration`

`luna://com.webos.service.wowplay/startCalibration`

Starts the calibration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/startCalibration '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startdiscovery"></a>
## `startDiscovery`

`luna://com.webos.service.wowplay/startDiscovery`

Starts the discovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/startDiscovery '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopcalibration"></a>
## `stopCalibration`

`luna://com.webos.service.wowplay/stopCalibration`

Stops the calibration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wowplay/stopCalibration '{}'
```

> ACG groups: private, all, wowplay.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
