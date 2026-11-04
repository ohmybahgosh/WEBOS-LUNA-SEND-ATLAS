# `com.webos.service.tv.audiorecorder`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getRecordingBufferedLength`](#getrecordingbufferedlength) | private |  | audio | TV audio recorder method: getRecordingBufferedLength |
| [`isRecording`](#isrecording) | private |  | audio | TV audio recorder method: isRecording |
| [`startRecord`](#startrecord) | private |  | audio | TV audio recorder method: startRecord |
| [`stopRecord`](#stoprecord) | private |  | audio | TV audio recorder method: stopRecord |

<a id="getrecordingbufferedlength"></a>
## `getRecordingBufferedLength`

`luna://com.webos.service.tv.audiorecorder/getRecordingBufferedLength`

TV audio recorder method: getRecordingBufferedLength

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.audiorecorder/getRecordingBufferedLength '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="isrecording"></a>
## `isRecording`

`luna://com.webos.service.tv.audiorecorder/isRecording`

TV audio recorder method: isRecording

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.audiorecorder/isRecording '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="startrecord"></a>
## `startRecord`

`luna://com.webos.service.tv.audiorecorder/startRecord`

TV audio recorder method: startRecord

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.audiorecorder/startRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="stoprecord"></a>
## `stopRecord`

`luna://com.webos.service.tv.audiorecorder/stopRecord`

TV audio recorder method: stopRecord

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.audiorecorder/stopRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)
