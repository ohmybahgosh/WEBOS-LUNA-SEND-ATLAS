# `com.webos.service.factorymanager`

Factory/production manager: runs factory test commands, performs calibration (ADC, Vcom, white balance), controls LED bar and test patterns, and gets/sets factory options and keys. Flagged dangerous by name. _(inferred from the service's methods)_

22 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkNFCTagAdj`](#checknfctagadj) | private |  | system-info | inferred | Checks the NFC tag adj. |
| [`doFirstUseCompleted`](#dofirstusecompleted) | private |  | system-info | inferred | Handles the do first use completed. |
| [`getAdcCalibrationMode`](#getadccalibrationmode) | private |  | system-info | inferred | Returns the adc calibration mode. |
| [`getAdcCalibrationStatus`](#getadccalibrationstatus) | private |  | system-info | inferred | Returns the adc calibration status. |
| [`getEdidStatus`](#getedidstatus) | private |  | system-info | inferred | Returns the EDID status. |
| [`getFactoryChannelChangeParam`](#getfactorychannelchangeparam) | private |  | system-info | inferred | Returns the factory channel change param. |
| [`getFactoryOpt`](#getfactoryopt) | private |  | system-info | inferred | Returns the factory opt. |
| [`getFactoryParam`](#getfactoryparam) | private |  | system-info | inferred | Returns the factory param. |
| [`getPOnlyKeyState`](#getponlykeystate) | private |  | system-info | inferred | Returns the p only key state. |
| [`getTestPatternColor`](#gettestpatterncolor) | private |  | system-info | inferred | Returns the test pattern color. |
| [`ledBarCtrl`](#ledbarctrl) | private |  | db | inferred | Handles the LED bar ctrl. |
| [`requestFactoryCommand`](#requestfactorycommand) | private |  | system-info | inferred | Requests the factory command. ⚠️ |
| [`resetVcom`](#resetvcom) | private |  | system-info | inferred | Resets the vcom. ⚠️ |
| [`resetWhiteBalance`](#resetwhitebalance) | private |  | system-info | inferred | Resets the white balance. ⚠️ |
| [`saveToolOptionValue`](#savetooloptionvalue) | private |  | system-info | inferred | Saves the tool option value. |
| [`saveVcomResult`](#savevcomresult) | private |  | system-info | inferred | Saves the vcom result. |
| [`setFactoryKey`](#setfactorykey) | private |  | system-info | inferred | Sets the factory key. ⚠️ |
| [`setFactoryOpt`](#setfactoryopt) | private |  | system-info | inferred | Sets the factory opt. ⚠️ |
| [`setMicomKey`](#setmicomkey) | private |  | system-info | inferred | Sets the MICOM key. |
| [`setStateResult`](#setstateresult) | private |  | system-info | inferred | Sets the state result. |
| [`setTestPatternColor`](#settestpatterncolor) | private |  | system-info | inferred | Sets the test pattern color. |
| [`test`](#test) | private |  | system-info | inferred | Tests the factorymanager. |

<a id="checknfctagadj"></a>
## `checkNFCTagAdj`

`luna://com.webos.service.factorymanager/checkNFCTagAdj`

Checks the NFC tag adj.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/checkNFCTagAdj '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dofirstusecompleted"></a>
## `doFirstUseCompleted`

`luna://com.webos.service.factorymanager/doFirstUseCompleted`

Handles the do first use completed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/doFirstUseCompleted '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getadccalibrationmode"></a>
## `getAdcCalibrationMode`

`luna://com.webos.service.factorymanager/getAdcCalibrationMode`

Returns the adc calibration mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getAdcCalibrationMode '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getadccalibrationstatus"></a>
## `getAdcCalibrationStatus`

`luna://com.webos.service.factorymanager/getAdcCalibrationStatus`

Returns the adc calibration status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getAdcCalibrationStatus '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getedidstatus"></a>
## `getEdidStatus`

`luna://com.webos.service.factorymanager/getEdidStatus`

Returns the EDID status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getEdidStatus '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfactorychannelchangeparam"></a>
## `getFactoryChannelChangeParam`

`luna://com.webos.service.factorymanager/getFactoryChannelChangeParam`

Returns the factory channel change param.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getFactoryChannelChangeParam '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfactoryopt"></a>
## `getFactoryOpt`

`luna://com.webos.service.factorymanager/getFactoryOpt`

Returns the factory opt.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getFactoryOpt '{}'
```

> ACG groups: factorymanager.service, private, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfactoryparam"></a>
## `getFactoryParam`

`luna://com.webos.service.factorymanager/getFactoryParam`

Returns the factory param.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getFactoryParam '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getponlykeystate"></a>
## `getPOnlyKeyState`

`luna://com.webos.service.factorymanager/getPOnlyKeyState`

Returns the p only key state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getPOnlyKeyState '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettestpatterncolor"></a>
## `getTestPatternColor`

`luna://com.webos.service.factorymanager/getTestPatternColor`

Returns the test pattern color.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/getTestPatternColor '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ledbarctrl"></a>
## `ledBarCtrl`

`luna://com.webos.service.factorymanager/ledBarCtrl`

Handles the LED bar ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/ledBarCtrl '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestfactorycommand"></a>
## `requestFactoryCommand` ⚠️ DANGEROUS

`luna://com.webos.service.factorymanager/requestFactoryCommand`

Requests the factory command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/requestFactoryCommand '{}'
```

> ACG groups: factorymanager.service, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetvcom"></a>
## `resetVcom` ⚠️ DANGEROUS

`luna://com.webos.service.factorymanager/resetVcom`

Resets the vcom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/resetVcom '{}'
```

> ACG groups: factorymanager.service, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetwhitebalance"></a>
## `resetWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.factorymanager/resetWhiteBalance`

Resets the white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/resetWhiteBalance '{}'
```

> ACG groups: factorymanager.service, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="savetooloptionvalue"></a>
## `saveToolOptionValue`

`luna://com.webos.service.factorymanager/saveToolOptionValue`

Saves the tool option value.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/saveToolOptionValue '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="savevcomresult"></a>
## `saveVcomResult`

`luna://com.webos.service.factorymanager/saveVcomResult`

Saves the vcom result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/saveVcomResult '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setfactorykey"></a>
## `setFactoryKey` ⚠️ DANGEROUS

`luna://com.webos.service.factorymanager/setFactoryKey`

Sets the factory key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/setFactoryKey '{}'
```

> ACG groups: factorymanager.service, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setfactoryopt"></a>
## `setFactoryOpt` ⚠️ DANGEROUS

`luna://com.webos.service.factorymanager/setFactoryOpt`

Sets the factory opt.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/setFactoryOpt '{}'
```

> ACG groups: factorymanager.service, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmicomkey"></a>
## `setMicomKey`

`luna://com.webos.service.factorymanager/setMicomKey`

Sets the MICOM key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/setMicomKey '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setstateresult"></a>
## `setStateResult`

`luna://com.webos.service.factorymanager/setStateResult`

Sets the state result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/setStateResult '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settestpatterncolor"></a>
## `setTestPatternColor`

`luna://com.webos.service.factorymanager/setTestPatternColor`

Sets the test pattern color.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/setTestPatternColor '{}'
```

> ACG groups: factorymanager.service, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.factorymanager/test`

Tests the factorymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.factorymanager/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
