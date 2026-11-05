# `com.webos.service.intent`

Intent manager: handles implicit and explicit intents (abstract operations), queries and registers intent handlers/filters, and returns intent results.

7 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`handler`](#handler) | unknown |  | apps | documented | Indicates the application to handle the intent. |
| [`intent`](#intent) | unknown |  | apps | documented | Provides details of the intent. |
| [`intentFilter`](#intentfilter) | unknown |  | apps | inferred | Handles the intent filter. |
| [`query`](#query) | public |  | apps | documented | Clients can get handlers by calling the API. |
| [`sendResult`](#sendresult) | public |  | apps | documented | Enables the handlers to reply with the results. Note: Also refer 'subscribeResult' API. |
| [`start`](#start) | public | yes | apps | documented | Starts the handlers based on the intent information provided in the request payload. Please refer ' subscribeResult ' API for subscription p |
| [`subscribeResult`](#subscriberesult) | public | yes | apps | documented | All running intents have their own 'intentId'. Of course, handlers can reply results thought 'intentId'. Other component including requester |

<a id="handler"></a>
## `handler`

`luna://com.webos.service.intent/handler`

Indicates the application to handle the intent.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.intent/handler '{}'
```

> Service: An intent is an abstract description of an operation to be performed. Intent manager is a native service to handle the intent. There are two types of intent: Implicit Intent : Does not specify a compo \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-intent/)

<a id="intent"></a>
## `intent`

`luna://com.webos.service.intent/intent`

Provides details of the intent.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.intent/intent '{}'
```

> Service: An intent is an abstract description of an operation to be performed. Intent manager is a native service to handle the intent. There are two types of intent: Implicit Intent : Does not specify a compo \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-intent/)

<a id="intentfilter"></a>
## `intentFilter`

`luna://com.webos.service.intent/intentFilter`

Handles the intent filter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.intent/intentFilter '{}'
```

> Service: An intent is an abstract description of an operation to be performed. Intent manager is a native service to handle the intent. There are two types of intent: Implicit Intent : Does not specify a compo \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-intent/)

<a id="query"></a>
## `query`

`luna://com.webos.service.intent/query`

Clients can get handlers by calling the API.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `intent` | Object: intent (optional) Details of the intent. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `handlers` | Object array: handler (required) Please refer the handler object in the object section. |

```sh
luna-send -f -n 1 luna://com.webos.service.intent/query '{}
```

> ACG: intent.operation \| Returns: returnValue:Boolean; errorText:String; handlers:Object array: handler \| Service: An intent is an abstract description of an operation to be performed. Intent manager is a native service to handle the intent. There are two types of intent: Implicit Intent : Does not specify a compo

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-intent/)

<a id="sendresult"></a>
## `sendResult`

`luna://com.webos.service.intent/sendResult`

Enables the handlers to reply with the results. Note: Also refer 'subscribeResult' API.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `intentId` | Number (required) Indicates the intent ID used in the sendResult and subscribeResult . |
| `result` | String (optional) Indicates the result string which is provided by the handler. |
| `intent` | Object: intent (optional) Details of the intent. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.intent/sendResult '{ "intentId":33, "result":"ok" }
```

> ACG: intent.operation \| Returns: returnValue:Boolean; errorText:String \| Service: An intent is an abstract description of an operation to be performed. Intent manager is a native service to handle the intent. There are two types of intent: Implicit Intent : Does not specify a compo

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-intent/)

<a id="start"></a>
## `start`

`luna://com.webos.service.intent/start`

Starts the handlers based on the intent information provided in the request payload. Please refer ' subscribeResult ' API for subscription payload.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `intent` | Object: intent (optional) Details of the intent. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true : Subscribed for notifications false : Not subscribed |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `intentId` | Number (required) Indicates the Intent ID. |

```sh
luna-send -i -f luna://com.webos.service.intent/start '{"subscribe": true}'
```

> ACG: intent.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorText:String; intentId:Number \| Service: An intent is an abstract description of an operation to be performed. Intent manager is a native service to handle the intent. There are two types of intent: Implicit Intent : Does not specify a compo \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-intent/)

<a id="subscriberesult"></a>
## `subscribeResult`

`luna://com.webos.service.intent/subscribeResult`

All running intents have their own 'intentId'. Of course, handlers can reply results thought 'intentId'. Other component including requester can subscribe the results with this API.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `intentId` | Number (required) Indicates the intent ID. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true : Subscribed for notifications false : Not subscribed |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `intentId` | Number (required) Indicates the intent ID. |

```sh
luna-send -i -f luna://com.webos.service.intent/subscribeResult '{ "intentId":14, "subscribe":true }
```

> ACG: intent.operation \| Returns: returnValue:Boolean; subscribed:String; errorText:String; intentId:Number \| Service: An intent is an abstract description of an operation to be performed. Intent manager is a native service to handle the intent. There are two types of intent: Implicit Intent : Does not specify a compo

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-intent/)
