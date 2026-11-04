# `com.webos.service.cec`

8 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`args`](#args) | unknown |  | input | Contains list of arguments passed to command. |
| [`command`](#command) | unknown |  | input | Command to execute on destination HDMI CEC device. |
| [`devices`](#devices) | unknown |  | input | Contains information about connected HDMI CEC devices. |
| [`getConfig`](#getconfig) | public |  | input | Gets the value of the specified input configuration. |
| [`listAdapters`](#listadapters) | public |  | input | Searches CEC adapters from system and list all the identified local CEC adapters. |
| [`scan`](#scan) | public |  | input | Scans the CEC bus and provides information of the connected HDMI CEC devices. |
| [`sendCommand`](#sendcommand) | public |  | input | Sends the input command to destination HDMI CEC devices connected on CEC bus. |
| [`setConfig`](#setconfig) | public |  | input | Sets the input configuration. |

<a id="args"></a>
## `args`

`luna://com.webos.service.cec/args`

Contains list of arguments passed to command.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.cec/args '{}'
```

> Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)

<a id="command"></a>
## `command`

`luna://com.webos.service.cec/command`

Command to execute on destination HDMI CEC device.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.cec/command '{}'
```

> Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)

<a id="devices"></a>
## `devices`

`luna://com.webos.service.cec/devices`

Contains information about connected HDMI CEC devices.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.cec/devices '{}'
```

> Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)

<a id="getconfig"></a>
## `getConfig`

`luna://com.webos.service.cec/getConfig`

Gets the value of the specified input configuration.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 17+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapter` | String (optional) Input HDMI-CEC adapter. Default : cec0 |
| `key` | String (required) Key name to get configuration value. Possible values are: vendorId : Vendor ID of device. version : CEC Version of the device. osd : OSD name of the device. language : Menu language. powerState : Power status of the device. physicalAddress : Physical address of the device. logicalAddress : Logical address of the device. deviceType : Type of device (TV, recorder, playback). |

```sh
luna-send -n 1 -f luna://com.webos.service.cec/getConfig '{ "adapter":"cec0", "key": "vendorId" }
```

> ACG: cec.query \| Returns: returnValue:Boolean; key:String; value:String; errorCode:Number; errorText:String \| Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)

<a id="listadapters"></a>
## `listAdapters`

`luna://com.webos.service.cec/listAdapters`

Searches CEC adapters from system and list all the identified local CEC adapters.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 17+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.cec/listAdapters '{ }
```

> ACG: cec.query \| Returns: returnValue:Boolean; cecAdapters:String array; errorCode:Number; errorText:String \| Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)

<a id="scan"></a>
## `scan`

`luna://com.webos.service.cec/scan`

Scans the CEC bus and provides information of the connected HDMI CEC devices.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 17+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapter` | String (optional) Input HDMI-CEC adapter. Default: cec0 |

```sh
luna-send -n 1 -f luna://com.webos.service.cec/scan '{ "adapter": "cec0" }
```

> ACG: cec.query \| Returns: returnValue:Boolean; devices:Object array: devices; errorCode:Number; errorText:String \| Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)

<a id="sendcommand"></a>
## `sendCommand`

`luna://com.webos.service.cec/sendCommand`

Sends the input command to destination HDMI CEC devices connected on CEC bus.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 17+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapter` | String (optional) HDMI CEC device from which the command gets executed. Default : cec0 |
| `destAddress` | String (required) Physical or logical address of destination HDMI CEC device. |
| `timeout` | Number (optional) Reply timeout, in milliseconds. Default : 1000 |
| `command` | Object: command (required) Command to execute on destination CEC device. |

```sh
luna-send -n 1 -f luna://com.webos.service.cec/sendCommand '{ "adapter": "cec0", "destAddress" : "0.0.0.0", "timeout": 500, "command" : { "name" : "report-audio-status", "args" : [ { "arg" : "aud-mute-status", "value" : "off"} ] } }
```

> ACG: cec.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; payload:Object \| Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)

<a id="setconfig"></a>
## `setConfig`

`luna://com.webos.service.cec/setConfig`

Sets the input configuration.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 17+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapter` | String (optional) Input CEC adapter. Default: cec0 |
| `key` | String (required) Key name to set configuration value. Possible values are: vendorId : Vendor ID of device. version : CEC Version of the device. osd : OSD name of the device. language : Menu language. powerState : Power status of the device. physicalAddress : Physical address of the device. logicalAddress : Logical address of the device. deviceType : Type of device (TV, recorder, playback). |
| `value` | String (required) Configuration value to be set for the specified key. |

```sh
luna-send -n 1 -f luna://com.webos.service.cec/setConfig '{"adapter":"cec0","key": "vendorId", "value": "LG"}
```

> ACG: cec.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: The CEC (Consumer Electronic Control) service allows webOS to control connected HDMI CEC devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-cec/)
