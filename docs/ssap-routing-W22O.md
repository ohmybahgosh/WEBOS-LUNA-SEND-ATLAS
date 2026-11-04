# SSAP -> luna routing table (webOS 7.0, W22O)

Extracted directly from `/usr/palm/services/com.webos.service.secondscreen.gateway/interfaces/*.interface` on a retail LG OLED (webOS TV 7.0, firmware 33.31.68).  This is the authoritative mapping of SSAP websocket URIs to the luna methods they invoke, with the exact permission each requires.  Alias namespaces (`audio`, `tv`, `system.notifications`, ...) resolve through `com.webos.service.apiadapter` or a named provider.  Other firmware may differ; regenerate with `scripts/parse_dump.py`.

|---|---|---|
| `ssap://api/getServiceList` | `luna://com.webos.service.secondscreen.gateway/getServiceList` |  |
| `ssap://audio/getVolume` | `luna://com.webos.service.audio/master/getVolume` |  |
| `ssap://audio/setVolume` | `luna://com.webos.service.audio/master/setVolume` |  |
| `ssap://audio/volumeUp` | `luna://com.webos.service.audio/master/volumeUp` |  |
| `ssap://audio/volumeDown` | `luna://com.webos.service.audio/master/volumeDown` |  |
| `ssap://audio/getMute` | `luna://com.webos.service.apiadapter/audio/getMute` |  |
| `ssap://audio/setMute` | `luna://com.webos.service.apiadapter/audio/setMute` |  |
| `ssap://audio/getStatus` | `luna://com.webos.service.apiadapter/audio/getStatus` |  |
| `ssap://audio/changeSoundOutput` | `luna://com.webos.service.apiadapter/audio/changeSoundOutput` |  |
| `ssap://audio/getSoundOutput` | `luna://com.webos.service.apiadapter/audio/getSoundOutput` |  |
| `ssap://com.palm.systemservice/time/getEffectiveBroadcastTime` | `luna://com.palm.systemservice/time/getEffectiveBroadcastTime` | CONTROL_INPUT_MEDIA_RECORDING |
| `ssap://com.palm.systemservice/time/getSystemTime` | `luna://com.palm.systemservice/time/getSystemTime` | READ_SETTINGS |
| `ssap://com.palm.systemservice/getPreferences` | `luna://com.palm.systemservice/getPreferences` | READ_SETTINGS |
| `ssap://com.palm.systemservice/getPreferenceValues` | `luna://com.palm.systemservice/getPreferenceValues` | READ_SETTINGS |
| `ssap://com.palm.systemservice/setPreferences` | `luna://com.palm.systemservice/setPreferences` | WRITE_SETTINGS |
| `ssap://com.webos.applicationManager/launch` | `luna://com.webos.applicationManager/launch` | SECURE_LAUNCH,LAUNCH |
| `ssap://com.webos.applicationManager/launchDefaultApp` | `luna://com.webos.applicationManager/launchDefaultApp` | LAUNCH |
| `ssap://com.webos.applicationManager/closeByAppId` | `luna://com.webos.applicationManager/closeByAppId` | SECURE_LAUNCH,LAUNCH |
| `ssap://com.webos.applicationManager/open` | `luna://com.webos.applicationManager/open` | SECURE_LAUNCH,LAUNCH |
| `ssap://com.webos.applicationManager/listApps` | `luna://com.webos.applicationManager/listApps` | SECURE_READ_INSTALLED_APPS,READ_INSTALLED_APPS |
| `ssap://com.webos.applicationManager/searchApps` | `luna://com.webos.applicationManager/searchApps` | SECURE_READ_INSTALLED_APPS,READ_INSTALLED_APPS |
| `ssap://com.webos.applicationManager/getAppInfo` | `luna://com.webos.applicationManager/getAppInfo` | SECURE_READ_INSTALLED_APPS,READ_INSTALLED_APPS |
| `ssap://com.webos.applicationManager/listLaunchPoints` | `luna://com.webos.applicationManager/listLaunchPoints` | READ_INSTALLED_APPS |
| `ssap://com.webos.applicationManager/getForegroundAppInfo` | `luna://com.webos.applicationManager/getForegroundAppInfo` | READ_RUNNING_APPS |
| `ssap://com.webos.applicationManager/getForegroundApps` | `luna://com.webos.applicationManager/getForegroundApps` | READ_RUNNING_APPS |
| `ssap://com.webos.launcher/createGroup` | `luna://com.webos.launcher/createGroup` | ADD_LAUNCHER_CHANNEL |
| `ssap://com.webos.launcher/addItemToGroup` | `luna://com.webos.launcher/addItemToGroup` | ADD_LAUNCHER_CHANNEL |
| `ssap://com.webos.media/getForegroundAppInfo` | `luna://com.webos.media/getForegroundAppInfo` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.notification/createPincodePrompt` | `luna://com.webos.notification/createPincodePrompt` | WRITE_NOTIFICATION_TOAST |
| `ssap://com.webos.service.apiadapter/audio/getMute` | `luna://com.webos.service.apiadapter/audio/getMute` | CONTROL_AUDIO |
| `ssap://com.webos.service.apiadapter/audio/setMute` | `luna://com.webos.service.apiadapter/audio/setMute` | CONTROL_AUDIO |
| `ssap://com.webos.service.apiadapter/audio/getStatus` | `luna://com.webos.service.apiadapter/audio/getStatus` | CONTROL_AUDIO |
| `ssap://com.webos.service.apiadapter/audio/changeSoundOutput` | `luna://com.webos.service.apiadapter/audio/changeSoundOutput` | CONTROL_AUDIO |
| `ssap://com.webos.service.apiadapter/audio/getSoundOutput` | `luna://com.webos.service.apiadapter/audio/getSoundOutput` | CONTROL_AUDIO |
| `ssap://com.webos.service.apiadapter/media_viewer/open` | `luna://com.webos.service.apiadapter/media_viewer/open` | LAUNCH |
| `ssap://com.webos.service.apiadapter/media_viewer/close` | `luna://com.webos.service.apiadapter/media_viewer/close` | LAUNCH |
| `ssap://com.webos.service.apiadapter/system_launcher/launch` | `luna://com.webos.service.apiadapter/system_launcher/launch` | LAUNCH |
| `ssap://com.webos.service.apiadapter/system_launcher/open` | `luna://com.webos.service.apiadapter/system_launcher/open` | LAUNCH |
| `ssap://com.webos.service.apiadapter/system_launcher/close` | `luna://com.webos.service.apiadapter/system_launcher/close` | LAUNCH |
| `ssap://com.webos.service.apiadapter/system_launcher/getAppState` | `luna://com.webos.service.apiadapter/system_launcher/getAppState` | LAUNCH |
| `ssap://com.webos.service.apiadapter/system_notifications/createToast` | `luna://com.webos.service.apiadapter/system_notifications/createToast` | WRITE_NOTIFICATION_TOAST |
| `ssap://com.webos.service.apiadapter/system_notifications/createAlert` | `luna://com.webos.service.apiadapter/system_notifications/createAlert` | WRITE_NOTIFICATION_TOAST |
| `ssap://com.webos.service.apiadapter/system_notifications/closeToast` | `luna://com.webos.service.apiadapter/system_notifications/closeToast` | WRITE_NOTIFICATION_TOAST |
| `ssap://com.webos.service.apiadapter/system_notifications/closeAlert` | `luna://com.webos.service.apiadapter/system_notifications/closeAlert` | WRITE_NOTIFICATION_TOAST |
| `ssap://com.webos.service.apiadapter/system/getSystemInfo` | `luna://com.webos.service.apiadapter/system/getSystemInfo` |  |
| `ssap://com.webos.service.apiadapter/system/getCountryInfo` | `luna://com.webos.service.apiadapter/system/getCountryInfo` |  |
| `ssap://com.webos.service.apiadapter/system/isValidPin` | `luna://com.webos.service.apiadapter/system/isValidPin` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter/tv/getChannelList` | `luna://com.webos.service.apiadapter/tv/getChannelList` | READ_TV_CHANNEL_LIST |
| `ssap://com.webos.service.apiadapter/tv/getSimilarChannelList` | `luna://com.webos.service.apiadapter/tv/getSimilarChannelList` | READ_TV_CHANNEL_LIST |
| `ssap://com.webos.service.apiadapter/tv/getCurrentChannel` | `luna://com.webos.service.apiadapter/tv/getCurrentChannel` | READ_CURRENT_CHANNEL |
| `ssap://com.webos.service.apiadapter/tv/getChannelProgramInfo` | `luna://com.webos.service.apiadapter/tv/getChannelProgramInfo` | READ_CURRENT_CHANNEL |
| `ssap://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo` | `luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo` | READ_CURRENT_CHANNEL |
| `ssap://com.webos.service.apiadapter/tv/getACRAuthToken` | `luna://com.webos.service.apiadapter/tv/getACRAuthToken` | READ_TV_ACR_AUTH_TOKEN |
| `ssap://com.webos.service.apiadapter/tv/getContentState` | `luna://com.webos.service.apiadapter/tv/getContentState` | READ_TV_CONTENT_STATE |
| `ssap://com.webos.service.apiadapter/tv/openChannel` | `luna://com.webos.service.apiadapter/tv/openChannel` | LAUNCH |
| `ssap://com.webos.service.apiadapter/tv/getExternalInputList` | `luna://com.webos.service.apiadapter/tv/getExternalInputList` | READ_INPUT_DEVICE_LIST |
| `ssap://com.webos.service.apiadapter/tv/switchInput` | `luna://com.webos.service.apiadapter/tv/switchInput` | LAUNCH |
| `ssap://com.webos.service.apiadapter/tv/executeOneShot` | `luna://com.webos.service.apiadapter/tv/executeOneShot` | CONTROL_DISPLAY |
| `ssap://com.webos.service.apiadapter/webapp/launchWebApp` | `luna://com.webos.service.apiadapter/webapp/launchWebApp` | LAUNCH_WEBAPP |
| `ssap://com.webos.service.apiadapter/webapp/isWebAppPinned` | `luna://com.webos.service.apiadapter/webapp/isWebAppPinned` | LAUNCH_WEBAPP |
| `ssap://com.webos.service.apiadapter/webapp/pinWebApp` | `luna://com.webos.service.apiadapter/webapp/pinWebApp` | LAUNCH_WEBAPP |
| `ssap://com.webos.service.apiadapter/webapp/removePinnedWebApp` | `luna://com.webos.service.apiadapter/webapp/removePinnedWebApp` | LAUNCH_WEBAPP |
| `ssap://com.webos.service.apiadapter/webapp/closeWebApp` | `luna://com.webos.service.apiadapter/webapp/closeWebApp` | LAUNCH_WEBAPP |
| `ssap://com.webos.service.apiadapter/user/setUserInfo` | `luna://com.webos.service.apiadapter/user/setUserInfo` | CONTROL_USER_INFO |
| `ssap://com.webos.service.apiadapter/user/resetUserInfo` | `luna://com.webos.service.apiadapter/user/resetUserInfo` | CONTROL_USER_INFO |
| `ssap://com.webos.service.apiadapter/user/setUserData` | `luna://com.webos.service.apiadapter/user/setUserData` | CONTROL_USER_INFO |
| `ssap://com.webos.service.apiadapter/user/getUserData` | `luna://com.webos.service.apiadapter/user/getUserData` | CONTROL_USER_INFO |
| `ssap://com.webos.service.apiadapter/user/resetUserData` | `luna://com.webos.service.apiadapter/user/resetUserData` | CONTROL_USER_INFO |
| `ssap://com.webos.service.apiadapter/user/setUserSchedule` | `luna://com.webos.service.apiadapter/user/setUserSchedule` | CONTROL_USER_INFO |
| `ssap://com.webos.service.apiadapter/user/resetUserSchedule` | `luna://com.webos.service.apiadapter/user/resetUserSchedule` | CONTROL_USER_INFO |
| `ssap://com.webos.service.apiadapter/timer/setSettings` | `luna://com.webos.service.apiadapter/timer/setSettings` | CONTROL_TIMER_INFO |
| `ssap://com.webos.service.apiadapter/timer/getSettings` | `luna://com.webos.service.apiadapter/timer/getSettings` | CONTROL_TIMER_INFO |
| `ssap://com.webos.service.apiadapter/config/getConfigs` | `luna://com.webos.service.apiadapter/config/getConfigs` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter/settings/getSystemSettings` | `luna://com.webos.service.apiadapter/settings/getSystemSettings` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo` | `luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter/settings/getSystemSettingDesc` | `luna://com.webos.service.apiadapter/settings/getSystemSettingDesc` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter/settings/getSystemSettingValues` | `luna://com.webos.service.apiadapter/settings/getSystemSettingValues` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter/settings/setSystemSettings` | `luna://com.webos.service.apiadapter/settings/setSystemSettings` | WRITE_SETTINGS |
| `ssap://com.webos.service.apiadapter/settings/resetSystemSettings` | `luna://com.webos.service.apiadapter/settings/resetSystemSettings` | WRITE_SETTINGS |
| `ssap://com.webos.service.apiadapter/settings/resetSystemSettingDesc` | `luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc` | WRITE_SETTINGS |
| `ssap://com.webos.service.apiadapter/externalpq/getExternalPqData` | `luna://com.webos.service.apiadapter/externalpq/getExternalPqData` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter/externalpq/setExternalPqData` | `luna://com.webos.service.apiadapter/externalpq/setExternalPqData` | WRITE_SETTINGS |
| `ssap://com.webos.service.apiadapter/systemprofile/getProfiles` | `luna://com.webos.service.apiadapter/systemprofile/getProfiles` | READ_SETTINGS |
| `ssap://com.webos.service.apiadapter.pub/system_notifications/createAlert` | `luna://com.webos.service.apiadapter.pub/system_notifications/createAlert` | WRITE_NOTIFICATION_TOAST |
| `ssap://com.webos.service.apiadapter.pub/application_manager/launch` | `luna://com.webos.service.apiadapter.pub/application_manager/launch` | SECURE_LAUNCH,LAUNCH |
| `ssap://com.webos.service.apluspolicymanager/launchPartialViewApp` | `luna://com.webos.service.apluspolicymanager/launchPartialViewApp` | SECURE_CONTROL_TV_SCREEN,CONTROL_TV_SCREEN |
| `ssap://com.webos.service.appcasting/getCommand` | `luna://com.webos.service.appcasting/getCommand` | READ_NETWORK_STATE |
| `ssap://com.webos.service.appcasting/sendCommand` | `luna://com.webos.service.appcasting/sendCommand` | READ_NETWORK_STATE |
| `ssap://com.webos.service.appcasting/receiveUIBCEvent` | `luna://com.webos.service.appcasting/receiveUIBCEvent` | READ_NETWORK_STATE |
| `ssap://com.webos.service.asc/registerDevice` | `luna://com.webos.service.asc/registerDevice` | ACCESS_STORAGE |
| `ssap://com.webos.service.attachedstoragemanager/listDevices` | `luna://com.webos.service.attachedstoragemanager/listDevices` | SECURE_READ_STORAGE_DEVICE_LIST,READ_STORAGE_DEVICE_LIST |
| `ssap://com.webos.service.attachedstoragemanager/changeDeviceStatus` | `luna://com.webos.service.attachedstoragemanager/changeDeviceStatus` | SECURE_READ_STORAGE_DEVICE_LIST,READ_STORAGE_DEVICE_LIST |
| `ssap://com.webos.service.attachedstoragemanager/getProperties` | `luna://com.webos.service.attachedstoragemanager/getProperties` | SECURE_READ_STORAGE_DEVICE_LIST,READ_STORAGE_DEVICE_LIST |
| `ssap://com.webos.service.audio/tv/setOffsetDelay` | `luna://com.webos.service.audio/tv/setOffsetDelay` | CONTROL_AUDIO |
| `ssap://com.webos.service.audio/master/getVolume` | `luna://com.webos.service.audio/master/getVolume` | CONTROL_AUDIO |
| `ssap://com.webos.service.audio/master/setVolume` | `luna://com.webos.service.audio/master/setVolume` | CONTROL_AUDIO |
| `ssap://com.webos.service.audio/master/volumeUp` | `luna://com.webos.service.audio/master/volumeUp` | CONTROL_AUDIO |
| `ssap://com.webos.service.audio/master/volumeDown` | `luna://com.webos.service.audio/master/volumeDown` | CONTROL_AUDIO |
| `ssap://com.webos.service.bluetooth/gap/findDevices` | `luna://com.webos.service.bluetooth/gap/findDevices` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/gap/removeTrustedDevice` | `luna://com.webos.service.bluetooth/gap/removeTrustedDevice` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/service/connect` | `luna://com.webos.service.bluetooth/service/connect` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/service/disconnect` | `luna://com.webos.service.bluetooth/service/disconnect` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/gap/getTrustedDevices` | `luna://com.webos.service.bluetooth/gap/getTrustedDevices` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/gap/isRadioOn` | `luna://com.webos.service.bluetooth/gap/isRadioOn` | CHECK_BLUETOOTH_DEVICE |
| `ssap://com.webos.service.bluetooth/service/init` | `luna://com.webos.service.bluetooth/service/init` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/service/release` | `luna://com.webos.service.bluetooth/service/release` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/service/subscribeNotifications` | `luna://com.webos.service.bluetooth/service/subscribeNotifications` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/gap/isWiFiOnly` | `luna://com.webos.service.bluetooth/gap/isWiFiOnly` | CHECK_BLUETOOTH_DEVICE |
| `ssap://com.webos.service.bluetooth/audio/enableSoundOutRedirect` | `luna://com.webos.service.bluetooth/audio/enableSoundOutRedirect` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bluetooth/audio/getSoundOutRedirectState` | `luna://com.webos.service.bluetooth/audio/getSoundOutRedirectState` | CHECK_BLUETOOTH_DEVICE |
| `ssap://com.webos.service.bluetooth2/adapter/queryAvailable` | `luna://com.webos.service.bluetooth2/adapter/queryAvailable` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.bosp/getCurrentPictureMode` | `luna://com.webos.service.bosp/getCurrentPictureMode` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/getCurrentAspectRatio` | `luna://com.webos.service.bosp/getCurrentAspectRatio` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/getPictureModeList` | `luna://com.webos.service.bosp/getPictureModeList` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/getAspectRatioList` | `luna://com.webos.service.bosp/getAspectRatioList` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/setPictureMode` | `luna://com.webos.service.bosp/setPictureMode` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/setAspectRatio` | `luna://com.webos.service.bosp/setAspectRatio` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/getUITransparency` | `luna://com.webos.service.bosp/getUITransparency` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/getLGUIState` | `luna://com.webos.service.bosp/getLGUIState` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.bosp/power` | `luna://com.webos.service.bosp/power` | SECURE_CONTROL_DISPLAY,CONTROL_POWER |
| `ssap://com.webos.service.bosp/scb/getRequestedAPI` | `luna://com.webos.service.bosp/scb/getRequestedAPI` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.bosp/scb/responseHDMILabel` | `luna://com.webos.service.bosp/scb/responseHDMILabel` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.bosp/scb/responseFirstApp` | `luna://com.webos.service.bosp/scb/responseFirstApp` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.bosp/scb/responseNetworkStatus` | `luna://com.webos.service.bosp/scb/responseNetworkStatus` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.bosp/scb/responseLuminence` | `luna://com.webos.service.bosp/scb/responseLuminence` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.bosp/scb/requestBacklight` | `luna://com.webos.service.bosp/scb/requestBacklight` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.bosp/scb/removeSplashScreen` | `luna://com.webos.service.bosp/scb/removeSplashScreen` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.btaudiosnk/open` | `luna://com.webos.service.btaudiosnk/open` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.btaudiosnk/close` | `luna://com.webos.service.btaudiosnk/close` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.btaudiosnk/getState` | `luna://com.webos.service.btaudiosnk/getState` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.btaudiosnk/disconnect` | `luna://com.webos.service.btaudiosnk/disconnect` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.btaudiosrc/connect` | `luna://com.webos.service.btaudiosrc/connect` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.btaudiosrc/disconnect` | `luna://com.webos.service.btaudiosrc/disconnect` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.btaudiosrc/getConnectedDevice` | `luna://com.webos.service.btaudiosrc/getConnectedDevice` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.btaudiosrc/getPairedDevices` | `luna://com.webos.service.btaudiosrc/getPairedDevices` | CONTROL_BLUETOOTH |
| `ssap://com.webos.service.capture/executeOneShot` | `luna://com.webos.service.capture/executeOneShot` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.service.cis/sampleSubscribe` | `luna://com.webos.service.cis/sampleSubscribe` | READ_SETTINGS |
| `ssap://com.webos.service.cis/getState` | `luna://com.webos.service.cis/getState` | READ_SETTINGS |
| `ssap://com.webos.service.cis/getPairedDevices` | `luna://com.webos.service.cis/getPairedDevices` | READ_SETTINGS |
| `ssap://com.webos.service.cis/sendVideo` | `luna://com.webos.service.cis/sendVideo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/getVideo` | `luna://com.webos.service.cis/getVideo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/responseConfirmSendVideo` | `luna://com.webos.service.cis/responseConfirmSendVideo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/cancelGetVideo` | `luna://com.webos.service.cis/cancelGetVideo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/cancelSendVideo` | `luna://com.webos.service.cis/cancelSendVideo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/notifyEvent` | `luna://com.webos.service.cis/notifyEvent` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/setSettings` | `luna://com.webos.service.cis/setSettings` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/getChannelCurrentInfo` | `luna://com.webos.service.cis/getChannelCurrentInfo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/seamlessPairing` | `luna://com.webos.service.cis/seamlessPairing` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/sendR2Rkey` | `luna://com.webos.service.cis/sendR2Rkey` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/selectRoomType` | `luna://com.webos.service.cis/selectRoomType` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/getAvailableRoomType` | `luna://com.webos.service.cis/getAvailableRoomType` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/setDeviceState` | `luna://com.webos.service.cis/setDeviceState` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/confirmGetVideo` | `luna://com.webos.service.cis/confirmGetVideo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.cis/confirmSendVideo` | `luna://com.webos.service.cis/confirmSendVideo` | SECURE_APP_TO_APP,APP_TO_APP |
| `ssap://com.webos.service.connectionmanager/getinfo` | `luna://com.webos.service.connectionmanager/getinfo` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.connectionmanager/checkinternetstatus` | `luna://com.webos.service.connectionmanager/checkinternetstatus` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.connectionmanager/getstatus` | `luna://com.webos.service.connectionmanager/getstatus` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.connectionmanager/getUserStatus` | `luna://com.webos.service.connectionmanager/getUserStatus` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.connectionmanager/tv/createVirtualLan` | `luna://com.webos.service.connectionmanager/tv/createVirtualLan` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.connectionmanager/tv/setExternalWanStatus` | `luna://com.webos.service.connectionmanager/tv/setExternalWanStatus` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.devicereset/doReset` | `luna://com.webos.service.devicereset/doReset` | STB_INTERNAL_CONNECTION |
| `ssap://com.webos.service.devicereset/getTvRegion` | `luna://com.webos.service.devicereset/getTvRegion` | READ_SETTINGS |
| `ssap://com.webos.service.devicereset/requestReboot` | `luna://com.webos.service.devicereset/requestReboot` | SECURE_CONTROL_POWER,CONTROL_POWER |
| `ssap://com.webos.service.downloadmanager/download` | `luna://com.webos.service.downloadmanager/download` | ACCESS_STORAGE |
| `ssap://com.webos.service.downloadmanager/cancelAllDownloads` | `luna://com.webos.service.downloadmanager/cancelAllDownloads` | ACCESS_STORAGE |
| `ssap://com.webos.service.eim/getCurrentInput` | `luna://com.webos.service.eim/getCurrentInput` | SECURE_READ_INPUT_DEVICE_LIST,SECURE_READ_RUNNING_APPS,READ_INPUT_DEVICE_LIST,READ_RUNNING_APPS |
| `ssap://com.webos.service.eim/getLastInput` | `luna://com.webos.service.eim/getLastInput` | SECURE_READ_INPUT_DEVICE_LIST,SECURE_READ_RUNNING_APPS,READ_INPUT_DEVICE_LIST,READ_RUNNING_APPS |
| `ssap://com.webos.service.eim/getAllInputStatus` | `luna://com.webos.service.eim/getAllInputStatus` | SECURE_READ_INPUT_DEVICE_LIST,SECURE_READ_RUNNING_APPS,READ_INPUT_DEVICE_LIST,READ_RUNNING_APPS |
| `ssap://com.webos.service.eim/getHDMISignalInfo` | `luna://com.webos.service.eim/getHDMISignalInfo` | SECURE_READ_INPUT_DEVICE_LIST,READ_INPUT_DEVICE_LIST |
| `ssap://com.webos.service.eim/setDeviceInfo` | `luna://com.webos.service.eim/setDeviceInfo` | WRITE_SETTINGS |
| `ssap://com.webos.service.firstuse/getSettings` | `luna://com.webos.service.firstuse/getSettings` | READ_SETTINGS |
| `ssap://com.webos.service.firstuse/setSettings` | `luna://com.webos.service.firstuse/setSettings` | WRITE_SETTINGS |
| `ssap://com.webos.service.homelaunchpoints/listLaunchPoints` | `luna://com.webos.service.homelaunchpoints/listLaunchPoints` | READ_INSTALLED_APPS |
| `ssap://com.webos.service.homelaunchpoints/listAvailableLaunchPoints` | `luna://com.webos.service.homelaunchpoints/listAvailableLaunchPoints` | READ_INSTALLED_APPS |
| `ssap://com.webos.service.ics/blaster/startDetectDevices` | `luna://com.webos.service.ics/blaster/startDetectDevices` | SECURE_READ_RUNNING_APPS,READ_RUNNING_APPS |
| `ssap://com.webos.service.iepg/notifyChannelListChanged` | `luna://com.webos.service.iepg/notifyChannelListChanged` | SECURE_READ_TV_CHANNEL_LIST,READ_TV_CHANNEL_LIST |
| `ssap://com.webos.service.iepg/getEventList` | `luna://com.webos.service.iepg/getEventList` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.iepg/getChannelList` | `luna://com.webos.service.iepg/getChannelList` | SECURE_READ_TV_CHANNEL_LIST,READ_TV_CHANNEL_LIST |
| `ssap://com.webos.service.iepg/setChannelSkip` | `luna://com.webos.service.iepg/setChannelSkip` | SECURE_SET_CHANNEL_SKIP,SET_CHANNEL_SKIP |
| `ssap://com.webos.service.iepg/releaseChannelSkip` | `luna://com.webos.service.iepg/releaseChannelSkip` | SECURE_RELEASE_CHANNEL_SKIP,RELEASE_CHANNEL_SKIP |
| `ssap://com.webos.service.iepg/setChannelBlock` | `luna://com.webos.service.iepg/setChannelBlock` | SECURE_CONTROL_CHANNEL_BLOCK,CONTROL_CHANNEL_BLOCK |
| `ssap://com.webos.service.iepg/releaseChannelBlock` | `luna://com.webos.service.iepg/releaseChannelBlock` | SECURE_CONTROL_CHANNEL_BLOCK,CONTROL_CHANNEL_BLOCK |
| `ssap://com.webos.service.iepg/setChannelFavoriteGroup` | `luna://com.webos.service.iepg/setChannelFavoriteGroup` | SECURE_CONTROL_FAVORITE_GROUP,CONTROL_FAVORITE_GROUP |
| `ssap://com.webos.service.iepg/getFavoriteGroupList` | `luna://com.webos.service.iepg/getFavoriteGroupList` | SECURE_CONTROL_FAVORITE_GROUP,CONTROL_FAVORITE_GROUP |
| `ssap://com.webos.service.iepg/releaseChannelFavoriteGroup` | `luna://com.webos.service.iepg/releaseChannelFavoriteGroup` | SECURE_CONTROL_FAVORITE_GROUP,CONTROL_FAVORITE_GROUP |
| `ssap://com.webos.service.iepg/deleteChannel` | `luna://com.webos.service.iepg/deleteChannel` | SECURE_DELETE_SELECT_CHANNEL,DELETE_SELECT_CHANNEL |
| `ssap://com.webos.service.iepg/getCountryPolicy` | `luna://com.webos.service.iepg/getCountryPolicy` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.ime/registerRemoteKeyboard` | `luna://com.webos.service.ime/registerRemoteKeyboard` | CONTROL_INPUT_TEXT |
| `ssap://com.webos.service.ime/insertText` | `luna://com.webos.service.ime/insertText` | CONTROL_INPUT_TEXT |
| `ssap://com.webos.service.ime/deleteCharacters` | `luna://com.webos.service.ime/deleteCharacters` | CONTROL_INPUT_TEXT |
| `ssap://com.webos.service.ime/sendEnterKey` | `luna://com.webos.service.ime/sendEnterKey` | CONTROL_INPUT_TEXT |
| `ssap://com.webos.service.iotclient/registerToken` | `luna://com.webos.service.iotclient/registerToken` | READ_LGE_SDX |
| `ssap://com.webos.service.iotclient/getAccountInfoList` | `luna://com.webos.service.iotclient/getAccountInfoList` | READ_LGE_SDX |
| `ssap://com.webos.service.iotclient/getDeviceUuid` | `luna://com.webos.service.iotclient/getDeviceUuid` | READ_LGE_SDX |
| `ssap://com.webos.service.iotclient/updateDeviceName` | `luna://com.webos.service.iotclient/updateDeviceName` | READ_LGE_SDX |
| `ssap://com.webos.service.iotclient/updateAccountInfo` | `luna://com.webos.service.iotclient/updateAccountInfo` | READ_LGE_SDX |
| `ssap://com.webos.service.iotclient/checkSupport` | `luna://com.webos.service.iotclient/checkSupport` | READ_LGE_SDX |
| `ssap://com.webos.service.irdbmanager/getDevices` | `luna://com.webos.service.irdbmanager/getDevices` | SECURE_READ_INPUT_DEVICE_LIST,READ_INPUT_DEVICE_LIST |
| `ssap://com.webos.service.irdbmanager/isSupported` | `luna://com.webos.service.irdbmanager/isSupported` | SECURE_READ_INPUT_DEVICE_LIST,READ_INPUT_DEVICE_LIST |
| `ssap://com.webos.service.livepick/isSupport` | `luna://com.webos.service.livepick/isSupport` | CONTROL_DISPLAY |
| `ssap://com.webos.service.livepick/isPickable` | `luna://com.webos.service.livepick/isPickable` | CONTROL_DISPLAY |
| `ssap://com.webos.service.livepick/isCapturable` | `luna://com.webos.service.livepick/isCapturable` | CONTROL_DISPLAY |
| `ssap://com.webos.service.livepick/checkInformation` | `luna://com.webos.service.livepick/checkInformation` | SEARCH |
| `ssap://com.webos.service.livepick/getSceneInfo` | `luna://com.webos.service.livepick/getSceneInfo` | SEARCH |
| `ssap://com.webos.service.livepick/getTotalInfo` | `luna://com.webos.service.livepick/getTotalInfo` | SEARCH |
| `ssap://com.webos.service.livepick/setWishCart` | `luna://com.webos.service.livepick/setWishCart` | SEARCH |
| `ssap://com.webos.service.livepick/getWishCart` | `luna://com.webos.service.livepick/getWishCart` | SEARCH |
| `ssap://com.webos.service.livepick/getTotalWishCount` | `luna://com.webos.service.livepick/getTotalWishCount` | SEARCH |
| `ssap://com.webos.service.miracast/sendRTSPRequest` | `luna://com.webos.service.miracast/sendRTSPRequest` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracast/setWFDConnectionMode` | `luna://com.webos.service.miracast/setWFDConnectionMode` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracast/getWFDConnectionMode` | `luna://com.webos.service.miracast/getWFDConnectionMode` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracast/getState` | `luna://com.webos.service.miracast/getState` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracast/launchOverlayApp` | `luna://com.webos.service.miracast/launchOverlayApp` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracast/getConnectedDeviceInfo` | `luna://com.webos.service.miracast/getConnectedDeviceInfo` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracast/getDeviceInfo` | `luna://com.webos.service.miracast/getDeviceInfo` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracasttx/connect` | `luna://com.webos.service.miracasttx/connect` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracasttx/requestMsg` | `luna://com.webos.service.miracasttx/requestMsg` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracasttx/getDeviceInfo` | `luna://com.webos.service.miracasttx/getDeviceInfo` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.miracasttx/getState` | `luna://com.webos.service.miracasttx/getState` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.mrcu/isPaired` | `luna://com.webos.service.mrcu/isPaired` | CHECK_BLUETOOTH_DEVICE |
| `ssap://com.webos.service.networkinput/getPointerInputSocket` | `luna://com.webos.service.networkinput/getPointerInputSocket` | CONTROL_MOUSE_AND_KEYBOARD |
| `ssap://com.webos.service.networkinput/getGamepadInputSocket` | `luna://com.webos.service.networkinput/getGamepadInputSocket` | CONTROL_INPUT_JOYSTICK |
| `ssap://com.webos.service.networkinput/sendKeyCodes` | `luna://com.webos.service.networkinput/sendKeyCodes` | CONTROL_MOUSE_AND_KEYBOARD |
| `ssap://com.webos.service.networkinput/test/getTouchpanelInputSocket` | `luna://com.webos.service.networkinput/test/getTouchpanelInputSocket` | CONTROL_MOUSE_AND_KEYBOARD |
| `ssap://com.webos.service.networkinput/controls/play` | `luna://com.webos.service.networkinput/controls/play` | CONTROL_INPUT_MEDIA_PLAYBACK |
| `ssap://com.webos.service.networkinput/controls/pause` | `luna://com.webos.service.networkinput/controls/pause` | CONTROL_INPUT_MEDIA_PLAYBACK |
| `ssap://com.webos.service.networkinput/controls/stop` | `luna://com.webos.service.networkinput/controls/stop` | CONTROL_INPUT_MEDIA_PLAYBACK |
| `ssap://com.webos.service.networkinput/controls/fastForward` | `luna://com.webos.service.networkinput/controls/fastForward` | CONTROL_INPUT_MEDIA_PLAYBACK |
| `ssap://com.webos.service.networkinput/controls/rewind` | `luna://com.webos.service.networkinput/controls/rewind` | CONTROL_INPUT_MEDIA_PLAYBACK |
| `ssap://com.webos.service.networkinput/controls/channelUp` | `luna://com.webos.service.networkinput/controls/channelUp` | CONTROL_INPUT_TV |
| `ssap://com.webos.service.networkinput/controls/channelDown` | `luna://com.webos.service.networkinput/controls/channelDown` | CONTROL_INPUT_TV |
| `ssap://com.webos.service.networkinput/controls/power` | `luna://com.webos.service.networkinput/controls/power` | CONTROL_POWER |
| `ssap://com.webos.service.nlpmanager/tips` | `luna://com.webos.service.nlpmanager/tips` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.nlpmanager/tipsCategory` | `luna://com.webos.service.nlpmanager/tipsCategory` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.nlpmanager/cancel` | `luna://com.webos.service.nlpmanager/cancel` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.nlpmanager/searchMore` | `luna://com.webos.service.nlpmanager/searchMore` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.nlpmanager/listDynamicCategory` | `luna://com.webos.service.nlpmanager/listDynamicCategory` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.nlpmanager/getAllTips` | `luna://com.webos.service.nlpmanager/getAllTips` | SECURE_READ_TV_PROGRAM_INFO,READ_TV_PROGRAM_INFO |
| `ssap://com.webos.service.panelcontroller/setScreenOnOff` | `luna://com.webos.service.panelcontroller/setScreenOnOff` | SECURE_CONTROL_TV_SCREEN,CONTROL_TV_SCREEN |
| `ssap://com.webos.service.panelcontroller/getPanelResolution` | `luna://com.webos.service.panelcontroller/getPanelResolution` | READ_SETTINGS |
| `ssap://com.webos.service.pushclient/getStatus` | `luna://com.webos.service.pushclient/getStatus` | SECURE_ACCESS_PUSH,ACCESS_PUSH |
| `ssap://com.webos.service.pushclient/registerService` | `luna://com.webos.service.pushclient/registerService` | SECURE_ACCESS_PUSH,ACCESS_PUSH |
| `ssap://com.webos.service.pushclient/subscribeToTopics` | `luna://com.webos.service.pushclient/subscribeToTopics` | SECURE_ACCESS_PUSH,ACCESS_PUSH |
| `ssap://com.webos.service.reclistmgr.list/getRecordFileList` | `luna://com.webos.service.reclistmgr.list/getRecordFileList` | READ_RECORDING_LIST |
| `ssap://com.webos.service.reclistmgr.list/deleteRecordFile` | `luna://com.webos.service.reclistmgr.list/deleteRecordFile` | WRITE_RECORDING_LIST |
| `ssap://com.webos.service.rollingscreen/changeView` | `luna://com.webos.service.rollingscreen/changeView` | SECURE_CONTROL_TV_SCREEN,CONTROL_TV_SCREEN |
| `ssap://com.webos.service.rollingscreen/getViewState` | `luna://com.webos.service.rollingscreen/getViewState` | SECURE_CONTROL_TV_SCREEN,CONTROL_TV_SCREEN |
| `ssap://com.webos.service.rollingscreen/pressUpDown` | `luna://com.webos.service.rollingscreen/pressUpDown` | SECURE_CONTROL_TV_SCREEN,CONTROL_TV_SCREEN |
| `ssap://com.webos.service.sdx/getHttpHeaderForServiceRequest` | `luna://com.webos.service.sdx/getHttpHeaderForServiceRequest` | READ_LGE_SDX |
| `ssap://com.webos.service.sdx/getDeviceAuthenticationStatus` | `luna://com.webos.service.sdx/getDeviceAuthenticationStatus` | READ_LGE_SDX |
| `ssap://com.webos.service.sdx/send` | `luna://com.webos.service.sdx/send` | READ_LGE_SDX |
| `ssap://com.webos.service.sdx/getEulaDownloadStatus` | `luna://com.webos.service.sdx/getEulaDownloadStatus` | READ_LGE_SDX |
| `ssap://com.webos.service.sdx/requestEulaDownload` | `luna://com.webos.service.sdx/requestEulaDownload` | READ_LGE_SDX |
| `ssap://com.webos.service.secondscreen.gateway/test/getTime` | `luna://com.webos.service.secondscreen.gateway/test/getTime` | TEST_OPEN |
| `ssap://com.webos.service.secondscreen.gateway/test/protected` | `luna://com.webos.service.secondscreen.gateway/test/protected` | TEST_PROTECTED |
| `ssap://com.webos.service.secondscreen.gateway/test/secure` | `luna://com.webos.service.secondscreen.gateway/test/secure` | TEST_SECURE |
| `ssap://com.webos.service.secondscreen.gateway/getServiceList` | `luna://com.webos.service.secondscreen.gateway/getServiceList` |  |
| `ssap://com.webos.service.secondscreen.gateway/pairing/setPin` | `luna://com.webos.service.secondscreen.gateway/pairing/setPin` |  |
| `ssap://com.webos.service.secondscreen.gateway/app2app/connectToApp` | `luna://com.webos.service.secondscreen.gateway/app2app/connectToApp` | APP_TO_APP |
| `ssap://com.webos.service.secondscreen.gateway/getHostMessage` | `luna://com.webos.service.secondscreen.gateway/getHostMessage` | APP_TO_APP |
| `ssap://com.webos.service.secondscreen.gateway/getPowerState` | `luna://com.webos.service.secondscreen.gateway/getPowerState` | READ_SETTINGS |
| `ssap://com.webos.service.secondscreen.gateway/weeCustom/requestAction` | `luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction` | WRITE_WEECUSTOM |
| `ssap://com.webos.service.secondscreen.gateway/weeCustom/getResponse` | `luna://com.webos.service.secondscreen.gateway/weeCustom/getResponse` | WRITE_WEECUSTOM |
| `ssap://com.webos.service.sm/crypto/decryptFile` | `luna://com.webos.service.sm/crypto/decryptFile` | ACCESS_STORAGE |
| `ssap://com.webos.service.soundshare/getExecutableStatus` | `luna://com.webos.service.soundshare/getExecutableStatus` | CONTROL_AUDIO |
| `ssap://com.webos.service.soundshare/getStreamOutStatus` | `luna://com.webos.service.soundshare/getStreamOutStatus` | CONTROL_AUDIO |
| `ssap://com.webos.service.soundshare/startStreamOut` | `luna://com.webos.service.soundshare/startStreamOut` | CONTROL_AUDIO |
| `ssap://com.webos.service.soundshare/stopStreamOut` | `luna://com.webos.service.soundshare/stopStreamOut` | CONTROL_AUDIO |
| `ssap://com.webos.service.soundshare/setPcmBuffer` | `luna://com.webos.service.soundshare/setPcmBuffer` | CONTROL_AUDIO |
| `ssap://com.webos.service.soundshare/getStreamInStatus` | `luna://com.webos.service.soundshare/getStreamInStatus` | CONTROL_AUDIO |
| `ssap://com.webos.service.soundshare/startStreamIn` | `luna://com.webos.service.soundshare/startStreamIn` | CONTROL_AUDIO |
| `ssap://com.webos.service.soundshare/stopStreamIn` | `luna://com.webos.service.soundshare/stopStreamIn` | CONTROL_AUDIO |
| `ssap://com.webos.service.systemprofile/getProfiles` | `luna://com.webos.service.systemprofile/getProfiles` | READ_SETTINGS |
| `ssap://com.webos.service.tvReservationAgent/getRepeatedList` | `luna://com.webos.service.tvReservationAgent/getRepeatedList` | READ_RECORDING_SCHEDULE |
| `ssap://com.webos.service.tvReservationAgent/watch/fullEpgProgram/add` | `luna://com.webos.service.tvReservationAgent/watch/fullEpgProgram/add` | READ_RECORDING_SCHEDULE |
| `ssap://com.webos.service.tvReservationAgent/watch/epgProgram/add` | `luna://com.webos.service.tvReservationAgent/watch/epgProgram/add` | SECURE_WRITE_RECORDING_SCHEDULE,WRITE_RECORDING_SCHEDULE |
| `ssap://com.webos.service.tvReservationAgent/cancel` | `luna://com.webos.service.tvReservationAgent/cancel` | SECURE_WRITE_RECORDING_SCHEDULE,WRITE_RECORDING_SCHEDULE |
| `ssap://com.webos.service.tvReservationAgent/delete` | `luna://com.webos.service.tvReservationAgent/delete` | SECURE_WRITE_RECORDING_SCHEDULE,WRITE_RECORDING_SCHEDULE |
| `ssap://com.webos.service.tvpower/power/turnOnScreen` | `luna://com.webos.service.tvpower/power/turnOnScreen` | CONTROL_TV_SCREEN |
| `ssap://com.webos.service.tvpower/power/turnOffScreen` | `luna://com.webos.service.tvpower/power/turnOffScreen` | CONTROL_TV_SCREEN |
| `ssap://com.webos.service.tvpower/power/getPowerState` | `luna://com.webos.service.tvpower/power/getPowerState` | CONTROL_POWER |
| `ssap://com.webos.service.tvpower/power/getPowerOnReason` | `luna://com.webos.service.tvpower/power/getPowerOnReason` | CONTROL_POWER |
| `ssap://com.webos.service.tvpower/power/shutDown` | `luna://com.webos.service.tvpower/power/shutDown` | CONTROL_POWER |
| `ssap://com.webos.service.tvpower/power/cancelPowerOff` | `luna://com.webos.service.tvpower/power/cancelPowerOff` | CONTROL_POWER |
| `ssap://com.webos.service.tvpower/power2/turnOnAoD` | `luna://com.webos.service.tvpower/power2/turnOnAoD` | CONTROL_POWER |
| `ssap://com.webos.service.tvpower/power2/getPowerState` | `luna://com.webos.service.tvpower/power2/getPowerState` | CONTROL_POWER |
| `ssap://com.webos.service.update/getCurrentSWInformation` | `luna://com.webos.service.update/getCurrentSWInformation` | READ_UPDATE_INFO |
| `ssap://com.webos.service.update/startUpdateByRemoteApp` | `luna://com.webos.service.update/startUpdateByRemoteApp` | UPDATE_FROM_REMOTE_APP |
| `ssap://com.webos.service.update/getProgress` | `luna://com.webos.service.update/getProgress` | UPDATE_FROM_REMOTE_APP |
| `ssap://com.webos.service.update/getStatus` | `luna://com.webos.service.update/getStatus` | UPDATE_FROM_REMOTE_APP |
| `ssap://com.webos.service.utp.channel/setChannelGroup` | `luna://com.webos.service.utp.channel/setChannelGroup` | SECURE_CONTROL_CHANNEL_GROUP,CONTROL_CHANNEL_GROUP |
| `ssap://com.webos.service.utp.channel/getChannelGroupList` | `luna://com.webos.service.utp.channel/getChannelGroupList` | SECURE_CONTROL_CHANNEL_GROUP,CONTROL_CHANNEL_GROUP |
| `ssap://com.webos.service.utp.channel/getChannelModeList` | `luna://com.webos.service.utp.channel/getChannelModeList` | SECURE_READ_TV_CHANNEL_LIST,READ_TV_CHANNEL_LIST |
| `ssap://com.webos.service.utp.channel/scan/stopAutoScan` | `luna://com.webos.service.utp.channel/scan/stopAutoScan` | SECURE_SCAN_TV_CHANNELS,SCAN_TV_CHANNELS |
| `ssap://com.webos.service.utp.channel/scan/startAutoScan` | `luna://com.webos.service.utp.channel/scan/startAutoScan` | SECURE_SCAN_TV_CHANNELS,SCAN_TV_CHANNELS |
| `ssap://com.webos.service.utp.channel/scan/skipAutoScan` | `luna://com.webos.service.utp.channel/scan/skipAutoScan` | SECURE_SCAN_TV_CHANNELS,SCAN_TV_CHANNELS |
| `ssap://com.webos.service.utp.channel/scan/getAutoScanStatus` | `luna://com.webos.service.utp.channel/scan/getAutoScanStatus` | SECURE_SCAN_TV_CHANNELS,SCAN_TV_CHANNELS |
| `ssap://com.webos.service.utp.channel/scan/getAutoScanProgress` | `luna://com.webos.service.utp.channel/scan/getAutoScanProgress` | SECURE_SCAN_TV_CHANNELS,SCAN_TV_CHANNELS |
| `ssap://com.webos.service.utp.dvr/record/getRecordableDuration` | `luna://com.webos.service.utp.dvr/record/getRecordableDuration` | READ_RECORDING_STATE |
| `ssap://com.webos.service.utp.dvr/record/getRecordingRemainDuration` | `luna://com.webos.service.utp.dvr/record/getRecordingRemainDuration` | READ_RECORDING_STATE |
| `ssap://com.webos.service.utp.dvr/record/startProgramRecord` | `luna://com.webos.service.utp.dvr/record/startProgramRecord` | SECURE_WRITE_RECORDING_SCHEDULE,WRITE_RECORDING_SCHEDULE |
| `ssap://com.webos.service.utp.dvr/record/isRecording` | `luna://com.webos.service.utp.dvr/record/isRecording` | CONTROL_RECORDING |
| `ssap://com.webos.service.utp.dvr/record/stopRecord` | `luna://com.webos.service.utp.dvr/record/stopRecord` | CONTROL_RECORDING |
| `ssap://com.webos.service.voiceconductor/recognizeIntentByText` | `luna://com.webos.service.voiceconductor/recognizeIntentByText` | CONTROL_VOICE |
| `ssap://com.webos.service.voiceconductor/setInputEvent` | `luna://com.webos.service.voiceconductor/setInputEvent` | CONTROL_VOICE |
| `ssap://com.webos.service.voiceinput/respondEvent` | `luna://com.webos.service.voiceinput/respondEvent` | CONTROL_VOICE |
| `ssap://com.webos.service.wifi/p2p/getstate` | `luna://com.webos.service.wifi/p2p/getstate` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.service.wirelessavcontroller/getStatus` | `luna://com.webos.service.wirelessavcontroller/getStatus` | SECURE_READ_NETWORK_STATE,READ_NETWORK_STATE |
| `ssap://com.webos.surfacemanager.input/getForegroundAppKeymask` | `luna://com.webos.surfacemanager.input/getForegroundAppKeymask` | READ_LGE_TV_INPUT_EVENTS |
| `ssap://com.webos.surfacemanager/showInputPicker` | `luna://com.webos.surfacemanager/showInputPicker` | SECURE_LAUNCH,LAUNCH |
| `ssap://com.webos.surfacemanager/getForegroundVideoWindow` | `luna://com.webos.surfacemanager/getForegroundVideoWindow` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.surfacemanager/getRecentsAppList` | `luna://com.webos.surfacemanager/getRecentsAppList` | SECURE_CONTROL_DISPLAY,CONTROL_DISPLAY |
| `ssap://com.webos.universalsearch/search` | `luna://com.webos.universalsearch/search` | SEARCH |
| `ssap://com.webos.universalsearch/listPlugins` | `luna://com.webos.universalsearch/listPlugins` | SEARCH |
| `ssap://config/getConfigs` | `luna://com.webos.service.apiadapter/config/getConfigs` |  |
| `ssap://externalpq/getExternalPqData` | `luna://com.webos.service.apiadapter/externalpq/getExternalPqData` |  |
| `ssap://externalpq/setExternalPqData` | `luna://com.webos.service.apiadapter/externalpq/setExternalPqData` |  |
| `ssap://media.controls/play` | `luna://com.webos.service.networkinput/controls/play` |  |
| `ssap://media.controls/pause` | `luna://com.webos.service.networkinput/controls/pause` |  |
| `ssap://media.controls/stop` | `luna://com.webos.service.networkinput/controls/stop` |  |
| `ssap://media.controls/fastForward` | `luna://com.webos.service.networkinput/controls/fastForward` |  |
| `ssap://media.controls/rewind` | `luna://com.webos.service.networkinput/controls/rewind` |  |
| `ssap://media.viewer/open` | `luna://com.webos.service.apiadapter/media_viewer/open` |  |
| `ssap://media.viewer/close` | `luna://com.webos.service.apiadapter/media_viewer/close` |  |
| `ssap://pairing/setPin` | `luna://com.webos.service.secondscreen.gateway/pairing/setPin` |  |
| `ssap://settings/getSystemSettings` | `luna://com.webos.service.apiadapter/settings/getSystemSettings` |  |
| `ssap://settings/getSystemSettingsHDRInfo` | `luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo` |  |
| `ssap://settings/getSystemSettingValues` | `luna://com.webos.service.apiadapter/settings/getSystemSettingValues` |  |
| `ssap://settings/getSystemSettingDesc` | `luna://com.webos.service.apiadapter/settings/getSystemSettingDesc` |  |
| `ssap://settings/setSystemSettings` | `luna://com.webos.service.apiadapter/settings/setSystemSettings` |  |
| `ssap://settings/resetSystemSettings` | `luna://com.webos.service.apiadapter/settings/resetSystemSettings` |  |
| `ssap://settings/resetSystemSettingDesc` | `luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc` |  |
| `ssap://system/getSystemInfo` | `luna://com.webos.service.apiadapter/system/getSystemInfo` |  |
| `ssap://system/getCountryInfo` | `luna://com.webos.service.apiadapter/system/getCountryInfo` |  |
| `ssap://system/turnOff` | `luna://com.webos.service.networkinput/controls/power` |  |
| `ssap://system/getHostMessage` | `luna://com.webos.service.secondscreen.gateway/getHostMessage` |  |
| `ssap://system/getPowerState` | `luna://com.webos.service.secondscreen.gateway/getPowerState` |  |
| `ssap://system/doReset` | `luna://com.webos.service.devicereset/doReset` | STB_INTERNAL_CONNECTION |
| `ssap://system.launcher/launch` | `luna://com.webos.service.apiadapter/system_launcher/launch` |  |
| `ssap://system.launcher/open` | `luna://com.webos.service.apiadapter/system_launcher/open` |  |
| `ssap://system.launcher/close` | `luna://com.webos.service.apiadapter/system_launcher/close` |  |
| `ssap://system.launcher/getAppState` | `luna://com.webos.service.apiadapter/system_launcher/getAppState` |  |
| `ssap://system.notifications/createToast` | `luna://com.webos.service.apiadapter/system_notifications/createToast` |  |
| `ssap://system.notifications/createAlert` | `luna://com.webos.service.apiadapter.pub/system_notifications/createAlert` |  |
| `ssap://system.notifications/closeToast` | `luna://com.webos.service.apiadapter/system_notifications/closeToast` |  |
| `ssap://system.notifications/closeAlert` | `luna://com.webos.service.apiadapter/system_notifications/closeAlert` |  |
| `ssap://timer/setSettings` | `luna://com.webos.service.apiadapter/timer/setSettings` |  |
| `ssap://timer/getSettings` | `luna://com.webos.service.apiadapter/timer/getSettings` |  |
| `ssap://tv/getChannelList` | `luna://com.webos.service.apiadapter/tv/getChannelList` |  |
| `ssap://tv/getTunerSettings` | `luna://com.webos.service.apiadapter/tv/getTunerSettings` |  |
| `ssap://tv/getSimilarChannelList` | `luna://com.webos.service.apiadapter/tv/getSimilarChannelList` |  |
| `ssap://tv/getCurrentChannel` | `luna://com.webos.service.apiadapter/tv/getCurrentChannel` |  |
| `ssap://tv/getChannelProgramInfo` | `luna://com.webos.service.apiadapter/tv/getChannelProgramInfo` |  |
| `ssap://tv/getChannelCurrentProgramInfo` | `luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo` |  |
| `ssap://tv/getACRAuthToken` | `luna://com.webos.service.apiadapter/tv/getACRAuthToken` |  |
| `ssap://tv/getContentState` | `luna://com.webos.service.apiadapter/tv/getContentState` |  |
| `ssap://tv/openChannel` | `luna://com.webos.service.apiadapter/tv/openChannel` |  |
| `ssap://tv/channelUp` | `luna://com.webos.service.networkinput/controls/channelUp` |  |
| `ssap://tv/channelDown` | `luna://com.webos.service.networkinput/controls/channelDown` |  |
| `ssap://tv/getExternalInputList` | `luna://com.webos.service.apiadapter/tv/getExternalInputList` |  |
| `ssap://tv/switchInput` | `luna://com.webos.service.apiadapter/tv/switchInput` |  |
| `ssap://tv/executeOneShot` | `luna://com.webos.service.apiadapter/tv/executeOneShot` |  |
| `ssap://user/setUserInfo` | `luna://com.webos.service.apiadapter/user/setUserInfo` |  |
| `ssap://user/resetUserInfo` | `luna://com.webos.service.apiadapter/user/resetUserInfo` |  |
| `ssap://user/setUserData` | `luna://com.webos.service.apiadapter/user/setUserData` |  |
| `ssap://user/resetUserData` | `luna://com.webos.service.apiadapter/user/resetUserData` |  |
| `ssap://user/getUserData` | `luna://com.webos.service.apiadapter/user/getUserData` |  |
| `ssap://user/setUserSchedule` | `luna://com.webos.service.apiadapter/user/setUserSchedule` |  |
| `ssap://user/resetUserSchedule` | `luna://com.webos.service.apiadapter/user/resetUserSchedule` |  |
| `ssap://webapp/launchWebApp` | `luna://com.webos.service.apiadapter/webapp/launchWebApp` |  |
| `ssap://webapp/isWebAppPinned` | `luna://com.webos.service.apiadapter/webapp/isWebAppPinned` |  |
| `ssap://webapp/pinWebApp` | `luna://com.webos.service.apiadapter/webapp/pinWebApp` |  |
| `ssap://webapp/removePinnedWebApp` | `luna://com.webos.service.apiadapter/webapp/removePinnedWebApp` |  |
| `ssap://webapp/connectToApp` | `luna://com.webos.service.secondscreen.gateway/app2app/connectToApp` |  |
| `ssap://webapp/closeWebApp` | `luna://com.webos.service.apiadapter/webapp/closeWebApp` |  |
| `ssap://weeCustom/requestAction` | `luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction` | WRITE_WEECUSTOM |
| `ssap://weeCustom/getResponse` | `luna://com.webos.aservice.secondscreen.gateway/weeCustom/getResponse` | WRITE_WEECUSTOM |
