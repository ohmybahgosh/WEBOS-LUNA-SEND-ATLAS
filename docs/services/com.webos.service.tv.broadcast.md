# `com.webos.service.tv.broadcast`

24 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`changeChannel`](#changechannel) | private |  | tv-broadcast | Broadcast pipeline control method changeChannel (listed in community research; semantics not documented) |
| [`changeChannelDown`](#changechanneldown) | private |  | tv-broadcast | Broadcast pipeline control method changeChannelDown (listed in community research; semantics not documented) |
| [`changeChannelPrevious`](#changechannelprevious) | private |  | tv-broadcast | Broadcast pipeline control method changeChannelPrevious (listed in community research; semantics not documented) |
| [`changeChannelUp`](#changechannelup) | private |  | tv-broadcast | Broadcast pipeline control method changeChannelUp (listed in community research; semantics not documented) |
| [`changePlaySpeed`](#changeplayspeed) | private |  | tv-broadcast | Broadcast pipeline control method changePlaySpeed (listed in community research; semantics not documented) |
| [`changeVolatileChannel`](#changevolatilechannel) | private |  | tv-broadcast | Broadcast pipeline control method changeVolatileChannel (listed in community research; semantics not documented) |
| [`checkPipHotkey`](#checkpiphotkey) | private |  | tv-broadcast | Broadcast pipeline control method checkPipHotkey (listed in community research; semantics not documented) |
| [`close`](#close) | private |  | tv-broadcast | Broadcast pipeline control method close (listed in community research; semantics not documented) |
| [`getBroadcastState`](#getbroadcaststate) | private |  | tv-broadcast | Broadcast pipeline control method getBroadcastState (listed in community research; semantics not documented) |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | tv-broadcast | Broadcast pipeline control method getChannelChangeResult (listed in community research; semantics not documented) |
| [`getChannelState`](#getchannelstate) | private |  | tv-broadcast | Broadcast pipeline control method getChannelState (listed in community research; semantics not documented) |
| [`getCurrentChannel`](#getcurrentchannel) | private |  | tv-broadcast | Broadcast pipeline control method getCurrentChannel (listed in community research; semantics not documented) |
| [`getPipeline4BootUp`](#getpipeline4bootup) | private |  | tv-broadcast | Broadcast pipeline control method getPipeline4BootUp (listed in community research; semantics not documented) |
| [`getPipelineTemporary`](#getpipelinetemporary) | private |  | tv-broadcast | Broadcast pipeline control method getPipelineTemporary (listed in community research; semantics not documented) |
| [`getVodPauseState`](#getvodpausestate) | private |  | tv-broadcast | Broadcast pipeline control method getVodPauseState (listed in community research; semantics not documented) |
| [`halt`](#halt) | private |  | tv-broadcast | Broadcast pipeline control method halt (listed in community research; semantics not documented) |
| [`open`](#open) | private |  | tv-broadcast | Broadcast pipeline control method open (listed in community research; semantics not documented) |
| [`pause`](#pause) | private |  | tv-broadcast | Broadcast pipeline control method pause (listed in community research; semantics not documented) |
| [`pause1`](#pause1) | private |  | tv-broadcast | Broadcast pipeline control method pause1 (listed in community research; semantics not documented) |
| [`pin`](#pin) | private |  | tv-broadcast | Broadcast pipeline control method pin (listed in community research; semantics not documented) |
| [`resume`](#resume) | private |  | tv-broadcast | Broadcast pipeline control method resume (listed in community research; semantics not documented) |
| [`seek`](#seek) | private |  | tv-broadcast | Broadcast pipeline control method seek (listed in community research; semantics not documented) |
| [`startMVPD`](#startmvpd) | private |  | tv-broadcast | Broadcast pipeline control method startMVPD (listed in community research; semantics not documented) |
| [`stop`](#stop) | private |  | tv-broadcast | Broadcast pipeline control method stop (listed in community research; semantics not documented) |

<a id="changechannel"></a>
## `changeChannel`

`luna://com.webos.service.tv.broadcast/changeChannel`

Broadcast pipeline control method changeChannel (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/changeChannel '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="changechanneldown"></a>
## `changeChannelDown`

`luna://com.webos.service.tv.broadcast/changeChannelDown`

Broadcast pipeline control method changeChannelDown (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `broadcastId` | string (used in the community sample for changeChannelUp/Down) |

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/changeChannelDown '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="changechannelprevious"></a>
## `changeChannelPrevious`

`luna://com.webos.service.tv.broadcast/changeChannelPrevious`

Broadcast pipeline control method changeChannelPrevious (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/changeChannelPrevious '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="changechannelup"></a>
## `changeChannelUp`

`luna://com.webos.service.tv.broadcast/changeChannelUp`

Broadcast pipeline control method changeChannelUp (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `broadcastId` | string (used in the community sample for changeChannelUp/Down) |

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/changeChannelUp '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="changeplayspeed"></a>
## `changePlaySpeed`

`luna://com.webos.service.tv.broadcast/changePlaySpeed`

Broadcast pipeline control method changePlaySpeed (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/changePlaySpeed '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="changevolatilechannel"></a>
## `changeVolatileChannel`

`luna://com.webos.service.tv.broadcast/changeVolatileChannel`

Broadcast pipeline control method changeVolatileChannel (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/changeVolatileChannel '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="checkpiphotkey"></a>
## `checkPipHotkey`

`luna://com.webos.service.tv.broadcast/checkPipHotkey`

Broadcast pipeline control method checkPipHotkey (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/checkPipHotkey '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="close"></a>
## `close`

`luna://com.webos.service.tv.broadcast/close`

Broadcast pipeline control method close (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/close '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.tv.broadcast/getBroadcastState`

Broadcast pipeline control method getBroadcastState (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/getBroadcastState '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.tv.broadcast/getChannelChangeResult`

Broadcast pipeline control method getChannelChangeResult (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/getChannelChangeResult '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.tv.broadcast/getChannelState`

Broadcast pipeline control method getChannelState (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/getChannelState '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="getcurrentchannel"></a>
## `getCurrentChannel`

`luna://com.webos.service.tv.broadcast/getCurrentChannel`

Broadcast pipeline control method getCurrentChannel (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/getCurrentChannel '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="getpipeline4bootup"></a>
## `getPipeline4BootUp`

`luna://com.webos.service.tv.broadcast/getPipeline4BootUp`

Broadcast pipeline control method getPipeline4BootUp (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/getPipeline4BootUp '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="getpipelinetemporary"></a>
## `getPipelineTemporary`

`luna://com.webos.service.tv.broadcast/getPipelineTemporary`

Broadcast pipeline control method getPipelineTemporary (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/getPipelineTemporary '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="getvodpausestate"></a>
## `getVodPauseState`

`luna://com.webos.service.tv.broadcast/getVodPauseState`

Broadcast pipeline control method getVodPauseState (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/getVodPauseState '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="halt"></a>
## `halt`

`luna://com.webos.service.tv.broadcast/halt`

Broadcast pipeline control method halt (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/halt '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="open"></a>
## `open`

`luna://com.webos.service.tv.broadcast/open`

Broadcast pipeline control method open (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/open '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="pause"></a>
## `pause`

`luna://com.webos.service.tv.broadcast/pause`

Broadcast pipeline control method pause (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/pause '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="pause1"></a>
## `pause1`

`luna://com.webos.service.tv.broadcast/pause1`

Broadcast pipeline control method pause1 (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/pause1 '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="pin"></a>
## `pin`

`luna://com.webos.service.tv.broadcast/pin`

Broadcast pipeline control method pin (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/pin '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="resume"></a>
## `resume`

`luna://com.webos.service.tv.broadcast/resume`

Broadcast pipeline control method resume (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/resume '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="seek"></a>
## `seek`

`luna://com.webos.service.tv.broadcast/seek`

Broadcast pipeline control method seek (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/seek '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="startmvpd"></a>
## `startMVPD`

`luna://com.webos.service.tv.broadcast/startMVPD`

Broadcast pipeline control method startMVPD (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/startMVPD '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)

<a id="stop"></a>
## `stop`

`luna://com.webos.service.tv.broadcast/stop`

Broadcast pipeline control method stop (listed in community research; semantics not documented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.broadcast/stop '{}'
```

> Method list from the webostv-research repo; the README cites a patent (KR20150101367A) describing the service. Only changeChannelUp/Down have a code sample.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.broadcast.md)
