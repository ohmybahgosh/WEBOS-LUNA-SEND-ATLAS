# `com.webos.service.faultmanager`

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`disableFaultDetect`](#disablefaultdetect) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`enableFaultDetect`](#enablefaultdetect) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`enableFaultRecovery`](#enablefaultrecovery) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`getFaultDetectedStatus`](#getfaultdetectedstatus) | private |  | misc | Lists faults detected during the current boot (keyed by pid and faultTime) |
| [`getFaultStatus`](#getfaultstatus) | private |  | system-info | Getter on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`invalidateFault`](#invalidatefault) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`notifyFault`](#notifyfault) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`registerAndNotifyFault`](#registerandnotifyfault) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`registerFault`](#registerfault) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |
| [`test`](#test) | private |  | system-info | Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented). |

<a id="disablefaultdetect"></a>
## `disableFaultDetect`

`luna://com.webos.service.faultmanager/disableFaultDetect`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/disableFaultDetect '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablefaultdetect"></a>
## `enableFaultDetect`

`luna://com.webos.service.faultmanager/enableFaultDetect`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/enableFaultDetect '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablefaultrecovery"></a>
## `enableFaultRecovery`

`luna://com.webos.service.faultmanager/enableFaultRecovery`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.faultmanager/getFaultDetectedStatus '{}'
```

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/e2e/hc_e2e/steps/popups.py)

<a id="getfaultstatus"></a>
## `getFaultStatus`

`luna://com.webos.service.faultmanager/getFaultStatus`

Getter on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/getFaultStatus '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="invalidatefault"></a>
## `invalidateFault`

`luna://com.webos.service.faultmanager/invalidateFault`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/invalidateFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyfault"></a>
## `notifyFault`

`luna://com.webos.service.faultmanager/notifyFault`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/notifyFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerandnotifyfault"></a>
## `registerAndNotifyFault`

`luna://com.webos.service.faultmanager/registerAndNotifyFault`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/registerAndNotifyFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerfault"></a>
## `registerFault`

`luna://com.webos.service.faultmanager/registerFault`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/registerFault '{}'
```

> ACG groups: private, faultmanager.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.faultmanager/test`

Method on com.webos.service.faultmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.faultmanager/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
