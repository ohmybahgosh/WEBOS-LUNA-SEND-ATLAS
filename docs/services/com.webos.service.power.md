# `com.webos.service.power`

System power service: coordinates shutdown and reboot and manages suspend/resume, letting apps and services register for and acknowledge prepare-suspend and shutdown events.

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`shutdown/initiate`](#shutdown_initiate) | private |  | power | inferred | Handles the initiate (shutdown) ⚠️ |
| [`shutdown/machineOff`](#shutdown_machineoff) | private |  | power | inferred | Handles the machine off (shutdown) ⚠️ |
| [`shutdown/machineReboot`](#shutdown_machinereboot) | private |  | power | inferred | Handles the machine reboot (shutdown) ⚠️ |
| [`shutdown/shutdownApplicationsAck`](#shutdown_shutdownapplicationsack) | private |  | power | inferred | Shuts down the applications ack (shutdown) ⚠️ |
| [`shutdown/shutdownApplicationsRegister`](#shutdown_shutdownapplicationsregister) | private |  | power | inferred | Shuts down the applications register (shutdown) ⚠️ |
| [`shutdown/shutdownServicesAck`](#shutdown_shutdownservicesack) | private |  | power | inferred | Shuts down the services ack (shutdown) ⚠️ |
| [`shutdown/shutdownServicesRegister`](#shutdown_shutdownservicesregister) | private |  | power | inferred | Shuts down the services register (shutdown) ⚠️ |
| [`shutdown/TESTresetShutdownState`](#shutdown_testresetshutdownstate) | private |  | power | inferred | Handles the TES treset shutdown state (shutdown) ⚠️ |
| [`suspend/activityEnd`](#suspend_activityend) | public |  | power | inferred | Handles the activity end (suspend) |
| [`suspend/activityStart`](#suspend_activitystart) | public |  | power | inferred | Handles the activity start (suspend) |
| [`suspend/clientCancelByName`](#suspend_clientcancelbyname) | public |  | power | inferred | Handles the client cancel by name (suspend) |
| [`suspend/forceSuspend`](#suspend_forcesuspend) | public |  | power | inferred | Forces the suspend (suspend) |
| [`suspend/identify`](#suspend_identify) | public |  | power | inferred | Handles the identify (suspend) |
| [`suspend/prepareSuspendAck`](#suspend_preparesuspendack) | public |  | power | inferred | Prepares the suspend ack (suspend) |
| [`suspend/prepareSuspendRegister`](#suspend_preparesuspendregister) | public |  | power | inferred | Prepares the suspend register (suspend) |
| [`suspend/suspendRequestAck`](#suspend_suspendrequestack) | public |  | power | inferred | Handles the suspend request ack (suspend) |
| [`suspend/suspendRequestRegister`](#suspend_suspendrequestregister) | public |  | power | inferred | Handles the suspend request register (suspend) |
| [`suspend/TESTSuspend`](#suspend_testsuspend) | public |  | power | inferred | Tests the suspend (suspend) |

<a id="shutdown_initiate"></a>
## `shutdown/initiate` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/initiate`

Handles the initiate (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/initiate '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machineoff"></a>
## `shutdown/machineOff` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/machineOff`

Handles the machine off (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/machineOff '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machinereboot"></a>
## `shutdown/machineReboot` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/machineReboot`

Handles the machine reboot (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/machineReboot '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsack"></a>
## `shutdown/shutdownApplicationsAck` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownApplicationsAck`

Shuts down the applications ack (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownApplicationsAck '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsregister"></a>
## `shutdown/shutdownApplicationsRegister` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownApplicationsRegister`

Shuts down the applications register (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownApplicationsRegister '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesack"></a>
## `shutdown/shutdownServicesAck` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownServicesAck`

Shuts down the services ack (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownServicesAck '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesregister"></a>
## `shutdown/shutdownServicesRegister` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownServicesRegister`

Shuts down the services register (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownServicesRegister '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_testresetshutdownstate"></a>
## `shutdown/TESTresetShutdownState` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/TESTresetShutdownState`

Handles the TES treset shutdown state (shutdown)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/TESTresetShutdownState '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_activityend"></a>
## `suspend/activityEnd`

`luna://com.webos.service.power/suspend/activityEnd`

Handles the activity end (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/activityEnd '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_activitystart"></a>
## `suspend/activityStart`

`luna://com.webos.service.power/suspend/activityStart`

Handles the activity start (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/activityStart '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_clientcancelbyname"></a>
## `suspend/clientCancelByName`

`luna://com.webos.service.power/suspend/clientCancelByName`

Handles the client cancel by name (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/clientCancelByName '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_forcesuspend"></a>
## `suspend/forceSuspend`

`luna://com.webos.service.power/suspend/forceSuspend`

Forces the suspend (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/forceSuspend '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_identify"></a>
## `suspend/identify`

`luna://com.webos.service.power/suspend/identify`

Handles the identify (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/identify '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_preparesuspendack"></a>
## `suspend/prepareSuspendAck`

`luna://com.webos.service.power/suspend/prepareSuspendAck`

Prepares the suspend ack (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/prepareSuspendAck '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_preparesuspendregister"></a>
## `suspend/prepareSuspendRegister`

`luna://com.webos.service.power/suspend/prepareSuspendRegister`

Prepares the suspend register (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/prepareSuspendRegister '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_suspendrequestack"></a>
## `suspend/suspendRequestAck`

`luna://com.webos.service.power/suspend/suspendRequestAck`

Handles the suspend request ack (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/suspendRequestAck '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_suspendrequestregister"></a>
## `suspend/suspendRequestRegister`

`luna://com.webos.service.power/suspend/suspendRequestRegister`

Handles the suspend request register (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/suspendRequestRegister '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_testsuspend"></a>
## `suspend/TESTSuspend`

`luna://com.webos.service.power/suspend/TESTSuspend`

Tests the suspend (suspend)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/TESTSuspend '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
