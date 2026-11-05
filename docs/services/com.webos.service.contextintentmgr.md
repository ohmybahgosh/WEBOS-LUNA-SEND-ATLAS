# `com.webos.service.contextintentmgr`

Context Intent Manager (CIM): adds AI logic to a web app without changing its source, injecting data into and reading data from workflows to make the app context-aware.

3 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDataFromWorkflow`](#getdatafromworkflow) | public | yes | apps | documented | Publishes data from the workflow to the app. The data can be consumed by an app which has subscribed to it. |
| [`injectDataToWorkflow`](#injectdatatoworkflow) | public |  | apps | documented | Injects data from the app to the workflow. |
| [`result`](#result) | unknown |  | apps | documented | Contains the results. |

<a id="getdatafromworkflow"></a>
## `getDataFromWorkflow`

`luna://com.webos.service.contextintentmgr/getDataFromWorkflow`

Publishes data from the workflow to the app. The data can be consumed by an app which has subscribed to it.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Identifies the 'data-publish' node that is defined in the workflow. Note: Make sure that the key is associated with the relevant 'data-publish' node. |
| `subscribe` | Boolean (required) Subscribe for notifications when value changes. Possible values are: true - Get notifications false - Notifications are not required |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `result` | Object: result (required) Contains the result. |

```sh
luna-send -i -f luna://com.webos.service.contextintentmgr/getDataFromWorkflow '{"key": "<key>", "subscribe": true}'
```

> ACG: contextintent.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean; result:Object: result \| Service: CIM is a service that adds AI logic to your web app, without actually modifying its source code. This makes your web app context-aware and therefore provide a better experience to your customers. How  \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-contextintentmgr/)

<a id="injectdatatoworkflow"></a>
## `injectDataToWorkflow`

`luna://com.webos.service.contextintentmgr/injectDataToWorkflow`

Injects data from the app to the workflow.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Identifies the 'data-inject' node that is defined in the workflow. Note: Make sure that the key is associated with the relevant 'data-inject' node. |
| `data` | String (required) The actual data that must be sent to the workflow. It must be a stringified object. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `result` | Object: result (required) Contains the result. |

```sh
luna-send -n 1 -f luna://com.webos.service.contextintentmgr/injectDataToWorkflow '{"key": "<key>", "data": "<data>"}'
```

> ACG: contextintent.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; result:Object: result \| Service: CIM is a service that adds AI logic to your web app, without actually modifying its source code. This makes your web app context-aware and therefore provide a better experience to your customers. How  \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-contextintentmgr/)

<a id="result"></a>
## `result`

`luna://com.webos.service.contextintentmgr/result`

Contains the results.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.contextintentmgr/result '{}'
```

> Service: CIM is a service that adds AI logic to your web app, without actually modifying its source code. This makes your web app context-aware and therefore provide a better experience to your customers. How  \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-contextintentmgr/)
