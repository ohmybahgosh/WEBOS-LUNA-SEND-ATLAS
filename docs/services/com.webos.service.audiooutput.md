# `com.webos.service.audiooutput`

12 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`audio`](#audio) | unknown |  | audio | Contains information of the connections between source and sink. Note: If no Source/Sink are connected, it returns an empty array. |
| [`audio/connect`](#audio_connect) | public |  | audio | Connects the audio source to the audio sink. |
| [`audio/disconnect`](#audio_disconnect) | public |  | audio | Disconnects from the audio sink. Note: No changes if there is no connection. |
| [`audio/getStatus`](#audio_getstatus) | public |  | audio | Lists the information of all the connected audio source and sinks. |
| [`audio/mute`](#audio_mute) | public |  | audio | Mutes or unmutes the connected audio source. |
| [`audio/setSoundOut`](#audio_setsoundout) | public |  | audio | Sets the audio output device to which the audio must be routed. |
| [`audio/volume/down`](#audio_volume_down) | public |  | audio | Linearly decreases, the master volume of the audio output device. |
| [`audio/volume/getStatus`](#audio_volume_getstatus) | public |  | audio | Lists the information of all available audio output devices. |
| [`audio/volume/muteSoundOut`](#audio_volume_mutesoundout) | public |  | audio | Mutes the audio output device. |
| [`audio/volume/set`](#audio_volume_set) | public |  | audio | Sets the volume of the audio output device, to a specific numerical value. |
| [`audio/volume/up`](#audio_volume_up) | public |  | audio | Linearly increases, the master volume of the audio output device. |
| [`volumeStatus`](#volumestatus) | unknown |  | audio | Contains the information of the audio output devices. |

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

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/disconnect '{"source":"AMIXER","sink":"ALSA"}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; source:String; sink:String \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

<a id="audio_getstatus"></a>
## `audio/getStatus`

`luna://com.webos.service.audiooutput/audio/getStatus`

Lists the information of all the connected audio source and sinks.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

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

```sh
luna-send -n 1 -f luna://com.webos.service.audiooutput/audio/mute '{ "sink":"ALSA", "source":"AMIXER", "mute":true }
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; source:String; sink:String; mute:Boolean \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

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

```sh
luna-send -n 1 luna://com.webos.service.audiooutput/audio/volume/up '{"soundOutput":"ALSA"}
```

> ACG: audiooutput.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; soundOutput:String; volume:Number (int8_t) \| Service: Connects the audio source to the audio output device and also controls the volume on the audio device. It provides HAL abstraction for the back-end, which means that the 'audiooutput' service works wi

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiooutput/)

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
