# `com.webos.service.tvReservationAgent`

42 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`add`](#add) | public |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`cancel`](#cancel) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`checkOverlap`](#checkoverlap) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`clear`](#clear) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`delete`](#delete) | public |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). ⚠️ |
| [`edit`](#edit) | public |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getChangedList`](#getchangedlist) | public |  | tv-broadcast | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getCurrentLegacyResvOffTimerInfo`](#getcurrentlegacyresvofftimerinfo) | private |  | tv-broadcast | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getCurrentLegacyResvOnTimerInfo`](#getcurrentlegacyresvontimerinfo) | private |  | tv-broadcast | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getCurrentResvOffTimerInfo`](#getcurrentresvofftimerinfo) | private |  | tv-broadcast | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getCurrentResvOnTimerInfo`](#getcurrentresvontimerinfo) | private |  | tv-broadcast | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getCurrentTime`](#getcurrenttime) | private |  | tv-broadcast | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getPowerOnReason`](#getpoweronreason) | private |  | power | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getPowerState`](#getpowerstate) | private |  | power | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`getRepeatedList`](#getrepeatedlist) | public |  | tv-broadcast | Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`isExistScheduleStartSoon`](#isexistschedulestartsoon) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`record/addStopReason`](#record_addstopreason) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`record/epgProgram/add`](#record_epgprogram_add) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`record/fullEpgProgram/add`](#record_fullepgprogram_add) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`record/manual/add`](#record_manual_add) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`setReservationLogStatus`](#setreservationlogstatus) | private |  | tv-broadcast | Setter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`stopScheduler`](#stopscheduler) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testAlertPopup`](#testalertpopup) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testChannelInfo`](#testchannelinfo) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testCmdApi`](#testcmdapi) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testCountryCode`](#testcountrycode) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testLegacyEtcAdapter`](#testlegacyetcadapter) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testLegacyiEPGAdapter`](#testlegacyiepgadapter) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testLegacyUTPAdapter`](#testlegacyutpadapter) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testOptionInfo`](#testoptioninfo) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testPopup`](#testpopup) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testReservationDb`](#testreservationdb) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testResvHDDLog`](#testresvhddlog) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testSetDebugMode`](#testsetdebugmode) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testTimerCallback`](#testtimercallback) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`testToastPopup`](#testtoastpopup) | private |  | notifications | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`timer/sleep/add`](#timer_sleep_add) | private |  | power | Sets the sleep timer in minutes |
| [`timer/sleep/getRemainTime`](#timer_sleep_getremaintime) | private |  | power | Returns remaining sleep timer |
| [`watch/epgProgram/add`](#watch_epgprogram_add) | public |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`watch/fullEpgProgram/add`](#watch_fullepgprogram_add) | public |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`watch/manual/add`](#watch_manual_add) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |
| [`watch/okBtn`](#watch_okbtn) | private |  | tv-broadcast | Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented). |

<a id="add"></a>
## `add`

`luna://com.webos.service.tvReservationAgent/add`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/add '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.tvReservationAgent/cancel`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/cancel '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkoverlap"></a>
## `checkOverlap`

`luna://com.webos.service.tvReservationAgent/checkOverlap`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/checkOverlap '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clear"></a>
## `clear`

`luna://com.webos.service.tvReservationAgent/clear`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/clear '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delete"></a>
## `delete` ⚠️ DANGEROUS

`luna://com.webos.service.tvReservationAgent/delete`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/delete '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="edit"></a>
## `edit`

`luna://com.webos.service.tvReservationAgent/edit`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/edit '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchangedlist"></a>
## `getChangedList`

`luna://com.webos.service.tvReservationAgent/getChangedList`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getChangedList '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentlegacyresvofftimerinfo"></a>
## `getCurrentLegacyResvOffTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOffTimerInfo`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOffTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentlegacyresvontimerinfo"></a>
## `getCurrentLegacyResvOnTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOnTimerInfo`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentLegacyResvOnTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentresvofftimerinfo"></a>
## `getCurrentResvOffTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentResvOffTimerInfo`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentResvOffTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentresvontimerinfo"></a>
## `getCurrentResvOnTimerInfo`

`luna://com.webos.service.tvReservationAgent/getCurrentResvOnTimerInfo`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentResvOnTimerInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrenttime"></a>
## `getCurrentTime`

`luna://com.webos.service.tvReservationAgent/getCurrentTime`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getCurrentTime '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpoweronreason"></a>
## `getPowerOnReason`

`luna://com.webos.service.tvReservationAgent/getPowerOnReason`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getPowerOnReason '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpowerstate"></a>
## `getPowerState`

`luna://com.webos.service.tvReservationAgent/getPowerState`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getPowerState '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrepeatedlist"></a>
## `getRepeatedList`

`luna://com.webos.service.tvReservationAgent/getRepeatedList`

Getter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/getRepeatedList '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isexistschedulestartsoon"></a>
## `isExistScheduleStartSoon`

`luna://com.webos.service.tvReservationAgent/isExistScheduleStartSoon`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/isExistScheduleStartSoon '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_addstopreason"></a>
## `record/addStopReason`

`luna://com.webos.service.tvReservationAgent/record/addStopReason`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/addStopReason '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_epgprogram_add"></a>
## `record/epgProgram/add`

`luna://com.webos.service.tvReservationAgent/record/epgProgram/add`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/epgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_fullepgprogram_add"></a>
## `record/fullEpgProgram/add`

`luna://com.webos.service.tvReservationAgent/record/fullEpgProgram/add`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/fullEpgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="record_manual_add"></a>
## `record/manual/add`

`luna://com.webos.service.tvReservationAgent/record/manual/add`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/record/manual/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setreservationlogstatus"></a>
## `setReservationLogStatus`

`luna://com.webos.service.tvReservationAgent/setReservationLogStatus`

Setter on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/setReservationLogStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopscheduler"></a>
## `stopScheduler`

`luna://com.webos.service.tvReservationAgent/stopScheduler`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/stopScheduler '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testalertpopup"></a>
## `testAlertPopup`

`luna://com.webos.service.tvReservationAgent/testAlertPopup`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testAlertPopup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testchannelinfo"></a>
## `testChannelInfo`

`luna://com.webos.service.tvReservationAgent/testChannelInfo`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testChannelInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testcmdapi"></a>
## `testCmdApi`

`luna://com.webos.service.tvReservationAgent/testCmdApi`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testCmdApi '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testcountrycode"></a>
## `testCountryCode`

`luna://com.webos.service.tvReservationAgent/testCountryCode`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testCountryCode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testlegacyetcadapter"></a>
## `testLegacyEtcAdapter`

`luna://com.webos.service.tvReservationAgent/testLegacyEtcAdapter`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testLegacyEtcAdapter '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testlegacyiepgadapter"></a>
## `testLegacyiEPGAdapter`

`luna://com.webos.service.tvReservationAgent/testLegacyiEPGAdapter`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testLegacyiEPGAdapter '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testlegacyutpadapter"></a>
## `testLegacyUTPAdapter`

`luna://com.webos.service.tvReservationAgent/testLegacyUTPAdapter`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testLegacyUTPAdapter '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testoptioninfo"></a>
## `testOptionInfo`

`luna://com.webos.service.tvReservationAgent/testOptionInfo`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testOptionInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testpopup"></a>
## `testPopup`

`luna://com.webos.service.tvReservationAgent/testPopup`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testPopup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testreservationdb"></a>
## `testReservationDb`

`luna://com.webos.service.tvReservationAgent/testReservationDb`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testReservationDb '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testresvhddlog"></a>
## `testResvHDDLog`

`luna://com.webos.service.tvReservationAgent/testResvHDDLog`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testResvHDDLog '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testsetdebugmode"></a>
## `testSetDebugMode`

`luna://com.webos.service.tvReservationAgent/testSetDebugMode`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testSetDebugMode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testtimercallback"></a>
## `testTimerCallback`

`luna://com.webos.service.tvReservationAgent/testTimerCallback`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/testTimerCallback '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testtoastpopup"></a>
## `testToastPopup`

`luna://com.webos.service.tvReservationAgent/testToastPopup`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.tvReservationAgent/timer/sleep/getRemainTime '{}'
```

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/control/src/tv.cpp)

<a id="watch_epgprogram_add"></a>
## `watch/epgProgram/add`

`luna://com.webos.service.tvReservationAgent/watch/epgProgram/add`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/epgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch_fullepgprogram_add"></a>
## `watch/fullEpgProgram/add`

`luna://com.webos.service.tvReservationAgent/watch/fullEpgProgram/add`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/fullEpgProgram/add '{}'
```

> ACG groups: tvReservationAgent.service, private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch_manual_add"></a>
## `watch/manual/add`

`luna://com.webos.service.tvReservationAgent/watch/manual/add`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/manual/add '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch_okbtn"></a>
## `watch/okBtn`

`luna://com.webos.service.tvReservationAgent/watch/okBtn`

Method on com.webos.service.tvReservationAgent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvReservationAgent/watch/okBtn '{}'
```

> ACG groups: tvReservationAgent.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
