# `com.webos.service.tvReservationAgent`

TV reservation/scheduling agent: adds, edits, cancels and lists scheduled recordings and power on/off timers, and reports power state and power-on reason. _(inferred from the service's methods)_

42 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`add`](#add) | public |  | tv-broadcast | inferred | Adds the TV reservation agent. |
| [`cancel`](#cancel) | private |  | tv-broadcast | inferred | Cancels the TV reservation agent. |
| [`checkOverlap`](#checkoverlap) | private |  | tv-broadcast | inferred | Checks the overlap. |
| [`clear`](#clear) | private |  | tv-broadcast | inferred | Clears the TV reservation agent. |
| [`delete`](#delete) | public |  | tv-broadcast | inferred | Deletes the TV reservation agent. ⚠️ |
| [`edit`](#edit) | public |  | tv-broadcast | inferred | Edits the TV reservation agent. |
| [`getChangedList`](#getchangedlist) | public |  | tv-broadcast | inferred | Returns the changed list. |
| [`getCurrentLegacyResvOffTimerInfo`](#getcurrentlegacyresvofftimerinfo) | private |  | tv-broadcast | inferred | Returns the current legacy resv off timer info. |
| [`getCurrentLegacyResvOnTimerInfo`](#getcurrentlegacyresvontimerinfo) | private |  | tv-broadcast | inferred | Returns the current legacy resv on timer info. |
| [`getCurrentResvOffTimerInfo`](#getcurrentresvofftimerinfo) | private |  | tv-broadcast | inferred | Returns the current resv off timer info. |
| [`getCurrentResvOnTimerInfo`](#getcurrentresvontimerinfo) | private |  | tv-broadcast | inferred | Returns the current resv on timer info. |
| [`getCurrentTime`](#getcurrenttime) | private |  | tv-broadcast | inferred | Returns the current time. |
| [`getPowerOnReason`](#getpoweronreason) | private |  | power | inferred | Returns the power on reason. |
| [`getPowerState`](#getpowerstate) | private |  | power | inferred | Returns the power state. |
| [`getRepeatedList`](#getrepeatedlist) | public |  | tv-broadcast | inferred | Returns the repeated list. |
| [`isExistScheduleStartSoon`](#isexistschedulestartsoon) | private |  | tv-broadcast | inferred | Reports whether the exist schedule start soon is set. |
| [`record/addStopReason`](#record_addstopreason) | private |  | tv-broadcast | inferred | Adds the stop reason (record) |
| [`record/epgProgram/add`](#record_epgprogram_add) | private |  | tv-broadcast | inferred | Adds the TV reservation agent (record EPG program) |
| [`record/fullEpgProgram/add`](#record_fullepgprogram_add) | private |  | tv-broadcast | inferred | Adds the TV reservation agent (record full EPG program) |
| [`record/manual/add`](#record_manual_add) | private |  | tv-broadcast | inferred | Adds the TV reservation agent (record manual) |
| [`setReservationLogStatus`](#setreservationlogstatus) | private |  | tv-broadcast | inferred | Sets the reservation log status. |
| [`stopScheduler`](#stopscheduler) | private |  | tv-broadcast | inferred | Stops the scheduler. |
| [`testAlertPopup`](#testalertpopup) | private |  | tv-broadcast | inferred | Tests the alert popup. |
| [`testChannelInfo`](#testchannelinfo) | private |  | tv-broadcast | inferred | Tests the channel info. |
| [`testCmdApi`](#testcmdapi) | private |  | tv-broadcast | inferred | Tests the cmd api. |
| [`testCountryCode`](#testcountrycode) | private |  | tv-broadcast | inferred | Tests the country code. |
| [`testLegacyEtcAdapter`](#testlegacyetcadapter) | private |  | tv-broadcast | inferred | Tests the legacy etc adapter. |
| [`testLegacyiEPGAdapter`](#testlegacyiepgadapter) | private |  | tv-broadcast | inferred | Tests the legacyi EPG adapter. |
| [`testLegacyUTPAdapter`](#testlegacyutpadapter) | private |  | tv-broadcast | inferred | Tests the legacy UTP adapter. |
| [`testOptionInfo`](#testoptioninfo) | private |  | tv-broadcast | inferred | Tests the option info. |
| [`testPopup`](#testpopup) | private |  | tv-broadcast | inferred | Tests the popup. |
| [`testReservationDb`](#testreservationdb) | private |  | tv-broadcast | inferred | Tests the reservation db. |
| [`testResvHDDLog`](#testresvhddlog) | private |  | tv-broadcast | inferred | Tests the resv HDD log. |
| [`testSetDebugMode`](#testsetdebugmode) | private |  | tv-broadcast | inferred | Tests the set debug mode. |
| [`testTimerCallback`](#testtimercallback) | private |  | tv-broadcast | inferred | Tests the timer callback. |
| [`testToastPopup`](#testtoastpopup) | private |  | notifications | inferred | Tests the toast popup. |
| [`timer/sleep/add`](#timer_sleep_add) | private |  | power | documented | Sets the sleep timer in minutes |
| [`timer/sleep/getRemainTime`](#timer_sleep_getremaintime) | private |  | power | documented | Returns remaining sleep timer |
| [`watch/epgProgram/add`](#watch_epgprogram_add) | public |  | tv-broadcast | inferred | Adds the TV reservation agent (watch EPG program) |
| [`watch/fullEpgProgram/add`](#watch_fullepgprogram_add) | public |  | tv-broadcast | inferred | Adds the TV reservation agent (watch full EPG program) |
| [`watch/manual/add`](#watch_manual_add) | private |  | tv-broadcast | inferred | Adds the TV reservation agent (watch manual) |
| [`watch/okBtn`](#watch_okbtn) | private |  | tv-broadcast | inferred | Handles the ok btn (watch) |

<a id="add"></a>
## `add`

`luna://com.webos.service.tvReservationAgent/add`

Adds the TV reservation agent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/add '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.tvReservationAgent/cancel`

Cancels the TV reservation agent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/cancel '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkoverlap"></a>
## `checkOverlap`

`luna://com.webos.service.tvReservationAgent/checkOverlap`

Checks the overlap.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/checkOverlap '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clear"></a>
## `clear`

`luna://com.webos.service.tvReservationAgent/clear`

Clears the TV reservation agent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/clear '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delete"></a>
## `delete` ⚠️ DANGEROUS

`luna://com.webos.service.tvReservationAgent/delete`

Deletes the TV reservation agent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/delete '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="edit"></a>
## `edit`

`luna://com.webos.service.tvReservationAgent/edit`

Edits the TV reservation agent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/edit '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchangedlist"></a>
## `getChangedList`

`luna://com.webos.service.tvReservationAgent/getChangedList`

Returns the changed list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getChangedList '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentlegacyresvofftimerinfo"></a>
## `getCurrentLegacyResvOffTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOffTimerInfo`

Returns the current legacy resv off timer info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `bOffTimerEnable` |  |
| `offTimerHour` |  |
| `offTimerMinute` |  |
| `offTimerWeekday` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOffTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentlegacyresvontimerinfo"></a>
## `getCurrentLegacyResvOnTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOnTimerInfo`

Returns the current legacy resv on timer info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `bOnTimerEnable` |  |
| `onTimerAppId` |  |
| `onTimerChannel` |  |
| `onTimerHour` |  |
| `onTimerMinute` |  |
| `onTimerVolume` |  |
| `onTimerWeekday` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOnTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentresvofftimerinfo"></a>
## `getCurrentResvOffTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentResvOffTimerInfo`

Returns the current resv off timer info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `bOffTimerEnable` |  |
| `offTimerHour` |  |
| `offTimerMinute` |  |
| `offTimerWeekday` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentResvOffTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentresvontimerinfo"></a>
## `getCurrentResvOnTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentResvOnTimerInfo`

Returns the current resv on timer info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `bOnTimerEnable` |  |
| `onTimerAppId` |  |
| `onTimerChannel` |  |
| `onTimerHour` |  |
| `onTimerMinute` |  |
| `onTimerVolume` |  |
| `onTimerWeekday` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentResvOnTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrenttime"></a>
## `getCurrentTime`

`luna://com.webos.service.tvReservationAgent/getCurrentTime`

Returns the current time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `CurrentTime` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentTime '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpoweronreason"></a>
## `getPowerOnReason`

`luna://com.webos.service.tvReservationAgent/getPowerOnReason`

Returns the power on reason.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getPowerOnReason '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpowerstate"></a>
## `getPowerState`

`luna://com.webos.service.tvReservationAgent/getPowerState`

Returns the power state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getPowerState '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrepeatedlist"></a>
## `getRepeatedList`

`luna://com.webos.service.tvReservationAgent/getRepeatedList`

Returns the repeated list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getRepeatedList '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isexistschedulestartsoon"></a>
## `isExistScheduleStartSoon`

`luna://com.webos.service.tvReservationAgent/isExistScheduleStartSoon`

Reports whether the exist schedule start soon is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/isExistScheduleStartSoon '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_addstopreason"></a>
## `record/addStopReason`

`luna://com.webos.service.tvReservationAgent/record/addStopReason`

Adds the stop reason (record)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/addStopReason '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_epgprogram_add"></a>
## `record/epgProgram/add`

`luna://com.webos.service.tvReservationAgent/record/epgProgram/add`

Adds the TV reservation agent (record EPG program)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/epgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_fullepgprogram_add"></a>
## `record/fullEpgProgram/add`

`luna://com.webos.service.tvReservationAgent/record/fullEpgProgram/add`

Adds the TV reservation agent (record full EPG program)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/fullEpgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_manual_add"></a>
## `record/manual/add`

`luna://com.webos.service.tvReservationAgent/record/manual/add`

Adds the TV reservation agent (record manual)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/manual/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setreservationlogstatus"></a>
## `setReservationLogStatus`

`luna://com.webos.service.tvReservationAgent/setReservationLogStatus`

Sets the reservation log status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/setReservationLogStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopscheduler"></a>
## `stopScheduler`

`luna://com.webos.service.tvReservationAgent/stopScheduler`

Stops the scheduler.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/stopScheduler '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testalertpopup"></a>
## `testAlertPopup`

`luna://com.webos.service.tvReservationAgent/testAlertPopup`

Tests the alert popup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testAlertPopup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testchannelinfo"></a>
## `testChannelInfo`

`luna://com.webos.service.tvReservationAgent/testChannelInfo`

Tests the channel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testChannelInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testcmdapi"></a>
## `testCmdApi`

`luna://com.webos.service.tvReservationAgent/testCmdApi`

Tests the cmd api.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testCmdApi '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testcountrycode"></a>
## `testCountryCode`

`luna://com.webos.service.tvReservationAgent/testCountryCode`

Tests the country code.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testCountryCode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testlegacyetcadapter"></a>
## `testLegacyEtcAdapter`

`luna://com.webos.service.tvReservationAgent/testLegacyEtcAdapter`

Tests the legacy etc adapter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testLegacyEtcAdapter '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testlegacyiepgadapter"></a>
## `testLegacyiEPGAdapter`

`luna://com.webos.service.tvReservationAgent/testLegacyiEPGAdapter`

Tests the legacyi EPG adapter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testLegacyiEPGAdapter '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testlegacyutpadapter"></a>
## `testLegacyUTPAdapter`

`luna://com.webos.service.tvReservationAgent/testLegacyUTPAdapter`

Tests the legacy UTP adapter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testLegacyUTPAdapter '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testoptioninfo"></a>
## `testOptionInfo`

`luna://com.webos.service.tvReservationAgent/testOptionInfo`

Tests the option info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testOptionInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testpopup"></a>
## `testPopup`

`luna://com.webos.service.tvReservationAgent/testPopup`

Tests the popup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testPopup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testreservationdb"></a>
## `testReservationDb`

`luna://com.webos.service.tvReservationAgent/testReservationDb`

Tests the reservation db.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testReservationDb '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testresvhddlog"></a>
## `testResvHDDLog`

`luna://com.webos.service.tvReservationAgent/testResvHDDLog`

Tests the resv HDD log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testResvHDDLog '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testsetdebugmode"></a>
## `testSetDebugMode`

`luna://com.webos.service.tvReservationAgent/testSetDebugMode`

Tests the set debug mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testSetDebugMode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testtimercallback"></a>
## `testTimerCallback`

`luna://com.webos.service.tvReservationAgent/testTimerCallback`

Tests the timer callback.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testTimerCallback '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testtoastpopup"></a>
## `testToastPopup`

`luna://com.webos.service.tvReservationAgent/testToastPopup`

Tests the toast popup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testToastPopup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_sleep_add"></a>
## `timer/sleep/add`

`luna://com.webos.service.tvReservationAgent/timer/sleep/add`

Sets the sleep timer in minutes

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sleepTimeMinute` | string minutes |

```sh
luna-send -n 1 luna://com.webos.service.tvReservationAgent/timer/sleep/add '{"sleepTimeMinute":"30"}'
```

> A dev app is not allowed to call it; goes through HBC exec. Companion getRemainTime below.

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/control/src/tv.cpp), [2](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/README.md)

<a id="timer_sleep_getremaintime"></a>
## `timer/sleep/getRemainTime`

`luna://com.webos.service.tvReservationAgent/timer/sleep/getRemainTime`

Returns remaining sleep timer

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tvReservationAgent/timer/sleep/getRemainTime '{}'
```

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/control/src/tv.cpp)

<a id="watch_epgprogram_add"></a>
## `watch/epgProgram/add`

`luna://com.webos.service.tvReservationAgent/watch/epgProgram/add`

Adds the TV reservation agent (watch EPG program)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/epgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch_fullepgprogram_add"></a>
## `watch/fullEpgProgram/add`

`luna://com.webos.service.tvReservationAgent/watch/fullEpgProgram/add`

Adds the TV reservation agent (watch full EPG program)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/fullEpgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch_manual_add"></a>
## `watch/manual/add`

`luna://com.webos.service.tvReservationAgent/watch/manual/add`

Adds the TV reservation agent (watch manual)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/manual/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch_okbtn"></a>
## `watch/okBtn`

`luna://com.webos.service.tvReservationAgent/watch/okBtn`

Handles the ok btn (watch)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/okBtn '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
