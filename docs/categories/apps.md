# Applications

140 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.palm.applicationManager/close`](../services/com.palm.applicationManager.md#close) | root | Closes a running process |
| [`luna://com.palm.applicationManager/launch`](../services/com.palm.applicationManager.md#launch) | root | Launches an app |
| [`luna://com.palm.applicationManager/listLaunchPoints`](../services/com.palm.applicationManager.md#listlaunchpoints) | root | Lists all installed apps/launch points |
| [`luna://com.palm.applicationManager/rescan`](../services/com.palm.applicationManager.md#rescan) | root | Refreshes the Launcher |
| [`luna://com.palm.applicationManager/running`](../services/com.palm.applicationManager.md#running) | root | Lists running apps with process ids |
| [`luna://com.webos.appInstallService/installLocal`](../services/com.webos.appInstallService.md#installlocal) | private | Installs an app from a local IPK (non-dev variant; name seen only) |
| [`luna://com.webos.applicationManager/addLaunchPoint`](../services/com.webos.applicationManager.md#addlaunchpoint) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/addVirtualApp`](../services/com.webos.applicationManager.md#addvirtualapp) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/blockSystemApp`](../services/com.webos.applicationManager.md#blocksystemapp) | private | Blocks a system app (used by webos-homebar to replace LG Home) ⚠️ |
| [`luna://com.webos.applicationManager/changeRunningAppId`](../services/com.webos.applicationManager.md#changerunningappid) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/close`](../services/com.webos.applicationManager.md#close) | ssap | Close an app by id (SSAP) |
| [`luna://com.webos.applicationManager/closeAllApps`](../services/com.webos.applicationManager.md#closeallapps) | private | Closes all running apps (as used by webos-homebar helper) |
| [`luna://com.webos.applicationManager/closeByAppId`](../services/com.webos.applicationManager.md#closebyappid) | public | Closes a running app by id |
| [`luna://com.webos.applicationManager/dev/close`](../services/com.webos.applicationManager.md#dev_close) | unknown | Registered in webOS OSE sysbus api.json (ACG group application.devmode); name only |
| [`luna://com.webos.applicationManager/dev/closeByAppId`](../services/com.webos.applicationManager.md#dev_closebyappid) | public | Developer-mode variant of closeByAppId used by ares-launch to close a dev app |
| [`luna://com.webos.applicationManager/dev/listApps`](../services/com.webos.applicationManager.md#dev_listapps) | public | Lists developer-mode (and dev-visible) apps with id, version, folderPath, icon |
| [`luna://com.webos.applicationManager/dev/managerInfo`](../services/com.webos.applicationManager.md#dev_managerinfo) | unknown | Registered in webOS OSE sysbus api.json (ACG group application.devmode); name only |
| [`luna://com.webos.applicationManager/dev/running`](../services/com.webos.applicationManager.md#dev_running) | public | Developer-mode listing of running apps (ares-launch --running) |
| [`luna://com.webos.applicationManager/getAllContents`](../services/com.webos.applicationManager.md#getallcontents) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getAppBasePath`](../services/com.webos.applicationManager.md#getappbasepath) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getAppInfo`](../services/com.webos.applicationManager.md#getappinfo) | ssap | Get info for one installed app |
| [`luna://com.webos.applicationManager/getAppLifeEvents`](../services/com.webos.applicationManager.md#getapplifeevents) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getAppLifeStatus`](../services/com.webos.applicationManager.md#getapplifestatus) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getAppLoadStatus`](../services/com.webos.applicationManager.md#getapploadstatus) | public | Returns whether the app with the given ID is installed (webOS TV 4.0+). |
| [`luna://com.webos.applicationManager/getAppStatus`](../services/com.webos.applicationManager.md#getappstatus) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getContents`](../services/com.webos.applicationManager.md#getcontents) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getForegroundAppInfo`](../services/com.webos.applicationManager.md#getforegroundappinfo) | ssap | Get (or subscribe to) the foreground app |
| [`luna://com.webos.applicationManager/getHandlerForExtension`](../services/com.webos.applicationManager.md#gethandlerforextension) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getHandlerForMimeType`](../services/com.webos.applicationManager.md#gethandlerformimetype) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getHandlerForMimeTypeByVerb`](../services/com.webos.applicationManager.md#gethandlerformimetypebyverb) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getHandlerForUrl`](../services/com.webos.applicationManager.md#gethandlerforurl) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/getHandlerForUrlByVerb`](../services/com.webos.applicationManager.md#gethandlerforurlbyverb) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/isPromotionalAppOn`](../services/com.webos.applicationManager.md#ispromotionalappon) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/launch`](../services/com.webos.applicationManager.md#launch) | public | Launches the app with the given app ID, optionally with params. ⚠️ |
| [`luna://com.webos.applicationManager/launchDefaultApp`](../services/com.webos.applicationManager.md#launchdefaultapp) | private | Launches the default app (listed by ls-monitor -i, parameters unread) |
| [`luna://com.webos.applicationManager/launchVirtualApp`](../services/com.webos.applicationManager.md#launchvirtualapp) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listAllHandlersForMime`](../services/com.webos.applicationManager.md#listallhandlersformime) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listAllHandlersForMimeByVerb`](../services/com.webos.applicationManager.md#listallhandlersformimebyverb) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listAllHandlersForMultipleMime`](../services/com.webos.applicationManager.md#listallhandlersformultiplemime) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listAllHandlersForMultipleUrlPattern`](../services/com.webos.applicationManager.md#listallhandlersformultipleurlpattern) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listAllHandlersForUrl`](../services/com.webos.applicationManager.md#listallhandlersforurl) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listAllHandlersForUrlByVerb`](../services/com.webos.applicationManager.md#listallhandlersforurlbyverb) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listAllHandlersForUrlPattern`](../services/com.webos.applicationManager.md#listallhandlersforurlpattern) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listApps`](../services/com.webos.applicationManager.md#listapps) | private | Lists installed apps |
| [`luna://com.webos.applicationManager/listExtensionMap`](../services/com.webos.applicationManager.md#listextensionmap) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/listLaunchPoints`](../services/com.webos.applicationManager.md#listlaunchpoints) | ssap | List launcher launch points (apps visible in launcher) |
| [`luna://com.webos.applicationManager/lockApp`](../services/com.webos.applicationManager.md#lockapp) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/mimeTypeForExtension`](../services/com.webos.applicationManager.md#mimetypeforextension) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/moveLaunchPoint`](../services/com.webos.applicationManager.md#movelaunchpoint) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/notifyAlertClosed`](../services/com.webos.applicationManager.md#notifyalertclosed) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/notifySplashTimeout`](../services/com.webos.applicationManager.md#notifysplashtimeout) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/onLaunch`](../services/com.webos.applicationManager.md#onlaunch) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/open`](../services/com.webos.applicationManager.md#open) | ssap | Open an app by id (SSAP) |
| [`luna://com.webos.applicationManager/pause`](../services/com.webos.applicationManager.md#pause) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/registerApp`](../services/com.webos.applicationManager.md#registerapp) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/registerNativeApp`](../services/com.webos.applicationManager.md#registernativeapp) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/registerVerbsForRedirect`](../services/com.webos.applicationManager.md#registerverbsforredirect) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/registerVerbsForResource`](../services/com.webos.applicationManager.md#registerverbsforresource) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/releaseBlockSystemApp`](../services/com.webos.applicationManager.md#releaseblocksystemapp) | private | Releases a blocked system app |
| [`luna://com.webos.applicationManager/removeAllContents`](../services/com.webos.applicationManager.md#removeallcontents) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/removeContent`](../services/com.webos.applicationManager.md#removecontent) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/removeLaunchPoint`](../services/com.webos.applicationManager.md#removelaunchpoint) | private | Removes a launch point by id |
| [`luna://com.webos.applicationManager/removeVirtualApp`](../services/com.webos.applicationManager.md#removevirtualapp) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/running`](../services/com.webos.applicationManager.md#running) | private | Lists running apps |
| [`luna://com.webos.applicationManager/scan`](../services/com.webos.applicationManager.md#scan) | private | Triggers the app manager to rescan app directories |
| [`luna://com.webos.applicationManager/searchApps`](../services/com.webos.applicationManager.md#searchapps) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/setContents`](../services/com.webos.applicationManager.md#setcontents) | public | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/setOrder`](../services/com.webos.applicationManager.md#setorder) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.applicationManager/updateLaunchPoint`](../services/com.webos.applicationManager.md#updatelaunchpoint) | private | Method registered by com.webos.applicationManager (root category) |
| [`luna://com.webos.service.applicationmanager/addLaunchPoint`](../services/com.webos.service.applicationmanager.md#addlaunchpoint) | public | Adds a dynamic launchpoint. According to the information on launchpoint, application is displayed in the Launcher. If a parameter is not defined, SAM set the LP |
| [`luna://com.webos.service.applicationmanager/appInfo`](../services/com.webos.service.applicationmanager.md#appinfo) | unknown | Contains the information about the application. |
| [`luna://com.webos.service.applicationmanager/close`](../services/com.webos.service.applicationmanager.md#close) | public | Closes an application. Note A: At least one parameter is required. ('id', 'launchPointId', 'instanceId') Note B: Don't use this API in TV and signage. The API i |
| [`luna://com.webos.service.applicationmanager/closeByAppId`](../services/com.webos.service.applicationmanager.md#closebyappid) | public | Closes an application by appId in the system manager. |
| [`luna://com.webos.service.applicationmanager/dev/close`](../services/com.webos.service.applicationmanager.md#dev_close) | public | Closes application by either of application id, instance id and launchpoint id . Note: At least one parameter is required. Available only in developer mode (dev |
| [`luna://com.webos.service.applicationmanager/dev/closeByAppId`](../services/com.webos.service.applicationmanager.md#dev_closebyappid) | public | Closes an application by the application id. Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode' |
| [`luna://com.webos.service.applicationmanager/dev/listApps`](../services/com.webos.service.applicationmanager.md#dev_listapps) | public | Lists all of the registered applications. Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') w |
| [`luna://com.webos.service.applicationmanager/dev/managerInfo`](../services/com.webos.service.applicationmanager.md#dev_managerinfo) | public | Provides information provided by listLaunchPoints,running, and listApps APIs. Gets all of the launchpoints and lists all of the registered applications. Lists t |
| [`luna://com.webos.service.applicationmanager/dev/running`](../services/com.webos.service.applicationmanager.md#dev_running) | public | Lists the background/foreground applications and their process IDs that are running on the webOS platform. Note: Available only in developer mode (devmode). To  |
| [`luna://com.webos.service.applicationmanager/foregroundAppInfo`](../services/com.webos.service.applicationmanager.md#foregroundappinfo) | unknown | The object contains sorted foreground applications in ascending order. |
| [`luna://com.webos.service.applicationmanager/getAllContents`](../services/com.webos.service.applicationmanager.md#getallcontents) | private | Returns recommended content lists of all apps |
| [`luna://com.webos.service.applicationmanager/getAppBasePath`](../services/com.webos.service.applicationmanager.md#getappbasepath) | public | Gets the path of the application. Note: This API is useful to get base directory path of installed application. |
| [`luna://com.webos.service.applicationmanager/getAppInfo`](../services/com.webos.service.applicationmanager.md#getappinfo) | public | Gets the application information. Note: The information is generated from appinfo.json file. |
| [`luna://com.webos.service.applicationmanager/getAppLifeEvents`](../services/com.webos.service.applicationmanager.md#getapplifeevents) | public | Provides the application's event status in its life cycle. |
| [`luna://com.webos.service.applicationmanager/getAppLifeStatus`](../services/com.webos.service.applicationmanager.md#getapplifestatus) | public | Provides the application's life cycle status. Note: This API is useful to do something based on application's life cycle status. |
| [`luna://com.webos.service.applicationManager/getAppLoadStatus`](../services/com.webos.service.applicationManager.md#getapploadstatus) | public | Checks whether an app exists/is loadable |
| [`luna://com.webos.service.applicationmanager/getAppStatus`](../services/com.webos.service.applicationmanager.md#getappstatus) | public | Gets the application status and information. |
| [`luna://com.webos.service.applicationmanager/getForegroundAppInfo`](../services/com.webos.service.applicationmanager.md#getforegroundappinfo) | public | Gets the information on the foreground application. Note: The information comes from LSM. Please use extraInfo parameter to get raw responsePayload from LSM. |
| [`luna://com.webos.service.applicationmanager/launch`](../services/com.webos.service.applicationmanager.md#launch) | public | Launches an application corresponding to the given application ID. Opens the service or app. Example: The user can download a content with a service in the back |
| [`luna://com.webos.service.applicationmanager/launchPoints`](../services/com.webos.service.applicationmanager.md#launchpoints) | unknown | Contains the array of launchpoints. |
| [`luna://com.webos.service.applicationmanager/listApps`](../services/com.webos.service.applicationmanager.md#listapps) | public | Lists all of the registered applications. Note: Client can get all installed application information using this API. |
| [`luna://com.webos.service.applicationmanager/listLaunchPoints`](../services/com.webos.service.applicationmanager.md#listlaunchpoints) | public | Gets all of the launchpoints. Note: LaunchPoint is the virtual instance of an application. The webOS provides shortcut based on launchPoint. |
| [`luna://com.webos.service.applicationmanager/lockApp`](../services/com.webos.service.applicationmanager.md#lockapp) | public | Locks an application. Note: Once it is locked, the application cannot be launched. This method is only called internally. Do not use this method in your applica |
| [`luna://com.webos.service.applicationmanager/open`](../services/com.webos.service.applicationmanager.md#open) | public | The open method implicitly opens an application based on the target URL or MIME type. Caution : Using this method is not recommended due to insecurity. |
| [`luna://com.webos.service.applicationmanager/params`](../services/com.webos.service.applicationmanager.md#params) | unknown | Contains the parameters for the target application. Specify correct parameters for each application. As each application has different parameters, the parameter |
| [`luna://com.webos.service.applicationmanager/pause`](../services/com.webos.service.applicationmanager.md#pause) | public | Pauses an application. Note : At least one parameter is required. ('id', 'launchPointId', 'instanceId') |
| [`luna://com.webos.service.applicationmanager/registerApp`](../services/com.webos.service.applicationmanager.md#registerapp) | public | Registers to receive events related to app life cycle. |
| [`luna://com.webos.service.applicationmanager/registerNativeApp`](../services/com.webos.service.applicationmanager.md#registernativeapp) | unknown | Registered in webOS OSE sysbus api.json (ACG group application.operation); name only |
| [`luna://com.webos.service.applicationmanager/removeLaunchPoint`](../services/com.webos.service.applicationmanager.md#removelaunchpoint) | public | Removes a dynamic launchpoint. Note: It can cause application uninstall. |
| [`luna://com.webos.service.applicationmanager/running`](../services/com.webos.service.applicationmanager.md#running) | public | Lists the background/foreground applications and their process IDs that are running on webOS platform. Note: This API is one of key methods of applicationmanage |
| [`luna://com.webos.service.applicationmanager/running_apps`](../services/com.webos.service.applicationmanager.md#running_apps) | unknown | Indicates the object that contains the array of the running applications. |
| [`luna://com.webos.service.applicationmanager/setDefaultApp`](../services/com.webos.service.applicationmanager.md#setdefaultapp) | private | Sets the default app for a category such as home (replaces the Home button target) ⚠️ |
| [`luna://com.webos.service.applicationmanager/updateLaunchPoint`](../services/com.webos.service.applicationmanager.md#updatelaunchpoint) | public | Updates a dynamic launchpoint. Note: If a user changes the HDMI application icon to another icon like a game icon using Input Manager on a TV, the HDMI applicat |
| [`luna://com.webos.service.appstatus/getAppStatus`](../services/com.webos.service.appstatus.md#getappstatus) | ssap | Get (subscribe) app status |
| [`luna://com.webos.service.contextintentmgr/getDataFromWorkflow`](../services/com.webos.service.contextintentmgr.md#getdatafromworkflow) | public | Publishes data from the workflow to the app. The data can be consumed by an app which has subscribed to it. |
| [`luna://com.webos.service.contextintentmgr/injectDataToWorkflow`](../services/com.webos.service.contextintentmgr.md#injectdatatoworkflow) | public | Injects data from the app to the workflow. |
| [`luna://com.webos.service.contextintentmgr/result`](../services/com.webos.service.contextintentmgr.md#result) | unknown | Contains the results. |
| [`luna://com.webos.service.intent/handler`](../services/com.webos.service.intent.md#handler) | unknown | Indicates the application to handle the intent. |
| [`luna://com.webos.service.intent/intent`](../services/com.webos.service.intent.md#intent) | unknown | Provides details of the intent. |
| [`luna://com.webos.service.intent/intentFilter`](../services/com.webos.service.intent.md#intentfilter) | unknown |  |
| [`luna://com.webos.service.intent/query`](../services/com.webos.service.intent.md#query) | public | Clients can get handlers by calling the API. |
| [`luna://com.webos.service.intent/sendResult`](../services/com.webos.service.intent.md#sendresult) | public | Enables the handlers to reply with the results. Note: Also refer 'subscribeResult' API. |
| [`luna://com.webos.service.intent/start`](../services/com.webos.service.intent.md#start) | public | Starts the handlers based on the intent information provided in the request payload. Please refer ' subscribeResult ' API for subscription payload. |
| [`luna://com.webos.service.intent/subscribeResult`](../services/com.webos.service.intent.md#subscriberesult) | public | All running intents have their own 'intentId'. Of course, handlers can reply results thought 'intentId'. Other component including requester can subscribe the r |
| [`luna://com.webos.service.preloadmanager/getPreloadPolicy`](../services/com.webos.service.preloadmanager.md#getpreloadpolicy) | private | Reads preload policy |
| [`luna://com.webos.service.preloadmanager/setPreloadPolicy`](../services/com.webos.service.preloadmanager.md#setpreloadpolicy) | private | Enables/disables preloading of an app so LG does not keep it resident in memory |
| [`luna://com.webos.service.preloadmanager/setPreloadStatus`](../services/com.webos.service.preloadmanager.md#setpreloadstatus) | private | Preload manager status setter (name listed among ACG-permitted methods in scheduled-task research note) |
| [`luna://com.webos.service.recent/listRecents`](../services/com.webos.service.recent.md#listrecents) | private | Lists the recent apps panel entries |
| [`luna://com.webos.service.recent/removeRecent`](../services/com.webos.service.recent.md#removerecent) | private | Removes an app from the recents list |
| [`luna://com.webos.service.systemprofile/debug/rescan`](../services/com.webos.service.systemprofile.md#debug_rescan) | private | Rescans the system profile override folder (/var/webos-profile/override) so a custom home profile is used |
| [`luna://com.webos.service.webappmanager/clearBrowsingData`](../services/com.webos.service.webappmanager.md#clearbrowsingdata) | public | Clears the browsing data of a specific type. |
| [`luna://com.webos.service.webappmanager/closeAllApps`](../services/com.webos.service.webappmanager.md#closeallapps) | public | Closes all the currently running applications. |
| [`luna://com.webos.service.webappmanager/getWebProcessSize`](../services/com.webos.service.webappmanager.md#getwebprocesssize) | public | Gets the size of the current WebProcess. |
| [`luna://com.webos.service.webappmanager/killApp`](../services/com.webos.service.webappmanager.md#killapp) | public | Kills all the windows owned by the specified app. Note : The method is intended to be used by SAM if necessary. |
| [`luna://com.webos.service.webappmanager/launchApp`](../services/com.webos.service.webappmanager.md#launchapp) | public | Launches an application by the app ID. Note : This is the major function used by the SAM to request for launching an application. |
| [`luna://com.webos.service.webappmanager/listRunningApps`](../services/com.webos.service.webappmanager.md#listrunningapps) | public | Returns the list of applications that the Web App Manager is running. |
| [`luna://com.webos.service.webappmanager/logControl`](../services/com.webos.service.webappmanager.md#logcontrol) | public | Enables or disables displaying the logs with associated keys. |
| [`luna://com.webos.service.webappmanager/pauseApp`](../services/com.webos.service.webappmanager.md#pauseapp) | public | Pauses the web application. Note : The method can be used by SAM to move a specified web application from foreground to background (currently, SAM uses the keep |
| [`luna://com.webos.service.webappmanager/webProcessCreated`](../services/com.webos.service.webappmanager.md#webprocesscreated) | public | Returns the process ID of the launched application. |
| [`luna://com.webos.service.webappmanager/WebProcesses`](../services/com.webos.service.webappmanager.md#webprocesses) | unknown | Contains the size of the current running WebProcess. |
| [`luna://org.webosbrew.hbchannel.service/install`](../services/org.webosbrew.hbchannel.service.md#install) | root | Downloads, verifies and installs an IPK |
| [`ssap://system.launcher/close`](../services/ssap_system.launcher.md#close) | ssap | Close app |
| [`ssap://system.launcher/getAppState`](../services/ssap_system.launcher.md#getappstate) | ssap | Get app running/visible state |
| [`ssap://system.launcher/launch`](../services/ssap_system.launcher.md#launch) | ssap | Launch app (returns sessionId) |
| [`ssap://system.launcher/open`](../services/ssap_system.launcher.md#open) | ssap | Open URL in browser app |
| [`ssap://webapp/closeWebApp`](../services/ssap_webapp.md#closewebapp) | ssap | Close web app |
| [`ssap://webapp/connectToApp`](../services/ssap_webapp.md#connecttoapp) | ssap | Connect to a web app session (ConnectSDK) |
| [`ssap://webapp/isWebAppPinned`](../services/ssap_webapp.md#iswebapppinned) | ssap | Check whether web app is pinned |
| [`ssap://webapp/launchWebApp`](../services/ssap_webapp.md#launchwebapp) | ssap | Launch a web app (ConnectSDK) |
| [`ssap://webapp/pinWebApp`](../services/ssap_webapp.md#pinwebapp) | ssap | Pin web app |
| [`ssap://webapp/removePinnedWebApp`](../services/ssap_webapp.md#removepinnedwebapp) | ssap | Unpin web app |
