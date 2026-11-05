# `com.webos.service.audiooutput`

Audio output service: connects audio source to output sink, controls volume and mute, selects sound output, and manages sound-quality settings.

18 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`audio`](#audio) | unknown |  | audio | documented | Contains information of the connections between source and sink. Note: If no Source/Sink are connected, it returns an empty array. |
| [`audio/connect`](#audio_connect) | public |  | audio | documented | Connects the audio source to the audio sink. |
| [`audio/disconnect`](#audio_disconnect) | public |  | audio | documented | Disconnects from the audio sink. Note: No changes if there is no connection. |
| [`audio/getHeadphoneStatus`](#audio_getheadphonestatus) | private |  | audio | inferred | Returns the headphone status (audio) |
| [`audio/getStatus`](#audio_getstatus) | public |  | audio | documented | Lists the information of all the connected audio source and sinks. |
| [`audio/mute`](#audio_mute) | public |  | audio | documented | Mutes or unmutes the connected audio source. |
| [`audio/removePipelineInfo`](#audio_removepipelineinfo) | private |  | audio | inferred | Removes the pipeline info (audio) ⚠️ |
| [`audio/setInputVolume`](#audio_setinputvolume) | private |  | audio | inferred | Sets the input volume (audio) |
| [`audio/setSoundOut`](#audio_setsoundout) | public |  | audio | documented | Sets the audio output device to which the audio must be routed. |
| [`audio/volume/down`](#audio_volume_down) | public |  | audio | documented | Linearly decreases, the master volume of the audio output device. |
| [`audio/volume/getStatus`](#audio_volume_getstatus) | public |  | audio | documented | Lists the information of all available audio output devices. |
| [`audio/volume/muteSoundOut`](#audio_volume_mutesoundout) | public |  | audio | documented | Mutes the audio output device. |
| [`audio/volume/set`](#audio_volume_set) | public |  | audio | documented | Sets the volume of the audio output device, to a specific numerical value. |
| [`audio/volume/up`](#audio_volume_up) | public |  | audio | documented | Linearly increases, the master volume of the audio output device. |
| [`quality/getSettings`](#quality_getsettings) | private |  | audio | inferred | Returns the settings (quality) |
| [`quality/setQualityAttribute`](#quality_setqualityattribute) | private |  | audio | inferred | Sets the quality attribute (quality) |
| [`quality/setSettings`](#quality_setsettings) | private |  | audio | inferred | Sets the settings (quality) |
| [`volumeStatus`](#volumestatus) | unknown |  | audio | documented | Contains the information of the audio output devices. |

<a id="audio"></a>
## `audio`

`luna://com.webos.service.audiooutput/audio`

Contains information of the connections between source and sink. Note: If no Source/Sink are connected, it returns an empty array.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/audio '{}'
```

> Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_connect"></a>
## `audio/connect`

`luna://com.webos.service.audiooutput/audio/connect`

Connects the audio source to the audio sink.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Indicates the audio source. Possible values are: AMIXER |
| `sink` | String (required) Indicates the audio sink. Possible values are: ALSA |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `source` | String (optional) Indicates the audio source. |
| `sink` | String (optional) Indicates the audio sink. |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/connect '{ "source":"AMIXER", "sink":"ALSA" }
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; source:String; sink:String \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_disconnect"></a>
## `audio/disconnect`

`luna://com.webos.service.audiooutput/audio/disconnect`

Disconnects from the audio sink. Note: No changes if there is no connection.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Indicates the audio source. Possible values are: AMIXER |
| `sink` | String (required) Indicates the audio sink. Possible values are: ALSA |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `source` | String (optional) Indicates the audio source. |
| `sink` | String (optional) Indicates the audio sink. |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/disconnect '{"source":"AMIXER","sink":"ALSA"}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; source:String; sink:String \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_getheadphonestatus"></a>
## `audio/getHeadphoneStatus`

`luna://com.webos.service.audiooutput/audio/getHeadphoneStatus`

Returns the headphone status (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/audio/getHeadphoneStatus '{}'
```

> ACG groups: all, media.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="audio_getstatus"></a>
## `audio/getStatus`

`luna://com.webos.service.audiooutput/audio/getStatus`

Lists the information of all the connected audio source and sinks.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `audio` | Object array: audio (optional) Contains the connections between source and sink. Note: For definition of the object, click the link from the "Type" column. |

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/audio/getStatus '{}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; audio:Object array: audio \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_mute"></a>
## `audio/mute`

`luna://com.webos.service.audiooutput/audio/mute`

Mutes or unmutes the connected audio source.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Indicates the audio source. Possible values are: AMIXER |
| `sink` | String (required) Indicates the audio sink. Possible values are: ALSA |
| `mute` | Boolean (required) Indicates if the audio source is to be muted. Possible values are: true : The audio source is muted. false : The audio source is not muted. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `source` | String (optional) Indicates the audio source. |
| `sink` | String (optional) Indicates the audio sink. |
| `mute` | Boolean (optional) Indicates if the audio source is muted. Possible values are: - true: The audio source is muted. - false: The audio source is not muted. |

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/audio/mute '{ "sink":"ALSA", "source":"AMIXER", "mute":true }
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; source:String; sink:String; mute:Boolean \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_removepipelineinfo"></a>
## `audio/removePipelineInfo` ⚠️ DANGEROUS

`luna://com.webos.service.audiooutput/audio/removePipelineInfo`

Removes the pipeline info (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/audio/removePipelineInfo '{}'
```

> ACG groups: all, media. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="audio_setinputvolume"></a>
## `audio/setInputVolume`

`luna://com.webos.service.audiooutput/audio/setInputVolume`

Sets the input volume (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/audio/setInputVolume '{}'
```

> ACG groups: all, media.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="audio_setsoundout"></a>
## `audio/setSoundOut`

`luna://com.webos.service.audiooutput/audio/setSoundOut`

Sets the audio output device to which the audio must be routed.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOut` | String (required) Indicates the audio output device. Possible values are: ALSA |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `soundOut` | String (optional) Indicates the audio output device. |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/setSoundOut '{"soundOut":"ALSA"}
```

> ACG: audiooutput.management \| Returns: returnValue:String; errorCode:Number (int8_t); errorText:String; soundOut:String \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_volume_down"></a>
## `audio/volume/down`

`luna://com.webos.service.audiooutput/audio/volume/down`

Linearly decreases, the master volume of the audio output device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOutput` | String (required) Indicates the audio output device. Possible values are: alsa |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `soundOutput` | String (optional) Indicates the audio output device. |
| `volume` | Number (int8\_t) (optional) Indicates the volume level after it is decreased. Possible range: 0 ~ 100 |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/volume/down '{"soundOutput":"alsa"}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; soundOutput:String; volume:Number (int8_t) \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_volume_getstatus"></a>
## `audio/volume/getStatus`

`luna://com.webos.service.audiooutput/audio/volume/getStatus`

Lists the information of all available audio output devices.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |
| `volumeStatus` | Object array: volumeStatus (optional) Contains the information of the audio output devices. |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/volume/getStatus '{}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; volumeStatus:Object array: volumeStatus \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_volume_mutesoundout"></a>
## `audio/volume/muteSoundOut`

`luna://com.webos.service.audiooutput/audio/volume/muteSoundOut`

Mutes the audio output device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOutput` | String (required) Indicates the audio output device. Possible values are: ALSA |
| `mute` | Boolean (required) Indicates if the audio output device is to be muted. Possible values are: true : muted. false : not muted. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `soundOutput` | String (optional) Indicates the audio output device. |
| `mute` | Boolean (optional) Indicates if the audio output device is muted. |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/volume/muteSoundOut '{"soundOutput":"ALSA","mute":false}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; soundOutput:String; mute:Boolean \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_volume_set"></a>
## `audio/volume/set`

`luna://com.webos.service.audiooutput/audio/volume/set`

Sets the volume of the audio output device, to a specific numerical value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOutput` | String (required) Indicates the audio output device. Possible values are: ALSA |
| `volume` | Number (int8_t) (required) Indicates the volume level to be set. Possible range: 0 - 100 |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `soundOutput` | String (optional) Indicates the audio output device. |
| `volume` | Number (int8\_t) (optional) Indicates the volume level to be set. Possible range: 0 - 100 |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/volume/set '{"soundOutput":"ALSA","volume":10}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; soundOutput:String; volume:Number (int8_t) \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_volume_up"></a>
## `audio/volume/up`

`luna://com.webos.service.audiooutput/audio/volume/up`

Linearly increases, the master volume of the audio output device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOutput` | String (required) Indicates the audio output device. Possible values are: ALSA |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `soundOutput` | String (optional) Indicates the audio output device. |
| `volume` | Number (int8\_t) (optional) Indicates the volume level after it is increased. Possible range: 0 ~ 100 |

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/volume/up '{"soundOutput":"ALSA"}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; soundOutput:String; volume:Number (int8_t) \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="quality_getsettings"></a>
## `quality/getSettings`

`luna://com.webos.service.audiooutput/quality/getSettings`

Returns the settings (quality)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/quality/getSettings '{}'
```

> ACG groups: all, media.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quality_setqualityattribute"></a>
## `quality/setQualityAttribute`

`luna://com.webos.service.audiooutput/quality/setQualityAttribute`

Sets the quality attribute (quality)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/quality/setQualityAttribute '{}'
```

> ACG groups: all, media.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quality_setsettings"></a>
## `quality/setSettings`

`luna://com.webos.service.audiooutput/quality/setSettings`

Sets the settings (quality)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/quality/setSettings '{}'
```

> ACG groups: all, media.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="volumestatus"></a>
## `volumeStatus`

`luna://com.webos.service.audiooutput/volumeStatus`

Contains the information of the audio output devices.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/volumeStatus '{}'
```

> Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)
