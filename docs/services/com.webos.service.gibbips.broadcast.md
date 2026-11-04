# `com.webos.service.gibbips.broadcast`

40 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`changeChannel`](#changechannel) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`changeChannelService`](#changechannelservice) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`close`](#close) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getAudioDescriptionInfo`](#getaudiodescriptioninfo) | private |  | audio | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getAudioInfo`](#getaudioinfo) | private |  | audio | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getAudioLanguageList`](#getaudiolanguagelist) | private |  | audio | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getBroadcastComponentList`](#getbroadcastcomponentlist) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getBroadcastState`](#getbroadcaststate) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getChannelState`](#getchannelstate) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getCurrentChannel`](#getcurrentchannel) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getDialogEnhancementInfo`](#getdialogenhancementinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getEmergencyInfo`](#getemergencyinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getLinkageUriInfoType`](#getlinkageuriinfotype) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getMediaTime`](#getmediatime) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getObjectAudioInfo`](#getobjectaudioinfo) | private |  | audio | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getPipHotkeyState`](#getpiphotkeystate) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getPlayState`](#getplaystate) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getSignalStatus`](#getsignalstatus) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`isSupportFvp`](#issupportfvp) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`open`](#open) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`pause`](#pause) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`pause1`](#pause1) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`pin`](#pin) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`play`](#play) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`registerDataMfu`](#registerdatamfu) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`scanDetailInformation`](#scandetailinformation) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). ⚠️ |
| [`setAliveMode`](#setalivemode) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setAudioLanguage`](#setaudiolanguage) | private |  | audio | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setAudioMute`](#setaudiomute) | private |  | audio | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setBroadcastComponent`](#setbroadcastcomponent) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setBroadcastComponentList`](#setbroadcastcomponentlist) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setLinkageUriInfo`](#setlinkageuriinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setObjectAudioInfo`](#setobjectaudioinfo) | private |  | audio | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setPipHotkey`](#setpiphotkey) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`setSink`](#setsink) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`stop`](#stop) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |
| [`subscribeSignalTable`](#subscribesignaltable) | private |  | tv-broadcast | Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented). |

<a id="changechannel"></a>
## `changeChannel`

`luna://com.webos.service.gibbips.broadcast/changeChannel`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/changeChannel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelservice"></a>
## `changeChannelService`

`luna://com.webos.service.gibbips.broadcast/changeChannelService`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/changeChannelService '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.gibbips.broadcast/close`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/close '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudiodescriptioninfo"></a>
## `getAudioDescriptionInfo`

`luna://com.webos.service.gibbips.broadcast/getAudioDescriptionInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getAudioDescriptionInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudioinfo"></a>
## `getAudioInfo`

`luna://com.webos.service.gibbips.broadcast/getAudioInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getAudioInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudiolanguagelist"></a>
## `getAudioLanguageList`

`luna://com.webos.service.gibbips.broadcast/getAudioLanguageList`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getAudioLanguageList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastcomponentlist"></a>
## `getBroadcastComponentList`

`luna://com.webos.service.gibbips.broadcast/getBroadcastComponentList`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getBroadcastComponentList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.gibbips.broadcast/getBroadcastState`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getBroadcastState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.gibbips.broadcast/getChannelChangeResult`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getChannelChangeResult '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.gibbips.broadcast/getChannelState`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getChannelState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannel"></a>
## `getCurrentChannel`

`luna://com.webos.service.gibbips.broadcast/getCurrentChannel`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getCurrentChannel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdialogenhancementinfo"></a>
## `getDialogEnhancementInfo`

`luna://com.webos.service.gibbips.broadcast/getDialogEnhancementInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getDialogEnhancementInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getemergencyinfo"></a>
## `getEmergencyInfo`

`luna://com.webos.service.gibbips.broadcast/getEmergencyInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getEmergencyInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getlinkageuriinfotype"></a>
## `getLinkageUriInfoType`

`luna://com.webos.service.gibbips.broadcast/getLinkageUriInfoType`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getLinkageUriInfoType '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmediatime"></a>
## `getMediaTime`

`luna://com.webos.service.gibbips.broadcast/getMediaTime`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getMediaTime '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getobjectaudioinfo"></a>
## `getObjectAudioInfo`

`luna://com.webos.service.gibbips.broadcast/getObjectAudioInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getObjectAudioInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpiphotkeystate"></a>
## `getPipHotkeyState`

`luna://com.webos.service.gibbips.broadcast/getPipHotkeyState`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getPipHotkeyState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getplaystate"></a>
## `getPlayState`

`luna://com.webos.service.gibbips.broadcast/getPlayState`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getPlayState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatus"></a>
## `getSignalStatus`

`luna://com.webos.service.gibbips.broadcast/getSignalStatus`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getSignalStatus '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.gibbips.broadcast/getVideoInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getVideoInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="issupportfvp"></a>
## `isSupportFvp`

`luna://com.webos.service.gibbips.broadcast/isSupportFvp`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/isSupportFvp '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.gibbips.broadcast/open`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/open '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.gibbips.broadcast/pause`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/pause '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause1"></a>
## `pause1`

`luna://com.webos.service.gibbips.broadcast/pause1`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/pause1 '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.gibbips.broadcast/pin`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/pin '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="play"></a>
## `play`

`luna://com.webos.service.gibbips.broadcast/play`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/play '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerdatamfu"></a>
## `registerDataMfu`

`luna://com.webos.service.gibbips.broadcast/registerDataMfu`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/registerDataMfu '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scandetailinformation"></a>
## `scanDetailInformation` ⚠️ DANGEROUS

`luna://com.webos.service.gibbips.broadcast/scanDetailInformation`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/scanDetailInformation '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalivemode"></a>
## `setAliveMode`

`luna://com.webos.service.gibbips.broadcast/setAliveMode`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setAliveMode '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiolanguage"></a>
## `setAudioLanguage`

`luna://com.webos.service.gibbips.broadcast/setAudioLanguage`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setAudioLanguage '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.gibbips.broadcast/setAudioMute`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setAudioMute '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastcomponent"></a>
## `setBroadcastComponent`

`luna://com.webos.service.gibbips.broadcast/setBroadcastComponent`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setBroadcastComponent '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastcomponentlist"></a>
## `setBroadcastComponentList`

`luna://com.webos.service.gibbips.broadcast/setBroadcastComponentList`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setBroadcastComponentList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setlinkageuriinfo"></a>
## `setLinkageUriInfo`

`luna://com.webos.service.gibbips.broadcast/setLinkageUriInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setLinkageUriInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setobjectaudioinfo"></a>
## `setObjectAudioInfo`

`luna://com.webos.service.gibbips.broadcast/setObjectAudioInfo`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setObjectAudioInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.gibbips.broadcast/setPipelineWindowId`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setPipelineWindowId '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpiphotkey"></a>
## `setPipHotkey`

`luna://com.webos.service.gibbips.broadcast/setPipHotkey`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setPipHotkey '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsink"></a>
## `setSink`

`luna://com.webos.service.gibbips.broadcast/setSink`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setSink '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.gibbips.broadcast/stop`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/stop '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribesignaltable"></a>
## `subscribeSignalTable`

`luna://com.webos.service.gibbips.broadcast/subscribeSignalTable`

Method on com.webos.service.gibbips.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/subscribeSignalTable '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
