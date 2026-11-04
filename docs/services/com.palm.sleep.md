# `com.palm.sleep`

25 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`com/palm/power/activityEnd`](#com_palm_power_activityend) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/activityStart`](#com_palm_power_activitystart) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/clientCancelByName`](#com_palm_power_clientcancelbyname) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/forceSuspend`](#com_palm_power_forcesuspend) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only ⚠️ |
| [`com/palm/power/identify`](#com_palm_power_identify) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/prepareSuspendAck`](#com_palm_power_preparesuspendack) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/prepareSuspendRegister`](#com_palm_power_preparesuspendregister) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/suspendRequestAck`](#com_palm_power_suspendrequestack) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/suspendRequestRegister`](#com_palm_power_suspendrequestregister) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`com/palm/power/TESTSuspend`](#com_palm_power_testsuspend) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/initiate`](#shutdown_initiate) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/machineOff`](#shutdown_machineoff) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only ⚠️ |
| [`shutdown/machineReboot`](#shutdown_machinereboot) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only ⚠️ |
| [`shutdown/shutdownApplicationsAck`](#shutdown_shutdownapplicationsack) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/shutdownApplicationsRegister`](#shutdown_shutdownapplicationsregister) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/shutdownServicesAck`](#shutdown_shutdownservicesack) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/shutdownServicesRegister`](#shutdown_shutdownservicesregister) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`shutdown/TESTresetShutdownState`](#shutdown_testresetshutdownstate) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`time/alarmAdd`](#time_alarmadd) | unknown |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/alarmAddCalendar`](#time_alarmaddcalendar) | unknown |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/alarmQuery`](#time_alarmquery) | unknown |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/alarmRemove`](#time_alarmremove) | unknown |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`time/internalAlarmFired`](#time_internalalarmfired) | private |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`timeout/clear`](#timeout_clear) | unknown |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |
| [`timeout/set`](#timeout_set) | unknown |  | power | Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only |

<a id="com_palm_power_activityend"></a>
## `com/palm/power/activityEnd`

`luna://com.palm.sleep/com/palm/power/activityEnd`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/prepareSuspendRegister '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_suspendrequestack"></a>
## `com/palm/power/suspendRequestAck`

`luna://com.palm.sleep/com/palm/power/suspendRequestAck`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/suspendRequestRegister '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="com_palm_power_testsuspend"></a>
## `com/palm/power/TESTSuspend`

`luna://com.palm.sleep/com/palm/power/TESTSuspend`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.sleep/com/palm/power/TESTSuspend '{}'
```

> Listed under ACG group "sleep.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="shutdown_initiate"></a>
## `shutdown/initiate`

`luna://com.palm.sleep/shutdown/initiate`

Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.sleep/timeout/clear '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)

<a id="timeout_set"></a>
## `timeout/set`

`luna://com.palm.sleep/timeout/set`

Registered in webOS OSE sysbus api.json (ACG group sleep.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.sleep/timeout/set '{}'
```

> Listed under ACG group "sleep.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sleepd/blob/master/files/sysbus/com.webos.service.sleep.api.json.in)
