# `com.webos.service.faultmanager`

Fault manager: detects and recovers from system faults, enabling/disabling detection and recovery, reporting fault status, and notifying or registering for fault events. _(inferred from the service's methods)_

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`disableFaultDetect`](#disablefaultdetect) | private |  | system-info | inferred | Disables the fault detect. |
| [`enableFaultDetect`](#enablefaultdetect) | private |  | system-info | inferred | Enables the fault detect. |
| [`enableFaultRecovery`](#enablefaultrecovery) | private |  | system-info | inferred | Enables the fault recovery. |
| [`getFaultDetectedStatus`](#getfaultdetectedstatus) | private |  | misc | documented | Lists faults detected during the current boot (keyed by pid and faultTime) |
| [`getFaultStatus`](#getfaultstatus) | private |  | system-info | inferred | Returns the fault status. |
| [`invalidateFault`](#invalidatefault) | private |  | system-info | inferred | Handles the invalidate fault. |
| [`notifyFault`](#notifyfault) | private |  | system-info | inferred | Notifies of the fault. |
| [`registerAndNotifyFault`](#registerandnotifyfault) | private |  | system-info | inferred | Registers the and notify fault. |
| [`registerFault`](#registerfault) | private |  | system-info | inferred | Registers the fault. |
| [`test`](#test) | private |  | system-info | inferred | Tests the faultmanager. |

<a id="disablefaultdetect"></a>
## `disableFaultDetect`

`luna://com.webos.service.faultmanager/disableFaultDetect`

Disables the fault detect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/disableFaultDetect '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablefaultdetect"></a>
## `enableFaultDetect`

`luna://com.webos.service.faultmanager/enableFaultDetect`

Enables the fault detect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/enableFaultDetect '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablefaultrecovery"></a>
## `enableFaultRecovery`

`luna://com.webos.service.faultmanager/enableFaultRecovery`

Enables the fault recovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/enableFaultRecovery '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfaultdetectedstatus"></a>
## `getFaultDetectedStatus`

`luna://com.webos.service.faultmanager/getFaultDetectedStatus`

Lists faults detected during the current boot (keyed by pid and faultTime)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `detected` |  |
| `detectedFaults` |  |
| `faultContent` |  |
| `faultDetectedStatus` |  |
| `faultTime` |  |
| `faultType` |  |

```sh
luna-send -n 1 luna://com.webos.service.faultmanager/getFaultDetectedStatus '{}'
```

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/e2e/hc_e2e/steps/popups.py)

<a id="getfaultstatus"></a>
## `getFaultStatus`

`luna://com.webos.service.faultmanager/getFaultStatus`

Returns the fault status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `crash` |  |
| `debug` |  |
| `detected` |  |
| `disableFaultAlert` |  |
| `faultDetectId` |  |
| `faultNotiFile` |  |
| `faultRecovery` |  |
| `faultStatus` |  |
| `general` |  |
| `ignoredFilter` |  |
| `kdriver` |  |
| `kernel` |  |
| `normalLog` |  |
| `pid` |  |
| `pname` |  |
| `powerOffRecovery` |  |
| `reason` |  |
| `recovery` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/getFaultStatus '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="invalidatefault"></a>
## `invalidateFault`

`luna://com.webos.service.faultmanager/invalidateFault`

Handles the invalidate fault.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/invalidateFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyfault"></a>
## `notifyFault`

`luna://com.webos.service.faultmanager/notifyFault`

Notifies of the fault.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/notifyFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerandnotifyfault"></a>
## `registerAndNotifyFault`

`luna://com.webos.service.faultmanager/registerAndNotifyFault`

Registers the and notify fault.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/registerAndNotifyFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerfault"></a>
## `registerFault`

`luna://com.webos.service.faultmanager/registerFault`

Registers the fault.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/registerFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.faultmanager/test`

Tests the faultmanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
