# Display / Panel

212 methods.  [Back to index](../../README.md#categories)

| URI | Access | Conf | Description |
|---|---|---|---|
| [`luna://com.webos.service.avoutput/audio/connect`](../services/com.webos.service.avoutput.md#audio_connect) | public | documented | Connects audio source to audio sink. Note : In case it's already connected, will disconnect from previous sink automatically. |
| [`luna://com.webos.service.avoutput/audio/disconnect`](../services/com.webos.service.avoutput.md#audio_disconnect) | public | documented | Disconnect from audio sink. No change is done if not connected. |
| [`luna://com.webos.service.avoutput/audio/getStatus`](../services/com.webos.service.avoutput.md#audio_getstatus) | public | documented | Lists all video and audio sinks and their status. |
| [`luna://com.webos.service.avoutput/audio/mute`](../services/com.webos.service.avoutput.md#audio_mute) | public | documented | Stop/start outputting data to audio sink. This allows seamless disconnect and connect and avoids outputting invalid data while reconnection is in progress. |
| [`luna://com.webos.service.avoutput/audio/volume/down`](../services/com.webos.service.avoutput.md#audio_volume_down) | public | documented | Decreases the volume. |
| [`luna://com.webos.service.avoutput/audio/volume/set`](../services/com.webos.service.avoutput.md#audio_volume_set) | public | documented | Set volume to a numerical value. |
| [`luna://com.webos.service.avoutput/audio/volume/up`](../services/com.webos.service.avoutput.md#audio_volume_up) | public | documented | Increases the volume. |
| [`luna://com.webos.service.avoutput/video/blankVideo`](../services/com.webos.service.avoutput.md#video_blankvideo) | public | documented | Stop/start data output to video sink. This allows seamless disconnect and connect and avoids invalid data output while reconnection is in progress. |
| [`luna://com.webos.service.avoutput/video/connect`](../services/com.webos.service.avoutput.md#video_connect) | public | documented | Connects a video source to a video sink |
| [`luna://com.webos.service.avoutput/video/disconnect`](../services/com.webos.service.avoutput.md#video_disconnect) | public | documented | Disconnects video from sink. |
| [`luna://com.webos.service.avoutput/video/display/getOutputCapabilities`](../services/com.webos.service.avoutput.md#video_display_getoutputcapabilities) | public | documented | Helper method to query the set video limits |
| [`luna://com.webos.service.avoutput/video/display/setCompositing`](../services/com.webos.service.avoutput.md#video_display_setcompositing) | public | documented | Set compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video outputs simultaneously. |
| [`luna://com.webos.service.avoutput/video/display/setDisplayWindow`](../services/com.webos.service.avoutput.md#video_display_setdisplaywindow) | public | documented | Setup video output location on the screen for specified sink. Note : Video is actually placed only if setVideoMediaData has been called. Otherwise the values ar |
| [`luna://com.webos.service.avoutput/video/getStatus`](../services/com.webos.service.avoutput.md#video_getstatus) | public | documented | Lists all video sinks and their status. |
| [`luna://com.webos.service.avoutput/video/setMediaData`](../services/com.webos.service.avoutput.md#video_setmediadata) | public | documented | Sets video media data needed for playback. |
| [`luna://com.webos.service.avoutput/VideoRect`](../services/com.webos.service.avoutput.md#videorect) | unknown | documented | Object to represent the video window coordinates. |
| [`luna://com.webos.service.avoutput/VideoSize`](../services/com.webos.service.avoutput.md#videosize) | unknown | documented | Object to represent video size. |
| [`luna://com.webos.service.capture/executeOneShot`](../services/com.webos.service.capture.md#executeoneshot) | ssap | documented | Take a screenshot (SSAP alias: ssap://tv/executeOneShot) |
| [`luna://com.webos.service.multiviewcontroller/ackProcess`](../services/com.webos.service.multiviewcontroller.md#ackprocess) | public | inferred | Handles the ack process. |
| [`luna://com.webos.service.multiviewcontroller/addPreset`](../services/com.webos.service.multiviewcontroller.md#addpreset) | public | inferred | Adds the preset. ⚠️ |
| [`luna://com.webos.service.multiviewcontroller/changeAppView`](../services/com.webos.service.multiviewcontroller.md#changeappview) | public | inferred | Changes the app view. |
| [`luna://com.webos.service.multiviewcontroller/changeControlMode`](../services/com.webos.service.multiviewcontroller.md#changecontrolmode) | public | inferred | Changes the control mode. |
| [`luna://com.webos.service.multiviewcontroller/changeMode`](../services/com.webos.service.multiviewcontroller.md#changemode) | public | inferred | Changes the mode. |
| [`luna://com.webos.service.multiviewcontroller/changeSubAppPosition`](../services/com.webos.service.multiviewcontroller.md#changesubappposition) | public | inferred | Changes the sub app position. |
| [`luna://com.webos.service.multiviewcontroller/changeSubAppSize`](../services/com.webos.service.multiviewcontroller.md#changesubappsize) | public | inferred | Changes the sub app size. |
| [`luna://com.webos.service.multiviewcontroller/closeApp`](../services/com.webos.service.multiviewcontroller.md#closeapp) | public | inferred | Closes the app. |
| [`luna://com.webos.service.multiviewcontroller/closeMultiview`](../services/com.webos.service.multiviewcontroller.md#closemultiview) | public | inferred | Closes the multiview. |
| [`luna://com.webos.service.multiviewcontroller/createAppView`](../services/com.webos.service.multiviewcontroller.md#createappview) | public | inferred | Creates the app view. |
| [`luna://com.webos.service.multiviewcontroller/destroyAppView`](../services/com.webos.service.multiviewcontroller.md#destroyappview) | public | inferred | Handles the destroy app view. |
| [`luna://com.webos.service.multiviewcontroller/getAppList`](../services/com.webos.service.multiviewcontroller.md#getapplist) | public | inferred | Returns the app list. |
| [`luna://com.webos.service.multiviewcontroller/getAppListChanged`](../services/com.webos.service.multiviewcontroller.md#getapplistchanged) | public | inferred | Returns the app list changed. |
| [`luna://com.webos.service.multiviewcontroller/getAppViewStatus`](../services/com.webos.service.multiviewcontroller.md#getappviewstatus) | public | inferred | Returns the app view status. |
| [`luna://com.webos.service.multiviewcontroller/getChangeableAppList`](../services/com.webos.service.multiviewcontroller.md#getchangeableapplist) | public | inferred | Returns the changeable app list. |
| [`luna://com.webos.service.multiviewcontroller/getMainAppList`](../services/com.webos.service.multiviewcontroller.md#getmainapplist) | public | inferred | Returns the main app list. |
| [`luna://com.webos.service.multiviewcontroller/getMultiviewAppList`](../services/com.webos.service.multiviewcontroller.md#getmultiviewapplist) | public | inferred | Returns the multiview app list. |
| [`luna://com.webos.service.multiviewcontroller/getMultiviewStatus`](../services/com.webos.service.multiviewcontroller.md#getmultiviewstatus) | public | inferred | Returns the multiview status. |
| [`luna://com.webos.service.multiviewcontroller/getMultiviewSupportOption`](../services/com.webos.service.multiviewcontroller.md#getmultiviewsupportoption) | public | inferred | Returns the multiview support option. |
| [`luna://com.webos.service.multiviewcontroller/getPresetList`](../services/com.webos.service.multiviewcontroller.md#getpresetlist) | public | inferred | Returns the preset list. |
| [`luna://com.webos.service.multiviewcontroller/getRecentsList`](../services/com.webos.service.multiviewcontroller.md#getrecentslist) | public | inferred | Returns the recents list. |
| [`luna://com.webos.service.multiviewcontroller/getRestrictionStatus`](../services/com.webos.service.multiviewcontroller.md#getrestrictionstatus) | public | inferred | Returns the restriction status. |
| [`luna://com.webos.service.multiviewcontroller/getStatus`](../services/com.webos.service.multiviewcontroller.md#getstatus) | public | inferred | Returns the status. |
| [`luna://com.webos.service.multiviewcontroller/getSubAppList`](../services/com.webos.service.multiviewcontroller.md#getsubapplist) | public | inferred | Returns the sub app list. |
| [`luna://com.webos.service.multiviewcontroller/removeClient`](../services/com.webos.service.multiviewcontroller.md#removeclient) | public | inferred | Removes the client. ⚠️ |
| [`luna://com.webos.service.multiviewcontroller/removePreset`](../services/com.webos.service.multiviewcontroller.md#removepreset) | public | inferred | Removes the preset. ⚠️ |
| [`luna://com.webos.service.multiviewcontroller/setAppCloseInfo`](../services/com.webos.service.multiviewcontroller.md#setappcloseinfo) | public | inferred | Sets the app close info. |
| [`luna://com.webos.service.multiviewcontroller/setAppCoordinate`](../services/com.webos.service.multiviewcontroller.md#setappcoordinate) | public | inferred | Sets the app coordinate. |
| [`luna://com.webos.service.multiviewcontroller/setAppPipelineStatus`](../services/com.webos.service.multiviewcontroller.md#setapppipelinestatus) | public | inferred | Sets the app pipeline status. |
| [`luna://com.webos.service.multiviewcontroller/setAppViewStatus`](../services/com.webos.service.multiviewcontroller.md#setappviewstatus) | public | inferred | Sets the app view status. |
| [`luna://com.webos.service.multiviewcontroller/setInputMode`](../services/com.webos.service.multiviewcontroller.md#setinputmode) | public | inferred | Sets the input mode. |
| [`luna://com.webos.service.multiviewcontroller/setInputVolume`](../services/com.webos.service.multiviewcontroller.md#setinputvolume) | public | inferred | Sets the input volume. |
| [`luna://com.webos.service.multiviewcontroller/setMobileInfo`](../services/com.webos.service.multiviewcontroller.md#setmobileinfo) | public | inferred | Sets the mobile info. |
| [`luna://com.webos.service.multiviewcontroller/switchSyncType`](../services/com.webos.service.multiviewcontroller.md#switchsynctype) | public | inferred | Switches the sync type. |
| [`luna://com.webos.service.multiviewcontroller/test`](../services/com.webos.service.multiviewcontroller.md#test) | public | inferred | Tests the multiviewcontroller. |
| [`luna://com.webos.service.multiviewcontroller/testPopup`](../services/com.webos.service.multiviewcontroller.md#testpopup) | public | inferred | Tests the popup. |
| [`luna://com.webos.service.oledepl/getEplStatus`](../services/com.webos.service.oledepl.md#geteplstatus) | public | inferred | Returns the epl status. |
| [`luna://com.webos.service.oledepl/getFixedOSDResult`](../services/com.webos.service.oledepl.md#getfixedosdresult) | public | inferred | Returns the fixed OSD result. |
| [`luna://com.webos.service.oledepl/getGlobalStressReduction`](../services/com.webos.service.oledepl.md#getglobalstressreduction) | private | documented | OLED care read-only query |
| [`luna://com.webos.service.oledepl/getOledPanelUTT`](../services/com.webos.service.oledepl.md#getoledpanelutt) | private | documented | OLED care read-only query |
| [`luna://com.webos.service.oledepl/getPanelTemperature`](../services/com.webos.service.oledepl.md#getpaneltemperature) | private | documented | OLED care read-only query |
| [`luna://com.webos.service.oledepl/getPcScreenSaverResponse`](../services/com.webos.service.oledepl.md#getpcscreensaverresponse) | public | inferred | Returns the pc screen saver response. |
| [`luna://com.webos.service.oledepl/getPixelRefresherInfoList`](../services/com.webos.service.oledepl.md#getpixelrefresherinfolist) | private | documented | OLED care read-only query |
| [`luna://com.webos.service.oledepl/getPixelRefresherMode`](../services/com.webos.service.oledepl.md#getpixelrefreshermode) | public | inferred | Returns the pixel refresher mode. |
| [`luna://com.webos.service.oledepl/getStraStatus`](../services/com.webos.service.oledepl.md#getstrastatus) | public | inferred | Returns the stra status. |
| [`luna://com.webos.service.oledepl/getTemporalPeakControl`](../services/com.webos.service.oledepl.md#gettemporalpeakcontrol) | public | inferred | Returns the temporal peak control. |
| [`luna://com.webos.service.oledepl/isPixelRefresherCondition`](../services/com.webos.service.oledepl.md#ispixelrefreshercondition) | private | documented | Queries OLED pixel refresher condition (used by home-chooser e2e to check panel state) |
| [`luna://com.webos.service.oledepl/notifyPopupClosed`](../services/com.webos.service.oledepl.md#notifypopupclosed) | public | inferred | Notifies of the popup closed. |
| [`luna://com.webos.service.oledepl/playMusicPixelRefresher`](../services/com.webos.service.oledepl.md#playmusicpixelrefresher) | public | inferred | Plays the music pixel refresher. |
| [`luna://com.webos.service.oledepl/restoreEplCondition`](../services/com.webos.service.oledepl.md#restoreeplcondition) | public | inferred | Restores the epl condition. |
| [`luna://com.webos.service.oledepl/setEplAppInfo`](../services/com.webos.service.oledepl.md#seteplappinfo) | public | inferred | Sets the epl app info. |
| [`luna://com.webos.service.oledepl/setEplCtrl`](../services/com.webos.service.oledepl.md#seteplctrl) | public | inferred | Sets the epl ctrl. |
| [`luna://com.webos.service.oledepl/setGlobalStressReduction`](../services/com.webos.service.oledepl.md#setglobalstressreduction) | private | documented | Toggles OLED GSR (In-Start service menu option) ⚠️ |
| [`luna://com.webos.service.oledepl/setPcScreenSaverResponse`](../services/com.webos.service.oledepl.md#setpcscreensaverresponse) | public | inferred | Sets the pc screen saver response. |
| [`luna://com.webos.service.oledepl/setPixelRefresherInfoList`](../services/com.webos.service.oledepl.md#setpixelrefresherinfolist) | public | inferred | Sets the pixel refresher info list. |
| [`luna://com.webos.service.oledepl/setPixelRefresherMode`](../services/com.webos.service.oledepl.md#setpixelrefreshermode) | public | inferred | Sets the pixel refresher mode. |
| [`luna://com.webos.service.oledepl/setTemporalPeakControl`](../services/com.webos.service.oledepl.md#settemporalpeakcontrol) | private | documented | Toggles OLED TPC (In-Start service menu option) ⚠️ |
| [`luna://com.webos.service.oledepl/setTurnOnAoD`](../services/com.webos.service.oledepl.md#setturnonaod) | public | inferred | Sets the turn on ao d. |
| [`luna://com.webos.service.oledepl/testForQ`](../services/com.webos.service.oledepl.md#testforq) | public | inferred | Tests the for q. |
| [`luna://com.webos.service.panelcontroller/addOledPanelErrorLog`](../services/com.webos.service.panelcontroller.md#addoledpanelerrorlog) | public | inferred | Adds the oled panel error log. |
| [`luna://com.webos.service.panelcontroller/backupPanelUsageTime`](../services/com.webos.service.panelcontroller.md#backuppanelusagetime) | public | inferred | Backs up the panel usage time. |
| [`luna://com.webos.service.panelcontroller/getBackendChipVersion`](../services/com.webos.service.panelcontroller.md#getbackendchipversion) | public | inferred | Returns the backend chip version. |
| [`luna://com.webos.service.panelcontroller/getCurrentLedFirmwareInfo`](../services/com.webos.service.panelcontroller.md#getcurrentledfirmwareinfo) | public | inferred | Returns the current LED firmware info. |
| [`luna://com.webos.service.panelcontroller/getExternalFrcUpdateStatus`](../services/com.webos.service.panelcontroller.md#getexternalfrcupdatestatus) | public | inferred | Returns the external frc update status. |
| [`luna://com.webos.service.panelcontroller/getInputLagOptimizationStatus`](../services/com.webos.service.panelcontroller.md#getinputlagoptimizationstatus) | private | inferred | Returns the input lag optimization status. |
| [`luna://com.webos.service.panelcontroller/getManualGain`](../services/com.webos.service.panelcontroller.md#getmanualgain) | public | inferred | Returns the manual gain. |
| [`luna://com.webos.service.panelcontroller/getMirrorMode`](../services/com.webos.service.panelcontroller.md#getmirrormode) | public | inferred | Returns the mirror mode. |
| [`luna://com.webos.service.panelcontroller/getOledCellInfo`](../services/com.webos.service.panelcontroller.md#getoledcellinfo) | public | inferred | Returns the oled cell info. |
| [`luna://com.webos.service.panelcontroller/getOledPanelErrorHistoryList`](../services/com.webos.service.panelcontroller.md#getoledpanelerrorhistorylist) | public | inferred | Returns the oled panel error history list. |
| [`luna://com.webos.service.panelcontroller/getOledPanelMatching`](../services/com.webos.service.panelcontroller.md#getoledpanelmatching) | public | inferred | Returns the oled panel matching. |
| [`luna://com.webos.service.panelcontroller/getOledTconI2CCheck`](../services/com.webos.service.panelcontroller.md#getoledtconi2ccheck) | public | inferred | Returns the oled tcon i 2 c check. |
| [`luna://com.webos.service.panelcontroller/getOledTconInfo`](../services/com.webos.service.panelcontroller.md#getoledtconinfo) | public | inferred | Returns the oled tcon info. |
| [`luna://com.webos.service.panelcontroller/getPanelMakerInfo`](../services/com.webos.service.panelcontroller.md#getpanelmakerinfo) | public | inferred | Returns the panel maker info. |
| [`luna://com.webos.service.panelcontroller/getPanelResolution`](../services/com.webos.service.panelcontroller.md#getpanelresolution) | public | inferred | Returns the panel resolution. |
| [`luna://com.webos.service.panelcontroller/getPanelTconPackageVersion`](../services/com.webos.service.panelcontroller.md#getpaneltconpackageversion) | public | inferred | Returns the panel tcon package version. |
| [`luna://com.webos.service.panelcontroller/getPanelUsageTime`](../services/com.webos.service.panelcontroller.md#getpanelusagetime) | public | inferred | Returns the panel usage time. |
| [`luna://com.webos.service.panelcontroller/getProperties`](../services/com.webos.service.panelcontroller.md#getproperties) | public | inferred | Returns the properties. |
| [`luna://com.webos.service.panelcontroller/getPwmConfiguration`](../services/com.webos.service.panelcontroller.md#getpwmconfiguration) | public | inferred | Returns the pwm configuration. |
| [`luna://com.webos.service.panelcontroller/getScreenMuteStatus`](../services/com.webos.service.panelcontroller.md#getscreenmutestatus) | public | inferred | Returns the screen mute status. |
| [`luna://com.webos.service.panelcontroller/getSpreadSpectrum`](../services/com.webos.service.panelcontroller.md#getspreadspectrum) | public | inferred | Returns the spread spectrum. |
| [`luna://com.webos.service.panelcontroller/getTouchFirmwareVersion`](../services/com.webos.service.panelcontroller.md#gettouchfirmwareversion) | public | inferred | Returns the touch firmware version. |
| [`luna://com.webos.service.panelcontroller/getTscicDemuraOnOff`](../services/com.webos.service.panelcontroller.md#gettscicdemuraonoff) | public | inferred | Returns the tscic demura on off. |
| [`luna://com.webos.service.panelcontroller/getTscicStatus`](../services/com.webos.service.panelcontroller.md#gettscicstatus) | public | inferred | Returns the tscic status. |
| [`luna://com.webos.service.panelcontroller/getVACSupportStatus`](../services/com.webos.service.panelcontroller.md#getvacsupportstatus) | public | inferred | Returns the VAC support status. |
| [`luna://com.webos.service.panelcontroller/getVcom`](../services/com.webos.service.panelcontroller.md#getvcom) | public | inferred | Returns the vcom. |
| [`luna://com.webos.service.panelcontroller/getVirtualPanelMode`](../services/com.webos.service.panelcontroller.md#getvirtualpanelmode) | private | inferred | Returns the virtual panel mode. |
| [`luna://com.webos.service.panelcontroller/isModeSelectAccessible`](../services/com.webos.service.panelcontroller.md#ismodeselectaccessible) | public | inferred | Reports whether the mode select accessible is set. |
| [`luna://com.webos.service.panelcontroller/isOledScreenVisible`](../services/com.webos.service.panelcontroller.md#isoledscreenvisible) | public | inferred | Reports whether the oled screen visible is set. |
| [`luna://com.webos.service.panelcontroller/isOledTconAccessible`](../services/com.webos.service.panelcontroller.md#isoledtconaccessible) | public | inferred | Reports whether the oled tcon accessible is set. |
| [`luna://com.webos.service.panelcontroller/isPwmAccessible`](../services/com.webos.service.panelcontroller.md#ispwmaccessible) | public | inferred | Reports whether the pwm accessible is set. |
| [`luna://com.webos.service.panelcontroller/isSupportOSLB`](../services/com.webos.service.panelcontroller.md#issupportoslb) | public | inferred | Reports whether the support OSLB is set. |
| [`luna://com.webos.service.panelcontroller/isTconAccessible`](../services/com.webos.service.panelcontroller.md#istconaccessible) | public | inferred | Reports whether the tcon accessible is set. |
| [`luna://com.webos.service.panelcontroller/listLedFirmwareFile`](../services/com.webos.service.panelcontroller.md#listledfirmwarefile) | public | inferred | Lists the LED firmware file. |
| [`luna://com.webos.service.panelcontroller/resetVcom`](../services/com.webos.service.panelcontroller.md#resetvcom) | public | inferred | Resets the vcom. ⚠️ |
| [`luna://com.webos.service.panelcontroller/saveManualGain`](../services/com.webos.service.panelcontroller.md#savemanualgain) | public | inferred | Saves the manual gain. |
| [`luna://com.webos.service.panelcontroller/setAGP`](../services/com.webos.service.panelcontroller.md#setagp) | public | inferred | Sets the AGP. |
| [`luna://com.webos.service.panelcontroller/setDftPanelOutputMode`](../services/com.webos.service.panelcontroller.md#setdftpaneloutputmode) | private | inferred | Sets the dft panel output mode. |
| [`luna://com.webos.service.panelcontroller/setExternalFrcUpdateEnable`](../services/com.webos.service.panelcontroller.md#setexternalfrcupdateenable) | public | inferred | Sets the external frc update enable. |
| [`luna://com.webos.service.panelcontroller/setManualGain`](../services/com.webos.service.panelcontroller.md#setmanualgain) | public | inferred | Sets the manual gain. |
| [`luna://com.webos.service.panelcontroller/setModeSelect`](../services/com.webos.service.panelcontroller.md#setmodeselect) | public | inferred | Sets the mode select. |
| [`luna://com.webos.service.panelcontroller/setMplusMode`](../services/com.webos.service.panelcontroller.md#setmplusmode) | public | inferred | Sets the mplus mode. |
| [`luna://com.webos.service.panelcontroller/setOledDpcOnOff`](../services/com.webos.service.panelcontroller.md#setoleddpconoff) | public | inferred | Sets the oled dpc on off. |
| [`luna://com.webos.service.panelcontroller/setPanelUsageTime`](../services/com.webos.service.panelcontroller.md#setpanelusagetime) | public | inferred | Sets the panel usage time. |
| [`luna://com.webos.service.panelcontroller/setProperties`](../services/com.webos.service.panelcontroller.md#setproperties) | public | inferred | Sets the properties. |
| [`luna://com.webos.service.panelcontroller/setRepairMode`](../services/com.webos.service.panelcontroller.md#setrepairmode) | public | inferred | Sets the repair mode. |
| [`luna://com.webos.service.panelcontroller/setScreenMute`](../services/com.webos.service.panelcontroller.md#setscreenmute) | public | inferred | Sets the screen mute. |
| [`luna://com.webos.service.panelcontroller/setScreenOnOff`](../services/com.webos.service.panelcontroller.md#setscreenonoff) | ssap | documented | Toggle panel on/off (can behave differently from tvpower turnOn/OffScreen) |
| [`luna://com.webos.service.panelcontroller/setSpreadSpectrum`](../services/com.webos.service.panelcontroller.md#setspreadspectrum) | public | inferred | Sets the spread spectrum. |
| [`luna://com.webos.service.panelcontroller/setTscicDemuraOnOff`](../services/com.webos.service.panelcontroller.md#settscicdemuraonoff) | public | inferred | Sets the tscic demura on off. |
| [`luna://com.webos.service.panelcontroller/setVACActive`](../services/com.webos.service.panelcontroller.md#setvacactive) | public | inferred | Sets the VAC active. |
| [`luna://com.webos.service.panelcontroller/setVcom`](../services/com.webos.service.panelcontroller.md#setvcom) | public | inferred | Sets the vcom. |
| [`luna://com.webos.service.panelcontroller/setVcomVideoProperty`](../services/com.webos.service.panelcontroller.md#setvcomvideoproperty) | public | inferred | Sets the vcom video property. |
| [`luna://com.webos.service.panelcontroller/setVirtualPanelMode`](../services/com.webos.service.panelcontroller.md#setvirtualpanelmode) | private | inferred | Sets the virtual panel mode. |
| [`luna://com.webos.service.panelcontroller/swapExternalChipImage`](../services/com.webos.service.panelcontroller.md#swapexternalchipimage) | public | inferred | Handles the swap external chip image. |
| [`luna://com.webos.service.panelcontroller/updateExternalChipImage`](../services/com.webos.service.panelcontroller.md#updateexternalchipimage) | public | inferred | Updates the external chip image. |
| [`luna://com.webos.service.panelcontroller/updateLLsDBbyScript`](../services/com.webos.service.panelcontroller.md#updatellsdbbyscript) | public | inferred | Updates the l ls d bby script. |
| [`luna://com.webos.service.panelcontroller/updateTouchFirmware`](../services/com.webos.service.panelcontroller.md#updatetouchfirmware) | public | inferred | Updates the touch firmware. ⚠️ |
| [`luna://com.webos.service.rollingscreen/adjustZeroPositionAdjustment`](../services/com.webos.service.rollingscreen.md#adjustzeropositionadjustment) | public | inferred | Adjusts the zero position adjustment. |
| [`luna://com.webos.service.rollingscreen/changeCurve`](../services/com.webos.service.rollingscreen.md#changecurve) | private | documented | Select curve preset on bendable/Flex display (e.g. LG OLED Flex) |
| [`luna://com.webos.service.rollingscreen/changeShade`](../services/com.webos.service.rollingscreen.md#changeshade) | public | inferred | Changes the shade. |
| [`luna://com.webos.service.rollingscreen/changeView`](../services/com.webos.service.rollingscreen.md#changeview) | public | inferred | Changes the view. |
| [`luna://com.webos.service.rollingscreen/getAutoRollingTestMode`](../services/com.webos.service.rollingscreen.md#getautorollingtestmode) | public | inferred | Returns the auto rolling test mode. |
| [`luna://com.webos.service.rollingscreen/getCurveState`](../services/com.webos.service.rollingscreen.md#getcurvestate) | public | inferred | Returns the curve state. |
| [`luna://com.webos.service.rollingscreen/getDebugPathMode`](../services/com.webos.service.rollingscreen.md#getdebugpathmode) | public | inferred | Returns the debug path mode. |
| [`luna://com.webos.service.rollingscreen/getMotorDeviceStatus`](../services/com.webos.service.rollingscreen.md#getmotordevicestatus) | public | inferred | Returns the motor device status. |
| [`luna://com.webos.service.rollingscreen/getPartialViewPositionOffset`](../services/com.webos.service.rollingscreen.md#getpartialviewpositionoffset) | public | inferred | Returns the partial view position offset. |
| [`luna://com.webos.service.rollingscreen/getRollingAdjMode`](../services/com.webos.service.rollingscreen.md#getrollingadjmode) | public | inferred | Returns the rolling adj mode. |
| [`luna://com.webos.service.rollingscreen/getRollingCount`](../services/com.webos.service.rollingscreen.md#getrollingcount) | public | inferred | Returns the rolling count. |
| [`luna://com.webos.service.rollingscreen/getShadeState`](../services/com.webos.service.rollingscreen.md#getshadestate) | public | inferred | Returns the shade state. |
| [`luna://com.webos.service.rollingscreen/getViewState`](../services/com.webos.service.rollingscreen.md#getviewstate) | public | inferred | Returns the view state. |
| [`luna://com.webos.service.rollingscreen/pressUpDown`](../services/com.webos.service.rollingscreen.md#pressupdown) | public | inferred | Handles the press up down. |
| [`luna://com.webos.service.rollingscreen/registerSyncTransition`](../services/com.webos.service.rollingscreen.md#registersynctransition) | public | inferred | Registers the sync transition. |
| [`luna://com.webos.service.rollingscreen/responseSyncTransition`](../services/com.webos.service.rollingscreen.md#responsesynctransition) | public | inferred | Handles the response sync transition. |
| [`luna://com.webos.service.rollingscreen/setAutoRollingTest`](../services/com.webos.service.rollingscreen.md#setautorollingtest) | public | inferred | Sets the auto rolling test. |
| [`luna://com.webos.service.rollingscreen/setDebugPath`](../services/com.webos.service.rollingscreen.md#setdebugpath) | public | inferred | Sets the debug path. |
| [`luna://com.webos.service.rollingscreen/setPartialViewPositionOffset`](../services/com.webos.service.rollingscreen.md#setpartialviewpositionoffset) | public | inferred | Sets the partial view position offset. |
| [`luna://com.webos.service.rollingscreen/setRollingAdjMode`](../services/com.webos.service.rollingscreen.md#setrollingadjmode) | public | inferred | Sets the rolling adj mode. |
| [`luna://com.webos.service.rollingscreen/testLocalization`](../services/com.webos.service.rollingscreen.md#testlocalization) | public | inferred | Tests the localization. |
| [`luna://com.webos.service.rollingscreen/testMotorDeviceAbnormal`](../services/com.webos.service.rollingscreen.md#testmotordeviceabnormal) | public | inferred | Tests the motor device abnormal. |
| [`luna://com.webos.service.rollingscreen/updateCurvature`](../services/com.webos.service.rollingscreen.md#updatecurvature) | private | documented | Adjust the curvature percentage of a curve preset |
| [`luna://com.webos.service.rollingscreen/updateMotorDeviceStatus`](../services/com.webos.service.rollingscreen.md#updatemotordevicestatus) | public | inferred | Updates the motor device status. |
| [`luna://com.webos.service.screenrotation/multiviewApp`](../services/com.webos.service.screenrotation.md#multiviewapp) | private | inferred | Handles the multiview app. |
| [`luna://com.webos.service.tv.capture/executeOneShot`](../services/com.webos.service.tv.capture.md#executeoneshot) | private | documented | Legacy screenshot service name |
| [`luna://com.webos.service.tv.display/get3DStatus`](../services/com.webos.service.tv.display.md#get3dstatus) | ssap | documented | Get 3D status |
| [`luna://com.webos.service.tv.display/getLightSensorData`](../services/com.webos.service.tv.display.md#getlightsensordata) | private | documented | Reads the ambient light sensor data |
| [`luna://com.webos.service.tv.display/requestClearPanelNoise`](../services/com.webos.service.tv.display.md#requestclearpanelnoise) | private | documented | OLED pixel refresh scheduling ⚠️ |
| [`luna://com.webos.service.tv.display/set3DOff`](../services/com.webos.service.tv.display.md#set3doff) | ssap | documented | Turn 3D mode off |
| [`luna://com.webos.service.tv.display/set3DOn`](../services/com.webos.service.tv.display.md#set3don) | ssap | documented | Turn 3D mode on |
| [`luna://com.webos.service.tv.power/turnOffScreen`](../services/com.webos.service.tv.power.md#turnoffscreen) | ssap | documented | Blank the panel (legacy, webOS 4.0 path) |
| [`luna://com.webos.service.tv.power/turnOnScreen`](../services/com.webos.service.tv.power.md#turnonscreen) | ssap | documented | Unblank the panel (legacy, webOS 4.0 path) |
| [`luna://com.webos.service.tvpower/power/registerScreenSaverRequest`](../services/com.webos.service.tvpower.md#power_registerscreensaverrequest) | private | documented | Subscription: LG asks before starting its screensaver; the subscriber replies via responseScreenSaverRequest |
| [`luna://com.webos.service.tvpower/power/responseScreenSaverRequest`](../services/com.webos.service.tvpower.md#power_responsescreensaverrequest) | private | documented | Answers a screensaver request |
| [`luna://com.webos.service.tvpower/power/turnOffScreen`](../services/com.webos.service.tvpower.md#power_turnoffscreen) | ssap | documented | Blank the panel (screen off) while keeping the TV powered |
| [`luna://com.webos.service.tvpower/power/turnOnScreen`](../services/com.webos.service.tvpower.md#power_turnonscreen) | ssap | documented | Unblank the panel |
| [`luna://com.webos.service.tvpower/power/turnOnScreenSaver`](../services/com.webos.service.tvpower.md#power_turnonscreensaver) | private | documented | Starts the LG screensaver now |
| [`luna://com.webos.service.tvpower/power2/turnOffScreen`](../services/com.webos.service.tvpower.md#power2_turnoffscreen) | private | documented | Alternate screen-off path tried as fallback |
| [`luna://com.webos.service.videooutput/blankVideo`](../services/com.webos.service.videooutput.md#blankvideo) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.service.videooutput/ComposeOrder`](../services/com.webos.service.videooutput.md#composeorder) | unknown | documented | Object to represent compositing parameters for the video sinks. |
| [`luna://com.webos.service.videooutput/connect`](../services/com.webos.service.videooutput.md#connect) | public | documented | Connects a video source to a video sink |
| [`luna://com.webos.service.videooutput/disconnect`](../services/com.webos.service.videooutput.md#disconnect) | public | documented | Disconnects video from sink. |
| [`luna://com.webos.service.videooutput/display/debugScalerStatus`](../services/com.webos.service.videooutput.md#display_debugscalerstatus) | public | inferred | Handles the debug scaler status (display) |
| [`luna://com.webos.service.videooutput/display/getApplyDoneWindowRegion`](../services/com.webos.service.videooutput.md#display_getapplydonewindowregion) | public | inferred | Returns the apply done window region (display) |
| [`luna://com.webos.service.videooutput/display/getOutputCapabilities`](../services/com.webos.service.videooutput.md#display_getoutputcapabilities) | public | documented | Helper method to query the set video limits |
| [`luna://com.webos.service.videooutput/display/getParam`](../services/com.webos.service.videooutput.md#display_getparam) | public | documented | Gets information of parameters for video sinks to render video frames |
| [`luna://com.webos.service.videooutput/display/getSupportedResolution`](../services/com.webos.service.videooutput.md#display_getsupportedresolution) | public | inferred | Returns the supported resolution (display) |
| [`luna://com.webos.service.videooutput/display/getSupportedResolutions`](../services/com.webos.service.videooutput.md#display_getsupportedresolutions) | private | inferred | Returns the supported resolutions (display) |
| [`luna://com.webos.service.videooutput/display/getVideoLimits`](../services/com.webos.service.videooutput.md#display_getvideolimits) | public | inferred | Returns the video limits (display) |
| [`luna://com.webos.service.videooutput/display/requestVideoDelay`](../services/com.webos.service.videooutput.md#display_requestvideodelay) | public | inferred | Requests the video delay (display) |
| [`luna://com.webos.service.videooutput/display/setBBD`](../services/com.webos.service.videooutput.md#display_setbbd) | public | inferred | Sets the BBD (display) |
| [`luna://com.webos.service.videooutput/display/setCompositing`](../services/com.webos.service.videooutput.md#display_setcompositing) | public | documented | Sets compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video outputs simultaneously |
| [`luna://com.webos.service.videooutput/display/setDisplayResolution`](../services/com.webos.service.videooutput.md#display_setdisplayresolution) | public | inferred | Sets the display resolution (display) |
| [`luna://com.webos.service.videooutput/display/setDisplayScreen`](../services/com.webos.service.videooutput.md#display_setdisplayscreen) | public | inferred | Sets the display screen (display) |
| [`luna://com.webos.service.videooutput/display/setDisplayWindow`](../services/com.webos.service.videooutput.md#display_setdisplaywindow) | public | documented | Setup video output location on the screen for specified sink. |
| [`luna://com.webos.service.videooutput/display/setDisplayWindowProperty`](../services/com.webos.service.videooutput.md#display_setdisplaywindowproperty) | public | inferred | Sets the display window property (display) |
| [`luna://com.webos.service.videooutput/display/setFrameDelay`](../services/com.webos.service.videooutput.md#display_setframedelay) | private | inferred | Sets the frame delay (display) |
| [`luna://com.webos.service.videooutput/display/setNMRM`](../services/com.webos.service.videooutput.md#display_setnmrm) | public | inferred | Sets the NMRM (display) |
| [`luna://com.webos.service.videooutput/display/setParam`](../services/com.webos.service.videooutput.md#display_setparam) | public | inferred | Sets the param (display) |
| [`luna://com.webos.service.videooutput/display/setReportBspError`](../services/com.webos.service.videooutput.md#display_setreportbsperror) | public | inferred | Sets the report bsp error (display) |
| [`luna://com.webos.service.videooutput/getStatus`](../services/com.webos.service.videooutput.md#getstatus) | public | documented | Lists all video sinks and their status. |
| [`luna://com.webos.service.videooutput/orbit/debug`](../services/com.webos.service.videooutput.md#orbit_debug) | public | inferred | Handles the debug (orbit) |
| [`luna://com.webos.service.videooutput/Planes`](../services/com.webos.service.videooutput.md#planes) | unknown | documented | Object to represent video planes and available size of scaling. |
| [`luna://com.webos.service.videooutput/register`](../services/com.webos.service.videooutput.md#register) | public | documented | Registers pipeline ID to videooutputd. Note: If this API is required to be called, make sure it is called before the connect API call. |
| [`luna://com.webos.service.videooutput/setVideoData`](../services/com.webos.service.videooutput.md#setvideodata) | public | documented | Sets video data needed for playback. |
| [`luna://com.webos.service.videooutput/unregister`](../services/com.webos.service.videooutput.md#unregister) | public | documented | Unregisters pipeline ID from videooutputd. |
| [`luna://com.webos.service.videooutput/Video`](../services/com.webos.service.videooutput.md#video) | unknown | documented | Object to represent the status of video sinks. |
| [`luna://com.webos.service.videooutput/VideoRect`](../services/com.webos.service.videooutput.md#videorect) | unknown | documented | Object to represent the video window coordinates. |
| [`luna://com.webos.service.videooutput/VideoSize`](../services/com.webos.service.videooutput.md#videosize) | unknown | documented | Object to represent video size. |
| [`luna://com.webos.surfacemanager/captureCompositorOutput`](../services/com.webos.surfacemanager.md#capturecompositoroutput) | public | documented | Takes a screenshot of the content that the compositor generates. The content can be either a frame that contains the graphics composition result or an applicati |
| [`luna://com.webos.surfacemanager/closeByAppId`](../services/com.webos.surfacemanager.md#closebyappid) | public | documented | Close an application's surface with given appId. In most cases, closing the surface leads the application to quit. But with this method, the compositor doesn't  |
| [`luna://com.webos.surfacemanager/foregroundAppInfo`](../services/com.webos.surfacemanager.md#foregroundappinfo) | unknown | documented | Provides information about a surface that is shown in the foreground. |
| [`luna://com.webos.surfacemanager/getAppMirroring`](../services/com.webos.surfacemanager.md#getappmirroring) | public | documented | Gets the status of the app mirroring. |
| [`luna://com.webos.surfacemanager/getForegroundAppInfo`](../services/com.webos.surfacemanager.md#getforegroundappinfo) | public | documented | Provides the list of applications that are currently visible in the foreground. Note: This is a private method that can be used by SAM only. For public use, ref |
| [`luna://com.webos.surfacemanager/mirroringInfo`](../services/com.webos.surfacemanager.md#mirroringinfo) | unknown | documented | Indicates mirroring status of each display. |
| [`luna://com.webos.surfacemanager/setAppMirroring`](../services/com.webos.surfacemanager.md#setappmirroring) | public | documented | Starts or stops app mirroring for a given display pair. |
