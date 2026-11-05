# `com.webos.service.sdkagent`

SDK agent that controls the Telegraf metrics collector and communicates with SDK tools: starts, stops, restarts and configures collection and monitors process and web-process size.

12 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`agent`](#agent) | unknown |  | devmode | documented | Config data for telegraf agent. |
| [`collector/getConfig`](#collector_getconfig) | public |  | devmode | documented | Gets configurations of the Telegraf service. |
| [`collector/getData`](#collector_getdata) | public |  | devmode | documented | Gets data from the Telegraf service. |
| [`collector/getStatus`](#collector_getstatus) | public |  | devmode | documented | Gets status of the Telegraf service. |
| [`collector/restart`](#collector_restart) | public |  | devmode | documented | Restarts the Telegraf service. |
| [`collector/setConfig`](#collector_setconfig) | public |  | devmode | documented | Sets configurations of the Telegraf service. |
| [`collector/start`](#collector_start) | public |  | devmode | documented | Starts the Telegraf service. |
| [`collector/startOnBoot`](#collector_startonboot) | public |  | devmode | documented | Automatically starts the Telegraf service on device boot-up and starts monitoring. |
| [`collector/stop`](#collector_stop) | public |  | devmode | documented | Stops the Telegraf service. |
| [`outputs.influxdb`](#outputs.influxdb) | unknown |  | devmode | documented | Config data for influxdb on host. |
| [`webOS.processMonitoring`](#webos.processmonitoring) | unknown |  | devmode | documented | Config data for processMonitoring. Lists the background/foreground applications and their process IDs that are running on webOS platform. Fo |
| [`webOS.webProcessSize`](#webos.webprocesssize) | unknown |  | devmode | documented | Config data for webProcessSize. Return the list of apps which the process is running and their size. For information, see com.webos.service. |

<a id="agent"></a>
## `agent`

`luna://com.webos.service.sdkagent/agent`

Config data for telegraf agent.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/agent '{}'
```

> Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on  \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_getconfig"></a>
## `collector/getConfig`

`luna://com.webos.service.sdkagent/collector/getConfig`

Gets configurations of the Telegraf service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `config` | Object (optional) Telegraf configurations, converted to a JSON object. Similar to telegraf.conf, available @ https://docs.influxdata.com/telegraf/v1.21/administration/configuration/. Note: Besides the configs that are configured using setConfig method, this method also returns some read-only configu |

```sh
luna-send -f -n 1 luna://com.webos.service.sdkagent/collector/getConfig '{}
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean; config:Object \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_getdata"></a>
## `collector/getData`

`luna://com.webos.service.sdkagent/collector/getData`

Gets data from the Telegraf service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `inputs` | String array (optional) Indicates the inputs to get data from service. The inputs can be obtained from the "Input.*" of the collector/getConfig API. For example, the inputs can be as follows: {"processes", "kernel", "cpu", "system", "diskio", "disk", "mem", "swap"} If argument is empty, return all collected data. For more details: [inputs.processes] https://github.com/influxdata/telegraf/tree/mast |

**Returns:**

| Field | Type / notes |
|---|---|
| `dataArray` | Object array (optional) JSON object with data about the specified input. More details on output data: For more details: - \[inputs.processes\] https://github.com/influxdata/telegraf/tree/master/plugins/inputs/processes - \[inputs.kernel\] https://github.com/influxdata/telegraf/tree/master/plugins/in |

```sh
luna-send -f -n 1 luna://com.webos.service.sdkagent/collector/getData '{"inputs": ["processes", "kernel"]}
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean; dataArray:Object array \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_getstatus"></a>
## `collector/getStatus`

`luna://com.webos.service.sdkagent/collector/getStatus`

Gets status of the Telegraf service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `status` | String (required) Indicates the status of the Telegraf service. Possible values are: - active: Service is running. - inactive: Service is not running. |
| `startOnBoot` | Boolean (optional) Indicates whether the service is configured to start on booting up of device. Possible values are: - true: Configured to start on boot. - false: Not configured to start on boot. |

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/collector/getStatus '{}
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean; status:String; startOnBoot:Boolean \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_restart"></a>
## `collector/restart`

`luna://com.webos.service.sdkagent/collector/restart`

Restarts the Telegraf service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/collector/restart '{}
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_setconfig"></a>
## `collector/setConfig`

`luna://com.webos.service.sdkagent/collector/setConfig`

Sets configurations of the Telegraf service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `agent` | Object: agent (optional) Config data for telegraf agent. Note: At least one of the parameters must be provided. The data object may be changed for each target platform, and wrong data values are not guaranteed by API. APIs only check the JSON form of data object. |
| `outputs.influxdb` | Object: outputs.influxdb (optional) Config data for influxdb on host. Note: At least one of the parameters must be provided. The data object may be changed for each target platform, and wrong data values are not guaranteed by API. APIs only check the JSON form of data object. |
| `webOS.webProcessSize` | Object: webOS.webProcessSize (optional) Config data for webProcessSize. Note: At least one of the parameters must be provided. The data object may be changed for each target platform, and wrong data values are not guaranteed by API. APIs only check the JSON form of data object. |
| `webOS.processMonitoring` | Object: webOS.processMonitoring (optional) Config data for processMonitoring. Note: At least one of the parameters must be provided. The data object may be changed for each target platform, and wrong data values are not guaranteed by API. APIs only check the JSON form of data object. |

```sh
luna-send -f -n 1 luna://com.webos.service.sdkagent/collector/setConfig '{ "agent":{"flush_interval":"5s","interval":"5s"}, "outputs.influxdb":{"database":"telegraf","urls":["http://192.168.0.6:8086"]}, "webOS.webProcessSize":{"enabled":true}, "webOS.processMonitoring":{"enabled":true,"process_name":["com.webos.app.home","com.webos.service.sdkagent"]} }
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_start"></a>
## `collector/start`

`luna://com.webos.service.sdkagent/collector/start`

Starts the Telegraf service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/collector/start '{}
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_startonboot"></a>
## `collector/startOnBoot`

`luna://com.webos.service.sdkagent/collector/startOnBoot`

Automatically starts the Telegraf service on device boot-up and starts monitoring.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enable` | Boolean (required) Indicates if auto-start is enabled. Possible values are: true: Auto-start is enabled. false: Not enabled. |

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/collector/startOnBoot '{"enable":true}
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="collector_stop"></a>
## `collector/stop`

`luna://com.webos.service.sdkagent/collector/stop`

Stops the Telegraf service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 22+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/collector/stop '{}
```

> ACG: sdkagent.collector \| Returns: returnValue:Boolean \| Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="outputs.influxdb"></a>
## `outputs.influxdb`

`luna://com.webos.service.sdkagent/outputs.influxdb`

Config data for influxdb on host.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/outputs.influxdb '{}'
```

> Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on  \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="webos.processmonitoring"></a>
## `webOS.processMonitoring`

`luna://com.webos.service.sdkagent/webOS.processMonitoring`

Config data for processMonitoring. Lists the background/foreground applications and their process IDs that are running on webOS platform. For more details: https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/#running

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/webOS.processMonitoring '{}'
```

> Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on  \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)

<a id="webos.webprocesssize"></a>
## `webOS.webProcessSize`

`luna://com.webos.service.sdkagent/webOS.webProcessSize`

Config data for webProcessSize. Return the list of apps which the process is running and their size. For information, see com.webos.service.webappmanager/getwebprocesssize() .

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sdkagent/webOS.webProcessSize '{}'
```

> Service: The sdkagent service controls Telegraf in webOS and communicates with SDK tools. Operations: Start, stop, and restart the Telegraf service. Gets the status of the Telegraf service. Sets auto start on  \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sdkagent/)
