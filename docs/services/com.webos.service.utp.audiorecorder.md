# `com.webos.service.utp.audiorecorder`

UTP (unit-test/platform) audio recorder: starts and stops recording and reports recording state and buffered length. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getRecordingBufferedLength`](#getrecordingbufferedlength) | private |  | audio | inferred | Returns the recording buffered length. |
| [`isRecording`](#isrecording) | private |  | audio | inferred | Reports whether the recording is set. |
| [`startRecord`](#startrecord) | private |  | audio | inferred | Starts the record. |
| [`stopRecord`](#stoprecord) | private |  | audio | inferred | Stops the record. |

<a id="getrecordingbufferedlength"></a>
## `getRecordingBufferedLength`

`luna://com.webos.service.utp.audiorecorder/getRecordingBufferedLength`

Returns the recording buffered length.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.audiorecorder/getRecordingBufferedLength '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isrecording"></a>
## `isRecording`

`luna://com.webos.service.utp.audiorecorder/isRecording`

Reports whether the recording is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.audiorecorder/isRecording '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startrecord"></a>
## `startRecord`

`luna://com.webos.service.utp.audiorecorder/startRecord`

Starts the record.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.audiorecorder/startRecord '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stoprecord"></a>
## `stopRecord`

`luna://com.webos.service.utp.audiorecorder/stopRecord`

Stops the record.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.audiorecorder/stopRecord '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
