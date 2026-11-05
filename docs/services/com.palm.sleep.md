# `com.palm.sleep`

Power-management service handling suspend/wake: wake-lock registration, suspend request handshakes, activity start/end, and system shutdown/reboot.

31 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`com/palm/power/activityEnd`](#com_palm_power_activityend) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/activityStart`](#com_palm_power_activitystart) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/clientCancelByName`](#com_palm_power_clientcancelbyname) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/forceSuspend`](#com_palm_power_forcesuspend) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only ⚠️ |
| [`com/palm/power/identify`](#com_palm_power_identify) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/prepareSuspendAck`](#com_palm_power_preparesuspendack) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/prepareSuspendRegister`](#com_palm_power_preparesuspendregister) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/setWakeLock`](#com_palm_power_setwakelock) | private |  | power | inferred | Sets the wake lock (com palm power) |
| [`com/palm/power/somebodyWantsWakeup`](#com_palm_power_somebodywantswakeup) | private |  | power | inferred | Handles the somebody wants wakeup (com palm power) |
| [`com/palm/power/suspendRequestAck`](#com_palm_power_suspendrequestack) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/suspendRequestRegister`](#com_palm_power_suspendrequestregister) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/systemTimeChanged`](#com_palm_power_systemtimechanged) | private |  | power | inferred | Handles the system time changed (com palm power) |
| [`com/palm/power/TESTSuspend`](#com_palm_power_testsuspend) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/wakeLockRegister`](#com_palm_power_wakelockregister) | private |  | power | inferred | Wakes the lock register (com palm power) |
| [`shutdown/initiate`](#shutdown_initiate) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/machineOff`](#shutdown_machineoff) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only ⚠️ |
| [`shutdown/machineReboot`](#shutdown_machinereboot) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only ⚠️ |
| [`shutdown/shutdownApplicationsAck`](#shutdown_shutdownapplicationsack) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/shutdownApplicationsRegister`](#shutdown_shutdownapplicationsregister) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/shutdownServicesAck`](#shutdown_shutdownservicesack) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/shutdownServicesRegister`](#shutdown_shutdownservicesregister) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/TESTresetShutdownState`](#shutdown_testresetshutdownstate) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`time/alarmAdd`](#time_alarmadd) | unknown |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/alarmAddCalendar`](#time_alarmaddcalendar) | unknown |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/alarmQuery`](#time_alarmquery) | unknown |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/alarmRemove`](#time_alarmremove) | unknown |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/internalAlarmFired`](#time_internalalarmfired) | private |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`timeout/clear`](#timeout_clear) | unknown |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`timeout/getAllAlarms`](#timeout_getallalarms) | private |  | power-mgmt | inferred | Returns the all alarms (timeout) |
| [`timeout/getNextWakeupAlarm`](#timeout_getnextwakeupalarm) | private |  | power-mgmt | inferred | Returns the next wakeup alarm (timeout) |
| [`timeout/set`](#timeout_set) | unknown |  | power | documented | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |

<a id="com_palm_power_activityend"></a>
## `com/palm/power/activityEnd`

`luna://com.palm.sleep/com/palm/power/activityEnd`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/activityEnd '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_activitystart"></a>
## `com/palm/power/activityStart`

`luna://com.palm.sleep/com/palm/power/activityStart`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/activityStart '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_clientcancelbyname"></a>
## `com/palm/power/clientCancelByName`

`luna://com.palm.sleep/com/palm/power/clientCancelByName`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/clientCancelByName '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_forcesuspend"></a>
## `com/palm/power/forceSuspend` ⚠️ DANGEROUS

`luna://com.palm.sleep/com/palm/power/forceSuspend`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/forceSuspend '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_identify"></a>
## `com/palm/power/identify`

`luna://com.palm.sleep/com/palm/power/identify`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/identify '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_preparesuspendack"></a>
## `com/palm/power/prepareSuspendAck`

`luna://com.palm.sleep/com/palm/power/prepareSuspendAck`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/prepareSuspendAck '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_preparesuspendregister"></a>
## `com/palm/power/prepareSuspendRegister`

`luna://com.palm.sleep/com/palm/power/prepareSuspendRegister`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/prepareSuspendRegister '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_setwakelock"></a>
## `com/palm/power/setWakeLock`

`luna://com.palm.sleep/com/palm/power/setWakeLock`

Sets the wake lock (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/setWakeLock '{}'
```

> ACG groups: private, sleep.internal, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_somebodywantswakeup"></a>
## `com/palm/power/somebodyWantsWakeup`

`luna://com.palm.sleep/com/palm/power/somebodyWantsWakeup`

Handles the somebody wants wakeup (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/somebodyWantsWakeup '{}'
```

> ACG groups: private, sleep.internal, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_suspendrequestack"></a>
## `com/palm/power/suspendRequestAck`

`luna://com.palm.sleep/com/palm/power/suspendRequestAck`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/suspendRequestAck '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_suspendrequestregister"></a>
## `com/palm/power/suspendRequestRegister`

`luna://com.palm.sleep/com/palm/power/suspendRequestRegister`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/suspendRequestRegister '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_systemtimechanged"></a>
## `com/palm/power/systemTimeChanged`

`luna://com.palm.sleep/com/palm/power/systemTimeChanged`

Handles the system time changed (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/systemTimeChanged '{}'
```

> ACG groups: private, sleep.internal, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_testsuspend"></a>
## `com/palm/power/TESTSuspend`

`luna://com.palm.sleep/com/palm/power/TESTSuspend`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/TESTSuspend '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_wakelockregister"></a>
## `com/palm/power/wakeLockRegister`

`luna://com.palm.sleep/com/palm/power/wakeLockRegister`

Wakes the lock register (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/wakeLockRegister '{}'
```

> ACG groups: private, sleep.internal, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_initiate"></a>
## `shutdown/initiate`

`luna://com.palm.sleep/shutdown/initiate`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/initiate '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_machineoff"></a>
## `shutdown/machineOff` ⚠️ DANGEROUS

`luna://com.palm.sleep/shutdown/machineOff`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/machineOff '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_machinereboot"></a>
## `shutdown/machineReboot` ⚠️ DANGEROUS

`luna://com.palm.sleep/shutdown/machineReboot`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/machineReboot '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_shutdownapplicationsack"></a>
## `shutdown/shutdownApplicationsAck`

`luna://com.palm.sleep/shutdown/shutdownApplicationsAck`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/shutdownApplicationsAck '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_shutdownapplicationsregister"></a>
## `shutdown/shutdownApplicationsRegister`

`luna://com.palm.sleep/shutdown/shutdownApplicationsRegister`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/shutdownApplicationsRegister '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_shutdownservicesack"></a>
## `shutdown/shutdownServicesAck`

`luna://com.palm.sleep/shutdown/shutdownServicesAck`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/shutdownServicesAck '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_shutdownservicesregister"></a>
## `shutdown/shutdownServicesRegister`

`luna://com.palm.sleep/shutdown/shutdownServicesRegister`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/shutdownServicesRegister '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_testresetshutdownstate"></a>
## `shutdown/TESTresetShutdownState`

`luna://com.palm.sleep/shutdown/TESTresetShutdownState`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/shutdown/TESTresetShutdownState '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="time_alarmadd"></a>
## `time/alarmAdd`

`luna://com.palm.sleep/time/alarmAdd`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/time/alarmAdd '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="time_alarmaddcalendar"></a>
## `time/alarmAddCalendar`

`luna://com.palm.sleep/time/alarmAddCalendar`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/time/alarmAddCalendar '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="time_alarmquery"></a>
## `time/alarmQuery`

`luna://com.palm.sleep/time/alarmQuery`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/time/alarmQuery '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="time_alarmremove"></a>
## `time/alarmRemove`

`luna://com.palm.sleep/time/alarmRemove`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/time/alarmRemove '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="time_internalalarmfired"></a>
## `time/internalAlarmFired`

`luna://com.palm.sleep/time/internalAlarmFired`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/time/internalAlarmFired '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="timeout_clear"></a>
## `timeout/clear`

`luna://com.palm.sleep/timeout/clear`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/timeout/clear '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="timeout_getallalarms"></a>
## `timeout/getAllAlarms`

`luna://com.palm.sleep/timeout/getAllAlarms`

Returns the all alarms (timeout)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.sleep/timeout/getAllAlarms '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timeout_getnextwakeupalarm"></a>
## `timeout/getNextWakeupAlarm`

`luna://com.palm.sleep/timeout/getNextWakeupAlarm`

Returns the next wakeup alarm (timeout)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.sleep/timeout/getNextWakeupAlarm '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timeout_set"></a>
## `timeout/set`

`luna://com.palm.sleep/timeout/set`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.sleep/timeout/set '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)
