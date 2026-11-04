# `com.webos.service.tv.systemproperty`

73 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`doFactoryDefault`](#dofactorydefault) | private |  | system-info | Factory default operation (listed in Powback capabilities audit under panel calibration/service-menu controls) ⚠️ |
| [`doUserDefault`](#douserdefault) | private |  | system-info | Factory reset / user-default restore. The db8 no-space handler calls it right after the comment "do factory reset" ⚠️ |
| [`downloadEdid`](#downloadedid) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`enableNpointWhiteBalance`](#enablenpointwhitebalance) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`findInputMap`](#findinputmap) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexGetAbnormalList`](#flexgetabnormallist) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexGetMotorAutoTest`](#flexgetmotorautotest) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexGetMotorComp`](#flexgetmotorcomp) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexGetMotorRepeatCount`](#flexgetmotorrepeatcount) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexGetMotorSpeed`](#flexgetmotorspeed) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexGetMotorValue`](#flexgetmotorvalue) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexGetPosition`](#flexgetposition) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexMotorStatus`](#flexmotorstatus) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexSaveMotorValue`](#flexsavemotorvalue) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexSetFakeInit`](#flexsetfakeinit) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`flexSetMotorAutoTest`](#flexsetmotorautotest) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexSetMotorComp`](#flexsetmotorcomp) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexSetPosition`](#flexsetposition) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`flexSetStepMotor`](#flexsetstepmotor) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`getAdcCalibrationMode`](#getadccalibrationmode) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getAdcCalibrationModeList`](#getadccalibrationmodelist) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getAdcCalibrationStatus`](#getadccalibrationstatus) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getAdcCalibrationValue`](#getadccalibrationvalue) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getCurrentInputMap`](#getcurrentinputmap) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getEdidData`](#getediddata) | private |  | system-info | Reads EDID data of an HDMI input |
| [`getEdidStatus`](#getedidstatus) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getFanStatus`](#getfanstatus) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getHDMIErrorHistory`](#gethdmierrorhistory) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getHDMIErrorHistoryCount`](#gethdmierrorhistorycount) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getInputMap`](#getinputmap) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getInputMapInfo`](#getinputmapinfo) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getMemoryReport`](#getmemoryreport) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getMemoryUsage`](#getmemoryusage) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getMotionStatus`](#getmotionstatus) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getMSensorInfo`](#getmsensorinfo) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getNpointWhiteBalance`](#getnpointwhitebalance) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getOLEDAplDiffThreshold`](#getoledapldiffthreshold) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getPgamma`](#getpgamma) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getPgammaCount`](#getpgammacount) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getPgammaMode`](#getpgammamode) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getPowerOffReason`](#getpoweroffreason) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getPowerOffReasonCount`](#getpoweroffreasoncount) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getProperties`](#getproperties) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getSystemInfo`](#getsysteminfo) | public | yes | system-info | Retrieves system information by keys: boardType, firmwareVersion, modelName, sdkVersion, UHD, _3d. |
| [`getSystemProperties`](#getsystemproperties) | private |  | system-info | Reads system properties such as panelUsageTime (10-minute units) |
| [`getTempSensorStatus`](#gettempsensorstatus) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getTwinTunerLNAControl`](#gettwintunerlnacontrol) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getVcom`](#getvcom) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`getWhiteBalance`](#getwhitebalance) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`resetAdcCalibration`](#resetadccalibration) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`resetEdid`](#resetedid) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`resetHDMIErrorHistory`](#resethdmierrorhistory) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`resetNpointWhiteBalance`](#resetnpointwhitebalance) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`resetPowerOffReason`](#resetpoweroffreason) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`resetVcom`](#resetvcom) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`resetWhiteBalance`](#resetwhitebalance) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`savePgamma`](#savepgamma) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`saveToolOptionValue`](#savetooloptionvalue) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setAdcCalibrationValue`](#setadccalibrationvalue) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`setCurrentInputMap`](#setcurrentinputmap) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setMSensorInfo`](#setmsensorinfo) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setNpointWhiteBalance`](#setnpointwhitebalance) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`setOLEDAplDiffThreshold`](#setoledapldiffthreshold) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setPgamma`](#setpgamma) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`setPgammaMode`](#setpgammamode) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setProperties`](#setproperties) | private |  | settings | Writes system properties (ColorControl SetSystemProperty; Glasshouse toggles OLED TPC/GSR flags OledTPC/OledGSR) ⚠️ |
| [`setTestPattern`](#settestpattern) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setTwinTunerLNAControl`](#settwintunerlnacontrol) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setUserInputMap`](#setuserinputmap) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setVcom`](#setvcom) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`setWBDefaultMode`](#setwbdefaultmode) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`setWhiteBalance`](#setwhitebalance) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |
| [`startAdcCalibration`](#startadccalibration) | private |  | system-info | Method registered by com.webos.service.tv.systemproperty (root category) ⚠️ |

<a id="dofactorydefault"></a>
## `doFactoryDefault` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/doFactoryDefault`

Factory default operation (listed in Powback capabilities audit under panel calibration/service-menu controls)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.tv.systemproperty/doUserDefault '{}'
```

> NEVER run on a live TV: wipes user data.

Sources: [1](https://github.com/webosose/db8/blob/HEAD/files/scripts/errorNoSpace.bash)

<a id="downloadedid"></a>
## `downloadEdid` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/downloadEdid`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/downloadEdid '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enablenpointwhitebalance"></a>
## `enableNpointWhiteBalance`

`luna://com.webos.service.tv.systemproperty/enableNpointWhiteBalance`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/enableNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="findinputmap"></a>
## `findInputMap`

`luna://com.webos.service.tv.systemproperty/findInputMap`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/findInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetabnormallist"></a>
## `flexGetAbnormalList`

`luna://com.webos.service.tv.systemproperty/flexGetAbnormalList`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetAbnormalList '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorautotest"></a>
## `flexGetMotorAutoTest`

`luna://com.webos.service.tv.systemproperty/flexGetMotorAutoTest`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorAutoTest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorcomp"></a>
## `flexGetMotorComp`

`luna://com.webos.service.tv.systemproperty/flexGetMotorComp`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorComp '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorrepeatcount"></a>
## `flexGetMotorRepeatCount`

`luna://com.webos.service.tv.systemproperty/flexGetMotorRepeatCount`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorRepeatCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorspeed"></a>
## `flexGetMotorSpeed`

`luna://com.webos.service.tv.systemproperty/flexGetMotorSpeed`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorSpeed '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetmotorvalue"></a>
## `flexGetMotorValue`

`luna://com.webos.service.tv.systemproperty/flexGetMotorValue`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetMotorValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexgetposition"></a>
## `flexGetPosition`

`luna://com.webos.service.tv.systemproperty/flexGetPosition`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexGetPosition '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexmotorstatus"></a>
## `flexMotorStatus`

`luna://com.webos.service.tv.systemproperty/flexMotorStatus`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexMotorStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsavemotorvalue"></a>
## `flexSaveMotorValue`

`luna://com.webos.service.tv.systemproperty/flexSaveMotorValue`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSaveMotorValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetfakeinit"></a>
## `flexSetFakeInit` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/flexSetFakeInit`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetFakeInit '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetmotorautotest"></a>
## `flexSetMotorAutoTest`

`luna://com.webos.service.tv.systemproperty/flexSetMotorAutoTest`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetMotorAutoTest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetmotorcomp"></a>
## `flexSetMotorComp`

`luna://com.webos.service.tv.systemproperty/flexSetMotorComp`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetMotorComp '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetposition"></a>
## `flexSetPosition`

`luna://com.webos.service.tv.systemproperty/flexSetPosition`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetPosition '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="flexsetstepmotor"></a>
## `flexSetStepMotor` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/flexSetStepMotor`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/flexSetStepMotor '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationmode"></a>
## `getAdcCalibrationMode`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationMode`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationmodelist"></a>
## `getAdcCalibrationModeList`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationModeList`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationModeList '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationstatus"></a>
## `getAdcCalibrationStatus`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationStatus`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getadccalibrationvalue"></a>
## `getAdcCalibrationValue`

`luna://com.webos.service.tv.systemproperty/getAdcCalibrationValue`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getAdcCalibrationValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getcurrentinputmap"></a>
## `getCurrentInputMap`

`luna://com.webos.service.tv.systemproperty/getCurrentInputMap`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
- **Confidence:** code

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

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getEdidStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getfanstatus"></a>
## `getFanStatus`

`luna://com.webos.service.tv.systemproperty/getFanStatus`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getFanStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethdmierrorhistory"></a>
## `getHDMIErrorHistory`

`luna://com.webos.service.tv.systemproperty/getHDMIErrorHistory`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getHDMIErrorHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gethdmierrorhistorycount"></a>
## `getHDMIErrorHistoryCount`

`luna://com.webos.service.tv.systemproperty/getHDMIErrorHistoryCount`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getHDMIErrorHistoryCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getinputmap"></a>
## `getInputMap`

`luna://com.webos.service.tv.systemproperty/getInputMap`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getinputmapinfo"></a>
## `getInputMapInfo`

`luna://com.webos.service.tv.systemproperty/getInputMapInfo`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getInputMapInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmemoryreport"></a>
## `getMemoryReport`

`luna://com.webos.service.tv.systemproperty/getMemoryReport`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMemoryReport '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmemoryusage"></a>
## `getMemoryUsage`

`luna://com.webos.service.tv.systemproperty/getMemoryUsage`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMemoryUsage '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmotionstatus"></a>
## `getMotionStatus`

`luna://com.webos.service.tv.systemproperty/getMotionStatus`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMotionStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmsensorinfo"></a>
## `getMSensorInfo`

`luna://com.webos.service.tv.systemproperty/getMSensorInfo`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getMSensorInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getnpointwhitebalance"></a>
## `getNpointWhiteBalance`

`luna://com.webos.service.tv.systemproperty/getNpointWhiteBalance`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getoledapldiffthreshold"></a>
## `getOLEDAplDiffThreshold`

`luna://com.webos.service.tv.systemproperty/getOLEDAplDiffThreshold`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getOLEDAplDiffThreshold '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpgamma"></a>
## `getPgamma`

`luna://com.webos.service.tv.systemproperty/getPgamma`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPgamma '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpgammacount"></a>
## `getPgammaCount`

`luna://com.webos.service.tv.systemproperty/getPgammaCount`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPgammaCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpgammamode"></a>
## `getPgammaMode`

`luna://com.webos.service.tv.systemproperty/getPgammaMode`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPgammaMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpoweroffreason"></a>
## `getPowerOffReason`

`luna://com.webos.service.tv.systemproperty/getPowerOffReason`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPowerOffReason '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpoweroffreasoncount"></a>
## `getPowerOffReasonCount`

`luna://com.webos.service.tv.systemproperty/getPowerOffReasonCount`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getPowerOffReasonCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.tv.systemproperty/getProperties`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
- **Confidence:** documented, code

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
- **Confidence:** code

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

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getTempSensorStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gettwintunerlnacontrol"></a>
## `getTwinTunerLNAControl`

`luna://com.webos.service.tv.systemproperty/getTwinTunerLNAControl`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getTwinTunerLNAControl '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getvcom"></a>
## `getVcom`

`luna://com.webos.service.tv.systemproperty/getVcom`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getVcom '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getwhitebalance"></a>
## `getWhiteBalance`

`luna://com.webos.service.tv.systemproperty/getWhiteBalance`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetadccalibration"></a>
## `resetAdcCalibration` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/resetAdcCalibration`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetAdcCalibration '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetedid"></a>
## `resetEdid` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/resetEdid`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetEdid '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resethdmierrorhistory"></a>
## `resetHDMIErrorHistory`

`luna://com.webos.service.tv.systemproperty/resetHDMIErrorHistory`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetHDMIErrorHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetnpointwhitebalance"></a>
## `resetNpointWhiteBalance`

`luna://com.webos.service.tv.systemproperty/resetNpointWhiteBalance`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetpoweroffreason"></a>
## `resetPowerOffReason`

`luna://com.webos.service.tv.systemproperty/resetPowerOffReason`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetPowerOffReason '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetvcom"></a>
## `resetVcom` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/resetVcom`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetVcom '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetwhitebalance"></a>
## `resetWhiteBalance`

`luna://com.webos.service.tv.systemproperty/resetWhiteBalance`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/resetWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="savepgamma"></a>
## `savePgamma` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/savePgamma`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/savePgamma '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="savetooloptionvalue"></a>
## `saveToolOptionValue`

`luna://com.webos.service.tv.systemproperty/saveToolOptionValue`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/saveToolOptionValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setadccalibrationvalue"></a>
## `setAdcCalibrationValue` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setAdcCalibrationValue`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setAdcCalibrationValue '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setcurrentinputmap"></a>
## `setCurrentInputMap`

`luna://com.webos.service.tv.systemproperty/setCurrentInputMap`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setCurrentInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setmsensorinfo"></a>
## `setMSensorInfo`

`luna://com.webos.service.tv.systemproperty/setMSensorInfo`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setMSensorInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setnpointwhitebalance"></a>
## `setNpointWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setNpointWhiteBalance`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setNpointWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setoledapldiffthreshold"></a>
## `setOLEDAplDiffThreshold`

`luna://com.webos.service.tv.systemproperty/setOLEDAplDiffThreshold`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setOLEDAplDiffThreshold '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setpgamma"></a>
## `setPgamma` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setPgamma`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setPgamma '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setpgammamode"></a>
## `setPgammaMode`

`luna://com.webos.service.tv.systemproperty/setPgammaMode`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
- **Confidence:** code

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

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setTestPattern '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="settwintunerlnacontrol"></a>
## `setTwinTunerLNAControl`

`luna://com.webos.service.tv.systemproperty/setTwinTunerLNAControl`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setTwinTunerLNAControl '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setuserinputmap"></a>
## `setUserInputMap`

`luna://com.webos.service.tv.systemproperty/setUserInputMap`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setUserInputMap '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setvcom"></a>
## `setVcom` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setVcom`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setVcom '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setwbdefaultmode"></a>
## `setWBDefaultMode`

`luna://com.webos.service.tv.systemproperty/setWBDefaultMode`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setWBDefaultMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setwhitebalance"></a>
## `setWhiteBalance` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/setWhiteBalance`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/setWhiteBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="startadccalibration"></a>
## `startAdcCalibration` ⚠️ DANGEROUS

`luna://com.webos.service.tv.systemproperty/startAdcCalibration`

Method registered by com.webos.service.tv.systemproperty (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/startAdcCalibration '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.systemproperty` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
