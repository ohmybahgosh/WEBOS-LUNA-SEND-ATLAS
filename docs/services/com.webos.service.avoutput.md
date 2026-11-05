# `com.webos.service.avoutput`

Stateless audio/video output service over the media server: connects/disconnects audio and video sinks, controls mute and volume, and sets display window, compositing and output capabilities.

17 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`audio/connect`](#audio_connect) | public |  | display | documented | Connects audio source to audio sink. Note : In case it's already connected, will disconnect from previous sink automatically. |
| [`audio/disconnect`](#audio_disconnect) | public |  | display | documented | Disconnect from audio sink. No change is done if not connected. |
| [`audio/getStatus`](#audio_getstatus) | public | yes | display | documented | Lists all video and audio sinks and their status. |
| [`audio/mute`](#audio_mute) | public |  | display | documented | Stop/start outputting data to audio sink. This allows seamless disconnect and connect and avoids outputting invalid data while reconnection  |
| [`audio/volume/down`](#audio_volume_down) | public |  | display | documented | Decreases the volume. |
| [`audio/volume/set`](#audio_volume_set) | public |  | display | documented | Set volume to a numerical value. |
| [`audio/volume/up`](#audio_volume_up) | public |  | display | documented | Increases the volume. |
| [`video/blankVideo`](#video_blankvideo) | public |  | display | documented | Stop/start data output to video sink. This allows seamless disconnect and connect and avoids invalid data output while reconnection is in pr |
| [`video/connect`](#video_connect) | public |  | display | documented | Connects a video source to a video sink |
| [`video/disconnect`](#video_disconnect) | public |  | display | documented | Disconnects video from sink. |
| [`video/display/getOutputCapabilities`](#video_display_getoutputcapabilities) | public |  | display | documented | Helper method to query the set video limits |
| [`video/display/setCompositing`](#video_display_setcompositing) | public |  | display | documented | Set compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video out |
| [`video/display/setDisplayWindow`](#video_display_setdisplaywindow) | public |  | display | documented | Setup video output location on the screen for specified sink. Note : Video is actually placed only if setVideoMediaData has been called. Oth |
| [`video/getStatus`](#video_getstatus) | public | yes | display | documented | Lists all video sinks and their status. |
| [`video/setMediaData`](#video_setmediadata) | public |  | display | documented | Sets video media data needed for playback. |
| [`VideoRect`](#videorect) | unknown |  | display | documented | Object to represent the video window coordinates. |
| [`VideoSize`](#videosize) | unknown |  | display | documented | Object to represent video size. |

<a id="audio_connect"></a>
## `audio/connect`

`luna://com.webos.service.avoutput/audio/connect`

Connects audio source to audio sink. Note : In case it's already connected, will disconnect from previous sink automatically.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Audio source. Possible values are: ADEC MIXER LOW_DELAY_MIXER |
| `sourcePort` | String (optional) Audio port number. Note : For ADEC, the possible values are 0 and 1. |
| `sink` | String (required) Audio sink. Possible values are: MAIN SUB |
| `outputMode` | String (required) Mode of output. Possible values are: tv_speaker external_speaker soundbar simplink bt_soundbar lineout headphone, ... |
| `audioType` | String (required) Type of the audio. Note : Only when ADEC is specified. Possible values are: media phone test ringtone default_app voice alert notification text_to_speech game_media game_directmedia system_music media_mix livetv |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | String (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/audio/connect '{"source": "ADEC", "sourcePort":1, "sink":"MAIN", "outputMode":"tv_speaker", "audioType":"media"}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:String; errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="audio_disconnect"></a>
## `audio/disconnect`

`luna://com.webos.service.avoutput/audio/disconnect`

Disconnect from audio sink. No change is done if not connected.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Audio source. Possible values are: ADEC MIXER LOW_DELAY_MIXER |
| `sourcePort` | Number (int8_t) (optional) Audio port number Note: For ADEC, the possible values are 0 and 1. |
| `sink` | String (required) Audio sink. Possible values are: MAIN SUB |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/audio/disconnect '{"sink":"MAIN", "source": "ADEC", "sourcePort":1}'
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="audio_getstatus"></a>
## `audio/getStatus`

`luna://com.webos.service.avoutput/audio/getStatus`

Lists all video and audio sinks and their status.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe to get status when value changes. Possible values are: true - Get status false - Status not required. Note : Returns one entry for each connected source. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/audio/getStatus '{"subscribe":true}
```

> ACG: None \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="audio_mute"></a>
## `audio/mute`

`luna://com.webos.service.avoutput/audio/mute`

Stop/start outputting data to audio sink. This allows seamless disconnect and connect and avoids outputting invalid data while reconnection is in progress.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `Source` | String (required) Audio source. Possible values are: ADEC MIXER LOW_DELAY_MIXER |
| `sourcePort` | Number (int8_t) (optional) Audio port number. Note: For ADEC, the possible values are 0 or 1. |
| `sink` | String (optional) Audio sink. Possible values are: MAIN SUB |
| `mute` | Boolean (required) Possibe values are: true : mute audio output to sink. false : unmute audio output to sink. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/audio/mute '{"source": "ADEC", "sourcePort":1, "sink":"MAIN", "mute":true}'
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="audio_volume_down"></a>
## `audio/volume/down`

`luna://com.webos.service.avoutput/audio/volume/down`

Decreases the volume.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `tvSoundOutput` | String (required) Possible values are: tv_speaker external_speaker soundbar simplink bt_soundbar lineout headphone, ... |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/audio/volume/down '{"tvSoundOutput":"tv_speaker"}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="audio_volume_set"></a>
## `audio/volume/set`

`luna://com.webos.service.avoutput/audio/volume/set`

Set volume to a numerical value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `volume` | Number (int8_t) (required) Possible values that can be set are between 0 to 100. |
| `tvSoundOutput` | String (required) Possible values are: tv_speaker external_speaker soundbar simplink bt_soundbar lineout headphone, ... |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/audio/volume/set '{"volume": 50, "tvSoundOutput":"tv_speaker"}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="audio_volume_up"></a>
## `audio/volume/up`

`luna://com.webos.service.avoutput/audio/volume/up`

Increases the volume.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `tvSoundOutput` | String (required) Possible values are: tv_speaker external_speaker soundbar simplink bt_soundbar lineout headphone, ... |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/audio/volume/up '{"tvSoundOutput":"tv_speaker"}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_blankvideo"></a>
## `video/blankVideo`

`luna://com.webos.service.avoutput/video/blankVideo`

Stop/start data output to video sink. This allows seamless disconnect and connect and avoids invalid data output while reconnection is in progress.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Video sink. Possible values are: MAIN SUB Note : Mute video for specified sink. |
| `blank` | Boolean (required) Possible values are: true : blank/mute video false : unmute the video |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/video/blankVideo '{"sink":"MAIN", "blank":true}'
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_connect"></a>
## `video/connect`

`luna://com.webos.service.avoutput/video/connect`

Connects a video source to a video sink

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `source` | String (required) Video source. Possible values are: VDEC JPEG HDMI AVD |
| `sourcePort` | Number (int8_t) (optional) Video port number. Note : For VDEC, the possible values are 0 and 1. |
| `sink` | String (required) Video sink. Possible values are: MAIN SUB |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `planeID` | Number (int8\_t) (required) Numeric plane ID of the sink. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/video/connect '{"source": "VDEC", "sourcePort":1, "sink":"MAIN", "outputMode":"DISPLAY"}'
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; planeID:Number (int8_t) \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_disconnect"></a>
## `video/disconnect`

`luna://com.webos.service.avoutput/video/disconnect`

Disconnects video from sink.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Video sink. Possible values are: MAIN SUB |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/video/disconnect '{"sink":"MAIN"}'
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_display_getoutputcapabilities"></a>
## `video/display/getOutputCapabilities`

`luna://com.webos.service.avoutput/video/display/getOutputCapabilities`

Helper method to query the set video limits

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `numPlanes` | Number (int8\_t) (required) Total hardware planes available with platform for rendering |
| `outputCapability` | Object array (required) sinkId: string - one of \["MAIN", "SUB0", "SUB1", ...\] minDownscaleSize: See "VideoSize" object. maxUpscaleSize: See "VideoSize" object. |
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 luna://com.webos.service.avoutput/video/display/getOutputCapabilities '{"subscribe":true}
```

> ACG: None \| Returns: returnValue:Boolean; numPlanes:Number (int8_t); outputCapability:Object array; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_display_setcompositing"></a>
## `video/display/setCompositing`

`luna://com.webos.service.avoutput/video/display/setCompositing`

Set compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video outputs simultaneously.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mainOpacity` | Number (uint8_t) (required) Possible values are: int (0..255) - Range of output opacity values that can be specified. 0 = Highest transparency value, 255 = Highest opacity value. |
| `mainZorder` | Number (uint8_t) (required) Possible values are: int (0..3) - specify relative order between Main and Sub, 0 = bottom, 3 = top. |
| `subOpacity` | Number (uint32_t) array (required) Possible values are: int (0..255) - Range of output opacity values that can be specified. 0 = Highest transparency value, 255 = Highest opacity value. |
| `subZorder` | Number (uint32_t) array (required) Possible values are: int (0..3) - specify relative order between Main and Sub, 0 = bottom, 3 = top. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 luna://com.webos.service.avoutput/video/display/setVideoCompositing '{"mainOpacity": 255, "subOpacity":100, "mainZOrder":0, "subZOrder": 1}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_display_setdisplaywindow"></a>
## `video/display/setDisplayWindow`

`luna://com.webos.service.avoutput/video/display/setDisplayWindow`

Setup video output location on the screen for specified sink. Note : Video is actually placed only if setVideoMediaData has been called. Otherwise the values are stored and video is placed after subsequent setVideoMediaData call.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Video sink. Possible values are: MAIN SUB |
| `fullScreen` | Boolean (required) Possible values are: true : output is fullscreen false : use data from displayOuput |
| `displayOutput` | Object: VideoRect (optional) Display output rectangle. Note : Required if fullscreen is false. |
| `sourceInput` | Object: VideoRect (optional) Source input rectangle. Note : Full video frame if not set. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 luna://com.webos.service.avoutput/video/display/setDisplayWindow '{"sink":"MAIN", "fullScreen":false, "displayOutput": {"x":1000, "y":500, "width": 920, "height":580}}'
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_getstatus"></a>
## `video/getStatus`

`luna://com.webos.service.avoutput/video/getStatus`

Lists all video sinks and their status.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe for notifications when value changes. Possible values are: true - Get notifications false - Notifications are not required Note: This returns one entry for each MAIN and SUB. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/video/getStatus '{"subscribe":true}
```

> ACG: None \| Returns: returnValue:Boolean; subscribed:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="video_setmediadata"></a>
## `video/setMediaData`

`luna://com.webos.service.avoutput/video/setMediaData`

Sets video media data needed for playback.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Video sink.Possible values are: MAIN SUB |
| `contentType` | String (required) Type of media content. Possible values are: movie photo camera |
| `frameRate` | Number (double) (required) Video frame rate. |
| `width` | Number (uint32_t) (required) Video frame width. |
| `height` | Number (uint32_t) (required) Video frame height. |
| `scanType` | String (required) Type of scan. Possible values are: deinterlaced interlaced |
| `adaptive` | Boolean (required) Indicates whether the media is adaptive or progressive. true : Adaptive false : Progressive. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/video/setMediaData '{"sink":"MAIN", "contentType":"movie", "frameRate":24,"width":640,"height":480, "adaptive":false, "scanType":"progressive"}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="videorect"></a>
## `VideoRect`

`luna://com.webos.service.avoutput/VideoRect`

Object to represent the video window coordinates.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/VideoRect '{}'
```

> Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)

<a id="videosize"></a>
## `VideoSize`

`luna://com.webos.service.avoutput/VideoSize`

Object to represent video size.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.avoutput/VideoSize '{}'
```

> Service: This service moves from a context (or state) based implementation to a context-less (stateless) implementation of audio and video handling. Since mediaserver manages pipelines for the applications, av \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-avoutput/)
