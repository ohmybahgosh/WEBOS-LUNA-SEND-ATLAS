# ⚠️ Dangerous calls

These can factory reset the TV, wipe app or user data, break software updates, change panel/factory values, remove your Home launcher, or otherwise leave the TV in a state that is hard to recover.  Several are irreversible.  **Don't run them unless you know exactly how to undo them.**  Nobody here is responsible for your TV.

314 entries.

| URI | Why | 
|---|---|
| [`luna://airplay.homekit/reset`](services/airplay.homekit.md#reset) | Resets the airplay homekit. |
| [`luna://airplay.service/reset`](services/airplay.service.md#reset) | Resets the airplay. |
| [`luna://airplay.service/sharedKeyDelete`](services/airplay.service.md#sharedkeydelete) | Handles the shared key delete. |
| [`luna://com.lge.settingsservice/resetSystemSettingDescPriv`](services/com.lge.settingsservice.md#resetsystemsettingdescpriv) | Resets the system setting desc priv. |
| [`luna://com.lge.settingsservice/resetSystemSettings`](services/com.lge.settingsservice.md#resetsystemsettings) | Resets system settings to their factory/default values |
| [`luna://com.lge.settingsservice/resetSystemSettingsPriv`](services/com.lge.settingsservice.md#resetsystemsettingspriv) | Resets the system settings priv. |
| [`luna://com.lge.settingsservice/setSystemSettingFactoryDescPriv`](services/com.lge.settingsservice.md#setsystemsettingfactorydescpriv) | Sets the system setting factory desc priv. |
| [`luna://com.palm.certificatemanager/deletecertificate`](services/com.palm.certificatemanager.md#deletecertificate) | Handles the deletecertificate. |
| [`luna://com.palm.db/load`](services/com.palm.db.md#load) | Restores a database from a dumped JSON file. |
| [`luna://com.palm.db/purge`](services/com.palm.db.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.palm.db/putQuotas`](services/com.palm.db.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.palm.db/removeAppData`](services/com.palm.db.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.palm.downloadmanager/deleteDownloadedFile`](services/com.palm.downloadmanager.md#deletedownloadedfile) | Deletes the downloaded file. |
| [`luna://com.palm.filecache/DeleteType`](services/com.palm.filecache.md#deletetype) | Deletes the type. |
| [`luna://com.palm.keymanager/remove`](services/com.palm.keymanager.md#remove) | Removes the keymanager. |
| [`luna://com.palm.power/shutdown/initiate`](services/com.palm.power.md#shutdown_initiate) | Handles the initiate (shutdown) |
| [`luna://com.palm.power/shutdown/machineOff`](services/com.palm.power.md#shutdown_machineoff) | Handles the machine off (shutdown) |
| [`luna://com.palm.power/shutdown/machineReboot`](services/com.palm.power.md#shutdown_machinereboot) | Handles the machine reboot (shutdown) |
| [`luna://com.palm.power/shutdown/shutdownApplicationsAck`](services/com.palm.power.md#shutdown_shutdownapplicationsack) | Shuts down the applications ack (shutdown) |
| [`luna://com.palm.power/shutdown/shutdownApplicationsRegister`](services/com.palm.power.md#shutdown_shutdownapplicationsregister) | Shuts down the applications register (shutdown) |
| [`luna://com.palm.power/shutdown/shutdownServicesAck`](services/com.palm.power.md#shutdown_shutdownservicesack) | Shuts down the services ack (shutdown) |
| [`luna://com.palm.power/shutdown/shutdownServicesRegister`](services/com.palm.power.md#shutdown_shutdownservicesregister) | Shuts down the services register (shutdown) |
| [`luna://com.palm.power/shutdown/TESTresetShutdownState`](services/com.palm.power.md#shutdown_testresetshutdownstate) | Handles the TES treset shutdown state (shutdown) |
| [`luna://com.palm.power/time/alarmRemove`](services/com.palm.power.md#time_alarmremove) | Handles the alarm remove (time) |
| [`luna://com.palm.preferences/appProperties/removeAppProperty`](services/com.palm.preferences.md#appproperties_removeappproperty) | Removes the app property (app properties) |
| [`luna://com.palm.service.bugreport/removeCredential`](services/com.palm.service.bugreport.md#removecredential) | Removes the credential. |
| [`luna://com.palm.service.bugreport/resetScreenshots`](services/com.palm.service.bugreport.md#resetscreenshots) | Resets the screenshots. |
| [`luna://com.palm.sleep/com/palm/power/forceSuspend`](services/com.palm.sleep.md#com_palm_power_forcesuspend) | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`luna://com.palm.sleep/shutdown/machineOff`](services/com.palm.sleep.md#shutdown_machineoff) | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`luna://com.palm.sleep/shutdown/machineReboot`](services/com.palm.sleep.md#shutdown_machinereboot) | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`luna://com.palm.storage/erase/EraseAll`](services/com.palm.storage.md#erase_eraseall) | Erases all storage (part of ##RTN# sequence) |
| [`luna://com.palm.telephony/radioDefaultsRestore`](services/com.palm.telephony.md#radiodefaultsrestore) | Restores radio defaults (##RTN# style nuke command) |
| [`luna://com.palm.telephony/resetRadio`](services/com.palm.telephony.md#resetradio) | Resets the radio (part of ##RTN# sequence) |
| [`luna://com.palm.tempdb/purge`](services/com.palm.tempdb.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.palm.tempdb/putQuotas`](services/com.palm.tempdb.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.palm.tempdb/removeAppData`](services/com.palm.tempdb.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.webos.accountdb/deleteWorkSpace`](services/com.webos.accountdb.md#deleteworkspace) | Deletes the work space. |
| [`luna://com.webos.accountdb/resetWorkSpaceData`](services/com.webos.accountdb.md#resetworkspacedata) | Resets the work space data. |
| [`luna://com.webos.appInstallService/removeLSConfigFiles`](services/com.webos.appInstallService.md#removelsconfigfiles) | Removes the LS config files. |
| [`luna://com.webos.applicationManager/blockSystemApp`](services/com.webos.applicationManager.md#blocksystemapp) | Blocks a system app (used by webos-homebar to replace LG Home) |
| [`luna://com.webos.applicationManager/launch`](services/com.webos.applicationManager.md#launch) | Launches the app with the given app ID, optionally with params. |
| [`luna://com.webos.epgdb/load`](services/com.webos.epgdb.md#load) | Restores a database from a dumped JSON file. |
| [`luna://com.webos.epgdb/purge`](services/com.webos.epgdb.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.webos.epgdb/putQuotas`](services/com.webos.epgdb.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.webos.epgdb/removeAppData`](services/com.webos.epgdb.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.webos.favchannels/deleteAll`](services/com.webos.favchannels.md#deleteall) | Deletes the all. |
| [`luna://com.webos.media/removeResource`](services/com.webos.media.md#removeresource) | Removes the resource. |
| [`luna://com.webos.media/resetOwnerPipeline`](services/com.webos.media.md#resetownerpipeline) | Resets the owner pipeline. |
| [`luna://com.webos.media/resetSubLevel`](services/com.webos.media.md#resetsublevel) | Resets the sub level. |
| [`luna://com.webos.mediadb/load`](services/com.webos.mediadb.md#load) | Restores a database from a dumped JSON file. |
| [`luna://com.webos.mediadb/purge`](services/com.webos.mediadb.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.webos.mediadb/putQuotas`](services/com.webos.mediadb.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.webos.mediadb/removeAppData`](services/com.webos.mediadb.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.webos.notification/removeRemoteNotification`](services/com.webos.notification.md#removeremotenotification) | Removes the remote notification. |
| [`luna://com.webos.pmlogd/removeNormalLog`](services/com.webos.pmlogd.md#removenormallog) | Removes the normal log. |
| [`luna://com.webos.service.accountmanager/deleteAccount`](services/com.webos.service.accountmanager.md#deleteaccount) | Deletes the account. |
| [`luna://com.webos.service.accountmanager/deleteOOBEData`](services/com.webos.service.accountmanager.md#deleteoobedata) | Deletes the OOBE data. |
| [`luna://com.webos.service.admanager/deleteCookies`](services/com.webos.service.admanager.md#deletecookies) | Deletes the cookies. |
| [`luna://com.webos.service.admanager/resetIFA`](services/com.webos.service.admanager.md#resetifa) | Resets the IFA. |
| [`luna://com.webos.service.alwaysready/timer/reset`](services/com.webos.service.alwaysready.md#timer_reset) | Resets the alwaysready (timer) |
| [`luna://com.webos.service.aos/setResetTime`](services/com.webos.service.aos.md#setresettime) | Sets the reset time. |
| [`luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc`](services/com.webos.service.apiadapter.md#settings_resetsystemsettingdesc) | Resets the system setting desc (settings) |
| [`luna://com.webos.service.apiadapter/settings/resetSystemSettings`](services/com.webos.service.apiadapter.md#settings_resetsystemsettings) | Resets the system settings (settings) |
| [`luna://com.webos.service.apiadapter/user/resetUserData`](services/com.webos.service.apiadapter.md#user_resetuserdata) | Resets the user data (user) |
| [`luna://com.webos.service.apiadapter/user/resetUserInfo`](services/com.webos.service.apiadapter.md#user_resetuserinfo) | Resets the user info (user) |
| [`luna://com.webos.service.apiadapter/user/resetUserSchedule`](services/com.webos.service.apiadapter.md#user_resetuserschedule) | Resets the user schedule (user) |
| [`luna://com.webos.service.apiadapter/webapp/removePinnedWebApp`](services/com.webos.service.apiadapter.md#webapp_removepinnedwebapp) | Removes the pinned web app (webapp) |
| [`luna://com.webos.service.applicationManager/removeAllContents`](services/com.webos.service.applicationManager.md#removeallcontents) | Removes the all contents. |
| [`luna://com.webos.service.applicationManager/removeContent`](services/com.webos.service.applicationManager.md#removecontent) | Removes the content. |
| [`luna://com.webos.service.applicationManager/removeVirtualApp`](services/com.webos.service.applicationManager.md#removevirtualapp) | Removes the virtual app. |
| [`luna://com.webos.service.applicationmanager/setDefaultApp`](services/com.webos.service.applicationmanager.md#setdefaultapp) | Sets the default app for a category such as home (replaces the Home button target) |
| [`luna://com.webos.service.asc/resetWoBLE`](services/com.webos.service.asc.md#resetwoble) | Resets the wo BLE. |
| [`luna://com.webos.service.attachedstoragemanager/delete`](services/com.webos.service.attachedstoragemanager.md#delete) | Deletes the attachedstoragemanager. |
| [`luna://com.webos.service.attachedstoragemanager/format`](services/com.webos.service.attachedstoragemanager.md#format) | Formats the attachedstoragemanager. |
| [`luna://com.webos.service.audio/capture/resetParams`](services/com.webos.service.audio.md#capture_resetparams) | Resets the params (capture) |
| [`luna://com.webos.service.audio/tv/resetSoundSettings`](services/com.webos.service.audio.md#tv_resetsoundsettings) | Resets the sound settings (TV) |
| [`luna://com.webos.service.audiooutput/audio/removePipelineInfo`](services/com.webos.service.audiooutput.md#audio_removepipelineinfo) | Removes the pipeline info (audio) |
| [`luna://com.webos.service.avf/setMyZoomRemovedUri`](services/com.webos.service.avf.md#setmyzoomremoveduri) | Sets the my zoom removed URI. |
| [`luna://com.webos.service.blegatt/server/removeService`](services/com.webos.service.blegatt.md#server_removeservice) | Removes the service (server) |
| [`luna://com.webos.service.bluetooth/gap/resetMagicSearchResult`](services/com.webos.service.bluetooth.md#gap_resetmagicsearchresult) | Resets the magic search result (gap) |
| [`luna://com.webos.service.bluetooth2/adapter/internal/sendHciCommand`](services/com.webos.service.bluetooth2.md#adapter_internal_sendhcicommand) | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`luna://com.webos.service.btaudiosnk/removePairedDevices`](services/com.webos.service.btaudiosnk.md#removepaireddevices) | Removes the paired devices. |
| [`luna://com.webos.service.btaudiosrc/removePairedDevice`](services/com.webos.service.btaudiosrc.md#removepaireddevice) | Removes the paired device. |
| [`luna://com.webos.service.bthidmanager/requestDelete`](services/com.webos.service.bthidmanager.md#requestdelete) | Requests the delete. |
| [`luna://com.webos.service.btleaudio/resetLeAudioSettings`](services/com.webos.service.btleaudio.md#resetleaudiosettings) | Resets the le audio settings. |
| [`luna://com.webos.service.buddyconnector/deleteContentList`](services/com.webos.service.buddyconnector.md#deletecontentlist) | Deletes the content list. |
| [`luna://com.webos.service.buddyconnector/resetEulaStatus`](services/com.webos.service.buddyconnector.md#reseteulastatus) | Resets the eula status. |
| [`luna://com.webos.service.camera/updateFirmware`](services/com.webos.service.camera.md#updatefirmware) | Updates the firmware. |
| [`luna://com.webos.service.camera2/removeMediaFile`](services/com.webos.service.camera2.md#removemediafile) | Removes the media file. |
| [`luna://com.webos.service.commercial.contentmanager/delete`](services/com.webos.service.commercial.contentmanager.md#delete) | Deletes the commercial contentmanager. |
| [`luna://com.webos.service.commercial.scapadapter/configuration/setServerProperty`](services/com.webos.service.commercial.scapadapter.md#configuration_setserverproperty) | Sets the server property (configuration) |
| [`luna://com.webos.service.commercial.scapadapter/deviceInfo/deleteBlockedPortList`](services/com.webos.service.commercial.scapadapter.md#deviceinfo_deleteblockedportlist) | Deletes the blocked port list (device info) |
| [`luna://com.webos.service.commercial.scapadapter/downloadFirmware`](services/com.webos.service.commercial.scapadapter.md#downloadfirmware) | Downloads the firmware. |
| [`luna://com.webos.service.commercial.scapadapter/fs/removeAll`](services/com.webos.service.commercial.scapadapter.md#fs_removeall) | Removes the all (fs) |
| [`luna://com.webos.service.commercial.scapadapter/fs/removeFile`](services/com.webos.service.commercial.scapadapter.md#fs_removefile) | Removes the file (fs) |
| [`luna://com.webos.service.commercial.scapadapter/iot/requestFactoryReset`](services/com.webos.service.commercial.scapadapter.md#iot_requestfactoryreset) | Requests the factory reset (iot) |
| [`luna://com.webos.service.commercial.scapadapter/removeApplication`](services/com.webos.service.commercial.scapadapter.md#removeapplication) | Removes the application. |
| [`luna://com.webos.service.commercial.scapadapter/upgradeFirmware`](services/com.webos.service.commercial.scapadapter.md#upgradefirmware) | Upgrades the firmware. |
| [`luna://com.webos.service.commercialinputdevice/removeKeyItems`](services/com.webos.service.commercialinputdevice.md#removekeyitems) | Removes the key items. |
| [`luna://com.webos.service.config/setConfigs`](services/com.webos.service.config.md#setconfigs) | Overrides current settings of the configs . The overridden values will be kept until rebooting or returning back in any future queries for the config. It is useful for changing configuration in factor |
| [`luna://com.webos.service.credentialsmanager/remove`](services/com.webos.service.credentialsmanager.md#remove) | Removes the credentialsmanager. |
| [`luna://com.webos.service.devicereset/doReset`](services/com.webos.service.devicereset.md#doreset) | Handles the do reset. |
| [`luna://com.webos.service.devicereset/registerResetDone`](services/com.webos.service.devicereset.md#registerresetdone) | Registers the reset done. |
| [`luna://com.webos.service.devicereset/registerResetReady`](services/com.webos.service.devicereset.md#registerresetready) | Registers the reset ready. |
| [`luna://com.webos.service.devicereset/registerResetting`](services/com.webos.service.devicereset.md#registerresetting) | Registers the resetting. |
| [`luna://com.webos.service.devicereset/respondseResetDone`](services/com.webos.service.devicereset.md#respondseresetdone) | Handles the respondse reset done. |
| [`luna://com.webos.service.devicereset/respondseResetReady`](services/com.webos.service.devicereset.md#respondseresetready) | Handles the respondse reset ready. |
| [`luna://com.webos.service.devicereset/respondseResetting`](services/com.webos.service.devicereset.md#respondseresetting) | Handles the respondse resetting. |
| [`luna://com.webos.service.devicereset/responseResetDone`](services/com.webos.service.devicereset.md#responseresetdone) | Handles the response reset done. |
| [`luna://com.webos.service.devicereset/responseResetReady`](services/com.webos.service.devicereset.md#responseresetready) | Handles the response reset ready. |
| [`luna://com.webos.service.devicereset/responseResetting`](services/com.webos.service.devicereset.md#responseresetting) | Handles the response resetting. |
| [`luna://com.webos.service.devicereset/setResetStatus`](services/com.webos.service.devicereset.md#setresetstatus) | Sets the reset status. |
| [`luna://com.webos.service.dmrsvc/prepare3DFormat`](services/com.webos.service.dmrsvc.md#prepare3dformat) | Prepares the 3 d format. |
| [`luna://com.webos.service.dmrsvc/set3DFormat`](services/com.webos.service.dmrsvc.md#set3dformat) | Sets the 3 d format. |
| [`luna://com.webos.service.dmrsvc/setAvailable3DFormats`](services/com.webos.service.dmrsvc.md#setavailable3dformats) | Sets the available 3 d formats. |
| [`luna://com.webos.service.drm/deleteDrmStore`](services/com.webos.service.drm.md#deletedrmstore) | Deletes the DRM store. |
| [`luna://com.webos.service.eim/resetCECHistory`](services/com.webos.service.eim.md#resetcechistory) | Resets the CEC history. |
| [`luna://com.webos.service.eim/resetExternalInputSettings`](services/com.webos.service.eim.md#resetexternalinputsettings) | Resets the external input settings. |
| [`luna://com.webos.service.eulaservice/resetEula`](services/com.webos.service.eulaservice.md#reseteula) | Resets the eula. |
| [`luna://com.webos.service.extinputs.displayport/resetHDMIErrorHistory`](services/com.webos.service.extinputs.displayport.md#resethdmierrorhistory) | Resets the HDMI error history. |
| [`luna://com.webos.service.extinputs.hdmi/resetHDMIErrorHistory`](services/com.webos.service.extinputs.hdmi.md#resethdmierrorhistory) | Resets the HDMI error history. |
| [`luna://com.webos.service.extinputs/resetAudioVideoSettings`](services/com.webos.service.extinputs.md#resetaudiovideosettings) | Resets the audio video settings. |
| [`luna://com.webos.service.factorymanager/requestFactoryCommand`](services/com.webos.service.factorymanager.md#requestfactorycommand) | Requests the factory command. |
| [`luna://com.webos.service.factorymanager/resetVcom`](services/com.webos.service.factorymanager.md#resetvcom) | Resets the vcom. |
| [`luna://com.webos.service.factorymanager/resetWhiteBalance`](services/com.webos.service.factorymanager.md#resetwhitebalance) | Resets the white balance. |
| [`luna://com.webos.service.factorymanager/setFactoryKey`](services/com.webos.service.factorymanager.md#setfactorykey) | Sets the factory key. |
| [`luna://com.webos.service.factorymanager/setFactoryOpt`](services/com.webos.service.factorymanager.md#setfactoryopt) | Sets the factory opt. |
| [`luna://com.webos.service.favorites/channels/remove`](services/com.webos.service.favorites.md#channels_remove) | Removes the favorites (channels) |
| [`luna://com.webos.service.favorites/shows/remove`](services/com.webos.service.favorites.md#shows_remove) | Removes the favorites (shows) |
| [`luna://com.webos.service.favorites/shows/removeAll`](services/com.webos.service.favorites.md#shows_removeall) | Removes the all (shows) |
| [`luna://com.webos.service.ftms/removeBlockedDeviceList`](services/com.webos.service.ftms.md#removeblockeddevicelist) | Removes the blocked device list. |
| [`luna://com.webos.service.gibbips.broadcast/scanDetailInformation`](services/com.webos.service.gibbips.broadcast.md#scandetailinformation) | Scans for detail information. |
| [`luna://com.webos.service.gibbips.program/scanDetailInformation`](services/com.webos.service.gibbips.program.md#scandetailinformation) | Scans for detail information. |
| [`luna://com.webos.service.gibbs.broadcast/scanDetailInformation`](services/com.webos.service.gibbs.broadcast.md#scandetailinformation) | Scans for detail information. |
| [`luna://com.webos.service.gibbs.channel/scan/deleteAtscManualTuning`](services/com.webos.service.gibbs.channel.md#scan_deleteatscmanualtuning) | Deletes the ATSC manual tuning (scan) |
| [`luna://com.webos.service.gibbs.program/scanDetailInformation`](services/com.webos.service.gibbs.program.md#scandetailinformation) | Scans for detail information. |
| [`luna://com.webos.service.homelaunchpoints/removeLaunchPoint`](services/com.webos.service.homelaunchpoints.md#removelaunchpoint) | Removes the launch point. |
| [`luna://com.webos.service.homelaunchpoints/removeQCard`](services/com.webos.service.homelaunchpoints.md#removeqcard) | Removes the q card. |
| [`luna://com.webos.service.ics/blaster/deleteIPConnectionHistory`](services/com.webos.service.ics.md#blaster_deleteipconnectionhistory) | Deletes the IP connection history (blaster) |
| [`luna://com.webos.service.iepg/deleteChannel`](services/com.webos.service.iepg.md#deletechannel) | Deletes the channel. |
| [`luna://com.webos.service.iepg/resetChannelFavoritePriority`](services/com.webos.service.iepg.md#resetchannelfavoritepriority) | Resets the channel favorite priority. |
| [`luna://com.webos.service.iepg/resetChannelShortcutKeyList`](services/com.webos.service.iepg.md#resetchannelshortcutkeylist) | Resets the channel shortcut key list. |
| [`luna://com.webos.service.independanotification/deletePhotoIcon`](services/com.webos.service.independanotification.md#deletephotoicon) | Deletes the photo icon. |
| [`luna://com.webos.service.iotclient/deleteAccountInfo`](services/com.webos.service.iotclient.md#deleteaccountinfo) | Deletes the account info. |
| [`luna://com.webos.service.keymanager2/remove`](services/com.webos.service.keymanager2.md#remove) | Removes the keymanager 2. |
| [`luna://com.webos.service.keymanager2/removeAppKeys`](services/com.webos.service.keymanager2.md#removeappkeys) | Removes the app keys. |
| [`luna://com.webos.service.keymanager3/removeAppKeys`](services/com.webos.service.keymanager3.md#removeappkeys) | Removes the app keys. |
| [`luna://com.webos.service.keymanager3/removeUninstalledAppKeys`](services/com.webos.service.keymanager3.md#removeuninstalledappkeys) | Removes the uninstalled app keys. |
| [`luna://com.webos.service.legacybroadcast.broadcast/scanDetailInformation`](services/com.webos.service.legacybroadcast.broadcast.md#scandetailinformation) | Scans for detail information. |
| [`luna://com.webos.service.legacybroadcast.channel/ci/resetCam`](services/com.webos.service.legacybroadcast.channel.md#ci_resetcam) | Resets the CAM (CI) |
| [`luna://com.webos.service.legacybroadcast.channel/ci/startCiInformationMenu`](services/com.webos.service.legacybroadcast.channel.md#ci_startciinformationmenu) | Starts the CI information menu (CI) |
| [`luna://com.webos.service.legacybroadcast.channel/deleteChannel`](services/com.webos.service.legacybroadcast.channel.md#deletechannel) | Deletes the channel. |
| [`luna://com.webos.service.legacybroadcast.channel/deleteDvbSatelliteChannelForAstra`](services/com.webos.service.legacybroadcast.channel.md#deletedvbsatellitechannelforastra) | Deletes the DVB satellite channel for astra. |
| [`luna://com.webos.service.legacybroadcast.channel/resetChannelShortcutKeyList`](services/com.webos.service.legacybroadcast.channel.md#resetchannelshortcutkeylist) | Resets the channel shortcut key list. |
| [`luna://com.webos.service.legacybroadcast.channel/scan/deleteAnalogManualTuning`](services/com.webos.service.legacybroadcast.channel.md#scan_deleteanalogmanualtuning) | Deletes the analog manual tuning (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/deleteAtscManualTuning`](services/com.webos.service.legacybroadcast.channel.md#scan_deleteatscmanualtuning) | Deletes the ATSC manual tuning (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbCableManualTuning`](services/com.webos.service.legacybroadcast.channel.md#scan_deletedvbcablemanualtuning) | Deletes the DVB cable manual tuning (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbSatelliteConfiguration`](services/com.webos.service.legacybroadcast.channel.md#scan_deletedvbsatelliteconfiguration) | Deletes the DVB satellite configuration (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbSatelliteTransponder`](services/com.webos.service.legacybroadcast.channel.md#scan_deletedvbsatellitetransponder) | Deletes the DVB satellite transponder (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbTerrestrialManualTuning`](services/com.webos.service.legacybroadcast.channel.md#scan_deletedvbterrestrialmanualtuning) | Deletes the DVB terrestrial manual tuning (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableNetworkScanInfo`](services/com.webos.service.legacybroadcast.channel.md#scan_resetdvbcablenetworkscaninfo) | Resets the DVB cable network scan info (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableQuickScanInfo`](services/com.webos.service.legacybroadcast.channel.md#scan_resetdvbcablequickscaninfo) | Resets the DVB cable quick scan info (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableScanInfo`](services/com.webos.service.legacybroadcast.channel.md#scan_resetdvbcablescaninfo) | Resets the DVB cable scan info (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteDiSEqCMotor`](services/com.webos.service.legacybroadcast.channel.md#scan_resetdvbsatellitediseqcmotor) | Resets the DVB satellite di s eq c motor (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteDiSEqCMotorLimit`](services/com.webos.service.legacybroadcast.channel.md#scan_resetdvbsatellitediseqcmotorlimit) | Resets the DVB satellite di s eq c motor limit (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteTkgsHiddenTransponderList`](services/com.webos.service.legacybroadcast.channel.md#scan_resetdvbsatellitetkgshiddentransponderlist) | Resets the DVB satellite tkgs hidden transponder list (scan) |
| [`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteTkgsVersion`](services/com.webos.service.legacybroadcast.channel.md#scan_resetdvbsatellitetkgsversion) | Resets the DVB satellite tkgs version (scan) |
| [`luna://com.webos.service.legacybroadcast.databroadcast/deleteBmlDsmccFilter`](services/com.webos.service.legacybroadcast.databroadcast.md#deletebmldsmccfilter) | Deletes the bml dsmcc filter. |
| [`luna://com.webos.service.legacybroadcast.databroadcast/removeSectionFilter`](services/com.webos.service.legacybroadcast.databroadcast.md#removesectionfilter) | Removes the section filter. |
| [`luna://com.webos.service.legacybroadcast.dvr/private/deleteRecordFile`](services/com.webos.service.legacybroadcast.dvr.md#private_deleterecordfile) | Deletes the record file (private) |
| [`luna://com.webos.service.legacybroadcast.dvr/record/releaseContentsDeleteLock`](services/com.webos.service.legacybroadcast.dvr.md#record_releasecontentsdeletelock) | Releases the contents delete lock (record) |
| [`luna://com.webos.service.legacybroadcast.dvr/record/setContentsDeleteLock`](services/com.webos.service.legacybroadcast.dvr.md#record_setcontentsdeletelock) | Sets the contents delete lock (record) |
| [`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostATVFirmwareVersion`](services/com.webos.service.legacybroadcast.frontend.md#dbggethostatvfirmwareversion) | Debug: Returns the host ATV firmware version. |
| [`luna://com.webos.service.legacybroadcast.frontend/dbgGetHostDTVFirmwareVersion`](services/com.webos.service.legacybroadcast.frontend.md#dbggethostdtvfirmwareversion) | Debug: Returns the host DTV firmware version. |
| [`luna://com.webos.service.legacybroadcast.program/scanDetailInformation`](services/com.webos.service.legacybroadcast.program.md#scandetailinformation) | Scans for detail information. |
| [`luna://com.webos.service.lightingcontroller/updateAmbientLedMicomFirmware`](services/com.webos.service.lightingcontroller.md#updateambientledmicomfirmware) | Updates the ambient LED MICOM firmware. |
| [`luna://com.webos.service.lightingcontroller/updateGamingLedMicomFirmware`](services/com.webos.service.lightingcontroller.md#updategamingledmicomfirmware) | Updates the gaming LED MICOM firmware. |
| [`luna://com.webos.service.lowlevelstorage/shutdown`](services/com.webos.service.lowlevelstorage.md#shutdown) | Shuts down the lowlevelstorage. |
| [`luna://com.webos.service.magicnum/setCountry`](services/com.webos.service.magicnum.md#setcountry) | Sets the country. |
| [`luna://com.webos.service.membership/deleteValue`](services/com.webos.service.membership.md#deletevalue) | Deletes the value. |
| [`luna://com.webos.service.mfi/deleteKey`](services/com.webos.service.mfi.md#deletekey) | Deletes the key. |
| [`luna://com.webos.service.micomservice/resetPowerOnOffHistory`](services/com.webos.service.micomservice.md#resetpoweronoffhistory) | Resets the power on off history. |
| [`luna://com.webos.service.micomservice/resetWifiVbus`](services/com.webos.service.micomservice.md#resetwifivbus) | Resets the wifi vbus. |
| [`luna://com.webos.service.micomservice/setFactoryKeySaveMode`](services/com.webos.service.micomservice.md#setfactorykeysavemode) | Sets the factory key save mode. |
| [`luna://com.webos.service.micomservice/updateBifFirmware`](services/com.webos.service.micomservice.md#updatebiffirmware) | Updates the bif firmware. |
| [`luna://com.webos.service.micomservice/updateDisplayMicomFirmware`](services/com.webos.service.micomservice.md#updatedisplaymicomfirmware) | Updates the display MICOM firmware. |
| [`luna://com.webos.service.micomservice/updateMicroLedMicomFirmware`](services/com.webos.service.micomservice.md#updatemicroledmicomfirmware) | Updates the micro LED MICOM firmware. |
| [`luna://com.webos.service.micomservice/updateZerowattMicomFirmware`](services/com.webos.service.micomservice.md#updatezerowattmicomfirmware) | Updates the zerowatt MICOM firmware. |
| [`luna://com.webos.service.miracast/deletePairedDeviceList`](services/com.webos.service.miracast.md#deletepaireddevicelist) | Deletes the paired device list. |
| [`luna://com.webos.service.mrcu/eraseIrCodes`](services/com.webos.service.mrcu.md#eraseircodes) | Erases the IR codes. |
| [`luna://com.webos.service.mrcu/hid/delete`](services/com.webos.service.mrcu.md#hid_delete) | Deletes the MRCU (hid) |
| [`luna://com.webos.service.mrcu/resetQuaternion`](services/com.webos.service.mrcu.md#resetquaternion) | Resets the quaternion. |
| [`luna://com.webos.service.mrcu/startFirmwareUpdate`](services/com.webos.service.mrcu.md#startfirmwareupdate) | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.msc/resetAccelerometerTestResult`](services/com.webos.service.msc.md#resetaccelerometertestresult) | Resets the accelerometer test result. |
| [`luna://com.webos.service.multiviewcontroller/addPreset`](services/com.webos.service.multiviewcontroller.md#addpreset) | Adds the preset. |
| [`luna://com.webos.service.multiviewcontroller/removeClient`](services/com.webos.service.multiviewcontroller.md#removeclient) | Removes the client. |
| [`luna://com.webos.service.multiviewcontroller/removePreset`](services/com.webos.service.multiviewcontroller.md#removepreset) | Removes the preset. |
| [`luna://com.webos.service.mvpd/vendor/removeMvpd`](services/com.webos.service.mvpd.md#vendor_removemvpd) | Removes the mvpd (vendor) |
| [`luna://com.webos.service.nabs.channel/scan/deleteAtscManualTuning`](services/com.webos.service.nabs.channel.md#scan_deleteatscmanualtuning) | Deletes the ATSC manual tuning (scan) |
| [`luna://com.webos.service.nfc/formattag`](services/com.webos.service.nfc.md#formattag) | Handles the formattag. |
| [`luna://com.webos.service.nomotion/removeNoMotionAndNoOperationTimer`](services/com.webos.service.nomotion.md#removenomotionandnooperationtimer) | Removes the no motion and no operation timer. |
| [`luna://com.webos.service.nomotion/removeNoMotionTimer`](services/com.webos.service.nomotion.md#removenomotiontimer) | Removes the no motion timer. |
| [`luna://com.webos.service.nop/removeNopTimer`](services/com.webos.service.nop.md#removenoptimer) | Removes the nop timer. |
| [`luna://com.webos.service.nudge/deleteHistory`](services/com.webos.service.nudge.md#deletehistory) | Deletes the history. |
| [`luna://com.webos.service.oledepl/setGlobalStressReduction`](services/com.webos.service.oledepl.md#setglobalstressreduction) | Toggles OLED GSR (In-Start service menu option) |
| [`luna://com.webos.service.oledepl/setTemporalPeakControl`](services/com.webos.service.oledepl.md#settemporalpeakcontrol) | Toggles OLED TPC (In-Start service menu option) |
| [`luna://com.webos.service.panelcontroller/resetVcom`](services/com.webos.service.panelcontroller.md#resetvcom) | Resets the vcom. |
| [`luna://com.webos.service.panelcontroller/updateTouchFirmware`](services/com.webos.service.panelcontroller.md#updatetouchfirmware) | Updates the touch firmware. |
| [`luna://com.webos.service.pbsw/deleteChannel`](services/com.webos.service.pbsw.md#deletechannel) | Deletes the channel. |
| [`luna://com.webos.service.pdm/resetVbus`](services/com.webos.service.pdm.md#resetvbus) | Resets the vbus. |
| [`luna://com.webos.service.pkgInstall/remove`](services/com.webos.service.pkgInstall.md#remove) | Removes the pkg install. |
| [`luna://com.webos.service.power/shutdown/initiate`](services/com.webos.service.power.md#shutdown_initiate) | Handles the initiate (shutdown) |
| [`luna://com.webos.service.power/shutdown/machineOff`](services/com.webos.service.power.md#shutdown_machineoff) | Handles the machine off (shutdown) |
| [`luna://com.webos.service.power/shutdown/machineReboot`](services/com.webos.service.power.md#shutdown_machinereboot) | Handles the machine reboot (shutdown) |
| [`luna://com.webos.service.power/shutdown/shutdownApplicationsAck`](services/com.webos.service.power.md#shutdown_shutdownapplicationsack) | Shuts down the applications ack (shutdown) |
| [`luna://com.webos.service.power/shutdown/shutdownApplicationsRegister`](services/com.webos.service.power.md#shutdown_shutdownapplicationsregister) | Shuts down the applications register (shutdown) |
| [`luna://com.webos.service.power/shutdown/shutdownServicesAck`](services/com.webos.service.power.md#shutdown_shutdownservicesack) | Shuts down the services ack (shutdown) |
| [`luna://com.webos.service.power/shutdown/shutdownServicesRegister`](services/com.webos.service.power.md#shutdown_shutdownservicesregister) | Shuts down the services register (shutdown) |
| [`luna://com.webos.service.power/shutdown/TESTresetShutdownState`](services/com.webos.service.power.md#shutdown_testresetshutdownstate) | Handles the TES treset shutdown state (shutdown) |
| [`luna://com.webos.service.ppm/removePermission`](services/com.webos.service.ppm.md#removepermission) | Removes the permission. |
| [`luna://com.webos.service.pqcontroller/resetPictureSettings`](services/com.webos.service.pqcontroller.md#resetpicturesettings) | Resets the picture settings. |
| [`luna://com.webos.service.pqcontroller/resetWhiteBalance`](services/com.webos.service.pqcontroller.md#resetwhitebalance) | Resets the white balance. |
| [`luna://com.webos.service.pqcontroller/setFormatNotificationFlag`](services/com.webos.service.pqcontroller.md#setformatnotificationflag) | Sets the format notification flag. |
| [`luna://com.webos.service.pqcontroller/setWhiteBalance`](services/com.webos.service.pqcontroller.md#setwhitebalance) | Set white balance in Ez-Adjust service menu |
| [`luna://com.webos.service.printing/configuration/deletePrinter`](services/com.webos.service.printing.md#configuration_deleteprinter) | Deletes the printer (configuration) |
| [`luna://com.webos.service.prs/deleteRecommendChannelList`](services/com.webos.service.prs.md#deleterecommendchannellist) | Deletes the recommend channel list. |
| [`luna://com.webos.service.push/deleteReceiver`](services/com.webos.service.push.md#deletereceiver) | Deletes the receiver. |
| [`luna://com.webos.service.push/deleteToken`](services/com.webos.service.push.md#deletetoken) | Deletes the token. |
| [`luna://com.webos.service.qbd/setResetTime`](services/com.webos.service.qbd.md#setresettime) | Sets the reset time. |
| [`luna://com.webos.service.recent/removeAllRecents`](services/com.webos.service.recent.md#removeallrecents) | Removes the all recents. |
| [`luna://com.webos.service.rollingscreen/updateMotorMicomFirmware`](services/com.webos.service.rollingscreen.md#updatemotormicomfirmware) | Updates the motor MICOM firmware. |
| [`luna://com.webos.service.ruleengine/deleteRule`](services/com.webos.service.ruleengine.md#deleterule) | Deletes the rule. |
| [`luna://com.webos.service.sdx/deleteDeviceAuthentication`](services/com.webos.service.sdx.md#deletedeviceauthentication) | Clears the stored SDP device authentication. Documented as existing. |
| [`luna://com.webos.service.sdx/doServiceCountryChange`](services/com.webos.service.sdx.md#doservicecountrychange) | Changes the service country SDP uses (which content catalogue / store region the TV talks to). Documented here as what the method is for; this repo does not provide a region-lock bypass procedure. |
| [`luna://com.webos.service.sdx/setCountrySettingByAuto`](services/com.webos.service.sdx.md#setcountrysettingbyauto) | Sets the SDP service country automatically (from network/geo). Purpose documented; no bypass recipe. |
| [`luna://com.webos.service.sdx/setCountrySettingByManual`](services/com.webos.service.sdx.md#setcountrysettingbymanual) | Sets the SDP service country manually. Purpose documented; no bypass recipe. |
| [`luna://com.webos.service.sdx/setServer`](services/com.webos.service.sdx.md#setserver) | Points the TV at a different SDP server environment. Documented as existing; changing it can break store/search/updates. |
| [`luna://com.webos.service.sdxpromo/deletePromo`](services/com.webos.service.sdxpromo.md#deletepromo) | Deletes the promo. |
| [`luna://com.webos.service.settings/resetSystemSettingDescPriv`](services/com.webos.service.settings.md#resetsystemsettingdescpriv) | Resets the system setting desc priv. |
| [`luna://com.webos.service.settings/resetSystemSettingsPriv`](services/com.webos.service.settings.md#resetsystemsettingspriv) | Resets the system settings priv. |
| [`luna://com.webos.service.settings/setSystemSettingFactoryDescPriv`](services/com.webos.service.settings.md#setsystemsettingfactorydescpriv) | Sets the system setting factory desc priv. |
| [`luna://com.webos.service.storagestatistics/removeFile`](services/com.webos.service.storagestatistics.md#removefile) | Removes the file. |
| [`luna://com.webos.service.systemservice/erase/EraseAll`](services/com.webos.service.systemservice.md#erase_eraseall) | Erases the all (erase) |
| [`luna://com.webos.service.systemservice/erase/EraseDeveloper`](services/com.webos.service.systemservice.md#erase_erasedeveloper) | Erases the developer (erase) |
| [`luna://com.webos.service.systemservice/erase/EraseMedia`](services/com.webos.service.systemservice.md#erase_erasemedia) | Erases the media (erase) |
| [`luna://com.webos.service.systemservice/erase/EraseVar`](services/com.webos.service.systemservice.md#erase_erasevar) | Erases the var (erase) |
| [`luna://com.webos.service.systemservice/erase/Wipe`](services/com.webos.service.systemservice.md#erase_wipe) | Handles the wipe (erase) |
| [`luna://com.webos.service.tts/removeAdvancedLanguagePack`](services/com.webos.service.tts.md#removeadvancedlanguagepack) | Removes the advanced language pack. |
| [`luna://com.webos.service.tv.display/requestClearPanelNoise`](services/com.webos.service.tv.display.md#requestclearpanelnoise) | OLED pixel refresh scheduling |
| [`luna://com.webos.service.tv.systemproperty/doFactoryDefault`](services/com.webos.service.tv.systemproperty.md#dofactorydefault) | Factory default operation (listed in Powback capabilities audit under panel calibration/service-menu controls) |
| [`luna://com.webos.service.tv.systemproperty/doUserDefault`](services/com.webos.service.tv.systemproperty.md#douserdefault) | Factory reset / user-default restore. The db8 no-space handler calls it right after the comment "do factory reset" |
| [`luna://com.webos.service.tv.systemproperty/downloadEdid`](services/com.webos.service.tv.systemproperty.md#downloadedid) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/flexSetFakeInit`](services/com.webos.service.tv.systemproperty.md#flexsetfakeinit) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/flexSetStepMotor`](services/com.webos.service.tv.systemproperty.md#flexsetstepmotor) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/resetAdcCalibration`](services/com.webos.service.tv.systemproperty.md#resetadccalibration) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/resetEdid`](services/com.webos.service.tv.systemproperty.md#resetedid) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/resetVcom`](services/com.webos.service.tv.systemproperty.md#resetvcom) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/savePgamma`](services/com.webos.service.tv.systemproperty.md#savepgamma) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/setAdcCalibrationValue`](services/com.webos.service.tv.systemproperty.md#setadccalibrationvalue) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/setNpointWhiteBalance`](services/com.webos.service.tv.systemproperty.md#setnpointwhitebalance) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/setPgamma`](services/com.webos.service.tv.systemproperty.md#setpgamma) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/setProperties`](services/com.webos.service.tv.systemproperty.md#setproperties) | Writes system properties (ColorControl SetSystemProperty; Glasshouse toggles OLED TPC/GSR flags OledTPC/OledGSR) |
| [`luna://com.webos.service.tv.systemproperty/setVcom`](services/com.webos.service.tv.systemproperty.md#setvcom) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/setWhiteBalance`](services/com.webos.service.tv.systemproperty.md#setwhitebalance) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tv.systemproperty/startAdcCalibration`](services/com.webos.service.tv.systemproperty.md#startadccalibration) | Method registered by com.webos.service.tv.systemproperty (root category) |
| [`luna://com.webos.service.tvpower/power2/shutDown`](services/com.webos.service.tvpower.md#power2_shutdown) | Handles the shut down (power 2) |
| [`luna://com.webos.service.tvReservationAgent/delete`](services/com.webos.service.tvReservationAgent.md#delete) | Deletes the TV reservation agent. |
| [`luna://com.webos.service.tvrm/presetTuner`](services/com.webos.service.tvrm.md#presettuner) | Handles the preset tuner. |
| [`luna://com.webos.service.update/deleteUpdateInfo`](services/com.webos.service.update.md#deleteupdateinfo) | Deletes the update info. |
| [`luna://com.webos.service.update/setExpertMode`](services/com.webos.service.update.md#setexpertmode) | Enables update "expert mode" so the firmware-update UI accepts downgrades/USB images |
| [`luna://com.webos.service.update/setServerType`](services/com.webos.service.update.md#setservertype) | Sets the server type. |
| [`luna://com.webos.service.update/startUpdateByRemoteApp`](services/com.webos.service.update.md#startupdatebyremoteapp) | Start a firmware update initiated from a remote app |
| [`luna://com.webos.service.usercontextmanager/reset`](services/com.webos.service.usercontextmanager.md#reset) | Resets the usercontextmanager. |
| [`luna://com.webos.service.userintentmanager/reset`](services/com.webos.service.userintentmanager.md#reset) | Resets the userintentmanager. |
| [`luna://com.webos.service.utp.broadcast/scanDetailInformation`](services/com.webos.service.utp.broadcast.md#scandetailinformation) | Scans for detail information. |
| [`luna://com.webos.service.utp.channel/bcas/removeEmmTimer`](services/com.webos.service.utp.channel.md#bcas_removeemmtimer) | Removes the emm timer (bcas) |
| [`luna://com.webos.service.utp.channel/ci/resetCam`](services/com.webos.service.utp.channel.md#ci_resetcam) | Resets the CAM (CI) |
| [`luna://com.webos.service.utp.channel/ci/startCiInformationMenu`](services/com.webos.service.utp.channel.md#ci_startciinformationmenu) | Starts the CI information menu (CI) |
| [`luna://com.webos.service.utp.channel/deleteDvbSatelliteChannelForAstra`](services/com.webos.service.utp.channel.md#deletedvbsatellitechannelforastra) | Deletes the DVB satellite channel for astra. |
| [`luna://com.webos.service.utp.channel/scan/deleteAnalogManualTuning`](services/com.webos.service.utp.channel.md#scan_deleteanalogmanualtuning) | Deletes the analog manual tuning (scan) |
| [`luna://com.webos.service.utp.channel/scan/deleteAtscManualTuning`](services/com.webos.service.utp.channel.md#scan_deleteatscmanualtuning) | Deletes the ATSC manual tuning (scan) |
| [`luna://com.webos.service.utp.channel/scan/deleteDvbCableManualTuning`](services/com.webos.service.utp.channel.md#scan_deletedvbcablemanualtuning) | Deletes the DVB cable manual tuning (scan) |
| [`luna://com.webos.service.utp.channel/scan/deleteDvbSatelliteConfiguration`](services/com.webos.service.utp.channel.md#scan_deletedvbsatelliteconfiguration) | Deletes the DVB satellite configuration (scan) |
| [`luna://com.webos.service.utp.channel/scan/deleteDvbSatelliteTransponder`](services/com.webos.service.utp.channel.md#scan_deletedvbsatellitetransponder) | Deletes the DVB satellite transponder (scan) |
| [`luna://com.webos.service.utp.channel/scan/deleteDvbTerrestrialManualTuning`](services/com.webos.service.utp.channel.md#scan_deletedvbterrestrialmanualtuning) | Deletes the DVB terrestrial manual tuning (scan) |
| [`luna://com.webos.service.utp.channel/scan/resetDvbCableNetworkScanInfo`](services/com.webos.service.utp.channel.md#scan_resetdvbcablenetworkscaninfo) | Resets the DVB cable network scan info (scan) |
| [`luna://com.webos.service.utp.channel/scan/resetDvbCableQuickScanInfo`](services/com.webos.service.utp.channel.md#scan_resetdvbcablequickscaninfo) | Resets the DVB cable quick scan info (scan) |
| [`luna://com.webos.service.utp.channel/scan/resetDvbCableScanInfo`](services/com.webos.service.utp.channel.md#scan_resetdvbcablescaninfo) | Resets the DVB cable scan info (scan) |
| [`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteDiSEqCMotor`](services/com.webos.service.utp.channel.md#scan_resetdvbsatellitediseqcmotor) | Resets the DVB satellite di s eq c motor (scan) |
| [`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteDiSEqCMotorLimit`](services/com.webos.service.utp.channel.md#scan_resetdvbsatellitediseqcmotorlimit) | Resets the DVB satellite di s eq c motor limit (scan) |
| [`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteTkgsHiddenTransponderList`](services/com.webos.service.utp.channel.md#scan_resetdvbsatellitetkgshiddentransponderlist) | Resets the DVB satellite tkgs hidden transponder list (scan) |
| [`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteTkgsVersion`](services/com.webos.service.utp.channel.md#scan_resetdvbsatellitetkgsversion) | Resets the DVB satellite tkgs version (scan) |
| [`luna://com.webos.service.utp.databroadcast/removeSectionFilter`](services/com.webos.service.utp.databroadcast.md#removesectionfilter) | Removes the section filter. |
| [`luna://com.webos.service.utp.extinputs/resetHDMIErrorHistory`](services/com.webos.service.utp.extinputs.md#resethdmierrorhistory) | Resets the HDMI error history. |
| [`luna://com.webos.service.videooutput/reset/resetVideoSettings`](services/com.webos.service.videooutput.md#reset_resetvideosettings) | Resets the video settings (reset) |
| [`luna://com.webos.service.videosinkmanager/private/delete`](services/com.webos.service.videosinkmanager.md#private_delete) | Deletes the videosinkmanager (private) |
| [`luna://com.webos.service.voiceinput/enroll/removeEnroll`](services/com.webos.service.voiceinput.md#enroll_removeenroll) | Removes the enroll (enroll) |
| [`luna://com.webos.service.voiceinput/factory/testMicSignal`](services/com.webos.service.voiceinput.md#factory_testmicsignal) | Tests the mic signal (factory) |
| [`luna://com.webos.service.wampluggable.hbbtv/resetDeviceId`](services/com.webos.service.wampluggable.hbbtv.md#resetdeviceid) | Resets the device ID. |
| [`luna://com.webos.service.wampluggable.hbbtv/resetDialConnection`](services/com.webos.service.wampluggable.hbbtv.md#resetdialconnection) | Resets the dial connection. |
| [`luna://com.webos.service.widevine/removeComplete`](services/com.webos.service.widevine.md#removecomplete) | Removes the complete. |
| [`luna://com.webos.service.widevine/removeLicense`](services/com.webos.service.widevine.md#removelicense) | Removes the license. |
| [`luna://com.webos.service.widevine/removeSession`](services/com.webos.service.widevine.md#removesession) | Removes a session. (standard Widevine CDM call.) |
| [`luna://com.webos.service.wifi/tv/factoryWifiSearchResult`](services/com.webos.service.wifi.md#tv_factorywifisearchresult) | Handles the factory wifi search result (TV) |
| [`luna://com.webos.service.wifi/tv/resetWifiSearchResult`](services/com.webos.service.wifi.md#tv_resetwifisearchresult) | Resets the wifi search result (TV) |
| [`luna://com.webos.service.wirelessavcontroller/updateZcbMicomFirmware`](services/com.webos.service.wirelessavcontroller.md#updatezcbmicomfirmware) | Updates the zcb MICOM firmware. |
| [`luna://com.webos.service.wowplay/removePairedDevice`](services/com.webos.service.wowplay.md#removepaireddevice) | Removes the paired device. |
| [`luna://com.webos.settingsservice/resetSystemSettingDescPriv`](services/com.webos.settingsservice.md#resetsystemsettingdescpriv) | Resets the system setting desc priv. |
| [`luna://com.webos.settingsservice/resetSystemSettings`](services/com.webos.settingsservice.md#resetsystemsettings) | Resets system settings to their factory/default values |
| [`luna://com.webos.settingsservice/resetSystemSettingsPriv`](services/com.webos.settingsservice.md#resetsystemsettingspriv) | Resets the system settings priv. |
| [`luna://com.webos.settingsservice/setSystemFactorySettingDescPriv`](services/com.webos.settingsservice.md#setsystemfactorysettingdescpriv) | Sets the system factory setting desc priv. |
| [`luna://com.webos.settingsservice/setSystemSettingFactoryDescPriv`](services/com.webos.settingsservice.md#setsystemsettingfactorydescpriv) | Sets the system setting factory desc priv. |
| [`luna://lg.thinqai.adapter/deletePrivacyData`](services/lg.thinqai.adapter.md#deleteprivacydata) | Deletes the privacy data. |
| [`luna://lg.thinqai.adapter/vid/deleteVoiceId`](services/lg.thinqai.adapter.md#vid_deletevoiceid) | Deletes the voice ID (vid) |
