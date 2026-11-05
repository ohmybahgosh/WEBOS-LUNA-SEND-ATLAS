# `com.webos.service.power2`

Power-management service (webOS OSE): powers the device on/off and reboots it, manages state transitions and wake locks, and reports/sets the power-on reason.

11 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`acquireWakeLock`](#acquirewakelock) | public |  | power-mgmt | documented | Allows the device to remain powered on for a specific time period, after which the lock is released. Note: No other state change operation c |
| [`getPowerOnReason`](#getpoweronreason) | public | yes | power-mgmt | documented | Gets the last reason set for powering-on the device. |
| [`getState`](#getstate) | public | yes | power-mgmt | documented | Obtains the currently set state. |
| [`notifyAlarmExpiry`](#notifyalarmexpiry) | public |  | power-mgmt | documented | Notifies about the alarm expiry. |
| [`reboot`](#reboot) | public |  | power-mgmt | documented | Reboots the device with in timeout after acknowledged from registered client. LunaInterfacePMSRoot:TimeOut is configured in /var/PMS/pms.con |
| [`registerStateTransition`](#registerstatetransition) | public | yes | power-mgmt | documented | Clients can register to get notified when the state changes from a specified state. For example, if registered to get notifications on state |
| [`releaseWakeLock`](#releasewakelock) | public |  | power-mgmt | documented | Instantly releases the wake lock for the client. |
| [`respondStateTransitionAck`](#respondstatetransitionack) | public |  | power-mgmt | documented | For clients that have registered for state change notifications, some state transitions require acceptance (acknowledgement) of all clients  |
| [`setPowerOnReason`](#setpoweronreason) | public |  | power-mgmt | documented | Specify the reason that caused the device to be powered on. |
| [`setState`](#setstate) | public |  | power-mgmt | documented | Sets the state of the device. This method forcefully sets the state and ignores the sequential flow of power states. This means that the cli |
| [`shutdown`](#shutdown) | public |  | power-mgmt | documented | Shuts down the device. Note : Client will be prompted for acknowledgement if registered for state change notifications. This shutdown API wi |

<a id="acquirewakelock"></a>
## `acquireWakeLock`

`luna://com.webos.service.power2/acquireWakeLock`

Allows the device to remain powered on for a specific time period, after which the lock is released. Note: No other state change operation can be executed during this time period.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) Identity of the client. |
| `timeout` | Number (required) The duration (in seconds) to hold the lock. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/acquireWakeLock '{ "clientId":"com.webos.lunasend-5726", "timeout":60 }
```

> ACG: power.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="getpoweronreason"></a>
## `getPowerOnReason`

`luna://com.webos.service.power2/getPowerOnReason`

Gets the last reason set for powering-on the device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe for notifications on any changes. true - Subscribe to be notified on any changes to the power on reason. false - Get the latest reason (one-time only). |

**Returns:**

| Field | Type / notes |
|---|---|
| `reason` | String (required) Indicates the power on reason. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/getPowerOnReason '{ "subscribe":true }
```

> ACG: power.operation \| Returns: subscribed:Boolean; reason:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.power2/getState`

Obtains the currently set state.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications on state changes. true - Subscribe to be notified on state changes. false - Get the latest state (one-time only). |

**Returns:**

| Field | Type / notes |
|---|---|
| `state` | String (required) Current state. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n i luna://com.webos.service.power2/getState '{ "subscribe":true }
```

> ACG: power.operation \| Returns: state:String; subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="notifyalarmexpiry"></a>
## `notifyAlarmExpiry`

`luna://com.webos.service.power2/notifyAlarmExpiry`

Notifies about the alarm expiry.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) ID of the client which called the acquirewakelock method. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of this method for details. |
| `clientId` | String (optional) ID of the client. |

```sh
luna-send -n 1 -f luna://com.webos.service.power2/notifyAlarmExpiry '{"clientId" : "/var/run/ls2/yUGYsP.4"}
```

> ACG: None \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; clientId:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="reboot"></a>
## `reboot`

`luna://com.webos.service.power2/reboot`

Reboots the device with in timeout after acknowledged from registered client. LunaInterfacePMSRoot:TimeOut is configured in /var/PMS/pms.conf file as 15mins by default. Timeout is in HH:MM:SS format Note : Client will be prompted for acknowledgement if registered for state change notifications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | String (required) The event that caused the device to be reboot. Possible values are: reset - Reboot after device was reset ota - Reboot after OTA update completion SwDownload - Reboot after software download |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/reboot '{ "reason" : "ota" }
```

> ACG: power.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="registerstatetransition"></a>
## `registerStateTransition`

`luna://com.webos.service.power2/registerStateTransition`

Clients can register to get notified when the state changes from a specified state. For example, if registered to get notifications on state “ACTIVE”, you will get notified when state changes from “ACTIVE” to any other state. Some transitions require acceptance (acknowledgement) from all clients who register to this state. For this check the respondStateTransitionAck() method. Note: It is a subscription method. Subscription is notified when specified state change happens. setState method can be used for state change forcefully.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `state` | String (required) State for which to register. |

**Returns:**

| Field | Type / notes |
|---|---|
| `clientId` | String (required) Identity of the client. |
| `state` | String (required) Current state of the device. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n i luna://com.webos.service.power2/registerStateTransition '{ "state":"ActiveState" }
```

> ACG: power.operation \| Returns: clientId:String; subscribed:Boolean; state:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="releasewakelock"></a>
## `releaseWakeLock`

`luna://com.webos.service.power2/releaseWakeLock`

Instantly releases the wake lock for the client.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) Identity of the client who has acquired the lock. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/releaseWakeLock '{ "clientId" : "com.webos.lunasend-1110" }
```

> ACG: power.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="respondstatetransitionack"></a>
## `respondStateTransitionAck`

`luna://com.webos.service.power2/respondStateTransitionAck`

For clients that have registered for state change notifications, some state transitions require acceptance (acknowledgement) of all clients who register for this state : If all subscribers approve (ACK), the state change occurs. If even one subscriber rejects (NACK), the state does not change. Clients who have not subscribed to that state are not required to vote. No user input is considered as acceptance of the state change.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `state` | String (required) Registered state. |
| `ack` | Boolean (required) Client vote. Possible values are: true - positive acknowledgement (ACK) confirming the state transition. false - negative acknowledgement (NACK) to reject the state transition. |
| `token` | String (required) Session token generated in response to the registerStateTransition() method. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/respondStateTransitionAck '{ "ack":true, "state":"ActiveState", "token":"6UixZdy.4" }
```

> ACG: power.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="setpoweronreason"></a>
## `setPowerOnReason`

`luna://com.webos.service.power2/setPowerOnReason`

Specify the reason that caused the device to be powered on.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | String (required) The event that caused the device to be powered. Possible values are: remoteKey - Powered on using the remote control onTimer - Powered on using ON timer SwDownload - Powered on after software download ota - Powered on after OTA update completion |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/setPowerOnReason '{ "reason":"remoteKey" }
```

> ACG: power.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="setstate"></a>
## `setState`

`luna://com.webos.service.power2/setState`

Sets the state of the device. This method forcefully sets the state and ignores the sequential flow of power states. This means that the client is not prompted for acknowledgement, even if you have registered for state change notifications (using registerStateTransition() method). Note: This method can also reboot or shutdown the device. However, it is advisable to use the specific methods provided for these purposes.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `state` | String (required) State to be set. |
| `reason` | Number (required) The event that caused the state change. Possible values are: 0 - wake on LAN via external device network 1 - wake on WiFi via external device network 2 - power on/off by remote 3 - power on by on timer |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/setState '{ "state":"ActiveState", "reason":1 }
```

> ACG: power.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)

<a id="shutdown"></a>
## `shutdown`

`luna://com.webos.service.power2/shutdown`

Shuts down the device. Note : Client will be prompted for acknowledgement if registered for state change notifications. This shutdown API will work differently for ose. If it is in ActiveState, it may go garage state base if it met preconditions i.e wifi on and SSID. (garageSSID can be configured in /var/PMS/pms.conf). Shuts down the device with in timeout after acknowledged from connection manager service(Precondition not met). LunaInterfacePMSRoot:TimeOut is configured in /var/PMS/pms.conf file as 15mins by default. Timeout is in HH:MM:SS format

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | String (required) The event that causes the device to be shutdown. Possible values are: remoteKey - Power off using remote control offTimer - Power off using OFF timer localKey - Power off using using the devices hardware power on/off key diagnosticsDone - Power off device when diagnostics operation done |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the API Error Codes Reference for more details. |

```sh
luna-send -n 1 luna://com.webos.service.power2/shutdown '{ "reason" : "remoteKey" }
```

> ACG: power.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows client applications to power-on, power-off, and perform other power-related operations on the device.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-power2/)
