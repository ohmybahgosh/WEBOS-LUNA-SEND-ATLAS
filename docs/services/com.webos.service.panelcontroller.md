# `com.webos.service.panelcontroller`

Controls and monitors the display panel (OLED/LED): panel/TCON firmware and chip versions, OLED cell info and error logs, usage-time tracking and resolution.

60 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addOledPanelErrorLog`](#addoledpanelerrorlog) | public |  | display | inferred | Adds the oled panel error log. |
| [`backupPanelUsageTime`](#backuppanelusagetime) | public |  | display | inferred | Backs up the panel usage time. |
| [`getBackendChipVersion`](#getbackendchipversion) | public |  | display | inferred | Returns the backend chip version. |
| [`getCurrentLedFirmwareInfo`](#getcurrentledfirmwareinfo) | public |  | display | inferred | Returns the current LED firmware info. |
| [`getExternalFrcUpdateStatus`](#getexternalfrcupdatestatus) | public |  | display | inferred | Returns the external frc update status. |
| [`getInputLagOptimizationStatus`](#getinputlagoptimizationstatus) | private |  | display | inferred | Returns the input lag optimization status. |
| [`getManualGain`](#getmanualgain) | public |  | display | inferred | Returns the manual gain. |
| [`getMirrorMode`](#getmirrormode) | public |  | display | inferred | Returns the mirror mode. |
| [`getOledCellInfo`](#getoledcellinfo) | public |  | display | inferred | Returns the oled cell info. |
| [`getOledPanelErrorHistoryList`](#getoledpanelerrorhistorylist) | public |  | display | inferred | Returns the oled panel error history list. |
| [`getOledPanelMatching`](#getoledpanelmatching) | public |  | display | inferred | Returns the oled panel matching. |
| [`getOledTconI2CCheck`](#getoledtconi2ccheck) | public |  | display | inferred | Returns the oled tcon i 2 c check. |
| [`getOledTconInfo`](#getoledtconinfo) | public |  | display | inferred | Returns the oled tcon info. |
| [`getPanelMakerInfo`](#getpanelmakerinfo) | public |  | display | inferred | Returns the panel maker info. |
| [`getPanelResolution`](#getpanelresolution) | public |  | display | inferred | Returns the panel resolution. |
| [`getPanelTconPackageVersion`](#getpaneltconpackageversion) | public |  | display | inferred | Returns the panel tcon package version. |
| [`getPanelUsageTime`](#getpanelusagetime) | public |  | display | inferred | Returns the panel usage time. |
| [`getProperties`](#getproperties) | public |  | display | inferred | Returns the properties. |
| [`getPwmConfiguration`](#getpwmconfiguration) | public |  | display | inferred | Returns the pwm configuration. |
| [`getScreenMuteStatus`](#getscreenmutestatus) | public |  | display | inferred | Returns the screen mute status. |
| [`getSpreadSpectrum`](#getspreadspectrum) | public |  | display | inferred | Returns the spread spectrum. |
| [`getTouchFirmwareVersion`](#gettouchfirmwareversion) | public |  | display | inferred | Returns the touch firmware version. |
| [`getTscicDemuraOnOff`](#gettscicdemuraonoff) | public |  | display | inferred | Returns the tscic demura on off. |
| [`getTscicStatus`](#gettscicstatus) | public |  | display | inferred | Returns the tscic status. |
| [`getVACSupportStatus`](#getvacsupportstatus) | public |  | display | inferred | Returns the VAC support status. |
| [`getVcom`](#getvcom) | public |  | display | inferred | Returns the vcom. |
| [`getVirtualPanelMode`](#getvirtualpanelmode) | private |  | display | inferred | Returns the virtual panel mode. |
| [`isModeSelectAccessible`](#ismodeselectaccessible) | public |  | display | inferred | Reports whether the mode select accessible is set. |
| [`isOledScreenVisible`](#isoledscreenvisible) | public |  | display | inferred | Reports whether the oled screen visible is set. |
| [`isOledTconAccessible`](#isoledtconaccessible) | public |  | display | inferred | Reports whether the oled tcon accessible is set. |
| [`isPwmAccessible`](#ispwmaccessible) | public |  | display | inferred | Reports whether the pwm accessible is set. |
| [`isSupportOSLB`](#issupportoslb) | public |  | display | inferred | Reports whether the support OSLB is set. |
| [`isTconAccessible`](#istconaccessible) | public |  | display | inferred | Reports whether the tcon accessible is set. |
| [`listLedFirmwareFile`](#listledfirmwarefile) | public |  | display | inferred | Lists the LED firmware file. |
| [`resetVcom`](#resetvcom) | public |  | display | inferred | Resets the vcom. ⚠️ |
| [`saveManualGain`](#savemanualgain) | public |  | display | inferred | Saves the manual gain. |
| [`setAGP`](#setagp) | public |  | display | inferred | Sets the AGP. |
| [`setDftPanelOutputMode`](#setdftpaneloutputmode) | private |  | display | inferred | Sets the dft panel output mode. |
| [`setExternalFrcUpdateEnable`](#setexternalfrcupdateenable) | public |  | display | inferred | Sets the external frc update enable. |
| [`setManualGain`](#setmanualgain) | public |  | display | inferred | Sets the manual gain. |
| [`setModeSelect`](#setmodeselect) | public |  | display | inferred | Sets the mode select. |
| [`setMplusMode`](#setmplusmode) | public |  | display | inferred | Sets the mplus mode. |
| [`setOledDpcOnOff`](#setoleddpconoff) | public |  | display | inferred | Sets the oled dpc on off. |
| [`setOledPowerSequenceMode`](#setoledpowersequencemode) | public |  | power | inferred | Sets the oled power sequence mode. |
| [`setPanelUsageTime`](#setpanelusagetime) | public |  | display | inferred | Sets the panel usage time. |
| [`setPowerOffSequence`](#setpoweroffsequence) | public |  | power | inferred | Sets the power off sequence. |
| [`setProperties`](#setproperties) | public |  | display | inferred | Sets the properties. |
| [`setRepairMode`](#setrepairmode) | public |  | display | inferred | Sets the repair mode. |
| [`setScreenMute`](#setscreenmute) | public |  | display | inferred | Sets the screen mute. |
| [`setScreenOnOff`](#setscreenonoff) | ssap |  | display | documented | Toggle panel on/off (can behave differently from tvpower turnOn/OffScreen) |
| [`setSpreadSpectrum`](#setspreadspectrum) | public |  | display | inferred | Sets the spread spectrum. |
| [`setTscicDemuraOnOff`](#settscicdemuraonoff) | public |  | display | inferred | Sets the tscic demura on off. |
| [`setVACActive`](#setvacactive) | public |  | display | inferred | Sets the VAC active. |
| [`setVcom`](#setvcom) | public |  | display | inferred | Sets the vcom. |
| [`setVcomVideoProperty`](#setvcomvideoproperty) | public |  | display | inferred | Sets the vcom video property. |
| [`setVirtualPanelMode`](#setvirtualpanelmode) | private |  | display | inferred | Sets the virtual panel mode. |
| [`swapExternalChipImage`](#swapexternalchipimage) | public |  | display | inferred | Handles the swap external chip image. |
| [`updateExternalChipImage`](#updateexternalchipimage) | public |  | display | inferred | Updates the external chip image. |
| [`updateLLsDBbyScript`](#updatellsdbbyscript) | public |  | display | inferred | Updates the l ls d bby script. |
| [`updateTouchFirmware`](#updatetouchfirmware) | public |  | display | inferred | Updates the touch firmware. ⚠️ |

<a id="addoledpanelerrorlog"></a>
## `addOledPanelErrorLog`

`luna://com.webos.service.panelcontroller/addOledPanelErrorLog`

Adds the oled panel error log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/addOledPanelErrorLog '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="backuppanelusagetime"></a>
## `backupPanelUsageTime`

`luna://com.webos.service.panelcontroller/backupPanelUsageTime`

Backs up the panel usage time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/backupPanelUsageTime '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbackendchipversion"></a>
## `getBackendChipVersion`

`luna://com.webos.service.panelcontroller/getBackendChipVersion`

Returns the backend chip version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getBackendChipVersion '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentledfirmwareinfo"></a>
## `getCurrentLedFirmwareInfo`

`luna://com.webos.service.panelcontroller/getCurrentLedFirmwareInfo`

Returns the current LED firmware info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getCurrentLedFirmwareInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getexternalfrcupdatestatus"></a>
## `getExternalFrcUpdateStatus`

`luna://com.webos.service.panelcontroller/getExternalFrcUpdateStatus`

Returns the external frc update status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getExternalFrcUpdateStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinputlagoptimizationstatus"></a>
## `getInputLagOptimizationStatus`

`luna://com.webos.service.panelcontroller/getInputLagOptimizationStatus`

Returns the input lag optimization status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getInputLagOptimizationStatus '{}'
```

> ACG groups: all. Example reply (W22O 7.0): {"errorCode":3,"returnValue":false,"errorMessage":"Failed to validate against schema: Missing mandatory field: 'subscribe'"}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmanualgain"></a>
## `getManualGain`

`luna://com.webos.service.panelcontroller/getManualGain`

Returns the manual gain.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getManualGain '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmirrormode"></a>
## `getMirrorMode`

`luna://com.webos.service.panelcontroller/getMirrorMode`

Returns the mirror mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getMirrorMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoledcellinfo"></a>
## `getOledCellInfo`

`luna://com.webos.service.panelcontroller/getOledCellInfo`

Returns the oled cell info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getOledCellInfo '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"returnValue":true,"cellInfo":"08/70/1/03"}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoledpanelerrorhistorylist"></a>
## `getOledPanelErrorHistoryList`

`luna://com.webos.service.panelcontroller/getOledPanelErrorHistoryList`

Returns the oled panel error history list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getOledPanelErrorHistoryList '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"returnValue":true,"totalErrorCount":0}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoledpanelmatching"></a>
## `getOledPanelMatching`

`luna://com.webos.service.panelcontroller/getOledPanelMatching`

Returns the oled panel matching.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getOledPanelMatching '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoledtconi2ccheck"></a>
## `getOledTconI2CCheck`

`luna://com.webos.service.panelcontroller/getOledTconI2CCheck`

Returns the oled tcon i 2 c check.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getOledTconI2CCheck '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoledtconinfo"></a>
## `getOledTconInfo`

`luna://com.webos.service.panelcontroller/getOledTconInfo`

Returns the oled tcon info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getOledTconInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpanelmakerinfo"></a>
## `getPanelMakerInfo`

`luna://com.webos.service.panelcontroller/getPanelMakerInfo`

Returns the panel maker info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getPanelMakerInfo '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"returnValue":true,"code":"LGD","name":"RESERVED"}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpanelresolution"></a>
## `getPanelResolution`

`luna://com.webos.service.panelcontroller/getPanelResolution`

Returns the panel resolution.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getPanelResolution '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"width":3840,"returnValue":true,"resolution":"UD","height":2160}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaneltconpackageversion"></a>
## `getPanelTconPackageVersion`

`luna://com.webos.service.panelcontroller/getPanelTconPackageVersion`

Returns the panel tcon package version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getPanelTconPackageVersion '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpanelusagetime"></a>
## `getPanelUsageTime`

`luna://com.webos.service.panelcontroller/getPanelUsageTime`

Returns the panel usage time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getPanelUsageTime '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"errorCode":3,"returnValue":false,"errorMessage":"Failed to validate against schema: Missing mandatory field: 'subscribe'"}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.panelcontroller/getProperties`

Returns the properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getProperties '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpwmconfiguration"></a>
## `getPwmConfiguration`

`luna://com.webos.service.panelcontroller/getPwmConfiguration`

Returns the pwm configuration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getPwmConfiguration '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getscreenmutestatus"></a>
## `getScreenMuteStatus`

`luna://com.webos.service.panelcontroller/getScreenMuteStatus`

Returns the screen mute status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getScreenMuteStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getspreadspectrum"></a>
## `getSpreadSpectrum`

`luna://com.webos.service.panelcontroller/getSpreadSpectrum`

Returns the spread spectrum.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getSpreadSpectrum '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettouchfirmwareversion"></a>
## `getTouchFirmwareVersion`

`luna://com.webos.service.panelcontroller/getTouchFirmwareVersion`

Returns the touch firmware version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getTouchFirmwareVersion '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettscicdemuraonoff"></a>
## `getTscicDemuraOnOff`

`luna://com.webos.service.panelcontroller/getTscicDemuraOnOff`

Returns the tscic demura on off.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getTscicDemuraOnOff '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"errorCode":3,"returnValue":false,"errorMessage":"Failed to validate against schema: Missing mandatory field: 'subscribe'"}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettscicstatus"></a>
## `getTscicStatus`

`luna://com.webos.service.panelcontroller/getTscicStatus`

Returns the tscic status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getTscicStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvacsupportstatus"></a>
## `getVACSupportStatus`

`luna://com.webos.service.panelcontroller/getVACSupportStatus`

Returns the VAC support status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getVACSupportStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvcom"></a>
## `getVcom`

`luna://com.webos.service.panelcontroller/getVcom`

Returns the vcom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getVcom '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvirtualpanelmode"></a>
## `getVirtualPanelMode`

`luna://com.webos.service.panelcontroller/getVirtualPanelMode`

Returns the virtual panel mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/getVirtualPanelMode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ismodeselectaccessible"></a>
## `isModeSelectAccessible`

`luna://com.webos.service.panelcontroller/isModeSelectAccessible`

Reports whether the mode select accessible is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/isModeSelectAccessible '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isoledscreenvisible"></a>
## `isOledScreenVisible`

`luna://com.webos.service.panelcontroller/isOledScreenVisible`

Reports whether the oled screen visible is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/isOledScreenVisible '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isoledtconaccessible"></a>
## `isOledTconAccessible`

`luna://com.webos.service.panelcontroller/isOledTconAccessible`

Reports whether the oled tcon accessible is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/isOledTconAccessible '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ispwmaccessible"></a>
## `isPwmAccessible`

`luna://com.webos.service.panelcontroller/isPwmAccessible`

Reports whether the pwm accessible is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/isPwmAccessible '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="issupportoslb"></a>
## `isSupportOSLB`

`luna://com.webos.service.panelcontroller/isSupportOSLB`

Reports whether the support OSLB is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/isSupportOSLB '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="istconaccessible"></a>
## `isTconAccessible`

`luna://com.webos.service.panelcontroller/isTconAccessible`

Reports whether the tcon accessible is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/isTconAccessible '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listledfirmwarefile"></a>
## `listLedFirmwareFile`

`luna://com.webos.service.panelcontroller/listLedFirmwareFile`

Lists the LED firmware file.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/listLedFirmwareFile '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetvcom"></a>
## `resetVcom` ⚠️ DANGEROUS

`luna://com.webos.service.panelcontroller/resetVcom`

Resets the vcom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/resetVcom '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="savemanualgain"></a>
## `saveManualGain`

`luna://com.webos.service.panelcontroller/saveManualGain`

Saves the manual gain.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/saveManualGain '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setagp"></a>
## `setAGP`

`luna://com.webos.service.panelcontroller/setAGP`

Sets the AGP.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setAGP '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdftpaneloutputmode"></a>
## `setDftPanelOutputMode`

`luna://com.webos.service.panelcontroller/setDftPanelOutputMode`

Sets the dft panel output mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setDftPanelOutputMode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setexternalfrcupdateenable"></a>
## `setExternalFrcUpdateEnable`

`luna://com.webos.service.panelcontroller/setExternalFrcUpdateEnable`

Sets the external frc update enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setExternalFrcUpdateEnable '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmanualgain"></a>
## `setManualGain`

`luna://com.webos.service.panelcontroller/setManualGain`

Sets the manual gain.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setManualGain '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmodeselect"></a>
## `setModeSelect`

`luna://com.webos.service.panelcontroller/setModeSelect`

Sets the mode select.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setModeSelect '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmplusmode"></a>
## `setMplusMode`

`luna://com.webos.service.panelcontroller/setMplusMode`

Sets the mplus mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setMplusMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoleddpconoff"></a>
## `setOledDpcOnOff`

`luna://com.webos.service.panelcontroller/setOledDpcOnOff`

Sets the oled dpc on off.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setOledDpcOnOff '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoledpowersequencemode"></a>
## `setOledPowerSequenceMode`

`luna://com.webos.service.panelcontroller/setOledPowerSequenceMode`

Sets the oled power sequence mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setOledPowerSequenceMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpanelusagetime"></a>
## `setPanelUsageTime`

`luna://com.webos.service.panelcontroller/setPanelUsageTime`

Sets the panel usage time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setPanelUsageTime '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpoweroffsequence"></a>
## `setPowerOffSequence`

`luna://com.webos.service.panelcontroller/setPowerOffSequence`

Sets the power off sequence.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setPowerOffSequence '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.panelcontroller/setProperties`

Sets the properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setProperties '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setrepairmode"></a>
## `setRepairMode`

`luna://com.webos.service.panelcontroller/setRepairMode`

Sets the repair mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setRepairMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setscreenmute"></a>
## `setScreenMute`

`luna://com.webos.service.panelcontroller/setScreenMute`

Sets the screen mute.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setScreenMute '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setscreenonoff"></a>
## `setScreenOnOff`

`luna://com.webos.service.panelcontroller/setScreenOnOff`

Toggle panel on/off (can behave differently from tvpower turnOn/OffScreen)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `OnOff` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.panelcontroller/setScreenOnOff","payload":{"OnOff":false}}
```

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)

<a id="setspreadspectrum"></a>
## `setSpreadSpectrum`

`luna://com.webos.service.panelcontroller/setSpreadSpectrum`

Sets the spread spectrum.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setSpreadSpectrum '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settscicdemuraonoff"></a>
## `setTscicDemuraOnOff`

`luna://com.webos.service.panelcontroller/setTscicDemuraOnOff`

Sets the tscic demura on off.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setTscicDemuraOnOff '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvacactive"></a>
## `setVACActive`

`luna://com.webos.service.panelcontroller/setVACActive`

Sets the VAC active.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setVACActive '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvcom"></a>
## `setVcom`

`luna://com.webos.service.panelcontroller/setVcom`

Sets the vcom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setVcom '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvcomvideoproperty"></a>
## `setVcomVideoProperty`

`luna://com.webos.service.panelcontroller/setVcomVideoProperty`

Sets the vcom video property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setVcomVideoProperty '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvirtualpanelmode"></a>
## `setVirtualPanelMode`

`luna://com.webos.service.panelcontroller/setVirtualPanelMode`

Sets the virtual panel mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/setVirtualPanelMode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="swapexternalchipimage"></a>
## `swapExternalChipImage`

`luna://com.webos.service.panelcontroller/swapExternalChipImage`

Handles the swap external chip image.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/swapExternalChipImage '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateexternalchipimage"></a>
## `updateExternalChipImage`

`luna://com.webos.service.panelcontroller/updateExternalChipImage`

Updates the external chip image.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/updateExternalChipImage '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatellsdbbyscript"></a>
## `updateLLsDBbyScript`

`luna://com.webos.service.panelcontroller/updateLLsDBbyScript`

Updates the l ls d bby script.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/updateLLsDBbyScript '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatetouchfirmware"></a>
## `updateTouchFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.panelcontroller/updateTouchFirmware`

Updates the touch firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.panelcontroller/updateTouchFirmware '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
