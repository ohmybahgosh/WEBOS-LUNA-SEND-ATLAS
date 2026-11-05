# `com.webos.service.legacybroadcast.frontend`

Legacy-broadcast tuner frontend: reports RF lock and signal status, modulation, MPLP, LNB (satellite) shortage status and firmware/diagnostic info. _(inferred from the service's methods)_

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`clearStackedPacketError`](#clearstackedpacketerror) | private |  | tv-broadcast | inferred | Clears the stacked packet error. |
| [`close`](#close) | private |  | tv-broadcast | inferred | Closes the legacybroadcast frontend. |
| [`connect`](#connect) | private |  | tv-broadcast | inferred | Connects the legacybroadcast frontend. |
| [`dbgGetAntennaInfolist`](#dbggetantennainfolist) | private |  | tv-broadcast | inferred | Debug: Returns the antenna infolist. |
| [`dbgGetHostATVFirmwareVersion`](#dbggethostatvfirmwareversion) | private |  | tv-broadcast | inferred | Debug: Returns the host ATV firmware version. ⚠️ |
| [`dbgGetHostCurrentFrequency`](#dbggethostcurrentfrequency) | private |  | tv-broadcast | inferred | Debug: Returns the host current frequency. |
| [`dbgGetHostDTVFirmwareVersion`](#dbggethostdtvfirmwareversion) | private |  | tv-broadcast | inferred | Debug: Returns the host DTV firmware version. ⚠️ |
| [`dbgGetHostLockStatus`](#dbggethostlockstatus) | private |  | tv-broadcast | inferred | Debug: Returns the host lock status. |
| [`dbgGetHostModulation`](#dbggethostmodulation) | private |  | tv-broadcast | inferred | Debug: Returns the host modulation. |
| [`dbgGetRFHistory`](#dbggetrfhistory) | private |  | tv-broadcast | inferred | Debug: Returns the RF history. |
| [`dbgGetSignalStatus`](#dbggetsignalstatus) | private |  | tv-broadcast | inferred | Debug: Returns the signal status. |
| [`getLNBShortageOccuredTime`](#getlnbshortageoccuredtime) | private |  | tv-broadcast | inferred | Returns the LNB shortage occured time. |
| [`getLNBShortageStatus`](#getlnbshortagestatus) | private |  | tv-broadcast | inferred | Returns the LNB shortage status. |
| [`getLockStatus`](#getlockstatus) | private |  | tv-broadcast | inferred | Returns the lock status. |
| [`getLockStatusforSubscribe`](#getlockstatusforsubscribe) | private |  | tv-broadcast | inferred | Returns the lock status (subscription variant) |
| [`getMPLP`](#getmplp) | private |  | tv-broadcast | inferred | Returns the MPLP. |
| [`getSignalStatusforSelfCheck`](#getsignalstatusforselfcheck) | private |  | tv-broadcast | inferred | Returns the signal status (self-check) |
| [`getSignalStatusforSubscribe`](#getsignalstatusforsubscribe) | private |  | tv-broadcast | inferred | Returns the signal status (subscription variant) |
| [`getStackedPacketError`](#getstackedpacketerror) | private |  | tv-broadcast | inferred | Returns the stacked packet error. |
| [`getTSPath`](#gettspath) | private |  | tv-broadcast | inferred | Returns the TS path. |
| [`open`](#open) | private |  | tv-broadcast | inferred | Opens the legacybroadcast frontend. |
| [`runStackedPacketError`](#runstackedpacketerror) | private |  | tv-broadcast | inferred | Runs the stacked packet error. |
| [`setBroadcastSystem`](#setbroadcastsystem) | private |  | tv-broadcast | inferred | Sets the broadcast system. |
| [`setGPIOStatus`](#setgpiostatus) | private |  | tv-broadcast | inferred | Sets the GPIO status. |
| [`setLNBPowerStatus`](#setlnbpowerstatus) | private |  | power | inferred | Sets the LNB power status. |
| [`setPLP`](#setplp) | private |  | tv-broadcast | inferred | Sets the PLP. |
| [`tune`](#tune) | private |  | tv-broadcast | inferred | Tunes the legacybroadcast frontend. |
| [`tuneforATSC3`](#tuneforatsc3) | private |  | tv-broadcast | inferred | Handles the tunefor ATSC 3. |

<a id="clearstackedpacketerror"></a>
## `clearStackedPacketError`

`luna://com.webos.service.legacybroadcast.frontend/clearStackedPacketError`

Clears the stacked packet error.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/clearStackedPacketError '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.legacybroadcast.frontend/close`

Closes the legacybroadcast frontend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/close '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.legacybroadcast.frontend/connect`

Connects the legacybroadcast frontend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/connect '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggetantennainfolist"></a>
## `dbgGetAntennaInfolist`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetAntennaInfolist`

Debug: Returns the antenna infolist.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetAntennaInfolist '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostatvfirmwareversion"></a>
## `dbgGetHostATVFirmwareVersion` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostATVFirmwareVersion`

Debug: Returns the host ATV firmware version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostATVFirmwareVersion '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostcurrentfrequency"></a>
## `dbgGetHostCurrentFrequency`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostCurrentFrequency`

Debug: Returns the host current frequency.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostCurrentFrequency '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostdtvfirmwareversion"></a>
## `dbgGetHostDTVFirmwareVersion` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostDTVFirmwareVersion`

Debug: Returns the host DTV firmware version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostDTVFirmwareVersion '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostlockstatus"></a>
## `dbgGetHostLockStatus`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostLockStatus`

Debug: Returns the host lock status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostLockStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggethostmodulation"></a>
## `dbgGetHostModulation`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostModulation`

Debug: Returns the host modulation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetHostModulation '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggetrfhistory"></a>
## `dbgGetRFHistory`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetRFHistory`

Debug: Returns the RF history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetRFHistory '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbggetsignalstatus"></a>
## `dbgGetSignalStatus`

`luna://com.webos.service.legacybroadcast.frontend/dbgGetSignalStatus`

Debug: Returns the signal status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/dbgGetSignalStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlnbshortageoccuredtime"></a>
## `getLNBShortageOccuredTime`

`luna://com.webos.service.legacybroadcast.frontend/getLNBShortageOccuredTime`

Returns the LNB shortage occured time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `occuredtime` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLNBShortageOccuredTime '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlnbshortagestatus"></a>
## `getLNBShortageStatus`

`luna://com.webos.service.legacybroadcast.frontend/getLNBShortageStatus`

Returns the LNB shortage status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `shortage` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLNBShortageStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlockstatus"></a>
## `getLockStatus`

`luna://com.webos.service.legacybroadcast.frontend/getLockStatus`

Returns the lock status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLockStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlockstatusforsubscribe"></a>
## `getLockStatusforSubscribe`

`luna://com.webos.service.legacybroadcast.frontend/getLockStatusforSubscribe`

Returns the lock status (subscription variant)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getLockStatusforSubscribe '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmplp"></a>
## `getMPLP`

`luna://com.webos.service.legacybroadcast.frontend/getMPLP`

Returns the MPLP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getMPLP '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatusforselfcheck"></a>
## `getSignalStatusforSelfCheck`

`luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSelfCheck`

Returns the signal status (self-check)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSelfCheck '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstatusforsubscribe"></a>
## `getSignalStatusforSubscribe`

`luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSubscribe`

Returns the signal status (subscription variant)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getSignalStatusforSubscribe '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstackedpacketerror"></a>
## `getStackedPacketError`

`luna://com.webos.service.legacybroadcast.frontend/getStackedPacketError`

Returns the stacked packet error.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `packeterror` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getStackedPacketError '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettspath"></a>
## `getTSPath`

`luna://com.webos.service.legacybroadcast.frontend/getTSPath`

Returns the TS path.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/getTSPath '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.legacybroadcast.frontend/open`

Opens the legacybroadcast frontend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/open '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="runstackedpacketerror"></a>
## `runStackedPacketError`

`luna://com.webos.service.legacybroadcast.frontend/runStackedPacketError`

Runs the stacked packet error.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/runStackedPacketError '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setbroadcastsystem"></a>
## `setBroadcastSystem`

`luna://com.webos.service.legacybroadcast.frontend/setBroadcastSystem`

Sets the broadcast system.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setBroadcastSystem '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setgpiostatus"></a>
## `setGPIOStatus`

`luna://com.webos.service.legacybroadcast.frontend/setGPIOStatus`

Sets the GPIO status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setGPIOStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setlnbpowerstatus"></a>
## `setLNBPowerStatus`

`luna://com.webos.service.legacybroadcast.frontend/setLNBPowerStatus`

Sets the LNB power status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setLNBPowerStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setplp"></a>
## `setPLP`

`luna://com.webos.service.legacybroadcast.frontend/setPLP`

Sets the PLP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/setPLP '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tune"></a>
## `tune`

`luna://com.webos.service.legacybroadcast.frontend/tune`

Tunes the legacybroadcast frontend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/tune '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tuneforatsc3"></a>
## `tuneforATSC3`

`luna://com.webos.service.legacybroadcast.frontend/tuneforATSC3`

Handles the tunefor ATSC 3.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.frontend/tuneforATSC3 '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
