# `com.webos.service.nabs.broadcast`

27 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`changeChannel`](#changechannel) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`close`](#close) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getAudioInfo`](#getaudioinfo) | private |  | audio | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getAudioLanguageList`](#getaudiolanguagelist) | private |  | audio | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getBroadcastState`](#getbroadcaststate) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getChannelState`](#getchannelstate) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getCurrentChannel`](#getcurrentchannel) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getObjectAudioInfo`](#getobjectaudioinfo) | private |  | audio | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getSignalStatus`](#getsignalstatus) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`hybridtv/getAstData`](#hybridtv_getastdata) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`hybridtv/notifyChannelChange`](#hybridtv_notifychannelchange) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`isPauseOnLive`](#ispauseonlive) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`notifyEndOfProcess`](#notifyendofprocess) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`open`](#open) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`pause1`](#pause1) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`pauseOnLive`](#pauseonlive) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`pin`](#pin) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`setAliveMode`](#setalivemode) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`setAudioLanguage`](#setaudiolanguage) | private |  | audio | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`setAudioMute`](#setaudiomute) | private |  | audio | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`setObjectAudioInfo`](#setobjectaudioinfo) | private |  | audio | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`startService`](#startservice) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`stop`](#stop) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |
| [`unpauseToLive`](#unpausetolive) | private |  | tv-broadcast | Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented). |

<a id="changechannel"></a>
## `changeChannel`

`luna://com.webos.service.nabs.broadcast/changeChannel`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/changeChannel '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.nabs.broadcast/close`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/close '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudioinfo"></a>
## `getAudioInfo`

`luna://com.webos.service.nabs.broadcast/getAudioInfo`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getAudioInfo '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudiolanguagelist"></a>
## `getAudioLanguageList`

`luna://com.webos.service.nabs.broadcast/getAudioLanguageList`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getAudioLanguageList '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.nabs.broadcast/getBroadcastState`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getBroadcastState '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.nabs.broadcast/getChannelChangeResult`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getChannelChangeResult '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.nabs.broadcast/getChannelState`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getChannelState '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannel"></a>
## `getCurrentChannel`

`luna://com.webos.service.nabs.broadcast/getCurrentChannel`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getCurrentChannel '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getobjectaudioinfo"></a>
## `getObjectAudioInfo`

`luna://com.webos.service.nabs.broadcast/getObjectAudioInfo`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getObjectAudioInfo '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatus"></a>
## `getSignalStatus`

`luna://com.webos.service.nabs.broadcast/getSignalStatus`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getSignalStatus '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.nabs.broadcast/getVideoInfo`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/getVideoInfo '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hybridtv_getastdata"></a>
## `hybridtv/getAstData`

`luna://com.webos.service.nabs.broadcast/hybridtv/getAstData`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/hybridtv/getAstData '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hybridtv_notifychannelchange"></a>
## `hybridtv/notifyChannelChange`

`luna://com.webos.service.nabs.broadcast/hybridtv/notifyChannelChange`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/hybridtv/notifyChannelChange '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ispauseonlive"></a>
## `isPauseOnLive`

`luna://com.webos.service.nabs.broadcast/isPauseOnLive`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/isPauseOnLive '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyendofprocess"></a>
## `notifyEndOfProcess`

`luna://com.webos.service.nabs.broadcast/notifyEndOfProcess`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/notifyEndOfProcess '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.nabs.broadcast/open`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/open '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause1"></a>
## `pause1`

`luna://com.webos.service.nabs.broadcast/pause1`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/pause1 '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pauseonlive"></a>
## `pauseOnLive`

`luna://com.webos.service.nabs.broadcast/pauseOnLive`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/pauseOnLive '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.nabs.broadcast/pin`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/pin '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalivemode"></a>
## `setAliveMode`

`luna://com.webos.service.nabs.broadcast/setAliveMode`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/setAliveMode '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiolanguage"></a>
## `setAudioLanguage`

`luna://com.webos.service.nabs.broadcast/setAudioLanguage`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/setAudioLanguage '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.nabs.broadcast/setAudioMute`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/setAudioMute '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setobjectaudioinfo"></a>
## `setObjectAudioInfo`

`luna://com.webos.service.nabs.broadcast/setObjectAudioInfo`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/setObjectAudioInfo '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.nabs.broadcast/setPipelineWindowId`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/setPipelineWindowId '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startservice"></a>
## `startService`

`luna://com.webos.service.nabs.broadcast/startService`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/startService '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.nabs.broadcast/stop`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/stop '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unpausetolive"></a>
## `unpauseToLive`

`luna://com.webos.service.nabs.broadcast/unpauseToLive`

Method on com.webos.service.nabs.broadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.broadcast/unpauseToLive '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
