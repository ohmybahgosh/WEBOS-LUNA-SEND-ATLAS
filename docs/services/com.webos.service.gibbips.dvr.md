# `com.webos.service.gibbips.dvr`

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`private/getChangedRecordFile`](#private_getchangedrecordfile) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingBufferedLength`](#record_getrecordingbufferedlength) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingDuration`](#record_getrecordingduration) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingEventRelayInfo`](#record_getrecordingeventrelayinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingIdList`](#record_getrecordingidlist) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingRemainDuration`](#record_getrecordingremainduration) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingSourceList`](#record_getrecordingsourcelist) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingStartTime`](#record_getrecordingstarttime) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/getRecordingType`](#record_getrecordingtype) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/resumeRecord`](#record_resumerecord) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/setRecordingRemainDuration`](#record_setrecordingremainduration) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/startManualRecord`](#record_startmanualrecord) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/startProgramRecord`](#record_startprogramrecord) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/startScheduleRecord`](#record_startschedulerecord) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/stopRecord`](#record_stoprecord) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |
| [`record/stopScheduleRecord`](#record_stopschedulerecord) | private |  | tv-broadcast | Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented). |

<a id="private_getchangedrecordfile"></a>
## `private/getChangedRecordFile`

`luna://com.webos.service.gibbips.dvr/private/getChangedRecordFile`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/private/getChangedRecordFile '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingbufferedlength"></a>
## `record/getRecordingBufferedLength`

`luna://com.webos.service.gibbips.dvr/record/getRecordingBufferedLength`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingBufferedLength '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingduration"></a>
## `record/getRecordingDuration`

`luna://com.webos.service.gibbips.dvr/record/getRecordingDuration`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingDuration '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingeventrelayinfo"></a>
## `record/getRecordingEventRelayInfo`

`luna://com.webos.service.gibbips.dvr/record/getRecordingEventRelayInfo`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingEventRelayInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingidlist"></a>
## `record/getRecordingIdList`

`luna://com.webos.service.gibbips.dvr/record/getRecordingIdList`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingIdList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingremainduration"></a>
## `record/getRecordingRemainDuration`

`luna://com.webos.service.gibbips.dvr/record/getRecordingRemainDuration`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingRemainDuration '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingsourcelist"></a>
## `record/getRecordingSourceList`

`luna://com.webos.service.gibbips.dvr/record/getRecordingSourceList`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingSourceList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingstarttime"></a>
## `record/getRecordingStartTime`

`luna://com.webos.service.gibbips.dvr/record/getRecordingStartTime`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingStartTime '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingtype"></a>
## `record/getRecordingType`

`luna://com.webos.service.gibbips.dvr/record/getRecordingType`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/getRecordingType '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_resumerecord"></a>
## `record/resumeRecord`

`luna://com.webos.service.gibbips.dvr/record/resumeRecord`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/resumeRecord '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingremainduration"></a>
## `record/setRecordingRemainDuration`

`luna://com.webos.service.gibbips.dvr/record/setRecordingRemainDuration`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/setRecordingRemainDuration '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startmanualrecord"></a>
## `record/startManualRecord`

`luna://com.webos.service.gibbips.dvr/record/startManualRecord`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/startManualRecord '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startprogramrecord"></a>
## `record/startProgramRecord`

`luna://com.webos.service.gibbips.dvr/record/startProgramRecord`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/startProgramRecord '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_startschedulerecord"></a>
## `record/startScheduleRecord`

`luna://com.webos.service.gibbips.dvr/record/startScheduleRecord`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/startScheduleRecord '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stoprecord"></a>
## `record/stopRecord`

`luna://com.webos.service.gibbips.dvr/record/stopRecord`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/stopRecord '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_stopschedulerecord"></a>
## `record/stopScheduleRecord`

`luna://com.webos.service.gibbips.dvr/record/stopScheduleRecord`

Method on com.webos.service.gibbips.dvr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.dvr/record/stopScheduleRecord '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
