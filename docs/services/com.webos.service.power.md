# `com.webos.service.power`

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`shutdown/initiate`](#shutdown_initiate) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`shutdown/machineOff`](#shutdown_machineoff) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`shutdown/machineReboot`](#shutdown_machinereboot) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`shutdown/shutdownApplicationsAck`](#shutdown_shutdownapplicationsack) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`shutdown/shutdownApplicationsRegister`](#shutdown_shutdownapplicationsregister) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`shutdown/shutdownServicesAck`](#shutdown_shutdownservicesack) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`shutdown/shutdownServicesRegister`](#shutdown_shutdownservicesregister) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`shutdown/TESTresetShutdownState`](#shutdown_testresetshutdownstate) | private |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). ⚠️ |
| [`suspend/activityEnd`](#suspend_activityend) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/activityStart`](#suspend_activitystart) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/clientCancelByName`](#suspend_clientcancelbyname) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/forceSuspend`](#suspend_forcesuspend) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/identify`](#suspend_identify) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/prepareSuspendAck`](#suspend_preparesuspendack) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/prepareSuspendRegister`](#suspend_preparesuspendregister) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/suspendRequestAck`](#suspend_suspendrequestack) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/suspendRequestRegister`](#suspend_suspendrequestregister) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |
| [`suspend/TESTSuspend`](#suspend_testsuspend) | public |  | power | Method on com.webos.service.power (introspected on-device; parameters undocumented). |

<a id="shutdown_initiate"></a>
## `shutdown/initiate` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/initiate`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/initiate '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machineoff"></a>
## `shutdown/machineOff` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/machineOff`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/machineOff '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_machinereboot"></a>
## `shutdown/machineReboot` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/machineReboot`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/machineReboot '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsack"></a>
## `shutdown/shutdownApplicationsAck` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownApplicationsAck`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownApplicationsAck '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownapplicationsregister"></a>
## `shutdown/shutdownApplicationsRegister` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownApplicationsRegister`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownApplicationsRegister '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesack"></a>
## `shutdown/shutdownServicesAck` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownServicesAck`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownServicesAck '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_shutdownservicesregister"></a>
## `shutdown/shutdownServicesRegister` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/shutdownServicesRegister`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/shutdownServicesRegister '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="shutdown_testresetshutdownstate"></a>
## `shutdown/TESTresetShutdownState` ⚠️ DANGEROUS

`luna://com.webos.service.power/shutdown/TESTresetShutdownState`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/shutdown/TESTresetShutdownState '{}'
```

> ACG groups: private, all, system. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_activityend"></a>
## `suspend/activityEnd`

`luna://com.webos.service.power/suspend/activityEnd`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/activityEnd '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_activitystart"></a>
## `suspend/activityStart`

`luna://com.webos.service.power/suspend/activityStart`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/activityStart '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_clientcancelbyname"></a>
## `suspend/clientCancelByName`

`luna://com.webos.service.power/suspend/clientCancelByName`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/clientCancelByName '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_forcesuspend"></a>
## `suspend/forceSuspend`

`luna://com.webos.service.power/suspend/forceSuspend`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/forceSuspend '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_identify"></a>
## `suspend/identify`

`luna://com.webos.service.power/suspend/identify`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/identify '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_preparesuspendack"></a>
## `suspend/prepareSuspendAck`

`luna://com.webos.service.power/suspend/prepareSuspendAck`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/prepareSuspendAck '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_preparesuspendregister"></a>
## `suspend/prepareSuspendRegister`

`luna://com.webos.service.power/suspend/prepareSuspendRegister`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/prepareSuspendRegister '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_suspendrequestack"></a>
## `suspend/suspendRequestAck`

`luna://com.webos.service.power/suspend/suspendRequestAck`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/suspendRequestAck '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_suspendrequestregister"></a>
## `suspend/suspendRequestRegister`

`luna://com.webos.service.power/suspend/suspendRequestRegister`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/suspendRequestRegister '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="suspend_testsuspend"></a>
## `suspend/TESTSuspend`

`luna://com.webos.service.power/suspend/TESTSuspend`

Method on com.webos.service.power (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.power/suspend/TESTSuspend '{}'
```

> ACG groups: private, all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
