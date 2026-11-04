# `com.webos.service.eim`

41 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addDevice`](#adddevice) | public |  | input | Registers an app as a selectable input (appinfo needs "supportGIP": true) |
| [`backupEdid`](#backupedid) | public |  | input | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`blockInputPopup`](#blockinputpopup) | public |  | input | Registered on eim (name only; presumably suppresses the new-input popup) |
| [`cec/getCecDiagnosticsInfo`](#cec_getcecdiagnosticsinfo) | public |  | input | Getter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/getCECPowerSyncStatus`](#cec_getcecpowersyncstatus) | private |  | input | HDMI-CEC state query |
| [`cec/getCECState`](#cec_getcecstate) | private |  | input | HDMI-CEC state query |
| [`cec/notifyInterestingEvents`](#cec_notifyinterestingevents) | public |  | input | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/registerVendorCommand`](#cec_registervendorcommand) | public |  | input | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/requestVendorCommand`](#cec_requestvendorcommand) | public |  | input | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/requestVendorCommandWithID`](#cec_requestvendorcommandwithid) | public |  | input | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/sendKeyEvent`](#cec_sendkeyevent) | private |  | input | Sends an HDMI-CEC key event |
| [`cec/sendRequestAudioStatus`](#cec_sendrequestaudiostatus) | public |  | audio | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/sendSystemAudioModeRequest`](#cec_sendsystemaudiomoderequest) | public |  | audio | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/setCECState`](#cec_setcecstate) | public |  | input | Setter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`cec/setCECUniqueId`](#cec_setcecuniqueid) | public |  | input | Setter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`deleteDevice`](#deletedevice) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getAllInputStatus`](#getallinputstatus) | public | yes | input | Lists all inputs (HDMI 1-4 with labels, CEC sub-devices, ARC) with connection state |
| [`getArcVolume`](#getarcvolume) | public |  | input | Getter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`getCECPowerSyncStatus`](#getcecpowersyncstatus) | public |  | power | Getter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`getConnectionStatus`](#getconnectionstatus) | public |  | input | Method registered by com.webos.service.eim (root category) |
| [`getCurrentInput`](#getcurrentinput) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getDeviceInfo`](#getdeviceinfo) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getEdidStatus`](#getedidstatus) | public |  | input | Getter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`getEdidSupportedFhd`](#getedidsupportedfhd) | public |  | input | Getter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`getEIMStatistics`](#geteimstatistics) | public |  | input | Getter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`getHDMISignalInfo`](#gethdmisignalinfo) | private |  | input | HDMI signal details (resolution, VRR/ALLM/HDR, cable presence) |
| [`getInputStatus`](#getinputstatus) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getLastInput`](#getlastinput) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getTotalCECHistoryCount`](#gettotalcechistorycount) | public |  | input | Getter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`getTotalDeviceList`](#gettotaldevicelist) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`listCecHistory`](#listcechistory) | public |  | input | Lister on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`registerAppToBlockNoti`](#registerapptoblocknoti) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`resetCECHistory`](#resetcechistory) | public |  | input | Method on com.webos.service.eim (introspected on-device; parameters undocumented). ⚠️ |
| [`resetExternalInputSettings`](#resetexternalinputsettings) | public |  | settings | Method on com.webos.service.eim (introspected on-device; parameters undocumented). ⚠️ |
| [`setChosenDevice`](#setchosendevice) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`setConnectedDevice`](#setconnecteddevice) | public |  | input | Setter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`setDeviceInfo`](#setdeviceinfo) | ssap |  | input | Set HDMI input device icon/label (also used to switch an input between PC and non-PC mode) |
| [`setEdidSupportedFhd`](#setedidsupportedfhd) | public |  | input | Setter on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`setLastInput`](#setlastinput) | private |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`updateEdid`](#updateedid) | public |  | update | Method on com.webos.service.eim (introspected on-device; parameters undocumented). |
| [`updateVirtualDevice`](#updatevirtualdevice) | private |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |

<a id="adddevice"></a>
## `addDevice`

`luna://com.webos.service.eim/addDevice`

Registers an app as a selectable input (appinfo needs "supportGIP": true)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** community

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

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/blockInputPopup '{}'
```

> Seen via `ls-monitor -i com.webos.service.eim` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, public. Only the name and ACG groups are known; parameters/return fields were not read. \| Purpose inferred from name; unverified.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cec_getcecdiagnosticsinfo"></a>
## `cec/getCecDiagnosticsInfo`

`luna://com.webos.service.eim/cec/getCecDiagnosticsInfo`

Getter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/cec/getCECState '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="cec_notifyinterestingevents"></a>
## `cec/notifyInterestingEvents`

`luna://com.webos.service.eim/cec/notifyInterestingEvents`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/notifyInterestingEvents '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_registervendorcommand"></a>
## `cec/registerVendorCommand`

`luna://com.webos.service.eim/cec/registerVendorCommand`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/registerVendorCommand '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_requestvendorcommand"></a>
## `cec/requestVendorCommand`

`luna://com.webos.service.eim/cec/requestVendorCommand`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/requestVendorCommand '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_requestvendorcommandwithid"></a>
## `cec/requestVendorCommandWithID`

`luna://com.webos.service.eim/cec/requestVendorCommandWithID`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/sendRequestAudioStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_sendsystemaudiomoderequest"></a>
## `cec/sendSystemAudioModeRequest`

`luna://com.webos.service.eim/cec/sendSystemAudioModeRequest`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/sendSystemAudioModeRequest '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_setcecstate"></a>
## `cec/setCECState`

`luna://com.webos.service.eim/cec/setCECState`

Setter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/cec/setCECState '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cec_setcecuniqueid"></a>
## `cec/setCECUniqueId`

`luna://com.webos.service.eim/cec/setCECUniqueId`

Setter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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

Getter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getArcVolume '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcecpowersyncstatus"></a>
## `getCECPowerSyncStatus`

`luna://com.webos.service.eim/getCECPowerSyncStatus`

Getter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getCECPowerSyncStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnectionstatus"></a>
## `getConnectionStatus`

`luna://com.webos.service.eim/getConnectionStatus`

Method registered by com.webos.service.eim (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/getDeviceInfo '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="getedidstatus"></a>
## `getEdidStatus`

`luna://com.webos.service.eim/getEdidStatus`

Getter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getEdidStatus '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getedidsupportedfhd"></a>
## `getEdidSupportedFhd`

`luna://com.webos.service.eim/getEdidSupportedFhd`

Getter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/getEdidSupportedFhd '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteimstatistics"></a>
## `getEIMStatistics`

`luna://com.webos.service.eim/getEIMStatistics`

Getter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/getLastInput '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="gettotalcechistorycount"></a>
## `getTotalCECHistoryCount`

`luna://com.webos.service.eim/getTotalCECHistoryCount`

Getter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/getTotalDeviceList '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="listcechistory"></a>
## `listCecHistory`

`luna://com.webos.service.eim/listCecHistory`

Lister on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/registerAppToBlockNoti '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="resetcechistory"></a>
## `resetCECHistory` ⚠️ DANGEROUS

`luna://com.webos.service.eim/resetCECHistory`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eim/resetCECHistory '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetexternalinputsettings"></a>
## `resetExternalInputSettings` ⚠️ DANGEROUS

`luna://com.webos.service.eim/resetExternalInputSettings`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/setChosenDevice '{}'
```

> Used by piagent to switch inputs.

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="setconnecteddevice"></a>
## `setConnectedDevice`

`luna://com.webos.service.eim/setConnectedDevice`

Setter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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

Setter on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/setLastInput '{}'
```

> {"type":"MVPD_IP","appId":"..."} sets the startup input preference (LGGlassUI).

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)

<a id="updateedid"></a>
## `updateEdid`

`luna://com.webos.service.eim/updateEdid`

Method on com.webos.service.eim (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.eim/updateVirtualDevice '{}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna/apis/com.webos.service.eim.yml), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [4](https://github.com/PaulButtle/LGGlassUI/blob/HEAD/integration/configure-startup.js), [5](https://github.com/Beltzac/piagent/blob/HEAD/src/services/com.pi.agent.service/service.js)
