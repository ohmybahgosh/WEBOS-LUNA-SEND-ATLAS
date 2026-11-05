# `com.webos.service.fancontroller`

Cooling-fan and thermal controller: reads fan and temperature-sensor data, reports a thermal report, and sets thermal status.

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkFan`](#checkfan) | private |  | misc | inferred | Checks the fan. |
| [`checkTemperatureSensor`](#checktemperaturesensor) | private |  | misc | inferred | Checks the temperature sensor. |
| [`getFanData`](#getfandata) | private |  | misc | inferred | Returns the fan data. |
| [`getTemperatureSensorData`](#gettemperaturesensordata) | private |  | misc | inferred | Returns the temperature sensor data. |
| [`getThermalReport`](#getthermalreport) | private |  | misc | inferred | Returns the thermal report. |
| [`setDebug`](#setdebug) | private |  | misc | inferred | Sets the debug. |
| [`setThermalStatus`](#setthermalstatus) | private |  | misc | inferred | Sets the thermal status. |

<a id="checkfan"></a>
## `checkFan`

`luna://com.webos.service.fancontroller/checkFan`

Checks the fan.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.fancontroller/checkFan '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checktemperaturesensor"></a>
## `checkTemperatureSensor`

`luna://com.webos.service.fancontroller/checkTemperatureSensor`

Checks the temperature sensor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.fancontroller/checkTemperatureSensor '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfandata"></a>
## `getFanData`

`luna://com.webos.service.fancontroller/getFanData`

Returns the fan data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.fancontroller/getFanData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettemperaturesensordata"></a>
## `getTemperatureSensorData`

`luna://com.webos.service.fancontroller/getTemperatureSensorData`

Returns the temperature sensor data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.fancontroller/getTemperatureSensorData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getthermalreport"></a>
## `getThermalReport`

`luna://com.webos.service.fancontroller/getThermalReport`

Returns the thermal report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.fancontroller/getThermalReport '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebug"></a>
## `setDebug`

`luna://com.webos.service.fancontroller/setDebug`

Sets the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.fancontroller/setDebug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setthermalstatus"></a>
## `setThermalStatus`

`luna://com.webos.service.fancontroller/setThermalStatus`

Sets the thermal status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.fancontroller/setThermalStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
