# Developer Mode & Testing

44 methods.  [Back to index](../../README.md#categories)

| URI | Access | Conf | Description |
|---|---|---|---|
| [`luna://com.palm.service.devmode/getDevMode`](../services/com.palm.service.devmode.md#getdevmode) | public | inferred | Returns the dev mode. |
| [`luna://com.palm.service.devmode/getPassphrase`](../services/com.palm.service.devmode.md#getpassphrase) | public | inferred | Returns the passphrase. |
| [`luna://com.palm.service.devmode/info`](../services/com.palm.service.devmode.md#info) | public | inferred | Handles the info. |
| [`luna://com.palm.service.devmode/quit`](../services/com.palm.service.devmode.md#quit) | public | inferred | Quits the devmode. |
| [`luna://com.palm.service.devmode/setDevMode`](../services/com.palm.service.devmode.md#setdevmode) | public | inferred | Sets the dev mode. |
| [`luna://com.palm.service.tellurium/appInfo`](../services/com.palm.service.tellurium.md#appinfo) | unknown | documented | Provide the application ID to subscribe. Ex: "appInfo":{"id":"amazon.html"} |
| [`luna://com.palm.service.tellurium/broadcastCommand`](../services/com.palm.service.tellurium.md#broadcastcommand) | public | documented | Sends message to all TelluriomNub instances |
| [`luna://com.palm.service.tellurium/filter`](../services/com.palm.service.tellurium.md#filter) | unknown | documented | Its an object that describes details to apply the filter (usually used when "command": "getItems") |
| [`luna://com.palm.service.tellurium/getApplicationInformationResult`](../services/com.palm.service.tellurium.md#getapplicationinformationresult) | unknown | documented | Provides QML application information. |
| [`luna://com.palm.service.tellurium/getItemsResult`](../services/com.palm.service.tellurium.md#getitemsresult) | unknown | documented | Provides element information for QML application using object hierarchy. |
| [`luna://com.palm.service.tellurium/getRunningAppsAndStagesResult`](../services/com.palm.service.tellurium.md#getrunningappsandstagesresult) | unknown | documented | Provides running and staging information of QML apps. |
| [`luna://com.palm.service.tellurium/handleRequest`](../services/com.palm.service.tellurium.md#handlerequest) | public | documented | handleRequest allows to process requested method Available methods are: getRunningAppsAndStages: returns applications and their stageId getApplicationInformatio |
| [`luna://com.palm.service.tellurium/notifyEvent`](../services/com.palm.service.tellurium.md#notifyevent) | public | documented | Called by a nub to notify that an event occured |
| [`luna://com.palm.service.tellurium/ping`](../services/com.palm.service.tellurium.md#ping) | public | documented | Allows to perform 'are-you-alive' check. Mirrors sent message |
| [`luna://com.palm.service.tellurium/queue`](../services/com.palm.service.tellurium.md#queue) | unknown | documented | queue(mandatory): array, containing objects, each representing any of testability commands. Example: setItemsProperties: sets properties for QML elements getIte |
| [`luna://com.palm.service.tellurium/replyToCommand`](../services/com.palm.service.tellurium.md#replytocommand) | public | documented | This is called when a subscriber needs to reply to a command i.e., Sends a reply to the TelluriumdService from TelluriumNub(Webapp) or Qttestability(QML app) wh |
| [`luna://com.palm.service.tellurium/resolution`](../services/com.palm.service.tellurium.md#resolution) | unknown | documented | Screen resolution |
| [`luna://com.palm.service.tellurium/stages`](../services/com.palm.service.tellurium.md#stages) | unknown | documented | Provide stage Information of the running application. |
| [`luna://com.palm.service.tellurium/subscribeToCommands`](../services/com.palm.service.tellurium.md#subscribetocommands) | public | documented | Subscribes to Tellurium commands |
| [`luna://com.palm.service.tellurium/subscribeToEvents`](../services/com.palm.service.tellurium.md#subscribetoevents) | public | documented | Subscribes to stages' events (received from stage in notifyEvent) |
| [`luna://com.palm.service.tellurium/version`](../services/com.palm.service.tellurium.md#version) | public | documented | Returns the tellurium version from the submission tag. |
| [`luna://com.palm.service.tellurium/window`](../services/com.palm.service.tellurium.md#window) | unknown | documented | Creates a top level window and accesses the screen information. |
| [`luna://com.palmdts.devmode.service/devSessionTimeStatus`](../services/com.palmdts.devmode.service.md#devsessiontimestatus) | private | documented | Remaining dev session time |
| [`luna://com.palmdts.devmode.service/resetSession`](../services/com.palmdts.devmode.service.md#resetsession) | private | documented | Renews the dev mode session |
| [`luna://com.webos.service.acr/setDebug`](../services/com.webos.service.acr.md#setdebug) | private | documented | ACR debug control. |
| [`luna://com.webos.service.devmode/getDevMode`](../services/com.webos.service.devmode.md#getdevmode) | public | documented | Return the current status of developer mode. |
| [`luna://com.webos.service.devmode/getPassphrase`](../services/com.webos.service.devmode.md#getpassphrase) | public | documented | Returns the current passphrase associated with the SSH key, which is used to connect to the device. This method is only callable by the developer mode app. |
| [`luna://com.webos.service.devmode/setDevMode`](../services/com.webos.service.devmode.md#setdevmode) | public | documented | Enable or disable developer mode. The device will reboot if the mode is changed. |
| [`luna://com.webos.service.gingaccwebservices.test/enableDevmode`](../services/com.webos.service.gingaccwebservices.test.md#enabledevmode) | public | inferred | Enables the devmode. |
| [`luna://com.webos.service.gingaccwebservices/enableDevmode`](../services/com.webos.service.gingaccwebservices.md#enabledevmode) | public | inferred | Enables the devmode. |
| [`luna://com.webos.service.sdkagent/agent`](../services/com.webos.service.sdkagent.md#agent) | unknown | documented | Config data for telegraf agent. |
| [`luna://com.webos.service.sdkagent/collector/getConfig`](../services/com.webos.service.sdkagent.md#collector_getconfig) | public | documented | Gets configurations of the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/getData`](../services/com.webos.service.sdkagent.md#collector_getdata) | public | documented | Gets data from the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/getStatus`](../services/com.webos.service.sdkagent.md#collector_getstatus) | public | documented | Gets status of the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/restart`](../services/com.webos.service.sdkagent.md#collector_restart) | public | documented | Restarts the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/setConfig`](../services/com.webos.service.sdkagent.md#collector_setconfig) | public | documented | Sets configurations of the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/start`](../services/com.webos.service.sdkagent.md#collector_start) | public | documented | Starts the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/startOnBoot`](../services/com.webos.service.sdkagent.md#collector_startonboot) | public | documented | Automatically starts the Telegraf service on device boot-up and starts monitoring. |
| [`luna://com.webos.service.sdkagent/collector/stop`](../services/com.webos.service.sdkagent.md#collector_stop) | public | documented | Stops the Telegraf service. |
| [`luna://com.webos.service.sdkagent/outputs.influxdb`](../services/com.webos.service.sdkagent.md#outputs.influxdb) | unknown | documented | Config data for influxdb on host. |
| [`luna://com.webos.service.sdkagent/webOS.processMonitoring`](../services/com.webos.service.sdkagent.md#webos.processmonitoring) | unknown | documented | Config data for processMonitoring. Lists the background/foreground applications and their process IDs that are running on webOS platform. For more details: http |
| [`luna://com.webos.service.sdkagent/webOS.webProcessSize`](../services/com.webos.service.sdkagent.md#webos.webprocesssize) | unknown | documented | Config data for webProcessSize. Return the list of apps which the process is running and their size. For information, see com.webos.service.webappmanager/getweb |
| [`luna://com.webos.service.sdx/debug`](../services/com.webos.service.sdx.md#debug) | private | documented | sdx debug control. Name only. |
| [`luna://com.webos.service.sdx/testEulaUpdate`](../services/com.webos.service.sdx.md#testeulaupdate) | private | documented | Test hook for EULA update. Name only. |
