# `com.webos.service.eim`

External Input Manager: manages HDMI and other external inputs, including device add/remove, input status, EDID backup, ARC volume, and extensive HDMI-CEC control and vendor commands. _(inferred from the service's methods)_

41 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addDevice`](#adddevice) | public |  | input | documented | Registers an app as a selectable input (appinfo needs "supportGIP": true) |
| [`backupEdid`](#backupedid) | public |  | input | inferred | Backs up the EDID. |
| [`blockInputPopup`](#blockinputpopup) | public |  | input | documented | Registered on eim (name only; presumably suppresses the new-input popup) |
| [`cec/getCecDiagnosticsInfo`](#cec_getcecdiagnosticsinfo) | public |  | input | inferred | Returns the CEC diagnostics info (CEC) |
| [`cec/getCECPowerSyncStatus`](#cec_getcecpowersyncstatus) | private |  | input | documented | HDMI-CEC state query |
| [`cec/getCECState`](#cec_getcecstate) | private |  | input | documented | HDMI-CEC state query |
| [`cec/notifyInterestingEvents`](#cec_notifyinterestingevents) | public |  | input | inferred | Notifies of the interesting events (CEC) |
| [`cec/registerVendorCommand`](#cec_registervendorcommand) | public |  | input | inferred | Registers the vendor command (CEC) |
| [`cec/requestVendorCommand`](#cec_requestvendorcommand) | public |  | input | inferred | Requests the vendor command (CEC) |
| [`cec/requestVendorCommandWithID`](#cec_requestvendorcommandwithid) | public |  | input | inferred | Requests the vendor command with ID (CEC) |
| [`cec/sendKeyEvent`](#cec_sendkeyevent) | private |  | input | documented | Sends an HDMI-CEC key event |
| [`cec/sendRequestAudioStatus`](#cec_sendrequestaudiostatus) | public |  | audio | inferred | Sends the request audio status (CEC) |
| [`cec/sendSystemAudioModeRequest`](#cec_sendsystemaudiomoderequest) | public |  | audio | inferred | Sends the system audio mode request (CEC) |
| [`cec/setCECState`](#cec_setcecstate) | public |  | input | inferred | Sets the CEC state (CEC) |
| [`cec/setCECUniqueId`](#cec_setcecuniqueid) | public |  | input | inferred | Sets the CEC unique ID (CEC) |
| [`deleteDevice`](#deletedevice) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getAllInputStatus`](#getallinputstatus) | public | yes | input | documented | Lists all inputs (HDMI 1-4 with labels, CEC sub-devices, ARC) with connection state |
| [`getArcVolume`](#getarcvolume) | public |  | input | inferred | Returns the ARC volume. |
| [`getCECPowerSyncStatus`](#getcecpowersyncstatus) | public |  | power | inferred | Returns the CEC power sync status. |
| [`getConnectionStatus`](#getconnectionstatus) | public |  | input | inferred | Returns the connection status. |
| [`getCurrentInput`](#getcurrentinput) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getDeviceInfo`](#getdeviceinfo) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getEdidStatus`](#getedidstatus) | public |  | input | inferred | Returns the EDID status. |
| [`getEdidSupportedFhd`](#getedidsupportedfhd) | public |  | input | inferred | Returns the EDID supported fhd. |
| [`getEIMStatistics`](#geteimstatistics) | public |  | input | inferred | Returns the EIM statistics. |
| [`getHDMISignalInfo`](#gethdmisignalinfo) | private |  | input | documented | HDMI signal details (resolution, VRR/ALLM/HDR, cable presence) |
| [`getInputStatus`](#getinputstatus) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getLastInput`](#getlastinput) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getTotalCECHistoryCount`](#gettotalcechistorycount) | public |  | input | inferred | Returns the total CEC history count. |
| [`getTotalDeviceList`](#gettotaldevicelist) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`listCecHistory`](#listcechistory) | public |  | input | inferred | Lists the CEC history. |
| [`registerAppToBlockNoti`](#registerapptoblocknoti) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`resetCECHistory`](#resetcechistory) | public |  | input | inferred | Resets the CEC history. ⚠️ |
| [`resetExternalInputSettings`](#resetexternalinputsettings) | public |  | settings | inferred | Resets the external input settings. ⚠️ |
| [`setChosenDevice`](#setchosendevice) | public |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`setConnectedDevice`](#setconnecteddevice) | public |  | input | inferred | Sets the connected device. |
| [`setDeviceInfo`](#setdeviceinfo) | ssap |  | input | documented | Set HDMI input device icon/label (also used to switch an input between PC and non-PC mode) |
| [`setEdidSupportedFhd`](#setedidsupportedfhd) | public |  | input | inferred | Sets the EDID supported fhd. |
| [`setLastInput`](#setlastinput) | private |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`updateEdid`](#updateedid) | public |  | update | inferred | Updates the EDID. |
| [`updateVirtualDevice`](#updatevirtualdevice) | private |  | input | documented | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |

<a id="adddevice"></a>
## `addDevice`

`luna://com.webos.service.eim/addDevice`

Registers an app as a selectable input (appinfo needs "supportGIP": true)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | string (required) |
| `pigImage` | string (required, may be empty) |
| `mvpdIcon` | string |
| `type` | MVPD_IP\|MVPD_RF |
| `showPopup` | boolean |
| `label` | string |
| `description` | string |

```sh
luna-send-pub -n 1 'luna://com.webos.service.eim/addDevice' '{"appId":"com.example.app","pigImage":""}'
```

> eim crashes if pigImage is missing.

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/eim.md), [2](https://github.com/diaahussein/WebOS_LG_TV_Scripts/blob/HEAD/README.md)

<a id="backupedid"></a>
## `backupEdid`

`luna://com.webos.service.eim/backupEdid`

Backs up the EDID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/backupEdid '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blockinputpopup"></a>
## `blockInputPopup`

`luna://com.webos.service.eim/blockInputPopup`

Registered on eim (name only; presumably suppresses the new-input popup)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.eim/blockInputPopup '{}'
```

> Seen via `ls-monitor -i com.webos.service.eim` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, public. Only the name and ACG groups are known; parameters/return fields were not read. \| Purpose inferred from name; unverified.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cec_getcecdiagnosticsinfo"></a>
## `cec/getCecDiagnosticsInfo`

`luna://com.webos.service.eim/cec/getCecDiagnosticsInfo`

Returns the CEC diagnostics info (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/getCecDiagnosticsInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_getcecpowersyncstatus"></a>
## `cec/getCECPowerSyncStatus`

`luna://com.webos.service.eim/cec/getCECPowerSyncStatus`

HDMI-CEC state query

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `connectedInput` | HDMI_1 (power sync) |

```sh
luna-send -n 1 luna://com.webos.service.eim/cec/getCECPowerSyncStatus '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="cec_getcecstate"></a>
## `cec/getCECState`

`luna://com.webos.service.eim/cec/getCECState`

HDMI-CEC state query

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/cec/getCECState '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="cec_notifyinterestingevents"></a>
## `cec/notifyInterestingEvents`

`luna://com.webos.service.eim/cec/notifyInterestingEvents`

Notifies of the interesting events (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/notifyInterestingEvents '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_registervendorcommand"></a>
## `cec/registerVendorCommand`

`luna://com.webos.service.eim/cec/registerVendorCommand`

Registers the vendor command (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/registerVendorCommand '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_requestvendorcommand"></a>
## `cec/requestVendorCommand`

`luna://com.webos.service.eim/cec/requestVendorCommand`

Requests the vendor command (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/requestVendorCommand '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_requestvendorcommandwithid"></a>
## `cec/requestVendorCommandWithID`

`luna://com.webos.service.eim/cec/requestVendorCommandWithID`

Requests the vendor command with ID (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/requestVendorCommandWithID '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_sendkeyevent"></a>
## `cec/sendKeyEvent`

`luna://com.webos.service.eim/cec/sendKeyEvent`

Sends an HDMI-CEC key event

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 5+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | integer code |
| `device` | remoteControl |
| `id` | string |
| `type` | keyDown\|keyUp |

```sh
luna-send -n 1 luna://com.webos.service.eim/cec/sendKeyEvent '{"key":18882561,"device":"remoteControl","id":"x","type":"keyDown"}'
```

> Only code known: 18882561 (Home). On older firmware tv.keymanager/createKeyEvent with field code.

Sources: [1](https://github.com/andrewfraley/magic_mapper/blob/HEAD/magic_mapper.py)

<a id="cec_sendrequestaudiostatus"></a>
## `cec/sendRequestAudioStatus`

`luna://com.webos.service.eim/cec/sendRequestAudioStatus`

Sends the request audio status (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/sendRequestAudioStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_sendsystemaudiomoderequest"></a>
## `cec/sendSystemAudioModeRequest`

`luna://com.webos.service.eim/cec/sendSystemAudioModeRequest`

Sends the system audio mode request (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/sendSystemAudioModeRequest '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_setcecstate"></a>
## `cec/setCECState`

`luna://com.webos.service.eim/cec/setCECState`

Sets the CEC state (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/setCECState '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_setcecuniqueid"></a>
## `cec/setCECUniqueId`

`luna://com.webos.service.eim/cec/setCECUniqueId`

Sets the CEC unique ID (CEC)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/setCECUniqueId '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletedevice"></a>
## `deleteDevice`

`luna://com.webos.service.eim/deleteDevice`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/deleteDevice '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="getallinputstatus"></a>
## `getAllInputStatus`

`luna://com.webos.service.eim/getAllInputStatus`

Lists all inputs (HDMI 1-4 with labels, CEC sub-devices, ARC) with connection state

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | boolean |

```sh
luna-send -n 1 luna://com.webos.service.eim/getAllInputStatus '{}'
```

> Per webosbrew eim.yml permissions devices/public/private. Switch input by launching com.webos.app.hdmiN via applicationManager/launch, or eim/setChosenDevice.

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/SunnySide007/lumen-webos/blob/HEAD/docs/device/b9.md), [3](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getarcvolume"></a>
## `getArcVolume`

`luna://com.webos.service.eim/getArcVolume`

Returns the ARC volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getArcVolume '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcecpowersyncstatus"></a>
## `getCECPowerSyncStatus`

`luna://com.webos.service.eim/getCECPowerSyncStatus`

Returns the CEC power sync status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getCECPowerSyncStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnectionstatus"></a>
## `getConnectionStatus`

`luna://com.webos.service.eim/getConnectionStatus`

Returns the connection status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getConnectionStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.eim` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getcurrentinput"></a>
## `getCurrentInput`

`luna://com.webos.service.eim/getCurrentInput`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/getCurrentInput '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="getdeviceinfo"></a>
## `getDeviceInfo`

`luna://com.webos.service.eim/getDeviceInfo`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `activate` |  |
| `appId` |  |
| `arcDevice` |  |
| `arcDevicePower` |  |
| `atmosDevice` |  |
| `blockedAllInput` |  |
| `brandName` |  |
| `cecPower` |  |
| `cecpDevType` |  |
| `cecpNewType` |  |
| `chosen` |  |
| `codeset` |  |
| `connected` |  |
| `connectedInput` |  |
| `depth` |  |
| `detectedMethod` |  |
| `devices` |  |
| `forceIcon` |  |
| `hasPowerKey` |  |
| `hdmiPlugIn` |  |
| `hdmiSignalExist` |  |
| `icon` |  |
| `iconPrefix` |  |
| `id` |  |
| `isMainSTB` |  |
| `label` |  |
| `labelName` |  |
| `lastUniqueId` |  |
| `maxDisplayportCount` |  |
| `maxHdmiCount` |  |
| `maxUsbcCount` |  |
| `modified` |  |
| `osdName` |  |
| `ossSetupStatus` |  |
| `physicalAddress` |  |
| `port` |  |
| `portId` |  |
| `powerSync` |  |
| `powerSyncPopUpDelay` |  |
| `powerSyncStatus` |  |
| `priorityOverCEC` |  |
| `serviceArea` |  |
| `serviceName` |  |
| `serviceType` |  |
| `settopCode` |  |
| `settopOption` |  |
| `subCount` |  |
| `subList` |  |
| `totalCount` |  |
| `uniqueId` |  |
| `unknownCECPNumber` |  |
| `vendorId` |  |
| `wowcastStatus` |  |

```sh
luna-send -n 1 luna://com.webos.service.eim/getDeviceInfo '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="getedidstatus"></a>
## `getEdidStatus`

`luna://com.webos.service.eim/getEdidStatus`

Returns the EDID status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `checkSum` |  |
| `devices` |  |
| `edid` |  |
| `id` |  |
| `valid` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getEdidStatus '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getedidsupportedfhd"></a>
## `getEdidSupportedFhd`

`luna://com.webos.service.eim/getEdidSupportedFhd`

Returns the EDID supported fhd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `isSupported` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getEdidSupportedFhd '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteimstatistics"></a>
## `getEIMStatistics`

`luna://com.webos.service.eim/getEIMStatistics`

Returns the EIM statistics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `count` |  |
| `eimStatistics` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getEIMStatistics '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmisignalinfo"></a>
## `getHDMISignalInfo`

`luna://com.webos.service.eim/getHDMISignalInfo`

HDMI signal details (resolution, VRR/ALLM/HDR, cable presence)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/getHDMISignalInfo '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getinputstatus"></a>
## `getInputStatus`

`luna://com.webos.service.eim/getInputStatus`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/getInputStatus '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="getlastinput"></a>
## `getLastInput`

`luna://com.webos.service.eim/getLastInput`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/getLastInput '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="gettotalcechistorycount"></a>
## `getTotalCECHistoryCount`

`luna://com.webos.service.eim/getTotalCECHistoryCount`

Returns the total CEC history count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getTotalCECHistoryCount '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettotaldevicelist"></a>
## `getTotalDeviceList`

`luna://com.webos.service.eim/getTotalDeviceList`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/getTotalDeviceList '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="listcechistory"></a>
## `listCecHistory`

`luna://com.webos.service.eim/listCecHistory`

Lists the CEC history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/listCecHistory '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerapptoblocknoti"></a>
## `registerAppToBlockNoti`

`luna://com.webos.service.eim/registerAppToBlockNoti`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/registerAppToBlockNoti '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="resetcechistory"></a>
## `resetCECHistory` ⚠️ DANGEROUS

`luna://com.webos.service.eim/resetCECHistory`

Resets the CEC history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/resetCECHistory '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetexternalinputsettings"></a>
## `resetExternalInputSettings` ⚠️ DANGEROUS

`luna://com.webos.service.eim/resetExternalInputSettings`

Resets the external input settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/resetExternalInputSettings '{}'
```

> ACG groups: public, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchosendevice"></a>
## `setChosenDevice`

`luna://com.webos.service.eim/setChosenDevice`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/setChosenDevice '{}'
```

> Used by piagent to switch inputs.

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="setconnecteddevice"></a>
## `setConnectedDevice`

`luna://com.webos.service.eim/setConnectedDevice`

Sets the connected device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/setConnectedDevice '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdeviceinfo"></a>
## `setDeviceInfo`

`luna://com.webos.service.eim/setDeviceInfo`

Set HDMI input device icon/label (also used to switch an input between PC and non-PC mode)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | HDMI_1..HDMI_4 |
| `icon` | icon file name e.g. 'pc.png','hdmi.png' (bscpylgtv appends .png to: satellite, settopbox, dvd, bluray, hometheater, gameconsole, streamingbox, camera, mobile, pc, HDMI_1..4) |
| `label` | display label e.g. 'PC','Game Console','HDMI 1' |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.eim/setDeviceInfo","payload":{"id":"HDMI_1","icon":"pc.png","label":"PC"}}
```

> bscpylgtv has both `set_device_info` (direct SSAP, com.webos.service.eim/setDeviceInfo) and `set_device_info_luna` (createAlert trick). LGWebOSRemote sends it with the uri written directly as luna://com.webos.service.eim/setDeviceInfo. Labels: HDMI 1..4, Satellite, Set-Top Box, DVD Player, Blu-ray Player, Home Theatre, Game Console, Streaming Box, Generic Camera, Mobile Device, PC. \|\| Sets input icon/label (and PC mode): {"id":"HDMI_1","icon":"pc.png","label":"PC"} per bscpylgtv/ColorControl.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/klattimer/LGWebOSRemote/blob/master/LGTV/remote.py), [4](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [5](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js), [6](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [7](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [8](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js)

<a id="setedidsupportedfhd"></a>
## `setEdidSupportedFhd`

`luna://com.webos.service.eim/setEdidSupportedFhd`

Sets the EDID supported fhd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/setEdidSupportedFhd '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setlastinput"></a>
## `setLastInput`

`luna://com.webos.service.eim/setLastInput`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/setLastInput '{}'
```

> {"type":"MVPD_IP","appId":"..."} sets the startup input preference (LGGlassUI).

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="updateedid"></a>
## `updateEdid`

`luna://com.webos.service.eim/updateEdid`

Updates the EDID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eim/updateEdid '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatevirtualdevice"></a>
## `updateVirtualDevice`

`luna://com.webos.service.eim/updateVirtualDevice`

External Input Manager method (listed in webosbrew eim.yml; params undocumented there)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.eim/updateVirtualDevice '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)
