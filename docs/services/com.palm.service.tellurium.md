# `com.palm.service.tellurium`

Tellurium test-automation service for driving web applications: queues and broadcasts commands, subscribes to commands and events, and reports running apps, stages and window/resolution info. _(inferred from the service's methods)_

20 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`appInfo`](#appinfo) | unknown |  | devmode | documented | Provide the application ID to subscribe. Ex: "appInfo":{"id":"amazon.html"} |
| [`broadcastCommand`](#broadcastcommand) | public |  | devmode | documented | Sends message to all TelluriomNub instances |
| [`filter`](#filter) | unknown |  | devmode | documented | Its an object that describes details to apply the filter (usually used when "command": "getItems") |
| [`getApplicationInformationResult`](#getapplicationinformationresult) | unknown |  | devmode | documented | Provides QML application information. |
| [`getItemsResult`](#getitemsresult) | unknown |  | devmode | documented | Provides element information for QML application using object hierarchy. |
| [`getRunningAppsAndStagesResult`](#getrunningappsandstagesresult) | unknown |  | devmode | documented | Provides running and staging information of QML apps. |
| [`handleRequest`](#handlerequest) | public |  | devmode | documented | handleRequest allows to process requested method Available methods are: getRunningAppsAndStages: returns applications and their stageId getA |
| [`notifyEvent`](#notifyevent) | public |  | devmode | documented | Called by a nub to notify that an event occured |
| [`ping`](#ping) | public |  | devmode | documented | Allows to perform 'are-you-alive' check. Mirrors sent message |
| [`queue`](#queue) | unknown |  | devmode | documented | queue(mandatory): array, containing objects, each representing any of testability commands. Example: setItemsProperties: sets properties for |
| [`replyToCommand`](#replytocommand) | public |  | devmode | documented | This is called when a subscriber needs to reply to a command i.e., Sends a reply to the TelluriumdService from TelluriumNub(Webapp) or Qttes |
| [`resolution`](#resolution) | unknown |  | devmode | documented | Screen resolution |
| [`stages`](#stages) | unknown |  | devmode | documented | Provide stage Information of the running application. |
| [`subscribeToCommands`](#subscribetocommands) | public | yes | devmode | documented | Subscribes to Tellurium commands |
| [`subscribeToCommands\`](#subscribetocommands_) | public | yes | misc | documented | \ Subscribes to Tellurium commands\ \ |
| [`subscribeToEvents`](#subscribetoevents) | public | yes | devmode | documented | Subscribes to stages' events (received from stage in notifyEvent) |
| [`subscribeToEvents\`](#subscribetoevents_) | public | yes | misc | documented | \ Subscribes to stages' events (received from stage in notifyEvent)\ \ |
| [`version`](#version) | public |  | devmode | documented | Returns the tellurium version from the submission tag. |
| [`version\`](#version_) | public |  | misc | documented | \ Returns the tellurium version from the submission tag.\ \ |
| [`window`](#window) | unknown |  | devmode | documented | Creates a top level window and accesses the screen information. |

<a id="appinfo"></a>
## `appInfo`

`luna://com.palm.service.tellurium/appInfo`

Provide the application ID to subscribe. Ex: "appInfo":{"id":"amazon.html"}

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/appInfo '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="broadcastcommand"></a>
## `broadcastCommand`

`luna://com.palm.service.tellurium/broadcastCommand`

Sends message to all TelluriomNub instances

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `command` | String (optional) Command to broadcast. |

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/broadcastCommand '{"command": "test"}
```

> ACG: testautomation.operation \| Returns: returnValue:Boolean \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="filter"></a>
## `filter`

`luna://com.palm.service.tellurium/filter`

Its an object that describes details to apply the filter (usually used when "command": "getItems")

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/filter '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="getapplicationinformationresult"></a>
## `getApplicationInformationResult`

`luna://com.palm.service.tellurium/getApplicationInformationResult`

Provides QML application information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/getApplicationInformationResult '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="getitemsresult"></a>
## `getItemsResult`

`luna://com.palm.service.tellurium/getItemsResult`

Provides element information for QML application using object hierarchy.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/getItemsResult '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="getrunningappsandstagesresult"></a>
## `getRunningAppsAndStagesResult`

`luna://com.palm.service.tellurium/getRunningAppsAndStagesResult`

Provides running and staging information of QML apps.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/getRunningAppsAndStagesResult '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="handlerequest"></a>
## `handleRequest`

`luna://com.palm.service.tellurium/handleRequest`

handleRequest allows to process requested method Available methods are: getRunningAppsAndStages: returns applications and their stageId getApplicationInformation: returns information for the selected application getItems: returns objects for the selected application

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `command` | String (required) JSON describing the command to be executed and its parameters. Specify one of the following methods: getRunningAppsAndStages : Returns applications and their stageId getApplicationInformation : Returns information for the selected application getItems : Returns objects for the selected application |
| `stageId` | Number (required) Stage ID. Note: An integer that is dynamically assigned to a loaded application by telluriumd service. Not mandatory when command parameter value is "getRunningAppsAndStages" as stageID for each running application is known through this API method. |
| `queue` | Object array: queue (optional) Contains the command to execute to get the element information [optionally an additional parameter "filter" is used to extract the required content from object hierarchy]. For more details refer 'queue object' under Objects section. |

**Returns:**

| Field | Type / notes |
|---|---|
| `result` | Object: getItemsResult (required) Result obtained when "command" parameter is "getItems". Note: Either one of the "result" parameters is returned based on the command parameter. |
| `errorCode` | Number (optional) Identifies the error. The method will return errorCode only if it fails. See the Error Codes Reference for more details. |
| `errorText` | String (optional) Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. |
| `teCommandId` | Number (optional) An integer assigned by telluriumD service when the given command is not in mapped list and its redirected to stage. |

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/handleRequest '{"command": "getRunningAppsAndStages"}
```

> ACG: testautomation.operation \| Returns: returnValue:Boolean; result:Object: getRunningAppsAndStagesResult; result:Object: getApplicationInformationResult; result:Object: getItemsResult; errorCode:Number; errorText:String; teCommandId:Number \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="notifyevent"></a>
## `notifyEvent`

`luna://com.palm.service.tellurium/notifyEvent`

Called by a nub to notify that an event occured

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `stageId` | Number (required) Stage ID. Note: An integer that is dynamically assigned to a loaded application by telluriumd service. |
| `type` | String (required) Event type. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) Identifies the error. The method will return errorCode only if it fails. See the Error Codes Reference for more details. |
| `errorText` | String (optional) Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. |

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/notifyEvent '{"stageId": 1000, "type": "stageActivate"}
```

> ACG: testautomation.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="ping"></a>
## `ping`

`luna://com.palm.service.tellurium/ping`

Allows to perform 'are-you-alive' check. Mirrors sent message

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `Message` | String (optional) Ping message |

**Returns:**

| Field | Type / notes |
|---|---|
| `\[none\]` | String (optional) Mirrored message. |

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/ping '{ "Message": "test" }
```

> ACG: testautomation.operation \| Returns: [none]:String \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="queue"></a>
## `queue`

`luna://com.palm.service.tellurium/queue`

queue(mandatory): array, containing objects, each representing any of testability commands. Example: setItemsProperties: sets properties for QML elements getItems: Gets items for the selected application. queue(mandatory): array, containing objects, each representing filter and properties array. filter: object, describing a filter

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/queue '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="replytocommand"></a>
## `replyToCommand`

`luna://com.palm.service.tellurium/replyToCommand`

This is called when a subscriber needs to reply to a command i.e., Sends a reply to the TelluriumdService from TelluriumNub(Webapp) or Qttestability(QML app) when client sends luna-send request to get element information for an application. For more details on replyToCommand Valid case, Please refer Internal notes section.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `stageId` | Number (required) Stage Id is an integer dynamically assigned to a loaded application by telluriumd service. |
| `teCommandId` | Number (required) Its an integer used as parameter to replyToCommand |
| `command` | String (required) Command that is used to execute the list of any testability commands. Ex:commandsBatch |
| `queue` | Object array: queue (required) Contains the command to execute to get the element information [optionally an additional parameter "filter" is used to extract the required content from object hierarchy]. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) Identifies the error. The method will return errorCode only if it fails. See the Error Codes Reference for more details. |
| `errorText` | String (optional) Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. |
| `teCommandId` | Number (optional) Its an integer assigned by telluriumD service when the given command is not in mapped list and its redirected to stage. |

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/handleRequest '{ "stageId": 1002, "command": "commandsBatch", "queue": [{"command": "getItems", "filter": {"objectName": "leftFunctionArea"}}] }'
```

> ACG: testautomation.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; teCommandId:Number \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="resolution"></a>
## `resolution`

`luna://com.palm.service.tellurium/resolution`

Screen resolution

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/resolution '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="stages"></a>
## `stages`

`luna://com.palm.service.tellurium/stages`

Provide stage Information of the running application.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/stages '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="subscribetocommands"></a>
## `subscribeToCommands`

`luna://com.palm.service.tellurium/subscribeToCommands`

Subscribes to Tellurium commands

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates whether to subscribe for related events. true: Subscribe false: Do not subscribe |
| `appInfo` | Object: appInfo (required) JSON containing application info. |
| `baseURI` | String (optional) Document URI |
| `width` | Number (optional) Window width |
| `height` | Number (optional) Window height |
| `name` | String (required) Window name |
| `scene` | String (required) Scene name |
| `version` | String (optional) Nub version |
| `type` | String (required) type name |

```sh
luna-send -i luna://com.palm.service.tellurium/subscribeToCommands '{ "subscribe":true, "appInfo":{"id":"amazon.html"}, "baseURI":"file:///media/cryptofs/apps/usr/palm/applications/amazon.html/index.html", "width":1280, "height":720, "name":"", "type":"card", "scene":"phone", "version":"2.2.6" }
```

> ACG: testautomation.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean; stageId:Number \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="subscribetocommands_"></a>
## `subscribeToCommands\`

`luna://com.palm.service.tellurium/subscribeToCommands\`

\ Subscribes to Tellurium commands\ \

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** API level 24  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `---` | --- (---) --- |
| `subscribe` | Boolean (required) Indicates whether to subscribe for related events. - true: Subscribe - false: Do not subscribe |
| `appInfo` | Object: appInfo (required) JSON containing application info. |
| `baseURI` | String (optional) Document URI |
| `width` | Number (optional) Window width |
| `height` | Number (optional) Window height |
| `name` | String (required) Window name |
| `scene` | String (required) Scene name |
| `version` | String (optional) Nub version |
| `type` | String (required) type name |

```sh
# luna-send -i luna://com.palm.service.tellurium/subscribeToCommands '{\ \ "subscribe":true,\ \ "appInfo":{"id":"amazon.html"},\ \ "baseURI":"file:///media/cryptofs/apps/usr/palm/applications/amazon.html/index.html",\ \ "width":1280,\ \ "height":720,\ \ "name":"",\ \ "type":"card",\ \ "scene":"phone",\ \ "version":"2.2.6"\ \ }'\ \
```

> ACG group: testautomation.operation

Sources: 

<a id="subscribetoevents"></a>
## `subscribeToEvents`

`luna://com.palm.service.tellurium/subscribeToEvents`

Subscribes to stages' events (received from stage in notifyEvent)

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates whether to subscribe for notifications. Possible values are: true : Subscribed false : Not subscribed |

```sh
luna-send -i luna://com.palm.service.tellurium/subscribeToEvents '{"subscribe":true}
```

> ACG: testautomation.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="subscribetoevents_"></a>
## `subscribeToEvents\`

`luna://com.palm.service.tellurium/subscribeToEvents\`

\ Subscribes to stages' events (received from stage in notifyEvent)\ \

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** API level 24  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `---` | --- (---) --- |
| `subscribe` | Boolean (required) Indicates whether to subscribe for notifications. Possible values are: - true: Subscribed - false: Not subscribed |

```sh
# luna-send -i luna://com.palm.service.tellurium/subscribeToEvents '{"subscribe":true}'\ \
```

> ACG group: testautomation.operation

Sources: 

<a id="version"></a>
## `version`

`luna://com.palm.service.tellurium/version`

Returns the tellurium version from the submission tag.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/version '{}
```

> ACG: testautomation.operation \| Returns: returnValue:Boolean; version:String \| Service: Intended for interacting with web applications

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)

<a id="version_"></a>
## `version\`

`luna://com.palm.service.tellurium/version\`

\ Returns the tellurium version from the submission tag.\ \

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** API level 24  
- **Confidence:** documented

```sh
# luna-send -n 1 -f luna://com.palm.service.tellurium/version '{}'\ \
```

> ACG group: testautomation.operation

Sources: 

<a id="window"></a>
## `window`

`luna://com.palm.service.tellurium/window`

Creates a top level window and accesses the screen information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.palm.service.tellurium/window '{}'
```

> Service: Intended for interacting with web applications \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-palm-service-tellurium/)
