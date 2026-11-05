# `com.webos.service.commercial.scapadapter`

Commercial/pro-TV SCAP adapter (set-top/conditional-access integration) with a large configuration surface: OSD language and lock, picture mode, proxy and server settings, USB lock, screen capture and logo. _(inferred from the service's methods)_

164 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`captureScreen`](#capturescreen) | public |  | security | inferred | Captures the screen. |
| [`changeLogoImage`](#changelogoimage) | public |  | security | inferred | Changes the logo image. |
| [`clearCache`](#clearcache) | public |  | security | inferred | Clears the cache. |
| [`configuration/getLocaleList`](#configuration_getlocalelist) | public |  | settings | inferred | Returns the locale list (configuration) |
| [`configuration/getOSDLanguage`](#configuration_getosdlanguage) | public |  | settings | inferred | Returns the OSD language (configuration) |
| [`configuration/getOSDLock`](#configuration_getosdlock) | public |  | settings | inferred | Returns the OSD lock (configuration) |
| [`configuration/getPictureMode`](#configuration_getpicturemode) | public |  | settings | inferred | Returns the picture mode (configuration) |
| [`configuration/getPictureProperty`](#configuration_getpictureproperty) | public |  | settings | inferred | Returns the picture property (configuration) |
| [`configuration/getProxyBypassList`](#configuration_getproxybypasslist) | public |  | settings | inferred | Returns the proxy bypass list (configuration) |
| [`configuration/getServerProperty`](#configuration_getserverproperty) | public |  | settings | inferred | Returns the server property (configuration) |
| [`configuration/getUSBLock`](#configuration_getusblock) | public |  | settings | inferred | Returns the USB lock (configuration) |
| [`configuration/getVirtualKeyboardLanguage`](#configuration_getvirtualkeyboardlanguage) | public |  | settings | inferred | Returns the virtual keyboard language (configuration) |
| [`configuration/setOSDLanguage`](#configuration_setosdlanguage) | public |  | settings | inferred | Sets the OSD language (configuration) |
| [`configuration/setOSDLock`](#configuration_setosdlock) | public |  | settings | inferred | Sets the OSD lock (configuration) |
| [`configuration/setPictureMode`](#configuration_setpicturemode) | public |  | settings | inferred | Sets the picture mode (configuration) |
| [`configuration/setPictureProperty`](#configuration_setpictureproperty) | public |  | settings | inferred | Sets the picture property (configuration) |
| [`configuration/setProxyBypassList`](#configuration_setproxybypasslist) | public |  | settings | inferred | Sets the proxy bypass list (configuration) |
| [`configuration/setServerProperty`](#configuration_setserverproperty) | public |  | settings | inferred | Sets the server property (configuration) ⚠️ |
| [`configuration/setTimeZone`](#configuration_settimezone) | public |  | settings | inferred | Sets the time zone (configuration) |
| [`configuration/setUSBLock`](#configuration_setusblock) | public |  | settings | inferred | Sets the USB lock (configuration) |
| [`configuration/setVirtualKeyboardLanguage`](#configuration_setvirtualkeyboardlanguage) | public |  | settings | inferred | Sets the virtual keyboard language (configuration) |
| [`createToast`](#createtoast) | public |  | notifications | inferred | Creates the toast. |
| [`debug`](#debug) | public |  | security | inferred | Handles the debug. |
| [`deviceInfo/addBlockedPortList`](#deviceinfo_addblockedportlist) | public |  | db | inferred | Adds the blocked port list (device info) |
| [`deviceInfo/deleteBlockedPortList`](#deviceinfo_deleteblockedportlist) | public |  | security | inferred | Deletes the blocked port list (device info) ⚠️ |
| [`deviceInfo/getBlockedPortList`](#deviceinfo_getblockedportlist) | public |  | security | inferred | Returns the blocked port list (device info) |
| [`deviceInfo/getEddystoneInfo`](#deviceinfo_geteddystoneinfo) | public |  | security | inferred | Returns the eddystone info (device info) |
| [`deviceInfo/getiBeaconInfo`](#deviceinfo_getibeaconinfo) | public |  | security | inferred | Handles the geti beacon info (device info) |
| [`deviceinfo/getNetworkMacInfo`](#deviceinfo_getnetworkmacinfo) | public |  | security | inferred | Returns the network MAC info (deviceinfo) |
| [`deviceInfo/getPlatformInfo`](#deviceinfo_getplatforminfo) | public |  | security | inferred | Returns the platform info (device info) |
| [`deviceInfo/getProxyInfo`](#deviceinfo_getproxyinfo) | public |  | security | inferred | Returns the proxy info (device info) |
| [`deviceinfo/getSoftApClientInfo`](#deviceinfo_getsoftapclientinfo) | public |  | security | inferred | Returns the soft ap client info (deviceinfo) |
| [`deviceInfo/setEddystoneInfo`](#deviceinfo_seteddystoneinfo) | public |  | security | inferred | Sets the eddystone info (device info) |
| [`deviceInfo/setiBeaconInfo`](#deviceinfo_setibeaconinfo) | public |  | security | inferred | Handles the seti beacon info (device info) |
| [`deviceInfo/setProxyInfo`](#deviceinfo_setproxyinfo) | public |  | security | inferred | Sets the proxy info (device info) |
| [`downloadFirmware`](#downloadfirmware) | public |  | security | inferred | Downloads the firmware. ⚠️ |
| [`eventManager/getConfig`](#eventmanager_getconfig) | public |  | settings | inferred | Returns the config (event manager) |
| [`eventManager/getValue`](#eventmanager_getvalue) | public |  | security | inferred | Returns the value (event manager) |
| [`eventManager/setConfig`](#eventmanager_setconfig) | public |  | settings | inferred | Sets the config (event manager) |
| [`eventManager/stopWatcher`](#eventmanager_stopwatcher) | public |  | security | inferred | Stops the watcher (event manager) |
| [`fs/copyFile`](#fs_copyfile) | public |  | security | inferred | Copies the file (fs) |
| [`fs/decryptFile`](#fs_decryptfile) | public |  | security | inferred | Decrypts the file (fs) |
| [`fs/exists`](#fs_exists) | public |  | security | inferred | Handles the exists (fs) |
| [`fs/fsyncFile`](#fs_fsyncfile) | public |  | security | inferred | Handles the fsync file (fs) |
| [`fs/getMD5Hash`](#fs_getmd5hash) | public |  | security | inferred | Returns the MD 5 hash (fs) |
| [`fs/listFiles`](#fs_listfiles) | public |  | security | inferred | Lists the files (fs) |
| [`fs/mkdir`](#fs_mkdir) | public |  | security | inferred | Handles the mkdir (fs) |
| [`fs/moveFile`](#fs_movefile) | public |  | security | inferred | Moves the file (fs) |
| [`fs/readFile`](#fs_readfile) | public |  | security | inferred | Reads the file (fs) |
| [`fs/removeAll`](#fs_removeall) | public |  | security | inferred | Removes the all (fs) ⚠️ |
| [`fs/removeFile`](#fs_removefile) | public |  | security | inferred | Removes the file (fs) ⚠️ |
| [`fs/statFile`](#fs_statfile) | public |  | security | inferred | Handles the stat file (fs) |
| [`fs/storageInfo`](#fs_storageinfo) | public |  | storage | inferred | Handles the storage info (fs) |
| [`fs/unzip`](#fs_unzip) | public |  | security | inferred | Handles the unzip (fs) |
| [`fs/writeFile`](#fs_writefile) | public |  | security | inferred | Writes the file (fs) |
| [`getExternalInputList`](#getexternalinputlist) | public |  | security | inferred | Returns the external input list. |
| [`getFailoverPrioirty`](#getfailoverprioirty) | public |  | security | inferred | Returns the failover prioirty. |
| [`getFirmwareUpgradeStatus`](#getfirmwareupgradestatus) | public |  | security | inferred | Returns the firmware upgrade status. |
| [`getHolidaySchedule`](#getholidayschedule) | public |  | security | inferred | Returns the holiday schedule. |
| [`getOnOffTimeSchedule`](#getonofftimeschedule) | public |  | input | inferred | Returns the on off time schedule. |
| [`getPowerSaveMode`](#getpowersavemode) | public |  | power | inferred | Returns the power save mode. |
| [`getSignageInformation`](#getsignageinformation) | public |  | security | inferred | Returns the signage information. |
| [`getSystemUsageInfo`](#getsystemusageinfo) | public |  | security | inferred | Returns the system usage info. |
| [`getVideoSize`](#getvideosize) | public |  | security | inferred | Returns the video size. |
| [`info`](#info) | public |  | security | inferred | Handles the info. |
| [`inputsource/getInputLabelForVideoTag`](#inputsource_getinputlabelforvideotag) | public |  | security | inferred | Returns the input label for video tag (inputsource) |
| [`inputSource/getInputSourceStatus`](#inputsource_getinputsourcestatus) | public |  | security | inferred | Returns the input source status (input source) |
| [`iot/getBindingIdList`](#iot_getbindingidlist) | public |  | security | inferred | Returns the binding ID list (iot) |
| [`iot/getBridgeStatus`](#iot_getbridgestatus) | public |  | security | inferred | Returns the bridge status (iot) |
| [`iot/getFrameworkStatus`](#iot_getframeworkstatus) | public |  | security | inferred | Returns the framework status (iot) |
| [`iot/getThingList`](#iot_getthinglist) | public |  | security | inferred | Returns the thing list (iot) |
| [`iot/getThingListPrivate`](#iot_getthinglistprivate) | public |  | security | inferred | Returns the thing list private (iot) |
| [`iot/getVersions`](#iot_getversions) | public |  | security | inferred | Returns the versions (iot) |
| [`iot/requestFactoryReset`](#iot_requestfactoryreset) | public |  | security | inferred | Requests the factory reset (iot) ⚠️ |
| [`iot/requestRegisterThing`](#iot_requestregisterthing) | public |  | security | inferred | Requests the register thing (iot) |
| [`iot/requestRejectThing`](#iot_requestrejectthing) | public |  | security | inferred | Requests the reject thing (iot) |
| [`iot/requestSetBridgeStatus`](#iot_requestsetbridgestatus) | public |  | security | inferred | Requests the set bridge status (iot) |
| [`iot/requestSetComponent`](#iot_requestsetcomponent) | public |  | security | inferred | Requests the set component (iot) |
| [`iot/requestSynchronizeThing`](#iot_requestsynchronizething) | public |  | security | inferred | Requests the synchronize thing (iot) |
| [`iot/requestUnregisterThing`](#iot_requestunregisterthing) | public |  | security | inferred | Requests the unregister thing (iot) |
| [`iot/setThingNickname`](#iot_setthingnickname) | public |  | security | inferred | Sets the thing nickname (iot) |
| [`iot/subscribeIoTEvent`](#iot_subscribeiotevent) | public |  | security | inferred | Subscribes to the io t event (iot) |
| [`launchApplication`](#launchapplication) | public |  | apps | inferred | Launches the application. |
| [`network/connectWifi`](#network_connectwifi) | public |  | network | inferred | Connects the wifi (network) |
| [`network/getBeaconInfo`](#network_getbeaconinfo) | public |  | security | inferred | Returns the beacon info (network) |
| [`network/getNetworkInfo`](#network_getnetworkinfo) | public |  | security | inferred | Returns the network info (network) |
| [`network/getSoftApInfo`](#network_getsoftapinfo) | public |  | security | inferred | Returns the soft ap info (network) |
| [`network/getWifiList`](#network_getwifilist) | public |  | network | inferred | Returns the wifi list (network) |
| [`network/notifyUpdatingBeaconInfo`](#network_notifyupdatingbeaconinfo) | public |  | security | inferred | Notifies of the updating beacon info (network) |
| [`network/setBeaconInfo`](#network_setbeaconinfo) | public |  | security | inferred | Sets the beacon info (network) |
| [`network/setNetworkInfo`](#network_setnetworkinfo) | public |  | security | inferred | Sets the network info (network) |
| [`network/setSoftApInfo`](#network_setsoftapinfo) | public |  | security | inferred | Sets the soft ap info (network) |
| [`network/startWps`](#network_startwps) | public |  | security | inferred | Starts the wps (network) |
| [`network/stopWps`](#network_stopwps) | public |  | security | inferred | Stops the wps (network) |
| [`ping_local_server`](#ping_local_server) | public |  | security | inferred | Pings the local server. |
| [`power/enableWakeOnLan`](#power_enablewakeonlan) | public |  | power | inferred | Enables the wake on lan (power) |
| [`power/executePowerCommand`](#power_executepowercommand) | public |  | power | inferred | Runs the power command (power) |
| [`power/getDPMWakeup`](#power_getdpmwakeup) | public |  | power | inferred | Returns the DPM wakeup (power) |
| [`power/getPMMode`](#power_getpmmode) | public |  | power | inferred | Returns the PM mode (power) |
| [`power/getPowerOnDelay`](#power_getpowerondelay) | public |  | power | inferred | Returns the power on delay (power) |
| [`power/getPowerStatus`](#power_getpowerstatus) | public |  | power | inferred | Returns the power status (power) |
| [`power/setDisplayMode`](#power_setdisplaymode) | public |  | power | inferred | Sets the display mode (power) |
| [`power/setDPMWakeup`](#power_setdpmwakeup) | public |  | power | inferred | Sets the DPM wakeup (power) |
| [`power/setPMMode`](#power_setpmmode) | public |  | power | inferred | Sets the PM mode (power) |
| [`power/setPowerOnDelay`](#power_setpowerondelay) | public |  | power | inferred | Sets the power on delay (power) |
| [`quit`](#quit) | public |  | security | inferred | Quits the commercial scapadapter. |
| [`removeApplication`](#removeapplication) | public |  | security | inferred | Removes the application. ⚠️ |
| [`restart_application`](#restart_application) | public |  | security | inferred | Restarts the application. |
| [`security/existServerCertificate`](#security_existservercertificate) | public |  | security | inferred | Handles the exist server certificate (security) |
| [`security/getServerCertificateList`](#security_getservercertificatelist) | public |  | security | inferred | Returns the server certificate list (security) |
| [`security/registerServerCertificate`](#security_registerservercertificate) | public |  | security | inferred | Registers the server certificate (security) |
| [`security/registerServerCertificateList`](#security_registerservercertificatelist) | public |  | security | inferred | Registers the server certificate list (security) |
| [`security/unregisterAllServerCertificateList`](#security_unregisterallservercertificatelist) | public |  | security | inferred | Unregisters the all server certificate list (security) |
| [`security/unregisterServerCertificate`](#security_unregisterservercertificate) | public |  | security | inferred | Unregisters the server certificate (security) |
| [`security/unregisterServerCertificateList`](#security_unregisterservercertificatelist) | public |  | security | inferred | Unregisters the server certificate list (security) |
| [`setDigitalAudioInputList`](#setdigitalaudioinputlist) | public |  | audio | inferred | Sets the digital audio input list. |
| [`setHolidaySchedule`](#setholidayschedule) | public |  | security | inferred | Sets the holiday schedule. |
| [`setManualFailoverPrioirty`](#setmanualfailoverprioirty) | public |  | security | inferred | Sets the manual failover prioirty. |
| [`setOnOffTimeSchedule`](#setonofftimeschedule) | public |  | input | inferred | Sets the on off time schedule. |
| [`setOsdPortraitMode`](#setosdportraitmode) | public |  | security | inferred | Sets the OSD portrait mode. |
| [`setPowerSaveMode`](#setpowersavemode) | public |  | power | inferred | Sets the power save mode. |
| [`setProperty`](#setproperty) | public |  | security | inferred | Sets the property. |
| [`settings/get`](#settings_get) | public |  | settings | inferred | Returns the commercial scapadapter (settings) |
| [`settings/getSystemTime`](#settings_getsystemtime) | public |  | settings | inferred | Returns the system time (settings) |
| [`settings/getTimeZone`](#settings_gettimezone) | public |  | settings | inferred | Returns the time zone (settings) |
| [`settings/getTimeZoneList`](#settings_gettimezonelist) | public |  | settings | inferred | Returns the time zone list (settings) |
| [`settings/set`](#settings_set) | public |  | settings | inferred | Sets the commercial scapadapter (settings) |
| [`settings/setSystemTime`](#settings_setsystemtime) | public |  | settings | inferred | Sets the system time (settings) |
| [`settings/setTimeZone`](#settings_settimezone) | public |  | settings | inferred | Sets the time zone (settings) |
| [`setVideoSize`](#setvideosize) | public |  | security | inferred | Sets the video size. |
| [`sound/getSoundMode`](#sound_getsoundmode) | public |  | security | inferred | Returns the sound mode (sound) |
| [`sound/getSoundOut`](#sound_getsoundout) | public |  | security | inferred | Returns the sound out (sound) |
| [`sound/getSoundStatus`](#sound_getsoundstatus) | public |  | security | inferred | Returns the sound status (sound) |
| [`sound/setExternalSpeaker`](#sound_setexternalspeaker) | public |  | security | inferred | Sets the external speaker (sound) |
| [`sound/setMuted`](#sound_setmuted) | public |  | security | inferred | Sets the muted (sound) |
| [`sound/setSoundMode`](#sound_setsoundmode) | public |  | security | inferred | Sets the sound mode (sound) |
| [`sound/setSoundOut`](#sound_setsoundout) | public |  | security | inferred | Sets the sound out (sound) |
| [`sound/setVolumeLevel`](#sound_setvolumelevel) | public |  | security | inferred | Sets the volume level (sound) |
| [`start_local_server`](#start_local_server) | public |  | security | inferred | Starts the local server. |
| [`start_service`](#start_service) | public |  | security | inferred | Starts the service. |
| [`stop_local_server`](#stop_local_server) | public |  | security | inferred | Stops the local server. |
| [`systemMonitor/doNotify`](#systemmonitor_donotify) | public |  | security | inferred | Handles the do notify (system monitor) |
| [`systemMonitor/getFanEvent`](#systemmonitor_getfanevent) | public |  | security | inferred | Returns the fan event (system monitor) |
| [`systemMonitor/getLampEvent`](#systemmonitor_getlampevent) | public |  | security | inferred | Returns the lamp event (system monitor) |
| [`systemMonitor/getScreenEvent`](#systemmonitor_getscreenevent) | public |  | security | inferred | Returns the screen event (system monitor) |
| [`systemMonitor/getSignalEvent`](#systemmonitor_getsignalevent) | public |  | security | inferred | Returns the signal event (system monitor) |
| [`systemMonitor/getTemperature`](#systemmonitor_gettemperature) | public |  | security | inferred | Returns the temperature (system monitor) |
| [`systemMonitor/startMonitor`](#systemmonitor_startmonitor) | public |  | security | inferred | Starts the monitor (system monitor) |
| [`systemMonitor/startMonitorRS232C`](#systemmonitor_startmonitorrs232c) | public |  | security | inferred | Starts the monitor RS 232 c (system monitor) |
| [`systemMonitor/stopMonitor`](#systemmonitor_stopmonitor) | public |  | security | inferred | Stops the monitor (system monitor) |
| [`systemMonitor/stopMonitorRS232C`](#systemmonitor_stopmonitorrs232c) | public |  | security | inferred | Stops the monitor RS 232 c (system monitor) |
| [`time/cancelOnOffTimer`](#time_cancelonofftimer) | public |  | input | inferred | Cancels the on off timer (time) |
| [`time/clearAllOnOffTimers`](#time_clearallonofftimers) | public |  | input | inferred | Clears the all on off timers (time) |
| [`time/getAllOnOffTimers`](#time_getallonofftimers) | public |  | input | inferred | Returns the all on off timers (time) |
| [`time/reserveOnOffTimer`](#time_reserveonofftimer) | public |  | input | inferred | Handles the reserve on off timer (time) |
| [`unsetHolidaySchedule`](#unsetholidayschedule) | public |  | security | inferred | Handles the unset holiday schedule. |
| [`unsetOnOffTimeSchedule`](#unsetonofftimeschedule) | public |  | input | inferred | Handles the unset on off time schedule. |
| [`upgradeApplication`](#upgradeapplication) | public |  | security | inferred | Upgrades the application. |
| [`upgradeFirmware`](#upgradefirmware) | public |  | security | inferred | Upgrades the firmware. ⚠️ |
| [`version`](#version) | public |  | security | inferred | Handles the version. |
| [`video/getContentRotation`](#video_getcontentrotation) | public |  | security | inferred | Returns the content rotation (video) |
| [`video/getMediaID`](#video_getmediaid) | public |  | media | inferred | Returns the media ID (video) |
| [`video/getVideoStatus`](#video_getvideostatus) | public |  | security | inferred | Returns the video status (video) |
| [`video/setContentRotation`](#video_setcontentrotation) | public |  | security | inferred | Sets the content rotation (video) |

<a id="capturescreen"></a>
## `captureScreen`

`luna://com.webos.service.commercial.scapadapter/captureScreen`

Captures the screen.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/captureScreen '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changelogoimage"></a>
## `changeLogoImage`

`luna://com.webos.service.commercial.scapadapter/changeLogoImage`

Changes the logo image.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/changeLogoImage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="clearcache"></a>
## `clearCache`

`luna://com.webos.service.commercial.scapadapter/clearCache`

Clears the cache.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/clearCache '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getlocalelist"></a>
## `configuration/getLocaleList`

`luna://com.webos.service.commercial.scapadapter/configuration/getLocaleList`

Returns the locale list (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getLocaleList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getosdlanguage"></a>
## `configuration/getOSDLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/getOSDLanguage`

Returns the OSD language (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getOSDLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getosdlock"></a>
## `configuration/getOSDLock`

`luna://com.webos.service.commercial.scapadapter/configuration/getOSDLock`

Returns the OSD lock (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getOSDLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getpicturemode"></a>
## `configuration/getPictureMode`

`luna://com.webos.service.commercial.scapadapter/configuration/getPictureMode`

Returns the picture mode (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getPictureMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getpictureproperty"></a>
## `configuration/getPictureProperty`

`luna://com.webos.service.commercial.scapadapter/configuration/getPictureProperty`

Returns the picture property (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getPictureProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getproxybypasslist"></a>
## `configuration/getProxyBypassList`

`luna://com.webos.service.commercial.scapadapter/configuration/getProxyBypassList`

Returns the proxy bypass list (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getProxyBypassList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getserverproperty"></a>
## `configuration/getServerProperty`

`luna://com.webos.service.commercial.scapadapter/configuration/getServerProperty`

Returns the server property (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getServerProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getusblock"></a>
## `configuration/getUSBLock`

`luna://com.webos.service.commercial.scapadapter/configuration/getUSBLock`

Returns the USB lock (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getUSBLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getvirtualkeyboardlanguage"></a>
## `configuration/getVirtualKeyboardLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/getVirtualKeyboardLanguage`

Returns the virtual keyboard language (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getVirtualKeyboardLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setosdlanguage"></a>
## `configuration/setOSDLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/setOSDLanguage`

Sets the OSD language (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setOSDLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setosdlock"></a>
## `configuration/setOSDLock`

`luna://com.webos.service.commercial.scapadapter/configuration/setOSDLock`

Sets the OSD lock (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setOSDLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setpicturemode"></a>
## `configuration/setPictureMode`

`luna://com.webos.service.commercial.scapadapter/configuration/setPictureMode`

Sets the picture mode (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setPictureMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setpictureproperty"></a>
## `configuration/setPictureProperty`

`luna://com.webos.service.commercial.scapadapter/configuration/setPictureProperty`

Sets the picture property (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setPictureProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setproxybypasslist"></a>
## `configuration/setProxyBypassList`

`luna://com.webos.service.commercial.scapadapter/configuration/setProxyBypassList`

Sets the proxy bypass list (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setProxyBypassList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setserverproperty"></a>
## `configuration/setServerProperty` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/configuration/setServerProperty`

Sets the server property (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setServerProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_settimezone"></a>
## `configuration/setTimeZone`

`luna://com.webos.service.commercial.scapadapter/configuration/setTimeZone`

Sets the time zone (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setTimeZone '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setusblock"></a>
## `configuration/setUSBLock`

`luna://com.webos.service.commercial.scapadapter/configuration/setUSBLock`

Sets the USB lock (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setUSBLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setvirtualkeyboardlanguage"></a>
## `configuration/setVirtualKeyboardLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/setVirtualKeyboardLanguage`

Sets the virtual keyboard language (configuration)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setVirtualKeyboardLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createtoast"></a>
## `createToast`

`luna://com.webos.service.commercial.scapadapter/createToast`

Creates the toast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/createToast '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.commercial.scapadapter/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/debug '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_addblockedportlist"></a>
## `deviceInfo/addBlockedPortList`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/addBlockedPortList`

Adds the blocked port list (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/addBlockedPortList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_deleteblockedportlist"></a>
## `deviceInfo/deleteBlockedPortList` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/deviceInfo/deleteBlockedPortList`

Deletes the blocked port list (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/deleteBlockedPortList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getblockedportlist"></a>
## `deviceInfo/getBlockedPortList`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getBlockedPortList`

Returns the blocked port list (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getBlockedPortList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_geteddystoneinfo"></a>
## `deviceInfo/getEddystoneInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getEddystoneInfo`

Returns the eddystone info (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getEddystoneInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getibeaconinfo"></a>
## `deviceInfo/getiBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getiBeaconInfo`

Handles the geti beacon info (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getiBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getnetworkmacinfo"></a>
## `deviceinfo/getNetworkMacInfo`

`luna://com.webos.service.commercial.scapadapter/deviceinfo/getNetworkMacInfo`

Returns the network MAC info (deviceinfo)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceinfo/getNetworkMacInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getplatforminfo"></a>
## `deviceInfo/getPlatformInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getPlatformInfo`

Returns the platform info (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getPlatformInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getproxyinfo"></a>
## `deviceInfo/getProxyInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getProxyInfo`

Returns the proxy info (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getProxyInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getsoftapclientinfo"></a>
## `deviceinfo/getSoftApClientInfo`

`luna://com.webos.service.commercial.scapadapter/deviceinfo/getSoftApClientInfo`

Returns the soft ap client info (deviceinfo)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceinfo/getSoftApClientInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_seteddystoneinfo"></a>
## `deviceInfo/setEddystoneInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/setEddystoneInfo`

Sets the eddystone info (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/setEddystoneInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_setibeaconinfo"></a>
## `deviceInfo/setiBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/setiBeaconInfo`

Handles the seti beacon info (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/setiBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_setproxyinfo"></a>
## `deviceInfo/setProxyInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/setProxyInfo`

Sets the proxy info (device info)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/setProxyInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="downloadfirmware"></a>
## `downloadFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/downloadFirmware`

Downloads the firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/downloadFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_getconfig"></a>
## `eventManager/getConfig`

`luna://com.webos.service.commercial.scapadapter/eventManager/getConfig`

Returns the config (event manager)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/getConfig '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_getvalue"></a>
## `eventManager/getValue`

`luna://com.webos.service.commercial.scapadapter/eventManager/getValue`

Returns the value (event manager)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/getValue '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_setconfig"></a>
## `eventManager/setConfig`

`luna://com.webos.service.commercial.scapadapter/eventManager/setConfig`

Sets the config (event manager)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/setConfig '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_stopwatcher"></a>
## `eventManager/stopWatcher`

`luna://com.webos.service.commercial.scapadapter/eventManager/stopWatcher`

Stops the watcher (event manager)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/stopWatcher '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_copyfile"></a>
## `fs/copyFile`

`luna://com.webos.service.commercial.scapadapter/fs/copyFile`

Copies the file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/copyFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_decryptfile"></a>
## `fs/decryptFile`

`luna://com.webos.service.commercial.scapadapter/fs/decryptFile`

Decrypts the file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/decryptFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_exists"></a>
## `fs/exists`

`luna://com.webos.service.commercial.scapadapter/fs/exists`

Handles the exists (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/exists '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_fsyncfile"></a>
## `fs/fsyncFile`

`luna://com.webos.service.commercial.scapadapter/fs/fsyncFile`

Handles the fsync file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/fsyncFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_getmd5hash"></a>
## `fs/getMD5Hash`

`luna://com.webos.service.commercial.scapadapter/fs/getMD5Hash`

Returns the MD 5 hash (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/getMD5Hash '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_listfiles"></a>
## `fs/listFiles`

`luna://com.webos.service.commercial.scapadapter/fs/listFiles`

Lists the files (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/listFiles '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_mkdir"></a>
## `fs/mkdir`

`luna://com.webos.service.commercial.scapadapter/fs/mkdir`

Handles the mkdir (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/mkdir '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_movefile"></a>
## `fs/moveFile`

`luna://com.webos.service.commercial.scapadapter/fs/moveFile`

Moves the file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/moveFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_readfile"></a>
## `fs/readFile`

`luna://com.webos.service.commercial.scapadapter/fs/readFile`

Reads the file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/readFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_removeall"></a>
## `fs/removeAll` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/fs/removeAll`

Removes the all (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/removeAll '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_removefile"></a>
## `fs/removeFile` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/fs/removeFile`

Removes the file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/removeFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_statfile"></a>
## `fs/statFile`

`luna://com.webos.service.commercial.scapadapter/fs/statFile`

Handles the stat file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/statFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_storageinfo"></a>
## `fs/storageInfo`

`luna://com.webos.service.commercial.scapadapter/fs/storageInfo`

Handles the storage info (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/storageInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_unzip"></a>
## `fs/unzip`

`luna://com.webos.service.commercial.scapadapter/fs/unzip`

Handles the unzip (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/unzip '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_writefile"></a>
## `fs/writeFile`

`luna://com.webos.service.commercial.scapadapter/fs/writeFile`

Writes the file (fs)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/writeFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getexternalinputlist"></a>
## `getExternalInputList`

`luna://com.webos.service.commercial.scapadapter/getExternalInputList`

Returns the external input list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getExternalInputList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getfailoverprioirty"></a>
## `getFailoverPrioirty`

`luna://com.webos.service.commercial.scapadapter/getFailoverPrioirty`

Returns the failover prioirty.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getFailoverPrioirty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getfirmwareupgradestatus"></a>
## `getFirmwareUpgradeStatus`

`luna://com.webos.service.commercial.scapadapter/getFirmwareUpgradeStatus`

Returns the firmware upgrade status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getFirmwareUpgradeStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getholidayschedule"></a>
## `getHolidaySchedule`

`luna://com.webos.service.commercial.scapadapter/getHolidaySchedule`

Returns the holiday schedule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getHolidaySchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getonofftimeschedule"></a>
## `getOnOffTimeSchedule`

`luna://com.webos.service.commercial.scapadapter/getOnOffTimeSchedule`

Returns the on off time schedule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getOnOffTimeSchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpowersavemode"></a>
## `getPowerSaveMode`

`luna://com.webos.service.commercial.scapadapter/getPowerSaveMode`

Returns the power save mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getPowerSaveMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignageinformation"></a>
## `getSignageInformation`

`luna://com.webos.service.commercial.scapadapter/getSignageInformation`

Returns the signage information.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getSignageInformation '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsystemusageinfo"></a>
## `getSystemUsageInfo`

`luna://com.webos.service.commercial.scapadapter/getSystemUsageInfo`

Returns the system usage info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getSystemUsageInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideosize"></a>
## `getVideoSize`

`luna://com.webos.service.commercial.scapadapter/getVideoSize`

Returns the video size.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getVideoSize '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.commercial.scapadapter/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/info '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="inputsource_getinputlabelforvideotag"></a>
## `inputsource/getInputLabelForVideoTag`

`luna://com.webos.service.commercial.scapadapter/inputsource/getInputLabelForVideoTag`

Returns the input label for video tag (inputsource)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/inputsource/getInputLabelForVideoTag '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="inputsource_getinputsourcestatus"></a>
## `inputSource/getInputSourceStatus`

`luna://com.webos.service.commercial.scapadapter/inputSource/getInputSourceStatus`

Returns the input source status (input source)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/inputSource/getInputSourceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getbindingidlist"></a>
## `iot/getBindingIdList`

`luna://com.webos.service.commercial.scapadapter/iot/getBindingIdList`

Returns the binding ID list (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getBindingIdList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getbridgestatus"></a>
## `iot/getBridgeStatus`

`luna://com.webos.service.commercial.scapadapter/iot/getBridgeStatus`

Returns the bridge status (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getBridgeStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getframeworkstatus"></a>
## `iot/getFrameworkStatus`

`luna://com.webos.service.commercial.scapadapter/iot/getFrameworkStatus`

Returns the framework status (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getFrameworkStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getthinglist"></a>
## `iot/getThingList`

`luna://com.webos.service.commercial.scapadapter/iot/getThingList`

Returns the thing list (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getThingList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getthinglistprivate"></a>
## `iot/getThingListPrivate`

`luna://com.webos.service.commercial.scapadapter/iot/getThingListPrivate`

Returns the thing list private (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getThingListPrivate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getversions"></a>
## `iot/getVersions`

`luna://com.webos.service.commercial.scapadapter/iot/getVersions`

Returns the versions (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getVersions '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestfactoryreset"></a>
## `iot/requestFactoryReset` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/iot/requestFactoryReset`

Requests the factory reset (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestFactoryReset '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestregisterthing"></a>
## `iot/requestRegisterThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestRegisterThing`

Requests the register thing (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestRegisterThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestrejectthing"></a>
## `iot/requestRejectThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestRejectThing`

Requests the reject thing (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestRejectThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestsetbridgestatus"></a>
## `iot/requestSetBridgeStatus`

`luna://com.webos.service.commercial.scapadapter/iot/requestSetBridgeStatus`

Requests the set bridge status (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestSetBridgeStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestsetcomponent"></a>
## `iot/requestSetComponent`

`luna://com.webos.service.commercial.scapadapter/iot/requestSetComponent`

Requests the set component (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestSetComponent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestsynchronizething"></a>
## `iot/requestSynchronizeThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestSynchronizeThing`

Requests the synchronize thing (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestSynchronizeThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestunregisterthing"></a>
## `iot/requestUnregisterThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestUnregisterThing`

Requests the unregister thing (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestUnregisterThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_setthingnickname"></a>
## `iot/setThingNickname`

`luna://com.webos.service.commercial.scapadapter/iot/setThingNickname`

Sets the thing nickname (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/setThingNickname '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_subscribeiotevent"></a>
## `iot/subscribeIoTEvent`

`luna://com.webos.service.commercial.scapadapter/iot/subscribeIoTEvent`

Subscribes to the io t event (iot)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/subscribeIoTEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchapplication"></a>
## `launchApplication`

`luna://com.webos.service.commercial.scapadapter/launchApplication`

Launches the application.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/launchApplication '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_connectwifi"></a>
## `network/connectWifi`

`luna://com.webos.service.commercial.scapadapter/network/connectWifi`

Connects the wifi (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/connectWifi '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getbeaconinfo"></a>
## `network/getBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/network/getBeaconInfo`

Returns the beacon info (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getnetworkinfo"></a>
## `network/getNetworkInfo`

`luna://com.webos.service.commercial.scapadapter/network/getNetworkInfo`

Returns the network info (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getNetworkInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getsoftapinfo"></a>
## `network/getSoftApInfo`

`luna://com.webos.service.commercial.scapadapter/network/getSoftApInfo`

Returns the soft ap info (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getSoftApInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getwifilist"></a>
## `network/getWifiList`

`luna://com.webos.service.commercial.scapadapter/network/getWifiList`

Returns the wifi list (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getWifiList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_notifyupdatingbeaconinfo"></a>
## `network/notifyUpdatingBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/network/notifyUpdatingBeaconInfo`

Notifies of the updating beacon info (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/notifyUpdatingBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_setbeaconinfo"></a>
## `network/setBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/network/setBeaconInfo`

Sets the beacon info (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/setBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_setnetworkinfo"></a>
## `network/setNetworkInfo`

`luna://com.webos.service.commercial.scapadapter/network/setNetworkInfo`

Sets the network info (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/setNetworkInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_setsoftapinfo"></a>
## `network/setSoftApInfo`

`luna://com.webos.service.commercial.scapadapter/network/setSoftApInfo`

Sets the soft ap info (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/setSoftApInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_startwps"></a>
## `network/startWps`

`luna://com.webos.service.commercial.scapadapter/network/startWps`

Starts the wps (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/startWps '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_stopwps"></a>
## `network/stopWps`

`luna://com.webos.service.commercial.scapadapter/network/stopWps`

Stops the wps (network)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/stopWps '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ping_local_server"></a>
## `ping_local_server`

`luna://com.webos.service.commercial.scapadapter/ping_local_server`

Pings the local server.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/ping_local_server '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_enablewakeonlan"></a>
## `power/enableWakeOnLan`

`luna://com.webos.service.commercial.scapadapter/power/enableWakeOnLan`

Enables the wake on lan (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/enableWakeOnLan '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_executepowercommand"></a>
## `power/executePowerCommand`

`luna://com.webos.service.commercial.scapadapter/power/executePowerCommand`

Runs the power command (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/executePowerCommand '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getdpmwakeup"></a>
## `power/getDPMWakeup`

`luna://com.webos.service.commercial.scapadapter/power/getDPMWakeup`

Returns the DPM wakeup (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getDPMWakeup '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getpmmode"></a>
## `power/getPMMode`

`luna://com.webos.service.commercial.scapadapter/power/getPMMode`

Returns the PM mode (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getPMMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getpowerondelay"></a>
## `power/getPowerOnDelay`

`luna://com.webos.service.commercial.scapadapter/power/getPowerOnDelay`

Returns the power on delay (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getPowerOnDelay '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getpowerstatus"></a>
## `power/getPowerStatus`

`luna://com.webos.service.commercial.scapadapter/power/getPowerStatus`

Returns the power status (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getPowerStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setdisplaymode"></a>
## `power/setDisplayMode`

`luna://com.webos.service.commercial.scapadapter/power/setDisplayMode`

Sets the display mode (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setDisplayMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setdpmwakeup"></a>
## `power/setDPMWakeup`

`luna://com.webos.service.commercial.scapadapter/power/setDPMWakeup`

Sets the DPM wakeup (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setDPMWakeup '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setpmmode"></a>
## `power/setPMMode`

`luna://com.webos.service.commercial.scapadapter/power/setPMMode`

Sets the PM mode (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setPMMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setpowerondelay"></a>
## `power/setPowerOnDelay`

`luna://com.webos.service.commercial.scapadapter/power/setPowerOnDelay`

Sets the power on delay (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setPowerOnDelay '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.commercial.scapadapter/quit`

Quits the commercial scapadapter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/quit '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removeapplication"></a>
## `removeApplication` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/removeApplication`

Removes the application.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/removeApplication '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="restart_application"></a>
## `restart_application`

`luna://com.webos.service.commercial.scapadapter/restart_application`

Restarts the application.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/restart_application '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_existservercertificate"></a>
## `security/existServerCertificate`

`luna://com.webos.service.commercial.scapadapter/security/existServerCertificate`

Handles the exist server certificate (security)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/existServerCertificate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_getservercertificatelist"></a>
## `security/getServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/getServerCertificateList`

Returns the server certificate list (security)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/getServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_registerservercertificate"></a>
## `security/registerServerCertificate`

`luna://com.webos.service.commercial.scapadapter/security/registerServerCertificate`

Registers the server certificate (security)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/registerServerCertificate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_registerservercertificatelist"></a>
## `security/registerServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/registerServerCertificateList`

Registers the server certificate list (security)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/registerServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_unregisterallservercertificatelist"></a>
## `security/unregisterAllServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/unregisterAllServerCertificateList`

Unregisters the all server certificate list (security)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/unregisterAllServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_unregisterservercertificate"></a>
## `security/unregisterServerCertificate`

`luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificate`

Unregisters the server certificate (security)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_unregisterservercertificatelist"></a>
## `security/unregisterServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificateList`

Unregisters the server certificate list (security)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdigitalaudioinputlist"></a>
## `setDigitalAudioInputList`

`luna://com.webos.service.commercial.scapadapter/setDigitalAudioInputList`

Sets the digital audio input list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setDigitalAudioInputList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setholidayschedule"></a>
## `setHolidaySchedule`

`luna://com.webos.service.commercial.scapadapter/setHolidaySchedule`

Sets the holiday schedule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setHolidaySchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmanualfailoverprioirty"></a>
## `setManualFailoverPrioirty`

`luna://com.webos.service.commercial.scapadapter/setManualFailoverPrioirty`

Sets the manual failover prioirty.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setManualFailoverPrioirty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setonofftimeschedule"></a>
## `setOnOffTimeSchedule`

`luna://com.webos.service.commercial.scapadapter/setOnOffTimeSchedule`

Sets the on off time schedule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setOnOffTimeSchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setosdportraitmode"></a>
## `setOsdPortraitMode`

`luna://com.webos.service.commercial.scapadapter/setOsdPortraitMode`

Sets the OSD portrait mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setOsdPortraitMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpowersavemode"></a>
## `setPowerSaveMode`

`luna://com.webos.service.commercial.scapadapter/setPowerSaveMode`

Sets the power save mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setPowerSaveMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setproperty"></a>
## `setProperty`

`luna://com.webos.service.commercial.scapadapter/setProperty`

Sets the property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_get"></a>
## `settings/get`

`luna://com.webos.service.commercial.scapadapter/settings/get`

Returns the commercial scapadapter (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/get '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemtime"></a>
## `settings/getSystemTime`

`luna://com.webos.service.commercial.scapadapter/settings/getSystemTime`

Returns the system time (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/getSystemTime '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_gettimezone"></a>
## `settings/getTimeZone`

`luna://com.webos.service.commercial.scapadapter/settings/getTimeZone`

Returns the time zone (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/getTimeZone '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_gettimezonelist"></a>
## `settings/getTimeZoneList`

`luna://com.webos.service.commercial.scapadapter/settings/getTimeZoneList`

Returns the time zone list (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/getTimeZoneList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_set"></a>
## `settings/set`

`luna://com.webos.service.commercial.scapadapter/settings/set`

Sets the commercial scapadapter (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/set '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_setsystemtime"></a>
## `settings/setSystemTime`

`luna://com.webos.service.commercial.scapadapter/settings/setSystemTime`

Sets the system time (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/setSystemTime '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_settimezone"></a>
## `settings/setTimeZone`

`luna://com.webos.service.commercial.scapadapter/settings/setTimeZone`

Sets the time zone (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/setTimeZone '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvideosize"></a>
## `setVideoSize`

`luna://com.webos.service.commercial.scapadapter/setVideoSize`

Sets the video size.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setVideoSize '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_getsoundmode"></a>
## `sound/getSoundMode`

`luna://com.webos.service.commercial.scapadapter/sound/getSoundMode`

Returns the sound mode (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/getSoundMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_getsoundout"></a>
## `sound/getSoundOut`

`luna://com.webos.service.commercial.scapadapter/sound/getSoundOut`

Returns the sound out (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/getSoundOut '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_getsoundstatus"></a>
## `sound/getSoundStatus`

`luna://com.webos.service.commercial.scapadapter/sound/getSoundStatus`

Returns the sound status (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/getSoundStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setexternalspeaker"></a>
## `sound/setExternalSpeaker`

`luna://com.webos.service.commercial.scapadapter/sound/setExternalSpeaker`

Sets the external speaker (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setExternalSpeaker '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setmuted"></a>
## `sound/setMuted`

`luna://com.webos.service.commercial.scapadapter/sound/setMuted`

Sets the muted (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setMuted '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setsoundmode"></a>
## `sound/setSoundMode`

`luna://com.webos.service.commercial.scapadapter/sound/setSoundMode`

Sets the sound mode (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setSoundMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setsoundout"></a>
## `sound/setSoundOut`

`luna://com.webos.service.commercial.scapadapter/sound/setSoundOut`

Sets the sound out (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setSoundOut '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setvolumelevel"></a>
## `sound/setVolumeLevel`

`luna://com.webos.service.commercial.scapadapter/sound/setVolumeLevel`

Sets the volume level (sound)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setVolumeLevel '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start_local_server"></a>
## `start_local_server`

`luna://com.webos.service.commercial.scapadapter/start_local_server`

Starts the local server.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/start_local_server '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start_service"></a>
## `start_service`

`luna://com.webos.service.commercial.scapadapter/start_service`

Starts the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/start_service '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop_local_server"></a>
## `stop_local_server`

`luna://com.webos.service.commercial.scapadapter/stop_local_server`

Stops the local server.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/stop_local_server '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_donotify"></a>
## `systemMonitor/doNotify`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/doNotify`

Handles the do notify (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/doNotify '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getfanevent"></a>
## `systemMonitor/getFanEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getFanEvent`

Returns the fan event (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getFanEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getlampevent"></a>
## `systemMonitor/getLampEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getLampEvent`

Returns the lamp event (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getLampEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getscreenevent"></a>
## `systemMonitor/getScreenEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getScreenEvent`

Returns the screen event (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getScreenEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getsignalevent"></a>
## `systemMonitor/getSignalEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getSignalEvent`

Returns the signal event (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getSignalEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_gettemperature"></a>
## `systemMonitor/getTemperature`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getTemperature`

Returns the temperature (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getTemperature '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_startmonitor"></a>
## `systemMonitor/startMonitor`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitor`

Starts the monitor (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitor '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_startmonitorrs232c"></a>
## `systemMonitor/startMonitorRS232C`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitorRS232C`

Starts the monitor RS 232 c (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitorRS232C '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_stopmonitor"></a>
## `systemMonitor/stopMonitor`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitor`

Stops the monitor (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitor '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_stopmonitorrs232c"></a>
## `systemMonitor/stopMonitorRS232C`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitorRS232C`

Stops the monitor RS 232 c (system monitor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitorRS232C '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_cancelonofftimer"></a>
## `time/cancelOnOffTimer`

`luna://com.webos.service.commercial.scapadapter/time/cancelOnOffTimer`

Cancels the on off timer (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/cancelOnOffTimer '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_clearallonofftimers"></a>
## `time/clearAllOnOffTimers`

`luna://com.webos.service.commercial.scapadapter/time/clearAllOnOffTimers`

Clears the all on off timers (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/clearAllOnOffTimers '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_getallonofftimers"></a>
## `time/getAllOnOffTimers`

`luna://com.webos.service.commercial.scapadapter/time/getAllOnOffTimers`

Returns the all on off timers (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/getAllOnOffTimers '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_reserveonofftimer"></a>
## `time/reserveOnOffTimer`

`luna://com.webos.service.commercial.scapadapter/time/reserveOnOffTimer`

Handles the reserve on off timer (time)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/reserveOnOffTimer '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unsetholidayschedule"></a>
## `unsetHolidaySchedule`

`luna://com.webos.service.commercial.scapadapter/unsetHolidaySchedule`

Handles the unset holiday schedule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/unsetHolidaySchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unsetonofftimeschedule"></a>
## `unsetOnOffTimeSchedule`

`luna://com.webos.service.commercial.scapadapter/unsetOnOffTimeSchedule`

Handles the unset on off time schedule.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/unsetOnOffTimeSchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="upgradeapplication"></a>
## `upgradeApplication`

`luna://com.webos.service.commercial.scapadapter/upgradeApplication`

Upgrades the application.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/upgradeApplication '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="upgradefirmware"></a>
## `upgradeFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/upgradeFirmware`

Upgrades the firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/upgradeFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="version"></a>
## `version`

`luna://com.webos.service.commercial.scapadapter/version`

Handles the version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/version '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_getcontentrotation"></a>
## `video/getContentRotation`

`luna://com.webos.service.commercial.scapadapter/video/getContentRotation`

Returns the content rotation (video)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/getContentRotation '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_getmediaid"></a>
## `video/getMediaID`

`luna://com.webos.service.commercial.scapadapter/video/getMediaID`

Returns the media ID (video)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/getMediaID '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_getvideostatus"></a>
## `video/getVideoStatus`

`luna://com.webos.service.commercial.scapadapter/video/getVideoStatus`

Returns the video status (video)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/getVideoStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_setcontentrotation"></a>
## `video/setContentRotation`

`luna://com.webos.service.commercial.scapadapter/video/setContentRotation`

Sets the content rotation (video)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/setContentRotation '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
