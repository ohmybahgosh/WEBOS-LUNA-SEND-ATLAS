# `ssap:audio`

SSAP (remote control protocol) audio endpoint: gets and sets volume and mute, steps volume up/down, reports status, and changes/queries the sound output. Used over the TV's external control socket.

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeSoundOutput`](#changesoundoutput) | ssap |  | audio | documented | Change sound output (alias of apiadapter variant) |
| [`getMute`](#getmute) | ssap |  | audio | documented | Get mute state |
| [`getSoundOutput`](#getsoundoutput) | ssap |  | audio | documented | Get sound output (alias) |
| [`getStatus`](#getstatus) | ssap | yes | audio | documented | Get/subscribe audio status |
| [`getVolume`](#getvolume) | ssap | yes | audio | documented | Get/subscribe volume |
| [`setMute`](#setmute) | ssap |  | audio | documented | Mute/unmute |
| [`setVolume`](#setvolume) | ssap |  | audio | documented | Set volume |
| [`volumeDown`](#volumedown) | ssap |  | audio | documented | Volume down one step |
| [`volumeUp`](#volumeup) | ssap |  | audio | documented | Volume up one step |

<a id="changesoundoutput"></a>
## `changeSoundOutput`

`ssap://audio/changeSoundOutput`

Change sound output (alias of apiadapter variant)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `output` | string e.g. external_arc |

```sh
{"type":"request","id":"1","uri":"ssap://audio/changeSoundOutput","payload":{"output":"external_arc"}}
```

> The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/klattimer/LGWebOSRemote/blob/master/LGTV/remote.py), [2](https://github.com/supersaiyanmode/PyWebOSTV/blob/master/pywebostv/controls.py), [3](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="getmute"></a>
## `getMute`

`ssap://audio/getMute`

Get mute state

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://audio/getMute","payload":{}}
```

> Response {mute:bool}. The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/maudio.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="getsoundoutput"></a>
## `getSoundOutput`

`ssap://audio/getSoundOutput`

Get sound output (alias)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://audio/getSoundOutput","payload":{}}
```

> PyWebOSTV and alga call ssap://audio/getSoundOutput; others use the com.webos.service.apiadapter/audio/getSoundOutput form. The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/supersaiyanmode/PyWebOSTV/blob/master/pywebostv/controls.py), [2](https://github.com/Tenzer/alga/blob/main/src)

<a id="getstatus"></a>
## `getStatus`

`ssap://audio/getStatus`

Get/subscribe audio status

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://audio/getStatus","payload":{}}
```

> Response: {scenario:'mastervolume_tv_speaker', volume:int, mute:bool}. Newer firmware report volume -1 for ARC/eARC soundbars. The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/maudio.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md)

<a id="getvolume"></a>
## `getVolume`

`ssap://audio/getVolume`

Get/subscribe volume

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://audio/getVolume","payload":{}}
```

> Older firmware: {volume, muted}; newer: {volumeStatus:{volume, muteStatus, ...}} (lgtv2 index.js normalises). Response of root luna call com.webos.service.audio/master/getVolume uses volumeStatus.volume as well. The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/maudio.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/index.js)

<a id="setmute"></a>
## `setMute`

`ssap://audio/setMute`

Mute/unmute

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mute` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://audio/setMute","payload":{"mute":true}}
```

> LGTV Companion sends {"mute":"true"} to mute and {} to unmute (string 'true'). The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/maudio.go), [4](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h)

<a id="setvolume"></a>
## `setVolume`

`ssap://audio/setVolume`

Set volume

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `volume` | int 0-100 |

```sh
{"type":"request","id":"1","uri":"ssap://audio/setVolume","payload":{"volume":10}}
```

> The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/maudio.go)

<a id="volumedown"></a>
## `volumeDown`

`ssap://audio/volumeDown`

Volume down one step

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://audio/volumeDown","payload":{}}
```

> The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/maudio.go)

<a id="volumeup"></a>
## `volumeUp`

`ssap://audio/volumeUp`

Volume up one step

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://audio/volumeUp","payload":{}}
```

> Needed for ARC/eARC soundbars that report volume -1; bscpylgtv inserts a delay between steps when sound output is external_arc. The SSAP namespace 'audio' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/maudio.go)
