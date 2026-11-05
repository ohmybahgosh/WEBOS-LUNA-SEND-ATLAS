# `com.webos.service.utp.dvr`

DVR service (utp broadcast stack): plays back recordings with seek and frame-step, manages subtitles, and reports playing content, mode, time, and rating info. _(inferred from the service's methods)_

68 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`play/bind`](#play_bind) | private |  | tv-broadcast | inferred | Binds the UTP DVR (play) |
| [`play/closePlayInstance`](#play_closeplayinstance) | private |  | tv-broadcast | inferred | Closes the play instance (play) |
| [`play/disableSubtitle`](#play_disablesubtitle) | private |  | tv-broadcast | inferred | Disables the subtitle (play) |
| [`play/enableSubtitle`](#play_enablesubtitle) | private |  | tv-broadcast | inferred | Enables the subtitle (play) |
| [`play/frameForward`](#play_frameforward) | private |  | tv-broadcast | inferred | Handles the frame forward (play) |
| [`play/getDelayedNLPProgramInfo`](#play_getdelayednlpprograminfo) | private |  | tv-broadcast | inferred | Returns the delayed NLP program info (play) |
| [`play/getLivePauseTime`](#play_getlivepausetime) | public |  | tv-broadcast | inferred | Returns the live pause time (play) |
| [`play/getPlayingAudioLanguageList`](#play_getplayingaudiolanguagelist) | private |  | audio | inferred | Returns the playing audio language list (play) |
| [`play/getPlayingContentInfo`](#play_getplayingcontentinfo) | private |  | tv-broadcast | inferred | Returns the playing content info (play) |
| [`play/getPlayingMode`](#play_getplayingmode) | private |  | tv-broadcast | inferred | Returns the playing mode (play) |
| [`play/getPlayingProgram`](#play_getplayingprogram) | private |  | tv-broadcast | inferred | Returns the playing program (play) |
| [`play/getPlayingScreenSaverType`](#play_getplayingscreensavertype) | private |  | tv-broadcast | inferred | Returns the playing screen saver type (play) |
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
| [`play/pause`](#play_pause) | private |  | tv-broadcast | inferred | Pauses the UTP DVR (play) |
| [`play/pauseOnLive`](#play_pauseonlive) | public |  | tv-broadcast | inferred | Pauses the on live (play) |
| [`play/playTimeshift`](#play_playtimeshift) | private |  | tv-broadcast | inferred | Plays the timeshift (play) |
| [`play/releasePlayingBlockedScreenSaver`](#play_releaseplayingblockedscreensaver) | private |  | tv-broadcast | inferred | Releases the playing blocked screen saver (play) |
| [`play/seek`](#play_seek) | private |  | tv-broadcast | inferred | Seeks the UTP DVR (play) |
| [`play/setPlayingAudioLanguage`](#play_setplayingaudiolanguage) | private |  | audio | inferred | Sets the playing audio language (play) |
| [`play/setPlayRate`](#play_setplayrate) | private |  | tv-broadcast | inferred | Sets the play rate (play) |
| [`play/setSubtitle`](#play_setsubtitle) | private |  | tv-broadcast | inferred | Sets the subtitle (play) |
| [`play/startPlay`](#play_startplay) | private |  | tv-broadcast | inferred | Starts the play (play) |
| [`play/stopPlay`](#play_stopplay) | private |  | tv-broadcast | inferred | Stops the play (play) |
| [`play/stopPlayInstance`](#play_stopplayinstance) | private |  | tv-broadcast | inferred | Stops the play instance (play) |
| [`play/unpauseToLive`](#play_unpausetolive) | public |  | tv-broadcast | inferred | Handles the unpause to live (play) |
| [`private/getChangedRecordFile`](#private_getchangedrecordfile) | private |  | tv-broadcast | inferred | Returns the changed record file (private) |
| [`private/getThumbnailData`](#private_getthumbnaildata) | private |  | tv-broadcast | inferred | Returns the thumbnail data (private) |
| [`record/changeToSeriesRecord`](#record_changetoseriesrecord) | private |  | tv-broadcast | inferred | Changes the to series record (record) |
| [`record/getRecordableDuration`](#record_getrecordableduration) | public |  | tv-broadcast | inferred | Returns the recordable duration (record) |
| [`record/getRecordingBufferedLength`](#record_getrecordingbufferedlength) | private |  | tv-broadcast | inferred | Returns the recording buffered length (record) |
| [`record/getRecordingDuration`](#record_getrecordingduration) | private |  | tv-broadcast | inferred | Returns the recording duration (record) |
| [`record/getRecordingId`](#record_getrecordingid) | public |  | tv-broadcast | inferred | Returns the recording ID (record) |
| [`record/getRecordingIdList`](#record_getrecordingidlist) | public |  | tv-broadcast | inferred | Returns the recording ID list (record) |
| [`record/getRecordingQuality`](#record_getrecordingquality) | public |  | tv-broadcast | inferred | Returns the recording quality (record) |
| [`record/getRecordingRemainDuration`](#record_getrecordingremainduration) | public |  | tv-broadcast | inferred | Returns the recording remain duration (record) |
| [`record/getRecordingSource`](#record_getrecordingsource) | public |  | tv-broadcast | inferred | Returns the recording source (record) |
| [`record/getRecordingSourceList`](#record_getrecordingsourcelist) | public |  | tv-broadcast | inferred | Returns the recording source list (record) |
| [`record/getRecordingStartTime`](#record_getrecordingstarttime) | private |  | tv-broadcast | inferred | Returns the recording start time (record) |
| [`record/getRecordingType`](#record_getrecordingtype) | public |  | tv-broadcast | inferred | Returns the recording type (record) |
| [`record/getTimeshiftBufferedLength`](#record_gettimeshiftbufferedlength) | public |  | tv-broadcast | inferred | Returns the timeshift buffered length (record) |
| [`record/getTimeshiftBufferingSourceType`](#record_gettimeshiftbufferingsourcetype) | private |  | tv-broadcast | inferred | Returns the timeshift buffering source type (record) |
| [`record/getTimeshiftRecordingId`](#record_gettimeshiftrecordingid) | public |  | tv-broadcast | inferred | Returns the timeshift recording ID (record) |
| [`record/isECPProtectedContent`](#record_isecpprotectedcontent) | private |  | tv-broadcast | inferred | Reports whether the ECP protected content is set (record) |
| [`record/isRecordableInput`](#record_isrecordableinput) | private |  | tv-broadcast | inferred | Reports whether the recordable input is set (record) |
| [`record/isRecording`](#record_isrecording) | public |  | tv-broadcast | inferred | Reports whether the recording is set (record) |
| [`record/isTimeshiftBufferable`](#record_istimeshiftbufferable) | public |  | tv-broadcast | inferred | Reports whether the timeshift bufferable is set (record) |
| [`record/isTimeshiftBuffering`](#record_istimeshiftbuffering) | public |  | tv-broadcast | inferred | Reports whether the timeshift buffering is set (record) |
| [`record/setRecordingEndTime`](#record_setrecordingendtime) | public |  | tv-broadcast | inferred | Sets the recording end time (record) |
| [`record/setRecordingRemainDuration`](#record_setrecordingremainduration) | public |  | tv-broadcast | inferred | Sets the recording remain duration (record) |
| [`record/startManualRecord`](#record_startmanualrecord) | public |  | tv-broadcast | inferred | Starts the manual record (record) |
| [`record/startProgramRecord`](#record_startprogramrecord) | public |  | tv-broadcast | inferred | Starts the program record (record) |
| [`record/startScheduleRecord`](#record_startschedulerecord) | public |  | tv-broadcast | inferred | Starts the schedule record (record) |
| [`record/startTimeshiftBuffering`](#record_starttimeshiftbuffering) | public |  | tv-broadcast | inferred | Starts the timeshift buffering (record) |
| [`record/stopRecord`](#record_stoprecord) | public |  | tv-broadcast | inferred | Stops the record (record) |
| [`record/stopScheduleRecord`](#record_stopschedulerecord) | public |  | tv-broadcast | inferred | Stops the schedule record (record) |
| [`record/stopTimeshiftBuffering`](#record_stoptimeshiftbuffering) | public |  | tv-broadcast | inferred | Stops the timeshift buffering (record) |

<a id="play_bind"></a>
## `play/bind`

`luna://com.webos.service.utp.dvr/play/bind`

Binds the UTP DVR (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/bind '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_closeplayinstance"></a>
## `play/closePlayInstance`

`luna://com.webos.service.utp.dvr/play/closePlayInstance`

Closes the play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/closePlayInstance '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_disablesubtitle"></a>
## `play/disableSubtitle`

`luna://com.webos.service.utp.dvr/play/disableSubtitle`

Disables the subtitle (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/disableSubtitle '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_enablesubtitle"></a>
## `play/enableSubtitle`

`luna://com.webos.service.utp.dvr/play/enableSubtitle`

Enables the subtitle (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/enableSubtitle '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_frameforward"></a>
## `play/frameForward`

`luna://com.webos.service.utp.dvr/play/frameForward`

Handles the frame forward (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/frameForward '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getdelayednlpprograminfo"></a>
## `play/getDelayedNLPProgramInfo`

`luna://com.webos.service.utp.dvr/play/getDelayedNLPProgramInfo`

Returns the delayed NLP program info (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getDelayedNLPProgramInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getlivepausetime"></a>
## `play/getLivePauseTime`

`luna://com.webos.service.utp.dvr/play/getLivePauseTime`

Returns the live pause time (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getLivePauseTime '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingaudiolanguagelist"></a>
## `play/getPlayingAudioLanguageList`

`luna://com.webos.service.utp.dvr/play/getPlayingAudioLanguageList`

Returns the playing audio language list (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getPlayingAudioLanguageList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingcontentinfo"></a>
## `play/getPlayingContentInfo`

`luna://com.webos.service.utp.dvr/play/getPlayingContentInfo`

Returns the playing content info (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getPlayingContentInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingmode"></a>
## `play/getPlayingMode`

`luna://com.webos.service.utp.dvr/play/getPlayingMode`

Returns the playing mode (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getPlayingMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingprogram"></a>
## `play/getPlayingProgram`

`luna://com.webos.service.utp.dvr/play/getPlayingProgram`

Returns the playing program (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getPlayingProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingscreensavertype"></a>
## `play/getPlayingScreenSaverType`

`luna://com.webos.service.utp.dvr/play/getPlayingScreenSaverType`

Returns the playing screen saver type (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getPlayingScreenSaverType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getplayingtime"></a>
## `play/getPlayingTime`

`luna://com.webos.service.utp.dvr/play/getPlayingTime`

Returns the playing time (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getPlayingTime '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getratinginfo"></a>
## `play/getRatingInfo`

`luna://com.webos.service.utp.dvr/play/getRatingInfo`

Returns the rating info (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getRatingInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getsubtitlelist"></a>
## `play/getSubtitleList`

`luna://com.webos.service.utp.dvr/play/getSubtitleList`

Returns the subtitle list (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getSubtitleList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_getsubtitlestate"></a>
## `play/getSubtitleState`

`luna://com.webos.service.utp.dvr/play/getSubtitleState`

Returns the subtitle state (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/getSubtitleState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_iscontentplaying"></a>
## `play/isContentPlaying`

`luna://com.webos.service.utp.dvr/play/isContentPlaying`

Reports whether the content playing is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/isContentPlaying '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_isdelayedplaying"></a>
## `play/isDelayedPlaying`

`luna://com.webos.service.utp.dvr/play/isDelayedPlaying`

Reports whether the delayed playing is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/isDelayedPlaying '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_ispauseonlive"></a>
## `play/isPauseOnLive`

`luna://com.webos.service.utp.dvr/play/isPauseOnLive`

Reports whether the pause on live is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/isPauseOnLive '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_isplayingaudiodescriptionfailure"></a>
## `play/isPlayingAudioDescriptionFailure`

`luna://com.webos.service.utp.dvr/play/isPlayingAudioDescriptionFailure`

Reports whether the playing audio description failure is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/isPlayingAudioDescriptionFailure '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_isplayingfailure"></a>
## `play/isPlayingFailure`

`luna://com.webos.service.utp.dvr/play/isPlayingFailure`

Reports whether the playing failure is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/isPlayingFailure '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_isplayingreachedend"></a>
## `play/isPlayingReachedEnd`

`luna://com.webos.service.utp.dvr/play/isPlayingReachedEnd`

Reports whether the playing reached end is set (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/isPlayingReachedEnd '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_opencontentplayinstance"></a>
## `play/openContentPlayInstance`

`luna://com.webos.service.utp.dvr/play/openContentPlayInstance`

Opens the content play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/openContentPlayInstance '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_openrecordingplayinstance"></a>
## `play/openRecordingPlayInstance`

`luna://com.webos.service.utp.dvr/play/openRecordingPlayInstance`

Opens the recording play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/openRecordingPlayInstance '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_opentimeshiftplayinstance"></a>
## `play/openTimeshiftPlayInstance`

`luna://com.webos.service.utp.dvr/play/openTimeshiftPlayInstance`

Opens the timeshift play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/openTimeshiftPlayInstance '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_pause"></a>
## `play/pause`

`luna://com.webos.service.utp.dvr/play/pause`

Pauses the UTP DVR (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/pause '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_pauseonlive"></a>
## `play/pauseOnLive`

`luna://com.webos.service.utp.dvr/play/pauseOnLive`

Pauses the on live (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/pauseOnLive '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_playtimeshift"></a>
## `play/playTimeshift`

`luna://com.webos.service.utp.dvr/play/playTimeshift`

Plays the timeshift (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/playTimeshift '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_releaseplayingblockedscreensaver"></a>
## `play/releasePlayingBlockedScreenSaver`

`luna://com.webos.service.utp.dvr/play/releasePlayingBlockedScreenSaver`

Releases the playing blocked screen saver (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/releasePlayingBlockedScreenSaver '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_seek"></a>
## `play/seek`

`luna://com.webos.service.utp.dvr/play/seek`

Seeks the UTP DVR (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/seek '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_setplayingaudiolanguage"></a>
## `play/setPlayingAudioLanguage`

`luna://com.webos.service.utp.dvr/play/setPlayingAudioLanguage`

Sets the playing audio language (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/setPlayingAudioLanguage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_setplayrate"></a>
## `play/setPlayRate`

`luna://com.webos.service.utp.dvr/play/setPlayRate`

Sets the play rate (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/setPlayRate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_setsubtitle"></a>
## `play/setSubtitle`

`luna://com.webos.service.utp.dvr/play/setSubtitle`

Sets the subtitle (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/setSubtitle '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_startplay"></a>
## `play/startPlay`

`luna://com.webos.service.utp.dvr/play/startPlay`

Starts the play (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/startPlay '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_stopplay"></a>
## `play/stopPlay`

`luna://com.webos.service.utp.dvr/play/stopPlay`

Stops the play (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/stopPlay '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_stopplayinstance"></a>
## `play/stopPlayInstance`

`luna://com.webos.service.utp.dvr/play/stopPlayInstance`

Stops the play instance (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/stopPlayInstance '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="play_unpausetolive"></a>
## `play/unpauseToLive`

`luna://com.webos.service.utp.dvr/play/unpauseToLive`

Handles the unpause to live (play)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/play/unpauseToLive '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getchangedrecordfile"></a>
## `private/getChangedRecordFile`

`luna://com.webos.service.utp.dvr/private/getChangedRecordFile`

Returns the changed record file (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/private/getChangedRecordFile '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="private_getthumbnaildata"></a>
## `private/getThumbnailData`

`luna://com.webos.service.utp.dvr/private/getThumbnailData`

Returns the thumbnail data (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/private/getThumbnailData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_changetoseriesrecord"></a>
## `record/changeToSeriesRecord`

`luna://com.webos.service.utp.dvr/record/changeToSeriesRecord`

Changes the to series record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/changeToSeriesRecord '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordableduration"></a>
## `record/getRecordableDuration`

`luna://com.webos.service.utp.dvr/record/getRecordableDuration`

Returns the recordable duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordableDuration '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingbufferedlength"></a>
## `record/getRecordingBufferedLength`

`luna://com.webos.service.utp.dvr/record/getRecordingBufferedLength`

Returns the recording buffered length (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingBufferedLength '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingduration"></a>
## `record/getRecordingDuration`

`luna://com.webos.service.utp.dvr/record/getRecordingDuration`

Returns the recording duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingDuration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingid"></a>
## `record/getRecordingId`

`luna://com.webos.service.utp.dvr/record/getRecordingId`

Returns the recording ID (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingId '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingidlist"></a>
## `record/getRecordingIdList`

`luna://com.webos.service.utp.dvr/record/getRecordingIdList`

Returns the recording ID list (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingIdList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingquality"></a>
## `record/getRecordingQuality`

`luna://com.webos.service.utp.dvr/record/getRecordingQuality`

Returns the recording quality (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingQuality '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingremainduration"></a>
## `record/getRecordingRemainDuration`

`luna://com.webos.service.utp.dvr/record/getRecordingRemainDuration`

Returns the recording remain duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingRemainDuration '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingsource"></a>
## `record/getRecordingSource`

`luna://com.webos.service.utp.dvr/record/getRecordingSource`

Returns the recording source (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingSource '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingsourcelist"></a>
## `record/getRecordingSourceList`

`luna://com.webos.service.utp.dvr/record/getRecordingSourceList`

Returns the recording source list (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingSourceList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingstarttime"></a>
## `record/getRecordingStartTime`

`luna://com.webos.service.utp.dvr/record/getRecordingStartTime`

Returns the recording start time (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingStartTime '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_getrecordingtype"></a>
## `record/getRecordingType`

`luna://com.webos.service.utp.dvr/record/getRecordingType`

Returns the recording type (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getRecordingType '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferedlength"></a>
## `record/getTimeshiftBufferedLength`

`luna://com.webos.service.utp.dvr/record/getTimeshiftBufferedLength`

Returns the timeshift buffered length (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getTimeshiftBufferedLength '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftbufferingsourcetype"></a>
## `record/getTimeshiftBufferingSourceType`

`luna://com.webos.service.utp.dvr/record/getTimeshiftBufferingSourceType`

Returns the timeshift buffering source type (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getTimeshiftBufferingSourceType '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_gettimeshiftrecordingid"></a>
## `record/getTimeshiftRecordingId`

`luna://com.webos.service.utp.dvr/record/getTimeshiftRecordingId`

Returns the timeshift recording ID (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/getTimeshiftRecordingId '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_isecpprotectedcontent"></a>
## `record/isECPProtectedContent`

`luna://com.webos.service.utp.dvr/record/isECPProtectedContent`

Reports whether the ECP protected content is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/isECPProtectedContent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecordableinput"></a>
## `record/isRecordableInput`

`luna://com.webos.service.utp.dvr/record/isRecordableInput`

Reports whether the recordable input is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/isRecordableInput '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_isrecording"></a>
## `record/isRecording`

`luna://com.webos.service.utp.dvr/record/isRecording`

Reports whether the recording is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/isRecording '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbufferable"></a>
## `record/isTimeshiftBufferable`

`luna://com.webos.service.utp.dvr/record/isTimeshiftBufferable`

Reports whether the timeshift bufferable is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/isTimeshiftBufferable '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_istimeshiftbuffering"></a>
## `record/isTimeshiftBuffering`

`luna://com.webos.service.utp.dvr/record/isTimeshiftBuffering`

Reports whether the timeshift buffering is set (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/isTimeshiftBuffering '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingendtime"></a>
## `record/setRecordingEndTime`

`luna://com.webos.service.utp.dvr/record/setRecordingEndTime`

Sets the recording end time (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/setRecordingEndTime '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_setrecordingremainduration"></a>
## `record/setRecordingRemainDuration`

`luna://com.webos.service.utp.dvr/record/setRecordingRemainDuration`

Sets the recording remain duration (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/setRecordingRemainDuration '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_startmanualrecord"></a>
## `record/startManualRecord`

`luna://com.webos.service.utp.dvr/record/startManualRecord`

Starts the manual record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/startManualRecord '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_startprogramrecord"></a>
## `record/startProgramRecord`

`luna://com.webos.service.utp.dvr/record/startProgramRecord`

Starts the program record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/startProgramRecord '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_startschedulerecord"></a>
## `record/startScheduleRecord`

`luna://com.webos.service.utp.dvr/record/startScheduleRecord`

Starts the schedule record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/startScheduleRecord '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_starttimeshiftbuffering"></a>
## `record/startTimeshiftBuffering`

`luna://com.webos.service.utp.dvr/record/startTimeshiftBuffering`

Starts the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/startTimeshiftBuffering '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_stoprecord"></a>
## `record/stopRecord`

`luna://com.webos.service.utp.dvr/record/stopRecord`

Stops the record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/stopRecord '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_stopschedulerecord"></a>
## `record/stopScheduleRecord`

`luna://com.webos.service.utp.dvr/record/stopScheduleRecord`

Stops the schedule record (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/stopScheduleRecord '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_stoptimeshiftbuffering"></a>
## `record/stopTimeshiftBuffering`

`luna://com.webos.service.utp.dvr/record/stopTimeshiftBuffering`

Stops the timeshift buffering (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.dvr/record/stopTimeshiftBuffering '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
