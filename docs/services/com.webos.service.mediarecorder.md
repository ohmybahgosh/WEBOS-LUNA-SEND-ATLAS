# `com.webos.service.mediarecorder`

11 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`close`](#close) | public |  | media | Closes the recorder and releases all resources. |
| [`open`](#open) | public |  | media | Opens a new recorder. Returns a unique ID to the client that is used for subsequent operations to control the recorder. |
| [`pause`](#pause) | public |  | media | Pauses recording. Note: Call this API after start() but before stop() or resume() . |
| [`resume`](#resume) | public |  | media | Resumes recording. Note: Call this API after pause() but before stop(). |
| [`setAudioFormat`](#setaudioformat) | public |  | media | Sets the audio format. Note: Call this API after open() but before start() . |
| [`setOutputFile`](#setoutputfile) | public |  | media | Sets the path to store the streaming data. The default file name is of the format "RecordDDMMYYYY-HHMMSS", where DDMMYYYY-HHMMSS is current  |
| [`setOutputFormat`](#setoutputformat) | public |  | media | Sets the specified format to store the streaming data. Note: Call this API after open() but before start() . |
| [`setVideoFormat`](#setvideoformat) | public |  | media | Sets the video format. Note: Call this API after open() but before start() . |
| [`start`](#start) | public |  | media | Starts recording. |
| [`stop`](#stop) | public |  | media | Stops recording and saves the output to file. |
| [`takeSnapshot`](#takesnapshot) | public |  | media | Takes one video snapshot during recording and save the image to a file. The default file name is of the format "CaptureDDMMYYYY-HHMMSS", whe |

<a id="close"></a>
## `close`

`luna://com.webos.service.mediarecorder/close`

Closes the recorder and releases all resources.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/close '{"recorderId": 1234}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="open"></a>
## `open`

`luna://com.webos.service.mediarecorder/open`

Opens a new recorder. Returns a unique ID to the client that is used for subsequent operations to control the recorder.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `video` | String (optional) Indicates the unique ID of the camera. Note: You must provide both "video" and "audio", or either "video" or "audio". ID can be obtained using the com.webos.service.camera2/getCameraList() API. |
| `audio` | Boolean (optional) Enables audio recording. Note: Audio only recording is supported. Management of audio devices can be used through the audio service (com.webos.service.audio) below. Use com.webos.service.audio/listSupportedDevices() to get the list of supported audio devices Use com.webos.service.audio/setSoundOutput() to set the sound input device for recording. Use com.webos.service.audio/getS |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/open '{"video": "camera1","audio": true}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; recorderId:Number; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="pause"></a>
## `pause`

`luna://com.webos.service.mediarecorder/pause`

Pauses recording. Note: Call this API after start() but before stop() or resume() .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/pause '{"recorderId": 1234}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="resume"></a>
## `resume`

`luna://com.webos.service.mediarecorder/resume`

Resumes recording. Note: Call this API after pause() but before stop().

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/resume '{"recorderId": 1234}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="setaudioformat"></a>
## `setAudioFormat`

`luna://com.webos.service.mediarecorder/setAudioFormat`

Sets the audio format. Note: Call this API after open() but before start() .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note : ID is obtained by using the open() API. |
| `codec` | String (optional) Set the audio encoder to use for recording. Possible values are: AAC Note : Currently supports only AAC |
| `bitRate` | Number (optional) Set the audio encoding bitrate (in bits/s). Default : 0 (Automatically adjust bitrate) |
| `sampleRate` | Number (optional) Set the audio sample rate. Possible values are: When using AAC encoder. 7350 8000 11025 12000 16000 22050 24000 32000 44100 (default) 48000 64000 88200 96000 |
| `channelCount` | Number (optional) Set the number of audio channels Possible values are: When using AAC encoder. 1 2 (default - stereo) 3 4 5 |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/setAudioFormat '{ "recorderId": 1234, "codec":"AAC", "bitRate":192000, "sampleRate":48000, "channelCount":2 }
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="setoutputfile"></a>
## `setOutputFile`

`luna://com.webos.service.mediarecorder/setOutputFile`

Sets the path to store the streaming data. The default file name is of the format "RecordDDMMYYYY-HHMMSS", where DDMMYYYY-HHMMSS is current date and time. Call this after open() but before start(). Note: If not explicitly set by calling this method, the default path is /media/internal/ .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |
| `path` | String (required) Absolute path to the directory where the recorded file must be saved. Possible values are: /media/internal/ /tmp/ |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/setOutputFile '{"recorderId": 1234,"path":"/media/internal/"}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="setoutputformat"></a>
## `setOutputFormat`

`luna://com.webos.service.mediarecorder/setOutputFormat`

Sets the specified format to store the streaming data. Note: Call this API after open() but before start() .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |
| `format` | String (required) Format in which data is stored. Possible values are: MP4 ( Note : When recording video only or video with audio). M4A ( Note : When recording audio only). |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/setOutputFormat '{"recorderId": 1234,"format":"MP4"}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="setvideoformat"></a>
## `setVideoFormat`

`luna://com.webos.service.mediarecorder/setVideoFormat`

Sets the video format. Note: Call this API after open() but before start() .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note : ID is obtained by using the open() API. |
| `codec` | String (optional) Set the audio encoder to use for recording. Possible values are: H264 Note : Currently supports only H264 |
| `bitRate` | Number (optional) Set the video encoding bitrate(in bits/s). Default value: 10000000 |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/setVideoFormat '{ "recorderId": 1234, "codec":"H264", "bitRate":10000000 }
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="start"></a>
## `start`

`luna://com.webos.service.mediarecorder/start`

Starts recording.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/start '{"recorderId": 1234}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="stop"></a>
## `stop`

`luna://com.webos.service.mediarecorder/stop`

Stops recording and saves the output to file.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/stop '{"recorderId": 1234}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; path:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)

<a id="takesnapshot"></a>
## `takeSnapshot`

`luna://com.webos.service.mediarecorder/takeSnapshot`

Takes one video snapshot during recording and save the image to a file. The default file name is of the format "CaptureDDMMYYYY-HHMMSS", where DDMMYYYY-HHMMSS is current date and time.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `recorderId` | Number (required) Unique ID of the recorder. Note: ID is obtained by using the open() API. |
| `path` | String (required) Absolute path to the directory where the snapshot image must be saved. Possible values are: /media/internal/ /tmp/ |
| `format` | String (required) Indicates the format of the snapshot image. Possible values are: JPEG |

```sh
luna-send -n 1 -f luna://com.webos.service.mediarecorder/takeSnapshot '{"recorderId": 1234,"path":"/media/internal/","format":"JPEG"}
```

> ACG: mediarecorder.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; path:String \| Service: Provides an interface to record in a webOS device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediarecorder/)
