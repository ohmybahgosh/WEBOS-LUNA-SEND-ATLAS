# `com.webos.service.nabs.dvr`

DVR service (nabs broadcast stack): manages recording and timeshift buffering, reporting recording duration, quality, type, source, and ID, and converting single recordings to series. _(inferred from the service's methods)_

30 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`private/getChangedRecordFile`](#private_getchangedrecordfile) | private |  | tv-broadcast | inferred | Returns the changed record file (private) |
| [`record/changeToSeriesRecord`](#record_changetoseriesrecord) | private |  | tv-broadcast | inferred | Changes the to series record (record) |
| [`record/getRecordableDuration`](#record_getrecordableduration) | private |  | tv-broadcast | inferred | Returns the recordable duration (record) |
| [`record/getRecordingBufferedLength`](#record_getrecordingbufferedlength) | private |  | tv-broadcast | inferred | Returns the recording buffered length (record) |
| [`record/getRecordingDuration`](#record_getrecordingduration) | private |  | tv-broadcast | inferred | Returns the recording duration (record) |
| [`record/getRecordingId`](#record_getrecordingid) | private |  | tv-broadcast | inferred | Returns the recording ID (record) |
| [`record/getRecordingIdList`](#record_getrecordingidlist) | private |  | tv-broadcast | inferred | Returns the recording ID list (record) |
| [`record/getRecordingQuality`](#record_getrecordingquality) | private |  | tv-broadcast | inferred | Returns the recording quality (record) |
| [`record/getRecordingRemainDuration`](#record_getrecordingremainduration) | private |  | tv-broadcast | inferred | Returns the recording remain duration (record) |
| [`record/getRecordingSourceList`](#record_getrecordingsourcelist) | private |  | tv-broadcast | inferred | Returns the recording source list (record) |
| [`record/getRecordingStartTime`](#record_getrecordingstarttime) | private |  | tv-broadcast | inferred | Returns the recording start time (record) |
| [`record/getRecordingType`](#record_getrecordingtype) | private |  | tv-broadcast | inferred | Returns the recording type (record) |
| [`record/getTimeshiftBufferedLength`](#record_gettimeshiftbufferedlength) | private |  | tv-broadcast | inferred | Returns the timeshift buffered length (record) |
| [`record/getTimeshiftBufferingSourceType`](#record_gettimeshiftbufferingsourcetype) | private |  | tv-broadcast | inferred | Returns the timeshift buffering source type (record) |
| [`record/getTimeshiftRecordingId`](#record_gettimeshiftrecordingid) | private |  | tv-broadcast | inferred | Returns the timeshift recording ID (record) |
| [`record/isRecordableInput`](#record_isrecordableinput) | private |  | tv-broadcast | inferred | Reports whether the recordable input is set (record) |
| [`record/isRecording`](#record_isrecording) | private |  | tv-broadcast | inferred | Reports whether the recording is set (record) |
| [`record/isTimeshiftBufferable`](#record_istimeshiftbufferable) | private |  | tv-broadcast | inferred | Reports whether the timeshift bufferable is set (record) |
| [`record/isTimeshiftBuffering`](#record_istimeshiftbuffering) | private |  | tv-broadcast | inferred | Reports whether the timeshift buffering is set (record) |
| [`record/pauseTimeshiftBuffering`](#record_pausetimeshiftbuffering) | private |  | tv-broadcast | inferred | Pauses the timeshift buffering (record) |
| [`record/resumeTimeshiftBuffering`](#record_resumetimeshiftbuffering) | private |  | tv-broadcast | inferred | Resumes the timeshift buffering (record) |
| [`record/setRecordingEndTime`](#record_setrecordingendtime) | private |  | tv-broadcast | inferred | Sets the recording end time (record) |
| [`record/setRecordingRemainDuration`](#record_setrecordingremainduration) | private |  | tv-broadcast | inferred | Sets the recording remain duration (record) |
| [`record/startManualRecord`](#record_startmanualrecord) | private |  | tv-broadcast | inferred | Starts the manual record (record) |
| [`record/startProgramRecord`](#record_startprogramrecord) | private |  | tv-broadcast | inferred | Starts the program record (record) |
| [`record/startScheduleRecord`](#record_startschedulerecord) | private |  | tv-broadcast | inferred | Starts the schedule record (record) |
| [`record/startTimeshiftBuffering`](#record_starttimeshiftbuffering) | private |  | tv-broadcast | inferred | Starts the timeshift buffering (record) |
| [`record/stopRecord`](#record_stoprecord) | private |  | tv-broadcast | inferred | Stops the record (record) |
| [`record/stopScheduleRecord`](#record_stopschedulerecord) | private |  | tv-broadcast | inferred | Stops the schedule record (record) |
| [`record/stopTimeshiftBuffering`](#record_stoptimeshiftbuffering) | private |  | tv-broadcast | inferred | Stops the timeshift buffering (record) |

<a id="private_getchangedrecordfile"></a>
## `private/getChangedRecordFile`

`luna://com.webos.service.nabs.dvr/private/getChangedRecordFile`

Returns the changed record file (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/private/getChangedRecordFile '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_changetoseriesrecord"></a>
## `record/changeToSeriesRecord`

`luna://com.webos.service.nabs.dvr/record/changeToSeriesRecord`

Changes the to series record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/changeToSeriesRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordableduration"></a>
## `record/getRecordableDuration`

`luna://com.webos.service.nabs.dvr/record/getRecordableDuration`

Returns the recordable duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordableDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingbufferedlength"></a>
## `record/getRecordingBufferedLength`

`luna://com.webos.service.nabs.dvr/record/getRecordingBufferedLength`

Returns the recording buffered length (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingBufferedLength '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingduration"></a>
## `record/getRecordingDuration`

`luna://com.webos.service.nabs.dvr/record/getRecordingDuration`

Returns the recording duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingid"></a>
## `record/getRecordingId`

`luna://com.webos.service.nabs.dvr/record/getRecordingId`

Returns the recording ID (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingId '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingidlist"></a>
## `record/getRecordingIdList`

`luna://com.webos.service.nabs.dvr/record/getRecordingIdList`

Returns the recording ID list (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingIdList '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingquality"></a>
## `record/getRecordingQuality`

`luna://com.webos.service.nabs.dvr/record/getRecordingQuality`

Returns the recording quality (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingQuality '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingremainduration"></a>
## `record/getRecordingRemainDuration`

`luna://com.webos.service.nabs.dvr/record/getRecordingRemainDuration`

Returns the recording remain duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingRemainDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingsourcelist"></a>
## `record/getRecordingSourceList`

`luna://com.webos.service.nabs.dvr/record/getRecordingSourceList`

Returns the recording source list (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingSourceList '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingstarttime"></a>
## `record/getRecordingStartTime`

`luna://com.webos.service.nabs.dvr/record/getRecordingStartTime`

Returns the recording start time (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingStartTime '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingtype"></a>
## `record/getRecordingType`

`luna://com.webos.service.nabs.dvr/record/getRecordingType`

Returns the recording type (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getRecordingType '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferedlength"></a>
## `record/getTimeshiftBufferedLength`

`luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferedLength`

Returns the timeshift buffered length (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferedLength '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferingsourcetype"></a>
## `record/getTimeshiftBufferingSourceType`

`luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferingSourceType`

Returns the timeshift buffering source type (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getTimeshiftBufferingSourceType '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftrecordingid"></a>
## `record/getTimeshiftRecordingId`

`luna://com.webos.service.nabs.dvr/record/getTimeshiftRecordingId`

Returns the timeshift recording ID (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/getTimeshiftRecordingId '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecordableinput"></a>
## `record/isRecordableInput`

`luna://com.webos.service.nabs.dvr/record/isRecordableInput`

Reports whether the recordable input is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isRecordableInput '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecording"></a>
## `record/isRecording`

`luna://com.webos.service.nabs.dvr/record/isRecording`

Reports whether the recording is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isRecording '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbufferable"></a>
## `record/isTimeshiftBufferable`

`luna://com.webos.service.nabs.dvr/record/isTimeshiftBufferable`

Reports whether the timeshift bufferable is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isTimeshiftBufferable '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbuffering"></a>
## `record/isTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/isTimeshiftBuffering`

Reports whether the timeshift buffering is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/isTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_pausetimeshiftbuffering"></a>
## `record/pauseTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/pauseTimeshiftBuffering`

Pauses the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/pauseTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_resumetimeshiftbuffering"></a>
## `record/resumeTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/resumeTimeshiftBuffering`

Resumes the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/resumeTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingendtime"></a>
## `record/setRecordingEndTime`

`luna://com.webos.service.nabs.dvr/record/setRecordingEndTime`

Sets the recording end time (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/setRecordingEndTime '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingremainduration"></a>
## `record/setRecordingRemainDuration`

`luna://com.webos.service.nabs.dvr/record/setRecordingRemainDuration`

Sets the recording remain duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/setRecordingRemainDuration '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startmanualrecord"></a>
## `record/startManualRecord`

`luna://com.webos.service.nabs.dvr/record/startManualRecord`

Starts the manual record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startManualRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startprogramrecord"></a>
## `record/startProgramRecord`

`luna://com.webos.service.nabs.dvr/record/startProgramRecord`

Starts the program record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startProgramRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startschedulerecord"></a>
## `record/startScheduleRecord`

`luna://com.webos.service.nabs.dvr/record/startScheduleRecord`

Starts the schedule record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startScheduleRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_starttimeshiftbuffering"></a>
## `record/startTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/startTimeshiftBuffering`

Starts the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/startTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stoprecord"></a>
## `record/stopRecord`

`luna://com.webos.service.nabs.dvr/record/stopRecord`

Stops the record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/stopRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stopschedulerecord"></a>
## `record/stopScheduleRecord`

`luna://com.webos.service.nabs.dvr/record/stopScheduleRecord`

Stops the schedule record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/stopScheduleRecord '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stoptimeshiftbuffering"></a>
## `record/stopTimeshiftBuffering`

`luna://com.webos.service.nabs.dvr/record/stopTimeshiftBuffering`

Stops the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.dvr/record/stopTimeshiftBuffering '{}'
```

> ACG groups: devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
