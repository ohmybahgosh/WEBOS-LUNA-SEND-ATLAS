# `com.webos.service.ai.voice`

Voice-input recognition service (webOS OSE): starts and stops voice recognition, reports state, and returns results, using configuration from the config service.

4 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getResponse`](#getresponse) | public | yes | input | documented | Returns speech recognition results. This method is asynchronous. |
| [`getState`](#getstate) | public |  | input | documented | Gets the current state of the service. It can have the following states: idle : Before start. waitActivation : Wait for keyword activation.  |
| [`start`](#start) | public |  | input | documented | Starts the service based on the mode selected. Note: This method is only for allowed clients. |
| [`stop`](#stop) | public |  | input | documented | Stops the service. Make sure to call this method before starting another engine. Note: This method is only for allowed clients. |

<a id="getresponse"></a>
## `getResponse`

`luna://com.webos.service.ai.voice/getResponse`

Returns speech recognition results. This method is asynchronous.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe for notifications. Possible values are: true - Get notifications. false - Notifications are not required. Default value: false |

```sh
luna-send -i -f luna://com.webos.service.ai.voice/getResponse '{"subscribe": true}'
```

> ACG: ai.voice \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: This service is used to recognize voice input. It can use and customize the configurations defined by the configuration API ( com.webos.service.config ).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ai-voice/)

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.ai.voice/getState`

Gets the current state of the service. It can have the following states: idle : Before start. waitActivation : Wait for keyword activation. recording : Uploading audio to the server for speech recognition. thinking : Waiting for results from server. answering : Answering to the request through the speaker.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications. Possible values are: - true- Get notifications. - false- Notifications are not required. Default value: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `state` | String (required) Indicates the running state of the service. Possible values are: - idle - waitActivation - recording - thinking - answering |
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.ai.voice/getState '{}'
```

> ACG: ai.voice \| Returns: returnValue:String; subscribed:Boolean; state:String; errorCode:Number (int8_t); errorText:String \| Service: This service is used to recognize voice input. It can use and customize the configurations defined by the configuration API ( com.webos.service.config ).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ai-voice/)

<a id="start"></a>
## `start`

`luna://com.webos.service.ai.voice/start`

Starts the service based on the mode selected. Note: This method is only for allowed clients.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mode` | String (required) Select the service mode. Possible values are: continuous - The service will restart automatically when a conversation ends. single - The service will be stopped when a conversation ends. |
| `keywordDetect` | Boolean (required) Indicates if a keyword is to be used for activating speech recognition. Possible values are: true: Activated by a keyword. The default keyword is "Snowboy". To change the keyword model, refer snowboy.kitt.ai . Download custom the keyword model and move it to /etc/googleAssistant/ on your device. Then, modify KEYWORD_DETECT_MODEL in /var/systemd/system/env/ai.env . false: Activat |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.ai.voice/start '{"mode": "continuous", "keywordDetect": true}
```

> ACG: ai.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service is used to recognize voice input. It can use and customize the configurations defined by the configuration API ( com.webos.service.config ).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ai-voice/)

<a id="stop"></a>
## `stop`

`luna://com.webos.service.ai.voice/stop`

Stops the service. Make sure to call this method before starting another engine. Note: This method is only for allowed clients.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.ai.voice/stop '{}
```

> ACG: ai.management \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: This service is used to recognize voice input. It can use and customize the configurations defined by the configuration API ( com.webos.service.config ).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ai-voice/)
