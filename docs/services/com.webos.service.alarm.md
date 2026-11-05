# `com.webos.service.alarm`

Alarm service: lets webOS daemons and apps schedule calls to webOS API methods at a set time or interval; set, clear, list alarms and query the next wakeup.

7 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`alarmObject`](#alarmobject) | unknown |  | misc | documented | Object contains information about the alarms. |
| [`clear`](#clear) | public |  | misc | documented | Deletes an existing alarm. Apps or daemons can identify their alarm to be deleted by specifying its key. |
| [`getAllAlarms`](#getallalarms) | private |  | misc | inferred | Returns the all alarms. |
| [`getNextWakeupAlarm`](#getnextwakeupalarm) | private |  | misc | inferred | Returns the next wakeup alarm. |
| [`privileged/clear`](#privileged_clear) | private |  | misc | inferred | Clears the alarm (privileged) |
| [`privileged/getAllAlarms`](#privileged_getallalarms) | private |  | misc | inferred | Returns the all alarms (privileged) |
| [`set`](#set) | public |  | misc | documented | Creates a new alarm for an absolute time or a relative time. By using the " wakeup " parameter you can define it as a wake-up or a non-wakeu |

<a id="alarmobject"></a>
## `alarmObject`

`luna://com.webos.service.alarm/alarmObject`

Object contains information about the alarms.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.alarm/alarmObject '{}'
```

> Service: Enables webOS daemons or apps to call webOS API methods with specific parameters in a specified time interval. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-alarm/)

<a id="clear"></a>
## `clear`

`luna://com.webos.service.alarm/clear`

Deletes an existing alarm. Apps or daemons can identify their alarm to be deleted by specifying its key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) key of the alarm that you wish to delete. This is the same key that was specified when the alarm was created the set method. |

**Returns:**

| Field | Type / notes |
|---|---|
| `key` | String (optional) The same unique identifier is returned if the alarm was deleted successfully. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the Error Codes Reference and API Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -a com.webos.app.test luna://com.webos.service.alarm/clear '{"key":"test"}
```

> ACG: alarm.operation \| Returns: key:String; returnValue:Boolean; errorText:String \| Service: Enables webOS daemons or apps to call webOS API methods with specific parameters in a specified time interval.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-alarm/)

<a id="getallalarms"></a>
## `getAllAlarms`

`luna://com.webos.service.alarm/getAllAlarms`

Returns the all alarms.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `alarmObjectArray` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.alarm/getAllAlarms '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnextwakeupalarm"></a>
## `getNextWakeupAlarm`

`luna://com.webos.service.alarm/getNextWakeupAlarm`

Returns the next wakeup alarm.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alarm/getNextWakeupAlarm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="privileged_clear"></a>
## `privileged/clear`

`luna://com.webos.service.alarm/privileged/clear`

Clears the alarm (privileged)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alarm/privileged/clear '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="privileged_getallalarms"></a>
## `privileged/getAllAlarms`

`luna://com.webos.service.alarm/privileged/getAllAlarms`

Returns the all alarms (privileged)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.alarm/privileged/getAllAlarms '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="set"></a>
## `set`

`luna://com.webos.service.alarm/set`

Creates a new alarm for an absolute time or a relative time. By using the " wakeup " parameter you can define it as a wake-up or a non-wakeup alarm.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Unique key to identify individual alarms. |
| `at` | String (required) The at parameter sets the absolute time, and must be in the format mm/dd/yyyy HH:MM:SS to be passed. Note: Either this, or in is required. |
| `in` | String (required) The in parameter sets the relative time and must be in the format HH:MM:SS to be passed. Note: Either this, or at is required. |
| `uri` | String (required) The webOS API method that should be called when the alarm fires. Example: luna//com.webos.service.test/alarmFired |
| `params` | Object (required) Parameters that need to be passed with the uri when the alarm fires. Example: {"param1":"abc","param2":"xyz"} |
| `wakeup` | Boolean (optional) Specifies if the alarm is a wake-up alarm. Possible values are: true - Create a wake-up alarm, false - Create a non-wake up alarm Default value: false. |
| `keep_existing` | Boolean (optional) If there is an existing alarm with the same key, and you don't want to delete it, set keep_existing to true. To clear existing alarms with the same key, set keep_existing to false . The default value of keep_existing is false . |

**Returns:**

| Field | Type / notes |
|---|---|
| `key` | String (optional) If the alarm was created successfully, the set method will return the key of the alarm that it created. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the Error Codes Reference and API Error Codes Reference of this method for more details. |

```sh
luna-send -n 1 -a com.webos.app.test luna://com.webos.service.alarm/set '{ "key":"test", "uri":"luna://com.webos.service.testsleepd/firealarm", "params":{}, "at":"09/24/2014 04:40:00", "wakeup":true }
```

> ACG: alarm.operation \| Returns: key:String; returnValue:Boolean; errorText:String \| Service: Enables webOS daemons or apps to call webOS API methods with specific parameters in a specified time interval.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-alarm/)
