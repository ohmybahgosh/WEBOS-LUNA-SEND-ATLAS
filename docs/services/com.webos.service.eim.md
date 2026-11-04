# `com.webos.service.eim`

19 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addDevice`](#adddevice) | public |  | input | Registers an app as a selectable input (appinfo needs "supportGIP": true) |
| [`blockInputPopup`](#blockinputpopup) | public |  | input | Registered on eim (name only; presumably suppresses the new-input popup) |
| [`cec/getCECPowerSyncStatus`](#cec_getcecpowersyncstatus) | private |  | input | HDMI-CEC state query |
| [`cec/getCECState`](#cec_getcecstate) | private |  | input | HDMI-CEC state query |
| [`cec/sendKeyEvent`](#cec_sendkeyevent) | private |  | input | Sends an HDMI-CEC key event |
| [`deleteDevice`](#deletedevice) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getAllInputStatus`](#getallinputstatus) | public | yes | input | Lists all inputs (HDMI 1-4 with labels, CEC sub-devices, ARC) with connection state |
| [`getConnectionStatus`](#getconnectionstatus) | public |  | input | Method registered by com.webos.service.eim (root category) |
| [`getCurrentInput`](#getcurrentinput) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getDeviceInfo`](#getdeviceinfo) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getHDMISignalInfo`](#gethdmisignalinfo) | private |  | input | HDMI signal details (resolution, VRR/ALLM/HDR, cable presence) |
| [`getInputStatus`](#getinputstatus) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getLastInput`](#getlastinput) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`getTotalDeviceList`](#gettotaldevicelist) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`registerAppToBlockNoti`](#registerapptoblocknoti) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`setChosenDevice`](#setchosendevice) | public |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`setDeviceInfo`](#setdeviceinfo) | ssap |  | input | Set HDMI input device icon/label (also used to switch an input between PC and non-PC mode) |
| [`setLastInput`](#setlastinput) | private |  | input | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
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
