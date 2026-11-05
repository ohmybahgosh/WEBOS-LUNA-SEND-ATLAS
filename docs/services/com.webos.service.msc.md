# `com.webos.service.msc`

Motion-sensor/accelerometer controller: reads accelerometer and orientation data, reports motion status, and runs calibration and factory (DFT) tests. _(inferred from the service's methods)_

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkAccelerometer4DFT`](#checkaccelerometer4dft) | private |  | misc | inferred | Checks the accelerometer 4 DFT. |
| [`checkDFT`](#checkdft) | private |  | misc | inferred | Checks the DFT. |
| [`debug`](#debug) | private |  | misc | inferred | Handles the debug. |
| [`getAccelerometerRawData`](#getaccelerometerrawdata) | private |  | misc | inferred | Returns the accelerometer raw data. |
| [`getMotionSensorInfo`](#getmotionsensorinfo) | private |  | misc | inferred | Returns the motion sensor info. |
| [`getMotionStatus`](#getmotionstatus) | private |  | misc | inferred | Returns the motion status. |
| [`getOrientationInfo`](#getorientationinfo) | private |  | misc | inferred | Returns the orientation info. |
| [`resetAccelerometerTestResult`](#resetaccelerometertestresult) | private |  | misc | inferred | Resets the accelerometer test result. ⚠️ |
| [`setAccelerometerCompensation`](#setaccelerometercompensation) | private |  | misc | inferred | Sets the accelerometer compensation. |
| [`setAccelerometerDemoMode`](#setaccelerometerdemomode) | private |  | misc | inferred | Sets the accelerometer demo mode. |
| [`setAccelerometerTestMode`](#setaccelerometertestmode) | private |  | misc | inferred | Sets the accelerometer test mode. |
| [`setMotionSensorInfo`](#setmotionsensorinfo) | private |  | misc | inferred | Sets the motion sensor info. |

<a id="checkaccelerometer4dft"></a>
## `checkAccelerometer4DFT`

`luna://com.webos.service.msc/checkAccelerometer4DFT`

Checks the accelerometer 4 DFT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/checkAccelerometer4DFT '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkdft"></a>
## `checkDFT`

`luna://com.webos.service.msc/checkDFT`

Checks the DFT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/checkDFT '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.msc/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/debug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaccelerometerrawdata"></a>
## `getAccelerometerRawData`

`luna://com.webos.service.msc/getAccelerometerRawData`

Returns the accelerometer raw data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/getAccelerometerRawData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmotionsensorinfo"></a>
## `getMotionSensorInfo`

`luna://com.webos.service.msc/getMotionSensorInfo`

Returns the motion sensor info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/getMotionSensorInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmotionstatus"></a>
## `getMotionStatus`

`luna://com.webos.service.msc/getMotionStatus`

Returns the motion status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/getMotionStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getorientationinfo"></a>
## `getOrientationInfo`

`luna://com.webos.service.msc/getOrientationInfo`

Returns the orientation info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/getOrientationInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetaccelerometertestresult"></a>
## `resetAccelerometerTestResult` ⚠️ DANGEROUS

`luna://com.webos.service.msc/resetAccelerometerTestResult`

Resets the accelerometer test result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/resetAccelerometerTestResult '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaccelerometercompensation"></a>
## `setAccelerometerCompensation`

`luna://com.webos.service.msc/setAccelerometerCompensation`

Sets the accelerometer compensation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/setAccelerometerCompensation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaccelerometerdemomode"></a>
## `setAccelerometerDemoMode`

`luna://com.webos.service.msc/setAccelerometerDemoMode`

Sets the accelerometer demo mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/setAccelerometerDemoMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaccelerometertestmode"></a>
## `setAccelerometerTestMode`

`luna://com.webos.service.msc/setAccelerometerTestMode`

Sets the accelerometer test mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/setAccelerometerTestMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmotionsensorinfo"></a>
## `setMotionSensorInfo`

`luna://com.webos.service.msc/setMotionSensorInfo`

Sets the motion sensor info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.msc/setMotionSensorInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
