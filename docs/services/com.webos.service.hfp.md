# `com.webos.service.hfp`

11 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`audioGateway`](#audiogateway) | unknown |  | bluetooth | Contains the information about the connected AG device. |
| [`hf/answerCall`](#hf_answercall) | public |  | bluetooth | Answers the incoming call from the given AG. |
| [`hf/call`](#hf_call) | public |  | bluetooth | Dials the previous phone number (stored after the previous call) using the memory dialing. Memory dialing : A telephone feature that allows  |
| [`hf/getStatus`](#hf_getstatus) | public | yes | bluetooth | Returns the current status of the connected AG devices. |
| [`hf/holdActiveCalls`](#hf_holdactivecalls) | public |  | bluetooth | Places all the active calls (if any exist) on hold and answers another (held or waiting) call. |
| [`hf/mergeCall`](#hf_mergecall) | public |  | bluetooth | Adds a held call to the conversation ( merging calls into a conference call ). |
| [`hf/releaseActiveCalls`](#hf_releaseactivecalls) | public |  | bluetooth | Releases all the active and answers the waiting call of the given AG. |
| [`hf/releaseHeldCalls`](#hf_releaseheldcalls) | public |  | bluetooth | Releases all the held calls of the given AG. |
| [`hf/setVoiceRecognition`](#hf_setvoicerecognition) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only |
| [`hf/setVolume`](#hf_setvolume) | public |  | bluetooth | Sets the SCO volume level. |
| [`hf/terminateCall`](#hf_terminatecall) | public |  | bluetooth | Terminates the active call with the given AG. |

<a id="audiogateway"></a>
## `audioGateway`

`luna://com.webos.service.hfp/audioGateway`

Contains the information about the connected AG device.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/audioGateway '{}'
```

> Service: Provides the HFP service functions in webOS. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_answercall"></a>
## `hf/answerCall`

`luna://com.webos.service.hfp/hf/answerCall`

Answers the incoming call from the given AG.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device (AG). |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/answerCall '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_call"></a>
## `hf/call`

`luna://com.webos.service.hfp/hf/call`

Dials the previous phone number (stored after the previous call) using the memory dialing. Memory dialing : A telephone feature that allows placing a call by accessing a previously stored number. Note : If the number and the memoryDialing parameter are passed simultaneously, an error will be returned. If none of the number and the memoryDialing parameter is passed, AG may place a call to the latest outgoing number (depends on AG ).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device (AG). |
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |
| `number` | String (optional) Indicates the phone number to be dialed. |
| `memoryDialing` | Number (optional) Indicates the last stored number(used in the previous call) that can be used for memory dialing. |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/call '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_getstatus"></a>
## `hf/getStatus`

`luna://com.webos.service.hfp/hf/getStatus`

Returns the current status of the connected AG devices.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default : false |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/getStatus '{ "subscribe":false }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; subscribed:Boolean; audioGateways:Object array: audioGateway; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_holdactivecalls"></a>
## `hf/holdActiveCalls`

`luna://com.webos.service.hfp/hf/holdActiveCalls`

Places all the active calls (if any exist) on hold and answers another (held or waiting) call.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device (AG). |
| `index` | Number (optional) Indicates the index of a specific call to be active. |
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/holdActiveCalls '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; index:Number; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_mergecall"></a>
## `hf/mergeCall`

`luna://com.webos.service.hfp/hf/mergeCall`

Adds a held call to the conversation ( merging calls into a conference call ).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device (AG). |
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/mergeCall '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_releaseactivecalls"></a>
## `hf/releaseActiveCalls`

`luna://com.webos.service.hfp/hf/releaseActiveCalls`

Releases all the active and answers the waiting call of the given AG.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device (AG). |
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/releaseHeldCalls '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_releaseheldcalls"></a>
## `hf/releaseHeldCalls`

`luna://com.webos.service.hfp/hf/releaseHeldCalls`

Releases all the held calls of the given AG.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device (AG). |
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/releaseHeldCalls '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_setvoicerecognition"></a>
## `hf/setVoiceRecognition`

`luna://com.webos.service.hfp/hf/setVoiceRecognition`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/setVoiceRecognition '{}'
```

> Listed under ACG group "bluetooth.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.hfp/blob/master/files/sysbus/com.webos.service.hfp.api.json)

<a id="hf_setvolume"></a>
## `hf/setVolume`

`luna://com.webos.service.hfp/hf/setVolume`

Sets the SCO volume level.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device (AG). |
| `volume` | Number (required) Indicates the SCO volume (level to be set). Possible range: [0 - 15]. |
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/setVolume '{ "address":"AA:BB:CC:DD:EE:FF", "volume":7 }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)

<a id="hf_terminatecall"></a>
## `hf/terminateCall`

`luna://com.webos.service.hfp/hf/terminateCall`

Terminates the active call with the given AG.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device (AG). |
| `adapterAddress` | String (optional) Indicates the address of the adapter to be used in the case of multiple adapters. Note: If the adapterAddress is not specified, then the default adapter will be used. If the service is part of a container session, do not specify adapterAddress . Based on the session, by default, a pre-selected adapterAddress is used. |
| `index` | Number (required) Indicates the call to terminate. |

```sh
luna-send -n 1 -f luna://com.webos.service.hfp/hf/terminateCall '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "index":1 }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides the HFP service functions in webOS.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-hfp/)
