# `com.webos.service.micomservice`

53 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`backupPowerOnOffHistory`](#backuppoweronoffhistory) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`getHallicCount`](#gethalliccount) | public |  | power | Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`getIRCustomCode`](#getircustomcode) | public |  | power | Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`getSelfDiagnosisOled`](#getselfdiagnosisoled) | public |  | power | Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`getSpecialRemoconMode`](#getspecialremoconmode) | public |  | power | Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`listFactoryKeyHistory`](#listfactorykeyhistory) | public |  | power | Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`listPowerOnOffHistory`](#listpoweronoffhistory) | public |  | power | Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`listPowerOnOffHistoryForDiagnosisMenu`](#listpoweronoffhistoryfordiagnosismenu) | public |  | power | Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`listPowerOnOffHistoryHexWithUTT`](#listpoweronoffhistoryhexwithutt) | public |  | power | Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`listPowerOnOffHistoryWithUTT`](#listpoweronoffhistorywithutt) | public |  | power | Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestAlwaysReadyControlCommand`](#requestalwaysreadycontrolcommand) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestAplusCenterLedCtrl`](#requestapluscenterledctrl) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestAplusLedBarCtrl`](#requestaplusledbarctrl) | public |  | db | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestAutoPowerOffOn`](#requestautopoweroffon) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestBifDisconnectCount`](#requestbifdisconnectcount) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestBifRepairingCount`](#requestbifrepairingcount) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestBifRfChNum`](#requestbifrfchnum) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestBifVersion`](#requestbifversion) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestDisplayMicomVersion`](#requestdisplaymicomversion) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestHostReadyCommand`](#requesthostreadycommand) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestInstantControlCommand`](#requestinstantcontrolcommand) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestPowerControlCommand`](#requestpowercontrolcommand) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestPowerOnOffHistory`](#requestpoweronoffhistory) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestUpdate`](#requestupdate) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`requestZerowattMicomVersion`](#requestzerowattmicomversion) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`resetPowerOnOffHistory`](#resetpoweronoffhistory) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). ⚠️ |
| [`resetWifiVbus`](#resetwifivbus) | public |  | network | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). ⚠️ |
| [`sendHotelKeyOperationMode`](#sendhotelkeyoperationmode) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`sendKeycode`](#sendkeycode) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`sendPNWashKeyLock`](#sendpnwashkeylock) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`sendWBModeEnable`](#sendwbmodeenable) | public |  | power | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setAplusCenterLed`](#setapluscenterled) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setAplusLedBar`](#setaplusledbar) | public |  | db | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setCPHotKeyListLock`](#setcphotkeylistlock) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setCPHotKeyLock`](#setcphotkeylock) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setFactoryKeySaveMode`](#setfactorykeysavemode) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). ⚠️ |
| [`setHotelModeKeyOperation`](#sethotelmodekeyoperation) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setPanelWashKeyLock`](#setpanelwashkeylock) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setRGBLedTest`](#setrgbledtest) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setSpecialRemoconMode`](#setspecialremoconmode) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setWhiteBalanceMode`](#setwhitebalancemode) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setWOBLEMode`](#setwoblemode) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setWOLMode`](#setwolmode) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setWOVMode`](#setwovmode) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`setWOWLMode`](#setwowlmode) | public |  | power | Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`updateBifFirmware`](#updatebiffirmware) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). ⚠️ |
| [`updateDisplayMicomFirmware`](#updatedisplaymicomfirmware) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). ⚠️ |
| [`updateMicroLedMicomFirmware`](#updatemicroledmicomfirmware) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). ⚠️ |
| [`updateWOBLEModeEnable`](#updatewoblemodeenable) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`updateWOLModeEnable`](#updatewolmodeenable) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`updateWOVModeEnable`](#updatewovmodeenable) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`updateWOWLModeEnable`](#updatewowlmodeenable) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). |
| [`updateZerowattMicomFirmware`](#updatezerowattmicomfirmware) | public |  | update | Method on com.webos.service.micomservice (introspected on-device; parameters undocumented). ⚠️ |

<a id="backuppoweronoffhistory"></a>
## `backupPowerOnOffHistory`

`luna://com.webos.service.micomservice/backupPowerOnOffHistory`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/backupPowerOnOffHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethalliccount"></a>
## `getHallicCount`

`luna://com.webos.service.micomservice/getHallicCount`

Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getHallicCount '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getircustomcode"></a>
## `getIRCustomCode`

`luna://com.webos.service.micomservice/getIRCustomCode`

Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getIRCustomCode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getselfdiagnosisoled"></a>
## `getSelfDiagnosisOled`

`luna://com.webos.service.micomservice/getSelfDiagnosisOled`

Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getSelfDiagnosisOled '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getspecialremoconmode"></a>
## `getSpecialRemoconMode`

`luna://com.webos.service.micomservice/getSpecialRemoconMode`

Getter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/getSpecialRemoconMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listfactorykeyhistory"></a>
## `listFactoryKeyHistory`

`luna://com.webos.service.micomservice/listFactoryKeyHistory`

Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listFactoryKeyHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistory"></a>
## `listPowerOnOffHistory`

`luna://com.webos.service.micomservice/listPowerOnOffHistory`

Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistoryfordiagnosismenu"></a>
## `listPowerOnOffHistoryForDiagnosisMenu`

`luna://com.webos.service.micomservice/listPowerOnOffHistoryForDiagnosisMenu`

Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistoryForDiagnosisMenu '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistoryhexwithutt"></a>
## `listPowerOnOffHistoryHexWithUTT`

`luna://com.webos.service.micomservice/listPowerOnOffHistoryHexWithUTT`

Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistoryHexWithUTT '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpoweronoffhistorywithutt"></a>
## `listPowerOnOffHistoryWithUTT`

`luna://com.webos.service.micomservice/listPowerOnOffHistoryWithUTT`

Lister on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/listPowerOnOffHistoryWithUTT '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestalwaysreadycontrolcommand"></a>
## `requestAlwaysReadyControlCommand`

`luna://com.webos.service.micomservice/requestAlwaysReadyControlCommand`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAlwaysReadyControlCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestapluscenterledctrl"></a>
## `requestAplusCenterLedCtrl`

`luna://com.webos.service.micomservice/requestAplusCenterLedCtrl`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAplusCenterLedCtrl '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestaplusledbarctrl"></a>
## `requestAplusLedBarCtrl`

`luna://com.webos.service.micomservice/requestAplusLedBarCtrl`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAplusLedBarCtrl '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestautopoweroffon"></a>
## `requestAutoPowerOffOn`

`luna://com.webos.service.micomservice/requestAutoPowerOffOn`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestAutoPowerOffOn '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifdisconnectcount"></a>
## `requestBifDisconnectCount`

`luna://com.webos.service.micomservice/requestBifDisconnectCount`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifDisconnectCount '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifrepairingcount"></a>
## `requestBifRepairingCount`

`luna://com.webos.service.micomservice/requestBifRepairingCount`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifRepairingCount '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifrfchnum"></a>
## `requestBifRfChNum`

`luna://com.webos.service.micomservice/requestBifRfChNum`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifRfChNum '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbifversion"></a>
## `requestBifVersion`

`luna://com.webos.service.micomservice/requestBifVersion`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestBifVersion '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdisplaymicomversion"></a>
## `requestDisplayMicomVersion`

`luna://com.webos.service.micomservice/requestDisplayMicomVersion`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestDisplayMicomVersion '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requesthostreadycommand"></a>
## `requestHostReadyCommand`

`luna://com.webos.service.micomservice/requestHostReadyCommand`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestHostReadyCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestinstantcontrolcommand"></a>
## `requestInstantControlCommand`

`luna://com.webos.service.micomservice/requestInstantControlCommand`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestInstantControlCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpowercontrolcommand"></a>
## `requestPowerControlCommand`

`luna://com.webos.service.micomservice/requestPowerControlCommand`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestPowerControlCommand '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpoweronoffhistory"></a>
## `requestPowerOnOffHistory`

`luna://com.webos.service.micomservice/requestPowerOnOffHistory`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestPowerOnOffHistory '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestupdate"></a>
## `requestUpdate`

`luna://com.webos.service.micomservice/requestUpdate`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestUpdate '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestzerowattmicomversion"></a>
## `requestZerowattMicomVersion`

`luna://com.webos.service.micomservice/requestZerowattMicomVersion`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/requestZerowattMicomVersion '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetpoweronoffhistory"></a>
## `resetPowerOnOffHistory` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/resetPowerOnOffHistory`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/resetPowerOnOffHistory '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetwifivbus"></a>
## `resetWifiVbus` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/resetWifiVbus`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/resetWifiVbus '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendhotelkeyoperationmode"></a>
## `sendHotelKeyOperationMode`

`luna://com.webos.service.micomservice/sendHotelKeyOperationMode`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendHotelKeyOperationMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendkeycode"></a>
## `sendKeycode`

`luna://com.webos.service.micomservice/sendKeycode`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendKeycode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendpnwashkeylock"></a>
## `sendPNWashKeyLock`

`luna://com.webos.service.micomservice/sendPNWashKeyLock`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendPNWashKeyLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendwbmodeenable"></a>
## `sendWBModeEnable`

`luna://com.webos.service.micomservice/sendWBModeEnable`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/sendWBModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setapluscenterled"></a>
## `setAplusCenterLed`

`luna://com.webos.service.micomservice/setAplusCenterLed`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setAplusCenterLed '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaplusledbar"></a>
## `setAplusLedBar`

`luna://com.webos.service.micomservice/setAplusLedBar`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setAplusLedBar '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcphotkeylistlock"></a>
## `setCPHotKeyListLock`

`luna://com.webos.service.micomservice/setCPHotKeyListLock`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setCPHotKeyListLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcphotkeylock"></a>
## `setCPHotKeyLock`

`luna://com.webos.service.micomservice/setCPHotKeyLock`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setCPHotKeyLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setfactorykeysavemode"></a>
## `setFactoryKeySaveMode` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/setFactoryKeySaveMode`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setFactoryKeySaveMode '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethotelmodekeyoperation"></a>
## `setHotelModeKeyOperation`

`luna://com.webos.service.micomservice/setHotelModeKeyOperation`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setHotelModeKeyOperation '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpanelwashkeylock"></a>
## `setPanelWashKeyLock`

`luna://com.webos.service.micomservice/setPanelWashKeyLock`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setPanelWashKeyLock '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setrgbledtest"></a>
## `setRGBLedTest`

`luna://com.webos.service.micomservice/setRGBLedTest`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setRGBLedTest '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setspecialremoconmode"></a>
## `setSpecialRemoconMode`

`luna://com.webos.service.micomservice/setSpecialRemoconMode`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setSpecialRemoconMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwhitebalancemode"></a>
## `setWhiteBalanceMode`

`luna://com.webos.service.micomservice/setWhiteBalanceMode`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWhiteBalanceMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwoblemode"></a>
## `setWOBLEMode`

`luna://com.webos.service.micomservice/setWOBLEMode`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOBLEMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwolmode"></a>
## `setWOLMode`

`luna://com.webos.service.micomservice/setWOLMode`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOLMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwovmode"></a>
## `setWOVMode`

`luna://com.webos.service.micomservice/setWOVMode`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOVMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setwowlmode"></a>
## `setWOWLMode`

`luna://com.webos.service.micomservice/setWOWLMode`

Setter on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/setWOWLMode '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatebiffirmware"></a>
## `updateBifFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateBifFirmware`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateBifFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatedisplaymicomfirmware"></a>
## `updateDisplayMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateDisplayMicomFirmware`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateDisplayMicomFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatemicroledmicomfirmware"></a>
## `updateMicroLedMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateMicroLedMicomFirmware`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateMicroLedMicomFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewoblemodeenable"></a>
## `updateWOBLEModeEnable`

`luna://com.webos.service.micomservice/updateWOBLEModeEnable`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOBLEModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewolmodeenable"></a>
## `updateWOLModeEnable`

`luna://com.webos.service.micomservice/updateWOLModeEnable`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOLModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewovmodeenable"></a>
## `updateWOVModeEnable`

`luna://com.webos.service.micomservice/updateWOVModeEnable`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOVModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatewowlmodeenable"></a>
## `updateWOWLModeEnable`

`luna://com.webos.service.micomservice/updateWOWLModeEnable`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateWOWLModeEnable '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatezerowattmicomfirmware"></a>
## `updateZerowattMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.micomservice/updateZerowattMicomFirmware`

Method on com.webos.service.micomservice (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.micomservice/updateZerowattMicomFirmware '{}'
```

> ACG groups: all, private, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
