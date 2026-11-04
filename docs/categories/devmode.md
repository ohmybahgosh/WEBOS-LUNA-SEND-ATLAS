# Developer Mode & Testing

39 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.palm.service.devmode/getDevMode`](../services/com.palm.service.devmode.md#getdevmode) | public | Method on com.palm.service.devmode (from on-device permission registry; parameters undocumented). |
| [`luna://com.palm.service.devmode/getPassphrase`](../services/com.palm.service.devmode.md#getpassphrase) | public | Method on com.palm.service.devmode (from on-device permission registry; parameters undocumented). |
| [`luna://com.palm.service.devmode/info`](../services/com.palm.service.devmode.md#info) | public | Method on com.palm.service.devmode (from on-device permission registry; parameters undocumented). |
| [`luna://com.palm.service.devmode/quit`](../services/com.palm.service.devmode.md#quit) | public | Method on com.palm.service.devmode (from on-device permission registry; parameters undocumented). |
| [`luna://com.palm.service.devmode/setDevMode`](../services/com.palm.service.devmode.md#setdevmode) | public | Method on com.palm.service.devmode (from on-device permission registry; parameters undocumented). |
| [`luna://com.palm.service.tellurium/appInfo`](../services/com.palm.service.tellurium.md#appinfo) | unknown | Provide the application ID to subscribe. Ex: "appInfo":{"id":"amazon.html"} |
| [`luna://com.palm.service.tellurium/broadcastCommand`](../services/com.palm.service.tellurium.md#broadcastcommand) | public | Sends message to all TelluriomNub instances |
| [`luna://com.palm.service.tellurium/filter`](../services/com.palm.service.tellurium.md#filter) | unknown | Its an object that describes details to apply the filter (usually used when "command": "getItems") |
| [`luna://com.palm.service.tellurium/getApplicationInformationResult`](../services/com.palm.service.tellurium.md#getapplicationinformationresult) | unknown | Provides QML application information. |
| [`luna://com.palm.service.tellurium/getItemsResult`](../services/com.palm.service.tellurium.md#getitemsresult) | unknown | Provides element information for QML application using object hierarchy. |
| [`luna://com.palm.service.tellurium/getRunningAppsAndStagesResult`](../services/com.palm.service.tellurium.md#getrunningappsandstagesresult) | unknown | Provides running and staging information of QML apps. |
| [`luna://com.palm.service.tellurium/handleRequest`](../services/com.palm.service.tellurium.md#handlerequest) | public | handleRequest allows to process requested method Available methods are: getRunningAppsAndStages: returns applications and their stageId getApplicationInformatio |
| [`luna://com.palm.service.tellurium/notifyEvent`](../services/com.palm.service.tellurium.md#notifyevent) | public | Called by a nub to notify that an event occured |
| [`luna://com.palm.service.tellurium/ping`](../services/com.palm.service.tellurium.md#ping) | public | Allows to perform 'are-you-alive' check. Mirrors sent message |
| [`luna://com.palm.service.tellurium/queue`](../services/com.palm.service.tellurium.md#queue) | unknown | queue(mandatory): array, containing objects, each representing any of testability commands. Example: setItemsProperties: sets properties for QML elements getIte |
| [`luna://com.palm.service.tellurium/replyToCommand`](../services/com.palm.service.tellurium.md#replytocommand) | public | This is called when a subscriber needs to reply to a command i.e., Sends a reply to the TelluriumdService from TelluriumNub(Webapp) or Qttestability(QML app) wh |
| [`luna://com.palm.service.tellurium/resolution`](../services/com.palm.service.tellurium.md#resolution) | unknown | Screen resolution |
| [`luna://com.palm.service.tellurium/stages`](../services/com.palm.service.tellurium.md#stages) | unknown | Provide stage Information of the running application. |
| [`luna://com.palm.service.tellurium/subscribeToCommands`](../services/com.palm.service.tellurium.md#subscribetocommands) | public | Subscribes to Tellurium commands |
| [`luna://com.palm.service.tellurium/subscribeToEvents`](../services/com.palm.service.tellurium.md#subscribetoevents) | public | Subscribes to stages' events (received from stage in notifyEvent) |
| [`luna://com.palm.service.tellurium/version`](../services/com.palm.service.tellurium.md#version) | public | Returns the tellurium version from the submission tag. |
| [`luna://com.palm.service.tellurium/window`](../services/com.palm.service.tellurium.md#window) | unknown | Creates a top level window and accesses the screen information. |
| [`luna://com.webos.service.devmode/getDevMode`](../services/com.webos.service.devmode.md#getdevmode) | public | Return the current status of developer mode. |
| [`luna://com.webos.service.devmode/getPassphrase`](../services/com.webos.service.devmode.md#getpassphrase) | public | Returns the current passphrase associated with the SSH key, which is used to connect to the device. This method is only callable by the developer mode app. |
| [`luna://com.webos.service.devmode/setDevMode`](../services/com.webos.service.devmode.md#setdevmode) | public | Enable or disable developer mode. The device will reboot if the mode is changed. |
| [`luna://com.webos.service.gingaccwebservices/enableDevmode`](../services/com.webos.service.gingaccwebservices.md#enabledevmode) | public | Method on com.webos.service.gingaccwebservices (from on-device permission registry; parameters undocumented). |
| [`luna://com.webos.service.gingaccwebservices.test/enableDevmode`](../services/com.webos.service.gingaccwebservices.test.md#enabledevmode) | public | Method on com.webos.service.gingaccwebservices.test (from on-device permission registry; parameters undocumented). |
| [`luna://com.webos.service.sdkagent/agent`](../services/com.webos.service.sdkagent.md#agent) | unknown | Config data for telegraf agent. |
| [`luna://com.webos.service.sdkagent/collector/getConfig`](../services/com.webos.service.sdkagent.md#collector_getconfig) | public | Gets configurations of the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/getData`](../services/com.webos.service.sdkagent.md#collector_getdata) | public | Gets data from the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/getStatus`](../services/com.webos.service.sdkagent.md#collector_getstatus) | public | Gets status of the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/restart`](../services/com.webos.service.sdkagent.md#collector_restart) | public | Restarts the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/setConfig`](../services/com.webos.service.sdkagent.md#collector_setconfig) | public | Sets configurations of the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/start`](../services/com.webos.service.sdkagent.md#collector_start) | public | Starts the Telegraf service. |
| [`luna://com.webos.service.sdkagent/collector/startOnBoot`](../services/com.webos.service.sdkagent.md#collector_startonboot) | public | Automatically starts the Telegraf service on device boot-up and starts monitoring. |
| [`luna://com.webos.service.sdkagent/collector/stop`](../services/com.webos.service.sdkagent.md#collector_stop) | public | Stops the Telegraf service. |
| [`luna://com.webos.service.sdkagent/outputs.influxdb`](../services/com.webos.service.sdkagent.md#outputs.influxdb) | unknown | Config data for influxdb on host. |
| [`luna://com.webos.service.sdkagent/webOS.processMonitoring`](../services/com.webos.service.sdkagent.md#webos.processmonitoring) | unknown | Config data for processMonitoring. Lists the background/foreground applications and their process IDs that are running on webOS platform. For more details: http |
| [`luna://com.webos.service.sdkagent/webOS.webProcessSize`](../services/com.webos.service.sdkagent.md#webos.webprocesssize) | unknown | Config data for webProcessSize. Return the list of apps which the process is running and their size. For information, see com.webos.service.webappmanager/getweb |
