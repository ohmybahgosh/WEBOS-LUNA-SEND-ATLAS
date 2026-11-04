# `com.webos.service.legacybroadcast.broadcast`

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`bindFakePipeline`](#bindfakepipeline) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`changeChannel`](#changechannel) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`changeChannelService`](#changechannelservice) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`close`](#close) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getAudioChannelList`](#getaudiochannellist) | private |  | audio | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getAudioDescriptionStatus`](#getaudiodescriptionstatus) | private |  | audio | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getAudioLanguageList`](#getaudiolanguagelist) | private |  | audio | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getBroadcastComponentList`](#getbroadcastcomponentlist) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getBroadcastState`](#getbroadcaststate) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getChannelState`](#getchannelstate) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getCurrentChannel`](#getcurrentchannel) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getCurrentSTC`](#getcurrentstc) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getGingaResolution`](#getgingaresolution) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getLinkageUriInfo`](#getlinkageuriinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getMRSInfo`](#getmrsinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getNITRegionInfo`](#getnitregioninfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getPipelineTemporary`](#getpipelinetemporary) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getPipHotkeyState`](#getpiphotkeystate) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getRegionId`](#getregionid) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getSignalStatus`](#getsignalstatus) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`getVideoStatus`](#getvideostatus) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`isAudioDescriptionConflict`](#isaudiodescriptionconflict) | private |  | audio | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`isExistSdtActual`](#isexistsdtactual) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`isPauseOnLive`](#ispauseonlive) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`notifyEndOfProcess`](#notifyendofprocess) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`open`](#open) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`pause`](#pause) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (from on-device permission registry; parameters undocumented). |
| [`pause1`](#pause1) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`pauseOnLive`](#pauseonlive) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`pin`](#pin) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`play`](#play) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (from on-device permission registry; parameters undocumented). |
| [`playSignaling`](#playsignaling) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`registerDataMfu`](#registerdatamfu) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (from on-device permission registry; parameters undocumented). |
| [`scanDetailInformation`](#scandetailinformation) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). ⚠️ |
| [`setAudioChannel`](#setaudiochannel) | private |  | audio | Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`setAudioLanguage`](#setaudiolanguage) | private |  | audio | Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`setAudioMute`](#setaudiomute) | private |  | audio | Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`setBroadcastComponent`](#setbroadcastcomponent) | private |  | tv-broadcast | Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | tv-broadcast | Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`setPipHotkey`](#setpiphotkey) | private |  | tv-broadcast | Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`setSink`](#setsink) | private |  | tv-broadcast | Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`startService`](#startservice) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`stop`](#stop) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`stopService`](#stopservice) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`subscribeSignalTable`](#subscribesignaltable) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |
| [`unpauseToLive`](#unpausetolive) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented). |

<a id="bindfakepipeline"></a>
## `bindFakePipeline`

`luna://com.webos.service.legacybroadcast.broadcast/bindFakePipeline`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/bindFakePipeline '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannel"></a>
## `changeChannel`

`luna://com.webos.service.legacybroadcast.broadcast/changeChannel`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/changeChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannelservice"></a>
## `changeChannelService`

`luna://com.webos.service.legacybroadcast.broadcast/changeChannelService`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/changeChannelService '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.legacybroadcast.broadcast/close`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/close '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiochannellist"></a>
## `getAudioChannelList`

`luna://com.webos.service.legacybroadcast.broadcast/getAudioChannelList`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getAudioChannelList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiodescriptionstatus"></a>
## `getAudioDescriptionStatus`

`luna://com.webos.service.legacybroadcast.broadcast/getAudioDescriptionStatus`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getAudioDescriptionStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiolanguagelist"></a>
## `getAudioLanguageList`

`luna://com.webos.service.legacybroadcast.broadcast/getAudioLanguageList`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getAudioLanguageList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastcomponentlist"></a>
## `getBroadcastComponentList`

`luna://com.webos.service.legacybroadcast.broadcast/getBroadcastComponentList`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getBroadcastComponentList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.legacybroadcast.broadcast/getBroadcastState`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getBroadcastState '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.legacybroadcast.broadcast/getChannelChangeResult`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getChannelChangeResult '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.legacybroadcast.broadcast/getChannelState`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getChannelState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannel"></a>
## `getCurrentChannel`

`luna://com.webos.service.legacybroadcast.broadcast/getCurrentChannel`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getCurrentChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentstc"></a>
## `getCurrentSTC`

`luna://com.webos.service.legacybroadcast.broadcast/getCurrentSTC`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getCurrentSTC '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getgingaresolution"></a>
## `getGingaResolution`

`luna://com.webos.service.legacybroadcast.broadcast/getGingaResolution`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getGingaResolution '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlinkageuriinfo"></a>
## `getLinkageUriInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getLinkageUriInfo`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getLinkageUriInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmrsinfo"></a>
## `getMRSInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getMRSInfo`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getMRSInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnitregioninfo"></a>
## `getNITRegionInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getNITRegionInfo`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getNITRegionInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpipelinetemporary"></a>
## `getPipelineTemporary`

`luna://com.webos.service.legacybroadcast.broadcast/getPipelineTemporary`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getPipelineTemporary '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpiphotkeystate"></a>
## `getPipHotkeyState`

`luna://com.webos.service.legacybroadcast.broadcast/getPipHotkeyState`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getPipHotkeyState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getregionid"></a>
## `getRegionId`

`luna://com.webos.service.legacybroadcast.broadcast/getRegionId`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getRegionId '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatus"></a>
## `getSignalStatus`

`luna://com.webos.service.legacybroadcast.broadcast/getSignalStatus`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getSignalStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getVideoInfo`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getVideoInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideostatus"></a>
## `getVideoStatus`

`luna://com.webos.service.legacybroadcast.broadcast/getVideoStatus`

Getter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getVideoStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isaudiodescriptionconflict"></a>
## `isAudioDescriptionConflict`

`luna://com.webos.service.legacybroadcast.broadcast/isAudioDescriptionConflict`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/isAudioDescriptionConflict '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isexistsdtactual"></a>
## `isExistSdtActual`

`luna://com.webos.service.legacybroadcast.broadcast/isExistSdtActual`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/isExistSdtActual '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ispauseonlive"></a>
## `isPauseOnLive`

`luna://com.webos.service.legacybroadcast.broadcast/isPauseOnLive`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/isPauseOnLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyendofprocess"></a>
## `notifyEndOfProcess`

`luna://com.webos.service.legacybroadcast.broadcast/notifyEndOfProcess`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/notifyEndOfProcess '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.legacybroadcast.broadcast/open`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/open '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.legacybroadcast.broadcast/pause`

Method on com.webos.service.legacybroadcast.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pause '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause1"></a>
## `pause1`

`luna://com.webos.service.legacybroadcast.broadcast/pause1`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pause1 '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pauseonlive"></a>
## `pauseOnLive`

`luna://com.webos.service.legacybroadcast.broadcast/pauseOnLive`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pauseOnLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.legacybroadcast.broadcast/pin`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pin '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play"></a>
## `play`

`luna://com.webos.service.legacybroadcast.broadcast/play`

Method on com.webos.service.legacybroadcast.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/play '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="playsignaling"></a>
## `playSignaling`

`luna://com.webos.service.legacybroadcast.broadcast/playSignaling`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/playSignaling '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerdatamfu"></a>
## `registerDataMfu`

`luna://com.webos.service.legacybroadcast.broadcast/registerDataMfu`

Method on com.webos.service.legacybroadcast.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/registerDataMfu '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scandetailinformation"></a>
## `scanDetailInformation` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.broadcast/scanDetailInformation`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/scanDetailInformation '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiochannel"></a>
## `setAudioChannel`

`luna://com.webos.service.legacybroadcast.broadcast/setAudioChannel`

Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setAudioChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiolanguage"></a>
## `setAudioLanguage`

`luna://com.webos.service.legacybroadcast.broadcast/setAudioLanguage`

Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setAudioLanguage '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.legacybroadcast.broadcast/setAudioMute`

Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setAudioMute '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastcomponent"></a>
## `setBroadcastComponent`

`luna://com.webos.service.legacybroadcast.broadcast/setBroadcastComponent`

Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setBroadcastComponent '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.legacybroadcast.broadcast/setPipelineWindowId`

Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setPipelineWindowId '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpiphotkey"></a>
## `setPipHotkey`

`luna://com.webos.service.legacybroadcast.broadcast/setPipHotkey`

Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setPipHotkey '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsink"></a>
## `setSink`

`luna://com.webos.service.legacybroadcast.broadcast/setSink`

Setter on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setSink '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startservice"></a>
## `startService`

`luna://com.webos.service.legacybroadcast.broadcast/startService`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/startService '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.legacybroadcast.broadcast/stop`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/stop '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopservice"></a>
## `stopService`

`luna://com.webos.service.legacybroadcast.broadcast/stopService`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/stopService '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribesignaltable"></a>
## `subscribeSignalTable`

`luna://com.webos.service.legacybroadcast.broadcast/subscribeSignalTable`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/subscribeSignalTable '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unpausetolive"></a>
## `unpauseToLive`

`luna://com.webos.service.legacybroadcast.broadcast/unpauseToLive`

Method on com.webos.service.legacybroadcast.broadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/unpauseToLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
