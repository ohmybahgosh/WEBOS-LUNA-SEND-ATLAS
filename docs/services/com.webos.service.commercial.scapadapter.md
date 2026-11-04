# `com.webos.service.commercial.scapadapter`

164 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`captureScreen`](#capturescreen) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`changeLogoImage`](#changelogoimage) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`clearCache`](#clearcache) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getLocaleList`](#configuration_getlocalelist) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getOSDLanguage`](#configuration_getosdlanguage) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getOSDLock`](#configuration_getosdlock) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getPictureMode`](#configuration_getpicturemode) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getPictureProperty`](#configuration_getpictureproperty) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getProxyBypassList`](#configuration_getproxybypasslist) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getServerProperty`](#configuration_getserverproperty) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getUSBLock`](#configuration_getusblock) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/getVirtualKeyboardLanguage`](#configuration_getvirtualkeyboardlanguage) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setOSDLanguage`](#configuration_setosdlanguage) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setOSDLock`](#configuration_setosdlock) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setPictureMode`](#configuration_setpicturemode) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setPictureProperty`](#configuration_setpictureproperty) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setProxyBypassList`](#configuration_setproxybypasslist) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setServerProperty`](#configuration_setserverproperty) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`configuration/setTimeZone`](#configuration_settimezone) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setUSBLock`](#configuration_setusblock) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`configuration/setVirtualKeyboardLanguage`](#configuration_setvirtualkeyboardlanguage) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`createToast`](#createtoast) | public |  | notifications | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`debug`](#debug) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/addBlockedPortList`](#deviceinfo_addblockedportlist) | public |  | db | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/deleteBlockedPortList`](#deviceinfo_deleteblockedportlist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`deviceInfo/getBlockedPortList`](#deviceinfo_getblockedportlist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/getEddystoneInfo`](#deviceinfo_geteddystoneinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/getiBeaconInfo`](#deviceinfo_getibeaconinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceinfo/getNetworkMacInfo`](#deviceinfo_getnetworkmacinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/getPlatformInfo`](#deviceinfo_getplatforminfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/getProxyInfo`](#deviceinfo_getproxyinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceinfo/getSoftApClientInfo`](#deviceinfo_getsoftapclientinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/setEddystoneInfo`](#deviceinfo_seteddystoneinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/setiBeaconInfo`](#deviceinfo_setibeaconinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`deviceInfo/setProxyInfo`](#deviceinfo_setproxyinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`downloadFirmware`](#downloadfirmware) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`eventManager/getConfig`](#eventmanager_getconfig) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`eventManager/getValue`](#eventmanager_getvalue) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`eventManager/setConfig`](#eventmanager_setconfig) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`eventManager/stopWatcher`](#eventmanager_stopwatcher) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/copyFile`](#fs_copyfile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/decryptFile`](#fs_decryptfile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/exists`](#fs_exists) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/fsyncFile`](#fs_fsyncfile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/getMD5Hash`](#fs_getmd5hash) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/listFiles`](#fs_listfiles) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/mkdir`](#fs_mkdir) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/moveFile`](#fs_movefile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/readFile`](#fs_readfile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/removeAll`](#fs_removeall) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`fs/removeFile`](#fs_removefile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`fs/statFile`](#fs_statfile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/storageInfo`](#fs_storageinfo) | public |  | storage | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/unzip`](#fs_unzip) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`fs/writeFile`](#fs_writefile) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getExternalInputList`](#getexternalinputlist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getFailoverPrioirty`](#getfailoverprioirty) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getFirmwareUpgradeStatus`](#getfirmwareupgradestatus) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getHolidaySchedule`](#getholidayschedule) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getOnOffTimeSchedule`](#getonofftimeschedule) | public |  | input | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getPowerSaveMode`](#getpowersavemode) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getSignageInformation`](#getsignageinformation) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getSystemUsageInfo`](#getsystemusageinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`getVideoSize`](#getvideosize) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`info`](#info) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`inputsource/getInputLabelForVideoTag`](#inputsource_getinputlabelforvideotag) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`inputSource/getInputSourceStatus`](#inputsource_getinputsourcestatus) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/getBindingIdList`](#iot_getbindingidlist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/getBridgeStatus`](#iot_getbridgestatus) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/getFrameworkStatus`](#iot_getframeworkstatus) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/getThingList`](#iot_getthinglist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/getThingListPrivate`](#iot_getthinglistprivate) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/getVersions`](#iot_getversions) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/requestFactoryReset`](#iot_requestfactoryreset) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`iot/requestRegisterThing`](#iot_requestregisterthing) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/requestRejectThing`](#iot_requestrejectthing) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/requestSetBridgeStatus`](#iot_requestsetbridgestatus) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/requestSetComponent`](#iot_requestsetcomponent) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/requestSynchronizeThing`](#iot_requestsynchronizething) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/requestUnregisterThing`](#iot_requestunregisterthing) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/setThingNickname`](#iot_setthingnickname) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`iot/subscribeIoTEvent`](#iot_subscribeiotevent) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`launchApplication`](#launchapplication) | public |  | apps | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/connectWifi`](#network_connectwifi) | public |  | network | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/getBeaconInfo`](#network_getbeaconinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/getNetworkInfo`](#network_getnetworkinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/getSoftApInfo`](#network_getsoftapinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/getWifiList`](#network_getwifilist) | public |  | network | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/notifyUpdatingBeaconInfo`](#network_notifyupdatingbeaconinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/setBeaconInfo`](#network_setbeaconinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/setNetworkInfo`](#network_setnetworkinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/setSoftApInfo`](#network_setsoftapinfo) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/startWps`](#network_startwps) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`network/stopWps`](#network_stopwps) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`ping_local_server`](#ping_local_server) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/enableWakeOnLan`](#power_enablewakeonlan) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/executePowerCommand`](#power_executepowercommand) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/getDPMWakeup`](#power_getdpmwakeup) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/getPMMode`](#power_getpmmode) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/getPowerOnDelay`](#power_getpowerondelay) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/getPowerStatus`](#power_getpowerstatus) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/setDisplayMode`](#power_setdisplaymode) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/setDPMWakeup`](#power_setdpmwakeup) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/setPMMode`](#power_setpmmode) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`power/setPowerOnDelay`](#power_setpowerondelay) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`quit`](#quit) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`removeApplication`](#removeapplication) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`restart_application`](#restart_application) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`security/existServerCertificate`](#security_existservercertificate) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`security/getServerCertificateList`](#security_getservercertificatelist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`security/registerServerCertificate`](#security_registerservercertificate) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`security/registerServerCertificateList`](#security_registerservercertificatelist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`security/unregisterAllServerCertificateList`](#security_unregisterallservercertificatelist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`security/unregisterServerCertificate`](#security_unregisterservercertificate) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`security/unregisterServerCertificateList`](#security_unregisterservercertificatelist) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setDigitalAudioInputList`](#setdigitalaudioinputlist) | public |  | audio | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setHolidaySchedule`](#setholidayschedule) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setManualFailoverPrioirty`](#setmanualfailoverprioirty) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setOnOffTimeSchedule`](#setonofftimeschedule) | public |  | input | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setOsdPortraitMode`](#setosdportraitmode) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setPowerSaveMode`](#setpowersavemode) | public |  | power | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setProperty`](#setproperty) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`settings/get`](#settings_get) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`settings/getSystemTime`](#settings_getsystemtime) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`settings/getTimeZone`](#settings_gettimezone) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`settings/getTimeZoneList`](#settings_gettimezonelist) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`settings/set`](#settings_set) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`settings/setSystemTime`](#settings_setsystemtime) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`settings/setTimeZone`](#settings_settimezone) | public |  | settings | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`setVideoSize`](#setvideosize) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/getSoundMode`](#sound_getsoundmode) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/getSoundOut`](#sound_getsoundout) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/getSoundStatus`](#sound_getsoundstatus) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/setExternalSpeaker`](#sound_setexternalspeaker) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/setMuted`](#sound_setmuted) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/setSoundMode`](#sound_setsoundmode) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/setSoundOut`](#sound_setsoundout) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`sound/setVolumeLevel`](#sound_setvolumelevel) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`start_local_server`](#start_local_server) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`start_service`](#start_service) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`stop_local_server`](#stop_local_server) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/doNotify`](#systemmonitor_donotify) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/getFanEvent`](#systemmonitor_getfanevent) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/getLampEvent`](#systemmonitor_getlampevent) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/getScreenEvent`](#systemmonitor_getscreenevent) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/getSignalEvent`](#systemmonitor_getsignalevent) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/getTemperature`](#systemmonitor_gettemperature) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/startMonitor`](#systemmonitor_startmonitor) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/startMonitorRS232C`](#systemmonitor_startmonitorrs232c) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/stopMonitor`](#systemmonitor_stopmonitor) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`systemMonitor/stopMonitorRS232C`](#systemmonitor_stopmonitorrs232c) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`time/cancelOnOffTimer`](#time_cancelonofftimer) | public |  | input | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`time/clearAllOnOffTimers`](#time_clearallonofftimers) | public |  | input | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`time/getAllOnOffTimers`](#time_getallonofftimers) | public |  | input | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`time/reserveOnOffTimer`](#time_reserveonofftimer) | public |  | input | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`unsetHolidaySchedule`](#unsetholidayschedule) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`unsetOnOffTimeSchedule`](#unsetonofftimeschedule) | public |  | input | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`upgradeApplication`](#upgradeapplication) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`upgradeFirmware`](#upgradefirmware) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). ⚠️ |
| [`version`](#version) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`video/getContentRotation`](#video_getcontentrotation) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`video/getMediaID`](#video_getmediaid) | public |  | media | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`video/getVideoStatus`](#video_getvideostatus) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |
| [`video/setContentRotation`](#video_setcontentrotation) | public |  | security | Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented). |

<a id="capturescreen"></a>
## `captureScreen`

`luna://com.webos.service.commercial.scapadapter/captureScreen`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/captureScreen '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changelogoimage"></a>
## `changeLogoImage`

`luna://com.webos.service.commercial.scapadapter/changeLogoImage`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/changeLogoImage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="clearcache"></a>
## `clearCache`

`luna://com.webos.service.commercial.scapadapter/clearCache`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/clearCache '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getlocalelist"></a>
## `configuration/getLocaleList`

`luna://com.webos.service.commercial.scapadapter/configuration/getLocaleList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getLocaleList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getosdlanguage"></a>
## `configuration/getOSDLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/getOSDLanguage`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getOSDLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getosdlock"></a>
## `configuration/getOSDLock`

`luna://com.webos.service.commercial.scapadapter/configuration/getOSDLock`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getOSDLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getpicturemode"></a>
## `configuration/getPictureMode`

`luna://com.webos.service.commercial.scapadapter/configuration/getPictureMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getPictureMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getpictureproperty"></a>
## `configuration/getPictureProperty`

`luna://com.webos.service.commercial.scapadapter/configuration/getPictureProperty`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getPictureProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getproxybypasslist"></a>
## `configuration/getProxyBypassList`

`luna://com.webos.service.commercial.scapadapter/configuration/getProxyBypassList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getProxyBypassList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getserverproperty"></a>
## `configuration/getServerProperty`

`luna://com.webos.service.commercial.scapadapter/configuration/getServerProperty`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getServerProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getusblock"></a>
## `configuration/getUSBLock`

`luna://com.webos.service.commercial.scapadapter/configuration/getUSBLock`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getUSBLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_getvirtualkeyboardlanguage"></a>
## `configuration/getVirtualKeyboardLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/getVirtualKeyboardLanguage`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/getVirtualKeyboardLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setosdlanguage"></a>
## `configuration/setOSDLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/setOSDLanguage`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setOSDLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setosdlock"></a>
## `configuration/setOSDLock`

`luna://com.webos.service.commercial.scapadapter/configuration/setOSDLock`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setOSDLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setpicturemode"></a>
## `configuration/setPictureMode`

`luna://com.webos.service.commercial.scapadapter/configuration/setPictureMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setPictureMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setpictureproperty"></a>
## `configuration/setPictureProperty`

`luna://com.webos.service.commercial.scapadapter/configuration/setPictureProperty`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setPictureProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setproxybypasslist"></a>
## `configuration/setProxyBypassList`

`luna://com.webos.service.commercial.scapadapter/configuration/setProxyBypassList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setProxyBypassList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setserverproperty"></a>
## `configuration/setServerProperty` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/configuration/setServerProperty`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setServerProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_settimezone"></a>
## `configuration/setTimeZone`

`luna://com.webos.service.commercial.scapadapter/configuration/setTimeZone`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setTimeZone '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setusblock"></a>
## `configuration/setUSBLock`

`luna://com.webos.service.commercial.scapadapter/configuration/setUSBLock`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setUSBLock '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="configuration_setvirtualkeyboardlanguage"></a>
## `configuration/setVirtualKeyboardLanguage`

`luna://com.webos.service.commercial.scapadapter/configuration/setVirtualKeyboardLanguage`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/configuration/setVirtualKeyboardLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createtoast"></a>
## `createToast`

`luna://com.webos.service.commercial.scapadapter/createToast`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/createToast '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.commercial.scapadapter/debug`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/debug '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_addblockedportlist"></a>
## `deviceInfo/addBlockedPortList`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/addBlockedPortList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/addBlockedPortList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_deleteblockedportlist"></a>
## `deviceInfo/deleteBlockedPortList` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/deviceInfo/deleteBlockedPortList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/deleteBlockedPortList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getblockedportlist"></a>
## `deviceInfo/getBlockedPortList`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getBlockedPortList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getBlockedPortList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_geteddystoneinfo"></a>
## `deviceInfo/getEddystoneInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getEddystoneInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getEddystoneInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getibeaconinfo"></a>
## `deviceInfo/getiBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getiBeaconInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getiBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getnetworkmacinfo"></a>
## `deviceinfo/getNetworkMacInfo`

`luna://com.webos.service.commercial.scapadapter/deviceinfo/getNetworkMacInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceinfo/getNetworkMacInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getplatforminfo"></a>
## `deviceInfo/getPlatformInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getPlatformInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getPlatformInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getproxyinfo"></a>
## `deviceInfo/getProxyInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/getProxyInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/getProxyInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_getsoftapclientinfo"></a>
## `deviceinfo/getSoftApClientInfo`

`luna://com.webos.service.commercial.scapadapter/deviceinfo/getSoftApClientInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceinfo/getSoftApClientInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_seteddystoneinfo"></a>
## `deviceInfo/setEddystoneInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/setEddystoneInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/setEddystoneInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_setibeaconinfo"></a>
## `deviceInfo/setiBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/setiBeaconInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/setiBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo_setproxyinfo"></a>
## `deviceInfo/setProxyInfo`

`luna://com.webos.service.commercial.scapadapter/deviceInfo/setProxyInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/deviceInfo/setProxyInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="downloadfirmware"></a>
## `downloadFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/downloadFirmware`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/downloadFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_getconfig"></a>
## `eventManager/getConfig`

`luna://com.webos.service.commercial.scapadapter/eventManager/getConfig`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/getConfig '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_getvalue"></a>
## `eventManager/getValue`

`luna://com.webos.service.commercial.scapadapter/eventManager/getValue`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/getValue '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_setconfig"></a>
## `eventManager/setConfig`

`luna://com.webos.service.commercial.scapadapter/eventManager/setConfig`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/setConfig '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="eventmanager_stopwatcher"></a>
## `eventManager/stopWatcher`

`luna://com.webos.service.commercial.scapadapter/eventManager/stopWatcher`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/eventManager/stopWatcher '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_copyfile"></a>
## `fs/copyFile`

`luna://com.webos.service.commercial.scapadapter/fs/copyFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/copyFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_decryptfile"></a>
## `fs/decryptFile`

`luna://com.webos.service.commercial.scapadapter/fs/decryptFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/decryptFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_exists"></a>
## `fs/exists`

`luna://com.webos.service.commercial.scapadapter/fs/exists`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/exists '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_fsyncfile"></a>
## `fs/fsyncFile`

`luna://com.webos.service.commercial.scapadapter/fs/fsyncFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/fsyncFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_getmd5hash"></a>
## `fs/getMD5Hash`

`luna://com.webos.service.commercial.scapadapter/fs/getMD5Hash`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/getMD5Hash '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_listfiles"></a>
## `fs/listFiles`

`luna://com.webos.service.commercial.scapadapter/fs/listFiles`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/listFiles '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_mkdir"></a>
## `fs/mkdir`

`luna://com.webos.service.commercial.scapadapter/fs/mkdir`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/mkdir '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_movefile"></a>
## `fs/moveFile`

`luna://com.webos.service.commercial.scapadapter/fs/moveFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/moveFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_readfile"></a>
## `fs/readFile`

`luna://com.webos.service.commercial.scapadapter/fs/readFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/readFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_removeall"></a>
## `fs/removeAll` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/fs/removeAll`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/removeAll '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_removefile"></a>
## `fs/removeFile` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/fs/removeFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/removeFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_statfile"></a>
## `fs/statFile`

`luna://com.webos.service.commercial.scapadapter/fs/statFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/statFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_storageinfo"></a>
## `fs/storageInfo`

`luna://com.webos.service.commercial.scapadapter/fs/storageInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/storageInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_unzip"></a>
## `fs/unzip`

`luna://com.webos.service.commercial.scapadapter/fs/unzip`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/unzip '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fs_writefile"></a>
## `fs/writeFile`

`luna://com.webos.service.commercial.scapadapter/fs/writeFile`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/fs/writeFile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getexternalinputlist"></a>
## `getExternalInputList`

`luna://com.webos.service.commercial.scapadapter/getExternalInputList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getExternalInputList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getfailoverprioirty"></a>
## `getFailoverPrioirty`

`luna://com.webos.service.commercial.scapadapter/getFailoverPrioirty`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getFailoverPrioirty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getfirmwareupgradestatus"></a>
## `getFirmwareUpgradeStatus`

`luna://com.webos.service.commercial.scapadapter/getFirmwareUpgradeStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getFirmwareUpgradeStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getholidayschedule"></a>
## `getHolidaySchedule`

`luna://com.webos.service.commercial.scapadapter/getHolidaySchedule`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getHolidaySchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getonofftimeschedule"></a>
## `getOnOffTimeSchedule`

`luna://com.webos.service.commercial.scapadapter/getOnOffTimeSchedule`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getOnOffTimeSchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpowersavemode"></a>
## `getPowerSaveMode`

`luna://com.webos.service.commercial.scapadapter/getPowerSaveMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getPowerSaveMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignageinformation"></a>
## `getSignageInformation`

`luna://com.webos.service.commercial.scapadapter/getSignageInformation`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getSignageInformation '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsystemusageinfo"></a>
## `getSystemUsageInfo`

`luna://com.webos.service.commercial.scapadapter/getSystemUsageInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getSystemUsageInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideosize"></a>
## `getVideoSize`

`luna://com.webos.service.commercial.scapadapter/getVideoSize`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/getVideoSize '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.commercial.scapadapter/info`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/info '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="inputsource_getinputlabelforvideotag"></a>
## `inputsource/getInputLabelForVideoTag`

`luna://com.webos.service.commercial.scapadapter/inputsource/getInputLabelForVideoTag`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/inputsource/getInputLabelForVideoTag '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="inputsource_getinputsourcestatus"></a>
## `inputSource/getInputSourceStatus`

`luna://com.webos.service.commercial.scapadapter/inputSource/getInputSourceStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/inputSource/getInputSourceStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getbindingidlist"></a>
## `iot/getBindingIdList`

`luna://com.webos.service.commercial.scapadapter/iot/getBindingIdList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getBindingIdList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getbridgestatus"></a>
## `iot/getBridgeStatus`

`luna://com.webos.service.commercial.scapadapter/iot/getBridgeStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getBridgeStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getframeworkstatus"></a>
## `iot/getFrameworkStatus`

`luna://com.webos.service.commercial.scapadapter/iot/getFrameworkStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getFrameworkStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getthinglist"></a>
## `iot/getThingList`

`luna://com.webos.service.commercial.scapadapter/iot/getThingList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getThingList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getthinglistprivate"></a>
## `iot/getThingListPrivate`

`luna://com.webos.service.commercial.scapadapter/iot/getThingListPrivate`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getThingListPrivate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_getversions"></a>
## `iot/getVersions`

`luna://com.webos.service.commercial.scapadapter/iot/getVersions`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/getVersions '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestfactoryreset"></a>
## `iot/requestFactoryReset` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/iot/requestFactoryReset`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestFactoryReset '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestregisterthing"></a>
## `iot/requestRegisterThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestRegisterThing`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestRegisterThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestrejectthing"></a>
## `iot/requestRejectThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestRejectThing`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestRejectThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestsetbridgestatus"></a>
## `iot/requestSetBridgeStatus`

`luna://com.webos.service.commercial.scapadapter/iot/requestSetBridgeStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestSetBridgeStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestsetcomponent"></a>
## `iot/requestSetComponent`

`luna://com.webos.service.commercial.scapadapter/iot/requestSetComponent`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestSetComponent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestsynchronizething"></a>
## `iot/requestSynchronizeThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestSynchronizeThing`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestSynchronizeThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_requestunregisterthing"></a>
## `iot/requestUnregisterThing`

`luna://com.webos.service.commercial.scapadapter/iot/requestUnregisterThing`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/requestUnregisterThing '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_setthingnickname"></a>
## `iot/setThingNickname`

`luna://com.webos.service.commercial.scapadapter/iot/setThingNickname`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/setThingNickname '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iot_subscribeiotevent"></a>
## `iot/subscribeIoTEvent`

`luna://com.webos.service.commercial.scapadapter/iot/subscribeIoTEvent`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/iot/subscribeIoTEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchapplication"></a>
## `launchApplication`

`luna://com.webos.service.commercial.scapadapter/launchApplication`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/launchApplication '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_connectwifi"></a>
## `network/connectWifi`

`luna://com.webos.service.commercial.scapadapter/network/connectWifi`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/connectWifi '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getbeaconinfo"></a>
## `network/getBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/network/getBeaconInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getnetworkinfo"></a>
## `network/getNetworkInfo`

`luna://com.webos.service.commercial.scapadapter/network/getNetworkInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getNetworkInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getsoftapinfo"></a>
## `network/getSoftApInfo`

`luna://com.webos.service.commercial.scapadapter/network/getSoftApInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getSoftApInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_getwifilist"></a>
## `network/getWifiList`

`luna://com.webos.service.commercial.scapadapter/network/getWifiList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/getWifiList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_notifyupdatingbeaconinfo"></a>
## `network/notifyUpdatingBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/network/notifyUpdatingBeaconInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/notifyUpdatingBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_setbeaconinfo"></a>
## `network/setBeaconInfo`

`luna://com.webos.service.commercial.scapadapter/network/setBeaconInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/setBeaconInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_setnetworkinfo"></a>
## `network/setNetworkInfo`

`luna://com.webos.service.commercial.scapadapter/network/setNetworkInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/setNetworkInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_setsoftapinfo"></a>
## `network/setSoftApInfo`

`luna://com.webos.service.commercial.scapadapter/network/setSoftApInfo`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/setSoftApInfo '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_startwps"></a>
## `network/startWps`

`luna://com.webos.service.commercial.scapadapter/network/startWps`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/startWps '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_stopwps"></a>
## `network/stopWps`

`luna://com.webos.service.commercial.scapadapter/network/stopWps`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/network/stopWps '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ping_local_server"></a>
## `ping_local_server`

`luna://com.webos.service.commercial.scapadapter/ping_local_server`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/ping_local_server '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_enablewakeonlan"></a>
## `power/enableWakeOnLan`

`luna://com.webos.service.commercial.scapadapter/power/enableWakeOnLan`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/enableWakeOnLan '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_executepowercommand"></a>
## `power/executePowerCommand`

`luna://com.webos.service.commercial.scapadapter/power/executePowerCommand`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/executePowerCommand '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getdpmwakeup"></a>
## `power/getDPMWakeup`

`luna://com.webos.service.commercial.scapadapter/power/getDPMWakeup`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getDPMWakeup '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getpmmode"></a>
## `power/getPMMode`

`luna://com.webos.service.commercial.scapadapter/power/getPMMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getPMMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getpowerondelay"></a>
## `power/getPowerOnDelay`

`luna://com.webos.service.commercial.scapadapter/power/getPowerOnDelay`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getPowerOnDelay '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_getpowerstatus"></a>
## `power/getPowerStatus`

`luna://com.webos.service.commercial.scapadapter/power/getPowerStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/getPowerStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setdisplaymode"></a>
## `power/setDisplayMode`

`luna://com.webos.service.commercial.scapadapter/power/setDisplayMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setDisplayMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setdpmwakeup"></a>
## `power/setDPMWakeup`

`luna://com.webos.service.commercial.scapadapter/power/setDPMWakeup`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setDPMWakeup '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setpmmode"></a>
## `power/setPMMode`

`luna://com.webos.service.commercial.scapadapter/power/setPMMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setPMMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="power_setpowerondelay"></a>
## `power/setPowerOnDelay`

`luna://com.webos.service.commercial.scapadapter/power/setPowerOnDelay`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/power/setPowerOnDelay '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.commercial.scapadapter/quit`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/quit '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removeapplication"></a>
## `removeApplication` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/removeApplication`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/removeApplication '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="restart_application"></a>
## `restart_application`

`luna://com.webos.service.commercial.scapadapter/restart_application`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/restart_application '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_existservercertificate"></a>
## `security/existServerCertificate`

`luna://com.webos.service.commercial.scapadapter/security/existServerCertificate`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/existServerCertificate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_getservercertificatelist"></a>
## `security/getServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/getServerCertificateList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/getServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_registerservercertificate"></a>
## `security/registerServerCertificate`

`luna://com.webos.service.commercial.scapadapter/security/registerServerCertificate`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/registerServerCertificate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_registerservercertificatelist"></a>
## `security/registerServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/registerServerCertificateList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/registerServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_unregisterallservercertificatelist"></a>
## `security/unregisterAllServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/unregisterAllServerCertificateList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/unregisterAllServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_unregisterservercertificate"></a>
## `security/unregisterServerCertificate`

`luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificate`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="security_unregisterservercertificatelist"></a>
## `security/unregisterServerCertificateList`

`luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificateList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/security/unregisterServerCertificateList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdigitalaudioinputlist"></a>
## `setDigitalAudioInputList`

`luna://com.webos.service.commercial.scapadapter/setDigitalAudioInputList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setDigitalAudioInputList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setholidayschedule"></a>
## `setHolidaySchedule`

`luna://com.webos.service.commercial.scapadapter/setHolidaySchedule`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setHolidaySchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmanualfailoverprioirty"></a>
## `setManualFailoverPrioirty`

`luna://com.webos.service.commercial.scapadapter/setManualFailoverPrioirty`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setManualFailoverPrioirty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setonofftimeschedule"></a>
## `setOnOffTimeSchedule`

`luna://com.webos.service.commercial.scapadapter/setOnOffTimeSchedule`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setOnOffTimeSchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setosdportraitmode"></a>
## `setOsdPortraitMode`

`luna://com.webos.service.commercial.scapadapter/setOsdPortraitMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setOsdPortraitMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setpowersavemode"></a>
## `setPowerSaveMode`

`luna://com.webos.service.commercial.scapadapter/setPowerSaveMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setPowerSaveMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setproperty"></a>
## `setProperty`

`luna://com.webos.service.commercial.scapadapter/setProperty`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setProperty '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_get"></a>
## `settings/get`

`luna://com.webos.service.commercial.scapadapter/settings/get`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/get '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemtime"></a>
## `settings/getSystemTime`

`luna://com.webos.service.commercial.scapadapter/settings/getSystemTime`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/getSystemTime '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_gettimezone"></a>
## `settings/getTimeZone`

`luna://com.webos.service.commercial.scapadapter/settings/getTimeZone`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/getTimeZone '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_gettimezonelist"></a>
## `settings/getTimeZoneList`

`luna://com.webos.service.commercial.scapadapter/settings/getTimeZoneList`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/getTimeZoneList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_set"></a>
## `settings/set`

`luna://com.webos.service.commercial.scapadapter/settings/set`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/set '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_setsystemtime"></a>
## `settings/setSystemTime`

`luna://com.webos.service.commercial.scapadapter/settings/setSystemTime`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/setSystemTime '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_settimezone"></a>
## `settings/setTimeZone`

`luna://com.webos.service.commercial.scapadapter/settings/setTimeZone`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/settings/setTimeZone '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvideosize"></a>
## `setVideoSize`

`luna://com.webos.service.commercial.scapadapter/setVideoSize`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/setVideoSize '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_getsoundmode"></a>
## `sound/getSoundMode`

`luna://com.webos.service.commercial.scapadapter/sound/getSoundMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/getSoundMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_getsoundout"></a>
## `sound/getSoundOut`

`luna://com.webos.service.commercial.scapadapter/sound/getSoundOut`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/getSoundOut '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_getsoundstatus"></a>
## `sound/getSoundStatus`

`luna://com.webos.service.commercial.scapadapter/sound/getSoundStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/getSoundStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setexternalspeaker"></a>
## `sound/setExternalSpeaker`

`luna://com.webos.service.commercial.scapadapter/sound/setExternalSpeaker`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setExternalSpeaker '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setmuted"></a>
## `sound/setMuted`

`luna://com.webos.service.commercial.scapadapter/sound/setMuted`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setMuted '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setsoundmode"></a>
## `sound/setSoundMode`

`luna://com.webos.service.commercial.scapadapter/sound/setSoundMode`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setSoundMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setsoundout"></a>
## `sound/setSoundOut`

`luna://com.webos.service.commercial.scapadapter/sound/setSoundOut`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setSoundOut '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sound_setvolumelevel"></a>
## `sound/setVolumeLevel`

`luna://com.webos.service.commercial.scapadapter/sound/setVolumeLevel`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/sound/setVolumeLevel '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start_local_server"></a>
## `start_local_server`

`luna://com.webos.service.commercial.scapadapter/start_local_server`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/start_local_server '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start_service"></a>
## `start_service`

`luna://com.webos.service.commercial.scapadapter/start_service`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/start_service '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stop_local_server"></a>
## `stop_local_server`

`luna://com.webos.service.commercial.scapadapter/stop_local_server`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/stop_local_server '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_donotify"></a>
## `systemMonitor/doNotify`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/doNotify`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/doNotify '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getfanevent"></a>
## `systemMonitor/getFanEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getFanEvent`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getFanEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getlampevent"></a>
## `systemMonitor/getLampEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getLampEvent`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getLampEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getscreenevent"></a>
## `systemMonitor/getScreenEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getScreenEvent`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getScreenEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_getsignalevent"></a>
## `systemMonitor/getSignalEvent`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getSignalEvent`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getSignalEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_gettemperature"></a>
## `systemMonitor/getTemperature`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/getTemperature`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/getTemperature '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_startmonitor"></a>
## `systemMonitor/startMonitor`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitor`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitor '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_startmonitorrs232c"></a>
## `systemMonitor/startMonitorRS232C`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitorRS232C`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/startMonitorRS232C '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_stopmonitor"></a>
## `systemMonitor/stopMonitor`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitor`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitor '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemmonitor_stopmonitorrs232c"></a>
## `systemMonitor/stopMonitorRS232C`

`luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitorRS232C`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/systemMonitor/stopMonitorRS232C '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_cancelonofftimer"></a>
## `time/cancelOnOffTimer`

`luna://com.webos.service.commercial.scapadapter/time/cancelOnOffTimer`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/cancelOnOffTimer '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_clearallonofftimers"></a>
## `time/clearAllOnOffTimers`

`luna://com.webos.service.commercial.scapadapter/time/clearAllOnOffTimers`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/clearAllOnOffTimers '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_getallonofftimers"></a>
## `time/getAllOnOffTimers`

`luna://com.webos.service.commercial.scapadapter/time/getAllOnOffTimers`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/getAllOnOffTimers '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="time_reserveonofftimer"></a>
## `time/reserveOnOffTimer`

`luna://com.webos.service.commercial.scapadapter/time/reserveOnOffTimer`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/time/reserveOnOffTimer '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unsetholidayschedule"></a>
## `unsetHolidaySchedule`

`luna://com.webos.service.commercial.scapadapter/unsetHolidaySchedule`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/unsetHolidaySchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unsetonofftimeschedule"></a>
## `unsetOnOffTimeSchedule`

`luna://com.webos.service.commercial.scapadapter/unsetOnOffTimeSchedule`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/unsetOnOffTimeSchedule '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="upgradeapplication"></a>
## `upgradeApplication`

`luna://com.webos.service.commercial.scapadapter/upgradeApplication`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/upgradeApplication '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="upgradefirmware"></a>
## `upgradeFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.commercial.scapadapter/upgradeFirmware`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/upgradeFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="version"></a>
## `version`

`luna://com.webos.service.commercial.scapadapter/version`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/version '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_getcontentrotation"></a>
## `video/getContentRotation`

`luna://com.webos.service.commercial.scapadapter/video/getContentRotation`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/getContentRotation '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_getmediaid"></a>
## `video/getMediaID`

`luna://com.webos.service.commercial.scapadapter/video/getMediaID`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/getMediaID '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_getvideostatus"></a>
## `video/getVideoStatus`

`luna://com.webos.service.commercial.scapadapter/video/getVideoStatus`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/getVideoStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="video_setcontentrotation"></a>
## `video/setContentRotation`

`luna://com.webos.service.commercial.scapadapter/video/setContentRotation`

Method on com.webos.service.commercial.scapadapter (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.commercial.scapadapter/video/setContentRotation '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Commercial/CAS adapter; name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
