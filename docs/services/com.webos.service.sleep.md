# `com.webos.service.sleep`

Power/sleep management (legacy com.palm.power interface): handles suspend and resume activity tracking and coordinates shutdown and reboot with app and service acknowledgements.

27 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`com/palm/power/activityEnd`](#com_palm_power_activityend) | public |  | power-mgmt | documented | Cancel a previous request (identified by "id") which was registered using activityStart. |
| [`com/palm/power/activityStart`](#com_palm_power_activitystart) | public |  | power-mgmt | documented | An activity is a specified time duration for which you do not want the system to suspend. This method requests that the system create an act |
| [`com/palm/power/clientCancelByName`](#com_palm_power_clientcancelbyname) | public |  | power-mgmt | documented | Unregister the client by its name. |
| [`com/palm/power/forceSuspend`](#com_palm_power_forcesuspend) | public |  | power-mgmt | documented | Force the device to go into suspend even with charger connected or any activity is still active. Note: Used for developer testing purposes. |
| [`com/palm/power/identify`](#com_palm_power_identify) | public | yes | power-mgmt | documented | Register a new client with the given name |
| [`com/palm/power/prepareSuspendAck`](#com_palm_power_preparesuspendack) | public |  | power-mgmt | documented | Used by a client to respond (ack or nack) to the "prepareSuspend" signal. Once the client sends ack to the "prepareSuspend" signal, the clie |
| [`com/palm/power/prepareSuspendRegister`](#com_palm_power_preparesuspendregister) | public |  | power-mgmt | documented | Register a client (already registered with "identify" call) for "prepare suspend" signal. This will add to the counter "sNumPrepareSuspend"  |
| [`com/palm/power/suspendRequestAck`](#com_palm_power_suspendrequestack) | public |  | power-mgmt | documented | Add the client's count in the total number of ACKs received for the "suspend request" signal. |
| [`com/palm/power/suspendRequestRegister`](#com_palm_power_suspendrequestregister) | public |  | power-mgmt | documented | Register a client (already registered with "identify" call) for "suspend request" signal. This will add to the counter "sNumSuspendRequest"  |
| [`com/palm/power/TESTSuspend`](#com_palm_power_testsuspend) | public |  | power-mgmt | documented | Schedule the IdleCheck thread to check if the device can suspend. Note: Used for developer testing purposes. |
| [`shutdown/initiate`](#shutdown_initiate) | public |  | power-mgmt | documented | Starts the shutdown process. It sends the shutdownApplications and shutdownServices signals to all the registered apps/services. Returns "tr |
| [`shutdown/machineOff`](#shutdown_machineoff) | public |  | power-mgmt | documented | Shuts down the machine forcefully. |
| [`shutdown/machineReboot`](#shutdown_machinereboot) | public |  | power-mgmt | documented | Reboots the machine forcefully by calling "reboot". |
| [`shutdown/shutdownApplications`](#shutdown_shutdownapplications) | unknown |  | power-mgmt | documented | This is the signal sent out by the sleepd daemon to the applications when the shutdown process starts. The daemon expects to get a response  |
| [`shutdown/shutdownApplicationsAck`](#shutdown_shutdownapplicationsack) | public |  | power-mgmt | documented | Sets the client's response as ACK for the "shutdownApplications" signal and trigger the dispatcher for the shutdown state machine, so that i |
| [`shutdown/shutdownApplicationsRegister`](#shutdown_shutdownapplicationsregister) | public |  | power-mgmt | documented | Registers an application for the "shutdownApplications" signal. Returns the client ID of the client. |
| [`shutdown/shutdownServices`](#shutdown_shutdownservices) | unknown |  | power-mgmt | documented | This is the signal sent out by the sleepd daemon to the services when the shutdown process starts. The daemon expects to get a response from |
| [`shutdown/shutdownServicesAck`](#shutdown_shutdownservicesack) | public |  | power-mgmt | documented | Sets the client's response as ACK for the "shutdownServices" signal and trigger the dispatcher for the shutdown state machine, so that if th |
| [`shutdown/shutdownServicesRegister`](#shutdown_shutdownservicesregister) | public |  | power-mgmt | documented | Registers an application for the "shutdownApplications" signal. Returns the client ID of the client added. |
| [`shutdown/TESTresetShutdownState`](#shutdown_testresetshutdownstate) | public |  | power-mgmt | documented | Called by test code to reset state machine to square 1. Note: Used for developer testing purposes. |
| [`time/alarmAdd`](#time_alarmadd) | public | yes | power-mgmt | documented | Set alarm to fire in a fixed time in the future. |
| [`time/alarmAddCalendar`](#time_alarmaddcalendar) | public | yes | power-mgmt | documented | Set a calendar event. |
| [`time/alarmQuery`](#time_alarmquery) | public |  | power-mgmt | documented | Query for set of alarms identified by 'serviceName' & 'key'. |
| [`time/alarmRemove`](#time_alarmremove) | public |  | power-mgmt | documented | Removes an alarm by id. |
| [`time/internalAlarmFired`](#time_internalalarmfired) | public |  | power-mgmt | documented | Called when an RTC alarm is fired. |
| [`timeout/clear`](#timeout_clear) | public |  | power-mgmt | documented | Handles a timeout/clear message and deletes a timeout by its key. |
| [`timeout/set`](#timeout_set) | public |  | power-mgmt | documented | Handles a timeout/set message and adds a new power timeout. Relative timeouts can be set by passing the "in" parameter. Absolute timeouts ca |

<a id="com_palm_power_activityend"></a>
## `com/palm/power/activityEnd`

`luna://com.webos.service.sleep/com/palm/power/activityEnd`

Cancel a previous request (identified by "id") which was registered using activityStart.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of activity that needs to be ended. This ID should be the same as one specified while calling activityStart method |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) ErrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | Number (optional) Return -1 In case of error |

```sh
luna-send -n -f luna://com.webos.service.sleep/com/palm/power/activityEnd '{"id":"Diagnostics activity"}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_activitystart"></a>
## `com/palm/power/activityStart`

`luna://com.webos.service.sleep/com/palm/power/activityStart`

An activity is a specified time duration for which you do not want the system to suspend. This method requests that the system create an activity for "duration" (in milliseconds) with an associated "id" (activity name).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the activity , which can be any string as defined by the caller |
| `duration_ms` | number (required) Duration of activity in milliseconds This is the amount of time the caller does not want sleepd to suspend the system |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) ErrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | String (optional) return errorCode as -1 if method call fails |

```sh
luna-send -n 1 -f luna://com.webos.service.sleep/com/palm/power/activityStart '{"id":"Diagnostics activity", "duration_ms":100}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_clientcancelbyname"></a>
## `com/palm/power/clientCancelByName`

`luna://com.webos.service.sleep/com/palm/power/clientCancelByName`

Unregister the client by its name.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientName` | String (required) Name of the client |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) ErrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | String (optional) return errorCode as -1 if method call fails |

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/clientCancelByName '{"clientName":"rdxd"}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_forcesuspend"></a>
## `com/palm/power/forceSuspend`

`luna://com.webos.service.sleep/com/palm/power/forceSuspend`

Force the device to go into suspend even with charger connected or any activity is still active. Note: Used for developer testing purposes.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/forceSuspend '{}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_identify"></a>
## `com/palm/power/identify`

`luna://com.webos.service.sleep/com/palm/power/identify`

Register a new client with the given name

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientName` | String (required) Name of the client |
| `subscribe` | Boolean (required) Should be always set to true , since subscription is necessary for this method. |

**Returns:**

| Field | Type / notes |
|---|---|
| `clientId` | String (optional) The new ID created for the client |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | Number (optional) Return -1 as errorCode |

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/identify '{"subscribe":true, "clientName":"rdxd"}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; clientId:String; subscribed:Boolean; errorText:String; errorCode:Number \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_preparesuspendack"></a>
## `com/palm/power/prepareSuspendAck`

`luna://com.webos.service.sleep/com/palm/power/prepareSuspendAck`

Used by a client to respond (ack or nack) to the "prepareSuspend" signal. Once the client sends ack to the "prepareSuspend" signal, the client does not do any more operations and prepare itself for the system suspend.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) ID of the client |
| `ack` | Boolean (required) To ack for prepareSuspend cycle, set ack to true To nack for prepareSuspend cycle, set ack to false This parameter needs to be set, else the method will return an error |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) ErrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | Number (optional) Return errorCode as -1 if method call fails |

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/prepareSuspendAck '{"clientId":"VGb93LuP.2", "ack":true}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_preparesuspendregister"></a>
## `com/palm/power/prepareSuspendRegister`

`luna://com.webos.service.sleep/com/palm/power/prepareSuspendRegister`

Register a client (already registered with "identify" call) for "prepare suspend" signal. This will add to the counter "sNumPrepareSuspend" before every polling to make a decision to proceed with the suspend action or postpone it later.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) ID of the client as returned in the identify method call |
| `register` | Boolean (required) To register a vote in total count for "prepareSuspend" voting cycle, set register to true To not register a vote in total count for "prepareSuspend" voting cycle, set register to false This parameter needs to be set, else the method will return an error |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) ErrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | Number (optional) Return errorCode -1 if method call fails |

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/prepareSuspendRegister '{"clientId":"MRw5pw2V.2", "register":true}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_suspendrequestack"></a>
## `com/palm/power/suspendRequestAck`

`luna://com.webos.service.sleep/com/palm/power/suspendRequestAck`

Add the client's count in the total number of ACKs received for the "suspend request" signal.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) ID of the client as returned in the identify method call |
| `ack` | Boolean (required) To ack for suspendRequest cycle, set ack to true To nack for suspendRequest cycle, set ack to false This parameter needs to be set, else the method will return an error |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) ErrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | String (optional) return errorCode as -1 if method call fails |

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/suspendRequestAck '{"clientId":"VVxhXwzw.2", "ack":true}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_suspendrequestregister"></a>
## `com/palm/power/suspendRequestRegister`

`luna://com.webos.service.sleep/com/palm/power/suspendRequestRegister`

Register a client (already registered with "identify" call) for "suspend request" signal. This will add to the counter "sNumSuspendRequest" before every polling to make a decision to proceed with the suspend action or postpone it later.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) ID of the client as returned in the identify method call |
| `register` | Boolean (required) To register a vote in total count for "suspendRequest" voting cycle, set register to true To not register a vote in total count for "suspendRequest" voting cycle, set register to false This parameter needs to be set, else the method will return an error |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) ErrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `errorCode` | String (optional) return errorCode as -1 if method call fails |

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/suspendRequestRegister '{"clientId":"/var/run/ls2/T4fb64.4", "register":true}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="com_palm_power_testsuspend"></a>
## `com/palm/power/TESTSuspend`

`luna://com.webos.service.sleep/com/palm/power/TESTSuspend`

Schedule the IdleCheck thread to check if the device can suspend. Note: Used for developer testing purposes.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.sleep/com/palm/power/TESTSuspend '{}
```

> ACG: sleep.management,sleep.operation \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_initiate"></a>
## `shutdown/initiate`

`luna://com.webos.service.sleep/shutdown/initiate`

Starts the shutdown process. It sends the shutdownApplications and shutdownServices signals to all the registered apps/services. Returns "true" once the shutdown process is complete and the system decides that it can shutdown. Note : This call does not do the actual shutdown; instead use the machineOff method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `success` | Boolean (required) Always returns true |

```sh
luna-send -n 1 luna://com.webos.service.sleep/shutdown/initiate '{}
```

> ACG: sleep.management \| Returns: success:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_machineoff"></a>
## `shutdown/machineOff`

`luna://com.webos.service.sleep/shutdown/machineOff`

Shuts down the machine forcefully.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+; OSE/ports; TV status unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | String (required) Reason for the shutdown. Possible values are: remoteKey: Power off using remote control. offTimer: Power off using OFF timer. localKey: Power off using using the devices hardware power on/off key. |

```sh
luna-send -n 1 luna://com.webos.service.sleep/shutdown/machineOff '{"reason":"remoteKey"}
```

> ACG: sleep.management \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th \|\| Appears in webOS ports power menu; no webOS TV usage verified here.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/), [2](https://github.com/webOS-ports/luna-next-cardshell/blob/HEAD/qml/Notifications/PowerMenu.qml)

<a id="shutdown_machinereboot"></a>
## `shutdown/machineReboot`

`luna://com.webos.service.sleep/shutdown/machineReboot`

Reboots the machine forcefully by calling "reboot".

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 13+; webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | String (required) The reason why caller wants to reboot the system. Possible values are: reset: Reboot after device was reset. ota: Reboot after OTA update completion. SwDownload: Reboot after software download. |

```sh
luna-send -n 1 luna://com.webos.service.sleep/shutdown/machineReboot '{"reason":"reset"}
```

> ACG: sleep.management \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th \|\| Used as createAlert onclick target by HBC and RootMyTV.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/), [2](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/startup.sh), [3](https://github.com/RootMyTV/RootMyTV.github.io/blob/HEAD/files/stage3.sh)

<a id="shutdown_shutdownapplications"></a>
## `shutdown/shutdownApplications`

`luna://com.webos.service.sleep/shutdown/shutdownApplications`

This is the signal sent out by the sleepd daemon to the applications when the shutdown process starts. The daemon expects to get a response from all the registered applications if they are ready for the system shutdown.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sleep/shutdown/shutdownApplications '{}'
```

> Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_shutdownapplicationsack"></a>
## `shutdown/shutdownApplicationsAck`

`luna://com.webos.service.sleep/shutdown/shutdownApplicationsAck`

Sets the client's response as ACK for the "shutdownApplications" signal and trigger the dispatcher for the shutdown state machine, so that if the total client ACK count exceeds total number of clients, it can proceed to the next state.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) The unique token for this client which was generated in a previous shutdownApplicationsRegister call. |

```sh
luna-send -n 1 luna://com.webos.service.sleep/shutdown/shutdownApplicationsAck '{"clientId":"/var/run/ls2/T4fb64.4"}
```

> ACG: sleep.management \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_shutdownapplicationsregister"></a>
## `shutdown/shutdownApplicationsRegister`

`luna://com.webos.service.sleep/shutdown/shutdownApplicationsRegister`

Registers an application for the "shutdownApplications" signal. Returns the client ID of the client.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientName` | String (required) A unique name which the caller decides for the application. |

**Returns:**

| Field | Type / notes |
|---|---|
| `clientId` | String (required) This is a unique token generated for this client by this method, which should be used by the caller for acknowledging the shutdownApplications signal later. |

```sh
luna-send -n 1 -f luna://com.webos.service.sleep/shutdown/shutdownApplicationsRegister '{"clientName":"facebook app"}
```

> ACG: sleep.management \| Returns: returnValue:Boolean; clientId:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_shutdownservices"></a>
## `shutdown/shutdownServices`

`luna://com.webos.service.sleep/shutdown/shutdownServices`

This is the signal sent out by the sleepd daemon to the services when the shutdown process starts. The daemon expects to get a response from all the registered services if they are ready for the system shutdown.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.sleep/shutdown/shutdownServices '{}'
```

> Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_shutdownservicesack"></a>
## `shutdown/shutdownServicesAck`

`luna://com.webos.service.sleep/shutdown/shutdownServicesAck`

Sets the client's response as ACK for the "shutdownServices" signal and trigger the dispatcher for the shutdown state machine, so that if the total client ACK count exceeds total number of clients, it can proceed to the next state.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) The unique token for this client which was generated in a previous shutdownServicesRegister call. |

```sh
luna-send -n 1 -f luna://com.webos.service.sleep/shutdown/shutdownServicesAck '{"clientId":"5zUn94NP.2"}
```

> ACG: sleep.management \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_shutdownservicesregister"></a>
## `shutdown/shutdownServicesRegister`

`luna://com.webos.service.sleep/shutdown/shutdownServicesRegister`

Registers an application for the "shutdownApplications" signal. Returns the client ID of the client added.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientName` | String (required) A unique name which the caller decides for the application |

**Returns:**

| Field | Type / notes |
|---|---|
| `clientId` | String (required) This is a unique token generated for this client by this method, which should be used by the caller for acknowledging the shutdownApplications signal later. |

```sh
luna-send -n 1 luna://com.webos.service.sleep/shutdown/shutdownServicesRegister '{"clientName":"facebook service"}
```

> ACG: sleep.management \| Returns: returnValue:Boolean; clientId:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="shutdown_testresetshutdownstate"></a>
## `shutdown/TESTresetShutdownState`

`luna://com.webos.service.sleep/shutdown/TESTresetShutdownState`

Called by test code to reset state machine to square 1. Note: Used for developer testing purposes.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.sleep/shutdown/TESTresetShutdownState '{}
```

> ACG: sleep.management \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="time_alarmadd"></a>
## `time/alarmAdd`

`luna://com.webos.service.sleep/time/alarmAdd`

Set alarm to fire in a fixed time in the future.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `serviceName` | String (optional) Name of the service for which the alarm is to be added |
| `key` | String (optional) identifier for the alarm |
| `relative_time` | String (required) amount of relative time after which the alarm should go off. time format is hh:mm:ss (hours:minutes:seconds) |
| `subscribe` | Boolean (optional) true if the results are to be subscribed |

**Returns:**

| Field | Type / notes |
|---|---|
| `alarmId` | Number (optional) alarmId if the alarm was successfully added |
| `errorText` | String (optional) Error message on failure |

```sh
luna-send -n 1 luna://com.webos.service.sleep/time/alarmAdd '{}'
```

> ACG: sleep.operation \| Returns: alarmId:Number; subscribed:Boolean; returnValue:Boolean; errorText:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="time_alarmaddcalendar"></a>
## `time/alarmAddCalendar`

`luna://com.webos.service.sleep/time/alarmAddCalendar`

Set a calendar event.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `serviceName` | String (optional) Service name for which the alarm needs to be set |
| `key` | String (optional) alarm identifier |
| `date` | String (required) date at which alarm should fire. format is mm-dd-yyyy |
| `time` | String (required) time at which alarm should fire. format is hh:mm:ss (0-23 hrs) (hh- hours, mm-minutes, ss-seconds) |
| `subscribe` | Boolean (optional) to subscribe to the results of this call |

**Returns:**

| Field | Type / notes |
|---|---|
| `alarmId` | Number (optional) alarm Id of the added calendar alarm if alarmAddCalendar is successful |
| `key` | String (optional) alarm identifier of the fired alarm if provided during the alarmAddCalendar request. |
| `fired` | Boolean (optional) true: if the alarm has fired false: if the alarm has not fired |
| `errorText` | String (optional) Error message on failure |

```sh
luna-send -n 2 luna://com.webos.service.sleep/time/alarmAddCalendar '{"date":"01-24-2020", "time":"10:01:03", "subscribe":}'
```

> ACG: sleep.operation \| Returns: alarmId:Number; subscribed:String; key:String; fired:Boolean; returnValue:Boolean; errorText:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="time_alarmquery"></a>
## `time/alarmQuery`

`luna://com.webos.service.sleep/time/alarmQuery`

Query for set of alarms identified by 'serviceName' & 'key'.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `serviceName` | String (required) service name for which the alarm is being queried |
| `key` | String (required) identifier for the alarm |

**Returns:**

| Field | Type / notes |
|---|---|
| `alarms` | Object array (optional) An array of alarms identified by provided serviceName and key |
| `errorText` | String (optional) Error message if call fails |

```sh
luna-send -n 1 luna://com.webos.service.sleep/time/alarmQuery '{"serviceName":"com.palm.ser2", "key":"alarmCalendar2"}'
```

> ACG: sleep.operation \| Returns: returnValue:Boolean; alarms:Object array; errorText:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="time_alarmremove"></a>
## `time/alarmRemove`

`luna://com.webos.service.sleep/time/alarmRemove`

Removes an alarm by id.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `alarmId` | number (required) id of the alarm to be removed. |

```sh
luna-send -n 1 luna://com.webos.service.sleep/time/alarmRemove '{"alarmId":10}'
```

> ACG: sleep.operation \| Returns: returnValue:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="time_internalalarmfired"></a>
## `time/internalAlarmFired`

`luna://com.webos.service.sleep/time/internalAlarmFired`

Called when an RTC alarm is fired.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.sleep/time/internalAlarmFired '{}
```

> ACG: sleep.operation \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="timeout_clear"></a>
## `timeout/clear`

`luna://com.webos.service.sleep/timeout/clear`

Handles a timeout/clear message and deletes a timeout by its key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Unique identifier for the alarm |

**Returns:**

| Field | Type / notes |
|---|---|
| `key` | String (optional) Unique identifier for the alarm |

```sh
luna-send -n 1 luna://com.webos.service.sleep/timeout/clear '{"key":"com.webos.service.activitymanager.wakeup"}
```

> ACG: sleep.operation \| Returns: returnValue:Boolean; key:String \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)

<a id="timeout_set"></a>
## `timeout/set`

`luna://com.webos.service.sleep/timeout/set`

Handles a timeout/set message and adds a new power timeout. Relative timeouts can be set by passing the "in" parameter. Absolute timeouts can be set by passing the "at" parameter.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Unique key to identify individual alarms |
| `at` | String (required) Absolute time for the alarm to be set to. Either this or the "in" parameter must be passed. |
| `in` | String (required) Relative time for the alarm to be set to. Either this or the "at" parameter must be passed. |
| `uri` | String (required) URI to be passed to the alarm |
| `params` | String (required) Parameters for the URI. |
| `wakeup` | Boolean (optional) If a wakeup alarm needs to be set. |
| `activity_id` | String (optional) Activity ID |
| `activity_duration_ms` | Number (optional) Duration in milliseconds to keep the device ON. Needs to be provided only if activity_id is provided. |
| `keep_existing` | Boolean (optional) Set to true to keep existing alarms with the same key |

**Returns:**

| Field | Type / notes |
|---|---|
| `key` | String (optional) Unique key used to identify the alarm |
| `kept\_existing` | Boolean (optional) If the existing alarms have been kept |

```sh
luna-send -n 1 luna://com.webos.service.sleep/timeout/set '{ "at":"03/12/2014 06:26:46", "key":"com.webos.service.activitymanager.wakeup", "params":{}, "uri":"luna://com.webos.service.activitymanager/callback/scheduledwakeup", "wakeup":true }
```

> ACG: sleep.operation \| Returns: returnValue:Boolean; key:String; kept_existing:Boolean \| Service: This service registers itself as com.webos.service.power and as com.webos.service.alarm and is provided by the sleep daemon (sleepd). It allows applications to interact with (e.g. defer or prevent) th

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-sleep/)
