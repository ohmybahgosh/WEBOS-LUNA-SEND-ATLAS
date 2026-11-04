# `com.webos.pipeline.record`

8 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`audio`](#audio) | unknown |  | media | Details of audio. |
| [`image`](#image) | unknown |  | media | Details of image. |
| [`pause`](#pause) | public |  | media | Pauses the recording. |
| [`resume`](#resume) | public |  | media | Resumes the recording. |
| [`start`](#start) | public |  | media | Starts recording. |
| [`stop`](#stop) | public |  | media | Stops recording and saves the output to file. |
| [`subscribe`](#subscribe) | public | yes | media | Gets a notification when there is an event on pipeline. |
| [`video`](#video) | unknown |  | media | Details of video. |

<a id="audio"></a>
## `audio`

`luna://com.webos.pipeline.record/audio`

Details of audio.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.record/audio '{}'
```

> Service: Provide an interface to record audio and video. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)

<a id="image"></a>
## `image`

`luna://com.webos.pipeline.record/image`

Details of image.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.record/image '{}'
```

> Service: Provide an interface to record audio and video. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)

<a id="pause"></a>
## `pause`

`luna://com.webos.pipeline.record/pause`

Pauses the recording.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.record._QivNm100000mLC/pause '{}
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provide an interface to record audio and video.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)

<a id="resume"></a>
## `resume`

`luna://com.webos.pipeline.record/resume`

Resumes the recording.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.record._QivNm100000mLC/resume '{}
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provide an interface to record audio and video.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)

<a id="start"></a>
## `start`

`luna://com.webos.pipeline.record/start`

Starts recording.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `video` | Object: video (optional) Indicates the video information. Note: Any one of audio, video, and image must be provided. Note: Audio and video can be provided together. |
| `audio` | Object: audio (optional) Indicates the audio information. Note: Any one of audio, video, and image must be provided. Note: Audio and video can be provide together. |
| `image` | Object: image (optional) Indicates the image information. Note: Any one of audio, video, and image must be provided. |
| `format` | String (required) Format in which data is stored. |
| `path` | String (required) Path and file names of the saved file. |

```sh
luna-send -n 1 -f luna://com.webos.pipeline.record._QivNm100000mLC/start '{ "video": { "videoSrc": "camera1", "width": 1280, "height": 720, "codec": "H264", "fps": 30, "bitRate": 0 }, "audio": { "codec": "AAC", "sampleRate": 44100, "channelCount": 2, "bitRate": 0 }, "format": "MP4", "path": "/media/internal/Record02122024-20054355.mp4" }
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provide an interface to record audio and video.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)

<a id="stop"></a>
## `stop`

`luna://com.webos.pipeline.record/stop`

Stops recording and saves the output to file.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.record._QivNm100000mLC/stop '{}
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provide an interface to record audio and video.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)

<a id="subscribe"></a>
## `subscribe`

`luna://com.webos.pipeline.record/subscribe`

Gets a notification when there is an event on pipeline.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe to receive updates from this method. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.pipeline.record._QivNm100000mLC/subscribe '{"subscribe": true}
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provide an interface to record audio and video.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)

<a id="video"></a>
## `video`

`luna://com.webos.pipeline.record/video`

Details of video.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.pipeline.record/video '{}'
```

> Service: Provide an interface to record audio and video. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-pipeline-record/)
