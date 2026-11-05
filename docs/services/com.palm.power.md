# `com.palm.power`

Legacy Palm power-management service: handles suspend/resume and shutdown, battery and charger status queries, battery-saver and fake-battery test modes, and activity-based wake management.

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`com/palm/power/activityEnd`](#com_palm_power_activityend) | public |  | power | inferred | Handles the activity end (com palm power) |
| [`com/palm/power/activityStart`](#com_palm_power_activitystart) | public |  | power | inferred | Handles the activity start (com palm power) |
| [`com/palm/power/battchargingStatusQuery`](#com_palm_power_battchargingstatusquery) | public |  | power | inferred | Handles the battcharging status query (com palm power) |
| [`com/palm/power/batterySaverOnOff`](#com_palm_power_batterysaveronoff) | public |  | power | inferred | Handles the battery saver on off (com palm power) |
| [`com/palm/power/batteryStatusQuery`](#com_palm_power_batterystatusquery) | public |  | power | inferred | Handles the battery status query (com palm power) |
| [`com/palm/power/chargerStatusQuery`](#com_palm_power_chargerstatusquery) | public |  | power | inferred | Handles the charger status query (com palm power) |
| [`com/palm/power/forceSuspend`](#com_palm_power_forcesuspend) | public |  | power | inferred | Forces the suspend (com palm power) |
| [`com/palm/power/getFakeBatteryMode`](#com_palm_power_getfakebatterymode) | public |  | power | inferred | Returns the fake battery mode (com palm power) |
| [`com/palm/power/identify`](#com_palm_power_identify) | public |  | power | inferred | Handles the identify (com palm power) |
| [`com/palm/power/prepareSuspendAck`](#com_palm_power_preparesuspendack) | public |  | power | inferred | Prepares the suspend ack (com palm power) |
| [`com/palm/power/prepareSuspendRegister`](#com_palm_power_preparesuspendregister) | public |  | power | inferred | Prepares the suspend register (com palm power) |
| [`com/palm/power/setFakeBatteryMode`](#com_palm_power_setfakebatterymode) | public |  | power | inferred | Sets the fake battery mode (com palm power) |
| [`com/palm/power/suspendRequestAck`](#com_palm_power_suspendrequestack) | public |  | power | inferred | Handles the suspend request ack (com palm power) |
| [`com/palm/power/suspendRequestRegister`](#com_palm_power_suspendrequestregister) | public |  | power | inferred | Handles the suspend request register (com palm power) |
| [`com/palm/power/systemTimeChanged`](#com_palm_power_systemtimechanged) | public |  | power | inferred | Handles the system time changed (com palm power) |
| [`com/palm/power/TESTSuspend`](#com_palm_power_testsuspend) | public |  | power | inferred | Tests the suspend (com palm power) |
| [`com/palm/power/visualLedSuspend`](#com_palm_power_visualledsuspend) | public |  | power | inferred | Handles the visual LED suspend (com palm power) |
| [`shutdown/initiate`](#shutdown_initiate) | private |  | power | inferred | Handles the initiate (shutdown) ⚠️ |
| [`shutdown/machineOff`](#shutdown_machineoff) | private |  | power | inferred | Handles the machine off (shutdown) ⚠️ |
| [`shutdown/machineReboot`](#shutdown_machinereboot) | private |  | power | inferred | Handles the machine reboot (shutdown) ⚠️ |
| [`shutdown/shutdownApplicationsAck`](#shutdown_shutdownapplicationsack) | private |  | power | inferred | Shuts down the applications ack (shutdown) ⚠️ |
| [`shutdown/shutdownApplicationsRegister`](#shutdown_shutdownapplicationsregister) | private |  | power | inferred | Shuts down the applications register (shutdown) ⚠️ |
| [`shutdown/shutdownServicesAck`](#shutdown_shutdownservicesack) | private |  | power | inferred | Shuts down the services ack (shutdown) ⚠️ |
| [`shutdown/shutdownServicesRegister`](#shutdown_shutdownservicesregister) | private |  | power | inferred | Shuts down the services register (shutdown) ⚠️ |
| [`shutdown/TESTresetShutdownState`](#shutdown_testresetshutdownstate) | private |  | power | inferred | Handles the TES treset shutdown state (shutdown) ⚠️ |
| [`time/alarmAdd`](#time_alarmadd) | private |  | power | inferred | Handles the alarm add (time) |
| [`time/alarmAddCalendar`](#time_alarmaddcalendar) | private |  | power | inferred | Handles the alarm add calendar (time) |
| [`time/alarmQuery`](#time_alarmquery) | private |  | power | inferred | Handles the alarm query (time) |
| [`time/alarmRemove`](#time_alarmremove) | private |  | power | inferred | Handles the alarm remove (time) ⚠️ |
| [`timeout/clear`](#timeout_clear) | public |  | power | inferred | Clears the power (timeout) |
| [`timeout/set`](#timeout_set) | public |  | power | inferred | Sets the power (timeout) |

<a id="com_palm_power_activityend"></a>
## `com/palm/power/activityEnd`

`luna://com.palm.power/com/palm/power/activityEnd`

Handles the activity end (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/activityEnd '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_activitystart"></a>
## `com/palm/power/activityStart`

`luna://com.palm.power/com/palm/power/activityStart`

Handles the activity start (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/activityStart '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_battchargingstatusquery"></a>
## `com/palm/power/battchargingStatusQuery`

`luna://com.palm.power/com/palm/power/battchargingStatusQuery`

Handles the battcharging status query (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/battchargingStatusQuery '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_batterysaveronoff"></a>
## `com/palm/power/batterySaverOnOff`

`luna://com.palm.power/com/palm/power/batterySaverOnOff`

Handles the battery saver on off (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/batterySaverOnOff '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_batterystatusquery"></a>
## `com/palm/power/batteryStatusQuery`

`luna://com.palm.power/com/palm/power/batteryStatusQuery`

Handles the battery status query (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/batteryStatusQuery '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_chargerstatusquery"></a>
## `com/palm/power/chargerStatusQuery`

`luna://com.palm.power/com/palm/power/chargerStatusQuery`

Handles the charger status query (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/chargerStatusQuery '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_forcesuspend"></a>
## `com/palm/power/forceSuspend`

`luna://com.palm.power/com/palm/power/forceSuspend`

Forces the suspend (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/forceSuspend '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_getfakebatterymode"></a>
## `com/palm/power/getFakeBatteryMode`

`luna://com.palm.power/com/palm/power/getFakeBatteryMode`

Returns the fake battery mode (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/getFakeBatteryMode '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_identify"></a>
## `com/palm/power/identify`

`luna://com.palm.power/com/palm/power/identify`

Handles the identify (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/identify '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_preparesuspendack"></a>
## `com/palm/power/prepareSuspendAck`

`luna://com.palm.power/com/palm/power/prepareSuspendAck`

Prepares the suspend ack (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/prepareSuspendAck '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_preparesuspendregister"></a>
## `com/palm/power/prepareSuspendRegister`

`luna://com.palm.power/com/palm/power/prepareSuspendRegister`

Prepares the suspend register (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/prepareSuspendRegister '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_setfakebatterymode"></a>
## `com/palm/power/setFakeBatteryMode`

`luna://com.palm.power/com/palm/power/setFakeBatteryMode`

Sets the fake battery mode (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/setFakeBatteryMode '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_suspendrequestack"></a>
## `com/palm/power/suspendRequestAck`

`luna://com.palm.power/com/palm/power/suspendRequestAck`

Handles the suspend request ack (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/suspendRequestAck '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_suspendrequestregister"></a>
## `com/palm/power/suspendRequestRegister`

`luna://com.palm.power/com/palm/power/suspendRequestRegister`

Handles the suspend request register (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/suspendRequestRegister '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_systemtimechanged"></a>
## `com/palm/power/systemTimeChanged`

`luna://com.palm.power/com/palm/power/systemTimeChanged`

Handles the system time changed (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/systemTimeChanged '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_testsuspend"></a>
## `com/palm/power/TESTSuspend`

`luna://com.palm.power/com/palm/power/TESTSuspend`

Tests the suspend (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/TESTSuspend '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="com_palm_power_visualledsuspend"></a>
## `com/palm/power/visualLedSuspend`

`luna://com.palm.power/com/palm/power/visualLedSuspend`

Handles the visual LED suspend (com palm power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/com/palm/power/visualLedSuspend '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_initiate"></a>
## `shutdown/initiate` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/initiate`

Handles the initiate (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/initiate '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machineoff"></a>
## `shutdown/machineOff` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/machineOff`

Handles the machine off (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/machineOff '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machinereboot"></a>
## `shutdown/machineReboot` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/machineReboot`

Handles the machine reboot (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/machineReboot '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsack"></a>
## `shutdown/shutdownApplicationsAck` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownApplicationsAck`

Shuts down the applications ack (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownApplicationsAck '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsregister"></a>
## `shutdown/shutdownApplicationsRegister` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownApplicationsRegister`

Shuts down the applications register (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownApplicationsRegister '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesack"></a>
## `shutdown/shutdownServicesAck` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownServicesAck`

Shuts down the services ack (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownServicesAck '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesregister"></a>
## `shutdown/shutdownServicesRegister` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/shutdownServicesRegister`

Shuts down the services register (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/shutdownServicesRegister '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_testresetshutdownstate"></a>
## `shutdown/TESTresetShutdownState` ⚠️ DANGEROUS

`luna://com.palm.power/shutdown/TESTresetShutdownState`

Handles the TES treset shutdown state (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/shutdown/TESTresetShutdownState '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmadd"></a>
## `time/alarmAdd`

`luna://com.palm.power/time/alarmAdd`

Handles the alarm add (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmAdd '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmaddcalendar"></a>
## `time/alarmAddCalendar`

`luna://com.palm.power/time/alarmAddCalendar`

Handles the alarm add calendar (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmAddCalendar '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmquery"></a>
## `time/alarmQuery`

`luna://com.palm.power/time/alarmQuery`

Handles the alarm query (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmQuery '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_alarmremove"></a>
## `time/alarmRemove` ⚠️ DANGEROUS

`luna://com.palm.power/time/alarmRemove`

Handles the alarm remove (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/time/alarmRemove '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="timeout_clear"></a>
## `timeout/clear`

`luna://com.palm.power/timeout/clear`

Clears the power (timeout)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/timeout/clear '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="timeout_set"></a>
## `timeout/set`

`luna://com.palm.power/timeout/set`

Sets the power (timeout)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.power/timeout/set '{}'
```

> ACG groups: private, public, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
