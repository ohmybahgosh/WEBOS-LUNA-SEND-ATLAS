# `com.webos.memorymanager`

Memory manager: reports current memory state, enforces low-memory policy and thresholds, selects apps to close, and notifies clients of memory pressure.

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getCloseAppId`](#getcloseappid) | private |  | misc | inferred | Returns the close app ID. |
| [`getConfigs`](#getconfigs) | private |  | settings | inferred | Returns the configs. |
| [`getCurrentMemState`](#getcurrentmemstate) | private |  | misc | inferred | Returns the current mem state. |
| [`getCustomThreshold`](#getcustomthreshold) | private |  | misc | inferred | Returns the custom threshold. |
| [`getEFS`](#getefs) | private |  | misc | inferred | Returns the EFS. |
| [`getGroupInfo`](#getgroupinfo) | private |  | misc | inferred | Returns the group info. |
| [`getPolicy`](#getpolicy) | private |  | misc | inferred | Returns the policy. |
| [`getUnitList`](#getunitlist) | private |  | misc | inferred | Returns the unit list. |
| [`sendLowMemPopupTest`](#sendlowmempopuptest) | private |  | misc | inferred | Sends the low mem popup test. |
| [`setMriHelper`](#setmrihelper) | private |  | misc | inferred | Sets the mri helper. |
| [`setRequiredMemory`](#setrequiredmemory) | private |  | misc | inferred | Sets the required memory. |
| [`startMemNotifier`](#startmemnotifier) | private |  | misc | inferred | Starts the mem notifier. |

<a id="getcloseappid"></a>
## `getCloseAppId`

`luna://com.webos.memorymanager/getCloseAppId`

Returns the close app ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getCloseAppId '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconfigs"></a>
## `getConfigs`

`luna://com.webos.memorymanager/getConfigs`

Returns the configs.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `0` |  |
| `1` |  |
| `10` |  |
| `11` |  |
| `12` |  |
| `13` |  |
| `2` |  |
| `3` |  |
| `5` |  |
| `7` |  |
| `8` |  |
| `9` |  |
| `AppBoostingList` |  |
| `AppGPUMaxSize` |  |
| `AppHibAnonThreshold` |  |
| `AppHibernationEnable` |  |
| `AppHibernationTestMode` |  |
| `AppMaxHibSize` |  |
| `Arib4KPolicyCheck` |  |
| `Atsc3PolicyCheck` |  |
| `BlockPreloadTarget` |  |
| `BoostTargetApp` |  |
| `CriticalCount` |  |
| `CriticalDelay` |  |
| `CriticalTimeout` |  |
| `DecreasedUsableRate` |  |
| `DefaultRequiredMemory` |  |
| `DropCachesEnable` |  |
| `EfsActivate` |  |
| `EfsDailyWrSize` |  |
| `EfsStandardWaf` |  |
| `EfsTarget` |  |
| `EfsTestMode` |  |
| `EfsType` |  |
| `EmergencyActionType` |  |
| `EmmcLifetimeLimit` |  |
| `ExtraMemUnits` |  |
| `FragmentationProfile` |  |
| `FreezeTarget` |  |
| `GroupKillTimeout` |  |
| `HomeGroup` |  |
| `InputList` |  |
| `KeepAlive` |  |
| `KeepAppHib` |  |
| `KeepOnLaunch` |  |
| `KeepOnLaunchEx` |  |
| `LaunchPolicy` |  |
| `LaunchTimeout` |  |
| `LaunchTimeoutCount` |  |
| `LowTimeout` |  |
| `MaxEfsShrinkerSeeks` |  |
| `MaxModeledListCount` |  |
| `MaxTimeout` |  |
| `MinEfsShrinkerSeeks` |  |
| `MriHelper` |  |
| `NoLaunchThreshold` |  |
| `NrtProfile` |  |
| `PriorityGroup` |  |
| `Product` |  |
| `PsiTargetSize` |  |
| `QuickLaunch` |  |
| `Ram` |  |
| `ReadAheadSize` |  |
| `ReclaimRetryCountMax` |  |
| `ReclaimRetryCountMin` |  |
| `Region` |  |
| `Resolution` |  |
| `RestartTimeout` |  |
| `Soc` |  |
| `SortByModeledList` |  |
| `TargetDistroVariant` |  |
| `enterThresholds` |  |
| `eventDma32` |  |
| `eventNrUnevictable` |  |
| `eventNrZspages` |  |
| `eventPsiCPU` |  |
| `eventPsiMEM` |  |
| `eventSwapFree` |  |
| `eventZramCompRatios` |  |
| `leaveThresholds` |  |
| `lgchannels_boosting` |  |

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getConfigs '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentmemstate"></a>
## `getCurrentMemState`

`luna://com.webos.memorymanager/getCurrentMemState`

Returns the current mem state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `currentLevel` |  |
| `prevLevel` |  |
| `usable` |  |

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getCurrentMemState '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcustomthreshold"></a>
## `getCustomThreshold`

`luna://com.webos.memorymanager/getCustomThreshold`

Returns the custom threshold.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getCustomThreshold '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getefs"></a>
## `getEFS`

`luna://com.webos.memorymanager/getEFS`

Returns the EFS.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `EfsInfo` |  |
| `HibernationInfo` |  |
| `activate` |  |
| `target` |  |
| `type` |  |

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getEFS '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getgroupinfo"></a>
## `getGroupInfo`

`luna://com.webos.memorymanager/getGroupInfo`

Returns the group info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `groupList` |  |

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getGroupInfo '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpolicy"></a>
## `getPolicy`

`luna://com.webos.memorymanager/getPolicy`

Returns the policy.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `appHibernation` |  |
| `appList` |  |
| `critical` |  |
| `enter` |  |
| `feature` |  |
| `inputApp` |  |
| `keepAlive` |  |
| `keepAppHib` |  |
| `keepOnLaunch` |  |
| `leave` |  |
| `low` |  |
| `medium` |  |
| `memBoundary` |  |
| `noLaunchThreshold` |  |
| `reboot` |  |

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getPolicy '{}'
```

> ACG groups: all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getunitlist"></a>
## `getUnitList`

`luna://com.webos.memorymanager/getUnitList`

Returns the unit list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `F2IO_STAT_AccuShrinkSize` |  |
| `F2IO_STAT_CompactSize` |  |
| `F2IO_STAT_CurrentSize` |  |
| `F2IO_STAT_WriteSize` |  |
| `F2IO_STAT_ZspageSize` |  |
| `F2IO_STAT_compRate` |  |
| `F2IO_Stat` |  |
| `cur_vmallocSize` |  |
| `init_vmallocSize` |  |
| `swapUsed` |  |
| `unitList` |  |
| `usable_memory` |  |
| `vmallocInfo` |  |

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/getUnitList '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendlowmempopuptest"></a>
## `sendLowMemPopupTest`

`luna://com.webos.memorymanager/sendLowMemPopupTest`

Sends the low mem popup test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/sendLowMemPopupTest '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmrihelper"></a>
## `setMriHelper`

`luna://com.webos.memorymanager/setMriHelper`

Sets the mri helper.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/setMriHelper '{}'
```

> ACG groups: all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setrequiredmemory"></a>
## `setRequiredMemory`

`luna://com.webos.memorymanager/setRequiredMemory`

Sets the required memory.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/setRequiredMemory '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startmemnotifier"></a>
## `startMemNotifier`

`luna://com.webos.memorymanager/startMemNotifier`

Starts the mem notifier.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.memorymanager/startMemNotifier '{}'
```

> ACG groups: private, all, system, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
