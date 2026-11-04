# `com.webos.service.nabs.dvr`

30 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`private/getChangedRecordFile`](#private_getchangedrecordfile) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/changeToSeriesRecord`](#record_changetoseriesrecord) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordableDuration`](#record_getrecordableduration) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingBufferedLength`](#record_getrecordingbufferedlength) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingDuration`](#record_getrecordingduration) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingId`](#record_getrecordingid) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingIdList`](#record_getrecordingidlist) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingQuality`](#record_getrecordingquality) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingRemainDuration`](#record_getrecordingremainduration) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingSourceList`](#record_getrecordingsourcelist) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingStartTime`](#record_getrecordingstarttime) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingType`](#record_getrecordingtype) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getTimeshiftBufferedLength`](#record_gettimeshiftbufferedlength) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getTimeshiftBufferingSourceType`](#record_gettimeshiftbufferingsourcetype) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getTimeshiftRecordingId`](#record_gettimeshiftrecordingid) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/isRecordableInput`](#record_isrecordableinput) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/isRecording`](#record_isrecording) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/isTimeshiftBufferable`](#record_istimeshiftbufferable) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/isTimeshiftBuffering`](#record_istimeshiftbuffering) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/pauseTimeshiftBuffering`](#record_pausetimeshiftbuffering) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/resumeTimeshiftBuffering`](#record_resumetimeshiftbuffering) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/setRecordingEndTime`](#record_setrecordingendtime) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/setRecordingRemainDuration`](#record_setrecordingremainduration) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/startManualRecord`](#record_startmanualrecord) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/startProgramRecord`](#record_startprogramrecord) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/startScheduleRecord`](#record_startschedulerecord) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/startTimeshiftBuffering`](#record_starttimeshiftbuffering) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/stopRecord`](#record_stoprecord) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/stopScheduleRecord`](#record_stopschedulerecord) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |
| [`record/stopTimeshiftBuffering`](#record_stoptimeshiftbuffering) | private |  | tv-broadcast | Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented). |

<a id="private_getchangedrecordfile"></a>
## `private/getChangedRecordFile`

`luna://com.webos.service.nabs.dvr/private/getChangedRecordFile`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/private/getChangedRecordFile '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_changetoseriesrecord"></a>
## `record/changeToSeriesRecord`

`luna://com.webos.service.nabs.dvr/record/changeToSeriesRecord`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/changeToSeriesRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordableduration"></a>
## `record/getRecordableDuration`

`luna://com.webos.service.nabs.dvr/record/getRecordableDuration`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordableDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingbufferedlength"></a>
## `record/getRecordingBufferedLength`

`luna://com.webos.service.nabs.dvr/record/getRecordingBufferedLength`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingBufferedLength '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingduration"></a>
## `record/getRecordingDuration`

`luna://com.webos.service.nabs.dvr/record/getRecordingDuration`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingid"></a>
## `record/getRecordingId`

`luna://com.webos.service.nabs.dvr/record/getRecordingId`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingId '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingidlist"></a>
## `record/getRecordingIdList`

`luna://com.webos.service.nabs.dvr/record/getRecordingIdList`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingIdList '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingquality"></a>
## `record/getRecordingQuality`

`luna://com.webos.service.nabs.dvr/record/getRecordingQuality`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingQuality '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingremainduration"></a>
## `record/getRecordingRemainDuration`

`luna://com.webos.service.nabs.dvr/record/getRecordingRemainDuration`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingRemainDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingsourcelist"></a>
## `record/getRecordingSourceList`

`luna://com.webos.service.nabs.dvr/record/getRecordingSourceList`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingSourceList '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingstarttime"></a>
## `record/getRecordingStartTime`

`luna://com.webos.service.nabs.dvr/record/getRecordingStartTime`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingStartTime '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingtype"></a>
## `record/getRecordingType`

`luna://com.webos.service.nabs.dvr/record/getRecordingType`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingType '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferedlength"></a>
## `record/getTimeshiftBufferedLength`

`luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferedLength`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferedLength '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferingsourcetype"></a>
## `record/getTimeshiftBufferingSourceType`

`luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferingSourceType`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferingSourceType '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftrecordingid"></a>
## `record/getTimeshiftRecordingId`

`luna://com.webos.service.nabs.dvr/record/getTimeshiftRecordingId`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getTimeshiftRecordingId '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecordableinput"></a>
## `record/isRecordableInput`

`luna://com.webos.service.nabs.dvr/record/isRecordableInput`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isRecordableInput '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecording"></a>
## `record/isRecording`

`luna://com.webos.service.nabs.dvr/record/isRecording`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isRecording '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbufferable"></a>
## `record/isTimeshiftBufferable`

`luna://com.webos.service.nabs.dvr/record/isTimeshiftBufferable`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isTimeshiftBufferable '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbuffering"></a>
## `record/isTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/isTimeshiftBuffering`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_pausetimeshiftbuffering"></a>
## `record/pauseTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/pauseTimeshiftBuffering`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/pauseTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_resumetimeshiftbuffering"></a>
## `record/resumeTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/resumeTimeshiftBuffering`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/resumeTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingendtime"></a>
## `record/setRecordingEndTime`

`luna://com.webos.service.nabs.dvr/record/setRecordingEndTime`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/setRecordingEndTime '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingremainduration"></a>
## `record/setRecordingRemainDuration`

`luna://com.webos.service.nabs.dvr/record/setRecordingRemainDuration`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/setRecordingRemainDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startmanualrecord"></a>
## `record/startManualRecord`

`luna://com.webos.service.nabs.dvr/record/startManualRecord`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startManualRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startprogramrecord"></a>
## `record/startProgramRecord`

`luna://com.webos.service.nabs.dvr/record/startProgramRecord`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startProgramRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startschedulerecord"></a>
## `record/startScheduleRecord`

`luna://com.webos.service.nabs.dvr/record/startScheduleRecord`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startScheduleRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_starttimeshiftbuffering"></a>
## `record/startTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/startTimeshiftBuffering`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stoprecord"></a>
## `record/stopRecord`

`luna://com.webos.service.nabs.dvr/record/stopRecord`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/stopRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stopschedulerecord"></a>
## `record/stopScheduleRecord`

`luna://com.webos.service.nabs.dvr/record/stopScheduleRecord`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/stopScheduleRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stoptimeshiftbuffering"></a>
## `record/stopTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/stopTimeshiftBuffering`

Method on com.webos.service.nabs.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/stopTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
