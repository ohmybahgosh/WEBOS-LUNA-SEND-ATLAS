# `com.webos.service.utp.sound`

Broadcast audio helper: reports DTV audio info and running state and gets/sets the speaker output type. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAudioInfo`](#getaudioinfo) | private |  | audio | inferred | Returns the audio info. |
| [`getDTVAudioRunningState`](#getdtvaudiorunningstate) | private |  | audio | inferred | Returns the DTV audio running state. |
| [`getSpeakerOutType`](#getspeakerouttype) | private |  | misc | inferred | Returns the speaker out type. |
| [`setSpeakerOutType`](#setspeakerouttype) | private |  | misc | inferred | Sets the speaker out type. |

<a id="getaudioinfo"></a>
## `getAudioInfo`

`luna://com.webos.service.utp.sound/getAudioInfo`

Returns the audio info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.sound/getAudioInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdtvaudiorunningstate"></a>
## `getDTVAudioRunningState`

`luna://com.webos.service.utp.sound/getDTVAudioRunningState`

Returns the DTV audio running state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.sound/getDTVAudioRunningState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getspeakerouttype"></a>
## `getSpeakerOutType`

`luna://com.webos.service.utp.sound/getSpeakerOutType`

Returns the speaker out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.sound/getSpeakerOutType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setspeakerouttype"></a>
## `setSpeakerOutType`

`luna://com.webos.service.utp.sound/setSpeakerOutType`

Sets the speaker out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.sound/setSpeakerOutType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
