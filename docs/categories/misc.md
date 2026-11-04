# Misc

87 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.palm.messaging/sendMessageFromCompose`](../services/com.palm.messaging.md#sendmessagefromcompose) | root | Sends a text message |
| [`luna://com.palm.notes/getNotes`](../services/com.palm.notes.md#getnotes) | root | Views notes |
| [`luna://com.palm.telephony/dial`](../services/com.palm.telephony.md#dial) | root | Dials a number (really places the call) |
| [`luna://com.palm.telephony/hangupAll`](../services/com.palm.telephony.md#hangupall) | root | Hangs up all calls |
| [`luna://com.palm.telephony/radioDefaultsRestore`](../services/com.palm.telephony.md#radiodefaultsrestore) | root | Restores radio defaults (##RTN# style nuke command) ⚠️ |
| [`luna://com.palm.telephony/resetRadio`](../services/com.palm.telephony.md#resetradio) | root | Resets the radio (part of ##RTN# sequence) ⚠️ |
| [`luna://com.palm.telephony/roamModeSet`](../services/com.palm.telephony.md#roammodeset) | root | Sets roaming mode |
| [`luna://com.palm.vibrate/vibrate`](../services/com.palm.vibrate.md#vibrate) | root | Activates the vibrator |
| [`luna://com.webos.appInstallService/details`](../services/com.webos.appInstallService.md#details) | unknown | Describes the progress on all operations that are managed by com.webos.appInstallService. |
| [`luna://com.webos.appInstallService/dev/install`](../services/com.webos.appInstallService.md#dev_install) | public | Installs an ipk file which exists in local repository of a device. Note: This method is available only in developer mode (devmode). To enable devmode, call 'com |
| [`luna://com.webos.appInstallService/dev/remove`](../services/com.webos.appInstallService.md#dev_remove) | public | Removes apps from a device that are installed using dev/install method. Note: This method is available only in developer mode (devmode). To enable devmode, call |
| [`luna://com.webos.appInstallService/install`](../services/com.webos.appInstallService.md#install) | public | Installs an app on a device. |
| [`luna://com.webos.appInstallService/remove`](../services/com.webos.appInstallService.md#remove) | public | Removes an installed app from a device. |
| [`luna://com.webos.appInstallService/status`](../services/com.webos.appInstallService.md#status) | public | Monitors the status of all installed and removed apps that are operating in the com.webos.appInstallService. |
| [`luna://com.webos.bootManager/generateSignal`](../services/com.webos.bootManager.md#generatesignal) | public | Generates boot step signals. Caller and argument are decided statically. |
| [`luna://com.webos.bootManager/getBootStatus`](../services/com.webos.bootManager.md#getbootstatus) | public | Gets the boot status or subscribe to updates on the boot status. |
| [`luna://com.webos.bootManager/signals`](../services/com.webos.bootManager.md#signals) | unknown | Contains an array of upstart signals. The value of an upstart signal is set to true after bootd generates the signal. Note: The value of all upstart signal in t |
| [`luna://com.webos.pmlogd/enableNewWhitelist`](../services/com.webos.pmlogd.md#enablenewwhitelist) | private | Reloads the pmlogd dev-log whitelist (also reloaded on reboot) |
| [`luna://com.webos.pmlogd/getdevlogstatus`](../services/com.webos.pmlogd.md#getdevlogstatus) | private | Reads whether dev logs are being recorded |
| [`luna://com.webos.service.ai.voice/getResponse`](../services/com.webos.service.ai.voice.md#getresponse) | public | Returns speech recognition results. This method is asynchronous. |
| [`luna://com.webos.service.ai.voice/getState`](../services/com.webos.service.ai.voice.md#getstate) | public | Gets the current state of the service. It can have the following states: idle : Before start. waitActivation : Wait for keyword activation. recording : Uploadin |
| [`luna://com.webos.service.ai.voice/start`](../services/com.webos.service.ai.voice.md#start) | public | Starts the service based on the mode selected. Note: This method is only for allowed clients. |
| [`luna://com.webos.service.ai.voice/stop`](../services/com.webos.service.ai.voice.md#stop) | public | Stops the service. Make sure to call this method before starting another engine. Note: This method is only for allowed clients. |
| [`luna://com.webos.service.alarm/alarmObject`](../services/com.webos.service.alarm.md#alarmobject) | unknown | Object contains information about the alarms. |
| [`luna://com.webos.service.alarm/clear`](../services/com.webos.service.alarm.md#clear) | public | Deletes an existing alarm. Apps or daemons can identify their alarm to be deleted by specifying its key. |
| [`luna://com.webos.service.alarm/set`](../services/com.webos.service.alarm.md#set) | public | Creates a new alarm for an absolute time or a relative time. By using the " wakeup " parameter you can define it as a wake-up or a non-wakeup alarm. |
| [`luna://com.webos.service.bus/addManifestsDir`](../services/com.webos.service.bus.md#addmanifestsdir) | public | Adds a directory containing manifests (security configuration files). Note: Only services present in the "hub.configuration" security group are allowed to call  |
| [`luna://com.webos.service.bus/addOneManifest`](../services/com.webos.service.bus.md#addonemanifest) | public | Adds manifest file data to hub security configuration. Only services present in the "hub.configuration" security group are allowed to call this method. |
| [`luna://com.webos.service.bus/ApiPermissionsObject`](../services/com.webos.service.bus.md#apipermissionsobject) | unknown | Describe the group to which methods of the service belong. The properties of this object serve as patterns for methods (including their categories) and the valu |
| [`luna://com.webos.service.bus/getServiceAPIVersions`](../services/com.webos.service.bus.md#getserviceapiversions) | public | Gets service API version from the ls-hub. API version will be returned as a value of "versions" object. Value may have any type. It depends from the JSON object |
| [`luna://com.webos.service.bus/isCallAllowed`](../services/com.webos.service.bus.md#iscallallowed) | public | Checks that call is allowed from specified requester to specified URI. |
| [`luna://com.webos.service.bus/queryServicePermissions`](../services/com.webos.service.bus.md#queryservicepermissions) | public | Queries a service to: Obtain the set of rules that are relevant to the service. List the API that are required (client permissions) List the API that are provid |
| [`luna://com.webos.service.bus/removeManifestsDir`](../services/com.webos.service.bus.md#removemanifestsdir) | public | Removes manifests directory which were added by the addManifestsDir method. Note: Only services present in the "hub.configuration" security group are allowed to |
| [`luna://com.webos.service.bus/removeOneManifest`](../services/com.webos.service.bus.md#removeonemanifest) | public | Removes manifest file data from hub security configuration. Only services present in the "hub.configuration" security group are allowed to call this method. |
| [`luna://com.webos.service.bus/signal/addmatch`](../services/com.webos.service.bus.md#signal_addmatch) | public | Registers a client to receive signals from webOS services matching the category and method specified in the parameters. If method parameter is not specified the |
| [`luna://com.webos.service.bus/signal/registerServerStatus`](../services/com.webos.service.bus.md#signal_registerserverstatus) | public | Registers a client to receive the signal sent by the bus, when a service is registered/unregistered on the bus. |
| [`luna://com.webos.service.bus/signal/registerServiceCategory`](../services/com.webos.service.bus.md#signal_registerservicecategory) | public | Registers a client to the signal sent by the bus, when a service adds the specified category. This method does not register the specified category but registers |
| [`luna://com.webos.service.faultmanager/getFaultDetectedStatus`](../services/com.webos.service.faultmanager.md#getfaultdetectedstatus) | private | Lists faults detected during the current boot (keyed by pid and faultTime) |
| [`luna://com.webos.service.rosbridge/call`](../services/com.webos.service.rosbridge.md#call) | public | Calls service in ROS 2 world. |
| [`luna://com.webos.service.rosbridge/list`](../services/com.webos.service.rosbridge.md#list) | unknown | Registered in webOS OSE sysbus api.json (ACG group rosbridge.info); name only |
| [`luna://com.webos.service.rosbridge/publish`](../services/com.webos.service.rosbridge.md#publish) | public | Publishes topic message from LS2 (webOS luna bus) to ROS 2. |
| [`luna://com.webos.service.rosbridge/status`](../services/com.webos.service.rosbridge.md#status) | unknown | Registered in webOS OSE sysbus api.json (ACG group rosbridge.info); name only |
| [`luna://com.webos.service.rosbridge/subscribe`](../services/com.webos.service.rosbridge.md#subscribe) | public | Subscribe topic message from ROS 2 world. |
| [`luna://com.webos.service.tv.time/getCurrentTime`](../services/com.webos.service.tv.time.md#getcurrenttime) | ssap | Get current TV time |
| [`luna://com.webos.service.unifiedsearch/category`](../services/com.webos.service.unifiedsearch.md#category) | unknown | Indicates the category information. |
| [`luna://com.webos.service.unifiedsearch/display`](../services/com.webos.service.unifiedsearch.md#display) | unknown | Indicates the display information to show on screen. |
| [`luna://com.webos.service.unifiedsearch/getCategories`](../services/com.webos.service.unifiedsearch.md#getcategories) | public | Gets an ordered list of enabled and disabled categories. |
| [`luna://com.webos.service.unifiedsearch/groupedIntents`](../services/com.webos.service.unifiedsearch.md#groupedintents) | unknown | Indicates the categorized intents |
| [`luna://com.webos.service.unifiedsearch/intent`](../services/com.webos.service.unifiedsearch.md#intent) | unknown | Contains intent that has 'display' attribute on 'extra' field internally. |
| [`luna://com.webos.service.unifiedsearch/item`](../services/com.webos.service.unifiedsearch.md#item) | unknown |  |
| [`luna://com.webos.service.unifiedsearch/search`](../services/com.webos.service.unifiedsearch.md#search) | public | Searches with keyword and return intents of items. Note : Returning intent can be implicit or explicit intent and have display property to show this on screen. |
| [`luna://com.webos.service.unifiedsearch/updateCategory`](../services/com.webos.service.unifiedsearch.md#updatecategory) | public | Allows enabling or disabling of a category and change the order of the category. |
| [`luna://com.webos.service.uwb/closeSession`](../services/com.webos.service.uwb.md#closesession) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/getPairedSessions`](../services/com.webos.service.uwb.md#getpairedsessions) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/getRangingInfo`](../services/com.webos.service.uwb.md#getranginginfo) | public | Retrieves ranging info for a session. Subscribe to this API to get a continuous notification of the ranging data. |
| [`luna://com.webos.service.uwb/getStatus`](../services/com.webos.service.uwb.md#getstatus) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/getUwbServiceState`](../services/com.webos.service.uwb.md#getuwbservicestate) | public | Retrieves the state of the UWB service. If subscribe is set to true, the method sends an update if the values change. |
| [`luna://com.webos.service.uwb/getUwbSpecificInfo`](../services/com.webos.service.uwb.md#getuwbspecificinfo) | public | Provides the capabilities and features of the device (supported UWB protocols and parameters). |
| [`luna://com.webos.service.uwb/openSession`](../services/com.webos.service.uwb.md#opensession) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/rangingDataCommon`](../services/com.webos.service.uwb.md#rangingdatacommon) | unknown | Ranging information for common standard protocol. |
| [`luna://com.webos.service.uwb/rangingDataLgeAirCond`](../services/com.webos.service.uwb.md#rangingdatalgeaircond) | unknown | Ranging information for LGE Air Conditioner product. |
| [`luna://com.webos.service.uwb/rangingInfo`](../services/com.webos.service.uwb.md#ranginginfo) | unknown | Ranging information received from UWB module. |
| [`luna://com.webos.service.uwb/receivedCommonData`](../services/com.webos.service.uwb.md#receivedcommondata) | unknown | Provide a ranging information from the UWB module. |
| [`luna://com.webos.service.uwb/setState`](../services/com.webos.service.uwb.md#setstate) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/startDiscovery`](../services/com.webos.service.uwb.md#startdiscovery) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/startRanging`](../services/com.webos.service.uwb.md#startranging) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/stopDiscovery`](../services/com.webos.service.uwb.md#stopdiscovery) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://com.webos.service.uwb/stopRanging`](../services/com.webos.service.uwb.md#stopranging) | unknown | Registered in webOS OSE sysbus api.json (ACG group uwb.operation); name only |
| [`luna://org.webosbrew.hbchannel.service/autostart`](../services/org.webosbrew.hbchannel.service.md#autostart) | root | Homebrew Channel service: Boot hook |
| [`luna://org.webosbrew.hbchannel.service/checkRoot`](../services/org.webosbrew.hbchannel.service.md#checkroot) | root | Homebrew Channel service: Root status |
| [`luna://org.webosbrew.hbchannel.service/elevateService`](../services/org.webosbrew.hbchannel.service.md#elevateservice) | root | Homebrew Channel service: Elevates a dev-mode service to root ⚠️ |
| [`luna://org.webosbrew.hbchannel.service/exec`](../services/org.webosbrew.hbchannel.service.md#exec) | root | Runs a shell command (root if TV is rooted) ⚠️ |
| [`luna://org.webosbrew.hbchannel.service/getAppInfo`](../services/org.webosbrew.hbchannel.service.md#getappinfo) | root | Homebrew Channel service: getAppInfo via dev endpoints |
| [`luna://org.webosbrew.hbchannel.service/getConfiguration`](../services/org.webosbrew.hbchannel.service.md#getconfiguration) | root | Homebrew Channel service: Reads HBC flags |
| [`luna://org.webosbrew.hbchannel.service/reboot`](../services/org.webosbrew.hbchannel.service.md#reboot) | root | Homebrew Channel service: Reboots |
| [`luna://org.webosbrew.hbchannel.service/setConfiguration`](../services/org.webosbrew.hbchannel.service.md#setconfiguration) | root | Homebrew Channel service: Sets HBC flags |
| [`luna://org.webosbrew.hbchannel.service/spawn`](../services/org.webosbrew.hbchannel.service.md#spawn) | root | Spawns long-running process with streamed output ⚠️ |
| [`luna://org.webosbrew.hbchannel.service/uninstall`](../services/org.webosbrew.hbchannel.service.md#uninstall) | root | Homebrew Channel service: Removes app by id |
| [`luna://org.webosbrew.hbchannel.service/updateStartupScript`](../services/org.webosbrew.hbchannel.service.md#updatestartupscript) | root | Homebrew Channel service: Refreshes /var/lib/webosbrew/startup.sh ⚠️ |
| [`luna://org.webosbrew.piccap.service/start`](../services/org.webosbrew.piccap.service.md#start) | public | Starts PicCap capture |
| [`ssap://api/getServiceList`](../services/ssap_api.md#getservicelist) | ssap | List the SSAP namespaces exposed to this client |
| [`ssap://timer/getSettings`](../services/ssap_timer.md#getsettings) | ssap | Timer settings (read) |
| [`ssap://timer/setSettings`](../services/ssap_timer.md#setsettings) | ssap | Timer settings (write) |
| [`ssap://user/resetUserInfo`](../services/ssap_user.md#resetuserinfo) | ssap | User profile/schedule call resetUserInfo |
| [`ssap://user/setUserData`](../services/ssap_user.md#setuserdata) | ssap | User profile/schedule call setUserData |
| [`ssap://user/setUserInfo`](../services/ssap_user.md#setuserinfo) | ssap | User profile/schedule call setUserInfo |
| [`ssap://user/setUserSchedule`](../services/ssap_user.md#setuserschedule) | ssap | User profile/schedule call setUserSchedule |
