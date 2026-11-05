# `com.webos.service.btaudiosnk`

Bluetooth A2DP audio-sink service: connects to and controls Bluetooth audio source devices, manages paired devices, reports play status and media info, and controls the player.

15 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`blockDevice`](#blockdevice) | private |  | audio | inferred | Blocks the device. |
| [`close`](#close) | private |  | audio | inferred | Closes the btaudiosnk. |
| [`connect`](#connect) | private |  | audio | inferred | Connects the btaudiosnk. |
| [`connectLastDevice`](#connectlastdevice) | private |  | audio | inferred | Connects the last device. |
| [`controlPlayer`](#controlplayer) | private |  | audio | inferred | Controls the player. |
| [`customCommand`](#customcommand) | private |  | audio | inferred | Handles the custom command. |
| [`disconnect`](#disconnect) | private |  | audio | inferred | Disconnects the btaudiosnk. |
| [`getMediaInfo`](#getmediainfo) | private |  | audio | inferred | Returns the media info. |
| [`getPairedDevices`](#getpaireddevices) | private |  | audio | inferred | Returns the paired devices. |
| [`getPlayStatus`](#getplaystatus) | private |  | audio | inferred | Returns the play status. |
| [`getState`](#getstate) | private |  | audio | inferred | Returns the state. |
| [`launch`](#launch) | private |  | audio | inferred | Launches the btaudiosnk. |
| [`open`](#open) | private |  | audio | inferred | Opens the btaudiosnk. |
| [`removePairedDevices`](#removepaireddevices) | private |  | audio | inferred | Removes the paired devices. ⚠️ |
| [`setPlayMode`](#setplaymode) | private |  | audio | inferred | Sets the play mode. |

<a id="blockdevice"></a>
## `blockDevice`

`luna://com.webos.service.btaudiosnk/blockDevice`

Blocks the device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/blockDevice '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.btaudiosnk/close`

Closes the btaudiosnk.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/close '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.btaudiosnk/connect`

Connects the btaudiosnk.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/connect '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connectlastdevice"></a>
## `connectLastDevice`

`luna://com.webos.service.btaudiosnk/connectLastDevice`

Connects the last device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/connectLastDevice '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlplayer"></a>
## `controlPlayer`

`luna://com.webos.service.btaudiosnk/controlPlayer`

Controls the player.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/controlPlayer '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="customcommand"></a>
## `customCommand`

`luna://com.webos.service.btaudiosnk/customCommand`

Handles the custom command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/customCommand '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.btaudiosnk/disconnect`

Disconnects the btaudiosnk.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/disconnect '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmediainfo"></a>
## `getMediaInfo`

`luna://com.webos.service.btaudiosnk/getMediaInfo`

Returns the media info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/getMediaInfo '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevices"></a>
## `getPairedDevices`

`luna://com.webos.service.btaudiosnk/getPairedDevices`

Returns the paired devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/getPairedDevices '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getplaystatus"></a>
## `getPlayStatus`

`luna://com.webos.service.btaudiosnk/getPlayStatus`

Returns the play status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/getPlayStatus '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.btaudiosnk/getState`

Returns the state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `peerBdAddress` |  |
| `peerDeviceName` |  |
| `status` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/getState '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launch"></a>
## `launch`

`luna://com.webos.service.btaudiosnk/launch`

Launches the btaudiosnk.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/launch '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.btaudiosnk/open`

Opens the btaudiosnk.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/open '{}'
```

> ACG groups: private, all, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepaireddevices"></a>
## `removePairedDevices` ⚠️ DANGEROUS

`luna://com.webos.service.btaudiosnk/removePairedDevices`

Removes the paired devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/removePairedDevices '{}'
```

> ACG groups: private, all, bluetooth.manage. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setplaymode"></a>
## `setPlayMode`

`luna://com.webos.service.btaudiosnk/setPlayMode`

Sets the play mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.btaudiosnk/setPlayMode '{}'
```

> ACG groups: bluetooth.manage, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
