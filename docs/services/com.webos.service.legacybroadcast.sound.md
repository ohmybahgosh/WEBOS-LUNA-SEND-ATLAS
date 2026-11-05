# `com.webos.service.legacybroadcast.sound`

Legacy broadcast audio control: reports DTV audio info and running state and gets/sets the speaker output type. _(inferred from the service's methods)_

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAudioInfo`](#getaudioinfo) | private |  | audio | inferred | Returns the audio info. |
| [`getAudioTest`](#getaudiotest) | private |  | audio | inferred | Returns the audio test. |
| [`getCurrentAudioType`](#getcurrentaudiotype) | private |  | audio | inferred | Returns the current audio type. |
| [`getDTVAudioRunningState`](#getdtvaudiorunningstate) | private |  | audio | inferred | Returns the DTV audio running state. |
| [`getSpeakerOutType`](#getspeakerouttype) | private |  | tv-broadcast | inferred | Returns the speaker out type. |
| [`setAudioTest`](#setaudiotest) | private |  | audio | inferred | Sets the audio test. |
| [`setSpeakerOutType`](#setspeakerouttype) | private |  | tv-broadcast | inferred | Sets the speaker out type. |

<a id="getaudioinfo"></a>
## `getAudioInfo`

`luna://com.webos.service.legacybroadcast.sound/getAudioInfo`

Returns the audio info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.sound/getAudioInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiotest"></a>
## `getAudioTest`

`luna://com.webos.service.legacybroadcast.sound/getAudioTest`

Returns the audio test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `audCurAnalogStatus` |  |
| `broadcastId` |  |
| `testResult1` |  |
| `testResult2` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.sound/getAudioTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiotype"></a>
## `getCurrentAudioType`

`luna://com.webos.service.legacybroadcast.sound/getCurrentAudioType`

Returns the current audio type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.sound/getCurrentAudioType '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdtvaudiorunningstate"></a>
## `getDTVAudioRunningState`

`luna://com.webos.service.legacybroadcast.sound/getDTVAudioRunningState`

Returns the DTV audio running state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.sound/getDTVAudioRunningState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getspeakerouttype"></a>
## `getSpeakerOutType`

`luna://com.webos.service.legacybroadcast.sound/getSpeakerOutType`

Returns the speaker out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.sound/getSpeakerOutType '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiotest"></a>
## `setAudioTest`

`luna://com.webos.service.legacybroadcast.sound/setAudioTest`

Sets the audio test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.sound/setAudioTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setspeakerouttype"></a>
## `setSpeakerOutType`

`luna://com.webos.service.legacybroadcast.sound/setSpeakerOutType`

Sets the speaker out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.sound/setSpeakerOutType '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
