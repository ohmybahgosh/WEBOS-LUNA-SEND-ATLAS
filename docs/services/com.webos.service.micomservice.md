# `com.webos.service.micomservice`

MICOM microcontroller service: reports power on/off history, OLED self-diagnosis, IR custom codes and hardware diagnostics, and controls standby/always-ready and LED functions. _(inferred from the service's methods)_

53 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`backupPowerOnOffHistory`](#backuppoweronoffhistory) | public |  | power | inferred | Backs up the power on off history. |
| [`getHallicCount`](#gethalliccount) | public |  | power | inferred | Returns the hallic count. |
| [`getIRCustomCode`](#getircustomcode) | public |  | power | inferred | Returns the IR custom code. |
| [`getSelfDiagnosisOled`](#getselfdiagnosisoled) | public |  | power | inferred | Returns the self diagnosis oled. |
| [`getSpecialRemoconMode`](#getspecialremoconmode) | public |  | power | inferred | Returns the special remocon mode. |
| [`listFactoryKeyHistory`](#listfactorykeyhistory) | public |  | power | inferred | Lists the factory key history. |
| [`listPowerOnOffHistory`](#listpoweronoffhistory) | public |  | power | inferred | Lists the power on off history. |
| [`listPowerOnOffHistoryForDiagnosisMenu`](#listpoweronoffhistoryfordiagnosismenu) | public |  | power | inferred | Lists the power on off history for diagnosis menu. |
| [`listPowerOnOffHistoryHexWithUTT`](#listpoweronoffhistoryhexwithutt) | public |  | power | inferred | Lists the power on off history hex with UTT. |
| [`listPowerOnOffHistoryWithUTT`](#listpoweronoffhistorywithutt) | public |  | power | inferred | Lists the power on off history with UTT. |
| [`requestAlwaysReadyControlCommand`](#requestalwaysreadycontrolcommand) | public |  | power | inferred | Requests the always ready control command. |
| [`requestAplusCenterLedCtrl`](#requestapluscenterledctrl) | public |  | power | inferred | Requests the aplus center LED ctrl. |
| [`requestAplusLedBarCtrl`](#requestaplusledbarctrl) | public |  | db | inferred | Requests the aplus LED bar ctrl. |
| [`requestAutoPowerOffOn`](#requestautopoweroffon) | public |  | power | inferred | Requests the auto power off on. |
| [`requestBifDisconnectCount`](#requestbifdisconnectcount) | public |  | power | inferred | Requests the bif disconnect count. |
| [`requestBifRepairingCount`](#requestbifrepairingcount) | public |  | power | inferred | Requests the bif repairing count. |
| [`requestBifRfChNum`](#requestbifrfchnum) | public |  | power | inferred | Requests the bif RF channel num. |
| [`requestBifVersion`](#requestbifversion) | public |  | power | inferred | Requests the bif version. |
| [`requestDisplayMicomVersion`](#requestdisplaymicomversion) | public |  | power | inferred | Requests the display MICOM version. |
| [`requestHostReadyCommand`](#requesthostreadycommand) | public |  | power | inferred | Requests the host ready command. |
| [`requestInstantControlCommand`](#requestinstantcontrolcommand) | public |  | power | inferred | Requests the instant control command. |
| [`requestPowerControlCommand`](#requestpowercontrolcommand) | public |  | power | inferred | Requests the power control command. |
| [`requestPowerOnOffHistory`](#requestpoweronoffhistory) | public |  | power | inferred | Requests the power on off history. |
| [`requestUpdate`](#requestupdate) | public |  | update | inferred | Requests the update. |
| [`requestZerowattMicomVersion`](#requestzerowattmicomversion) | public |  | power | inferred | Requests the zerowatt MICOM version. |
| [`resetPowerOnOffHistory`](#resetpoweronoffhistory) | public |  | power | inferred | Resets the power on off history. ⚠️ |
| [`resetWifiVbus`](#resetwifivbus) | public |  | network | inferred | Resets the wifi vbus. ⚠️ |
| [`sendHotelKeyOperationMode`](#sendhotelkeyoperationmode) | public |  | power | inferred | Sends the hotel key operation mode. |
| [`sendKeycode`](#sendkeycode) | public |  | power | inferred | Sends the keycode. |
| [`sendPNWashKeyLock`](#sendpnwashkeylock) | public |  | power | inferred | Sends the PN wash key lock. |
| [`sendWBModeEnable`](#sendwbmodeenable) | public |  | power | inferred | Sends the WB mode enable. |
| [`setAplusCenterLed`](#setapluscenterled) | public |  | power | inferred | Sets the aplus center LED. |
| [`setAplusLedBar`](#setaplusledbar) | public |  | db | inferred | Sets the aplus LED bar. |
| [`setCPHotKeyListLock`](#setcphotkeylistlock) | public |  | power | inferred | Sets the CP hot key list lock. |
| [`setCPHotKeyLock`](#setcphotkeylock) | public |  | power | inferred | Sets the CP hot key lock. |
| [`setFactoryKeySaveMode`](#setfactorykeysavemode) | public |  | power | inferred | Sets the factory key save mode. ⚠️ |
| [`setHotelModeKeyOperation`](#sethotelmodekeyoperation) | public |  | power | inferred | Sets the hotel mode key operation. |
| [`setPanelWashKeyLock`](#setpanelwashkeylock) | public |  | power | inferred | Sets the panel wash key lock. |
| [`setRGBLedTest`](#setrgbledtest) | public |  | power | inferred | Sets the RGB LED test. |
| [`setSpecialRemoconMode`](#setspecialremoconmode) | public |  | power | inferred | Sets the special remocon mode. |
| [`setWhiteBalanceMode`](#setwhitebalancemode) | public |  | power | inferred | Sets the white balance mode. |
| [`setWOBLEMode`](#setwoblemode) | public |  | power | inferred | Sets the WOBLE mode. |
| [`setWOLMode`](#setwolmode) | public |  | power | inferred | Sets the WoL mode. |
| [`setWOVMode`](#setwovmode) | public |  | power | inferred | Sets the WOV mode. |
| [`setWOWLMode`](#setwowlmode) | public |  | power | inferred | Sets the WOWL mode. |
| [`updateBifFirmware`](#updatebiffirmware) | public |  | update | inferred | Updates the bif firmware. ⚠️ |
| [`updateDisplayMicomFirmware`](#updatedisplaymicomfirmware) | public |  | update | inferred | Updates the display MICOM firmware. ⚠️ |
| [`updateMicroLedMicomFirmware`](#updatemicroledmicomfirmware) | public |  | update | inferred | Updates the micro LED MICOM firmware. ⚠️ |
| [`updateWOBLEModeEnable`](#updatewoblemodeenable) | public |  | update | inferred | Updates the WOBLE mode enable. |
| [`updateWOLModeEnable`](#updatewolmodeenable) | public |  | update | inferred | Updates the WoL mode enable. |
| [`updateWOVModeEnable`](#updatewovmodeenable) | public |  | update | inferred | Updates the WOV mode enable. |
| [`updateWOWLModeEnable`](#updatewowlmodeenable) | public |  | update | inferred | Updates the WOWL mode enable. |
| [`updateZerowattMicomFirmware`](#updatezerowattmicomfirmware) | public |  | update | inferred | Updates the zerowatt MICOM firmware. ⚠️ |

<a id="backuppoweronoffhistory"></a>
## `backupPowerOnOffHistory`

`luna://com.webos.service.micomservice/backupPowerOnOffHistory`

Backs up the power on off history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/backupPowerOnOffHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethalliccount"></a>
## `getHallicCount`

`luna://com.webos.service.micomservice/getHallicCount`

Returns the hallic count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `count` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getHallicCount '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getircustomcode"></a>
## `getIRCustomCode`

`luna://com.webos.service.micomservice/getIRCustomCode`

Returns the IR custom code.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getIRCustomCode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getselfdiagnosisoled"></a>
## `getSelfDiagnosisOled`

`luna://com.webos.service.micomservice/getSelfDiagnosisOled`

Returns the self diagnosis oled.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `StatusValue` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getSelfDiagnosisOled '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getspecialremoconmode"></a>
## `getSpecialRemoconMode`

`luna://com.webos.service.micomservice/getSpecialRemoconMode`

Returns the special remocon mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `specialRemoconMode` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getSpecialRemoconMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listfactorykeyhistory"></a>
## `listFactoryKeyHistory`

`luna://com.webos.service.micomservice/listFactoryKeyHistory`

Lists the factory key history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listFactoryKeyHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistory"></a>
## `listPowerOnOffHistory`

`luna://com.webos.service.micomservice/listPowerOnOffHistory`

Lists the power on off history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistoryfordiagnosismenu"></a>
## `listPowerOnOffHistoryForDiagnosisMenu`

`luna://com.webos.service.micomservice/listPowerOnOffHistoryForDiagnosisMenu`

Lists the power on off history for diagnosis menu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistoryForDiagnosisMenu '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistoryhexwithutt"></a>
## `listPowerOnOffHistoryHexWithUTT`

`luna://com.webos.service.micomservice/listPowerOnOffHistoryHexWithUTT`

Lists the power on off history hex with UTT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistoryHexWithUTT '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistorywithutt"></a>
## `listPowerOnOffHistoryWithUTT`

`luna://com.webos.service.micomservice/listPowerOnOffHistoryWithUTT`

Lists the power on off history with UTT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistoryWithUTT '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestalwaysreadycontrolcommand"></a>
## `requestAlwaysReadyControlCommand`

`luna://com.webos.service.micomservice/requestAlwaysReadyControlCommand`

Requests the always ready control command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAlwaysReadyControlCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestapluscenterledctrl"></a>
## `requestAplusCenterLedCtrl`

`luna://com.webos.service.micomservice/requestAplusCenterLedCtrl`

Requests the aplus center LED ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAplusCenterLedCtrl '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestaplusledbarctrl"></a>
## `requestAplusLedBarCtrl`

`luna://com.webos.service.micomservice/requestAplusLedBarCtrl`

Requests the aplus LED bar ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAplusLedBarCtrl '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestautopoweroffon"></a>
## `requestAutoPowerOffOn`

`luna://com.webos.service.micomservice/requestAutoPowerOffOn`

Requests the auto power off on.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAutoPowerOffOn '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifdisconnectcount"></a>
## `requestBifDisconnectCount`

`luna://com.webos.service.micomservice/requestBifDisconnectCount`

Requests the bif disconnect count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifDisconnectCount '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifrepairingcount"></a>
## `requestBifRepairingCount`

`luna://com.webos.service.micomservice/requestBifRepairingCount`

Requests the bif repairing count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifRepairingCount '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifrfchnum"></a>
## `requestBifRfChNum`

`luna://com.webos.service.micomservice/requestBifRfChNum`

Requests the bif RF channel num.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifRfChNum '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifversion"></a>
## `requestBifVersion`

`luna://com.webos.service.micomservice/requestBifVersion`

Requests the bif version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifVersion '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdisplaymicomversion"></a>
## `requestDisplayMicomVersion`

`luna://com.webos.service.micomservice/requestDisplayMicomVersion`

Requests the display MICOM version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestDisplayMicomVersion '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requesthostreadycommand"></a>
## `requestHostReadyCommand`

`luna://com.webos.service.micomservice/requestHostReadyCommand`

Requests the host ready command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestHostReadyCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestinstantcontrolcommand"></a>
## `requestInstantControlCommand`

`luna://com.webos.service.micomservice/requestInstantControlCommand`

Requests the instant control command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestInstantControlCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpowercontrolcommand"></a>
## `requestPowerControlCommand`

`luna://com.webos.service.micomservice/requestPowerControlCommand`

Requests the power control command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestPowerControlCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpoweronoffhistory"></a>
## `requestPowerOnOffHistory`

`luna://com.webos.service.micomservice/requestPowerOnOffHistory`

Requests the power on off history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestPowerOnOffHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestupdate"></a>
## `requestUpdate`

`luna://com.webos.service.micomservice/requestUpdate`

Requests the update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestUpdate '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestzerowattmicomversion"></a>
## `requestZerowattMicomVersion`

`luna://com.webos.service.micomservice/requestZerowattMicomVersion`

Requests the zerowatt MICOM version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestZerowattMicomVersion '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetpoweronoffhistory"></a>
## `resetPowerOnOffHistory` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/resetPowerOnOffHistory`

Resets the power on off history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/resetPowerOnOffHistory '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetwifivbus"></a>
## `resetWifiVbus` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/resetWifiVbus`

Resets the wifi vbus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/resetWifiVbus '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendhotelkeyoperationmode"></a>
## `sendHotelKeyOperationMode`

`luna://com.webos.service.micomservice/sendHotelKeyOperationMode`

Sends the hotel key operation mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendHotelKeyOperationMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendkeycode"></a>
## `sendKeycode`

`luna://com.webos.service.micomservice/sendKeycode`

Sends the keycode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendKeycode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendpnwashkeylock"></a>
## `sendPNWashKeyLock`

`luna://com.webos.service.micomservice/sendPNWashKeyLock`

Sends the PN wash key lock.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendPNWashKeyLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendwbmodeenable"></a>
## `sendWBModeEnable`

`luna://com.webos.service.micomservice/sendWBModeEnable`

Sends the WB mode enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendWBModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setapluscenterled"></a>
## `setAplusCenterLed`

`luna://com.webos.service.micomservice/setAplusCenterLed`

Sets the aplus center LED.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setAplusCenterLed '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaplusledbar"></a>
## `setAplusLedBar`

`luna://com.webos.service.micomservice/setAplusLedBar`

Sets the aplus LED bar.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setAplusLedBar '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcphotkeylistlock"></a>
## `setCPHotKeyListLock`

`luna://com.webos.service.micomservice/setCPHotKeyListLock`

Sets the CP hot key list lock.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setCPHotKeyListLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcphotkeylock"></a>
## `setCPHotKeyLock`

`luna://com.webos.service.micomservice/setCPHotKeyLock`

Sets the CP hot key lock.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setCPHotKeyLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setfactorykeysavemode"></a>
## `setFactoryKeySaveMode` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/setFactoryKeySaveMode`

Sets the factory key save mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setFactoryKeySaveMode '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethotelmodekeyoperation"></a>
## `setHotelModeKeyOperation`

`luna://com.webos.service.micomservice/setHotelModeKeyOperation`

Sets the hotel mode key operation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setHotelModeKeyOperation '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpanelwashkeylock"></a>
## `setPanelWashKeyLock`

`luna://com.webos.service.micomservice/setPanelWashKeyLock`

Sets the panel wash key lock.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setPanelWashKeyLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setrgbledtest"></a>
## `setRGBLedTest`

`luna://com.webos.service.micomservice/setRGBLedTest`

Sets the RGB LED test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setRGBLedTest '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setspecialremoconmode"></a>
## `setSpecialRemoconMode`

`luna://com.webos.service.micomservice/setSpecialRemoconMode`

Sets the special remocon mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setSpecialRemoconMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwhitebalancemode"></a>
## `setWhiteBalanceMode`

`luna://com.webos.service.micomservice/setWhiteBalanceMode`

Sets the white balance mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWhiteBalanceMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwoblemode"></a>
## `setWOBLEMode`

`luna://com.webos.service.micomservice/setWOBLEMode`

Sets the WOBLE mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOBLEMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwolmode"></a>
## `setWOLMode`

`luna://com.webos.service.micomservice/setWOLMode`

Sets the WoL mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOLMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwovmode"></a>
## `setWOVMode`

`luna://com.webos.service.micomservice/setWOVMode`

Sets the WOV mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOVMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwowlmode"></a>
## `setWOWLMode`

`luna://com.webos.service.micomservice/setWOWLMode`

Sets the WOWL mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOWLMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatebiffirmware"></a>
## `updateBifFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateBifFirmware`

Updates the bif firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateBifFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatedisplaymicomfirmware"></a>
## `updateDisplayMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateDisplayMicomFirmware`

Updates the display MICOM firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateDisplayMicomFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatemicroledmicomfirmware"></a>
## `updateMicroLedMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateMicroLedMicomFirmware`

Updates the micro LED MICOM firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateMicroLedMicomFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewoblemodeenable"></a>
## `updateWOBLEModeEnable`

`luna://com.webos.service.micomservice/updateWOBLEModeEnable`

Updates the WOBLE mode enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOBLEModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewolmodeenable"></a>
## `updateWOLModeEnable`

`luna://com.webos.service.micomservice/updateWOLModeEnable`

Updates the WoL mode enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOLModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewovmodeenable"></a>
## `updateWOVModeEnable`

`luna://com.webos.service.micomservice/updateWOVModeEnable`

Updates the WOV mode enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOVModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewowlmodeenable"></a>
## `updateWOWLModeEnable`

`luna://com.webos.service.micomservice/updateWOWLModeEnable`

Updates the WOWL mode enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOWLModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatezerowattmicomfirmware"></a>
## `updateZerowattMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateZerowattMicomFirmware`

Updates the zerowatt MICOM firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateZerowattMicomFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
