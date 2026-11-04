# `com.palm.power`

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`com/palm/power/activityEnd`](#com_palm_power_activityend) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/activityStart`](#com_palm_power_activitystart) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/battchargingStatusQuery`](#com_palm_power_battchargingstatusquery) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/batterySaverOnOff`](#com_palm_power_batterysaveronoff) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/batteryStatusQuery`](#com_palm_power_batterystatusquery) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/chargerStatusQuery`](#com_palm_power_chargerstatusquery) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/forceSuspend`](#com_palm_power_forcesuspend) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/getFakeBatteryMode`](#com_palm_power_getfakebatterymode) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/identify`](#com_palm_power_identify) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/prepareSuspendAck`](#com_palm_power_preparesuspendack) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/prepareSuspendRegister`](#com_palm_power_preparesuspendregister) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/setFakeBatteryMode`](#com_palm_power_setfakebatterymode) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/suspendRequestAck`](#com_palm_power_suspendrequestack) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/suspendRequestRegister`](#com_palm_power_suspendrequestregister) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/systemTimeChanged`](#com_palm_power_systemtimechanged) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/TESTSuspend`](#com_palm_power_testsuspend) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`com/palm/power/visualLedSuspend`](#com_palm_power_visualledsuspend) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`shutdown/initiate`](#shutdown_initiate) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shutdown/machineOff`](#shutdown_machineoff) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shutdown/machineReboot`](#shutdown_machinereboot) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shutdown/shutdownApplicationsAck`](#shutdown_shutdownapplicationsack) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shutdown/shutdownApplicationsRegister`](#shutdown_shutdownapplicationsregister) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shutdown/shutdownServicesAck`](#shutdown_shutdownservicesack) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shutdown/shutdownServicesRegister`](#shutdown_shutdownservicesregister) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`shutdown/TESTresetShutdownState`](#shutdown_testresetshutdownstate) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`time/alarmAdd`](#time_alarmadd) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`time/alarmAddCalendar`](#time_alarmaddcalendar) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`time/alarmQuery`](#time_alarmquery) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`time/alarmRemove`](#time_alarmremove) | private |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). ⚠️ |
| [`timeout/clear`](#timeout_clear) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |
| [`timeout/set`](#timeout_set) | public |  | power | Method on com.palm.power (from on-device permission registry; parameters undocumented). |

<a id="com_palm_power_activityend"></a>
## `com/palm/power/activityEnd`

`luna://com.palm.power/com/palm/power/activityEnd`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/activityEnd '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_activitystart"></a>
## `com/palm/power/activityStart`

`luna://com.palm.power/com/palm/power/activityStart`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/activityStart '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_battchargingstatusquery"></a>
## `com/palm/power/battchargingStatusQuery`

`luna://com.palm.power/com/palm/power/battchargingStatusQuery`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/battchargingStatusQuery '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_batterysaveronoff"></a>
## `com/palm/power/batterySaverOnOff`

`luna://com.palm.power/com/palm/power/batterySaverOnOff`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/batterySaverOnOff '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_batterystatusquery"></a>
## `com/palm/power/batteryStatusQuery`

`luna://com.palm.power/com/palm/power/batteryStatusQuery`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/batteryStatusQuery '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_chargerstatusquery"></a>
## `com/palm/power/chargerStatusQuery`

`luna://com.palm.power/com/palm/power/chargerStatusQuery`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/chargerStatusQuery '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_forcesuspend"></a>
## `com/palm/power/forceSuspend`

`luna://com.palm.power/com/palm/power/forceSuspend`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/forceSuspend '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_getfakebatterymode"></a>
## `com/palm/power/getFakeBatteryMode`

`luna://com.palm.power/com/palm/power/getFakeBatteryMode`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/getFakeBatteryMode '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_identify"></a>
## `com/palm/power/identify`

`luna://com.palm.power/com/palm/power/identify`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/identify '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_preparesuspendack"></a>
## `com/palm/power/prepareSuspendAck`

`luna://com.palm.power/com/palm/power/prepareSuspendAck`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/prepareSuspendAck '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_preparesuspendregister"></a>
## `com/palm/power/prepareSuspendRegister`

`luna://com.palm.power/com/palm/power/prepareSuspendRegister`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/prepareSuspendRegister '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_setfakebatterymode"></a>
## `com/palm/power/setFakeBatteryMode`

`luna://com.palm.power/com/palm/power/setFakeBatteryMode`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/setFakeBatteryMode '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_suspendrequestack"></a>
## `com/palm/power/suspendRequestAck`

`luna://com.palm.power/com/palm/power/suspendRequestAck`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/suspendRequestAck '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_suspendrequestregister"></a>
## `com/palm/power/suspendRequestRegister`

`luna://com.palm.power/com/palm/power/suspendRequestRegister`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/suspendRequestRegister '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_systemtimechanged"></a>
## `com/palm/power/systemTimeChanged`

`luna://com.palm.power/com/palm/power/systemTimeChanged`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/systemTimeChanged '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_testsuspend"></a>
## `com/palm/power/TESTSuspend`

`luna://com.palm.power/com/palm/power/TESTSuspend`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/TESTSuspend '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_visualledsuspend"></a>
## `com/palm/power/visualLedSuspend`

`luna://com.palm.power/com/palm/power/visualLedSuspend`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/visualLedSuspend '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_initiate"></a>
## `shutdown/initiate` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/initiate`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/initiate '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machineoff"></a>
## `shutdown/machineOff` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/machineOff`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/machineOff '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machinereboot"></a>
## `shutdown/machineReboot` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/machineReboot`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/machineReboot '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsack"></a>
## `shutdown/shutdownApplicationsAck` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownApplicationsAck`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownApplicationsAck '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsregister"></a>
## `shutdown/shutdownApplicationsRegister` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownApplicationsRegister`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownApplicationsRegister '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesack"></a>
## `shutdown/shutdownServicesAck` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownServicesAck`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownServicesAck '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesregister"></a>
## `shutdown/shutdownServicesRegister` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownServicesRegister`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownServicesRegister '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_testresetshutdownstate"></a>
## `shutdown/TESTresetShutdownState` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/TESTresetShutdownState`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/TESTresetShutdownState '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmadd"></a>
## `time/alarmAdd`

`luna://com.palm.power/time/alarmAdd`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmAdd '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmaddcalendar"></a>
## `time/alarmAddCalendar`

`luna://com.palm.power/time/alarmAddCalendar`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmAddCalendar '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmquery"></a>
## `time/alarmQuery`

`luna://com.palm.power/time/alarmQuery`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmQuery '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmremove"></a>
## `time/alarmRemove` ⚠️ DANGEROUS

`luna://com.palm.power/time/alarmRemove`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmRemove '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="timeout_clear"></a>
## `timeout/clear`

`luna://com.palm.power/timeout/clear`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/timeout/clear '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="timeout_set"></a>
## `timeout/set`

`luna://com.palm.power/timeout/set`

Method on com.palm.power (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.power/timeout/set '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
