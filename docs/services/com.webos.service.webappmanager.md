# `com.webos.service.webappmanager`

10 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`clearBrowsingData`](#clearbrowsingdata) | public |  | apps | Clears the browsing data of a specific type. |
| [`closeAllApps`](#closeallapps) | public |  | apps | Closes all the currently running applications. |
| [`getWebProcessSize`](#getwebprocesssize) | public |  | apps | Gets the size of the current WebProcess. |
| [`killApp`](#killapp) | public |  | apps | Kills all the windows owned by the specified app. Note : The method is intended to be used by SAM if necessary. |
| [`launchApp`](#launchapp) | public |  | apps | Launches an application by the app ID. Note : This is the major function used by the SAM to request for launching an application. |
| [`listRunningApps`](#listrunningapps) | public | yes | apps | Returns the list of applications that the Web App Manager is running. |
| [`logControl`](#logcontrol) | public |  | apps | Enables or disables displaying the logs with associated keys. |
| [`pauseApp`](#pauseapp) | public |  | apps | Pauses the web application. Note : The method can be used by SAM to move a specified web application from foreground to background (currentl |
| [`webProcessCreated`](#webprocesscreated) | public | yes | apps | Returns the process ID of the launched application. |
| [`WebProcesses`](#webprocesses) | unknown |  | apps | Contains the size of the current running WebProcess. |

<a id="clearbrowsingdata"></a>
## `clearBrowsingData`

`luna://com.webos.service.webappmanager/clearBrowsingData`

Clears the browsing data of a specific type.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `types` | String array (optional) Indicates the type of the browsing data to be deleted. Possible values are: all (includes browsing data of all other specified types) appcache (dropped since Chromium 85) cache codecache cookies fileSystems localStorage channelIDs serviceWorkers cacheStorage webSQL Note: If no value is provided, by default, the method deletes all browsing data. |

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/clearBrowsingData '{"types":["all"]}'
```

> ACG: webapplication.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="closeallapps"></a>
## `closeAllApps`

`luna://com.webos.service.webappmanager/closeAllApps`

Closes all the currently running applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/closeAllApps '{}
```

> ACG: webapplication.management \| Returns: returnValue:Boolean \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="getwebprocesssize"></a>
## `getWebProcessSize`

`luna://com.webos.service.webappmanager/getWebProcessSize`

Gets the size of the current WebProcess.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/getWebProcessSize '{}
```

> ACG: webapplication.query \| Returns: WebProcesses:Object array: WebProcesses; returnValue:Boolean \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="killapp"></a>
## `killApp`

`luna://com.webos.service.webappmanager/killApp`

Kills all the windows owned by the specified app. Note : The method is intended to be used by SAM if necessary.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 12+; webOS 10  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `appId` | String (required) Indicates the ID of app to kill. |
| `instanceId` | String (required) Indicates the instance ID of the app to kill. |

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/killApp '{ "appId":"bareapp", "instanceId":"9a3b4236-3bf5-42bd-b32e-707211f716ac0" }
```

> ACG: webapplication.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; appId:String; instanceId:String \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM) \|\| Alias luna://com.palm.webappmanager/killApp also appears in Hearth recents.ts.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/), [2](https://github.com/rawinek/webos-homebar/blob/HEAD/webos10/home-takeover.sh), [3](https://github.com/rudra-avatar/Hearth/blob/HEAD/src/lib/recents.ts)

<a id="launchapp"></a>
## `launchApp`

`luna://com.webos.service.webappmanager/launchApp`

Launches an application by the app ID. Note : This is the major function used by the SAM to request for launching an application.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appDesc` | String (required) Indicates the JSON object containing the appinfo.json parameters determined by the SAM. |
| `parameters` | String (optional) Indicates the JSON object containing the parameters to pass to the app. |
| `launchingAppId` | String (optional) Indicates the ID of the launching app. |
| `launchingProcId` | Number (optional) Indicates the ID of the process launching the app. |
| `instanceId` | String (required) Indicates the ID of the instance of the app which will be launched. Note : The instanceId is generated by the SAM for every new launch request. |

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/launchApp '{ "launchingAppId":"com.webos.app.home", "appDesc":{ "defaultWindowType":"card", "uiRevision":"2", "systemApp":true, "version":"1.0.1", "vendor":"LG Electronics, Inc.", "miniicon":"icon.png", "hasPromotion":false, "tileSize":"normal", "icons":[ ], "launchPointId":"bareapp_default", "largeIcon":"/usr/palm/applications/bareapp/icon.png", "lockable":true, "transparent":false, "icon":"/usr/palm/applications/bareapp/icon.png", "checkUpdateOnLaunch":true, "imageForRecents":"", "spinnerOnLaunch":true, "handlesRelaunch":false, "unmovable":false, "id":"bareapp", "inspectable":false, "noSplashOnLaunch":false, "privilegedJail":false, "trustLevel":"default", "title":"Bare App", "deeplinkingParams":"", "lptype":"default", "inAppSetting":false, "favicon":"", "visible":true, "accessibility":{ "supportsAudioGuidance":false }, "folderPath":"/usr/palm/applications/bareapp", "main":"index.html", "removable":true, "type":"web", "disableBackHistoryAPI":false, "bgImage":"" }, "appId":"bareapp", "parameters":{ "displayAffinity":0 }, "reason":"com.webos.app.home", "launchingProcId":"", "instanceId":"188f99b7-1e1a-489f-8e3d-56844a7713030" }
```

> ACG: webapplication.management \| Returns: appId:String; procId:Number; errorCode:Number; errorText:String; returnValue:Boolean; instanceId:String \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="listrunningapps"></a>
## `listRunningApps`

`luna://com.webos.service.webappmanager/listRunningApps`

Returns the list of applications that the Web App Manager is running.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true : Subscribed for notifications false : Not subscribed Default: false |
| `includeSysApps` | Boolean (optional) Includes/excludes the system applications in the running app list. Possible values are: true : Includes the system applications in the running app list. false : Excludes the system applications from the running app list. Default: false |

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/listRunningApps '{}
```

> ACG: webapplication.query \| Returns: running:String array; returnValue:Boolean \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="logcontrol"></a>
## `logControl`

`luna://com.webos.service.webappmanager/logControl`

Enables or disables displaying the logs with associated keys.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | String (required) Indicates the keys to determine which log to enable. Note : This parameter will be ignored if it doesn't match with existing keys. |
| `value` | String (required) Indicates if the log of the specified key is shown/hidden. Possible values are: on : Shows log of the specified key off : Hide log of the specified key Note : The value will be ignored when it is not "on" or "off". |

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/logControl '{ "keys":"event", "value":"on" }
```

> ACG: webapplication.dev \| Returns: event:Boolean; bundleMessage:Boolean; mouseMove:Boolean; returnValue:Boolean \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="pauseapp"></a>
## `pauseApp`

`luna://com.webos.service.webappmanager/pauseApp`

Pauses the web application. Note : The method can be used by SAM to move a specified web application from foreground to background (currently, SAM uses the keep-alive feature instead of WAM).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `instanceId` | String (required) Indicates the instance ID of the app to be paused. |

```sh
luna-send -n 1 -f luna://com.palm.webappmanager/pauseApp '{ "instanceId":"7ca4b85d-43b2-4749-b2c3-346f6498c8590" }
```

> ACG: webapplication.management \| Returns: appId:String; returnValue:Boolean; errorCode:Number; errorText:String; instanceId:String \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="webprocesscreated"></a>
## `webProcessCreated`

`luna://com.webos.service.webappmanager/webProcessCreated`

Returns the process ID of the launched application.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Indicates the ID of the launched application. |
| `instanceId` | String (required) Indicates the instance ID of the launched application. |
| `subscribe` | Boolean (optional) Indicates if subscribed for notifications. Possible values are: true: Subscribe for notifications false: Not subscribed Default: false |

```sh
luna-send -n 1 luna://com.webos.service.webappmanager/webProcessCreated '{ "instanceId":"de90e74a-b86b-42c8-8785-3efd927a36430", "appId":"bareapp" }
```

> ACG: webapplication.query \| Returns: id:String; instanceId:String; errorText:String; returnValue:Boolean; webprocessid:Number \| Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM)

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)

<a id="webprocesses"></a>
## `WebProcesses`

`luna://com.webos.service.webappmanager/WebProcesses`

Contains the size of the current running WebProcess.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.webappmanager/WebProcesses '{}'
```

> Service: Internal system service for handling web-based (HTML) applications. The Web App Manager (WAM) is a component responsible for web application management in webOS platform. The Application Manager (SAM) \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-webappmanager/)
