# `com.webos.service.btaudiosrc`

Bluetooth audio-source service: discovers, connects and manages Bluetooth audio sink devices, handling pairing, device selection, volume and output gain.

27 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelDiscovery`](#canceldiscovery) | private |  | audio | inferred | Cancels the discovery. |
| [`connect`](#connect) | private |  | bluetooth | documented | Connects a paired Bluetooth audio device and switches output to it, without the confirmation alert that bluetooth2 a2dp/connect raises |
| [`customCommand`](#customcommand) | private |  | audio | inferred | Handles the custom command. |
| [`disconnect`](#disconnect) | private |  | audio | inferred | Disconnects the btaudiosrc. |
| [`getConnectedDevice`](#getconnecteddevice) | private |  | audio | inferred | Returns the connected device. |
| [`getDeviceStatus`](#getdevicestatus) | private |  | audio | inferred | Returns the device status. |
| [`getDeviceVolume`](#getdevicevolume) | private |  | audio | inferred | Returns the device volume. |
| [`getGuaranteedDevices`](#getguaranteeddevices) | private |  | audio | inferred | Returns the guaranteed devices. |
| [`getOutputGain`](#getoutputgain) | private |  | audio | inferred | Returns the output gain. |
| [`getPairedDevices`](#getpaireddevices) | private |  | audio | inferred | Returns the paired devices. |
| [`getVolumeIconType`](#getvolumeicontype) | private |  | audio | inferred | Returns the volume icon type. |
| [`notifyDeviceSelectionMenuEntered`](#notifydeviceselectionmenuentered) | private |  | audio | inferred | Notifies of the device selection menu entered. |
| [`notifyUserSelection`](#notifyuserselection) | private |  | audio | inferred | Notifies of the user selection. |
| [`onDeviceSelectionMenu`](#ondeviceselectionmenu) | private |  | audio | inferred | Event handler: fires on the device selection menu. |
| [`removePairedDevice`](#removepaireddevice) | private |  | audio | inferred | Removes the paired device. ⚠️ |
| [`requestPopup`](#requestpopup) | private |  | audio | inferred | Requests the popup. |
| [`setChannel`](#setchannel) | private |  | audio | inferred | Sets the channel. |
| [`setDeviceVolume`](#setdevicevolume) | private |  | audio | inferred | Sets the device volume. |
| [`setOutputGain`](#setoutputgain) | private |  | audio | inferred | Sets the output gain. |
| [`setVolumeIconType`](#setvolumeicontype) | private |  | audio | inferred | Sets the volume icon type. |
| [`startDiscovery`](#startdiscovery) | private |  | audio | inferred | Starts the discovery. |
| [`surround/getDualAudioStatus`](#surround_getdualaudiostatus) | private |  | audio | inferred | Returns the dual audio status (surround) |
| [`surround/getVolumeBalancing`](#surround_getvolumebalancing) | private |  | audio | inferred | Returns the volume balancing (surround) |
| [`surround/notifyEvent`](#surround_notifyevent) | private |  | audio | inferred | Notifies of the event (surround) |
| [`surround/setVolumeBalancing`](#surround_setvolumebalancing) | private |  | audio | inferred | Sets the volume balancing (surround) |
| [`surround/startAutoTuning`](#surround_startautotuning) | private |  | audio | inferred | Starts the auto tuning (surround) |
| [`toggleLeftRight`](#toggleleftright) | private |  | audio | inferred | Toggles the left right. |

<a id="canceldiscovery"></a>
## `cancelDiscovery`

`luna://com.webos.service.btaudiosrc/cancelDiscovery`

Cancels the discovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/cancelDiscovery '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.btaudiosrc/connect`

Connects a paired Bluetooth audio device and switches output to it, without the confirmation alert that bluetooth2 a2dp/connect raises

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** C1-era webOS (user rooted OLED C1)  
- **Confidence:** documented

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

Handles the custom command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/customCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.btaudiosrc/disconnect`

Disconnects the btaudiosrc.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/disconnect '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnecteddevice"></a>
## `getConnectedDevice`

`luna://com.webos.service.btaudiosrc/getConnectedDevice`

Returns the connected device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getConnectedDevice '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicestatus"></a>
## `getDeviceStatus`

`luna://com.webos.service.btaudiosrc/getDeviceStatus`

Returns the device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getDeviceStatus '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicevolume"></a>
## `getDeviceVolume`

`luna://com.webos.service.btaudiosrc/getDeviceVolume`

Returns the device volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getDeviceVolume '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getguaranteeddevices"></a>
## `getGuaranteedDevices`

`luna://com.webos.service.btaudiosrc/getGuaranteedDevices`

Returns the guaranteed devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `devices` |  |
| `dualGuaranteedDevices` |  |
| `manufacturer` |  |
| `version` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getGuaranteedDevices '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoutputgain"></a>
## `getOutputGain`

`luna://com.webos.service.btaudiosrc/getOutputGain`

Returns the output gain.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getOutputGain '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevices"></a>
## `getPairedDevices`

`luna://com.webos.service.btaudiosrc/getPairedDevices`

Returns the paired devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getPairedDevices '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvolumeicontype"></a>
## `getVolumeIconType`

`luna://com.webos.service.btaudiosrc/getVolumeIconType`

Returns the volume icon type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/getVolumeIconType '{}'
```

> ACG groups: bluetooth.manage, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifydeviceselectionmenuentered"></a>
## `notifyDeviceSelectionMenuEntered`

`luna://com.webos.service.btaudiosrc/notifyDeviceSelectionMenuEntered`

Notifies of the device selection menu entered.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/notifyDeviceSelectionMenuEntered '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyuserselection"></a>
## `notifyUserSelection`

`luna://com.webos.service.btaudiosrc/notifyUserSelection`

Notifies of the user selection.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/notifyUserSelection '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ondeviceselectionmenu"></a>
## `onDeviceSelectionMenu`

`luna://com.webos.service.btaudiosrc/onDeviceSelectionMenu`

Event handler: fires on the device selection menu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/onDeviceSelectionMenu '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepaireddevice"></a>
## `removePairedDevice` ⚠️ DANGEROUS

`luna://com.webos.service.btaudiosrc/removePairedDevice`

Removes the paired device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/removePairedDevice '{}'
```

> ACG groups: private, all, bluetooth.manage. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpopup"></a>
## `requestPopup`

`luna://com.webos.service.btaudiosrc/requestPopup`

Requests the popup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/requestPopup '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannel"></a>
## `setChannel`

`luna://com.webos.service.btaudiosrc/setChannel`

Sets the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setChannel '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdevicevolume"></a>
## `setDeviceVolume`

`luna://com.webos.service.btaudiosrc/setDeviceVolume`

Sets the device volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setDeviceVolume '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoutputgain"></a>
## `setOutputGain`

`luna://com.webos.service.btaudiosrc/setOutputGain`

Sets the output gain.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setOutputGain '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvolumeicontype"></a>
## `setVolumeIconType`

`luna://com.webos.service.btaudiosrc/setVolumeIconType`

Sets the volume icon type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/setVolumeIconType '{}'
```

> ACG groups: bluetooth.manage, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startdiscovery"></a>
## `startDiscovery`

`luna://com.webos.service.btaudiosrc/startDiscovery`

Starts the discovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/startDiscovery '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_getdualaudiostatus"></a>
## `surround/getDualAudioStatus`

`luna://com.webos.service.btaudiosrc/surround/getDualAudioStatus`

Returns the dual audio status (surround)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/getDualAudioStatus '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_getvolumebalancing"></a>
## `surround/getVolumeBalancing`

`luna://com.webos.service.btaudiosrc/surround/getVolumeBalancing`

Returns the volume balancing (surround)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/getVolumeBalancing '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_notifyevent"></a>
## `surround/notifyEvent`

`luna://com.webos.service.btaudiosrc/surround/notifyEvent`

Notifies of the event (surround)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/notifyEvent '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_setvolumebalancing"></a>
## `surround/setVolumeBalancing`

`luna://com.webos.service.btaudiosrc/surround/setVolumeBalancing`

Sets the volume balancing (surround)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/setVolumeBalancing '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="surround_startautotuning"></a>
## `surround/startAutoTuning`

`luna://com.webos.service.btaudiosrc/surround/startAutoTuning`

Starts the auto tuning (surround)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/surround/startAutoTuning '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="toggleleftright"></a>
## `toggleLeftRight`

`luna://com.webos.service.btaudiosrc/toggleLeftRight`

Toggles the left right.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosrc/toggleLeftRight '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
