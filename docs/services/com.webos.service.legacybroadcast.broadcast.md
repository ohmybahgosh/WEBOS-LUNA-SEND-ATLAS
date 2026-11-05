# `com.webos.service.legacybroadcast.broadcast`

Legacy broadcast (Live TV) control: changes channels and services, reports current channel and broadcast state, and queries audio/component lists and channel info. _(inferred from the service's methods)_

48 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`bindFakePipeline`](#bindfakepipeline) | private |  | tv-broadcast | inferred | Binds the fake pipeline. |
| [`changeChannel`](#changechannel) | private |  | tv-broadcast | inferred | Changes the channel. |
| [`changeChannelService`](#changechannelservice) | private |  | tv-broadcast | inferred | Changes the channel service. |
| [`close`](#close) | private |  | tv-broadcast | inferred | Closes the legacybroadcast broadcast. |
| [`getAudioChannelList`](#getaudiochannellist) | private |  | audio | inferred | Returns the audio channel list. |
| [`getAudioDescriptionStatus`](#getaudiodescriptionstatus) | private |  | audio | inferred | Returns the audio description status. |
| [`getAudioLanguageList`](#getaudiolanguagelist) | private |  | audio | inferred | Returns the audio language list. |
| [`getBroadcastComponentList`](#getbroadcastcomponentlist) | private |  | tv-broadcast | inferred | Returns the broadcast component list. |
| [`getBroadcastState`](#getbroadcaststate) | private |  | tv-broadcast | inferred | Returns the broadcast state. |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | tv-broadcast | inferred | Returns the channel change result. |
| [`getChannelState`](#getchannelstate) | private |  | tv-broadcast | inferred | Returns the channel state. |
| [`getCurrentChannel`](#getcurrentchannel) | private |  | tv-broadcast | inferred | Returns the current channel. |
| [`getCurrentSTC`](#getcurrentstc) | private |  | tv-broadcast | inferred | Returns the current STC. |
| [`getGingaResolution`](#getgingaresolution) | private |  | tv-broadcast | inferred | Returns the ginga resolution. |
| [`getLinkageUriInfo`](#getlinkageuriinfo) | private |  | tv-broadcast | inferred | Returns the linkage URI info. |
| [`getMRSInfo`](#getmrsinfo) | private |  | tv-broadcast | inferred | Returns the MRS info. |
| [`getNITRegionInfo`](#getnitregioninfo) | private |  | tv-broadcast | inferred | Returns the NIT region info. |
| [`getPipelineTemporary`](#getpipelinetemporary) | private |  | tv-broadcast | inferred | Returns the pipeline temporary. |
| [`getPipHotkeyState`](#getpiphotkeystate) | private |  | tv-broadcast | inferred | Returns the pip hotkey state. |
| [`getRegionId`](#getregionid) | private |  | tv-broadcast | inferred | Returns the region ID. |
| [`getSignalStatus`](#getsignalstatus) | private |  | tv-broadcast | inferred | Returns the signal status. |
| [`getVideoInfo`](#getvideoinfo) | private |  | tv-broadcast | inferred | Returns the video info. |
| [`getVideoStatus`](#getvideostatus) | private |  | tv-broadcast | inferred | Returns the video status. |
| [`isAudioDescriptionConflict`](#isaudiodescriptionconflict) | private |  | audio | inferred | Reports whether the audio description conflict is set. |
| [`isExistSdtActual`](#isexistsdtactual) | private |  | tv-broadcast | inferred | Reports whether the exist SDT actual is set. |
| [`isPauseOnLive`](#ispauseonlive) | private |  | tv-broadcast | inferred | Reports whether the pause on live is set. |
| [`notifyEndOfProcess`](#notifyendofprocess) | private |  | tv-broadcast | inferred | Notifies of the end of process. |
| [`open`](#open) | private |  | tv-broadcast | inferred | Opens the legacybroadcast broadcast. |
| [`pause`](#pause) | private |  | tv-broadcast | inferred | Pauses the legacybroadcast broadcast. |
| [`pause1`](#pause1) | private |  | tv-broadcast | inferred | Pauses the 1. |
| [`pauseOnLive`](#pauseonlive) | private |  | tv-broadcast | inferred | Pauses the on live. |
| [`pin`](#pin) | private |  | tv-broadcast | inferred | Handles the pin. |
| [`play`](#play) | private |  | tv-broadcast | inferred | Plays the legacybroadcast broadcast. |
| [`playSignaling`](#playsignaling) | private |  | tv-broadcast | inferred | Plays the signaling. |
| [`registerDataMfu`](#registerdatamfu) | private |  | tv-broadcast | inferred | Registers the data mfu. |
| [`scanDetailInformation`](#scandetailinformation) | private |  | tv-broadcast | inferred | Scans for detail information. ⚠️ |
| [`setAudioChannel`](#setaudiochannel) | private |  | audio | inferred | Sets the audio channel. |
| [`setAudioLanguage`](#setaudiolanguage) | private |  | audio | inferred | Sets the audio language. |
| [`setAudioMute`](#setaudiomute) | private |  | audio | inferred | Sets the audio mute. |
| [`setBroadcastComponent`](#setbroadcastcomponent) | private |  | tv-broadcast | inferred | Sets the broadcast component. |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | tv-broadcast | inferred | Sets the pipeline window ID. |
| [`setPipHotkey`](#setpiphotkey) | private |  | tv-broadcast | inferred | Sets the pip hotkey. |
| [`setSink`](#setsink) | private |  | tv-broadcast | inferred | Sets the sink. |
| [`startService`](#startservice) | private |  | tv-broadcast | inferred | Starts the service. |
| [`stop`](#stop) | private |  | tv-broadcast | inferred | Stops the legacybroadcast broadcast. |
| [`stopService`](#stopservice) | private |  | tv-broadcast | inferred | Stops the service. |
| [`subscribeSignalTable`](#subscribesignaltable) | private |  | tv-broadcast | inferred | Subscribes to the signal table. |
| [`unpauseToLive`](#unpausetolive) | private |  | tv-broadcast | inferred | Handles the unpause to live. |

<a id="bindfakepipeline"></a>
## `bindFakePipeline`

`luna://com.webos.service.legacybroadcast.broadcast/bindFakePipeline`

Binds the fake pipeline.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/bindFakePipeline '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannel"></a>
## `changeChannel`

`luna://com.webos.service.legacybroadcast.broadcast/changeChannel`

Changes the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/changeChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannelservice"></a>
## `changeChannelService`

`luna://com.webos.service.legacybroadcast.broadcast/changeChannelService`

Changes the channel service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/changeChannelService '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.legacybroadcast.broadcast/close`

Closes the legacybroadcast broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/close '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiochannellist"></a>
## `getAudioChannelList`

`luna://com.webos.service.legacybroadcast.broadcast/getAudioChannelList`

Returns the audio channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getAudioChannelList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiodescriptionstatus"></a>
## `getAudioDescriptionStatus`

`luna://com.webos.service.legacybroadcast.broadcast/getAudioDescriptionStatus`

Returns the audio description status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `ADStatus` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getAudioDescriptionStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiolanguagelist"></a>
## `getAudioLanguageList`

`luna://com.webos.service.legacybroadcast.broadcast/getAudioLanguageList`

Returns the audio language list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getAudioLanguageList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastcomponentlist"></a>
## `getBroadcastComponentList`

`luna://com.webos.service.legacybroadcast.broadcast/getBroadcastComponentList`

Returns the broadcast component list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getBroadcastComponentList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.legacybroadcast.broadcast/getBroadcastState`

Returns the broadcast state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getBroadcastState '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.legacybroadcast.broadcast/getChannelChangeResult`

Returns the channel change result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getChannelChangeResult '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.legacybroadcast.broadcast/getChannelState`

Returns the channel state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getChannelState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannel"></a>
## `getCurrentChannel`

`luna://com.webos.service.legacybroadcast.broadcast/getCurrentChannel`

Returns the current channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getCurrentChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentstc"></a>
## `getCurrentSTC`

`luna://com.webos.service.legacybroadcast.broadcast/getCurrentSTC`

Returns the current STC.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getCurrentSTC '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getgingaresolution"></a>
## `getGingaResolution`

`luna://com.webos.service.legacybroadcast.broadcast/getGingaResolution`

Returns the ginga resolution.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getGingaResolution '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlinkageuriinfo"></a>
## `getLinkageUriInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getLinkageUriInfo`

Returns the linkage URI info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getLinkageUriInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmrsinfo"></a>
## `getMRSInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getMRSInfo`

Returns the MRS info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getMRSInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnitregioninfo"></a>
## `getNITRegionInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getNITRegionInfo`

Returns the NIT region info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `networkId` |  |
| `nitVersion` |  |
| `physicalNumber` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getNITRegionInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpipelinetemporary"></a>
## `getPipelineTemporary`

`luna://com.webos.service.legacybroadcast.broadcast/getPipelineTemporary`

Returns the pipeline temporary.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getPipelineTemporary '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpiphotkeystate"></a>
## `getPipHotkeyState`

`luna://com.webos.service.legacybroadcast.broadcast/getPipHotkeyState`

Returns the pip hotkey state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getPipHotkeyState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getregionid"></a>
## `getRegionId`

`luna://com.webos.service.legacybroadcast.broadcast/getRegionId`

Returns the region ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getRegionId '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatus"></a>
## `getSignalStatus`

`luna://com.webos.service.legacybroadcast.broadcast/getSignalStatus`

Returns the signal status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getSignalStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.legacybroadcast.broadcast/getVideoInfo`

Returns the video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getVideoInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideostatus"></a>
## `getVideoStatus`

`luna://com.webos.service.legacybroadcast.broadcast/getVideoStatus`

Returns the video status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/getVideoStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isaudiodescriptionconflict"></a>
## `isAudioDescriptionConflict`

`luna://com.webos.service.legacybroadcast.broadcast/isAudioDescriptionConflict`

Reports whether the audio description conflict is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/isAudioDescriptionConflict '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isexistsdtactual"></a>
## `isExistSdtActual`

`luna://com.webos.service.legacybroadcast.broadcast/isExistSdtActual`

Reports whether the exist SDT actual is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/isExistSdtActual '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ispauseonlive"></a>
## `isPauseOnLive`

`luna://com.webos.service.legacybroadcast.broadcast/isPauseOnLive`

Reports whether the pause on live is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/isPauseOnLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyendofprocess"></a>
## `notifyEndOfProcess`

`luna://com.webos.service.legacybroadcast.broadcast/notifyEndOfProcess`

Notifies of the end of process.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/notifyEndOfProcess '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.legacybroadcast.broadcast/open`

Opens the legacybroadcast broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/open '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.legacybroadcast.broadcast/pause`

Pauses the legacybroadcast broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pause '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause1"></a>
## `pause1`

`luna://com.webos.service.legacybroadcast.broadcast/pause1`

Pauses the 1.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pause1 '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pauseonlive"></a>
## `pauseOnLive`

`luna://com.webos.service.legacybroadcast.broadcast/pauseOnLive`

Pauses the on live.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pauseOnLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.legacybroadcast.broadcast/pin`

Handles the pin.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/pin '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play"></a>
## `play`

`luna://com.webos.service.legacybroadcast.broadcast/play`

Plays the legacybroadcast broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/play '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="playsignaling"></a>
## `playSignaling`

`luna://com.webos.service.legacybroadcast.broadcast/playSignaling`

Plays the signaling.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/playSignaling '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerdatamfu"></a>
## `registerDataMfu`

`luna://com.webos.service.legacybroadcast.broadcast/registerDataMfu`

Registers the data mfu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/registerDataMfu '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scandetailinformation"></a>
## `scanDetailInformation` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.broadcast/scanDetailInformation`

Scans for detail information.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/scanDetailInformation '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiochannel"></a>
## `setAudioChannel`

`luna://com.webos.service.legacybroadcast.broadcast/setAudioChannel`

Sets the audio channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setAudioChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiolanguage"></a>
## `setAudioLanguage`

`luna://com.webos.service.legacybroadcast.broadcast/setAudioLanguage`

Sets the audio language.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setAudioLanguage '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.legacybroadcast.broadcast/setAudioMute`

Sets the audio mute.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setAudioMute '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastcomponent"></a>
## `setBroadcastComponent`

`luna://com.webos.service.legacybroadcast.broadcast/setBroadcastComponent`

Sets the broadcast component.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setBroadcastComponent '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.legacybroadcast.broadcast/setPipelineWindowId`

Sets the pipeline window ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setPipelineWindowId '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpiphotkey"></a>
## `setPipHotkey`

`luna://com.webos.service.legacybroadcast.broadcast/setPipHotkey`

Sets the pip hotkey.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setPipHotkey '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsink"></a>
## `setSink`

`luna://com.webos.service.legacybroadcast.broadcast/setSink`

Sets the sink.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/setSink '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startservice"></a>
## `startService`

`luna://com.webos.service.legacybroadcast.broadcast/startService`

Starts the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/startService '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.legacybroadcast.broadcast/stop`

Stops the legacybroadcast broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/stop '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopservice"></a>
## `stopService`

`luna://com.webos.service.legacybroadcast.broadcast/stopService`

Stops the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/stopService '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribesignaltable"></a>
## `subscribeSignalTable`

`luna://com.webos.service.legacybroadcast.broadcast/subscribeSignalTable`

Subscribes to the signal table.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/subscribeSignalTable '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unpausetolive"></a>
## `unpauseToLive`

`luna://com.webos.service.legacybroadcast.broadcast/unpauseToLive`

Handles the unpause to live.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.broadcast/unpauseToLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
