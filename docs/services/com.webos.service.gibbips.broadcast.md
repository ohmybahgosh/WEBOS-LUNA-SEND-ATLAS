# `com.webos.service.gibbips.broadcast`

GIBBIPS live-broadcast service: changes channels and reports broadcast/channel/play state, audio and component info, emergency info and media time for live TV. _(inferred from the service's methods)_

40 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeChannel`](#changechannel) | private |  | tv-broadcast | inferred | Changes the channel. |
| [`changeChannelService`](#changechannelservice) | private |  | tv-broadcast | inferred | Changes the channel service. |
| [`close`](#close) | private |  | tv-broadcast | inferred | Closes the gibbips broadcast. |
| [`getAudioDescriptionInfo`](#getaudiodescriptioninfo) | private |  | audio | inferred | Returns the audio description info. |
| [`getAudioInfo`](#getaudioinfo) | private |  | audio | inferred | Returns the audio info. |
| [`getAudioLanguageList`](#getaudiolanguagelist) | private |  | audio | inferred | Returns the audio language list. |
| [`getBroadcastComponentList`](#getbroadcastcomponentlist) | private |  | tv-broadcast | inferred | Returns the broadcast component list. |
| [`getBroadcastState`](#getbroadcaststate) | private |  | tv-broadcast | inferred | Returns the broadcast state. |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | tv-broadcast | inferred | Returns the channel change result. |
| [`getChannelState`](#getchannelstate) | private |  | tv-broadcast | inferred | Returns the channel state. |
| [`getCurrentChannel`](#getcurrentchannel) | private |  | tv-broadcast | inferred | Returns the current channel. |
| [`getDialogEnhancementInfo`](#getdialogenhancementinfo) | private |  | tv-broadcast | inferred | Returns the dialog enhancement info. |
| [`getEmergencyInfo`](#getemergencyinfo) | private |  | tv-broadcast | inferred | Returns the emergency info. |
| [`getLinkageUriInfoType`](#getlinkageuriinfotype) | private |  | tv-broadcast | inferred | Returns the linkage URI info type. |
| [`getMediaTime`](#getmediatime) | private |  | tv-broadcast | inferred | Returns the media time. |
| [`getObjectAudioInfo`](#getobjectaudioinfo) | private |  | audio | inferred | Returns the object audio info. |
| [`getPipHotkeyState`](#getpiphotkeystate) | private |  | tv-broadcast | inferred | Returns the pip hotkey state. |
| [`getPlayState`](#getplaystate) | private |  | tv-broadcast | inferred | Returns the play state. |
| [`getSignalStatus`](#getsignalstatus) | private |  | tv-broadcast | inferred | Returns the signal status. |
| [`getVideoInfo`](#getvideoinfo) | private |  | tv-broadcast | inferred | Returns the video info. |
| [`isSupportFvp`](#issupportfvp) | private |  | tv-broadcast | inferred | Reports whether the support fvp is set. |
| [`open`](#open) | private |  | tv-broadcast | inferred | Opens the gibbips broadcast. |
| [`pause`](#pause) | private |  | tv-broadcast | inferred | Pauses the gibbips broadcast. |
| [`pause1`](#pause1) | private |  | tv-broadcast | inferred | Pauses the 1. |
| [`pin`](#pin) | private |  | tv-broadcast | inferred | Handles the pin. |
| [`play`](#play) | private |  | tv-broadcast | inferred | Plays the gibbips broadcast. |
| [`registerDataMfu`](#registerdatamfu) | private |  | tv-broadcast | inferred | Registers the data mfu. |
| [`scanDetailInformation`](#scandetailinformation) | private |  | tv-broadcast | inferred | Scans for detail information. ⚠️ |
| [`setAliveMode`](#setalivemode) | private |  | tv-broadcast | inferred | Sets the alive mode. |
| [`setAudioLanguage`](#setaudiolanguage) | private |  | audio | inferred | Sets the audio language. |
| [`setAudioMute`](#setaudiomute) | private |  | audio | inferred | Sets the audio mute. |
| [`setBroadcastComponent`](#setbroadcastcomponent) | private |  | tv-broadcast | inferred | Sets the broadcast component. |
| [`setBroadcastComponentList`](#setbroadcastcomponentlist) | private |  | tv-broadcast | inferred | Sets the broadcast component list. |
| [`setLinkageUriInfo`](#setlinkageuriinfo) | private |  | tv-broadcast | inferred | Sets the linkage URI info. |
| [`setObjectAudioInfo`](#setobjectaudioinfo) | private |  | audio | inferred | Sets the object audio info. |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | tv-broadcast | inferred | Sets the pipeline window ID. |
| [`setPipHotkey`](#setpiphotkey) | private |  | tv-broadcast | inferred | Sets the pip hotkey. |
| [`setSink`](#setsink) | private |  | tv-broadcast | inferred | Sets the sink. |
| [`stop`](#stop) | private |  | tv-broadcast | inferred | Stops the gibbips broadcast. |
| [`subscribeSignalTable`](#subscribesignaltable) | private |  | tv-broadcast | inferred | Subscribes to the signal table. |

<a id="changechannel"></a>
## `changeChannel`

`luna://com.webos.service.gibbips.broadcast/changeChannel`

Changes the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/changeChannel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelservice"></a>
## `changeChannelService`

`luna://com.webos.service.gibbips.broadcast/changeChannelService`

Changes the channel service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/changeChannelService '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.gibbips.broadcast/close`

Closes the gibbips broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/close '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudiodescriptioninfo"></a>
## `getAudioDescriptionInfo`

`luna://com.webos.service.gibbips.broadcast/getAudioDescriptionInfo`

Returns the audio description info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getAudioDescriptionInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudioinfo"></a>
## `getAudioInfo`

`luna://com.webos.service.gibbips.broadcast/getAudioInfo`

Returns the audio info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getAudioInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudiolanguagelist"></a>
## `getAudioLanguageList`

`luna://com.webos.service.gibbips.broadcast/getAudioLanguageList`

Returns the audio language list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getAudioLanguageList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastcomponentlist"></a>
## `getBroadcastComponentList`

`luna://com.webos.service.gibbips.broadcast/getBroadcastComponentList`

Returns the broadcast component list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getBroadcastComponentList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.gibbips.broadcast/getBroadcastState`

Returns the broadcast state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getBroadcastState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.gibbips.broadcast/getChannelChangeResult`

Returns the channel change result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getChannelChangeResult '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.gibbips.broadcast/getChannelState`

Returns the channel state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getChannelState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannel"></a>
## `getCurrentChannel`

`luna://com.webos.service.gibbips.broadcast/getCurrentChannel`

Returns the current channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getCurrentChannel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdialogenhancementinfo"></a>
## `getDialogEnhancementInfo`

`luna://com.webos.service.gibbips.broadcast/getDialogEnhancementInfo`

Returns the dialog enhancement info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getDialogEnhancementInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getemergencyinfo"></a>
## `getEmergencyInfo`

`luna://com.webos.service.gibbips.broadcast/getEmergencyInfo`

Returns the emergency info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getEmergencyInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getlinkageuriinfotype"></a>
## `getLinkageUriInfoType`

`luna://com.webos.service.gibbips.broadcast/getLinkageUriInfoType`

Returns the linkage URI info type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getLinkageUriInfoType '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmediatime"></a>
## `getMediaTime`

`luna://com.webos.service.gibbips.broadcast/getMediaTime`

Returns the media time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getMediaTime '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getobjectaudioinfo"></a>
## `getObjectAudioInfo`

`luna://com.webos.service.gibbips.broadcast/getObjectAudioInfo`

Returns the object audio info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getObjectAudioInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpiphotkeystate"></a>
## `getPipHotkeyState`

`luna://com.webos.service.gibbips.broadcast/getPipHotkeyState`

Returns the pip hotkey state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getPipHotkeyState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getplaystate"></a>
## `getPlayState`

`luna://com.webos.service.gibbips.broadcast/getPlayState`

Returns the play state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getPlayState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatus"></a>
## `getSignalStatus`

`luna://com.webos.service.gibbips.broadcast/getSignalStatus`

Returns the signal status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getSignalStatus '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.gibbips.broadcast/getVideoInfo`

Returns the video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/getVideoInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="issupportfvp"></a>
## `isSupportFvp`

`luna://com.webos.service.gibbips.broadcast/isSupportFvp`

Reports whether the support fvp is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/isSupportFvp '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.gibbips.broadcast/open`

Opens the gibbips broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/open '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.gibbips.broadcast/pause`

Pauses the gibbips broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/pause '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause1"></a>
## `pause1`

`luna://com.webos.service.gibbips.broadcast/pause1`

Pauses the 1.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/pause1 '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.gibbips.broadcast/pin`

Handles the pin.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/pin '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="play"></a>
## `play`

`luna://com.webos.service.gibbips.broadcast/play`

Plays the gibbips broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/play '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerdatamfu"></a>
## `registerDataMfu`

`luna://com.webos.service.gibbips.broadcast/registerDataMfu`

Registers the data mfu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/registerDataMfu '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scandetailinformation"></a>
## `scanDetailInformation` ⚠️ DANGEROUS

`luna://com.webos.service.gibbips.broadcast/scanDetailInformation`

Scans for detail information.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/scanDetailInformation '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalivemode"></a>
## `setAliveMode`

`luna://com.webos.service.gibbips.broadcast/setAliveMode`

Sets the alive mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setAliveMode '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiolanguage"></a>
## `setAudioLanguage`

`luna://com.webos.service.gibbips.broadcast/setAudioLanguage`

Sets the audio language.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setAudioLanguage '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.gibbips.broadcast/setAudioMute`

Sets the audio mute.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setAudioMute '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastcomponent"></a>
## `setBroadcastComponent`

`luna://com.webos.service.gibbips.broadcast/setBroadcastComponent`

Sets the broadcast component.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setBroadcastComponent '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastcomponentlist"></a>
## `setBroadcastComponentList`

`luna://com.webos.service.gibbips.broadcast/setBroadcastComponentList`

Sets the broadcast component list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setBroadcastComponentList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setlinkageuriinfo"></a>
## `setLinkageUriInfo`

`luna://com.webos.service.gibbips.broadcast/setLinkageUriInfo`

Sets the linkage URI info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setLinkageUriInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setobjectaudioinfo"></a>
## `setObjectAudioInfo`

`luna://com.webos.service.gibbips.broadcast/setObjectAudioInfo`

Sets the object audio info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setObjectAudioInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.gibbips.broadcast/setPipelineWindowId`

Sets the pipeline window ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setPipelineWindowId '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpiphotkey"></a>
## `setPipHotkey`

`luna://com.webos.service.gibbips.broadcast/setPipHotkey`

Sets the pip hotkey.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setPipHotkey '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsink"></a>
## `setSink`

`luna://com.webos.service.gibbips.broadcast/setSink`

Sets the sink.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/setSink '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.gibbips.broadcast/stop`

Stops the gibbips broadcast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/stop '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribesignaltable"></a>
## `subscribeSignalTable`

`luna://com.webos.service.gibbips.broadcast/subscribeSignalTable`

Subscribes to the signal table.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.broadcast/subscribeSignalTable '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
