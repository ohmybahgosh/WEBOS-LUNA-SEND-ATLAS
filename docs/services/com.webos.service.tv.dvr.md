# `com.webos.service.tv.dvr`

TV DVR service: schedules and runs program, manual, scheduled, and external-input recordings, manages timeshift buffering, and plays back recordings (seek, play rate, thumbnails). _(inferred from the service's methods)_

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`device/checkStoragePerformance`](#device_checkstorageperformance) | private |  | media | documented | DVR/PVR method: device/checkStoragePerformance |
| [`device/isRecordableStorage`](#device_isrecordablestorage) | private |  | media | documented | DVR/PVR method: device/isRecordableStorage |
| [`play/openRecordingPlayInstance`](#play_openrecordingplayinstance) | private |  | media | documented | DVR/PVR method: play/openRecordingPlayInstance |
| [`play/seek`](#play_seek) | private |  | media | documented | DVR/PVR method: play/seek |
| [`play/setPlayRate`](#play_setplayrate) | private |  | media | documented | DVR/PVR method: play/setPlayRate |
| [`private/deleteRecordFile`](#private_deleterecordfile) | private |  | media | documented | DVR/PVR method: private/deleteRecordFile |
| [`private/getRecordFileList`](#private_getrecordfilelist) | private |  | media | documented | DVR/PVR method: private/getRecordFileList |
| [`private/getThumbnail`](#private_getthumbnail) | private |  | media | documented | DVR/PVR method: private/getThumbnail |
| [`record/changeToSeriesRecord`](#record_changetoseriesrecord) | private |  | media | documented | DVR/PVR method: record/changeToSeriesRecord |
| [`record/openTimeshiftPlayInstance`](#record_opentimeshiftplayinstance) | private |  | media | documented | DVR/PVR method: record/openTimeshiftPlayInstance |
| [`record/pauseTimeshiftBuffering`](#record_pausetimeshiftbuffering) | private |  | media | documented | DVR/PVR method: record/pauseTimeshiftBuffering |
| [`record/setRecordingEndTime`](#record_setrecordingendtime) | private |  | media | documented | DVR/PVR method: record/setRecordingEndTime |
| [`record/startExternalInputRecord`](#record_startexternalinputrecord) | private |  | media | documented | Records an external (HDMI/AV) input to USB (subject to HDCP on protected sources) |
| [`record/startManualRecord`](#record_startmanualrecord) | private |  | media | documented | DVR/PVR method: record/startManualRecord |
| [`record/startProgramRecord`](#record_startprogramrecord) | private |  | media | documented | DVR/PVR method: record/startProgramRecord |
| [`record/startScheduleRecord`](#record_startschedulerecord) | private |  | media | documented | DVR/PVR method: record/startScheduleRecord |
| [`record/startTimeshiftBuffering`](#record_starttimeshiftbuffering) | private |  | media | documented | DVR/PVR method: record/startTimeshiftBuffering |
| [`record/stopRecord`](#record_stoprecord) | private |  | media | documented | DVR/PVR method: record/stopRecord |

<a id="device_checkstorageperformance"></a>
## `device/checkStoragePerformance`

`luna://com.webos.service.tv.dvr/device/checkStoragePerformance`

DVR/PVR method: device/checkStoragePerformance

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/device/checkStoragePerformance '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="device_isrecordablestorage"></a>
## `device/isRecordableStorage`

`luna://com.webos.service.tv.dvr/device/isRecordableStorage`

DVR/PVR method: device/isRecordableStorage

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/device/isRecordableStorage '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="play_openrecordingplayinstance"></a>
## `play/openRecordingPlayInstance`

`luna://com.webos.service.tv.dvr/play/openRecordingPlayInstance`

DVR/PVR method: play/openRecordingPlayInstance

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/play/openRecordingPlayInstance '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="play_seek"></a>
## `play/seek`

`luna://com.webos.service.tv.dvr/play/seek`

DVR/PVR method: play/seek

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/play/seek '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="play_setplayrate"></a>
## `play/setPlayRate`

`luna://com.webos.service.tv.dvr/play/setPlayRate`

DVR/PVR method: play/setPlayRate

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/play/setPlayRate '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="private_deleterecordfile"></a>
## `private/deleteRecordFile`

`luna://com.webos.service.tv.dvr/private/deleteRecordFile`

DVR/PVR method: private/deleteRecordFile

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/private/deleteRecordFile '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="private_getrecordfilelist"></a>
## `private/getRecordFileList`

`luna://com.webos.service.tv.dvr/private/getRecordFileList`

DVR/PVR method: private/getRecordFileList

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/private/getRecordFileList '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="private_getthumbnail"></a>
## `private/getThumbnail`

`luna://com.webos.service.tv.dvr/private/getThumbnail`

DVR/PVR method: private/getThumbnail

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/private/getThumbnail '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_changetoseriesrecord"></a>
## `record/changeToSeriesRecord`

`luna://com.webos.service.tv.dvr/record/changeToSeriesRecord`

DVR/PVR method: record/changeToSeriesRecord

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/changeToSeriesRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_opentimeshiftplayinstance"></a>
## `record/openTimeshiftPlayInstance`

`luna://com.webos.service.tv.dvr/record/openTimeshiftPlayInstance`

DVR/PVR method: record/openTimeshiftPlayInstance

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/openTimeshiftPlayInstance '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_pausetimeshiftbuffering"></a>
## `record/pauseTimeshiftBuffering`

`luna://com.webos.service.tv.dvr/record/pauseTimeshiftBuffering`

DVR/PVR method: record/pauseTimeshiftBuffering

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/pauseTimeshiftBuffering '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_setrecordingendtime"></a>
## `record/setRecordingEndTime`

`luna://com.webos.service.tv.dvr/record/setRecordingEndTime`

DVR/PVR method: record/setRecordingEndTime

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/setRecordingEndTime '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_startexternalinputrecord"></a>
## `record/startExternalInputRecord`

`luna://com.webos.service.tv.dvr/record/startExternalInputRecord`

Records an external (HDMI/AV) input to USB (subject to HDCP on protected sources)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/startExternalInputRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_startmanualrecord"></a>
## `record/startManualRecord`

`luna://com.webos.service.tv.dvr/record/startManualRecord`

DVR/PVR method: record/startManualRecord

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/startManualRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_startprogramrecord"></a>
## `record/startProgramRecord`

`luna://com.webos.service.tv.dvr/record/startProgramRecord`

DVR/PVR method: record/startProgramRecord

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/startProgramRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_startschedulerecord"></a>
## `record/startScheduleRecord`

`luna://com.webos.service.tv.dvr/record/startScheduleRecord`

DVR/PVR method: record/startScheduleRecord

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/startScheduleRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_starttimeshiftbuffering"></a>
## `record/startTimeshiftBuffering`

`luna://com.webos.service.tv.dvr/record/startTimeshiftBuffering`

DVR/PVR method: record/startTimeshiftBuffering

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/startTimeshiftBuffering '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="record_stoprecord"></a>
## `record/stopRecord`

`luna://com.webos.service.tv.dvr/record/stopRecord`

DVR/PVR method: record/stopRecord

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.dvr/record/stopRecord '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)
