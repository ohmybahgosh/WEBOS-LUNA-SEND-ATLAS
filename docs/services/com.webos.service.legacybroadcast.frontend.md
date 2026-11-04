# `com.webos.service.legacybroadcast.frontend`

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`clearStackedPacketError`](#clearstackedpacketerror) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`close`](#close) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`connect`](#connect) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`dbgGetAntennaInfolist`](#dbggetantennainfolist) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`dbgGetHostATVFirmwareVersion`](#dbggethostatvfirmwareversion) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). ⚠️ |
| [`dbgGetHostCurrentFrequency`](#dbggethostcurrentfrequency) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`dbgGetHostDTVFirmwareVersion`](#dbggethostdtvfirmwareversion) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). ⚠️ |
| [`dbgGetHostLockStatus`](#dbggethostlockstatus) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`dbgGetHostModulation`](#dbggethostmodulation) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`dbgGetRFHistory`](#dbggetrfhistory) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`dbgGetSignalStatus`](#dbggetsignalstatus) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getLNBShortageOccuredTime`](#getlnbshortageoccuredtime) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getLNBShortageStatus`](#getlnbshortagestatus) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getLockStatus`](#getlockstatus) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getLockStatusforSubscribe`](#getlockstatusforsubscribe) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getMPLP`](#getmplp) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getSignalStatusforSelfCheck`](#getsignalstatusforselfcheck) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getSignalStatusforSubscribe`](#getsignalstatusforsubscribe) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getStackedPacketError`](#getstackedpacketerror) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`getTSPath`](#gettspath) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`open`](#open) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`runStackedPacketError`](#runstackedpacketerror) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`setBroadcastSystem`](#setbroadcastsystem) | private |  | tv-broadcast | Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`setGPIOStatus`](#setgpiostatus) | private |  | tv-broadcast | Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`setLNBPowerStatus`](#setlnbpowerstatus) | private |  | power | Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`setPLP`](#setplp) | private |  | tv-broadcast | Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`tune`](#tune) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |
| [`tuneforATSC3`](#tuneforatsc3) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented). |

<a id="clearstackedpacketerror"></a>
## `clearStackedPacketError`

`luna://com.webos.service.legacybroadcast.frontend/clearStackedPacketError`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/clearStackedPacketError '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.legacybroadcast.frontend/close`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/close '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.legacybroadcast.frontend/connect`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/connect '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggetantennainfolist"></a>
## `dbgGetAntennaInfolist`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetAntennaInfolist`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetAntennaInfolist '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostatvfirmwareversion"></a>
## `dbgGetHostATVFirmwareVersion` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostATVFirmwareVersion`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostATVFirmwareVersion '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostcurrentfrequency"></a>
## `dbgGetHostCurrentFrequency`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostCurrentFrequency`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostCurrentFrequency '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostdtvfirmwareversion"></a>
## `dbgGetHostDTVFirmwareVersion` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostDTVFirmwareVersion`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostDTVFirmwareVersion '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostlockstatus"></a>
## `dbgGetHostLockStatus`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostLockStatus`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostLockStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostmodulation"></a>
## `dbgGetHostModulation`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostModulation`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostModulation '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggetrfhistory"></a>
## `dbgGetRFHistory`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetRFHistory`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetRFHistory '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggetsignalstatus"></a>
## `dbgGetSignalStatus`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetSignalStatus`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetSignalStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlnbshortageoccuredtime"></a>
## `getLNBShortageOccuredTime`

`luna://com.webos.service.legacybroadcast.frontend/getLNBShortageOccuredTime`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLNBShortageOccuredTime '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlnbshortagestatus"></a>
## `getLNBShortageStatus`

`luna://com.webos.service.legacybroadcast.frontend/getLNBShortageStatus`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLNBShortageStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlockstatus"></a>
## `getLockStatus`

`luna://com.webos.service.legacybroadcast.frontend/getLockStatus`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLockStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlockstatusforsubscribe"></a>
## `getLockStatusforSubscribe`

`luna://com.webos.service.legacybroadcast.frontend/getLockStatusforSubscribe`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLockStatusforSubscribe '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmplp"></a>
## `getMPLP`

`luna://com.webos.service.legacybroadcast.frontend/getMPLP`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getMPLP '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatusforselfcheck"></a>
## `getSignalStatusforSelfCheck`

`luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSelfCheck`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSelfCheck '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatusforsubscribe"></a>
## `getSignalStatusforSubscribe`

`luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSubscribe`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSubscribe '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstackedpacketerror"></a>
## `getStackedPacketError`

`luna://com.webos.service.legacybroadcast.frontend/getStackedPacketError`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getStackedPacketError '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettspath"></a>
## `getTSPath`

`luna://com.webos.service.legacybroadcast.frontend/getTSPath`

Getter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getTSPath '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.legacybroadcast.frontend/open`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/open '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="runstackedpacketerror"></a>
## `runStackedPacketError`

`luna://com.webos.service.legacybroadcast.frontend/runStackedPacketError`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/runStackedPacketError '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastsystem"></a>
## `setBroadcastSystem`

`luna://com.webos.service.legacybroadcast.frontend/setBroadcastSystem`

Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setBroadcastSystem '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setgpiostatus"></a>
## `setGPIOStatus`

`luna://com.webos.service.legacybroadcast.frontend/setGPIOStatus`

Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setGPIOStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setlnbpowerstatus"></a>
## `setLNBPowerStatus`

`luna://com.webos.service.legacybroadcast.frontend/setLNBPowerStatus`

Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setLNBPowerStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setplp"></a>
## `setPLP`

`luna://com.webos.service.legacybroadcast.frontend/setPLP`

Setter on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setPLP '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tune"></a>
## `tune`

`luna://com.webos.service.legacybroadcast.frontend/tune`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/tune '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tuneforatsc3"></a>
## `tuneforATSC3`

`luna://com.webos.service.legacybroadcast.frontend/tuneforATSC3`

Method on com.webos.service.legacybroadcast.frontend (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/tuneforATSC3 '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
