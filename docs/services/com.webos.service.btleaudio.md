# `com.webos.service.btleaudio`

22 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`connect`](#connect) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`disconnect`](#disconnect) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`getBroadcastStatus`](#getbroadcaststatus) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`getDiscoveredDeviceList`](#getdiscovereddevicelist) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`getLeAudioUuid`](#getleaudiouuid) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`getPairedDeviceList`](#getpaireddevicelist) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`mute`](#mute) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`notifyUserSelection`](#notifyuserselection) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`pair`](#pair) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`resetLeAudioSettings`](#resetleaudiosettings) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). ⚠️ |
| [`setAutoConnect`](#setautoconnect) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`setBroadcastStatus`](#setbroadcaststatus) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`setVolume`](#setvolume) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`startBroadcast`](#startbroadcast) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`startLeAudioService`](#startleaudioservice) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`startScan`](#startscan) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`stopBroadcast`](#stopbroadcast) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`stopScan`](#stopscan) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`unmute`](#unmute) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`unpair`](#unpair) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`volumeDown`](#volumedown) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |
| [`volumeUp`](#volumeup) | private |  | audio | Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented). |

<a id="connect"></a>
## `connect`

`luna://com.webos.service.btleaudio/connect`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/connect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.btleaudio/disconnect`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/disconnect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststatus"></a>
## `getBroadcastStatus`

`luna://com.webos.service.btleaudio/getBroadcastStatus`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/getBroadcastStatus '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdiscovereddevicelist"></a>
## `getDiscoveredDeviceList`

`luna://com.webos.service.btleaudio/getDiscoveredDeviceList`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/getDiscoveredDeviceList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getleaudiouuid"></a>
## `getLeAudioUuid`

`luna://com.webos.service.btleaudio/getLeAudioUuid`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/getLeAudioUuid '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevicelist"></a>
## `getPairedDeviceList`

`luna://com.webos.service.btleaudio/getPairedDeviceList`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/getPairedDeviceList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mute"></a>
## `mute`

`luna://com.webos.service.btleaudio/mute`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/mute '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyuserselection"></a>
## `notifyUserSelection`

`luna://com.webos.service.btleaudio/notifyUserSelection`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/notifyUserSelection '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pair"></a>
## `pair`

`luna://com.webos.service.btleaudio/pair`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/pair '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="resetleaudiosettings"></a>
## `resetLeAudioSettings` ⚠️ DANGEROUS

`luna://com.webos.service.btleaudio/resetLeAudioSettings`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/resetLeAudioSettings '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setautoconnect"></a>
## `setAutoConnect`

`luna://com.webos.service.btleaudio/setAutoConnect`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/setAutoConnect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcaststatus"></a>
## `setBroadcastStatus`

`luna://com.webos.service.btleaudio/setBroadcastStatus`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/setBroadcastStatus '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvolume"></a>
## `setVolume`

`luna://com.webos.service.btleaudio/setVolume`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/setVolume '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startbroadcast"></a>
## `startBroadcast`

`luna://com.webos.service.btleaudio/startBroadcast`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/startBroadcast '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startleaudioservice"></a>
## `startLeAudioService`

`luna://com.webos.service.btleaudio/startLeAudioService`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/startLeAudioService '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startscan"></a>
## `startScan`

`luna://com.webos.service.btleaudio/startScan`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/startScan '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopbroadcast"></a>
## `stopBroadcast`

`luna://com.webos.service.btleaudio/stopBroadcast`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/stopBroadcast '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopscan"></a>
## `stopScan`

`luna://com.webos.service.btleaudio/stopScan`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/stopScan '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unmute"></a>
## `unmute`

`luna://com.webos.service.btleaudio/unmute`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/unmute '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unpair"></a>
## `unpair`

`luna://com.webos.service.btleaudio/unpair`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/unpair '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="volumedown"></a>
## `volumeDown`

`luna://com.webos.service.btleaudio/volumeDown`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/volumeDown '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="volumeup"></a>
## `volumeUp`

`luna://com.webos.service.btleaudio/volumeUp`

Method on com.webos.service.btleaudio (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.btleaudio/volumeUp '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
