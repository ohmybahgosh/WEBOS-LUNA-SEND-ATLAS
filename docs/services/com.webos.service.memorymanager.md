# `com.webos.service.memorymanager`

Memory manager: monitors system memory, reports usage and thresholds, and frees memory by killing background apps under low-memory conditions.

11 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`application`](#application) | unknown |  | system-info | documented | Indicates the application memory description. |
| [`getManagerEvent`](#getmanagerevent) | public | yes | system-info | documented | Subscribe to be notified when a MemoryManager internal event occurs. |
| [`getMemoryStatus`](#getmemorystatus) | public | yes | system-info | documented | Provides the current status of the memory. |
| [`levelChanged`](#levelchanged) | unknown |  | system-info | documented | Indicates the LS signal for memory level change. The signal is always sent whenever memory level is changed. |
| [`pss_view`](#pss_view) | unknown |  | system-info | documented | PSS information of services and applications per session |
| [`requireMemory`](#requirememory) | public |  | system-info | documented | Requests for the memory that is required to launch an application. Note: This method is called by the SAM module when it is about to launch  |
| [`sysInfo`](#sysinfo) | public |  | system-info | documented | Provides a way to account for memory usage. |
| [`system`](#system) | unknown |  | system-info | documented | Indicates the current memory information. |
| [`system_view`](#system_view) | unknown |  | system-info | documented | Provides system-level memory information. |
| [`threshold`](#threshold) | unknown |  | system-info | documented | Indicates the memory level threshold. |
| [`threshold_item`](#threshold_item) | unknown |  | system-info | documented | Indicates the threshold item. |

<a id="application"></a>
## `application`

`luna://com.webos.service.memorymanager/application`

Indicates the application memory description.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.memorymanager/application '{}'
```

> Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="getmanagerevent"></a>
## `getManagerEvent`

`luna://com.webos.service.memorymanager/getManagerEvent`

Subscribe to be notified when a MemoryManager internal event occurs.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `type` | String (required) Indicates the memory manager event type. Possible values are: killing: application killing event when memory level is under 'low' |
| `subscribe` | Boolean (required) Indicates if subscribed for notifications. Possible values are: true: Subscribe for notifications false: Notifications are not required |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -f -i luna://com.webos.service.memorymanager/getManagerEvent '{ "type":"killing", "subscribe":true }
```

> ACG: memorymanager.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="getmemorystatus"></a>
## `getMemoryStatus`

`luna://com.webos.service.memorymanager/getMemoryStatus`

Provides the current status of the memory.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications. Possible values are: true: Get notifications false: Notifications are not required Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `applications` | Object array: application (required) Indicates the list of running applications. |
| `system` | Object: system (required) Indicates the current system information. |
| `threshold` | Object: threshold (required) Indicates the threshold values. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -f -i luna://com.webos.service.memorymanager/getMemoryStatus '{ "subscribe":true }
```

> ACG: memorymanager.query \| Returns: applications:Object array: application; system:Object: system; threshold:Object: threshold; subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="levelchanged"></a>
## `levelChanged`

`luna://com.webos.service.memorymanager/levelChanged`

Indicates the LS signal for memory level change. The signal is always sent whenever memory level is changed.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.memorymanager/levelChanged '{}'
```

> Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="pss_view"></a>
## `pss_view`

`luna://com.webos.service.memorymanager/pss_view`

PSS information of services and applications per session

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.memorymanager/pss_view '{}'
```

> Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="requirememory"></a>
## `requireMemory`

`luna://com.webos.service.memorymanager/requireMemory`

Requests for the memory that is required to launch an application. Note: This method is called by the SAM module when it is about to launch an application.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requiredMemory` | Number (required) Indicates the amount of memory required to launch the application. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -f -n 1 luna://com.webos.service.memorymanager/requireMemory '{ "requiredMemory":120 }
```

> ACG: memorymanager.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="sysinfo"></a>
## `sysInfo`

`luna://com.webos.service.memorymanager/sysInfo`

Provides a way to account for memory usage.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `System View` | Object array: system\_view (required) Indicates the system level memory information. |
| `PSS View` | Object array: pss\_view (required) Indicates the PSS information of services and applications per session. |

```sh
luna-send -f -n 1 luna://com.webos.service.memorymanager/sysInfo '{ }
```

> ACG: memorymanager.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; System View:Object array: system_view; PSS View:Object array: pss_view \| Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="system"></a>
## `system`

`luna://com.webos.service.memorymanager/system`

Indicates the current memory information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.memorymanager/system '{}'
```

> Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="system_view"></a>
## `system_view`

`luna://com.webos.service.memorymanager/system_view`

Provides system-level memory information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.memorymanager/system_view '{}'
```

> Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="threshold"></a>
## `threshold`

`luna://com.webos.service.memorymanager/threshold`

Indicates the memory level threshold.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.memorymanager/threshold '{}'
```

> Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)

<a id="threshold_item"></a>
## `threshold_item`

`luna://com.webos.service.memorymanager/threshold_item`

Indicates the threshold item.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.memorymanager/threshold_item '{}'
```

> Service: Manages applications to ensure that the system does not run into kernel-Out-Of-Memory situation. This is achieved by killing applications that are in the background when we reach low memory conditions \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-memorymanager/)
