# `com.webos.service.activitymanager`

Activity Manager: monitors system events and runs actions in response, and schedules work periodically or at set times; apps create, adopt, complete, cancel and focus activities.

36 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`Activity`](#activity) | unknown |  | activity | documented | Represent everything about an Activity-name, type, state, requirements, schedule, trigger, callback, id,creator, adopters, processes, flows, |
| [`addFocus`](#addfocus) | public |  | activity | documented | Add a focus to the target Activity and remove a focus from source Activity. If a focus is added successfully, addFocus will generate "focus" |
| [`adopt`](#adopt) | public | yes | activity | documented | The Activity Manager considers the creator of the Activity as a parent. Therefore, the creator of the activity does not need to adopt the Ac |
| [`Callback`](#callback) | unknown |  | activity | documented | The Callback object specifies a method to be called, and optionally arguments that should be passed to that method when the activity moves f |
| [`callback/scheduledwakeup`](#callback_scheduledwakeup) | public |  | activity | documented | A callback method indicating the scheduled time of the activities. Note: Do not use this method in your application or service. This method  |
| [`cancel`](#cancel) | public |  | activity | documented | Terminate the specified Activity and send a "cancel" event to all subscribers to this Activity. This method succeeds if the Activity exists. |
| [`complete`](#complete) | public |  | activity | documented | Terminate the specified Activity and optionally restart it with(or without) new callback, schedule or trigger. Only the Activity's parent ca |
| [`create`](#create) | public | yes | activity | documented | Note: The 'creator' in Activity object can be set only by configurator. Create a new Activity and return its ID. Each of created Activities  |
| [`devel/concurrency`](#devel_concurrency) | public |  | activity | documented | Set background Activity concurrency level for the Activity Manager. |
| [`devel/evict`](#devel_evict) | public |  | activity | documented | Evict one or all Activities from the background queue. |
| [`devel/priorityControl`](#devel_prioritycontrol) | public |  | activity | documented | Enable or disable priority control. |
| [`devel/run`](#devel_run) | public |  | activity | documented | Run one or all Activities that are in ready queue. |
| [`disable`](#disable) | public |  | activity | documented | Disable scheduling new Activities. |
| [`enable`](#enable) | public |  | activity | documented | Enable scheduling new Activities. |
| [`focus`](#focus) | public |  | activity | documented | Focus to target Activity. All currently focused Activities will be lost their focus. If requester is not privileged, this call will fail. Ap |
| [`getActivityInfo`](#getactivityinfo) | public |  | activity | documented | Gets information of Activities. If activityId or activityName is given, getActivityInfo only returns information about that activity. Conver |
| [`getDetails`](#getdetails) | public |  | activity | documented | Gets details of an activity. Note: Use the 'getActivityInfo' method instead. |
| [`getManagerInfo`](#getmanagerinfo) | public |  | activity | documented | Gets Activity Manager related information such as: Activity Manager state - queued and leaked activities List of activities for which power  |
| [`info`](#info) | public |  | activity | documented | Get Activity Manager related information such as Activity Manager state - queued and leaked Activities, list of Activities for which power i |
| [`InfoActivity`](#infoactivity) | unknown |  | activity | documented | Activity information |
| [`InfoCreator`](#infocreator) | unknown |  | activity | documented | Creator information |
| [`InfoQueue`](#infoqueue) | unknown |  | activity | documented | List of Activities for which power is currently locked. |
| [`InfoRequirement`](#inforequirement) | unknown |  | activity | documented | Supported requirement information |
| [`join`](#join) | public | yes | activity | documented | Subscribe to receive events from the specified Activity. Note: Use the 'am-monitor' tool instead. |
| [`list`](#list) | public |  | activity | documented | List Activities that are in running or waiting state. Note: Use the 'getActivityInfo' method instead. |
| [`monitor`](#monitor) | public | yes | activity | documented | Return a current status of the specified Activity. If the caller chooses to subscribe, the method returns the Activity's state when it is ch |
| [`Parent`](#parent) | unknown |  | activity | inferred | Handles the parent. |
| [`pause`](#pause) | public |  | activity | documented | Suspend the work on the specified Activity and place the Activity in pause state. NOTE: An activity can be paused only if it is in the unsat |
| [`release`](#release) | public |  | activity | documented | Allow a parent to free an Activity and notify other subscribers. The Activity is cancelled unless one of its non-parent subscribers adopts i |
| [`Requirement`](#requirement) | unknown |  | activity | documented | The Requirements are preconditions that the Activity Manager will ensure are met before an Activity will be run. Any number of requirements  |
| [`Schedule`](#schedule) | unknown |  | activity | documented | The Schedule object will define the time-based requirements for an Activity. If Schedule is specified, the schedule must be met before the A |
| [`start`](#start) | public |  | activity | documented | Attempt to start the specified Activity, either moving its state from 'created' to 'starting', or from 'paused' to 'resuming'. |
| [`stop`](#stop) | public |  | activity | documented | Stop the specified Activity and send a "stop" event to subscribers to this Activity. This method succeeds if the Activity exists. This metho |
| [`Trigger`](#trigger) | unknown |  | activity | documented | Activities with Triggers do not become runnable until an event occurs on a subscribed method. In addition, other requirements or scheduling  |
| [`Type`](#type) | unknown |  | activity | documented | Indicate how the Activity is handled. Forground or Background Default attributes are associated with background and foreground Activities: F |
| [`unfocus`](#unfocus) | public |  | activity | documented | Remove a focus from the specified Activity. |

<a id="activity"></a>
## `Activity`

`luna://com.webos.service.activitymanager/Activity`

Represent everything about an Activity-name, type, state, requirements, schedule, trigger, callback, id,creator, adopters, processes, flows, and associations.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/Activity '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="addfocus"></a>
## `addFocus`

`luna://com.webos.service.activitymanager/addFocus`

Add a focus to the target Activity and remove a focus from source Activity. If a focus is added successfully, addFocus will generate "focus" events for subscribers of the target Activity.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) The ID of source Activity to remove a focus from. Either this, or activityName is required. |
| `activityName` | String (required) The Name of source Activity to remove a focus from. Either this, or activityID is required. Only the creator of the Activity can specify activityName . |
| `targetActivityId` | Number (uint64_t) (required) The ID of target activity to add a focus to. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/addFocus '{ "activityId":36, "targetActivityId":38 }'
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="adopt"></a>
## `adopt`

`luna://com.webos.service.activitymanager/adopt`

The Activity Manager considers the creator of the Activity as a parent. Therefore, the creator of the activity does not need to adopt the Activity to be a parent. An app or a service registers its willingness to become an Activity's parent, which means becoming an adopter. If there are adopters, all subscribers to this Activity receives an "orphan" event and the Activity is adopted to the new parent, one of the adopters. If there are no waiting adopters, all subscribers to this Activity receives a "cancel" event and the Activity disappears immediately.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Note: Either activityId or activityName is a REQUIRED field. |
| `activityName` | String (required) Activity name. Only the creator of the Activity can specify activityName. Note: Either activityId or activityName is a REQUIRED field. |
| `wait` | Boolean (required) Flag that enables whether to wait until the Activity is available to be adopted or not. If an app or a service wants to wait until the Activity is available to be adopted, set wait to true . If the Activity is not immediately adopted, returnValue will contain true and adopted will contain false . Once the Activity is disconnected with its parent, the caller is informed of an "or |
| `subscribe` | Boolean (required) Flag that enables whether to get informed when status of the created activity has been changed or not. To enable subscribe , set subscribe to true . To disable subscribe , set subscribe to false . The default value of subscribe is false . |
| `detailedEvents` | Boolean (optional) Flag that enables to return detailed Activity information in a subscription response. It needs to be used when subscribe is set to true . To enable detailedEvents , set detailedEvents to true . To disable detailedEvents , set detailedEvents to false . The default value of detailedEvents is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `adopted` | Boolean (optional) adopted indicates a successful or failed adoption. If the app or service adopts the Activity, adopted will contain true. If the app or service does not adopt the Activity, adopted will contain false. |

```sh
luna-send -i -f luna://com.webos.service.activitymanager/adopt '{ "activityId": 90, "wait": true, "subscribe": true, "detailedEvents": false }
```

> ACG: activity.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorCode:Number (int64_t); errorText:String; adopted:Boolean \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="callback"></a>
## `Callback`

`luna://com.webos.service.activitymanager/Callback`

The Callback object specifies a method to be called, and optionally arguments that should be passed to that method when the activity moves from 'satisfied' state to 'expiring'. If the callback method fails:: For normal (non-continuous) activity: activity is moved to 'failed' state. For continuous activity: activity moved to 'unsatisfied' state. To change the behavior when callback fails, use the ' ignoreReturn ' property.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/Callback '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="callback_scheduledwakeup"></a>
## `callback/scheduledwakeup`

`luna://com.webos.service.activitymanager/callback/scheduledwakeup`

A callback method indicating the scheduled time of the activities. Note: Do not use this method in your application or service. This method is only called by sleepd (com.webos.service.alarm) service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 26+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/callback/scheduledwakeup '{}
```

> ACG: activity.wakeup \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.activitymanager/cancel`

Terminate the specified Activity and send a "cancel" event to all subscribers to this Activity. This method succeeds if the Activity exists.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Note: Either activityId or activityName is a REQUIRED field. |
| `activityName` | String (required) Activity name.Only the creator of the Activity can specify activityName . Note: Either activityId or activityName is a REQUIRED field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/cancel '{"activityId" : 93}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="complete"></a>
## `complete`

`luna://com.webos.service.activitymanager/complete`

Terminate the specified Activity and optionally restart it with(or without) new callback, schedule or trigger. Only the Activity's parent can call this method. Other subscribers to the Activity receive a "complete" event. If the Activity is persistent (i.e., persist in the Type object is set to true), the db8 is updated before the call returns. Note: The invocations to callback/triggers are constrained by ACG security model. It means that Activity Manager can invoke trigger/callback when both Activity Manager and activity creator have the permissions to those methods. Otherwise, the method fails with the error "'com.webos.service.activitymanager' doesn't have rights to call callback/trigger".

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Note: Either activityId or activityName is a REQUIRED field. |
| `activityName` | String (required) Activity name.Only the creator of the Activity can specify activityName . Note: Either activityId or activityName is a REQUIRED field. |
| `restart` | Boolean (optional) To restart the Activity with any new callback, schedule or trigger, set restart to true . The restarted Activity goes into the Activity Manager queue. To disable restart, set restart to false . The default value of restart is false . Note: If restart is false , this is equivalent to cancel . Therefore, it is recommended to always set restart to true to avoid confusion. |
| `callback` | Object: Callback (optional) Callback to use when the specified Activity is restarted. To use the current callback condition, do not specify callback parameter. To remove the current callback condition, set callback to false . |
| `schedule` | Object: Schedule (optional) Schedule to use when Activity is restarted. To use the current callback condition, do not specify schedule parameter. To remove the current callback condition, set schedule to false . |
| `trigger` | Object: Trigger (optional) Trigger to use when the specified Activity is restarted. To use the current callback condition, do not specify trigger parameter. To remove the current callback condition, set trigger to false . |
| `metadata` | Object (optional) Opaque object the Activity Manager stores and returns in the callback parameters. To use the current metadata, do not specify metadata parameter. To remove the current metadata, set metadata to false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f -a myapp luna://com.webos.service.activitymanager/create '{ "activity": { "name": "browser closed", "description": "", "type": {"foreground": true}, "callback": { "method": "luna://com.webos.notification/createToast", "params": {"message": "browser closed", "persistent": true} }, "trigger": { "method": "luna://com.webos.service.applicationmanager/getAppLifeStatus", "params": {"subscribe": true}, "where": { "prop": "status", "op": "=", "val": "stop" } } }, "replace": true, "start": true }'
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="create"></a>
## `create`

`luna://com.webos.service.activitymanager/create`

Note: The 'creator' in Activity object can be set only by configurator. Create a new Activity and return its ID. Each of created Activities must have a unique name. Activities can be scheduled to run at a specific time or when certain conditions are met or events occur. If the Activity specify start as true, because the Activity moves to unsatisfied state, you do not need to call start method.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activity` | Object: Activity (required) Activity object. |
| `subscribe` | Boolean (optional) Flag that enables whether to subscribe or not. To enable subscribe, set subscribe to true . The caller becomes a parent of the Activity. To disable subscribe, set subscribe to false . When the caller does not subscribe to the Activity, callback must be specified and start must set to true . The default value of subscribe is false . |
| `detailedEvents` | Boolean (optional) Flag that enables to return detailed Activity information in a subscription response. It needs to be used when subscribe is set to true . To enable detailedEvents , set detailedEvents to true . To disable detailedEvents , set detailedEvents to false . The default value of detailedEvents is false . |
| `start` | Boolean (optional) Start Activity immediately flag. To indicate the Activity is fully-initialized and ready to launch, set start to true . When subscribe is set to false, must set start to true . To disable start , set start to false . If start is set to false, you need to call the start method to make the Activity runnable. The default value of start is false . Note: It is recommended to use star |
| `replace` | Boolean (optional) To create a new Activity with the same name with the existing Activity, set replace to true . This cancels the existing Activity and replaces it to new one. Otherwise, set replace to false . The default value of replace is false . Note: If an Activity is located in '/etc/palm/activities', replace should be set carefully. That is, if replace is true, the Activity created by confi |

**Returns:**

| Field | Type / notes |
|---|---|
| `activityId` | Number (uint64\_t) (optional) Activity ID. |
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -f -i luna://com.webos.service.activitymanager/create '{ "activity": { "name": "basicactivity", "description": "Test create", "type": { "foreground": true } }, "start": true, "subscribe": true }'
```

> ACG: activity.operation \| Returns: returnValue:Boolean; activityId:Number (uint64_t); subscribed:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="devel_concurrency"></a>
## `devel/concurrency`

`luna://com.webos.service.activitymanager/devel/concurrency`

Set background Activity concurrency level for the Activity Manager.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `level` | Number (uint32_t) (required) Number of concurrent background Activities. |
| `unlimited` | Boolean (optional) Set to true to allow unlimited amount of concurrent background Activities. To enable unlimited , set unlimited to true . To disable unlimited , set unlimited to false . The default value of unlimited is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/devel/concurrency '{"level":1}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="devel_evict"></a>
## `devel/evict`

`luna://com.webos.service.activitymanager/devel/evict`

Evict one or all Activities from the background queue.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (optional) The ID of the background activity to evict. |
| `evictAll` | Boolean (optional) To evict all Activities from the background queue, set evictAll to true . To disable evictAll , set evictAll to false . The default value of evictAll is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `returnVaule` | String (required) If the evict method succeeds, returnValue will contain true. If the evict method fails, returnValue will contain false. |
| `errorCode` | String (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/devel/evict '{"activityId":45}
```

> ACG: activity.operation \| Returns: returnVaule:String; errorCode:String; errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="devel_prioritycontrol"></a>
## `devel/priorityControl`

`luna://com.webos.service.activitymanager/devel/priorityControl`

Enable or disable priority control.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enabled` | Boolean (required) To enable priority control , set enabled to true . To disable priority control , set enabled to false . The default value of enabled is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/devel/priorityControl '{"enabled":true}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="devel_run"></a>
## `devel/run`

`luna://com.webos.service.activitymanager/devel/run`

Run one or all Activities that are in ready queue.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (optional) The ID of the ready activity to run. |
| `runAll` | Boolean (optional) Run all ready Activities To run all activities which are in ready status, set runAll to true . To not run all activites , set runAll to false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/devel/run '{"activityId":2}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="disable"></a>
## `disable`

`luna://com.webos.service.activitymanager/disable`

Disable scheduling new Activities.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/disable '{}'
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="enable"></a>
## `enable`

`luna://com.webos.service.activitymanager/enable`

Enable scheduling new Activities.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/enable '{}'
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="focus"></a>
## `focus`

`luna://com.webos.service.activitymanager/focus`

Focus to target Activity. All currently focused Activities will be lost their focus. If requester is not privileged, this call will fail. Appropriate "focused" and "unfocused" events will be generated to subscribers of Activities which gain or lose focus.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) ID of the activity to grant a focus to. |
| `activityName` | String (required) Activity name, required if activityId is not provided. Only the creator of the Activity can specify activityName . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/focus '{"activityId":36}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="getactivityinfo"></a>
## `getActivityInfo`

`luna://com.webos.service.activitymanager/getActivityInfo`

Gets information of Activities. If activityId or activityName is given, getActivityInfo only returns information about that activity. Conversely, if activityId or activityName is not given, getActivityInfo returns all undestroyed activities.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (optional) Activity ID |
| `activityName` | String (optional) Activity name. Only the creator of the Activity can specify activityName . |
| `subscribers` | Boolean (optional) To return the current parent, queued adopters, and subscribers for each Activity, set subscribers to true . To not return the current parent, queued adopters, and subscribers for each Activity, set subscribers to false . |
| `details` | Boolean (optional) To return detailed information for each Activity, set details to true . To return brief information for each Activity, set details to false . |
| `current` | Boolean (optional) To return the state of the Activity prerequisites (e.g., whether the Activity is scheduled or not, whether the trigger is invoked or not), set current to true . Otherwise, set current to false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `activity` | Object: Activity (optional) The Activity object. If activityId or activityName is given, getActivityInfo will contain the property. |
| `activities` | Object array: Activity (optional) Array with Activity objects. If activityId or activityName is not given, getActivityInfo will contain this property. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/getActivityInfo '{ "activityId":36, "current":false }'
```

> ACG: activity.query \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String; activity:Object: Activity; activities:Object array: Activity \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="getdetails"></a>
## `getDetails`

`luna://com.webos.service.activitymanager/getDetails`

Gets details of an activity. Note: Use the 'getActivityInfo' method instead.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Either this, or activityName is required. |
| `activityName` | String (required) Activity name. Either this, or activityId is required. Only the creator of the Activity can specify activityName . |
| `current` | Boolean (required) To return the state of the Activity prerequisites, set current to true . Otherwise, set current to false . |
| `internal` | Boolean (required) To include internal state information for debugging, set internal to true . Otherwise, set internal to false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `activity` | Object: Activity (optional) The Activity object. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/getDetails '{ "activityId":36, "current":false, "internal":false }'
```

> ACG: activity.query \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String; activity:Object: Activity \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="getmanagerinfo"></a>
## `getManagerInfo`

`luna://com.webos.service.activitymanager/getManagerInfo`

Gets Activity Manager related information such as: Activity Manager state - queued and leaked activities List of activities for which power is currently locked Supported requirements

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `queues` | Object: InfoQueue (optional) Queued Activity information. |
| `requirements` | Object array: InfoRequirement (optional) Supported requirement |
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/getManagerInfo '{}
```

> ACG: activity.query \| Returns: returnValue:Boolean; queues:Object: InfoQueue; requirements:Object array: InfoRequirement; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="info"></a>
## `info`

`luna://com.webos.service.activitymanager/info`

Get Activity Manager related information such as Activity Manager state - queued and leaked Activities, list of Activities for which power is currently locked, and supported requirements. Note: Use the 'getManagerInfo' method instead.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `queues` | Object array: InfoQueue (optional) Queued Activity information. |
| `requirements` | Object: InfoResourceManager (optional) Supported requirement |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/info '{}
```

> ACG: activity.query \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String; queues:Object array: InfoQueue; requirements:Object: InfoResourceManager \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="infoactivity"></a>
## `InfoActivity`

`luna://com.webos.service.activitymanager/InfoActivity`

Activity information

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/InfoActivity '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="infocreator"></a>
## `InfoCreator`

`luna://com.webos.service.activitymanager/InfoCreator`

Creator information

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/InfoCreator '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="infoqueue"></a>
## `InfoQueue`

`luna://com.webos.service.activitymanager/InfoQueue`

List of Activities for which power is currently locked.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/InfoQueue '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="inforequirement"></a>
## `InfoRequirement`

`luna://com.webos.service.activitymanager/InfoRequirement`

Supported requirement information

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/InfoRequirement '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="join"></a>
## `join`

`luna://com.webos.service.activitymanager/join`

Subscribe to receive events from the specified Activity. Note: Use the 'am-monitor' tool instead.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Either this, or activityName is required. |
| `activityName` | String (required) Activity name. Either this, or activityId is required. Only the creator of the Activity can specify activityName . |
| `subscribe` | Boolean (required) Flag that enables whether to subscribe or not. To enable subscribe , set subscribe to true . To disable subscribe , set subscribe to false . The default value of subscribe is false . Note . This parameter must be true for this call to succeed. |
| `detailedEvent` | Boolean (optional) Flag that enables to return detailed Activity information in a subscription response. It needs to be used when subscribe is set to true . To enable detailedEvents , set detailedEvents to true . To disable detailedEvents , set detailedEvents to false . The default value of detailedEvents is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -i -f luna://com.webos.service.activitymanager/join '{ "activityId":36, "subscribe":true }
```

> ACG: activity.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="list"></a>
## `list`

`luna://com.webos.service.activitymanager/list`

List Activities that are in running or waiting state. Note: Use the 'getActivityInfo' method instead.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `details` | Boolean (required) To return detailed information for each Activity, set details to true . To return brief information for each Activity, set details to false . |
| `subscribers` | Boolean (required) To return the current parent, queued adopters, and subscribers for each Activity, set subscribers to true . To not return the current parent, queued adopters, and subscribers for each Activity, set subscribers to false . |
| `current` | Boolean (required) To return the state of the Activity prerequisites (e.g., whether the Activity is scheduled or not, whether the trigger is invoked or not), set current to true . Otherwise, set current to false . |
| `internal` | Boolean (required) To include internal state information for debugging, set internal to true . Otherwise, set internal to false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `activities` | Object: Activity (optional) Array with Activity objects. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/list '{ "details":false, "subscribers":false, "current":false, "internal":false }'
```

> ACG: activity.query \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String; activities:Object: Activity \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="monitor"></a>
## `monitor`

`luna://com.webos.service.activitymanager/monitor`

Return a current status of the specified Activity. If the caller chooses to subscribe, the method returns the Activity's state when it is changed. Note: Use the 'am-monitor' tool instead.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Either this, or activityName is required. |
| `activityName` | String (required) Activity name. Either this, or activityId is required. Only the creator of the Activity can specify activityName . |
| `subscribe` | Boolean (optional) Flag that enables whether to subscribe activity changes or not. To enable subscribe , set subscribe to true . To disable subscribe , set subscribe to false . The default value of subscribe is false . |
| `detailedEvents` | Boolean (optional) Flag that enables to return detailed Activity information in a subscription response. It needs to be used when subscribe is set to true . To enable detailedEvents , set detailedEvents to true . To disable detailedEvents , set detailedEvents to false . The default value of detailedEvents is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |
| `state` | String (optional) NOTE: These states are deprecated. These will be replaced with new states in the next version. Activity state. One of the followings returns as an Activity state. - "init" - "waiting" - "blocked" - "queued" - "starting" - "running" - "paused" - "complete" - "stopping" - "stopped" - |

```sh
luna-send -i -f luna://com.webos.service.activitymanager/monitor '{ "activityId":36, "subscribe":true, "detailedEvents":true }
```

> ACG: activity.query \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String; state:String; subscribed:Boolean \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="parent"></a>
## `Parent`

`luna://com.webos.service.activitymanager/Parent`

Handles the parent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/Parent '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="pause"></a>
## `pause`

`luna://com.webos.service.activitymanager/pause`

Suspend the work on the specified Activity and place the Activity in pause state. NOTE: An activity can be paused only if it is in the unsatisfied state. Use the getActivityInfo method to check the state of an activity.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (optional) Activity ID. Note: Either activityId or activityName is a REQUIRED field. |
| `activityName` | String (optional) Activity name. Only the creator of the Activity can specify activityName . Note: Either activityId or activityName is a REQUIRED field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -f -i luna://com.webos.service.activitymanager/create '{ "activity": { "description": "","name": "test activity", "trigger": { "method": "luna://com.webos.service.config/getConfigs", "params": {"configNames": ["com.webos.service.activitymanager.p2test.trigger"],"subscribe": true}, "where": {"op":"=","prop":["configs","com.webos.service.activitymanager.p2test.trigger"],"val":true} },"type": {"foreground": true} },"replace": true,"start": true, "subscribe":true }'
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="release"></a>
## `release`

`luna://com.webos.service.activitymanager/release`

Allow a parent to free an Activity and notify other subscribers. The Activity is cancelled unless one of its non-parent subscribers adopts it and becomes the new parent. For a completely safe transfer, a subscribing app or service, prior to the release, should already have called the adopt method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Note: Either activityId or activityName is a REQUIRED field. |
| `activityName` | String (required) Activity name.Only the creator of the Activity can specify activityName . Note: Either activityId or activityName is a REQUIRED field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -a test -f luna://com.webos.service.activitymanager/release '{"activityId" : 98}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="requirement"></a>
## `Requirement`

`luna://com.webos.service.activitymanager/Requirement`

The Requirements are preconditions that the Activity Manager will ensure are met before an Activity will be run. Any number of requirements may be specified for a single Activity, and all must be met in order for the Activity to move to the satisfied state. Requirements can transition from the met state back to unmet if the condition the particular requirement is monitoring for no longer holds true. The Requirements available on the system can be queried using getManagerInfo method. Example : luna-send -n 1 -f luna://com.webos.service.activitymanager/create '{ "activity": { "requirements": {"bootup": true, "internet": true} , "name": "browser-restart", "description": "", "type": {"foreground": true}, "callback": {"method": "luna://com.webos.service.applicationmanager/launch", "params": {"id": "com.webos.app.enactbrowser"}}, "trigger": {"method":"luna://com.webos.service.applicationmanage

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/Requirement '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="schedule"></a>
## `Schedule`

`luna://com.webos.service.activitymanager/Schedule`

The Schedule object will define the time-based requirements for an Activity. If Schedule is specified, the schedule must be met before the Activity move to satisfied state. NOTE : Some properties of Schedule may be changed. 1. Basic schedule "schedule": { // Start time. Time format is a subset of ISO 8601. // That is, "YYYY-MM-DD HH:MM:SS" for local, or "YYYY-MM-DD HH:MM:SSZ" for UTC. " start ": "2017-03-01 21:00:00", }  2. Smart interval Smart intervals align all Activities operating with that period to the same start times, allowing them to batch up and avoid unnecessary device wakeups, potentially saving significant amounts of power. "schedule": { // Time between events, in seconds. // For a smart interval, the interval must be an even multiple of days, // or one of the following: 12h, 6h, 3h, 1h, 30m, 15m, 10m, or 5m. " interval ": "5m" }  3. Precise interval "schedule": { // Specifi

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/Schedule '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="start"></a>
## `start`

`luna://com.webos.service.activitymanager/start`

Attempt to start the specified Activity, either moving its state from 'created' to 'starting', or from 'paused' to 'resuming'.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Note: Either activityId or activityName is a REQUIRED field. |
| `activityName` | String (required) Activity name.Only the creator of the Activity can specify activityName . Note: Either activityId or activityName is a REQUIRED field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/start '{"activityId" : 93}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="stop"></a>
## `stop`

`luna://com.webos.service.activitymanager/stop`

Stop the specified Activity and send a "stop" event to subscribers to this Activity. This method succeeds if the Activity exists. This method is exactly the same as cancel method. It is recommended to use cancel to avoid confusion.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) Activity ID. Note: Either activityId or activityName is a REQUIRED field. |
| `activityName` | String (required) Activity name.Only the creator of the Activity can specify activityName . Note: Either activityId or activityName is a REQUIRED field. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/stop '{"activityId" : 95}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="trigger"></a>
## `Trigger`

`luna://com.webos.service.activitymanager/Trigger`

Activities with Triggers do not become runnable until an event occurs on a subscribed method. In addition, other requirements or scheduling constraints may also need to be met before the Activity is runnable. When the Activity starts, the specified method is called with "subscribe=true", and any additional arguments the Activity creator provides. If another Activity has previously been created and started with an identical Trigger, with the same method and arguments, then the Activity Manager may utilize its existing subscription to monitor the Triggering event, unless "unique" is true in the Trigger specification. NOTE: Key Trigger and Compare Trigger are deprecated. 1. Key Trigger is triggered when the specified key exists. "trigger": { " method ": "luna://com.webos.service.applicationmanager/getForegroundAppInfo", " params ": { "subscribe": true, "extraInfo": true }, " key ": "foregro

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/Trigger '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="type"></a>
## `Type`

`luna://com.webos.service.activitymanager/Type`

Indicate how the Activity is handled. Forground or Background Default attributes are associated with background and foreground Activities: Foreground Activities are high priority and immediate - They cannot be queued and begin running when their prerequisites are met. Background Activities are low priority and not immediate - They are runnable, but queued until necessary resources become available. Whether an activity is foreground or background should only be set once. The default is foreground. If your app specifies foreground or background, do NOT set the advanced attributes like "immediate" and "priority". If you set them, the Activity Manager will NOT create the Activity. If you do not set either foreground or background, then you MUST set "immediate" and "priority". NOTE . Do not use background. If background is set, the Activity may not run at all. Persistent Activity If "persist"

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/Type '{}'
```

> Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)

<a id="unfocus"></a>
## `unfocus`

`luna://com.webos.service.activitymanager/unfocus`

Remove a focus from the specified Activity.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `activityId` | Number (uint64_t) (required) ID of the activity to remove focus from |
| `activityName` | String (required) Activity name, required if activityId is not provided. Only the creator of the Activity can specify activityName . |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int64\_t) (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.activitymanager/unfocus '{"activityId":36}
```

> ACG: activity.operation \| Returns: returnValue:Boolean; errorCode:Number (int64_t); errorText:String \| Service: Monitors various parts of the system and does actions when the corresponding events happen. Activities can also be used to schedule work periodically or at particular times.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-activitymanager/)
