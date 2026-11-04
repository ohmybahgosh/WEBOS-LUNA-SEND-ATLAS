# `com.webos.service.btaudiosrc`

27 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancelDiscovery`](#canceldiscovery) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`connect`](#connect) | unknown |  | bluetooth | Connects a paired Bluetooth audio device and switches output to it, without the confirmation alert that bluetooth2 a2dp/connect raises |
| [`customCommand`](#customcommand) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`disconnect`](#disconnect) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`getConnectedDevice`](#getconnecteddevice) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`getDeviceStatus`](#getdevicestatus) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`getDeviceVolume`](#getdevicevolume) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`getGuaranteedDevices`](#getguaranteeddevices) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`getOutputGain`](#getoutputgain) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`getPairedDevices`](#getpaireddevices) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`getVolumeIconType`](#getvolumeicontype) | private |  | audio | Method on com.webos.service.btaudiosrc (from on-device permission registry; parameters undocumented). |
| [`notifyDeviceSelectionMenuEntered`](#notifydeviceselectionmenuentered) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`notifyUserSelection`](#notifyuserselection) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`onDeviceSelectionMenu`](#ondeviceselectionmenu) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`removePairedDevice`](#removepaireddevice) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). ⚠️ |
| [`requestPopup`](#requestpopup) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`setChannel`](#setchannel) | private |  | audio | Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`setDeviceVolume`](#setdevicevolume) | private |  | audio | Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`setOutputGain`](#setoutputgain) | private |  | audio | Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`setVolumeIconType`](#setvolumeicontype) | private |  | audio | Method on com.webos.service.btaudiosrc (from on-device permission registry; parameters undocumented). |
| [`startDiscovery`](#startdiscovery) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`surround/getDualAudioStatus`](#surround_getdualaudiostatus) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`surround/getVolumeBalancing`](#surround_getvolumebalancing) | private |  | audio | Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`surround/notifyEvent`](#surround_notifyevent) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`surround/setVolumeBalancing`](#surround_setvolumebalancing) | private |  | audio | Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`surround/startAutoTuning`](#surround_startautotuning) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |
| [`toggleLeftRight`](#toggleleftright) | private |  | audio | Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented). |

<a id="canceldiscovery"></a>
## `cancelDiscovery`

`luna://com.webos.service.btaudiosrc/cancelDiscovery`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/cancelDiscovery '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.btaudiosrc/connect`

Connects a paired Bluetooth audio device and switches output to it, without the confirmation alert that bluetooth2 a2dp/connect raises

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** C1-era webOS (user rooted OLED C1)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `address` | string (required) BT address |

```sh
luna-send -f -n 1 luna://com.webos.service.btaudiosrc/connect '{"address":"AA:BB:CC:DD:EE:FF"}'
```

> Found by a commenter via ls-monitor; run as root.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737#gistcomment-4836305)

<a id="customcommand"></a>
## `customCommand`

`luna://com.webos.service.btaudiosrc/customCommand`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/customCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.btaudiosrc/disconnect`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/disconnect '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnecteddevice"></a>
## `getConnectedDevice`

`luna://com.webos.service.btaudiosrc/getConnectedDevice`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getConnectedDevice '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicestatus"></a>
## `getDeviceStatus`

`luna://com.webos.service.btaudiosrc/getDeviceStatus`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getDeviceStatus '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicevolume"></a>
## `getDeviceVolume`

`luna://com.webos.service.btaudiosrc/getDeviceVolume`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getDeviceVolume '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getguaranteeddevices"></a>
## `getGuaranteedDevices`

`luna://com.webos.service.btaudiosrc/getGuaranteedDevices`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getGuaranteedDevices '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoutputgain"></a>
## `getOutputGain`

`luna://com.webos.service.btaudiosrc/getOutputGain`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getOutputGain '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevices"></a>
## `getPairedDevices`

`luna://com.webos.service.btaudiosrc/getPairedDevices`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getPairedDevices '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvolumeicontype"></a>
## `getVolumeIconType`

`luna://com.webos.service.btaudiosrc/getVolumeIconType`

Method on com.webos.service.btaudiosrc (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getVolumeIconType '{}'
```

> ACG groups: bluetooth.manage, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifydeviceselectionmenuentered"></a>
## `notifyDeviceSelectionMenuEntered`

`luna://com.webos.service.btaudiosrc/notifyDeviceSelectionMenuEntered`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/notifyDeviceSelectionMenuEntered '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyuserselection"></a>
## `notifyUserSelection`

`luna://com.webos.service.btaudiosrc/notifyUserSelection`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/notifyUserSelection '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ondeviceselectionmenu"></a>
## `onDeviceSelectionMenu`

`luna://com.webos.service.btaudiosrc/onDeviceSelectionMenu`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/onDeviceSelectionMenu '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepaireddevice"></a>
## `removePairedDevice` ⚠️ DANGEROUS

`luna://com.webos.service.btaudiosrc/removePairedDevice`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/removePairedDevice '{}'
```

> ACG groups: private, all, bluetooth.manage. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpopup"></a>
## `requestPopup`

`luna://com.webos.service.btaudiosrc/requestPopup`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/requestPopup '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannel"></a>
## `setChannel`

`luna://com.webos.service.btaudiosrc/setChannel`

Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setChannel '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdevicevolume"></a>
## `setDeviceVolume`

`luna://com.webos.service.btaudiosrc/setDeviceVolume`

Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setDeviceVolume '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoutputgain"></a>
## `setOutputGain`

`luna://com.webos.service.btaudiosrc/setOutputGain`

Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setOutputGain '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvolumeicontype"></a>
## `setVolumeIconType`

`luna://com.webos.service.btaudiosrc/setVolumeIconType`

Method on com.webos.service.btaudiosrc (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setVolumeIconType '{}'
```

> ACG groups: bluetooth.manage, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startdiscovery"></a>
## `startDiscovery`

`luna://com.webos.service.btaudiosrc/startDiscovery`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/startDiscovery '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_getdualaudiostatus"></a>
## `surround/getDualAudioStatus`

`luna://com.webos.service.btaudiosrc/surround/getDualAudioStatus`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/getDualAudioStatus '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_getvolumebalancing"></a>
## `surround/getVolumeBalancing`

`luna://com.webos.service.btaudiosrc/surround/getVolumeBalancing`

Getter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/getVolumeBalancing '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_notifyevent"></a>
## `surround/notifyEvent`

`luna://com.webos.service.btaudiosrc/surround/notifyEvent`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/notifyEvent '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_setvolumebalancing"></a>
## `surround/setVolumeBalancing`

`luna://com.webos.service.btaudiosrc/surround/setVolumeBalancing`

Setter on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/setVolumeBalancing '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_startautotuning"></a>
## `surround/startAutoTuning`

`luna://com.webos.service.btaudiosrc/surround/startAutoTuning`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/startAutoTuning '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="toggleleftright"></a>
## `toggleLeftRight`

`luna://com.webos.service.btaudiosrc/toggleLeftRight`

Method on com.webos.service.btaudiosrc (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/toggleLeftRight '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
