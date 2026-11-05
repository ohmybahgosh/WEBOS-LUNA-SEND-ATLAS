# `com.webos.service.applicationmanager`

Core application lifecycle manager: launches, closes and lists apps and launch points, and reports foreground/running app status and life-cycle events.

32 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addLaunchPoint`](#addlaunchpoint) | public |  | apps | documented | Adds a dynamic launchpoint. According to the information on launchpoint, application is displayed in the Launcher. If a parameter is not def |
| [`appInfo`](#appinfo) | unknown |  | apps | documented | Contains the information about the application. |
| [`close`](#close) | public |  | apps | documented | Closes an application. Note A: At least one parameter is required. ('id', 'launchPointId', 'instanceId') Note B: Don't use this API in TV an |
| [`closeByAppId`](#closebyappid) | public |  | apps | documented | Closes an application by appId in the system manager. |
| [`dev/close`](#dev_close) | public |  | apps | documented | Closes application by either of application id, instance id and launchpoint id . Note: At least one parameter is required. Available only in |
| [`dev/closeByAppId`](#dev_closebyappid) | public |  | apps | documented | Closes an application by the application id. Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.de |
| [`dev/listApps`](#dev_listapps) | public | yes | apps | documented | Lists all of the registered applications. Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmo |
| [`dev/managerInfo`](#dev_managerinfo) | public |  | apps | documented | Provides information provided by listLaunchPoints,running, and listApps APIs. Gets all of the launchpoints and lists all of the registered a |
| [`dev/running`](#dev_running) | public | yes | apps | documented | Lists the background/foreground applications and their process IDs that are running on the webOS platform. Note: Available only in developer |
| [`foregroundAppInfo`](#foregroundappinfo) | unknown |  | apps | documented | The object contains sorted foreground applications in ascending order. |
| [`getAllContents`](#getallcontents) | private |  | apps | documented | Returns recommended content lists of all apps |
| [`getAppBasePath`](#getappbasepath) | public |  | apps | documented | Gets the path of the application. Note: This API is useful to get base directory path of installed application. |
| [`getAppInfo`](#getappinfo) | public |  | apps | documented | Gets the application information. Note: The information is generated from appinfo.json file. |
| [`getAppLifeEvents`](#getapplifeevents) | public | yes | apps | documented | Provides the application's event status in its life cycle. |
| [`getAppLifeStatus`](#getapplifestatus) | public | yes | apps | documented | Provides the application's life cycle status. Note: This API is useful to do something based on application's life cycle status. |
| [`getAppStatus`](#getappstatus) | public | yes | apps | documented | Gets the application status and information. |
| [`getForegroundAppInfo`](#getforegroundappinfo) | public | yes | apps | documented | Gets the information on the foreground application. Note: The information comes from LSM. Please use extraInfo parameter to get raw response |
| [`launch`](#launch) | public |  | apps | documented | Launches an application corresponding to the given application ID. Opens the service or app. Example: The user can download a content with a |
| [`launchPoints`](#launchpoints) | unknown |  | apps | documented | Contains the array of launchpoints. |
| [`listApps`](#listapps) | public | yes | apps | documented | Lists all of the registered applications. Note: Client can get all installed application information using this API. |
| [`listLaunchPoints`](#listlaunchpoints) | public | yes | apps | documented | Gets all of the launchpoints. Note: LaunchPoint is the virtual instance of an application. The webOS provides shortcut based on launchPoint. |
| [`lockApp`](#lockapp) | public |  | apps | documented | Locks an application. Note: Once it is locked, the application cannot be launched. This method is only called internally. Do not use this me |
| [`open`](#open) | public |  | apps | documented | The open method implicitly opens an application based on the target URL or MIME type. Caution : Using this method is not recommended due to  |
| [`params`](#params) | unknown |  | apps | documented | Contains the parameters for the target application. Specify correct parameters for each application. As each application has different param |
| [`pause`](#pause) | public |  | apps | documented | Pauses an application. Note : At least one parameter is required. ('id', 'launchPointId', 'instanceId') |
| [`registerApp`](#registerapp) | public | yes | apps | documented | Registers to receive events related to app life cycle. |
| [`registerNativeApp`](#registernativeapp) | unknown |  | apps | documented | Registered in webOS OSE sysbus api.json (ACG group application.operation); name only |
| [`removeLaunchPoint`](#removelaunchpoint) | public |  | apps | documented | Removes a dynamic launchpoint. Note: It can cause application uninstall. |
| [`running`](#running) | public | yes | apps | documented | Lists the background/foreground applications and their process IDs that are running on webOS platform. Note: This API is one of key methods  |
| [`running_apps`](#running_apps) | unknown |  | apps | documented | Indicates the object that contains the array of the running applications. |
| [`setDefaultApp`](#setdefaultapp) | private |  | apps | documented | Sets the default app for a category such as home (replaces the Home button target) ⚠️ |
| [`updateLaunchPoint`](#updatelaunchpoint) | public |  | apps | documented | Updates a dynamic launchpoint. Note: If a user changes the HDMI application icon to another icon like a game icon using Input Manager on a T |

<a id="addlaunchpoint"></a>
## `addLaunchPoint`

`luna://com.webos.service.applicationmanager/addLaunchPoint`

Adds a dynamic launchpoint. According to the information on launchpoint, application is displayed in the Launcher. If a parameter is not defined, SAM set the LP's parameter value same as appInfo's value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 10  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Indicates the application ID to be added. |
| `launchPointId` | String (optional) Indicates the launchpoint ID to be added. |
| `title` | String (optional) Indicates the launchpoint title. |
| `icon` | String (optional) Indicates the path of the icon image displayed for the launchpoint. |
| `bgImage` | String (optional) Indicates the path of the background image displayed to the user when the user hovers over the launchpoint. |
| `bgColor` | String (optional) Indicates the background color for the launchpoint. It will be displayed when the bgImage is not provided or unable to display. A color can be specified as a hex value or as a HTML color name. Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ |
| `imageForRecents` | String (optional) Indicates the path of the image displayed in the "Recents" tile. |
| `iconColor` | String (optional) Indicates the background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen. Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ |
| `largeIcon` | String (optional) Indicates the path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher. Note : This file path is relative to the appinfo.json file. |
| `appDescription` | String (optional) Indicates a brief description for the launchpoint. Note : The appDescription cannot exceed 60 characters. |
| `params` | Object: params (optional) If params is used, it should contain information on the launchpoint. |
| `bgImages` | String array (optional) Indicates the paths of the background images displayed to the user when the user hovers over the launchpoint. |
| `tileSize` | String (optional) Indicates the tile size on UI. Possible values are normal large. Default: normal Note : The large tile hints that UI should make this tile larger than normal (2x). Usually, large size may be used for promotional application. |
| `unmovable` | Boolean (optional) Indicates if the launchpoint position is movable or not. Possible values are: true : The launchpoint position cannot be moved by the user. false : the launchpoint position can be moved by the user. Default: false |
| `userData` | String (optional) Indicates the additional data that may be used for analytical purposes. The userData will be logged when the user interacts with it in Launcher. |
| `policyCategory` | String (optional) Indicates the category(group) of the launch point. The value should be the one of below mapping table. *$RESERVED_VALUE is for special callers to be controlled by LPM. default Any 9 *$RESERVED_VALUE $RESERVED_LP $RESERVED_POSITION Value Launch Point Type position |
| `default` | Any 9 |
| `*$RESERVED_VALUE` | $RESERVED_LP $RESERVED_POSITION |
| `supportI18nTitle` | Boolean (optional) If "supportI18nTitle" is set to true , i18n will be supported for title when any information of this launch point is changed. If "supportI18nTitle" is set to false , i18n will be supported for title when any information of this launch point is changed. The default value of supportI18nTitle is true |
| `favicon` | String (optional) Indicates the paths of the favorite icon for the launchpoint. |
| `relaunch` | Boolean (optional) If it is set to true , the app will be fresh-launched(re-randering) whenever user clicks the launchpoint. Note : This parameter is deprecated in IvyLeague. |

**Returns:**

| Field | Type / notes |
|---|---|
| `launchPointId` | String (optional) Indicates the launchpoint ID to be added. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/addLaunchPoint '{ "id":"com.webos.app.test", "title":"TestLP" }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; launchPointId:String; errorText:String; errorCode:Number \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \|\| Used best-effort and idempotently by webos-homebar.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/), [2](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/mode-switch.sh)

<a id="appinfo"></a>
## `appInfo`

`luna://com.webos.service.applicationmanager/appInfo`

Contains the information about the application.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/appInfo '{}'
```

> Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="close"></a>
## `close`

`luna://com.webos.service.applicationmanager/close`

Closes an application. Note A: At least one parameter is required. ('id', 'launchPointId', 'instanceId') Note B: Don't use this API in TV and signage. The API is deprecated in the platforms.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) Indicates the id of the application. |
| `launchPointId` | String (optional) Indicates the launchPointId of the application. |
| `instanceId` | String (optional) Indicates the instanceId of the application. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `processId` | String (optional) Indicates the processId of the closed application. |
| `instanceId` | String (optional) Indicates the instanceId of the running application. |
| `launchPointId` | String (optional) Indicates the launchPointId of the running application. |
| `appId` | String (optional) Indicates the appId of the running application. |
| `displayId` | Number (int32\_t) (optional) Indicates the displayId of running application. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/close '{ "id":"com.webos.app.test" }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; errorText:String; errorCode:Number; processId:String; instanceId:String; launchPointId:String; appId:String; displayId:Number (int32_t) \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="closebyappid"></a>
## `closeByAppId`

`luna://com.webos.service.applicationmanager/closeByAppId`

Closes an application by appId in the system manager.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) Indicates the id of the application. |
| `reason` | String (optional) Indicates the reason of why the app was closed. Subscribers who are watching app status will get the reason. Note: This parameter is only for reserved caller such as surfacemanager. Other services or apps should not use this parameter. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |
| `instanceId` | String (optional) Indicates the instanceId of the running application. |
| `launchPointId` | String (optional) Indicates the launchPointId of the running application. |
| `displayId` | String (optional) Indicates the displayId of the running application. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/closeByAppId '{ "id":"com.webos.app.test" }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; errorText:String; instanceId:String; launchPointId:String; displayId:String \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="dev_close"></a>
## `dev/close`

`luna://com.webos.service.applicationmanager/dev/close`

Closes application by either of application id, instance id and launchpoint id . Note: At least one parameter is required. Available only in developer mode (devmode)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) Indicates the id of the application. Note : At least one parameter of 'id', 'launchPointId', or 'instanceId' is mandatory. |
| `launchPointId` | String (optional) Indicates the launchPointId of the application. Note : At least one parameter of 'id', 'launchPointId', or 'instanceId' is mandatory. |
| `instanceId` | String (optional) Indicates the instanceId of the application. Note : At least one parameter of 'id', 'launchPointId', or 'instanceId' is mandatory. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of this method for details. |
| `processId` | String (optional) Process ID of the closed application. |
| `launchPointId` | String (optional) Launch point ID of the running application. |
| `appId` | String (optional) App ID of the running application. |
| `displayId` | Number (int32\_t) (optional) Display ID of running application. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/launch '{"id":"com.lgsi.test.app" }'
```

> ACG: application.devmode \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; processId:String; launchPointId:String; appId:String; displayId:Number (int32_t) \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="dev_closebyappid"></a>
## `dev/closeByAppId`

`luna://com.webos.service.applicationmanager/dev/closeByAppId`

Closes an application by the application id. Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Indicates the application id to be closed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `instanceId` | String (optional) Indicates the instanceId of running application. |
| `launchPointId` | String (optional) Indicates the launchPointId of running application. |
| `appId` | String (optional) Indicates the appld of the closed application. |
| `displayId` | Number (int32\_t) (optional) Indicates the displayId of the running application. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/dev/closeByAppId '{"id":"com.webos.app.test"}
```

> ACG: application.devmode \| Returns: returnValue:Boolean; instanceId:String; launchPointId:String; appId:String; displayId:Number (int32_t) \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="dev_listapps"></a>
## `dev/listApps`

`luna://com.webos.service.applicationmanager/dev/listApps`

Lists all of the registered applications. Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribe to get notifications false : Do not subscribe Default: false |
| `properties` | String array (optional) Indicates the name of properties to be extracted from appinfo.json file. |

**Returns:**

| Field | Type / notes |
|---|---|
| `apps` | Object array: appInfo (required) If the dev/listApps method succeeds, the array of the applications will be returned. |

```sh
luna-send -i -f luna://com.webos.service.applicationmanager/dev/listApps '{ "subscribe":true }'
```

> ACG: application.devmode \| Returns: returnValue:Boolean; subscribed:Boolean; apps:Object array: appInfo \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="dev_managerinfo"></a>
## `dev/managerInfo`

`luna://com.webos.service.applicationmanager/dev/managerInfo`

Provides information provided by listLaunchPoints,running, and listApps APIs. Gets all of the launchpoints and lists all of the registered applications. Lists the background/foreground applications and their process IDs that are running on device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of this method for details. |
| `launchPoints` | Object array: launchPoints (optional) Array of the launch points. |
| `lunaTasks` | Object array (optional) Provides information of caller of dev/managerInfo API. |
| `running` | Object array: running\_apps (optional) Indicates the background/foreground applications and their process IDs that are running on device. |
| `apps` | Object array: appInfo (optional) Lists all of the registered applications. |

```sh
luna-send -i -f luna://com.webos.applicationManager/dev/managerInfo '{}
```

> ACG: application.devmode \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; launchPoints:Object array: launchPoints; lunaTasks:Object array; running:Object array: running_apps; apps:Object array: appInfo \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="dev_running"></a>
## `dev/running`

`luna://com.webos.service.applicationmanager/dev/running`

Lists the background/foreground applications and their process IDs that are running on the webOS platform. Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribe to get notifications false: Not subscribed Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `running` | Object array: running\_apps (required) If the dev/running method succeeds, the array of the running applications will be returned. |

```sh
luna-send -i -f luna://com.webos.service.applicationmanager/dev/running '{ "subscribe":true }
```

> ACG: application.devmode \| Returns: returnValue:Boolean; subscribed:Boolean; running:Object array: running_apps \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="foregroundappinfo"></a>
## `foregroundAppInfo`

`luna://com.webos.service.applicationmanager/foregroundAppInfo`

The object contains sorted foreground applications in ascending order.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/foregroundAppInfo '{}'
```

> Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="getallcontents"></a>
## `getAllContents`

`luna://com.webos.service.applicationmanager/getAllContents`

Returns recommended content lists of all apps

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.applicationmanager/getAllContents '{}'
```

> Used by Glasshouse for the recommended-content home row.

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/home-recommended.js)

<a id="getappbasepath"></a>
## `getAppBasePath`

`luna://com.webos.service.applicationmanager/getAppBasePath`

Gets the path of the application. Note: This API is useful to get base directory path of installed application.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Indicates the appId. |

**Returns:**

| Field | Type / notes |
|---|---|
| `appId` | String (optional) Indicates the appId. |
| `basePath` | String (optional) Indicates the application path. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -a "bareapp" -f luna://com.webos.service.applicationmanager/getAppBasePath '{ "appId":"bareapp" }
```

> ACG: application.operation \| Returns: returnValue:Boolean; appId:String; basePath:String; errorText:String; errorCode:Number \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="getappinfo"></a>
## `getAppInfo`

`luna://com.webos.service.applicationmanager/getAppInfo`

Gets the application information. Note: The information is generated from appinfo.json file.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Indicates the id of the application. |
| `properties` | String array (optional) Indicates the value to be extracted from appinfo.json file. |

**Returns:**

| Field | Type / notes |
|---|---|
| `appId` | String (optional) Indicates the appld. |
| `appInfo` | Object: appInfo (optional) If the getAppinfo method succeeds, the appInfo object contains information about the application. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/getAppInfo '{ "id":"com.webos.app.test" }
```

> ACG: application.operation \| Returns: returnValue:Boolean; appId:String; appInfo:Object: appInfo; errorText:String; errorCode:Number \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="getapplifeevents"></a>
## `getAppLifeEvents`

`luna://com.webos.service.applicationmanager/getAppLifeEvents`

Provides the application's event status in its life cycle.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |

```sh
luna-send -i -f luna://com.webos.service.applicationmanager/getAppLifeEvents '{"subscribe":true}
```

> ACG: application.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorText:String; errorCode:Number (int8_t) \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="getapplifestatus"></a>
## `getAppLifeStatus`

`luna://com.webos.service.applicationmanager/getAppLifeStatus`

Provides the application's life cycle status. Note: This API is useful to do something based on application's life cycle status.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get the notifications. Possible values are: true: Subscribe to get notifications false: Not subscribed. Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |

```sh
luna-send -i -f luna://com.webos.service.applicationmanager/getAppLifeStatus '{ "subscribe":true }
```

> ACG: application.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorText:String \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="getappstatus"></a>
## `getAppStatus`

`luna://com.webos.service.applicationmanager/getAppStatus`

Gets the application status and information.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Indicates the appld. |
| `appInfo` | Object: appInfo (optional) Indicates the information of the application. |

**Returns:**

| Field | Type / notes |
|---|---|
| `appId` | String (required) Indicates the target appld. |
| `event` | String (required) Indicates event according to the target app status. |
| `status` | String (required) Indicates the current app status. |
| `exist` | Boolean (required) Indicates if target app is present on the device. Possible values are: - true: Target app exists on the device. - false: Target app does not exist on the device. |
| `launchable` | Boolean (required) Indicates whether the target app could be launched or not. Possible values are: - true: Target app could be launched. - false: Target app could not be launched. |
| `appInfo` | Object: appInfo (optional) If the getAppStatus method succeeds and the parameter "appInfo" is true, the appInfo object contains information about the application. |
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/getAppStatus '{ "appId":"com.webos.app.browser" }
```

> ACG: application.operation \| Returns: returnValue:Boolean; appId:String; event:String; status:String; exist:Boolean; launchable:Boolean; appInfo:Object: appInfo; errorCode:Number (int8_t); errorText:String \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="getforegroundappinfo"></a>
## `getForegroundAppInfo`

`luna://com.webos.service.applicationmanager/getForegroundAppInfo`

Gets the information on the foreground application. Note: The information comes from LSM. Please use extraInfo parameter to get raw responsePayload from LSM.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `extraInfo` | Boolean (optional) Indicates if enabled, the method returns an array of foreground applications. true: Enable. false: Disable. Default: false . |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed to get notifications false: Not subscribed Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `appId` | String (optional) Indicates the appId running in the foreground. |
| `launchPointId` | String (optional) Indicates the launchPointId of the application. |
| `instanceId` | String (optional) Indicates the instanceId of the application. |
| `displayId` | Number (optional) Indicates the displayId of the application. |
| `windowId` | String (required) Indicates the windowId of the application running in the foreground. |
| `processId` | String (optional) Indicates the processId of the application running in the foreground. |
| `foregroundAppInfo` | Object array: foregroundAppInfo (optional) Indicates an array of the foreground application. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/getForegroundAppInfo '{}
```

> ACG: application.operation \| Returns: subscribed:Boolean; returnValue:Boolean; appId:String; launchPointId:String; instanceId:String; displayId:Number; windowId:String; processId:String; foregroundAppInfo:Object array: foregroundAppInfo \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="launch"></a>
## `launch`

`luna://com.webos.service.applicationmanager/launch`

Launches an application corresponding to the given application ID. Opens the service or app. Example: The user can download a content with a service in the background. Once the content is downloaded, the service must launch the app again. Parameter can be given in the JSON object during the launch of the application. The method can be called multiple times for the same application with different parameters. Application should handle these overtime requests. Generally, application is re-launched for every request. Note : At least one parameter is required. ('id', 'launchPointId', 'instanceId')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) Indicates the application ID to be launched. |
| `launchPointId` | String (optional) Indicates the launch point ID of the app. |
| `instanceId` | String (optional) Indicates the instance ID of the app. |
| `params` | Object: params (optional) If params is used, it should contain information on the target application. Specify correct parameters for each application. See the following parameter examples: YouTube application: "params":{ "contentTarget" : "https://www.youtube.com/tv?v=9bZkp7q19f0"} Today application: "params":{"type":"showRecordedList"} |
| `keepAlive` | Boolean (optional) Indicates the status of the application running in the background. Possible values are: true: To run the application in the background, set keepAlive to true . false: To terminate the application, set keepAlive to false . Default: keepAlive is set to false . Note: Only applicable to web app. Do not use keepAlive for native app launching. An web App, which is launched with this p |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section of this method for details. |
| `instanceId` | String (optional) Indicates the instanceId of the running application. |
| `launchPointId` | String (optional) Indicates the launchPointId of running application. |
| `appId` | String (optional) Indicates the appld of the running application. |
| `displayId` | Number (uint32\_t) (optional) Indicates the displayId of the running application. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/launch '{ "id":"com.yourdomain.callee" }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; instanceId:String; launchPointId:String; appId:String; displayId:Number (uint32_t) \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="launchpoints"></a>
## `launchPoints`

`luna://com.webos.service.applicationmanager/launchPoints`

Contains the array of launchpoints.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/launchPoints '{}'
```

> Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="listapps"></a>
## `listApps`

`luna://com.webos.service.applicationmanager/listApps`

Lists all of the registered applications. Note: Client can get all installed application information using this API.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribe to get notifications. Possible values are: true: Subscribe for notifications false: Not subscribed Default: false |
| `properties` | String array (optional) Indicates the value to be extracted from appinfo.json file. |

**Returns:**

| Field | Type / notes |
|---|---|
| `apps` | Object array: appInfo (required) If the listApps method succeeds, the array of the applications will be returned. |

```sh
luna-send -i -f luna://com.webos.service.applicationmanager/listApps '{ "subscribe":true }'
```

> ACG: application.operation \| Returns: returnValue:Boolean; apps:Object array: appInfo; subscribed:Boolean \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="listlaunchpoints"></a>
## `listLaunchPoints`

`luna://com.webos.service.applicationmanager/listLaunchPoints`

Gets all of the launchpoints. Note: LaunchPoint is the virtual instance of an application. The webOS provides shortcut based on launchPoint.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `launchPoints` | Object array: launchPoints (required) If the listLaunchPoints method succeeds, the array of the launchpoints will be returned. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/listLaunchPoints '{ "subscribe":true }
```

> ACG: application.operation \| Returns: returnValue:Boolean; subscribed:Boolean; launchPoints:Object array: launchPoints \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="lockapp"></a>
## `lockApp`

`luna://com.webos.service.applicationmanager/lockApp`

Locks an application. Note: Once it is locked, the application cannot be launched. This method is only called internally. Do not use this method in your application.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) The application ID to be locked. |
| `lock` | Boolean (required) Indicates if the application is locked. Possible values are: true : The application is locked, set lock to true . If set to true , the application cannot be launched. false : The application is unlocked. |

**Returns:**

| Field | Type / notes |
|---|---|
| `locked` | Boolean (optional) Indicates if the application is locked or unlocked. Possible values are: - true: The application is locked - false: The application is unlocked |
| `id` | String (optional) Indicates the application ID which is locked or unlocked. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/lockApp '{"id": "<id>", "lock": true}'
```

> ACG: application.launcher \| Returns: returnValue:Boolean; locked:Boolean; id:String; errorCode:Number; errorText:String \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="open"></a>
## `open`

`luna://com.webos.service.applicationmanager/open`

The open method implicitly opens an application based on the target URL or MIME type. Caution : Using this method is not recommended due to insecurity.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) The application ID to be launched. |
| `target` | String (required) A specific URL that is used in the browser application. It is automatically included under params object. The id parameter is substituted with the target parameter. If application ID is not specified, the target is open with an appropriate application. |
| `mime` | String (required) The mime identifies which application should be used for the specific file or URL. The MIME type usually identifies files, such as mp3, on all operation systems as well as stores the unique application signatures for application launching. |
| `params` | Object: params (optional) If params is used, it should contain information on the target application. You should specify correct parameters for each application. See the following parameter examples: YouTube application: "params":{ "contentTarget" : "https://www.youtube.com/tv?v=9bZkp7q19f0"} Today application: "params":{"type":"showRecordedList"} |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | String (optional) The open method will return errorCode only if it fails. See the API Error Codes Reference of this service for more details. |
| `errorText` | String (optional) The open method will return errorText only if it fails. See the API Error Codes Reference of this service for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/open '{"mime": "text/html" }'
```

> ACG: applications,applications.launch,applications.internal \| Returns: returnValue:Boolean; errorCode:String; errorText:String \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="params"></a>
## `params`

`luna://com.webos.service.applicationmanager/params`

Contains the parameters for the target application. Specify correct parameters for each application. As each application has different parameters, the parameters of params cannot be defined.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/params '{}'
```

> Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="pause"></a>
## `pause`

`luna://com.webos.service.applicationmanager/pause`

Pauses an application. Note : At least one parameter is required. ('id', 'launchPointId', 'instanceId')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) Indicates the id of the application. |
| `launchPointId` | String (optional) Indicates the launchPointId of the application. |
| `instanceId` | String (optional) Indicates the instanceId of the application. |
| `params` | Object (optional) If params is used, it should contain information on the target application. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " API Error Codes Reference" section for details. |
| `instanceId` | String (optional) Indicates the instanceId of the running application. |
| `launchPointId` | String (optional) Indicates the launchPointId of the running application. |
| `appId` | String (optional) Indicates the appId of the running application. |
| `displayId` | Number (int32\_t) (optional) Indicates the displayId of the running application. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/pause '{ "id":"com.webos.app.test" }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String; instanceId:String; launchPointId:String; appId:String; displayId:Number (int32_t) \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="registerapp"></a>
## `registerApp`

`luna://com.webos.service.applicationmanager/registerApp`

Registers to receive events related to app life cycle.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get events. Possible values are: true: (default) Subscribed to get events data false: Not subscribed |

**Returns:**

| Field | Type / notes |
|---|---|
| `event` | String (optional) Possible value is "registered", this is return when calling registerApp for the first time. |
| `errorCode` | Number (optional) Please refer to the errorcode reference. |
| `errorText` | String (optional) Please refer to the errorcode reference. |

```sh
luna-send -i -f luna://com.webos.service.applicationmanager/registerApp '{"subscribe": true}'
```

> ACG: application.operation \| Returns: returnValue:Boolean; event:String; errorCode:Number; errorText:String; subscribed:Boolean \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="registernativeapp"></a>
## `registerNativeApp`

`luna://com.webos.service.applicationmanager/registerNativeApp`

Registered in webOS OSE sysbus api.json (ACG group application.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/registerNativeApp '{}'
```

> Listed under ACG group "application.operation" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/sam/blob/master/files/sysbus/com.webos.sam.api.json)

<a id="removelaunchpoint"></a>
## `removeLaunchPoint`

`luna://com.webos.service.applicationmanager/removeLaunchPoint`

Removes a dynamic launchpoint. Note: It can cause application uninstall.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) Indicates the launchpoint ID to be removed. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/removeLaunchPoint '{ "launchPointId":"178884" }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="running"></a>
## `running`

`luna://com.webos.service.applicationmanager/running`

Lists the background/foreground applications and their process IDs that are running on webOS platform. Note: This API is one of key methods of applicationmanager.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribe to get notifications false: Not subscribed Default: false |

**Returns:**

| Field | Type / notes |
|---|---|
| `running` | Object array: running\_apps (required) If the running method succeeds, the array of the running applications will be returned. |

```sh
luna-send -i -f luna://com.webos.service.applicationmanager/running '{ "subscribe":true }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; subscribed:Boolean; running:Object array: running_apps \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="running_apps"></a>
## `running_apps`

`luna://com.webos.service.applicationmanager/running_apps`

Indicates the object that contains the array of the running applications.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/running_apps '{}'
```

> Service: Provides methods for managing application life cycle, application information, LaunchPoint list. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)

<a id="setdefaultapp"></a>
## `setDefaultApp` ⚠️ DANGEROUS

`luna://com.webos.service.applicationmanager/setDefaultApp`

Sets the default app for a category such as home (replaces the Home button target)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 6+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | string e.g. home |
| `appId` | string |

```sh
luna-send -n 1 luna://com.webos.service.applicationmanager/setDefaultApp '{"category":"home","appId":"com.webos.app.home"}'
```

> Actually-Good-WebOS uses this to make a custom Home the default and its uninstall resets to com.webos.app.home. A broken default home app is a recovery hazard.

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/tv/install.sh), [2](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/README.md)

<a id="updatelaunchpoint"></a>
## `updateLaunchPoint`

`luna://com.webos.service.applicationmanager/updateLaunchPoint`

Updates a dynamic launchpoint. Note: If a user changes the HDMI application icon to another icon like a game icon using Input Manager on a TV, the HDMI application icon is dynamically changed to the new icon on the launcher.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `launchPointId` | String (required) Indicates the launchpoint ID to be updated. Note : Both launchPointId and one or more parameters (title, icon, etc) need to be passed from service user. |
| `title` | String (optional) Indicates the launchpoint title. |
| `icon` | String (optional) Indicates the path of the icon image displayed for the launchpoint. |
| `bgImage` | String (optional) Indicates the path of the background image displayed to the user when the user hovers over the launchpoint. Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ |
| `bgColor` | String (optional) Indicates the background color for the launchpoint. It will be displayed when the bgImage is not provided or unable to display. A color can be specified as a hex value or as a HTML color name. |
| `imageForRecents` | String (optional) Indicates the path of the image displayed in the Recents tile. |
| `iconColor` | String (optional) Indicates the background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen. Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ |
| `largeIcon` | String (optional) Indicates the path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher. Note : This file path is relative to the appinfo.json file. |
| `appDescription` | String (optional) Indicates a brief description for the launchpoint. Note : The appDescription cannot exceed 60 characters. |
| `params` | Object: params (optional) If params is used, it should contain information on the launchpoint which will be passed to the application. |
| `bgImages` | String array (optional) Indicates the paths of the background images displayed to the user when the user hovers over the launchpoint. |
| `tileSize` | String (optional) Indicates the tile size on UI. Possible values are normal large. Default: normal Note : The large tile hints that UI should make this tile larger than normal (2x). Usually, large size may be used for promotional application. |
| `unmovable` | Boolean (optional) Indicates if the launchpoint position is movable or not. Possible values are: true : The launchpoint position cannot be moved by the user. false : the launchpoint position can be moved by the user. Default: false |
| `userData` | String (optional) Indicates the additional data that may be used for analytical purposes. Note : The userData will simply be logged when the user interacts with it in Launcher. |
| `icons` | Object array (optional) Indicates the list of icon images. Note : The icons will be shown in the launch point alternately. |
| `favicon` | String (optional) Indicates the favorite icon image displayed for the website. |
| `policyCategory` | String (optional) Indicate a category(group) of the launch point. The value should be the one of below mapping table. *$RESERVED_VALUE is for special callers to be controlled by LPM. Value Launch Point Type position default Any 9 *$RESERVED_VALUE $RESERVED_LP $RESERVED_POSITION |
| `default` | Any 9 |
| `*$RESERVED_VALUE` | $RESERVED_LP $RESERVED_POSITION |
| `relaunch` | Boolean (optional) Indicates if the target app is re-launched whenever the launch point is clicked. (Not fast-switching) Note: This parameter is deprecated in IvyLeague. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (int8\_t) (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for more details. |

```sh
luna-send -n 1 -f luna://com.webos.service.applicationmanager/updateLaunchPoint '{ "launchPointId":"178884", "title":"Test" }
```

> ACG: application.launcher \| Returns: returnValue:Boolean; errorCode:Number (int8_t); errorText:String \| Service: Provides methods for managing application life cycle, application information, LaunchPoint list.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/)
