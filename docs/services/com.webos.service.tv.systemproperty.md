# `com.webos.service.tv.systemproperty`

TV system-property service: resets to factory/user defaults, reads/writes EDID and white balance, maps inputs, and controls the motorized 'flex' stand (position, motor calibration). _(inferred from the service's methods)_

73 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`doFactoryDefault`](#dofactorydefault) | private |  | system-info | documented | Factory default operation (listed in Powback capabilities audit under panel calibration/service-menu controls) ⚠️ |
| [`doUserDefault`](#douserdefault) | private |  | system-info | documented | Factory reset / user-default restore. The db8 no-space handler calls it right after the comment "do factory reset" ⚠️ |
| [`downloadEdid`](#downloadedid) | private |  | system-info | inferred | Downloads the EDID. ⚠️ |
| [`enableNpointWhiteBalance`](#enablenpointwhitebalance) | private |  | system-info | inferred | Enables the npoint white balance. |
| [`findInputMap`](#findinputmap) | private |  | system-info | inferred | Handles the find input map. |
| [`flexGetAbnormalList`](#flexgetabnormallist) | private |  | system-info | inferred | Handles the flex get abnormal list. |
| [`flexGetMotorAutoTest`](#flexgetmotorautotest) | private |  | system-info | inferred | Handles the flex get motor auto test. |
| [`flexGetMotorComp`](#flexgetmotorcomp) | private |  | system-info | inferred | Handles the flex get motor comp. |
| [`flexGetMotorRepeatCount`](#flexgetmotorrepeatcount) | private |  | system-info | inferred | Handles the flex get motor repeat count. |
| [`flexGetMotorSpeed`](#flexgetmotorspeed) | private |  | system-info | inferred | Handles the flex get motor speed. |
| [`flexGetMotorValue`](#flexgetmotorvalue) | private |  | system-info | inferred | Handles the flex get motor value. |
| [`flexGetPosition`](#flexgetposition) | private |  | system-info | inferred | Handles the flex get position. |
| [`flexMotorStatus`](#flexmotorstatus) | private |  | system-info | inferred | Handles the flex motor status. |
| [`flexSaveMotorValue`](#flexsavemotorvalue) | private |  | system-info | inferred | Handles the flex save motor value. |
| [`flexSetFakeInit`](#flexsetfakeinit) | private |  | system-info | inferred | Handles the flex set fake init. ⚠️ |
| [`flexSetMotorAutoTest`](#flexsetmotorautotest) | private |  | system-info | inferred | Handles the flex set motor auto test. |
| [`flexSetMotorComp`](#flexsetmotorcomp) | private |  | system-info | inferred | Handles the flex set motor comp. |
| [`flexSetPosition`](#flexsetposition) | private |  | system-info | inferred | Handles the flex set position. |
| [`flexSetStepMotor`](#flexsetstepmotor) | private |  | system-info | inferred | Handles the flex set step motor. ⚠️ |
| [`getAdcCalibrationMode`](#getadccalibrationmode) | private |  | system-info | inferred | Returns the adc calibration mode. |
| [`getAdcCalibrationModeList`](#getadccalibrationmodelist) | private |  | system-info | inferred | Returns the adc calibration mode list. |
| [`getAdcCalibrationStatus`](#getadccalibrationstatus) | private |  | system-info | inferred | Returns the adc calibration status. |
| [`getAdcCalibrationValue`](#getadccalibrationvalue) | private |  | system-info | inferred | Returns the adc calibration value. |
| [`getCurrentInputMap`](#getcurrentinputmap) | private |  | system-info | inferred | Returns the current input map. |
| [`getEdidData`](#getediddata) | private |  | system-info | documented | Reads EDID data of an HDMI input |
| [`getEdidStatus`](#getedidstatus) | private |  | system-info | inferred | Returns the EDID status. |
| [`getFanStatus`](#getfanstatus) | private |  | system-info | inferred | Returns the fan status. |
| [`getHDMIErrorHistory`](#gethdmierrorhistory) | private |  | system-info | inferred | Returns the HDMI error history. |
| [`getHDMIErrorHistoryCount`](#gethdmierrorhistorycount) | private |  | system-info | inferred | Returns the HDMI error history count. |
| [`getInputMap`](#getinputmap) | private |  | system-info | inferred | Returns the input map. |
| [`getInputMapInfo`](#getinputmapinfo) | private |  | system-info | inferred | Returns the input map info. |
| [`getMemoryReport`](#getmemoryreport) | private |  | system-info | inferred | Returns the memory report. |
| [`getMemoryUsage`](#getmemoryusage) | private |  | system-info | inferred | Returns the memory usage. |
| [`getMotionStatus`](#getmotionstatus) | private |  | system-info | inferred | Returns the motion status. |
| [`getMSensorInfo`](#getmsensorinfo) | private |  | system-info | inferred | Returns the m sensor info. |
| [`getNpointWhiteBalance`](#getnpointwhitebalance) | private |  | system-info | inferred | Returns the npoint white balance. |
| [`getOLEDAplDiffThreshold`](#getoledapldiffthreshold) | private |  | system-info | inferred | Returns the OLED apl diff threshold. |
| [`getPgamma`](#getpgamma) | private |  | system-info | inferred | Returns the pgamma. |
| [`getPgammaCount`](#getpgammacount) | private |  | system-info | inferred | Returns the pgamma count. |
| [`getPgammaMode`](#getpgammamode) | private |  | system-info | inferred | Returns the pgamma mode. |
| [`getPowerOffReason`](#getpoweroffreason) | private |  | system-info | inferred | Returns the power off reason. |
| [`getPowerOffReasonCount`](#getpoweroffreasoncount) | private |  | system-info | inferred | Returns the power off reason count. |
| [`getProperties`](#getproperties) | private |  | system-info | inferred | Returns the properties. |
| [`getSystemInfo`](#getsysteminfo) | public | yes | system-info | documented | Retrieves system information by keys: boardType, firmwareVersion, modelName, sdkVersion, UHD, _3d. |
| [`getSystemProperties`](#getsystemproperties) | private |  | system-info | documented | Reads system properties such as panelUsageTime (10-minute units) |
| [`getTempSensorStatus`](#gettempsensorstatus) | private |  | system-info | inferred | Returns the temp sensor status. |
| [`getTwinTunerLNAControl`](#gettwintunerlnacontrol) | private |  | system-info | inferred | Returns the twin tuner LNA control. |
| [`getVcom`](#getvcom) | private |  | system-info | inferred | Returns the vcom. |
| [`getWhiteBalance`](#getwhitebalance) | private |  | system-info | inferred | Returns the white balance. |
| [`resetAdcCalibration`](#resetadccalibration) | private |  | system-info | inferred | Resets the adc calibration. ⚠️ |
| [`resetEdid`](#resetedid) | private |  | system-info | inferred | Resets the EDID. ⚠️ |
| [`resetHDMIErrorHistory`](#resethdmierrorhistory) | private |  | system-info | inferred | Resets the HDMI error history. |
| [`resetNpointWhiteBalance`](#resetnpointwhitebalance) | private |  | system-info | inferred | Resets the npoint white balance. |
| [`resetPowerOffReason`](#resetpoweroffreason) | private |  | system-info | inferred | Resets the power off reason. |
| [`resetVcom`](#resetvcom) | private |  | system-info | inferred | Resets the vcom. ⚠️ |
| [`resetWhiteBalance`](#resetwhitebalance) | private |  | system-info | inferred | Resets the white balance. |
| [`savePgamma`](#savepgamma) | private |  | system-info | inferred | Saves the pgamma. ⚠️ |
| [`saveToolOptionValue`](#savetooloptionvalue) | private |  | system-info | inferred | Saves the tool option value. |
| [`setAdcCalibrationValue`](#setadccalibrationvalue) | private |  | system-info | inferred | Sets the adc calibration value. ⚠️ |
| [`setCurrentInputMap`](#setcurrentinputmap) | private |  | system-info | inferred | Sets the current input map. |
| [`setMSensorInfo`](#setmsensorinfo) | private |  | system-info | inferred | Sets the m sensor info. |
| [`setNpointWhiteBalance`](#setnpointwhitebalance) | private |  | system-info | inferred | Sets the npoint white balance. ⚠️ |
| [`setOLEDAplDiffThreshold`](#setoledapldiffthreshold) | private |  | system-info | inferred | Sets the OLED apl diff threshold. |
| [`setPgamma`](#setpgamma) | private |  | system-info | inferred | Sets the pgamma. ⚠️ |
| [`setPgammaMode`](#setpgammamode) | private |  | system-info | inferred | Sets the pgamma mode. |
| [`setProperties`](#setproperties) | private |  | settings | documented | Writes system properties (ColorControl SetSystemProperty; Glasshouse toggles OLED TPC/GSR flags OledTPC/OledGSR) ⚠️ |
| [`setTestPattern`](#settestpattern) | private |  | system-info | inferred | Sets the test pattern. |
| [`setTwinTunerLNAControl`](#settwintunerlnacontrol) | private |  | system-info | inferred | Sets the twin tuner LNA control. |
| [`setUserInputMap`](#setuserinputmap) | private |  | system-info | inferred | Sets the user input map. |
| [`setVcom`](#setvcom) | private |  | system-info | inferred | Sets the vcom. ⚠️ |
| [`setWBDefaultMode`](#setwbdefaultmode) | private |  | system-info | inferred | Sets the WB default mode. |
| [`setWhiteBalance`](#setwhitebalance) | private |  | system-info | inferred | Sets the white balance. ⚠️ |
| [`startAdcCalibration`](#startadccalibration) | private |  | system-info | inferred | Starts the adc calibration. ⚠️ |

<a id="dofactorydefault"></a>
## `doFactoryDefault` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/doFactoryDefault`

Factory default operation (listed in Powback capabilities audit under panel calibration/service-menu controls)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/doFactoryDefault '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Name suggests a factory reset of calibration/system properties; not executed by researchers.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="douserdefault"></a>
## `doUserDefault` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/doUserDefault`

Factory reset / user-default restore. The db8 no-space handler calls it right after the comment "do factory reset"

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tv.systemproperty/doUserDefault '{}'
```

> NEVER run on a live TV: wipes user data.

Sources: [1](https://github.com/webosose/db8/blob/HEAD/files/scripts/errorNoSpace.bash)

<a id="downloadedid"></a>
## `downloadEdid` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/downloadEdid`

Downloads the EDID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/downloadEdid '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enablenpointwhitebalance"></a>
## `enableNpointWhiteBalance`

`luna://com.webos.service.tv.systemproperty/enableNpointWhiteBalance`

Enables the npoint white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/enableNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="findinputmap"></a>
## `findInputMap`

`luna://com.webos.service.tv.systemproperty/findInputMap`

Handles the find input map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/findInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetabnormallist"></a>
## `flexGetAbnormalList`

`luna://com.webos.service.tv.systemproperty/flexGetAbnormalList`

Handles the flex get abnormal list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetAbnormalList '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorautotest"></a>
## `flexGetMotorAutoTest`

`luna://com.webos.service.tv.systemproperty/flexGetMotorAutoTest`

Handles the flex get motor auto test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorAutoTest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorcomp"></a>
## `flexGetMotorComp`

`luna://com.webos.service.tv.systemproperty/flexGetMotorComp`

Handles the flex get motor comp.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorComp '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorrepeatcount"></a>
## `flexGetMotorRepeatCount`

`luna://com.webos.service.tv.systemproperty/flexGetMotorRepeatCount`

Handles the flex get motor repeat count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorRepeatCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorspeed"></a>
## `flexGetMotorSpeed`

`luna://com.webos.service.tv.systemproperty/flexGetMotorSpeed`

Handles the flex get motor speed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorSpeed '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorvalue"></a>
## `flexGetMotorValue`

`luna://com.webos.service.tv.systemproperty/flexGetMotorValue`

Handles the flex get motor value.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetposition"></a>
## `flexGetPosition`

`luna://com.webos.service.tv.systemproperty/flexGetPosition`

Handles the flex get position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetPosition '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexmotorstatus"></a>
## `flexMotorStatus`

`luna://com.webos.service.tv.systemproperty/flexMotorStatus`

Handles the flex motor status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexMotorStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsavemotorvalue"></a>
## `flexSaveMotorValue`

`luna://com.webos.service.tv.systemproperty/flexSaveMotorValue`

Handles the flex save motor value.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSaveMotorValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetfakeinit"></a>
## `flexSetFakeInit` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/flexSetFakeInit`

Handles the flex set fake init.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetFakeInit '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetmotorautotest"></a>
## `flexSetMotorAutoTest`

`luna://com.webos.service.tv.systemproperty/flexSetMotorAutoTest`

Handles the flex set motor auto test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetMotorAutoTest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetmotorcomp"></a>
## `flexSetMotorComp`

`luna://com.webos.service.tv.systemproperty/flexSetMotorComp`

Handles the flex set motor comp.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetMotorComp '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetposition"></a>
## `flexSetPosition`

`luna://com.webos.service.tv.systemproperty/flexSetPosition`

Handles the flex set position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetPosition '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetstepmotor"></a>
## `flexSetStepMotor` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/flexSetStepMotor`

Handles the flex set step motor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetStepMotor '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationmode"></a>
## `getAdcCalibrationMode`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationMode`

Returns the adc calibration mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationmodelist"></a>
## `getAdcCalibrationModeList`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationModeList`

Returns the adc calibration mode list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationModeList '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationstatus"></a>
## `getAdcCalibrationStatus`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationStatus`

Returns the adc calibration status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationvalue"></a>
## `getAdcCalibrationValue`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationValue`

Returns the adc calibration value.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getcurrentinputmap"></a>
## `getCurrentInputMap`

`luna://com.webos.service.tv.systemproperty/getCurrentInputMap`

Returns the current input map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getCurrentInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getediddata"></a>
## `getEdidData`

`luna://com.webos.service.tv.systemproperty/getEdidData`

Reads EDID data of an HDMI input

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `inputType` | number |
| `...` | further fields unread |

```sh
luna-send -n 1 luna://com.webos.service.tv.systemproperty/getEdidData '{"inputType":0}'
```

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/audio.js)

<a id="getedidstatus"></a>
## `getEdidStatus`

`luna://com.webos.service.tv.systemproperty/getEdidStatus`

Returns the EDID status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getEdidStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getfanstatus"></a>
## `getFanStatus`

`luna://com.webos.service.tv.systemproperty/getFanStatus`

Returns the fan status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getFanStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethdmierrorhistory"></a>
## `getHDMIErrorHistory`

`luna://com.webos.service.tv.systemproperty/getHDMIErrorHistory`

Returns the HDMI error history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getHDMIErrorHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethdmierrorhistorycount"></a>
## `getHDMIErrorHistoryCount`

`luna://com.webos.service.tv.systemproperty/getHDMIErrorHistoryCount`

Returns the HDMI error history count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getHDMIErrorHistoryCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getinputmap"></a>
## `getInputMap`

`luna://com.webos.service.tv.systemproperty/getInputMap`

Returns the input map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getinputmapinfo"></a>
## `getInputMapInfo`

`luna://com.webos.service.tv.systemproperty/getInputMapInfo`

Returns the input map info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getInputMapInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmemoryreport"></a>
## `getMemoryReport`

`luna://com.webos.service.tv.systemproperty/getMemoryReport`

Returns the memory report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMemoryReport '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmemoryusage"></a>
## `getMemoryUsage`

`luna://com.webos.service.tv.systemproperty/getMemoryUsage`

Returns the memory usage.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMemoryUsage '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmotionstatus"></a>
## `getMotionStatus`

`luna://com.webos.service.tv.systemproperty/getMotionStatus`

Returns the motion status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMotionStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmsensorinfo"></a>
## `getMSensorInfo`

`luna://com.webos.service.tv.systemproperty/getMSensorInfo`

Returns the m sensor info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMSensorInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getnpointwhitebalance"></a>
## `getNpointWhiteBalance`

`luna://com.webos.service.tv.systemproperty/getNpointWhiteBalance`

Returns the npoint white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getoledapldiffthreshold"></a>
## `getOLEDAplDiffThreshold`

`luna://com.webos.service.tv.systemproperty/getOLEDAplDiffThreshold`

Returns the OLED apl diff threshold.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getOLEDAplDiffThreshold '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpgamma"></a>
## `getPgamma`

`luna://com.webos.service.tv.systemproperty/getPgamma`

Returns the pgamma.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPgamma '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpgammacount"></a>
## `getPgammaCount`

`luna://com.webos.service.tv.systemproperty/getPgammaCount`

Returns the pgamma count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPgammaCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpgammamode"></a>
## `getPgammaMode`

`luna://com.webos.service.tv.systemproperty/getPgammaMode`

Returns the pgamma mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPgammaMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpoweroffreason"></a>
## `getPowerOffReason`

`luna://com.webos.service.tv.systemproperty/getPowerOffReason`

Returns the power off reason.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPowerOffReason '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpoweroffreasoncount"></a>
## `getPowerOffReasonCount`

`luna://com.webos.service.tv.systemproperty/getPowerOffReasonCount`

Returns the power off reason count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPowerOffReasonCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.tv.systemproperty/getProperties`

Returns the properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getProperties '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: activities.callbacks, private, tv.settings, configurator.callbacks, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getsysteminfo"></a>
## `getSystemInfo`

`luna://com.webos.service.tv.systemproperty/getSystemInfo`

Retrieves system information by keys: boardType, firmwareVersion, modelName, sdkVersion, UHD, _3d.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted); webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | String array (required) |
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.tv.systemproperty/getSystemInfo '{"keys":["modelName","firmwareVersion","UHD","sdkVersion"]}'
```

> firmwareVersion and modelName require user agreement setting; boardType not supported in emulator. \|\| Public. Used by webosbrew rooting gist to read otaId; dev-manager reads firmwareVersion, modelName, sdkVersion, otaId.

Sources: [1](https://webostv.developer.lge.com/develop/references/tv-device-information), [2](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/device-manager.service.ts), [3](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/home-takeover.sh)

<a id="getsystemproperties"></a>
## `getSystemProperties`

`luna://com.webos.service.tv.systemproperty/getSystemProperties`

Reads system properties such as panelUsageTime (10-minute units)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | string[] |

```sh
luna-send -n 1 luna://com.webos.service.tv.systemproperty/getSystemProperties '{"keys":["panelUsageTime"]}'
```

> Divide panelUsageTime by 6 for hours (Glasshouse).

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/IMPLEMENTATION.md), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/telemetry.js)

<a id="gettempsensorstatus"></a>
## `getTempSensorStatus`

`luna://com.webos.service.tv.systemproperty/getTempSensorStatus`

Returns the temp sensor status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getTempSensorStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gettwintunerlnacontrol"></a>
## `getTwinTunerLNAControl`

`luna://com.webos.service.tv.systemproperty/getTwinTunerLNAControl`

Returns the twin tuner LNA control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getTwinTunerLNAControl '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getvcom"></a>
## `getVcom`

`luna://com.webos.service.tv.systemproperty/getVcom`

Returns the vcom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getVcom '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getwhitebalance"></a>
## `getWhiteBalance`

`luna://com.webos.service.tv.systemproperty/getWhiteBalance`

Returns the white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetadccalibration"></a>
## `resetAdcCalibration` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/resetAdcCalibration`

Resets the adc calibration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetAdcCalibration '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetedid"></a>
## `resetEdid` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/resetEdid`

Resets the EDID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetEdid '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resethdmierrorhistory"></a>
## `resetHDMIErrorHistory`

`luna://com.webos.service.tv.systemproperty/resetHDMIErrorHistory`

Resets the HDMI error history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetHDMIErrorHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetnpointwhitebalance"></a>
## `resetNpointWhiteBalance`

`luna://com.webos.service.tv.systemproperty/resetNpointWhiteBalance`

Resets the npoint white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetpoweroffreason"></a>
## `resetPowerOffReason`

`luna://com.webos.service.tv.systemproperty/resetPowerOffReason`

Resets the power off reason.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetPowerOffReason '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetvcom"></a>
## `resetVcom` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/resetVcom`

Resets the vcom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetVcom '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetwhitebalance"></a>
## `resetWhiteBalance`

`luna://com.webos.service.tv.systemproperty/resetWhiteBalance`

Resets the white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="savepgamma"></a>
## `savePgamma` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/savePgamma`

Saves the pgamma.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/savePgamma '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="savetooloptionvalue"></a>
## `saveToolOptionValue`

`luna://com.webos.service.tv.systemproperty/saveToolOptionValue`

Saves the tool option value.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/saveToolOptionValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setadccalibrationvalue"></a>
## `setAdcCalibrationValue` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setAdcCalibrationValue`

Sets the adc calibration value.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setAdcCalibrationValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setcurrentinputmap"></a>
## `setCurrentInputMap`

`luna://com.webos.service.tv.systemproperty/setCurrentInputMap`

Sets the current input map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setCurrentInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setmsensorinfo"></a>
## `setMSensorInfo`

`luna://com.webos.service.tv.systemproperty/setMSensorInfo`

Sets the m sensor info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setMSensorInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setnpointwhitebalance"></a>
## `setNpointWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setNpointWhiteBalance`

Sets the npoint white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setoledapldiffthreshold"></a>
## `setOLEDAplDiffThreshold`

`luna://com.webos.service.tv.systemproperty/setOLEDAplDiffThreshold`

Sets the OLED apl diff threshold.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setOLEDAplDiffThreshold '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setpgamma"></a>
## `setPgamma` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setPgamma`

Sets the pgamma.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setPgamma '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setpgammamode"></a>
## `setPgammaMode`

`luna://com.webos.service.tv.systemproperty/setPgammaMode`

Sets the pgamma mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setPgammaMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setproperties"></a>
## `setProperties` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setProperties`

Writes system properties (ColorControl SetSystemProperty; Glasshouse toggles OLED TPC/GSR flags OledTPC/OledGSR)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `<propertyName>` | value (flat object) |

```sh
luna-send -n 1 luna://com.webos.service.tv.systemproperty/setProperties '{"OledGSR":"true"}'
```

> Values are strings in Glasshouse ("true"/"false").

Sources: [1](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/oled.js)

<a id="settestpattern"></a>
## `setTestPattern`

`luna://com.webos.service.tv.systemproperty/setTestPattern`

Sets the test pattern.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setTestPattern '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="settwintunerlnacontrol"></a>
## `setTwinTunerLNAControl`

`luna://com.webos.service.tv.systemproperty/setTwinTunerLNAControl`

Sets the twin tuner LNA control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setTwinTunerLNAControl '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setuserinputmap"></a>
## `setUserInputMap`

`luna://com.webos.service.tv.systemproperty/setUserInputMap`

Sets the user input map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setUserInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setvcom"></a>
## `setVcom` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setVcom`

Sets the vcom.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setVcom '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setwbdefaultmode"></a>
## `setWBDefaultMode`

`luna://com.webos.service.tv.systemproperty/setWBDefaultMode`

Sets the WB default mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setWBDefaultMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setwhitebalance"></a>
## `setWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setWhiteBalance`

Sets the white balance.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="startadccalibration"></a>
## `startAdcCalibration` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/startAdcCalibration`

Starts the adc calibration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/startAdcCalibration '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
