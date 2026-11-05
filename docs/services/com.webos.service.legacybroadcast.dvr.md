# `com.webos.service.legacybroadcast.dvr`

Legacy broadcast DVR service: controls recording playback (seek, frame-step, subtitles), queries recording storage performance, and reports playing program, audio, and content info. _(inferred from the service's methods)_

97 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`device/checkStoragePerformance`](#device_checkstorageperformance) | private |  | tv-broadcast | inferred | Checks the storage performance (device) |
| [`device/getRequiredStoragePerformance`](#device_getrequiredstorageperformance) | private |  | tv-broadcast | inferred | Returns the required storage performance (device) |
| [`device/getStoragesInPerformanceCheck`](#device_getstoragesinperformancecheck) | private |  | tv-broadcast | inferred | Returns the storages in performance check (device) |
| [`device/isRecordableStorage`](#device_isrecordablestorage) | private |  | tv-broadcast | inferred | Reports whether the recordable storage is set (device) |
| [`play/clipContent`](#play_clipcontent) | private |  | tv-broadcast | inferred | Handles the clip content (play) |
| [`play/closePlayInstance`](#play_closeplayinstance) | private |  | tv-broadcast | inferred | Closes the play instance (play) |
| [`play/disableSubtitle`](#play_disablesubtitle) | private |  | tv-broadcast | inferred | Disables the subtitle (play) |
| [`play/enableSubtitle`](#play_enablesubtitle) | private |  | tv-broadcast | inferred | Enables the subtitle (play) |
| [`play/frameForward`](#play_frameforward) | private |  | tv-broadcast | inferred | Handles the frame forward (play) |
| [`play/getDelayedNLPProgramInfo`](#play_getdelayednlpprograminfo) | private |  | tv-broadcast | inferred | Returns the delayed NLP program info (play) |
| [`play/getLivePauseTime`](#play_getlivepausetime) | private |  | tv-broadcast | inferred | Returns the live pause time (play) |
| [`play/getPlayingAudioCodecType`](#play_getplayingaudiocodectype) | private |  | audio | inferred | Returns the playing audio codec type (play) |
| [`play/getPlayingAudioLanguage`](#play_getplayingaudiolanguage) | private |  | audio | inferred | Returns the playing audio language (play) |
| [`play/getPlayingAudioLanguageList`](#play_getplayingaudiolanguagelist) | private |  | audio | inferred | Returns the playing audio language list (play) |
| [`play/getPlayingAudioLauguageList`](#play_getplayingaudiolauguagelist) | private |  | audio | inferred | Returns the playing audio lauguage list (play) |
| [`play/getPlayingContentInfo`](#play_getplayingcontentinfo) | private |  | tv-broadcast | inferred | Returns the playing content info (play) |
| [`play/getPlayingMode`](#play_getplayingmode) | private |  | tv-broadcast | inferred | Returns the playing mode (play) |
| [`play/getPlayingProgram`](#play_getplayingprogram) | private |  | tv-broadcast | inferred | Returns the playing program (play) |
| [`play/getPlayingScreenSaverType`](#play_getplayingscreensavertype) | private |  | tv-broadcast | inferred | Returns the playing screen saver type (play) |
| [`play/getPlayingSpeed`](#play_getplayingspeed) | private |  | tv-broadcast | inferred | Returns the playing speed (play) |
| [`play/getPlayingState`](#play_getplayingstate) | private |  | tv-broadcast | inferred | Returns the playing state (play) |
| [`play/getPlayingTime`](#play_getplayingtime) | private |  | tv-broadcast | inferred | Returns the playing time (play) |
| [`play/getRatingInfo`](#play_getratinginfo) | private |  | tv-broadcast | inferred | Returns the rating info (play) |
| [`play/getSubtitleList`](#play_getsubtitlelist) | private |  | tv-broadcast | inferred | Returns the subtitle list (play) |
| [`play/getSubtitleState`](#play_getsubtitlestate) | private |  | tv-broadcast | inferred | Returns the subtitle state (play) |
| [`play/isContentPlaying`](#play_iscontentplaying) | private |  | tv-broadcast | inferred | Reports whether the content playing is set (play) |
| [`play/isDelayedPlaying`](#play_isdelayedplaying) | private |  | tv-broadcast | inferred | Reports whether the delayed playing is set (play) |
| [`play/isPauseOnLive`](#play_ispauseonlive) | private |  | tv-broadcast | inferred | Reports whether the pause on live is set (play) |
| [`play/isPlayingAudioDescriptionFailure`](#play_isplayingaudiodescriptionfailure) | private |  | audio | inferred | Reports whether the playing audio description failure is set (play) |
| [`play/isPlayingFailure`](#play_isplayingfailure) | private |  | tv-broadcast | inferred | Reports whether the playing failure is set (play) |
| [`play/isPlayingReachedEnd`](#play_isplayingreachedend) | private |  | tv-broadcast | inferred | Reports whether the playing reached end is set (play) |
| [`play/openContentPlayInstance`](#play_opencontentplayinstance) | private |  | tv-broadcast | inferred | Opens the content play instance (play) |
| [`play/openRecordingPlayInstance`](#play_openrecordingplayinstance) | private |  | tv-broadcast | inferred | Opens the recording play instance (play) |
| [`play/openTimeshiftPlayInstance`](#play_opentimeshiftplayinstance) | private |  | tv-broadcast | inferred | Opens the timeshift play instance (play) |
| [`play/pause`](#play_pause) | private |  | tv-broadcast | inferred | Pauses the legacybroadcast DVR (play) |
| [`play/pauseOnLive`](#play_pauseonlive) | private |  | tv-broadcast | inferred | Pauses the on live (play) |
| [`play/releasePlayingBlockedScreenSaver`](#play_releaseplayingblockedscreensaver) | private |  | tv-broadcast | inferred | Releases the playing blocked screen saver (play) |
| [`play/seek`](#play_seek) | private |  | tv-broadcast | inferred | Seeks the legacybroadcast DVR (play) |
| [`play/setPlayingAudioLanguage`](#play_setplayingaudiolanguage) | private |  | audio | inferred | Sets the playing audio language (play) |
| [`play/setPlayRate`](#play_setplayrate) | private |  | tv-broadcast | inferred | Sets the play rate (play) |
| [`play/setSubtitle`](#play_setsubtitle) | private |  | tv-broadcast | inferred | Sets the subtitle (play) |
| [`play/startPartialRepeatPlay`](#play_startpartialrepeatplay) | private |  | tv-broadcast | inferred | Starts the partial repeat play (play) |
| [`play/startPlay`](#play_startplay) | private |  | tv-broadcast | inferred | Starts the play (play) |
| [`play/stopPartialRepeatPlay`](#play_stoppartialrepeatplay) | private |  | tv-broadcast | inferred | Stops the partial repeat play (play) |
| [`play/stopPlay`](#play_stopplay) | private |  | tv-broadcast | inferred | Stops the play (play) |
| [`play/stopPlayInstance`](#play_stopplayinstance) | private |  | tv-broadcast | inferred | Stops the play instance (play) |
| [`play/switchToLive`](#play_switchtolive) | private |  | tv-broadcast | inferred | Switches the to live (play) |
| [`play/unpauseToLive`](#play_unpausetolive) | private |  | tv-broadcast | inferred | Handles the unpause to live (play) |
| [`private/deleteRecordFile`](#private_deleterecordfile) | private |  | tv-broadcast | inferred | Deletes the record file (private) ⚠️ |
| [`private/getChangedRecordFile`](#private_getchangedrecordfile) | private |  | tv-broadcast | inferred | Returns the changed record file (private) |
| [`private/getRecordFile`](#private_getrecordfile) | private |  | tv-broadcast | inferred | Returns the record file (private) |
| [`private/getRecordFileList`](#private_getrecordfilelist) | private |  | tv-broadcast | inferred | Returns the record file list (private) |
| [`private/getRecordSynopsis`](#private_getrecordsynopsis) | private |  | tv-broadcast | inferred | Returns the record synopsis (private) |
| [`private/getRootDirectoryName`](#private_getrootdirectoryname) | private |  | tv-broadcast | inferred | Returns the root directory name (private) |
| [`private/getThumbnail`](#private_getthumbnail) | private |  | tv-broadcast | inferred | Returns the thumbnail (private) |
| [`private/getThumbnailData`](#private_getthumbnaildata) | private |  | tv-broadcast | inferred | Returns the thumbnail data (private) |
| [`private/isRecordFileExists`](#private_isrecordfileexists) | private |  | tv-broadcast | inferred | Reports whether the record file exists is set (private) |
| [`private/testLMT`](#private_testlmt) | private |  | tv-broadcast | inferred | Tests the LMT (private) |
| [`record/changeRecordType`](#record_changerecordtype) | private |  | tv-broadcast | inferred | Changes the record type (record) |
| [`record/changeToSeriesRecord`](#record_changetoseriesrecord) | private |  | tv-broadcast | inferred | Changes the to series record (record) |
| [`record/getRecordableDuration`](#record_getrecordableduration) | private |  | tv-broadcast | inferred | Returns the recordable duration (record) |
| [`record/getRecordingBufferedLength`](#record_getrecordingbufferedlength) | private |  | tv-broadcast | inferred | Returns the recording buffered length (record) |
| [`record/getRecordingDuration`](#record_getrecordingduration) | private |  | tv-broadcast | inferred | Returns the recording duration (record) |
| [`record/getRecordingEventRelayInfo`](#record_getrecordingeventrelayinfo) | private |  | tv-broadcast | inferred | Returns the recording event relay info (record) |
| [`record/getRecordingId`](#record_getrecordingid) | private |  | tv-broadcast | inferred | Returns the recording ID (record) |
| [`record/getRecordingIdList`](#record_getrecordingidlist) | private |  | tv-broadcast | inferred | Returns the recording ID list (record) |
| [`record/getRecordingQuality`](#record_getrecordingquality) | private |  | tv-broadcast | inferred | Returns the recording quality (record) |
| [`record/getRecordingRemainDuration`](#record_getrecordingremainduration) | private |  | tv-broadcast | inferred | Returns the recording remain duration (record) |
| [`record/getRecordingSource`](#record_getrecordingsource) | private |  | tv-broadcast | inferred | Returns the recording source (record) |
| [`record/getRecordingSourceList`](#record_getrecordingsourcelist) | private |  | tv-broadcast | inferred | Returns the recording source list (record) |
| [`record/getRecordingStartTime`](#record_getrecordingstarttime) | private |  | tv-broadcast | inferred | Returns the recording start time (record) |
| [`record/getRecordingType`](#record_getrecordingtype) | private |  | tv-broadcast | inferred | Returns the recording type (record) |
| [`record/getTimeshiftBufferedLength`](#record_gettimeshiftbufferedlength) | private |  | tv-broadcast | inferred | Returns the timeshift buffered length (record) |
| [`record/getTimeshiftBufferingSourceType`](#record_gettimeshiftbufferingsourcetype) | private |  | tv-broadcast | inferred | Returns the timeshift buffering source type (record) |
| [`record/getTimeshiftRecordingId`](#record_gettimeshiftrecordingid) | private |  | tv-broadcast | inferred | Returns the timeshift recording ID (record) |
| [`record/isECPProtectedContent`](#record_isecpprotectedcontent) | private |  | tv-broadcast | inferred | Reports whether the ECP protected content is set (record) |
| [`record/isRecordableInput`](#record_isrecordableinput) | private |  | tv-broadcast | inferred | Reports whether the recordable input is set (record) |
| [`record/isRecording`](#record_isrecording) | private |  | tv-broadcast | inferred | Reports whether the recording is set (record) |
| [`record/isTimeshiftBufferable`](#record_istimeshiftbufferable) | private |  | tv-broadcast | inferred | Reports whether the timeshift bufferable is set (record) |
| [`record/isTimeshiftBuffering`](#record_istimeshiftbuffering) | private |  | tv-broadcast | inferred | Reports whether the timeshift buffering is set (record) |
| [`record/pauseTimeshiftBuffering`](#record_pausetimeshiftbuffering) | private |  | tv-broadcast | inferred | Pauses the timeshift buffering (record) |
| [`record/releaseContentsDeleteLock`](#record_releasecontentsdeletelock) | private |  | tv-broadcast | inferred | Releases the contents delete lock (record) ⚠️ |
| [`record/resumeRecord`](#record_resumerecord) | private |  | tv-broadcast | inferred | Resumes the record (record) |
| [`record/resumeTimeshiftBuffering`](#record_resumetimeshiftbuffering) | private |  | tv-broadcast | inferred | Resumes the timeshift buffering (record) |
| [`record/setContentsDeleteLock`](#record_setcontentsdeletelock) | private |  | tv-broadcast | inferred | Sets the contents delete lock (record) ⚠️ |
| [`record/setContentTitle`](#record_setcontenttitle) | private |  | tv-broadcast | inferred | Sets the content title (record) |
| [`record/setNormalContent`](#record_setnormalcontent) | private |  | tv-broadcast | inferred | Sets the normal content (record) |
| [`record/setRecordingEndTime`](#record_setrecordingendtime) | private |  | tv-broadcast | inferred | Sets the recording end time (record) |
| [`record/setRecordingRemainDuration`](#record_setrecordingremainduration) | private |  | tv-broadcast | inferred | Sets the recording remain duration (record) |
| [`record/startExternalInputRecord`](#record_startexternalinputrecord) | private |  | tv-broadcast | inferred | Starts the external input record (record) |
| [`record/startManualRecord`](#record_startmanualrecord) | private |  | tv-broadcast | inferred | Starts the manual record (record) |
| [`record/startProgramRecord`](#record_startprogramrecord) | private |  | tv-broadcast | inferred | Starts the program record (record) |
| [`record/startScheduleRecord`](#record_startschedulerecord) | private |  | tv-broadcast | inferred | Starts the schedule record (record) |
| [`record/startTimeshiftBuffering`](#record_starttimeshiftbuffering) | private |  | tv-broadcast | inferred | Starts the timeshift buffering (record) |
| [`record/stopRecord`](#record_stoprecord) | private |  | tv-broadcast | inferred | Stops the record (record) |
| [`record/stopScheduleRecord`](#record_stopschedulerecord) | private |  | tv-broadcast | inferred | Stops the schedule record (record) |
| [`record/stopTimeshiftBuffering`](#record_stoptimeshiftbuffering) | private |  | tv-broadcast | inferred | Stops the timeshift buffering (record) |

<a id="device_checkstorageperformance"></a>
## `device/checkStoragePerformance`

`luna://com.webos.service.legacybroadcast.dvr/device/checkStoragePerformance`

Checks the storage performance (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/device/checkStoragePerformance '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_getrequiredstorageperformance"></a>
## `device/getRequiredStoragePerformance`

`luna://com.webos.service.legacybroadcast.dvr/device/getRequiredStoragePerformance`

Returns the required storage performance (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/device/getRequiredStoragePerformance '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_getstoragesinperformancecheck"></a>
## `device/getStoragesInPerformanceCheck`

`luna://com.webos.service.legacybroadcast.dvr/device/getStoragesInPerformanceCheck`

Returns the storages in performance check (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/device/getStoragesInPerformanceCheck '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_isrecordablestorage"></a>
## `device/isRecordableStorage`

`luna://com.webos.service.legacybroadcast.dvr/device/isRecordableStorage`

Reports whether the recordable storage is set (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/device/isRecordableStorage '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_clipcontent"></a>
## `play/clipContent`

`luna://com.webos.service.legacybroadcast.dvr/play/clipContent`

Handles the clip content (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/clipContent '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_closeplayinstance"></a>
## `play/closePlayInstance`

`luna://com.webos.service.legacybroadcast.dvr/play/closePlayInstance`

Closes the play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/closePlayInstance '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_disablesubtitle"></a>
## `play/disableSubtitle`

`luna://com.webos.service.legacybroadcast.dvr/play/disableSubtitle`

Disables the subtitle (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/disableSubtitle '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_enablesubtitle"></a>
## `play/enableSubtitle`

`luna://com.webos.service.legacybroadcast.dvr/play/enableSubtitle`

Enables the subtitle (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/enableSubtitle '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_frameforward"></a>
## `play/frameForward`

`luna://com.webos.service.legacybroadcast.dvr/play/frameForward`

Handles the frame forward (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/frameForward '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getdelayednlpprograminfo"></a>
## `play/getDelayedNLPProgramInfo`

`luna://com.webos.service.legacybroadcast.dvr/play/getDelayedNLPProgramInfo`

Returns the delayed NLP program info (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getDelayedNLPProgramInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getlivepausetime"></a>
## `play/getLivePauseTime`

`luna://com.webos.service.legacybroadcast.dvr/play/getLivePauseTime`

Returns the live pause time (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getLivePauseTime '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingaudiocodectype"></a>
## `play/getPlayingAudioCodecType`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioCodecType`

Returns the playing audio codec type (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioCodecType '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingaudiolanguage"></a>
## `play/getPlayingAudioLanguage`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioLanguage`

Returns the playing audio language (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioLanguage '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingaudiolanguagelist"></a>
## `play/getPlayingAudioLanguageList`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioLanguageList`

Returns the playing audio language list (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioLanguageList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingaudiolauguagelist"></a>
## `play/getPlayingAudioLauguageList`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioLauguageList`

Returns the playing audio lauguage list (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingAudioLauguageList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingcontentinfo"></a>
## `play/getPlayingContentInfo`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingContentInfo`

Returns the playing content info (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingContentInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingmode"></a>
## `play/getPlayingMode`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingMode`

Returns the playing mode (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingMode '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingprogram"></a>
## `play/getPlayingProgram`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingProgram`

Returns the playing program (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingProgram '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingscreensavertype"></a>
## `play/getPlayingScreenSaverType`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingScreenSaverType`

Returns the playing screen saver type (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingScreenSaverType '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingspeed"></a>
## `play/getPlayingSpeed`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingSpeed`

Returns the playing speed (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingSpeed '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingstate"></a>
## `play/getPlayingState`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingState`

Returns the playing state (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingState '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingtime"></a>
## `play/getPlayingTime`

`luna://com.webos.service.legacybroadcast.dvr/play/getPlayingTime`

Returns the playing time (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getPlayingTime '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getratinginfo"></a>
## `play/getRatingInfo`

`luna://com.webos.service.legacybroadcast.dvr/play/getRatingInfo`

Returns the rating info (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getRatingInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getsubtitlelist"></a>
## `play/getSubtitleList`

`luna://com.webos.service.legacybroadcast.dvr/play/getSubtitleList`

Returns the subtitle list (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getSubtitleList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getsubtitlestate"></a>
## `play/getSubtitleState`

`luna://com.webos.service.legacybroadcast.dvr/play/getSubtitleState`

Returns the subtitle state (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/getSubtitleState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_iscontentplaying"></a>
## `play/isContentPlaying`

`luna://com.webos.service.legacybroadcast.dvr/play/isContentPlaying`

Reports whether the content playing is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/isContentPlaying '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_isdelayedplaying"></a>
## `play/isDelayedPlaying`

`luna://com.webos.service.legacybroadcast.dvr/play/isDelayedPlaying`

Reports whether the delayed playing is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/isDelayedPlaying '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_ispauseonlive"></a>
## `play/isPauseOnLive`

`luna://com.webos.service.legacybroadcast.dvr/play/isPauseOnLive`

Reports whether the pause on live is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/isPauseOnLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_isplayingaudiodescriptionfailure"></a>
## `play/isPlayingAudioDescriptionFailure`

`luna://com.webos.service.legacybroadcast.dvr/play/isPlayingAudioDescriptionFailure`

Reports whether the playing audio description failure is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/isPlayingAudioDescriptionFailure '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="play_isplayingfailure"></a>
## `play/isPlayingFailure`

`luna://com.webos.service.legacybroadcast.dvr/play/isPlayingFailure`

Reports whether the playing failure is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/isPlayingFailure '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_isplayingreachedend"></a>
## `play/isPlayingReachedEnd`

`luna://com.webos.service.legacybroadcast.dvr/play/isPlayingReachedEnd`

Reports whether the playing reached end is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/isPlayingReachedEnd '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_opencontentplayinstance"></a>
## `play/openContentPlayInstance`

`luna://com.webos.service.legacybroadcast.dvr/play/openContentPlayInstance`

Opens the content play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/openContentPlayInstance '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_openrecordingplayinstance"></a>
## `play/openRecordingPlayInstance`

`luna://com.webos.service.legacybroadcast.dvr/play/openRecordingPlayInstance`

Opens the recording play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/openRecordingPlayInstance '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_opentimeshiftplayinstance"></a>
## `play/openTimeshiftPlayInstance`

`luna://com.webos.service.legacybroadcast.dvr/play/openTimeshiftPlayInstance`

Opens the timeshift play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/openTimeshiftPlayInstance '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_pause"></a>
## `play/pause`

`luna://com.webos.service.legacybroadcast.dvr/play/pause`

Pauses the legacybroadcast DVR (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/pause '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_pauseonlive"></a>
## `play/pauseOnLive`

`luna://com.webos.service.legacybroadcast.dvr/play/pauseOnLive`

Pauses the on live (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/pauseOnLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_releaseplayingblockedscreensaver"></a>
## `play/releasePlayingBlockedScreenSaver`

`luna://com.webos.service.legacybroadcast.dvr/play/releasePlayingBlockedScreenSaver`

Releases the playing blocked screen saver (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/releasePlayingBlockedScreenSaver '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_seek"></a>
## `play/seek`

`luna://com.webos.service.legacybroadcast.dvr/play/seek`

Seeks the legacybroadcast DVR (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/seek '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_setplayingaudiolanguage"></a>
## `play/setPlayingAudioLanguage`

`luna://com.webos.service.legacybroadcast.dvr/play/setPlayingAudioLanguage`

Sets the playing audio language (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/setPlayingAudioLanguage '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_setplayrate"></a>
## `play/setPlayRate`

`luna://com.webos.service.legacybroadcast.dvr/play/setPlayRate`

Sets the play rate (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/setPlayRate '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_setsubtitle"></a>
## `play/setSubtitle`

`luna://com.webos.service.legacybroadcast.dvr/play/setSubtitle`

Sets the subtitle (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/setSubtitle '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_startpartialrepeatplay"></a>
## `play/startPartialRepeatPlay`

`luna://com.webos.service.legacybroadcast.dvr/play/startPartialRepeatPlay`

Starts the partial repeat play (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/startPartialRepeatPlay '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_startplay"></a>
## `play/startPlay`

`luna://com.webos.service.legacybroadcast.dvr/play/startPlay`

Starts the play (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/startPlay '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_stoppartialrepeatplay"></a>
## `play/stopPartialRepeatPlay`

`luna://com.webos.service.legacybroadcast.dvr/play/stopPartialRepeatPlay`

Stops the partial repeat play (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/stopPartialRepeatPlay '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_stopplay"></a>
## `play/stopPlay`

`luna://com.webos.service.legacybroadcast.dvr/play/stopPlay`

Stops the play (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/stopPlay '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_stopplayinstance"></a>
## `play/stopPlayInstance`

`luna://com.webos.service.legacybroadcast.dvr/play/stopPlayInstance`

Stops the play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/stopPlayInstance '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_switchtolive"></a>
## `play/switchToLive`

`luna://com.webos.service.legacybroadcast.dvr/play/switchToLive`

Switches the to live (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/switchToLive '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_unpausetolive"></a>
## `play/unpauseToLive`

`luna://com.webos.service.legacybroadcast.dvr/play/unpauseToLive`

Handles the unpause to live (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/play/unpauseToLive '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_deleterecordfile"></a>
## `private/deleteRecordFile` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.dvr/private/deleteRecordFile`

Deletes the record file (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/deleteRecordFile '{}'
```

> ACG groups: all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getchangedrecordfile"></a>
## `private/getChangedRecordFile`

`luna://com.webos.service.legacybroadcast.dvr/private/getChangedRecordFile`

Returns the changed record file (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/getChangedRecordFile '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getrecordfile"></a>
## `private/getRecordFile`

`luna://com.webos.service.legacybroadcast.dvr/private/getRecordFile`

Returns the record file (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/getRecordFile '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getrecordfilelist"></a>
## `private/getRecordFileList`

`luna://com.webos.service.legacybroadcast.dvr/private/getRecordFileList`

Returns the record file list (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/getRecordFileList '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getrecordsynopsis"></a>
## `private/getRecordSynopsis`

`luna://com.webos.service.legacybroadcast.dvr/private/getRecordSynopsis`

Returns the record synopsis (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/getRecordSynopsis '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getrootdirectoryname"></a>
## `private/getRootDirectoryName`

`luna://com.webos.service.legacybroadcast.dvr/private/getRootDirectoryName`

Returns the root directory name (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/getRootDirectoryName '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getthumbnail"></a>
## `private/getThumbnail`

`luna://com.webos.service.legacybroadcast.dvr/private/getThumbnail`

Returns the thumbnail (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/getThumbnail '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getthumbnaildata"></a>
## `private/getThumbnailData`

`luna://com.webos.service.legacybroadcast.dvr/private/getThumbnailData`

Returns the thumbnail data (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/getThumbnailData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_isrecordfileexists"></a>
## `private/isRecordFileExists`

`luna://com.webos.service.legacybroadcast.dvr/private/isRecordFileExists`

Reports whether the record file exists is set (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/isRecordFileExists '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_testlmt"></a>
## `private/testLMT`

`luna://com.webos.service.legacybroadcast.dvr/private/testLMT`

Tests the LMT (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/private/testLMT '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_changerecordtype"></a>
## `record/changeRecordType`

`luna://com.webos.service.legacybroadcast.dvr/record/changeRecordType`

Changes the record type (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/changeRecordType '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_changetoseriesrecord"></a>
## `record/changeToSeriesRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/changeToSeriesRecord`

Changes the to series record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/changeToSeriesRecord '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordableduration"></a>
## `record/getRecordableDuration`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordableDuration`

Returns the recordable duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordableDuration '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingbufferedlength"></a>
## `record/getRecordingBufferedLength`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingBufferedLength`

Returns the recording buffered length (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingBufferedLength '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingduration"></a>
## `record/getRecordingDuration`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingDuration`

Returns the recording duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingDuration '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingeventrelayinfo"></a>
## `record/getRecordingEventRelayInfo`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingEventRelayInfo`

Returns the recording event relay info (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingEventRelayInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingid"></a>
## `record/getRecordingId`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingId`

Returns the recording ID (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingId '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingidlist"></a>
## `record/getRecordingIdList`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingIdList`

Returns the recording ID list (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingIdList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingquality"></a>
## `record/getRecordingQuality`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingQuality`

Returns the recording quality (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingQuality '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingremainduration"></a>
## `record/getRecordingRemainDuration`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingRemainDuration`

Returns the recording remain duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingRemainDuration '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingsource"></a>
## `record/getRecordingSource`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingSource`

Returns the recording source (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingSource '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingsourcelist"></a>
## `record/getRecordingSourceList`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingSourceList`

Returns the recording source list (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingSourceList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingstarttime"></a>
## `record/getRecordingStartTime`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingStartTime`

Returns the recording start time (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingStartTime '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingtype"></a>
## `record/getRecordingType`

`luna://com.webos.service.legacybroadcast.dvr/record/getRecordingType`

Returns the recording type (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getRecordingType '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferedlength"></a>
## `record/getTimeshiftBufferedLength`

`luna://com.webos.service.legacybroadcast.dvr/record/getTimeshiftBufferedLength`

Returns the timeshift buffered length (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getTimeshiftBufferedLength '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferingsourcetype"></a>
## `record/getTimeshiftBufferingSourceType`

`luna://com.webos.service.legacybroadcast.dvr/record/getTimeshiftBufferingSourceType`

Returns the timeshift buffering source type (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getTimeshiftBufferingSourceType '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftrecordingid"></a>
## `record/getTimeshiftRecordingId`

`luna://com.webos.service.legacybroadcast.dvr/record/getTimeshiftRecordingId`

Returns the timeshift recording ID (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/getTimeshiftRecordingId '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_isecpprotectedcontent"></a>
## `record/isECPProtectedContent`

`luna://com.webos.service.legacybroadcast.dvr/record/isECPProtectedContent`

Reports whether the ECP protected content is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/isECPProtectedContent '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecordableinput"></a>
## `record/isRecordableInput`

`luna://com.webos.service.legacybroadcast.dvr/record/isRecordableInput`

Reports whether the recordable input is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/isRecordableInput '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecording"></a>
## `record/isRecording`

`luna://com.webos.service.legacybroadcast.dvr/record/isRecording`

Reports whether the recording is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/isRecording '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbufferable"></a>
## `record/isTimeshiftBufferable`

`luna://com.webos.service.legacybroadcast.dvr/record/isTimeshiftBufferable`

Reports whether the timeshift bufferable is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/isTimeshiftBufferable '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbuffering"></a>
## `record/isTimeshiftBuffering`

`luna://com.webos.service.legacybroadcast.dvr/record/isTimeshiftBuffering`

Reports whether the timeshift buffering is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/isTimeshiftBuffering '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_pausetimeshiftbuffering"></a>
## `record/pauseTimeshiftBuffering`

`luna://com.webos.service.legacybroadcast.dvr/record/pauseTimeshiftBuffering`

Pauses the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/pauseTimeshiftBuffering '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_releasecontentsdeletelock"></a>
## `record/releaseContentsDeleteLock` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.dvr/record/releaseContentsDeleteLock`

Releases the contents delete lock (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/releaseContentsDeleteLock '{}'
```

> ACG groups: all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_resumerecord"></a>
## `record/resumeRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/resumeRecord`

Resumes the record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/resumeRecord '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_resumetimeshiftbuffering"></a>
## `record/resumeTimeshiftBuffering`

`luna://com.webos.service.legacybroadcast.dvr/record/resumeTimeshiftBuffering`

Resumes the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/resumeTimeshiftBuffering '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_setcontentsdeletelock"></a>
## `record/setContentsDeleteLock` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.dvr/record/setContentsDeleteLock`

Sets the contents delete lock (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/setContentsDeleteLock '{}'
```

> ACG groups: all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_setcontenttitle"></a>
## `record/setContentTitle`

`luna://com.webos.service.legacybroadcast.dvr/record/setContentTitle`

Sets the content title (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/setContentTitle '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_setnormalcontent"></a>
## `record/setNormalContent`

`luna://com.webos.service.legacybroadcast.dvr/record/setNormalContent`

Sets the normal content (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/setNormalContent '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingendtime"></a>
## `record/setRecordingEndTime`

`luna://com.webos.service.legacybroadcast.dvr/record/setRecordingEndTime`

Sets the recording end time (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/setRecordingEndTime '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingremainduration"></a>
## `record/setRecordingRemainDuration`

`luna://com.webos.service.legacybroadcast.dvr/record/setRecordingRemainDuration`

Sets the recording remain duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/setRecordingRemainDuration '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_startexternalinputrecord"></a>
## `record/startExternalInputRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/startExternalInputRecord`

Starts the external input record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/startExternalInputRecord '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_startmanualrecord"></a>
## `record/startManualRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/startManualRecord`

Starts the manual record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/startManualRecord '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_startprogramrecord"></a>
## `record/startProgramRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/startProgramRecord`

Starts the program record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/startProgramRecord '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_startschedulerecord"></a>
## `record/startScheduleRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/startScheduleRecord`

Starts the schedule record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/startScheduleRecord '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_starttimeshiftbuffering"></a>
## `record/startTimeshiftBuffering`

`luna://com.webos.service.legacybroadcast.dvr/record/startTimeshiftBuffering`

Starts the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/startTimeshiftBuffering '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_stoprecord"></a>
## `record/stopRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/stopRecord`

Stops the record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/stopRecord '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_stopschedulerecord"></a>
## `record/stopScheduleRecord`

`luna://com.webos.service.legacybroadcast.dvr/record/stopScheduleRecord`

Stops the schedule record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/stopScheduleRecord '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_stoptimeshiftbuffering"></a>
## `record/stopTimeshiftBuffering`

`luna://com.webos.service.legacybroadcast.dvr/record/stopTimeshiftBuffering`

Stops the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.dvr/record/stopTimeshiftBuffering '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
