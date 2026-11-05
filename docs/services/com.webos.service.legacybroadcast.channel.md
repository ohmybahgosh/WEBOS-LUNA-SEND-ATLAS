# `com.webos.service.legacybroadcast.channel`

Legacy broadcast channel service: large API for channel tuning, scanning, and management, conditional access (ACAS/BCAS), CI/CAM module control, and barker/message channels. _(inferred from the service's methods)_

360 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`acas/getAutomaticDisplay`](#acas_getautomaticdisplay) | private |  | tv-broadcast | inferred | Returns the automatic display (acas) |
| [`acas/getModuleId`](#acas_getmoduleid) | private |  | tv-broadcast | inferred | Returns the module ID (acas) |
| [`acas/getModuleInfo`](#acas_getmoduleinfo) | private |  | tv-broadcast | inferred | Returns the module info (acas) |
| [`bcas/getAutomaticDisplay`](#bcas_getautomaticdisplay) | private |  | tv-broadcast | inferred | Returns the automatic display (bcas) |
| [`bcas/getCard`](#bcas_getcard) | private |  | tv-broadcast | inferred | Returns the card (bcas) |
| [`bcas/getCardId`](#bcas_getcardid) | private |  | tv-broadcast | inferred | Returns the card ID (bcas) |
| [`bcas/getEmmTimer`](#bcas_getemmtimer) | private |  | tv-broadcast | inferred | Returns the emm timer (bcas) |
| [`bcas/getPayChannelGuide`](#bcas_getpaychannelguide) | private |  | tv-broadcast | inferred | Returns the pay channel guide (bcas) |
| [`bcas/setEmmTimerChannel`](#bcas_setemmtimerchannel) | private |  | tv-broadcast | inferred | Sets the emm timer channel (bcas) |
| [`bcas/stopEmmTimerChannel`](#bcas_stopemmtimerchannel) | private |  | tv-broadcast | inferred | Stops the emm timer channel (bcas) |
| [`blockKeyInput`](#blockkeyinput) | private |  | tv-broadcast | inferred | Blocks the key input. |
| [`changeChannelNumber`](#changechannelnumber) | private |  | tv-broadcast | inferred | Changes the channel number. |
| [`changeChannelType`](#changechanneltype) | private |  | tv-broadcast | inferred | Changes the channel type. |
| [`changeMessageChannel`](#changemessagechannel) | private |  | tv-broadcast | inferred | Changes the message channel. |
| [`changeRecommendedChannel`](#changerecommendedchannel) | private |  | tv-broadcast | inferred | Changes the recommended channel. |
| [`checkBarkerChannel`](#checkbarkerchannel) | private |  | tv-broadcast | inferred | Checks the barker channel. |
| [`ci/camPlayerPauseRequest`](#ci_camplayerpauserequest) | private |  | tv-broadcast | inferred | Handles the CAM player pause request (CI) |
| [`ci/camPlayerResumeRequest`](#ci_camplayerresumerequest) | private |  | tv-broadcast | inferred | Handles the CAM player resume request (CI) |
| [`ci/camPlayerSeekRequest`](#ci_camplayerseekrequest) | private |  | tv-broadcast | inferred | Handles the CAM player seek request (CI) |
| [`ci/camPlayerStopRequest`](#ci_camplayerstoprequest) | private |  | tv-broadcast | inferred | Handles the CAM player stop request (CI) |
| [`ci/camPlayerVerifyRequest`](#ci_camplayerverifyrequest) | private |  | tv-broadcast | inferred | Handles the CAM player verify request (CI) |
| [`ci/checkCamUpgradeState`](#ci_checkcamupgradestate) | private |  | tv-broadcast | inferred | Checks the CAM upgrade state (CI) |
| [`ci/checkCiPlusState`](#ci_checkciplusstate) | private |  | tv-broadcast | inferred | Checks the CI plus state (CI) |
| [`ci/confirmPinCode`](#ci_confirmpincode) | private |  | tv-broadcast | inferred | Handles the confirm pin code (CI) |
| [`ci/connectSas`](#ci_connectsas) | private |  | tv-broadcast | inferred | Connects the sas (CI) |
| [`ci/fileRequest4Aux`](#ci_filerequest4aux) | private |  | tv-broadcast | inferred | Handles the file request 4 aux (CI) |
| [`ci/getCaIdList`](#ci_getcaidlist) | private |  | tv-broadcast | inferred | Returns the ca ID list (CI) |
| [`ci/getCamIsInserted`](#ci_getcamisinserted) | private |  | tv-broadcast | inferred | Returns the CAM is inserted (CI) |
| [`ci/getCamMessage`](#ci_getcammessage) | private |  | tv-broadcast | inferred | Returns the CAM message (CI) |
| [`ci/getChannelBannerControlStatus`](#ci_getchannelbannercontrolstatus) | private |  | tv-broadcast | inferred | Returns the channel banner control status (CI) |
| [`ci/getCiEcpKeyInfo`](#ci_getciecpkeyinfo) | private |  | tv-broadcast | inferred | Returns the CI ecp key info (CI) |
| [`ci/getCiEcpRandKey`](#ci_getciecprandkey) | private |  | tv-broadcast | inferred | Returns the CI ecp rand key (CI) |
| [`ci/getCiKeyInfo`](#ci_getcikeyinfo) | private |  | tv-broadcast | inferred | Returns the CI key info (CI) |
| [`ci/getCIPlusConnected`](#ci_getciplusconnected) | private |  | tv-broadcast | inferred | Returns the CI plus connected (CI) |
| [`ci/getCiRandKey`](#ci_getcirandkey) | private |  | tv-broadcast | inferred | Returns the CI rand key (CI) |
| [`ci/getCIVersion`](#ci_getciversion) | private |  | tv-broadcast | inferred | Returns the CI version (CI) |
| [`ci/getConnectionState`](#ci_getconnectionstate) | private |  | tv-broadcast | inferred | Returns the connection state (CI) |
| [`ci/getEcpControlInfo`](#ci_getecpcontrolinfo) | private |  | tv-broadcast | inferred | Returns the ecp control info (CI) |
| [`ci/getFingerPrintInfo`](#ci_getfingerprintinfo) | private |  | tv-broadcast | inferred | Returns the finger print info (CI) |
| [`ci/getHostCtlInfo`](#ci_gethostctlinfo) | private |  | tv-broadcast | inferred | Returns the host ctl info (CI) |
| [`ci/getLowSpeedConnectionStatus`](#ci_getlowspeedconnectionstatus) | private |  | tv-broadcast | inferred | Returns the low speed connection status (CI) |
| [`ci/getOperatorProfileEnabled`](#ci_getoperatorprofileenabled) | private |  | tv-broadcast | inferred | Returns the operator profile enabled (CI) |
| [`ci/getOsdtPosition`](#ci_getosdtposition) | private |  | tv-broadcast | inferred | Returns the osdt position (CI) |
| [`ci/getSasConnectionState`](#ci_getsasconnectionstate) | private |  | tv-broadcast | inferred | Returns the sas connection state (CI) |
| [`ci/getSasMessage`](#ci_getsasmessage) | private |  | tv-broadcast | inferred | Returns the sas message (CI) |
| [`ci/hostInitiatedCAMPlayRequest`](#ci_hostinitiatedcamplayrequest) | private |  | tv-broadcast | inferred | Handles the host initiated CAM play request (CI) |
| [`ci/hostPlayerRequest`](#ci_hostplayerrequest) | private |  | tv-broadcast | inferred | Handles the host player request (CI) |
| [`ci/IsAppMmiLaunched`](#ci_isappmmilaunched) | private |  | tv-broadcast | inferred | Reports whether the app mmi launched is set (CI) |
| [`ci/isChannelChangedByCamHostControl`](#ci_ischannelchangedbycamhostcontrol) | private |  | tv-broadcast | inferred | Reports whether the channel changed by CAM host control is set (CI) |
| [`ci/isCiInformationMenuEnabled`](#ci_isciinformationmenuenabled) | private |  | tv-broadcast | inferred | Reports whether the CI information menu enabled is set (CI) |
| [`ci/isEcpContentProtected`](#ci_isecpcontentprotected) | private |  | tv-broadcast | inferred | Reports whether the ecp content protected is set (CI) |
| [`ci/isOperatorProfileEnabled`](#ci_isoperatorprofileenabled) | private |  | tv-broadcast | inferred | Reports whether the operator profile enabled is set (CI) |
| [`ci/isSavePinCodeMenuEnabled`](#ci_issavepincodemenuenabled) | private |  | tv-broadcast | inferred | Reports whether the save pin code menu enabled is set (CI) |
| [`ci/isTrickModeRestrictedContent`](#ci_istrickmoderestrictedcontent) | private |  | tv-broadcast | inferred | Reports whether the trick mode restricted content is set (CI) |
| [`ci/notifyMmiOsdDisappeared`](#ci_notifymmiosddisappeared) | private |  | tv-broadcast | inferred | Notifies of the mmi OSD disappeared (CI) |
| [`ci/registerCplayerStatus`](#ci_registercplayerstatus) | private |  | tv-broadcast | inferred | Registers the cplayer status (CI) |
| [`ci/registerDomainIDCB`](#ci_registerdomainidcb) | private |  | tv-broadcast | inferred | Registers the domain IDCB (CI) |
| [`ci/registerFileRequestAckCB`](#ci_registerfilerequestackcb) | private |  | tv-broadcast | inferred | Registers the file request ack CB (CI) |
| [`ci/replyPinCode`](#ci_replypincode) | private |  | tv-broadcast | inferred | Handles the reply pin code (CI) |
| [`ci/ReqAppAbort`](#ci_reqappabort) | private |  | tv-broadcast | inferred | Handles the req app abort (CI) |
| [`ci/requestFileData`](#ci_requestfiledata) | private |  | tv-broadcast | inferred | Requests the file data (CI) |
| [`ci/requestPreviousMmiMessage`](#ci_requestpreviousmmimessage) | private |  | tv-broadcast | inferred | Requests the previous mmi message (CI) |
| [`ci/requestStartAck`](#ci_requeststartack) | private |  | tv-broadcast | inferred | Requests the start ack (CI) |
| [`ci/resetCam`](#ci_resetcam) | private |  | tv-broadcast | inferred | Resets the CAM (CI) ⚠️ |
| [`ci/saveLaunchInfo4Aux`](#ci_savelaunchinfo4aux) | private |  | tv-broadcast | inferred | Saves the launch info 4 aux (CI) |
| [`ci/searchOperator`](#ci_searchoperator) | private |  | tv-broadcast | inferred | Searches for operator (CI) |
| [`ci/selectMmiMenuIndex`](#ci_selectmmimenuindex) | private |  | tv-broadcast | inferred | Selects the mmi menu index (CI) |
| [`ci/sendHostControlAskRelease`](#ci_sendhostcontrolaskrelease) | private |  | tv-broadcast | inferred | Sends the host control ask release (CI) |
| [`ci/sendSasMessage`](#ci_sendsasmessage) | private |  | tv-broadcast | inferred | Sends the sas message (CI) |
| [`ci/setMmiEnquiry`](#ci_setmmienquiry) | private |  | tv-broadcast | inferred | Sets the mmi enquiry (CI) |
| [`ci/startCiInformationMenu`](#ci_startciinformationmenu) | private |  | tv-broadcast | inferred | Starts the CI information menu (CI) ⚠️ |
| [`ci/startOpUpdateInWarmState`](#ci_startopupdateinwarmstate) | private |  | tv-broadcast | inferred | Starts the op update in warm state (CI) |
| [`ci/startOtaUpdateInWarmState`](#ci_startotaupdateinwarmstate) | private |  | tv-broadcast | inferred | Starts the ota update in warm state (CI) |
| [`ci/startPowerDownNotice`](#ci_startpowerdownnotice) | private |  | power | inferred | Starts the power down notice (CI) |
| [`ci/stopOpUpdateInWarmState`](#ci_stopopupdateinwarmstate) | private |  | tv-broadcast | inferred | Stops the op update in warm state (CI) |
| [`ci/stopOtaUpdateInWarmState`](#ci_stopotaupdateinwarmstate) | private |  | tv-broadcast | inferred | Stops the ota update in warm state (CI) |
| [`ci/stopPowerDownNotice`](#ci_stoppowerdownnotice) | private |  | power | inferred | Stops the power down notice (CI) |
| [`ci/subscribeRequestStart`](#ci_subscriberequeststart) | private |  | tv-broadcast | inferred | Subscribes to the request start (CI) |
| [`clearChannelMap`](#clearchannelmap) | private |  | tv-broadcast | inferred | Clears the channel map. |
| [`copyDvbSatelliteChannelForAstra`](#copydvbsatellitechannelforastra) | private |  | tv-broadcast | inferred | Copies the DVB satellite channel for astra. |
| [`deleteChannel`](#deletechannel) | private |  | tv-broadcast | inferred | Deletes the channel. ⚠️ |
| [`deleteDvbSatelliteChannelForAstra`](#deletedvbsatellitechannelforastra) | private |  | tv-broadcast | inferred | Deletes the DVB satellite channel for astra. ⚠️ |
| [`exportChannelMap`](#exportchannelmap) | private |  | tv-broadcast | inferred | Exports the channel map. |
| [`extractChannelMap`](#extractchannelmap) | private |  | tv-broadcast | inferred | Extracts the channel map. |
| [`getBarkerStatus`](#getbarkerstatus) | private |  | tv-broadcast | inferred | Returns the barker status. |
| [`getCaIdListFromDvbSi`](#getcaidlistfromdvbsi) | private |  | tv-broadcast | inferred | Returns the ca ID list from DVB SI. |
| [`getChannel`](#getchannel) | private |  | tv-broadcast | inferred | Returns the channel. |
| [`getChannelGroup`](#getchannelgroup) | private |  | tv-broadcast | inferred | Returns the channel group. |
| [`getChannelGroupList`](#getchannelgrouplist) | private |  | tv-broadcast | inferred | Returns the channel group list. |
| [`getChannelListUpdateInfo`](#getchannellistupdateinfo) | private |  | tv-broadcast | inferred | Returns the channel list update info. |
| [`getChannelListUpdateStatus`](#getchannellistupdatestatus) | private |  | tv-broadcast | inferred | Returns the channel list update status. |
| [`getChannelMode`](#getchannelmode) | private |  | tv-broadcast | inferred | Returns the channel mode. |
| [`getChannelModeList`](#getchannelmodelist) | private |  | tv-broadcast | inferred | Returns the channel mode list. |
| [`getChannelShortcutKey`](#getchannelshortcutkey) | private |  | tv-broadcast | inferred | Returns the channel shortcut key. |
| [`getChannelShortcutKeyList`](#getchannelshortcutkeylist) | private |  | tv-broadcast | inferred | Returns the channel shortcut key list. |
| [`getChannelSortMode`](#getchannelsortmode) | private |  | tv-broadcast | inferred | Returns the channel sort mode. |
| [`getChannelTypeList`](#getchanneltypelist) | private |  | tv-broadcast | inferred | Returns the channel type list. |
| [`getChannelZappingList`](#getchannelzappinglist) | private |  | tv-broadcast | inferred | Returns the channel zapping list. |
| [`getChannelZappingListCount`](#getchannelzappinglistcount) | private |  | tv-broadcast | inferred | Returns the channel zapping list count. |
| [`getCurrentChannelId`](#getcurrentchannelid) | private |  | tv-broadcast | inferred | Returns the current channel ID. |
| [`getCurrentVideoView`](#getcurrentvideoview) | private |  | tv-broadcast | inferred | Returns the current video view. |
| [`getDirectTuneChannel`](#getdirecttunechannel) | private |  | tv-broadcast | inferred | Returns the direct tune channel. |
| [`getEwbsMonitoringInfo`](#getewbsmonitoringinfo) | private |  | tv-broadcast | inferred | Returns the ewbs monitoring info. |
| [`getEwsEvent`](#getewsevent) | private |  | tv-broadcast | inferred | Returns the ews event. |
| [`getLastChannelId`](#getlastchannelid) | private |  | tv-broadcast | inferred | Returns the last channel ID. |
| [`getLogoImage`](#getlogoimage) | private |  | tv-broadcast | inferred | Returns the logo image. |
| [`getPreferredRegionNId`](#getpreferredregionnid) | private |  | tv-broadcast | inferred | Returns the preferred region n ID. |
| [`getPrimaryChannelList`](#getprimarychannellist) | private |  | tv-broadcast | inferred | Returns the primary channel list. |
| [`getSatelliteBouquetList`](#getsatellitebouquetlist) | private |  | tv-broadcast | inferred | Returns the satellite bouquet list. |
| [`getScannedSatelliteList`](#getscannedsatellitelist) | private |  | tv-broadcast | inferred | Returns the scanned satellite list. |
| [`getSignalInfoStatus`](#getsignalinfostatus) | private |  | tv-broadcast | inferred | Returns the signal info status. |
| [`getSimilarChannelList`](#getsimilarchannellist) | private |  | tv-broadcast | inferred | Returns the similar channel list. |
| [`getSortedList`](#getsortedlist) | private |  | tv-broadcast | inferred | Returns the sorted list. |
| [`getSpecialServiceInfo`](#getspecialserviceinfo) | private |  | tv-broadcast | inferred | Returns the special service info. |
| [`getVideoViewList`](#getvideoviewlist) | private |  | tv-broadcast | inferred | Returns the video view list. |
| [`importChannelMap`](#importchannelmap) | private |  | tv-broadcast | inferred | Imports the channel map. |
| [`isAnalogChannelListAutoSorted`](#isanalogchannellistautosorted) | private |  | tv-broadcast | inferred | Reports whether the analog channel list auto sorted is set. |
| [`isCurrentChannelVirtualService`](#iscurrentchannelvirtualservice) | private |  | tv-broadcast | inferred | Reports whether the current channel virtual service is set. |
| [`moveChannel`](#movechannel) | private |  | tv-broadcast | inferred | Moves the channel. |
| [`notifyChannelListChanged`](#notifychannellistchanged) | private |  | tv-broadcast | inferred | Notifies of the channel list changed. |
| [`notifyRecommendedChannel`](#notifyrecommendedchannel) | private |  | tv-broadcast | inferred | Notifies of the recommended channel. |
| [`oipfdrmagent/connectDrm`](#oipfdrmagent_connectdrm) | private |  | tv-broadcast | inferred | Connects the DRM (oipfdrmagent) |
| [`oipfdrmagent/disConnectDrm`](#oipfdrmagent_disconnectdrm) | private |  | tv-broadcast | inferred | Handles the dis connect DRM (oipfdrmagent) |
| [`oipfdrmagent/getDrmIdList`](#oipfdrmagent_getdrmidlist) | private |  | tv-broadcast | inferred | Returns the DRM ID list (oipfdrmagent) |
| [`oipfdrmagent/getDrmMessageResult`](#oipfdrmagent_getdrmmessageresult) | private |  | tv-broadcast | inferred | Returns the DRM message result (oipfdrmagent) |
| [`oipfdrmagent/getDRMSystemMessage`](#oipfdrmagent_getdrmsystemmessage) | private |  | tv-broadcast | inferred | Returns the DRM system message (oipfdrmagent) |
| [`oipfdrmagent/sendDrmMessage`](#oipfdrmagent_senddrmmessage) | private |  | tv-broadcast | inferred | Sends the DRM message (oipfdrmagent) |
| [`releaseChannelBlock`](#releasechannelblock) | private |  | tv-broadcast | inferred | Releases the channel block. |
| [`releaseChannelShortcutKey`](#releasechannelshortcutkey) | private |  | tv-broadcast | inferred | Releases the channel shortcut key. |
| [`releaseChannelSkip`](#releasechannelskip) | private |  | tv-broadcast | inferred | Releases the channel skip. |
| [`releaseMessageChannel`](#releasemessagechannel) | private |  | tv-broadcast | inferred | Releases the message channel. |
| [`resetChannelShortcutKeyList`](#resetchannelshortcutkeylist) | private |  | tv-broadcast | inferred | Resets the channel shortcut key list. ⚠️ |
| [`revertChannelMap`](#revertchannelmap) | private |  | tv-broadcast | inferred | Reverts the channel map. |
| [`saveChannelList`](#savechannellist) | private |  | tv-broadcast | inferred | Saves the channel list. |
| [`scan/addDvbSatelliteTransponder`](#scan_adddvbsatellitetransponder) | private |  | tv-broadcast | inferred | Adds the DVB satellite transponder (scan) |
| [`scan/bindToBroadcast`](#scan_bindtobroadcast) | private |  | tv-broadcast | inferred | Binds the to broadcast (scan) |
| [`scan/cancelAnalogManualTuning`](#scan_cancelanalogmanualtuning) | private |  | tv-broadcast | inferred | Cancels the analog manual tuning (scan) |
| [`scan/cancelAribSatelliteSignalTest`](#scan_cancelaribsatellitesignaltest) | private |  | tv-broadcast | inferred | Cancels the arib satellite signal test (scan) |
| [`scan/cancelAribTerrestrialSignalTest`](#scan_cancelaribterrestrialsignaltest) | private |  | tv-broadcast | inferred | Cancels the arib terrestrial signal test (scan) |
| [`scan/cancelAtscManualTuning`](#scan_cancelatscmanualtuning) | private |  | tv-broadcast | inferred | Cancels the ATSC manual tuning (scan) |
| [`scan/cancelDvbCableManualTuning`](#scan_canceldvbcablemanualtuning) | private |  | tv-broadcast | inferred | Cancels the DVB cable manual tuning (scan) |
| [`scan/cancelDvbSatelliteGatheringAstraChannelLists`](#scan_canceldvbsatellitegatheringastrachannellists) | private |  | tv-broadcast | inferred | Cancels the DVB satellite gathering astra channel lists (scan) |
| [`scan/cancelDvbSatelliteGatheringTricolorRegionalLists`](#scan_canceldvbsatellitegatheringtricolorregionallists) | private |  | tv-broadcast | inferred | Cancels the DVB satellite gathering tricolor regional lists (scan) |
| [`scan/cancelDvbSatelliteM7AutoDiSEqCConfiguration`](#scan_canceldvbsatellitem7autodiseqcconfiguration) | private |  | settings | inferred | Cancels the DVB satellite m 7 auto di s eq c configuration (scan) |
| [`scan/cancelDvbSatelliteM7HomeTPSearch`](#scan_canceldvbsatellitem7hometpsearch) | private |  | tv-broadcast | inferred | Cancels the DVB satellite m 7 home TP search (scan) |
| [`scan/cancelDvbSatelliteManualTuning`](#scan_canceldvbsatellitemanualtuning) | private |  | tv-broadcast | inferred | Cancels the DVB satellite manual tuning (scan) |
| [`scan/cancelDvbTerrestrialManualTuning`](#scan_canceldvbterrestrialmanualtuning) | private |  | tv-broadcast | inferred | Cancels the DVB terrestrial manual tuning (scan) |
| [`scan/clearDvbSatelliteTkgsVisibleTransponderList`](#scan_cleardvbsatellitetkgsvisibletransponderlist) | private |  | tv-broadcast | inferred | Clears the DVB satellite tkgs visible transponder list (scan) |
| [`scan/clearOpCamChannels`](#scan_clearopcamchannels) | private |  | tv-broadcast | inferred | Clears the op CAM channels (scan) |
| [`scan/clearUKconflict`](#scan_clearukconflict) | private |  | tv-broadcast | inferred | Clears the u kconflict (scan) |
| [`scan/createDvbSatelliteConfiguration`](#scan_createdvbsatelliteconfiguration) | private |  | settings | inferred | Creates the DVB satellite configuration (scan) |
| [`scan/deleteAnalogManualTuning`](#scan_deleteanalogmanualtuning) | private |  | tv-broadcast | inferred | Deletes the analog manual tuning (scan) ⚠️ |
| [`scan/deleteAtscManualTuning`](#scan_deleteatscmanualtuning) | private |  | tv-broadcast | inferred | Deletes the ATSC manual tuning (scan) ⚠️ |
| [`scan/deleteDvbCableManualTuning`](#scan_deletedvbcablemanualtuning) | private |  | tv-broadcast | inferred | Deletes the DVB cable manual tuning (scan) ⚠️ |
| [`scan/deleteDvbSatelliteConfiguration`](#scan_deletedvbsatelliteconfiguration) | private |  | settings | inferred | Deletes the DVB satellite configuration (scan) ⚠️ |
| [`scan/deleteDvbSatelliteTransponder`](#scan_deletedvbsatellitetransponder) | private |  | tv-broadcast | inferred | Deletes the DVB satellite transponder (scan) ⚠️ |
| [`scan/deleteDvbTerrestrialManualTuning`](#scan_deletedvbterrestrialmanualtuning) | private |  | tv-broadcast | inferred | Deletes the DVB terrestrial manual tuning (scan) ⚠️ |
| [`scan/editDvbSatelliteTkgsVisibleTransponder`](#scan_editdvbsatellitetkgsvisibletransponder) | private |  | tv-broadcast | inferred | Edits the DVB satellite tkgs visible transponder (scan) |
| [`scan/editDvbSatelliteTransponder`](#scan_editdvbsatellitetransponder) | private |  | tv-broadcast | inferred | Edits the DVB satellite transponder (scan) |
| [`scan/getAnalogDefaultTuneInfo`](#scan_getanalogdefaulttuneinfo) | private |  | tv-broadcast | inferred | Returns the analog default tune info (scan) |
| [`scan/getAnalogFrequencyList`](#scan_getanalogfrequencylist) | private |  | tv-broadcast | inferred | Returns the analog frequency list (scan) |
| [`scan/getAnalogProgramNumber`](#scan_getanalogprogramnumber) | private |  | tv-broadcast | inferred | Returns the analog program number (scan) |
| [`scan/getAnalogScanInfo`](#scan_getanalogscaninfo) | private |  | tv-broadcast | inferred | Returns the analog scan info (scan) |
| [`scan/getAnalogTuningStatus`](#scan_getanalogtuningstatus) | private |  | tv-broadcast | inferred | Returns the analog tuning status (scan) |
| [`scan/getAribSatelliteScanInfo`](#scan_getaribsatellitescaninfo) | private |  | tv-broadcast | inferred | Returns the arib satellite scan info (scan) |
| [`scan/getAribSatelliteTuningStatus`](#scan_getaribsatellitetuningstatus) | private |  | tv-broadcast | inferred | Returns the arib satellite tuning status (scan) |
| [`scan/getAribTerrestrialScanInfo`](#scan_getaribterrestrialscaninfo) | private |  | tv-broadcast | inferred | Returns the arib terrestrial scan info (scan) |
| [`scan/getAribTerrestrialTuningStatus`](#scan_getaribterrestrialtuningstatus) | private |  | tv-broadcast | inferred | Returns the arib terrestrial tuning status (scan) |
| [`scan/getAtscScanInfo`](#scan_getatscscaninfo) | private |  | tv-broadcast | inferred | Returns the ATSC scan info (scan) |
| [`scan/getAtscTuningStatus`](#scan_getatsctuningstatus) | private |  | tv-broadcast | inferred | Returns the ATSC tuning status (scan) |
| [`scan/getAutoScanChannelType`](#scan_getautoscanchanneltype) | private |  | tv-broadcast | inferred | Returns the auto scan channel type (scan) |
| [`scan/getAutoScanChannelTypeOrder`](#scan_getautoscanchanneltypeorder) | private |  | tv-broadcast | inferred | Returns the auto scan channel type order (scan) |
| [`scan/getAutoScanConflictInfo`](#scan_getautoscanconflictinfo) | private |  | tv-broadcast | inferred | Returns the auto scan conflict info (scan) |
| [`scan/getAutoScanModeForStore`](#scan_getautoscanmodeforstore) | private |  | tv-broadcast | inferred | Returns the auto scan mode for store (scan) |
| [`scan/getAutoScanProgress`](#scan_getautoscanprogress) | private |  | tv-broadcast | inferred | Returns the auto scan progress (scan) |
| [`scan/getAutoScanSourceOrderStatus`](#scan_getautoscansourceorderstatus) | private |  | tv-broadcast | inferred | Returns the auto scan source order status (scan) |
| [`scan/getAutoScanSourceSearchResult`](#scan_getautoscansourcesearchresult) | private |  | tv-broadcast | inferred | Returns the auto scan source search result (scan) |
| [`scan/getAutoScanStatus`](#scan_getautoscanstatus) | private |  | tv-broadcast | inferred | Returns the auto scan status (scan) |
| [`scan/getChannelListCountToSolveConflictLcn`](#scan_getchannellistcounttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the channel list count to solve conflict lcn (scan) |
| [`scan/getChannelListCountToSolveSatCustomisedLcn`](#scan_getchannellistcounttosolvesatcustomisedlcn) | private |  | tv-broadcast | inferred | Returns the channel list count to solve sat customised lcn (scan) |
| [`scan/getChannelListToSolveConflictLcn`](#scan_getchannellisttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the channel list to solve conflict lcn (scan) |
| [`scan/getChannelListToSolveConflictLcnForLiveTV`](#scan_getchannellisttosolveconflictlcnforlivetv) | private |  | tv-broadcast | inferred | Returns the channel list to solve conflict lcn for live TV (scan) |
| [`scan/getChannelListToSolveSatCustomisedLcn`](#scan_getchannellisttosolvesatcustomisedlcn) | private |  | tv-broadcast | inferred | Returns the channel list to solve sat customised lcn (scan) |
| [`scan/getConflictLcnList`](#scan_getconflictlcnlist) | private |  | tv-broadcast | inferred | Returns the conflict lcn list (scan) |
| [`scan/getConflictLcnListForLiveTV`](#scan_getconflictlcnlistforlivetv) | private |  | tv-broadcast | inferred | Returns the conflict lcn list for live TV (scan) |
| [`scan/getDvbCableDefaultTuneInfo`](#scan_getdvbcabledefaulttuneinfo) | private |  | tv-broadcast | inferred | Returns the DVB cable default tune info (scan) |
| [`scan/getDvbCableProgramAutoUpdate`](#scan_getdvbcableprogramautoupdate) | private |  | tv-broadcast | inferred | Returns the DVB cable program auto update (scan) |
| [`scan/getDvbCableScanInfo`](#scan_getdvbcablescaninfo) | private |  | tv-broadcast | inferred | Returns the DVB cable scan info (scan) |
| [`scan/getDvbCableScanOption`](#scan_getdvbcablescanoption) | private |  | tv-broadcast | inferred | Returns the DVB cable scan option (scan) |
| [`scan/getDvbCableServiceOperator`](#scan_getdvbcableserviceoperator) | private |  | tv-broadcast | inferred | Returns the DVB cable service operator (scan) |
| [`scan/getDvbCableServiceOperatorList`](#scan_getdvbcableserviceoperatorlist) | private |  | tv-broadcast | inferred | Returns the DVB cable service operator list (scan) |
| [`scan/getDvbCableServiceOperatorListCount`](#scan_getdvbcableserviceoperatorlistcount) | private |  | tv-broadcast | inferred | Returns the DVB cable service operator list count (scan) |
| [`scan/getDvbCableSignalTestInfoStatus`](#scan_getdvbcablesignaltestinfostatus) | private |  | tv-broadcast | inferred | Returns the DVB cable signal test info status (scan) |
| [`scan/getDvbCableSignalTestStatus`](#scan_getdvbcablesignalteststatus) | private |  | tv-broadcast | inferred | Returns the DVB cable signal test status (scan) |
| [`scan/getDvbCableTuningStatus`](#scan_getdvbcabletuningstatus) | private |  | tv-broadcast | inferred | Returns the DVB cable tuning status (scan) |
| [`scan/getDvbSatellite2TunerConn`](#scan_getdvbsatellite2tunerconn) | private |  | tv-broadcast | inferred | Returns the DVB satellite 2 tuner conn (scan) |
| [`scan/getDvbSatelliteAstraChannelLists`](#scan_getdvbsatelliteastrachannellists) | private |  | tv-broadcast | inferred | Returns the DVB satellite astra channel lists (scan) |
| [`scan/getDvbSatelliteAstraChannelListsCount`](#scan_getdvbsatelliteastrachannellistscount) | private |  | tv-broadcast | inferred | Returns the DVB satellite astra channel lists count (scan) |
| [`scan/getDvbSatelliteConfigurationList`](#scan_getdvbsatelliteconfigurationlist) | private |  | settings | inferred | Returns the DVB satellite configuration list (scan) |
| [`scan/getDvbSatelliteConfigurationListCount`](#scan_getdvbsatelliteconfigurationlistcount) | private |  | settings | inferred | Returns the DVB satellite configuration list count (scan) |
| [`scan/getDvbSatelliteDiSEqCMotorSetting`](#scan_getdvbsatellitediseqcmotorsetting) | private |  | tv-broadcast | inferred | Returns the DVB satellite di s eq c motor setting (scan) |
| [`scan/getDvbSatelliteGatheringAstraChannelListsStatus`](#scan_getdvbsatellitegatheringastrachannellistsstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite gathering astra channel lists status (scan) |
| [`scan/getDvbSatelliteGatheringTricolorRegionalListsStatus`](#scan_getdvbsatellitegatheringtricolorregionallistsstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite gathering tricolor regional lists status (scan) |
| [`scan/getDvbSatelliteList`](#scan_getdvbsatellitelist) | private |  | tv-broadcast | inferred | Returns the DVB satellite list (scan) |
| [`scan/getDvbSatelliteListCount`](#scan_getdvbsatellitelistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite list count (scan) |
| [`scan/getDvbSatelliteLocationLongitude`](#scan_getdvbsatellitelocationlongitude) | private |  | tv-broadcast | inferred | Returns the DVB satellite location longitude (scan) |
| [`scan/getDvbSatelliteM7AutoDiSEqCConfigurationStatus`](#scan_getdvbsatellitem7autodiseqcconfigurationstatus) | private |  | settings | inferred | Returns the DVB satellite m 7 auto di s eq c configuration status (scan) |
| [`scan/getDvbSatelliteM7HomeTpSearchStatus`](#scan_getdvbsatellitem7hometpsearchstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 home tp search status (scan) |
| [`scan/getDvbSatelliteM7ORFRegionalProgram`](#scan_getdvbsatellitem7orfregionalprogram) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 ORF regional program (scan) |
| [`scan/getDvbSatelliteM7ORFRegionalProgramList`](#scan_getdvbsatellitem7orfregionalprogramlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 ORF regional program list (scan) |
| [`scan/getDvbSatelliteM7ORFRegionalProgramListCount`](#scan_getdvbsatellitem7orfregionalprogramlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 ORF regional program list count (scan) |
| [`scan/getDvbSatelliteM7RegionalProgramList`](#scan_getdvbsatellitem7regionalprogramlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 regional program list (scan) |
| [`scan/getDvbSatelliteM7RegionList`](#scan_getdvbsatellitem7regionlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 region list (scan) |
| [`scan/getDvbSatelliteM7SelectedRegionalProgramList`](#scan_getdvbsatellitem7selectedregionalprogramlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 selected regional program list (scan) |
| [`scan/getDvbSatelliteM7ServiceOperatorSubLists`](#scan_getdvbsatellitem7serviceoperatorsublists) | private |  | tv-broadcast | inferred | Returns the DVB satellite m 7 service operator sub lists (scan) |
| [`scan/getDvbSatelliteMotorStatus`](#scan_getdvbsatellitemotorstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite motor status (scan) |
| [`scan/getDvbSatelliteMyLatitude`](#scan_getdvbsatellitemylatitude) | private |  | tv-broadcast | inferred | Returns the DVB satellite my latitude (scan) |
| [`scan/getDvbSatelliteMyLongitude`](#scan_getdvbsatellitemylongitude) | private |  | tv-broadcast | inferred | Returns the DVB satellite my longitude (scan) |
| [`scan/getDvbSatelliteORSRegionalProgram`](#scan_getdvbsatelliteorsregionalprogram) | private |  | tv-broadcast | inferred | Returns the DVB satellite ORS regional program (scan) |
| [`scan/getDvbSatelliteORSRegionalProgramList`](#scan_getdvbsatelliteorsregionalprogramlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite ORS regional program list (scan) |
| [`scan/getDvbSatelliteORSRegionalProgramListCount`](#scan_getdvbsatelliteorsregionalprogramlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite ORS regional program list count (scan) |
| [`scan/getDvbSatelliteRegion`](#scan_getdvbsatelliteregion) | private |  | tv-broadcast | inferred | Returns the DVB satellite region (scan) |
| [`scan/getDvbSatelliteRegionList`](#scan_getdvbsatelliteregionlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite region list (scan) |
| [`scan/getDvbSatelliteRegionListCount`](#scan_getdvbsatelliteregionlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite region list count (scan) |
| [`scan/getDvbSatelliteSelectedAstraChannelList`](#scan_getdvbsatelliteselectedastrachannellist) | private |  | tv-broadcast | inferred | Returns the DVB satellite selected astra channel list (scan) |
| [`scan/getDvbSatelliteServiceOperator`](#scan_getdvbsatelliteserviceoperator) | private |  | tv-broadcast | inferred | Returns the DVB satellite service operator (scan) |
| [`scan/getDvbSatelliteServiceOperatorList`](#scan_getdvbsatelliteserviceoperatorlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite service operator list (scan) |
| [`scan/getDvbSatelliteServiceOperatorListCount`](#scan_getdvbsatelliteserviceoperatorlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite service operator list count (scan) |
| [`scan/getDvbSatelliteTkgsHiddenTransponderList`](#scan_getdvbsatellitetkgshiddentransponderlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs hidden transponder list (scan) |
| [`scan/getDvbSatelliteTkgsHiddenTransponderListCount`](#scan_getdvbsatellitetkgshiddentransponderlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs hidden transponder list count (scan) |
| [`scan/getDvbSatelliteTkgsPreferredListCount`](#scan_getdvbsatellitetkgspreferredlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs preferred list count (scan) |
| [`scan/getDvbSatelliteTkgsPreferredLists`](#scan_getdvbsatellitetkgspreferredlists) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs preferred lists (scan) |
| [`scan/getDvbSatelliteTkgsSelectedPreferredList`](#scan_getdvbsatellitetkgsselectedpreferredlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs selected preferred list (scan) |
| [`scan/getDvbSatelliteTkgsTestMode`](#scan_getdvbsatellitetkgstestmode) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs test mode (scan) |
| [`scan/getDvbSatelliteTkgsUpdateListsStatus`](#scan_getdvbsatellitetkgsupdatelistsstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs update lists status (scan) |
| [`scan/getDvbSatelliteTkgsVersion`](#scan_getdvbsatellitetkgsversion) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs version (scan) |
| [`scan/getDvbSatelliteTkgsVisibleTransponderList`](#scan_getdvbsatellitetkgsvisibletransponderlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs visible transponder list (scan) |
| [`scan/getDvbSatelliteTkgsVisibleTransponderListCount`](#scan_getdvbsatellitetkgsvisibletransponderlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite tkgs visible transponder list count (scan) |
| [`scan/getDvbSatelliteTransponderList`](#scan_getdvbsatellitetransponderlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite transponder list (scan) |
| [`scan/getDvbSatelliteTransponderListCount`](#scan_getdvbsatellitetransponderlistcount) | private |  | tv-broadcast | inferred | Returns the DVB satellite transponder list count (scan) |
| [`scan/getDvbSatelliteTricolorRegionalList`](#scan_getdvbsatellitetricolorregionallist) | private |  | tv-broadcast | inferred | Returns the DVB satellite tricolor regional list (scan) |
| [`scan/getDvbSatelliteTricolorRegionalLists`](#scan_getdvbsatellitetricolorregionallists) | private |  | tv-broadcast | inferred | Returns the DVB satellite tricolor regional lists (scan) |
| [`scan/getDvbSatelliteTricolorRegionalListsCount`](#scan_getdvbsatellitetricolorregionallistscount) | private |  | tv-broadcast | inferred | Returns the DVB satellite tricolor regional lists count (scan) |
| [`scan/getDvbSatelliteTuningStatus`](#scan_getdvbsatellitetuningstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite tuning status (scan) |
| [`scan/getDvbTerrestrialDefaultTuneInfo`](#scan_getdvbterrestrialdefaulttuneinfo) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial default tune info (scan) |
| [`scan/getDvbTerrestrialScanInfo`](#scan_getdvbterrestrialscaninfo) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial scan info (scan) |
| [`scan/getDvbTerrestrialScanInfoCount`](#scan_getdvbterrestrialscaninfocount) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial scan info count (scan) |
| [`scan/getDvbTerrestrialScanOption`](#scan_getdvbterrestrialscanoption) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial scan option (scan) |
| [`scan/getDvbTerrestrialServiceOperator`](#scan_getdvbterrestrialserviceoperator) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial service operator (scan) |
| [`scan/getDvbTerrestrialServiceOperatorList`](#scan_getdvbterrestrialserviceoperatorlist) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial service operator list (scan) |
| [`scan/getDvbTerrestrialSignalTestInfoStatus`](#scan_getdvbterrestrialsignaltestinfostatus) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial signal test info status (scan) |
| [`scan/getDvbTerrestrialSignalTestStatus`](#scan_getdvbterrestrialsignalteststatus) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial signal test status (scan) |
| [`scan/getDvbTerrestrialTuningStatus`](#scan_getdvbterrestrialtuningstatus) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial tuning status (scan) |
| [`scan/getDvbTKGSCurrentOperatingMode`](#scan_getdvbtkgscurrentoperatingmode) | private |  | tv-broadcast | inferred | Returns the DVB TKGS current operating mode (scan) |
| [`scan/getDvbTKGSOperatingModeList`](#scan_getdvbtkgsoperatingmodelist) | private |  | tv-broadcast | inferred | Returns the DVB TKGS operating mode list (scan) |
| [`scan/getLastChannelId`](#scan_getlastchannelid) | private |  | tv-broadcast | inferred | Returns the last channel ID (scan) |
| [`scan/getNetworkListToSolveConflictLcn`](#scan_getnetworklisttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the network list to solve conflict lcn (scan) |
| [`scan/getRegionListCountToSolveConflictLcn`](#scan_getregionlistcounttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the region list count to solve conflict lcn (scan) |
| [`scan/getRegionListToSolveConflictLcn`](#scan_getregionlisttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the region list to solve conflict lcn (scan) |
| [`scan/getRegionListToSolveConflictLcnForLiveTV`](#scan_getregionlisttosolveconflictlcnforlivetv) | private |  | tv-broadcast | inferred | Returns the region list to solve conflict lcn for live TV (scan) |
| [`scan/getSatAdultChannelList`](#scan_getsatadultchannellist) | private |  | tv-broadcast | inferred | Returns the sat adult channel list (scan) |
| [`scan/getSatCustomisedLcnList`](#scan_getsatcustomisedlcnlist) | private |  | tv-broadcast | inferred | Returns the sat customised lcn list (scan) |
| [`scan/getSatCustomisedLCNListCount`](#scan_getsatcustomisedlcnlistcount) | private |  | tv-broadcast | inferred | Returns the sat customised LCN list count (scan) |
| [`scan/getScannedPhysicalList`](#scan_getscannedphysicallist) | private |  | tv-broadcast | inferred | Returns the scanned physical list (scan) |
| [`scan/getSupportZiggoSpecification`](#scan_getsupportziggospecification) | private |  | tv-broadcast | inferred | Returns the support ziggo specification (scan) |
| [`scan/getSupportZiggoVOD`](#scan_getsupportziggovod) | private |  | tv-broadcast | inferred | Returns the support ziggo VOD (scan) |
| [`scan/isDvbSatelliteHomeTpModificationAllowed`](#scan_isdvbsatellitehometpmodificationallowed) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite home tp modification allowed is set (scan) |
| [`scan/isDvbSatelliteM7RegionalProgramAvailable`](#scan_isdvbsatellitem7regionalprogramavailable) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite m 7 regional program available is set (scan) |
| [`scan/isDvbSatelliteM7ServiceOperator`](#scan_isdvbsatellitem7serviceoperator) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite m 7 service operator is set (scan) |
| [`scan/isDvbSatelliteTkgsUpdateRequired`](#scan_isdvbsatellitetkgsupdaterequired) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite tkgs update required is set (scan) |
| [`scan/isServiceListConflictSolved`](#scan_isservicelistconflictsolved) | private |  | tv-broadcast | inferred | Reports whether the service list conflict solved is set (scan) |
| [`scan/moveDvbSatelliteDiSEqCMotor`](#scan_movedvbsatellitediseqcmotor) | private |  | tv-broadcast | inferred | Moves the DVB satellite di s eq c motor (scan) |
| [`scan/moveDvbSatelliteUSALSMotor`](#scan_movedvbsatelliteusalsmotor) | private |  | tv-broadcast | inferred | Moves the DVB satellite USALS motor (scan) |
| [`scan/releaseBroadcast`](#scan_releasebroadcast) | private |  | tv-broadcast | inferred | Releases the broadcast (scan) |
| [`scan/resetDvbCableNetworkScanInfo`](#scan_resetdvbcablenetworkscaninfo) | private |  | tv-broadcast | inferred | Resets the DVB cable network scan info (scan) ⚠️ |
| [`scan/resetDvbCableQuickScanInfo`](#scan_resetdvbcablequickscaninfo) | private |  | tv-broadcast | inferred | Resets the DVB cable quick scan info (scan) ⚠️ |
| [`scan/resetDvbCableScanInfo`](#scan_resetdvbcablescaninfo) | private |  | tv-broadcast | inferred | Resets the DVB cable scan info (scan) ⚠️ |
| [`scan/resetDvbSatelliteDiSEqCMotor`](#scan_resetdvbsatellitediseqcmotor) | private |  | tv-broadcast | inferred | Resets the DVB satellite di s eq c motor (scan) ⚠️ |
| [`scan/resetDvbSatelliteDiSEqCMotorLimit`](#scan_resetdvbsatellitediseqcmotorlimit) | private |  | tv-broadcast | inferred | Resets the DVB satellite di s eq c motor limit (scan) ⚠️ |
| [`scan/resetDvbSatelliteTkgsHiddenTransponderList`](#scan_resetdvbsatellitetkgshiddentransponderlist) | private |  | tv-broadcast | inferred | Resets the DVB satellite tkgs hidden transponder list (scan) ⚠️ |
| [`scan/resetDvbSatelliteTkgsVersion`](#scan_resetdvbsatellitetkgsversion) | private |  | tv-broadcast | inferred | Resets the DVB satellite tkgs version (scan) ⚠️ |
| [`scan/resumeAutoScan`](#scan_resumeautoscan) | private |  | tv-broadcast | inferred | Resumes the auto scan (scan) |
| [`scan/saveAnalogManualTuning`](#scan_saveanalogmanualtuning) | private |  | tv-broadcast | inferred | Saves the analog manual tuning (scan) |
| [`scan/saveAtscManualTuning`](#scan_saveatscmanualtuning) | private |  | tv-broadcast | inferred | Saves the ATSC manual tuning (scan) |
| [`scan/saveDvbCableManualTuning`](#scan_savedvbcablemanualtuning) | private |  | tv-broadcast | inferred | Saves the DVB cable manual tuning (scan) |
| [`scan/saveDvbSatelliteManualTuning`](#scan_savedvbsatellitemanualtuning) | private |  | tv-broadcast | inferred | Saves the DVB satellite manual tuning (scan) |
| [`scan/saveDvbTerrestrialManualTuning`](#scan_savedvbterrestrialmanualtuning) | private |  | tv-broadcast | inferred | Saves the DVB terrestrial manual tuning (scan) |
| [`scan/setAnalogManualTuning`](#scan_setanalogmanualtuning) | private |  | tv-broadcast | inferred | Sets the analog manual tuning (scan) |
| [`scan/setAribSatelliteSignalTest`](#scan_setaribsatellitesignaltest) | private |  | tv-broadcast | inferred | Sets the arib satellite signal test (scan) |
| [`scan/setAribTerrestrialSignalTest`](#scan_setaribterrestrialsignaltest) | private |  | tv-broadcast | inferred | Sets the arib terrestrial signal test (scan) |
| [`scan/setAtscManualTuning`](#scan_setatscmanualtuning) | private |  | tv-broadcast | inferred | Sets the ATSC manual tuning (scan) |
| [`scan/setAutoScanChannelType`](#scan_setautoscanchanneltype) | private |  | tv-broadcast | inferred | Sets the auto scan channel type (scan) |
| [`scan/setAutoScanModeForStore`](#scan_setautoscanmodeforstore) | private |  | tv-broadcast | inferred | Sets the auto scan mode for store (scan) |
| [`scan/setDvbCableManualTuning`](#scan_setdvbcablemanualtuning) | private |  | tv-broadcast | inferred | Sets the DVB cable manual tuning (scan) |
| [`scan/setDvbCableProgramAutoUpdate`](#scan_setdvbcableprogramautoupdate) | private |  | tv-broadcast | inferred | Sets the DVB cable program auto update (scan) |
| [`scan/setDvbCableScanInfo`](#scan_setdvbcablescaninfo) | private |  | tv-broadcast | inferred | Sets the DVB cable scan info (scan) |
| [`scan/setDvbCableScanOption`](#scan_setdvbcablescanoption) | private |  | tv-broadcast | inferred | Sets the DVB cable scan option (scan) |
| [`scan/setDvbCableServiceOperator`](#scan_setdvbcableserviceoperator) | private |  | tv-broadcast | inferred | Sets the DVB cable service operator (scan) |
| [`scan/setDvbSatellite2TunerConn`](#scan_setdvbsatellite2tunerconn) | private |  | tv-broadcast | inferred | Sets the DVB satellite 2 tuner conn (scan) |
| [`scan/setDvbSatelliteAstraChannelList`](#scan_setdvbsatelliteastrachannellist) | private |  | tv-broadcast | inferred | Sets the DVB satellite astra channel list (scan) |
| [`scan/setDvbSatelliteDiSEqCMotorLimit`](#scan_setdvbsatellitediseqcmotorlimit) | private |  | tv-broadcast | inferred | Sets the DVB satellite di s eq c motor limit (scan) |
| [`scan/setDvbSatelliteDiSEqCMotorPosition`](#scan_setdvbsatellitediseqcmotorposition) | private |  | tv-broadcast | inferred | Sets the DVB satellite di s eq c motor position (scan) |
| [`scan/setDvbSatelliteHomeTPs`](#scan_setdvbsatellitehometps) | private |  | tv-broadcast | inferred | Sets the DVB satellite home t ps (scan) |
| [`scan/setDvbSatelliteLocationLongitude`](#scan_setdvbsatellitelocationlongitude) | private |  | tv-broadcast | inferred | Sets the DVB satellite location longitude (scan) |
| [`scan/setDvbSatelliteM7ORFRegionalProgram`](#scan_setdvbsatellitem7orfregionalprogram) | private |  | tv-broadcast | inferred | Sets the DVB satellite m 7 ORF regional program (scan) |
| [`scan/setDvbSatelliteM7RegionalProgram`](#scan_setdvbsatellitem7regionalprogram) | private |  | tv-broadcast | inferred | Sets the DVB satellite m 7 regional program (scan) |
| [`scan/setDvbSatelliteM7ServiceOperatorSubList`](#scan_setdvbsatellitem7serviceoperatorsublist) | private |  | tv-broadcast | inferred | Sets the DVB satellite m 7 service operator sub list (scan) |
| [`scan/setDvbSatelliteManualTuning`](#scan_setdvbsatellitemanualtuning) | private |  | tv-broadcast | inferred | Sets the DVB satellite manual tuning (scan) |
| [`scan/setDvbSatelliteMyLatitude`](#scan_setdvbsatellitemylatitude) | private |  | tv-broadcast | inferred | Sets the DVB satellite my latitude (scan) |
| [`scan/setDvbSatelliteMyLongitude`](#scan_setdvbsatellitemylongitude) | private |  | tv-broadcast | inferred | Sets the DVB satellite my longitude (scan) |
| [`scan/setDvbSatelliteORSRegionalProgram`](#scan_setdvbsatelliteorsregionalprogram) | private |  | tv-broadcast | inferred | Sets the DVB satellite ORS regional program (scan) |
| [`scan/setDvbSatelliteRegion`](#scan_setdvbsatelliteregion) | private |  | tv-broadcast | inferred | Sets the DVB satellite region (scan) |
| [`scan/setDvbSatelliteScanInfo`](#scan_setdvbsatellitescaninfo) | private |  | tv-broadcast | inferred | Sets the DVB satellite scan info (scan) |
| [`scan/setDvbSatelliteScanOption`](#scan_setdvbsatellitescanoption) | private |  | tv-broadcast | inferred | Sets the DVB satellite scan option (scan) |
| [`scan/setDvbSatelliteSelectedSatellite`](#scan_setdvbsatelliteselectedsatellite) | private |  | tv-broadcast | inferred | Sets the DVB satellite selected satellite (scan) |
| [`scan/setDvbSatelliteServiceOperator`](#scan_setdvbsatelliteserviceoperator) | private |  | tv-broadcast | inferred | Sets the DVB satellite service operator (scan) |
| [`scan/setDvbSatelliteTkgsPreferredList`](#scan_setdvbsatellitetkgspreferredlist) | private |  | tv-broadcast | inferred | Sets the DVB satellite tkgs preferred list (scan) |
| [`scan/setDvbSatelliteTkgsTestMode`](#scan_setdvbsatellitetkgstestmode) | private |  | tv-broadcast | inferred | Sets the DVB satellite tkgs test mode (scan) |
| [`scan/setDvbSatelliteTkgsUpdate`](#scan_setdvbsatellitetkgsupdate) | private |  | tv-broadcast | inferred | Sets the DVB satellite tkgs update (scan) |
| [`scan/setDvbSatelliteTricolorRegionalList`](#scan_setdvbsatellitetricolorregionallist) | private |  | tv-broadcast | inferred | Sets the DVB satellite tricolor regional list (scan) |
| [`scan/setDvbTerrestrialManualTuning`](#scan_setdvbterrestrialmanualtuning) | private |  | tv-broadcast | inferred | Sets the DVB terrestrial manual tuning (scan) |
| [`scan/setDvbTerrestrialScanOption`](#scan_setdvbterrestrialscanoption) | private |  | tv-broadcast | inferred | Sets the DVB terrestrial scan option (scan) |
| [`scan/setDvbTerrestrialServiceOperator`](#scan_setdvbterrestrialserviceoperator) | private |  | tv-broadcast | inferred | Sets the DVB terrestrial service operator (scan) |
| [`scan/setDvbTKGSCurrentOperatingMode`](#scan_setdvbtkgscurrentoperatingmode) | private |  | tv-broadcast | inferred | Sets the DVB TKGS current operating mode (scan) |
| [`scan/setPreferredChannelToSolveConflictLcn`](#scan_setpreferredchanneltosolveconflictlcn) | private |  | tv-broadcast | inferred | Sets the preferred channel to solve conflict lcn (scan) |
| [`scan/setPreferredChannelToSolveSatCustomisedLcn`](#scan_setpreferredchanneltosolvesatcustomisedlcn) | private |  | tv-broadcast | inferred | Sets the preferred channel to solve sat customised lcn (scan) |
| [`scan/setPreferredNetworkToSolveConflictLcn`](#scan_setpreferrednetworktosolveconflictlcn) | private |  | tv-broadcast | inferred | Sets the preferred network to solve conflict lcn (scan) |
| [`scan/setPreferredRegionToSolveConflictLcn`](#scan_setpreferredregiontosolveconflictlcn) | private |  | tv-broadcast | inferred | Sets the preferred region to solve conflict lcn (scan) |
| [`scan/setPreferredRegionToSolveConflictLcnForLiveTV`](#scan_setpreferredregiontosolveconflictlcnforlivetv) | private |  | tv-broadcast | inferred | Sets the preferred region to solve conflict lcn for live TV (scan) |
| [`scan/skipAutoScan`](#scan_skipautoscan) | private |  | tv-broadcast | inferred | Skips the auto scan (scan) |
| [`scan/startAutoScan`](#scan_startautoscan) | private |  | tv-broadcast | inferred | Starts the auto scan (scan) |
| [`scan/startDvbCableChannelListUpdate`](#scan_startdvbcablechannellistupdate) | private |  | tv-broadcast | inferred | Starts the DVB cable channel list update (scan) |
| [`scan/startDvbCableSignalTest`](#scan_startdvbcablesignaltest) | private |  | tv-broadcast | inferred | Starts the DVB cable signal test (scan) |
| [`scan/startDvbSatelliteChannelListUpdate`](#scan_startdvbsatellitechannellistupdate) | private |  | tv-broadcast | inferred | Starts the DVB satellite channel list update (scan) |
| [`scan/startDvbSatelliteGatheringAstraChannelLists`](#scan_startdvbsatellitegatheringastrachannellists) | private |  | tv-broadcast | inferred | Starts the DVB satellite gathering astra channel lists (scan) |
| [`scan/startDvbSatelliteGatheringTricolorRegionalLists`](#scan_startdvbsatellitegatheringtricolorregionallists) | private |  | tv-broadcast | inferred | Starts the DVB satellite gathering tricolor regional lists (scan) |
| [`scan/startDvbSatelliteM7AutoDiSEqCConfiguration`](#scan_startdvbsatellitem7autodiseqcconfiguration) | private |  | settings | inferred | Starts the DVB satellite m 7 auto di s eq c configuration (scan) |
| [`scan/startDvbSatelliteM7HomeTPSearch`](#scan_startdvbsatellitem7hometpsearch) | private |  | tv-broadcast | inferred | Starts the DVB satellite m 7 home TP search (scan) |
| [`scan/startDvbSatelliteTkgsUpdate`](#scan_startdvbsatellitetkgsupdate) | private |  | tv-broadcast | inferred | Starts the DVB satellite tkgs update (scan) |
| [`scan/startDvbTerrestrialChannelListUpdate`](#scan_startdvbterrestrialchannellistupdate) | private |  | tv-broadcast | inferred | Starts the DVB terrestrial channel list update (scan) |
| [`scan/startDvbTerrestrialSignalTest`](#scan_startdvbterrestrialsignaltest) | private |  | tv-broadcast | inferred | Starts the DVB terrestrial signal test (scan) |
| [`scan/stopAutoScan`](#scan_stopautoscan) | private |  | tv-broadcast | inferred | Stops the auto scan (scan) |
| [`scan/stopDvbCableChannelListUpdate`](#scan_stopdvbcablechannellistupdate) | private |  | tv-broadcast | inferred | Stops the DVB cable channel list update (scan) |
| [`scan/stopDvbCableSignalTest`](#scan_stopdvbcablesignaltest) | private |  | tv-broadcast | inferred | Stops the DVB cable signal test (scan) |
| [`scan/stopDvbSatelliteChannelListUpdate`](#scan_stopdvbsatellitechannellistupdate) | private |  | tv-broadcast | inferred | Stops the DVB satellite channel list update (scan) |
| [`scan/stopDvbSatelliteDiSEqCMotorMoving`](#scan_stopdvbsatellitediseqcmotormoving) | private |  | tv-broadcast | inferred | Stops the DVB satellite di s eq c motor moving (scan) |
| [`scan/stopDvbSatelliteTkgsUpdate`](#scan_stopdvbsatellitetkgsupdate) | private |  | tv-broadcast | inferred | Stops the DVB satellite tkgs update (scan) |
| [`scan/stopDvbTerrestrialChannelListUpdate`](#scan_stopdvbterrestrialchannellistupdate) | private |  | tv-broadcast | inferred | Stops the DVB terrestrial channel list update (scan) |
| [`scan/stopDvbTerrestrialSignalTest`](#scan_stopdvbterrestrialsignaltest) | private |  | tv-broadcast | inferred | Stops the DVB terrestrial signal test (scan) |
| [`scanBarkerChannel`](#scanbarkerchannel) | private |  | tv-broadcast | inferred | Scans for barker channel. |
| [`setChannelBlock`](#setchannelblock) | private |  | tv-broadcast | inferred | Sets the channel block. |
| [`setChannelGroup`](#setchannelgroup) | private |  | tv-broadcast | inferred | Sets the channel group. |
| [`setChannelMode`](#setchannelmode) | private |  | tv-broadcast | inferred | Sets the channel mode. |
| [`setChannelShortcutKey`](#setchannelshortcutkey) | private |  | tv-broadcast | inferred | Sets the channel shortcut key. |
| [`setChannelSkip`](#setchannelskip) | private |  | tv-broadcast | inferred | Sets the channel skip. |
| [`setChannelSortMode`](#setchannelsortmode) | private |  | tv-broadcast | inferred | Sets the channel sort mode. |
| [`setLastChannelId`](#setlastchannelid) | private |  | tv-broadcast | inferred | Sets the last channel ID. |
| [`setVideoView`](#setvideoview) | private |  | tv-broadcast | inferred | Sets the video view. |
| [`sortAnalogChannelList`](#sortanalogchannellist) | private |  | tv-broadcast | inferred | Handles the sort analog channel list. |
| [`updateChannelMap`](#updatechannelmap) | private |  | tv-broadcast | inferred | Updates the channel map. |

<a id="acas_getautomaticdisplay"></a>
## `acas/getAutomaticDisplay`

`luna://com.webos.service.legacybroadcast.channel/acas/getAutomaticDisplay`

Returns the automatic display (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/acas/getAutomaticDisplay '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_getmoduleid"></a>
## `acas/getModuleId`

`luna://com.webos.service.legacybroadcast.channel/acas/getModuleId`

Returns the module ID (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/acas/getModuleId '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_getmoduleinfo"></a>
## `acas/getModuleInfo`

`luna://com.webos.service.legacybroadcast.channel/acas/getModuleInfo`

Returns the module info (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/acas/getModuleInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getautomaticdisplay"></a>
## `bcas/getAutomaticDisplay`

`luna://com.webos.service.legacybroadcast.channel/bcas/getAutomaticDisplay`

Returns the automatic display (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/bcas/getAutomaticDisplay '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getcard"></a>
## `bcas/getCard`

`luna://com.webos.service.legacybroadcast.channel/bcas/getCard`

Returns the card (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/bcas/getCard '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getcardid"></a>
## `bcas/getCardId`

`luna://com.webos.service.legacybroadcast.channel/bcas/getCardId`

Returns the card ID (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/bcas/getCardId '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getemmtimer"></a>
## `bcas/getEmmTimer`

`luna://com.webos.service.legacybroadcast.channel/bcas/getEmmTimer`

Returns the emm timer (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/bcas/getEmmTimer '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getpaychannelguide"></a>
## `bcas/getPayChannelGuide`

`luna://com.webos.service.legacybroadcast.channel/bcas/getPayChannelGuide`

Returns the pay channel guide (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/bcas/getPayChannelGuide '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_setemmtimerchannel"></a>
## `bcas/setEmmTimerChannel`

`luna://com.webos.service.legacybroadcast.channel/bcas/setEmmTimerChannel`

Sets the emm timer channel (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/bcas/setEmmTimerChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_stopemmtimerchannel"></a>
## `bcas/stopEmmTimerChannel`

`luna://com.webos.service.legacybroadcast.channel/bcas/stopEmmTimerChannel`

Stops the emm timer channel (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/bcas/stopEmmTimerChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blockkeyinput"></a>
## `blockKeyInput`

`luna://com.webos.service.legacybroadcast.channel/blockKeyInput`

Blocks the key input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/blockKeyInput '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.legacybroadcast.channel/changeChannelNumber`

Changes the channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/changeChannelNumber '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechanneltype"></a>
## `changeChannelType`

`luna://com.webos.service.legacybroadcast.channel/changeChannelType`

Changes the channel type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/changeChannelType '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changemessagechannel"></a>
## `changeMessageChannel`

`luna://com.webos.service.legacybroadcast.channel/changeMessageChannel`

Changes the message channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/changeMessageChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changerecommendedchannel"></a>
## `changeRecommendedChannel`

`luna://com.webos.service.legacybroadcast.channel/changeRecommendedChannel`

Changes the recommended channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/changeRecommendedChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkbarkerchannel"></a>
## `checkBarkerChannel`

`luna://com.webos.service.legacybroadcast.channel/checkBarkerChannel`

Checks the barker channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/checkBarkerChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerpauserequest"></a>
## `ci/camPlayerPauseRequest`

`luna://com.webos.service.legacybroadcast.channel/ci/camPlayerPauseRequest`

Handles the CAM player pause request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/camPlayerPauseRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerresumerequest"></a>
## `ci/camPlayerResumeRequest`

`luna://com.webos.service.legacybroadcast.channel/ci/camPlayerResumeRequest`

Handles the CAM player resume request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/camPlayerResumeRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerseekrequest"></a>
## `ci/camPlayerSeekRequest`

`luna://com.webos.service.legacybroadcast.channel/ci/camPlayerSeekRequest`

Handles the CAM player seek request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/camPlayerSeekRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerstoprequest"></a>
## `ci/camPlayerStopRequest`

`luna://com.webos.service.legacybroadcast.channel/ci/camPlayerStopRequest`

Handles the CAM player stop request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/camPlayerStopRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerverifyrequest"></a>
## `ci/camPlayerVerifyRequest`

`luna://com.webos.service.legacybroadcast.channel/ci/camPlayerVerifyRequest`

Handles the CAM player verify request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/camPlayerVerifyRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_checkcamupgradestate"></a>
## `ci/checkCamUpgradeState`

`luna://com.webos.service.legacybroadcast.channel/ci/checkCamUpgradeState`

Checks the CAM upgrade state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/checkCamUpgradeState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_checkciplusstate"></a>
## `ci/checkCiPlusState`

`luna://com.webos.service.legacybroadcast.channel/ci/checkCiPlusState`

Checks the CI plus state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/checkCiPlusState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_confirmpincode"></a>
## `ci/confirmPinCode`

`luna://com.webos.service.legacybroadcast.channel/ci/confirmPinCode`

Handles the confirm pin code (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/confirmPinCode '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_connectsas"></a>
## `ci/connectSas`

`luna://com.webos.service.legacybroadcast.channel/ci/connectSas`

Connects the sas (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/connectSas '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_filerequest4aux"></a>
## `ci/fileRequest4Aux`

`luna://com.webos.service.legacybroadcast.channel/ci/fileRequest4Aux`

Handles the file request 4 aux (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/fileRequest4Aux '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getcaidlist"></a>
## `ci/getCaIdList`

`luna://com.webos.service.legacybroadcast.channel/ci/getCaIdList`

Returns the ca ID list (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCaIdList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getcamisinserted"></a>
## `ci/getCamIsInserted`

`luna://com.webos.service.legacybroadcast.channel/ci/getCamIsInserted`

Returns the CAM is inserted (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCamIsInserted '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getcammessage"></a>
## `ci/getCamMessage`

`luna://com.webos.service.legacybroadcast.channel/ci/getCamMessage`

Returns the CAM message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCamMessage '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getchannelbannercontrolstatus"></a>
## `ci/getChannelBannerControlStatus`

`luna://com.webos.service.legacybroadcast.channel/ci/getChannelBannerControlStatus`

Returns the channel banner control status (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getChannelBannerControlStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getciecpkeyinfo"></a>
## `ci/getCiEcpKeyInfo`

`luna://com.webos.service.legacybroadcast.channel/ci/getCiEcpKeyInfo`

Returns the CI ecp key info (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCiEcpKeyInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getciecprandkey"></a>
## `ci/getCiEcpRandKey`

`luna://com.webos.service.legacybroadcast.channel/ci/getCiEcpRandKey`

Returns the CI ecp rand key (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCiEcpRandKey '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getcikeyinfo"></a>
## `ci/getCiKeyInfo`

`luna://com.webos.service.legacybroadcast.channel/ci/getCiKeyInfo`

Returns the CI key info (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCiKeyInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getciplusconnected"></a>
## `ci/getCIPlusConnected`

`luna://com.webos.service.legacybroadcast.channel/ci/getCIPlusConnected`

Returns the CI plus connected (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCIPlusConnected '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getcirandkey"></a>
## `ci/getCiRandKey`

`luna://com.webos.service.legacybroadcast.channel/ci/getCiRandKey`

Returns the CI rand key (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCiRandKey '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getciversion"></a>
## `ci/getCIVersion`

`luna://com.webos.service.legacybroadcast.channel/ci/getCIVersion`

Returns the CI version (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getCIVersion '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getconnectionstate"></a>
## `ci/getConnectionState`

`luna://com.webos.service.legacybroadcast.channel/ci/getConnectionState`

Returns the connection state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getConnectionState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getecpcontrolinfo"></a>
## `ci/getEcpControlInfo`

`luna://com.webos.service.legacybroadcast.channel/ci/getEcpControlInfo`

Returns the ecp control info (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getEcpControlInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getfingerprintinfo"></a>
## `ci/getFingerPrintInfo`

`luna://com.webos.service.legacybroadcast.channel/ci/getFingerPrintInfo`

Returns the finger print info (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getFingerPrintInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_gethostctlinfo"></a>
## `ci/getHostCtlInfo`

`luna://com.webos.service.legacybroadcast.channel/ci/getHostCtlInfo`

Returns the host ctl info (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getHostCtlInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getlowspeedconnectionstatus"></a>
## `ci/getLowSpeedConnectionStatus`

`luna://com.webos.service.legacybroadcast.channel/ci/getLowSpeedConnectionStatus`

Returns the low speed connection status (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getLowSpeedConnectionStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getoperatorprofileenabled"></a>
## `ci/getOperatorProfileEnabled`

`luna://com.webos.service.legacybroadcast.channel/ci/getOperatorProfileEnabled`

Returns the operator profile enabled (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getOperatorProfileEnabled '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getosdtposition"></a>
## `ci/getOsdtPosition`

`luna://com.webos.service.legacybroadcast.channel/ci/getOsdtPosition`

Returns the osdt position (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getOsdtPosition '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getsasconnectionstate"></a>
## `ci/getSasConnectionState`

`luna://com.webos.service.legacybroadcast.channel/ci/getSasConnectionState`

Returns the sas connection state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getSasConnectionState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_getsasmessage"></a>
## `ci/getSasMessage`

`luna://com.webos.service.legacybroadcast.channel/ci/getSasMessage`

Returns the sas message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/getSasMessage '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_hostinitiatedcamplayrequest"></a>
## `ci/hostInitiatedCAMPlayRequest`

`luna://com.webos.service.legacybroadcast.channel/ci/hostInitiatedCAMPlayRequest`

Handles the host initiated CAM play request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/hostInitiatedCAMPlayRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_hostplayerrequest"></a>
## `ci/hostPlayerRequest`

`luna://com.webos.service.legacybroadcast.channel/ci/hostPlayerRequest`

Handles the host player request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/hostPlayerRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_isappmmilaunched"></a>
## `ci/IsAppMmiLaunched`

`luna://com.webos.service.legacybroadcast.channel/ci/IsAppMmiLaunched`

Reports whether the app mmi launched is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/IsAppMmiLaunched '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_ischannelchangedbycamhostcontrol"></a>
## `ci/isChannelChangedByCamHostControl`

`luna://com.webos.service.legacybroadcast.channel/ci/isChannelChangedByCamHostControl`

Reports whether the channel changed by CAM host control is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/isChannelChangedByCamHostControl '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_isciinformationmenuenabled"></a>
## `ci/isCiInformationMenuEnabled`

`luna://com.webos.service.legacybroadcast.channel/ci/isCiInformationMenuEnabled`

Reports whether the CI information menu enabled is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/isCiInformationMenuEnabled '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_isecpcontentprotected"></a>
## `ci/isEcpContentProtected`

`luna://com.webos.service.legacybroadcast.channel/ci/isEcpContentProtected`

Reports whether the ecp content protected is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/isEcpContentProtected '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_isoperatorprofileenabled"></a>
## `ci/isOperatorProfileEnabled`

`luna://com.webos.service.legacybroadcast.channel/ci/isOperatorProfileEnabled`

Reports whether the operator profile enabled is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/isOperatorProfileEnabled '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_issavepincodemenuenabled"></a>
## `ci/isSavePinCodeMenuEnabled`

`luna://com.webos.service.legacybroadcast.channel/ci/isSavePinCodeMenuEnabled`

Reports whether the save pin code menu enabled is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/isSavePinCodeMenuEnabled '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_istrickmoderestrictedcontent"></a>
## `ci/isTrickModeRestrictedContent`

`luna://com.webos.service.legacybroadcast.channel/ci/isTrickModeRestrictedContent`

Reports whether the trick mode restricted content is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/isTrickModeRestrictedContent '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_notifymmiosddisappeared"></a>
## `ci/notifyMmiOsdDisappeared`

`luna://com.webos.service.legacybroadcast.channel/ci/notifyMmiOsdDisappeared`

Notifies of the mmi OSD disappeared (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/notifyMmiOsdDisappeared '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_registercplayerstatus"></a>
## `ci/registerCplayerStatus`

`luna://com.webos.service.legacybroadcast.channel/ci/registerCplayerStatus`

Registers the cplayer status (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/registerCplayerStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_registerdomainidcb"></a>
## `ci/registerDomainIDCB`

`luna://com.webos.service.legacybroadcast.channel/ci/registerDomainIDCB`

Registers the domain IDCB (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/registerDomainIDCB '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_registerfilerequestackcb"></a>
## `ci/registerFileRequestAckCB`

`luna://com.webos.service.legacybroadcast.channel/ci/registerFileRequestAckCB`

Registers the file request ack CB (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/registerFileRequestAckCB '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_replypincode"></a>
## `ci/replyPinCode`

`luna://com.webos.service.legacybroadcast.channel/ci/replyPinCode`

Handles the reply pin code (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/replyPinCode '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_reqappabort"></a>
## `ci/ReqAppAbort`

`luna://com.webos.service.legacybroadcast.channel/ci/ReqAppAbort`

Handles the req app abort (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/ReqAppAbort '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_requestfiledata"></a>
## `ci/requestFileData`

`luna://com.webos.service.legacybroadcast.channel/ci/requestFileData`

Requests the file data (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/requestFileData '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_requestpreviousmmimessage"></a>
## `ci/requestPreviousMmiMessage`

`luna://com.webos.service.legacybroadcast.channel/ci/requestPreviousMmiMessage`

Requests the previous mmi message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/requestPreviousMmiMessage '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_requeststartack"></a>
## `ci/requestStartAck`

`luna://com.webos.service.legacybroadcast.channel/ci/requestStartAck`

Requests the start ack (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/requestStartAck '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_resetcam"></a>
## `ci/resetCam` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/ci/resetCam`

Resets the CAM (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/resetCam '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_savelaunchinfo4aux"></a>
## `ci/saveLaunchInfo4Aux`

`luna://com.webos.service.legacybroadcast.channel/ci/saveLaunchInfo4Aux`

Saves the launch info 4 aux (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/saveLaunchInfo4Aux '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_searchoperator"></a>
## `ci/searchOperator`

`luna://com.webos.service.legacybroadcast.channel/ci/searchOperator`

Searches for operator (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/searchOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_selectmmimenuindex"></a>
## `ci/selectMmiMenuIndex`

`luna://com.webos.service.legacybroadcast.channel/ci/selectMmiMenuIndex`

Selects the mmi menu index (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/selectMmiMenuIndex '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_sendhostcontrolaskrelease"></a>
## `ci/sendHostControlAskRelease`

`luna://com.webos.service.legacybroadcast.channel/ci/sendHostControlAskRelease`

Sends the host control ask release (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/sendHostControlAskRelease '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_sendsasmessage"></a>
## `ci/sendSasMessage`

`luna://com.webos.service.legacybroadcast.channel/ci/sendSasMessage`

Sends the sas message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/sendSasMessage '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_setmmienquiry"></a>
## `ci/setMmiEnquiry`

`luna://com.webos.service.legacybroadcast.channel/ci/setMmiEnquiry`

Sets the mmi enquiry (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/setMmiEnquiry '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_startciinformationmenu"></a>
## `ci/startCiInformationMenu` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/ci/startCiInformationMenu`

Starts the CI information menu (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/startCiInformationMenu '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_startopupdateinwarmstate"></a>
## `ci/startOpUpdateInWarmState`

`luna://com.webos.service.legacybroadcast.channel/ci/startOpUpdateInWarmState`

Starts the op update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/startOpUpdateInWarmState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_startotaupdateinwarmstate"></a>
## `ci/startOtaUpdateInWarmState`

`luna://com.webos.service.legacybroadcast.channel/ci/startOtaUpdateInWarmState`

Starts the ota update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/startOtaUpdateInWarmState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_startpowerdownnotice"></a>
## `ci/startPowerDownNotice`

`luna://com.webos.service.legacybroadcast.channel/ci/startPowerDownNotice`

Starts the power down notice (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/startPowerDownNotice '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_stopopupdateinwarmstate"></a>
## `ci/stopOpUpdateInWarmState`

`luna://com.webos.service.legacybroadcast.channel/ci/stopOpUpdateInWarmState`

Stops the op update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/stopOpUpdateInWarmState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_stopotaupdateinwarmstate"></a>
## `ci/stopOtaUpdateInWarmState`

`luna://com.webos.service.legacybroadcast.channel/ci/stopOtaUpdateInWarmState`

Stops the ota update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/stopOtaUpdateInWarmState '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_stoppowerdownnotice"></a>
## `ci/stopPowerDownNotice`

`luna://com.webos.service.legacybroadcast.channel/ci/stopPowerDownNotice`

Stops the power down notice (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/stopPowerDownNotice '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ci_subscriberequeststart"></a>
## `ci/subscribeRequestStart`

`luna://com.webos.service.legacybroadcast.channel/ci/subscribeRequestStart`

Subscribes to the request start (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/ci/subscribeRequestStart '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="clearchannelmap"></a>
## `clearChannelMap`

`luna://com.webos.service.legacybroadcast.channel/clearChannelMap`

Clears the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/clearChannelMap '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="copydvbsatellitechannelforastra"></a>
## `copyDvbSatelliteChannelForAstra`

`luna://com.webos.service.legacybroadcast.channel/copyDvbSatelliteChannelForAstra`

Copies the DVB satellite channel for astra.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/copyDvbSatelliteChannelForAstra '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletechannel"></a>
## `deleteChannel` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/deleteChannel`

Deletes the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/deleteChannel '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletedvbsatellitechannelforastra"></a>
## `deleteDvbSatelliteChannelForAstra` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/deleteDvbSatelliteChannelForAstra`

Deletes the DVB satellite channel for astra.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/deleteDvbSatelliteChannelForAstra '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="exportchannelmap"></a>
## `exportChannelMap`

`luna://com.webos.service.legacybroadcast.channel/exportChannelMap`

Exports the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/exportChannelMap '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="extractchannelmap"></a>
## `extractChannelMap`

`luna://com.webos.service.legacybroadcast.channel/extractChannelMap`

Extracts the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/extractChannelMap '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbarkerstatus"></a>
## `getBarkerStatus`

`luna://com.webos.service.legacybroadcast.channel/getBarkerStatus`

Returns the barker status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getBarkerStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaidlistfromdvbsi"></a>
## `getCaIdListFromDvbSi`

`luna://com.webos.service.legacybroadcast.channel/getCaIdListFromDvbSi`

Returns the ca ID list from DVB SI.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getCaIdListFromDvbSi '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannel"></a>
## `getChannel`

`luna://com.webos.service.legacybroadcast.channel/getChannel`

Returns the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgroup"></a>
## `getChannelGroup`

`luna://com.webos.service.legacybroadcast.channel/getChannelGroup`

Returns the channel group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelGroup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.legacybroadcast.channel/getChannelGroupList`

Returns the channel group list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelGroupList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistupdateinfo"></a>
## `getChannelListUpdateInfo`

`luna://com.webos.service.legacybroadcast.channel/getChannelListUpdateInfo`

Returns the channel list update info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelListUpdateInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistupdatestatus"></a>
## `getChannelListUpdateStatus`

`luna://com.webos.service.legacybroadcast.channel/getChannelListUpdateStatus`

Returns the channel list update status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelListUpdateStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelmode"></a>
## `getChannelMode`

`luna://com.webos.service.legacybroadcast.channel/getChannelMode`

Returns the channel mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelMode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelmodelist"></a>
## `getChannelModeList`

`luna://com.webos.service.legacybroadcast.channel/getChannelModeList`

Returns the channel mode list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelModeList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelshortcutkey"></a>
## `getChannelShortcutKey`

`luna://com.webos.service.legacybroadcast.channel/getChannelShortcutKey`

Returns the channel shortcut key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelShortcutKey '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelshortcutkeylist"></a>
## `getChannelShortcutKeyList`

`luna://com.webos.service.legacybroadcast.channel/getChannelShortcutKeyList`

Returns the channel shortcut key list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelShortcutKeyList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelsortmode"></a>
## `getChannelSortMode`

`luna://com.webos.service.legacybroadcast.channel/getChannelSortMode`

Returns the channel sort mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelSortMode '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchanneltypelist"></a>
## `getChannelTypeList`

`luna://com.webos.service.legacybroadcast.channel/getChannelTypeList`

Returns the channel type list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelTypeList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelzappinglist"></a>
## `getChannelZappingList`

`luna://com.webos.service.legacybroadcast.channel/getChannelZappingList`

Returns the channel zapping list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelZappingList '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelzappinglistcount"></a>
## `getChannelZappingListCount`

`luna://com.webos.service.legacybroadcast.channel/getChannelZappingListCount`

Returns the channel zapping list count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getChannelZappingListCount '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannelid"></a>
## `getCurrentChannelId`

`luna://com.webos.service.legacybroadcast.channel/getCurrentChannelId`

Returns the current channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getCurrentChannelId '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentvideoview"></a>
## `getCurrentVideoView`

`luna://com.webos.service.legacybroadcast.channel/getCurrentVideoView`

Returns the current video view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getCurrentVideoView '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdirecttunechannel"></a>
## `getDirectTuneChannel`

`luna://com.webos.service.legacybroadcast.channel/getDirectTuneChannel`

Returns the direct tune channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getDirectTuneChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getewbsmonitoringinfo"></a>
## `getEwbsMonitoringInfo`

`luna://com.webos.service.legacybroadcast.channel/getEwbsMonitoringInfo`

Returns the ewbs monitoring info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getEwbsMonitoringInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getewsevent"></a>
## `getEwsEvent`

`luna://com.webos.service.legacybroadcast.channel/getEwsEvent`

Returns the ews event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getEwsEvent '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getlastchannelid"></a>
## `getLastChannelId`

`luna://com.webos.service.legacybroadcast.channel/getLastChannelId`

Returns the last channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getLastChannelId '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlogoimage"></a>
## `getLogoImage`

`luna://com.webos.service.legacybroadcast.channel/getLogoImage`

Returns the logo image.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getLogoImage '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpreferredregionnid"></a>
## `getPreferredRegionNId`

`luna://com.webos.service.legacybroadcast.channel/getPreferredRegionNId`

Returns the preferred region n ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getPreferredRegionNId '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getprimarychannellist"></a>
## `getPrimaryChannelList`

`luna://com.webos.service.legacybroadcast.channel/getPrimaryChannelList`

Returns the primary channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getPrimaryChannelList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsatellitebouquetlist"></a>
## `getSatelliteBouquetList`

`luna://com.webos.service.legacybroadcast.channel/getSatelliteBouquetList`

Returns the satellite bouquet list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getSatelliteBouquetList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getscannedsatellitelist"></a>
## `getScannedSatelliteList`

`luna://com.webos.service.legacybroadcast.channel/getScannedSatelliteList`

Returns the scanned satellite list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getScannedSatelliteList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignalinfostatus"></a>
## `getSignalInfoStatus`

`luna://com.webos.service.legacybroadcast.channel/getSignalInfoStatus`

Returns the signal info status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getSignalInfoStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsimilarchannellist"></a>
## `getSimilarChannelList`

`luna://com.webos.service.legacybroadcast.channel/getSimilarChannelList`

Returns the similar channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getSimilarChannelList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsortedlist"></a>
## `getSortedList`

`luna://com.webos.service.legacybroadcast.channel/getSortedList`

Returns the sorted list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getSortedList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getspecialserviceinfo"></a>
## `getSpecialServiceInfo`

`luna://com.webos.service.legacybroadcast.channel/getSpecialServiceInfo`

Returns the special service info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getSpecialServiceInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoviewlist"></a>
## `getVideoViewList`

`luna://com.webos.service.legacybroadcast.channel/getVideoViewList`

Returns the video view list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/getVideoViewList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="importchannelmap"></a>
## `importChannelMap`

`luna://com.webos.service.legacybroadcast.channel/importChannelMap`

Imports the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/importChannelMap '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isanalogchannellistautosorted"></a>
## `isAnalogChannelListAutoSorted`

`luna://com.webos.service.legacybroadcast.channel/isAnalogChannelListAutoSorted`

Reports whether the analog channel list auto sorted is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/isAnalogChannelListAutoSorted '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iscurrentchannelvirtualservice"></a>
## `isCurrentChannelVirtualService`

`luna://com.webos.service.legacybroadcast.channel/isCurrentChannelVirtualService`

Reports whether the current channel virtual service is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/isCurrentChannelVirtualService '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannel"></a>
## `moveChannel`

`luna://com.webos.service.legacybroadcast.channel/moveChannel`

Moves the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/moveChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifychannellistchanged"></a>
## `notifyChannelListChanged`

`luna://com.webos.service.legacybroadcast.channel/notifyChannelListChanged`

Notifies of the channel list changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/notifyChannelListChanged '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyrecommendedchannel"></a>
## `notifyRecommendedChannel`

`luna://com.webos.service.legacybroadcast.channel/notifyRecommendedChannel`

Notifies of the recommended channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/notifyRecommendedChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_connectdrm"></a>
## `oipfdrmagent/connectDrm`

`luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/connectDrm`

Connects the DRM (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/connectDrm '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_disconnectdrm"></a>
## `oipfdrmagent/disConnectDrm`

`luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/disConnectDrm`

Handles the dis connect DRM (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/disConnectDrm '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_getdrmidlist"></a>
## `oipfdrmagent/getDrmIdList`

`luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/getDrmIdList`

Returns the DRM ID list (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/getDrmIdList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_getdrmmessageresult"></a>
## `oipfdrmagent/getDrmMessageResult`

`luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/getDrmMessageResult`

Returns the DRM message result (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/getDrmMessageResult '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_getdrmsystemmessage"></a>
## `oipfdrmagent/getDRMSystemMessage`

`luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/getDRMSystemMessage`

Returns the DRM system message (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/getDRMSystemMessage '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_senddrmmessage"></a>
## `oipfdrmagent/sendDrmMessage`

`luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/sendDrmMessage`

Sends the DRM message (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/oipfdrmagent/sendDrmMessage '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelblock"></a>
## `releaseChannelBlock`

`luna://com.webos.service.legacybroadcast.channel/releaseChannelBlock`

Releases the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/releaseChannelBlock '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelshortcutkey"></a>
## `releaseChannelShortcutKey`

`luna://com.webos.service.legacybroadcast.channel/releaseChannelShortcutKey`

Releases the channel shortcut key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/releaseChannelShortcutKey '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelskip"></a>
## `releaseChannelSkip`

`luna://com.webos.service.legacybroadcast.channel/releaseChannelSkip`

Releases the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/releaseChannelSkip '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasemessagechannel"></a>
## `releaseMessageChannel`

`luna://com.webos.service.legacybroadcast.channel/releaseMessageChannel`

Releases the message channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/releaseMessageChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetchannelshortcutkeylist"></a>
## `resetChannelShortcutKeyList` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/resetChannelShortcutKeyList`

Resets the channel shortcut key list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/resetChannelShortcutKeyList '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="revertchannelmap"></a>
## `revertChannelMap`

`luna://com.webos.service.legacybroadcast.channel/revertChannelMap`

Reverts the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/revertChannelMap '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="savechannellist"></a>
## `saveChannelList`

`luna://com.webos.service.legacybroadcast.channel/saveChannelList`

Saves the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/saveChannelList '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_adddvbsatellitetransponder"></a>
## `scan/addDvbSatelliteTransponder`

`luna://com.webos.service.legacybroadcast.channel/scan/addDvbSatelliteTransponder`

Adds the DVB satellite transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/addDvbSatelliteTransponder '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_bindtobroadcast"></a>
## `scan/bindToBroadcast`

`luna://com.webos.service.legacybroadcast.channel/scan/bindToBroadcast`

Binds the to broadcast (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/bindToBroadcast '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelanalogmanualtuning"></a>
## `scan/cancelAnalogManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelAnalogManualTuning`

Cancels the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelAnalogManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelaribsatellitesignaltest"></a>
## `scan/cancelAribSatelliteSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelAribSatelliteSignalTest`

Cancels the arib satellite signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelAribSatelliteSignalTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelaribterrestrialsignaltest"></a>
## `scan/cancelAribTerrestrialSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelAribTerrestrialSignalTest`

Cancels the arib terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelAribTerrestrialSignalTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelatscmanualtuning"></a>
## `scan/cancelAtscManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelAtscManualTuning`

Cancels the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelAtscManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbcablemanualtuning"></a>
## `scan/cancelDvbCableManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbCableManualTuning`

Cancels the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbCableManualTuning '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitegatheringastrachannellists"></a>
## `scan/cancelDvbSatelliteGatheringAstraChannelLists`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteGatheringAstraChannelLists`

Cancels the DVB satellite gathering astra channel lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteGatheringAstraChannelLists '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitegatheringtricolorregionallists"></a>
## `scan/cancelDvbSatelliteGatheringTricolorRegionalLists`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteGatheringTricolorRegionalLists`

Cancels the DVB satellite gathering tricolor regional lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteGatheringTricolorRegionalLists '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitem7autodiseqcconfiguration"></a>
## `scan/cancelDvbSatelliteM7AutoDiSEqCConfiguration`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteM7AutoDiSEqCConfiguration`

Cancels the DVB satellite m 7 auto di s eq c configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteM7AutoDiSEqCConfiguration '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitem7hometpsearch"></a>
## `scan/cancelDvbSatelliteM7HomeTPSearch`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteM7HomeTPSearch`

Cancels the DVB satellite m 7 home TP search (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteM7HomeTPSearch '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitemanualtuning"></a>
## `scan/cancelDvbSatelliteManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteManualTuning`

Cancels the DVB satellite manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbSatelliteManualTuning '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbterrestrialmanualtuning"></a>
## `scan/cancelDvbTerrestrialManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbTerrestrialManualTuning`

Cancels the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/cancelDvbTerrestrialManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cleardvbsatellitetkgsvisibletransponderlist"></a>
## `scan/clearDvbSatelliteTkgsVisibleTransponderList`

`luna://com.webos.service.legacybroadcast.channel/scan/clearDvbSatelliteTkgsVisibleTransponderList`

Clears the DVB satellite tkgs visible transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/clearDvbSatelliteTkgsVisibleTransponderList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_clearopcamchannels"></a>
## `scan/clearOpCamChannels`

`luna://com.webos.service.legacybroadcast.channel/scan/clearOpCamChannels`

Clears the op CAM channels (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/clearOpCamChannels '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_clearukconflict"></a>
## `scan/clearUKconflict`

`luna://com.webos.service.legacybroadcast.channel/scan/clearUKconflict`

Clears the u kconflict (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/clearUKconflict '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_createdvbsatelliteconfiguration"></a>
## `scan/createDvbSatelliteConfiguration`

`luna://com.webos.service.legacybroadcast.channel/scan/createDvbSatelliteConfiguration`

Creates the DVB satellite configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/createDvbSatelliteConfiguration '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_deleteanalogmanualtuning"></a>
## `scan/deleteAnalogManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/deleteAnalogManualTuning`

Deletes the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/deleteAnalogManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deleteatscmanualtuning"></a>
## `scan/deleteAtscManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/deleteAtscManualTuning`

Deletes the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/deleteAtscManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbcablemanualtuning"></a>
## `scan/deleteDvbCableManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbCableManualTuning`

Deletes the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbCableManualTuning '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbsatelliteconfiguration"></a>
## `scan/deleteDvbSatelliteConfiguration` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbSatelliteConfiguration`

Deletes the DVB satellite configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbSatelliteConfiguration '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbsatellitetransponder"></a>
## `scan/deleteDvbSatelliteTransponder` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbSatelliteTransponder`

Deletes the DVB satellite transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbSatelliteTransponder '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbterrestrialmanualtuning"></a>
## `scan/deleteDvbTerrestrialManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbTerrestrialManualTuning`

Deletes the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/deleteDvbTerrestrialManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_editdvbsatellitetkgsvisibletransponder"></a>
## `scan/editDvbSatelliteTkgsVisibleTransponder`

`luna://com.webos.service.legacybroadcast.channel/scan/editDvbSatelliteTkgsVisibleTransponder`

Edits the DVB satellite tkgs visible transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/editDvbSatelliteTkgsVisibleTransponder '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_editdvbsatellitetransponder"></a>
## `scan/editDvbSatelliteTransponder`

`luna://com.webos.service.legacybroadcast.channel/scan/editDvbSatelliteTransponder`

Edits the DVB satellite transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/editDvbSatelliteTransponder '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogdefaulttuneinfo"></a>
## `scan/getAnalogDefaultTuneInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getAnalogDefaultTuneInfo`

Returns the analog default tune info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAnalogDefaultTuneInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogfrequencylist"></a>
## `scan/getAnalogFrequencyList`

`luna://com.webos.service.legacybroadcast.channel/scan/getAnalogFrequencyList`

Returns the analog frequency list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAnalogFrequencyList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogprogramnumber"></a>
## `scan/getAnalogProgramNumber`

`luna://com.webos.service.legacybroadcast.channel/scan/getAnalogProgramNumber`

Returns the analog program number (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAnalogProgramNumber '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogscaninfo"></a>
## `scan/getAnalogScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getAnalogScanInfo`

Returns the analog scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAnalogScanInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogtuningstatus"></a>
## `scan/getAnalogTuningStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getAnalogTuningStatus`

Returns the analog tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAnalogTuningStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribsatellitescaninfo"></a>
## `scan/getAribSatelliteScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getAribSatelliteScanInfo`

Returns the arib satellite scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAribSatelliteScanInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribsatellitetuningstatus"></a>
## `scan/getAribSatelliteTuningStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getAribSatelliteTuningStatus`

Returns the arib satellite tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAribSatelliteTuningStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribterrestrialscaninfo"></a>
## `scan/getAribTerrestrialScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getAribTerrestrialScanInfo`

Returns the arib terrestrial scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAribTerrestrialScanInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribterrestrialtuningstatus"></a>
## `scan/getAribTerrestrialTuningStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getAribTerrestrialTuningStatus`

Returns the arib terrestrial tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAribTerrestrialTuningStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatscscaninfo"></a>
## `scan/getAtscScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getAtscScanInfo`

Returns the ATSC scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAtscScanInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatsctuningstatus"></a>
## `scan/getAtscTuningStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getAtscTuningStatus`

Returns the ATSC tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAtscTuningStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltype"></a>
## `scan/getAutoScanChannelType`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanChannelType`

Returns the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanChannelType '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltypeorder"></a>
## `scan/getAutoScanChannelTypeOrder`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanChannelTypeOrder`

Returns the auto scan channel type order (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanChannelTypeOrder '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanconflictinfo"></a>
## `scan/getAutoScanConflictInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanConflictInfo`

Returns the auto scan conflict info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanConflictInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanmodeforstore"></a>
## `scan/getAutoScanModeForStore`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanModeForStore`

Returns the auto scan mode for store (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanModeForStore '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanprogress"></a>
## `scan/getAutoScanProgress`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanProgress`

Returns the auto scan progress (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanProgress '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourceorderstatus"></a>
## `scan/getAutoScanSourceOrderStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanSourceOrderStatus`

Returns the auto scan source order status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanSourceOrderStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourcesearchresult"></a>
## `scan/getAutoScanSourceSearchResult`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanSourceSearchResult`

Returns the auto scan source search result (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanSourceSearchResult '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanstatus"></a>
## `scan/getAutoScanStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanStatus`

Returns the auto scan status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getAutoScanStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellistcounttosolveconflictlcn"></a>
## `scan/getChannelListCountToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/getChannelListCountToSolveConflictLcn`

Returns the channel list count to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getChannelListCountToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellistcounttosolvesatcustomisedlcn"></a>
## `scan/getChannelListCountToSolveSatCustomisedLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/getChannelListCountToSolveSatCustomisedLcn`

Returns the channel list count to solve sat customised lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getChannelListCountToSolveSatCustomisedLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellisttosolveconflictlcn"></a>
## `scan/getChannelListToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/getChannelListToSolveConflictLcn`

Returns the channel list to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getChannelListToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellisttosolveconflictlcnforlivetv"></a>
## `scan/getChannelListToSolveConflictLcnForLiveTV`

`luna://com.webos.service.legacybroadcast.channel/scan/getChannelListToSolveConflictLcnForLiveTV`

Returns the channel list to solve conflict lcn for live TV (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getChannelListToSolveConflictLcnForLiveTV '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellisttosolvesatcustomisedlcn"></a>
## `scan/getChannelListToSolveSatCustomisedLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/getChannelListToSolveSatCustomisedLcn`

Returns the channel list to solve sat customised lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getChannelListToSolveSatCustomisedLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getconflictlcnlist"></a>
## `scan/getConflictLcnList`

`luna://com.webos.service.legacybroadcast.channel/scan/getConflictLcnList`

Returns the conflict lcn list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getConflictLcnList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getconflictlcnlistforlivetv"></a>
## `scan/getConflictLcnListForLiveTV`

`luna://com.webos.service.legacybroadcast.channel/scan/getConflictLcnListForLiveTV`

Returns the conflict lcn list for live TV (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getConflictLcnListForLiveTV '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcabledefaulttuneinfo"></a>
## `scan/getDvbCableDefaultTuneInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableDefaultTuneInfo`

Returns the DVB cable default tune info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableDefaultTuneInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcableprogramautoupdate"></a>
## `scan/getDvbCableProgramAutoUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableProgramAutoUpdate`

Returns the DVB cable program auto update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableProgramAutoUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablescaninfo"></a>
## `scan/getDvbCableScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableScanInfo`

Returns the DVB cable scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableScanInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablescanoption"></a>
## `scan/getDvbCableScanOption`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableScanOption`

Returns the DVB cable scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableScanOption '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcableserviceoperator"></a>
## `scan/getDvbCableServiceOperator`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableServiceOperator`

Returns the DVB cable service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcableserviceoperatorlist"></a>
## `scan/getDvbCableServiceOperatorList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableServiceOperatorList`

Returns the DVB cable service operator list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableServiceOperatorList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcableserviceoperatorlistcount"></a>
## `scan/getDvbCableServiceOperatorListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableServiceOperatorListCount`

Returns the DVB cable service operator list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableServiceOperatorListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablesignaltestinfostatus"></a>
## `scan/getDvbCableSignalTestInfoStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableSignalTestInfoStatus`

Returns the DVB cable signal test info status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableSignalTestInfoStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablesignalteststatus"></a>
## `scan/getDvbCableSignalTestStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableSignalTestStatus`

Returns the DVB cable signal test status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableSignalTestStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcabletuningstatus"></a>
## `scan/getDvbCableTuningStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableTuningStatus`

Returns the DVB cable tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbCableTuningStatus '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellite2tunerconn"></a>
## `scan/getDvbSatellite2TunerConn`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatellite2TunerConn`

Returns the DVB satellite 2 tuner conn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatellite2TunerConn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteastrachannellists"></a>
## `scan/getDvbSatelliteAstraChannelLists`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteAstraChannelLists`

Returns the DVB satellite astra channel lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteAstraChannelLists '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteastrachannellistscount"></a>
## `scan/getDvbSatelliteAstraChannelListsCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteAstraChannelListsCount`

Returns the DVB satellite astra channel lists count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteAstraChannelListsCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteconfigurationlist"></a>
## `scan/getDvbSatelliteConfigurationList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteConfigurationList`

Returns the DVB satellite configuration list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteConfigurationList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteconfigurationlistcount"></a>
## `scan/getDvbSatelliteConfigurationListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteConfigurationListCount`

Returns the DVB satellite configuration list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteConfigurationListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitediseqcmotorsetting"></a>
## `scan/getDvbSatelliteDiSEqCMotorSetting`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteDiSEqCMotorSetting`

Returns the DVB satellite di s eq c motor setting (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteDiSEqCMotorSetting '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitegatheringastrachannellistsstatus"></a>
## `scan/getDvbSatelliteGatheringAstraChannelListsStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteGatheringAstraChannelListsStatus`

Returns the DVB satellite gathering astra channel lists status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteGatheringAstraChannelListsStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitegatheringtricolorregionallistsstatus"></a>
## `scan/getDvbSatelliteGatheringTricolorRegionalListsStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteGatheringTricolorRegionalListsStatus`

Returns the DVB satellite gathering tricolor regional lists status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteGatheringTricolorRegionalListsStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitelist"></a>
## `scan/getDvbSatelliteList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteList`

Returns the DVB satellite list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitelistcount"></a>
## `scan/getDvbSatelliteListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteListCount`

Returns the DVB satellite list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitelocationlongitude"></a>
## `scan/getDvbSatelliteLocationLongitude`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteLocationLongitude`

Returns the DVB satellite location longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteLocationLongitude '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7autodiseqcconfigurationstatus"></a>
## `scan/getDvbSatelliteM7AutoDiSEqCConfigurationStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7AutoDiSEqCConfigurationStatus`

Returns the DVB satellite m 7 auto di s eq c configuration status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7AutoDiSEqCConfigurationStatus '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7hometpsearchstatus"></a>
## `scan/getDvbSatelliteM7HomeTpSearchStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7HomeTpSearchStatus`

Returns the DVB satellite m 7 home tp search status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7HomeTpSearchStatus '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7orfregionalprogram"></a>
## `scan/getDvbSatelliteM7ORFRegionalProgram`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ORFRegionalProgram`

Returns the DVB satellite m 7 ORF regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ORFRegionalProgram '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7orfregionalprogramlist"></a>
## `scan/getDvbSatelliteM7ORFRegionalProgramList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ORFRegionalProgramList`

Returns the DVB satellite m 7 ORF regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ORFRegionalProgramList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7orfregionalprogramlistcount"></a>
## `scan/getDvbSatelliteM7ORFRegionalProgramListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ORFRegionalProgramListCount`

Returns the DVB satellite m 7 ORF regional program list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ORFRegionalProgramListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7regionalprogramlist"></a>
## `scan/getDvbSatelliteM7RegionalProgramList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7RegionalProgramList`

Returns the DVB satellite m 7 regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7RegionalProgramList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7regionlist"></a>
## `scan/getDvbSatelliteM7RegionList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7RegionList`

Returns the DVB satellite m 7 region list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7RegionList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7selectedregionalprogramlist"></a>
## `scan/getDvbSatelliteM7SelectedRegionalProgramList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7SelectedRegionalProgramList`

Returns the DVB satellite m 7 selected regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7SelectedRegionalProgramList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7serviceoperatorsublists"></a>
## `scan/getDvbSatelliteM7ServiceOperatorSubLists`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ServiceOperatorSubLists`

Returns the DVB satellite m 7 service operator sub lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteM7ServiceOperatorSubLists '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitemotorstatus"></a>
## `scan/getDvbSatelliteMotorStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteMotorStatus`

Returns the DVB satellite motor status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteMotorStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitemylatitude"></a>
## `scan/getDvbSatelliteMyLatitude`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteMyLatitude`

Returns the DVB satellite my latitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteMyLatitude '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitemylongitude"></a>
## `scan/getDvbSatelliteMyLongitude`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteMyLongitude`

Returns the DVB satellite my longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteMyLongitude '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteorsregionalprogram"></a>
## `scan/getDvbSatelliteORSRegionalProgram`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteORSRegionalProgram`

Returns the DVB satellite ORS regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteORSRegionalProgram '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteorsregionalprogramlist"></a>
## `scan/getDvbSatelliteORSRegionalProgramList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteORSRegionalProgramList`

Returns the DVB satellite ORS regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteORSRegionalProgramList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteorsregionalprogramlistcount"></a>
## `scan/getDvbSatelliteORSRegionalProgramListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteORSRegionalProgramListCount`

Returns the DVB satellite ORS regional program list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteORSRegionalProgramListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteregion"></a>
## `scan/getDvbSatelliteRegion`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteRegion`

Returns the DVB satellite region (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteRegion '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteregionlist"></a>
## `scan/getDvbSatelliteRegionList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteRegionList`

Returns the DVB satellite region list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteRegionList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteregionlistcount"></a>
## `scan/getDvbSatelliteRegionListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteRegionListCount`

Returns the DVB satellite region list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteRegionListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteselectedastrachannellist"></a>
## `scan/getDvbSatelliteSelectedAstraChannelList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteSelectedAstraChannelList`

Returns the DVB satellite selected astra channel list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteSelectedAstraChannelList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteserviceoperator"></a>
## `scan/getDvbSatelliteServiceOperator`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteServiceOperator`

Returns the DVB satellite service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteserviceoperatorlist"></a>
## `scan/getDvbSatelliteServiceOperatorList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteServiceOperatorList`

Returns the DVB satellite service operator list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteServiceOperatorList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteserviceoperatorlistcount"></a>
## `scan/getDvbSatelliteServiceOperatorListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteServiceOperatorListCount`

Returns the DVB satellite service operator list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteServiceOperatorListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgshiddentransponderlist"></a>
## `scan/getDvbSatelliteTkgsHiddenTransponderList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsHiddenTransponderList`

Returns the DVB satellite tkgs hidden transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsHiddenTransponderList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgshiddentransponderlistcount"></a>
## `scan/getDvbSatelliteTkgsHiddenTransponderListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsHiddenTransponderListCount`

Returns the DVB satellite tkgs hidden transponder list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsHiddenTransponderListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgspreferredlistcount"></a>
## `scan/getDvbSatelliteTkgsPreferredListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsPreferredListCount`

Returns the DVB satellite tkgs preferred list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsPreferredListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgspreferredlists"></a>
## `scan/getDvbSatelliteTkgsPreferredLists`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsPreferredLists`

Returns the DVB satellite tkgs preferred lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsPreferredLists '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsselectedpreferredlist"></a>
## `scan/getDvbSatelliteTkgsSelectedPreferredList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsSelectedPreferredList`

Returns the DVB satellite tkgs selected preferred list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsSelectedPreferredList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgstestmode"></a>
## `scan/getDvbSatelliteTkgsTestMode`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsTestMode`

Returns the DVB satellite tkgs test mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsTestMode '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsupdatelistsstatus"></a>
## `scan/getDvbSatelliteTkgsUpdateListsStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsUpdateListsStatus`

Returns the DVB satellite tkgs update lists status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsUpdateListsStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsversion"></a>
## `scan/getDvbSatelliteTkgsVersion`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsVersion`

Returns the DVB satellite tkgs version (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsVersion '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsvisibletransponderlist"></a>
## `scan/getDvbSatelliteTkgsVisibleTransponderList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsVisibleTransponderList`

Returns the DVB satellite tkgs visible transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsVisibleTransponderList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsvisibletransponderlistcount"></a>
## `scan/getDvbSatelliteTkgsVisibleTransponderListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsVisibleTransponderListCount`

Returns the DVB satellite tkgs visible transponder list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTkgsVisibleTransponderListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetransponderlist"></a>
## `scan/getDvbSatelliteTransponderList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTransponderList`

Returns the DVB satellite transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTransponderList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetransponderlistcount"></a>
## `scan/getDvbSatelliteTransponderListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTransponderListCount`

Returns the DVB satellite transponder list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTransponderListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetricolorregionallist"></a>
## `scan/getDvbSatelliteTricolorRegionalList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTricolorRegionalList`

Returns the DVB satellite tricolor regional list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTricolorRegionalList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetricolorregionallists"></a>
## `scan/getDvbSatelliteTricolorRegionalLists`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTricolorRegionalLists`

Returns the DVB satellite tricolor regional lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTricolorRegionalLists '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetricolorregionallistscount"></a>
## `scan/getDvbSatelliteTricolorRegionalListsCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTricolorRegionalListsCount`

Returns the DVB satellite tricolor regional lists count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTricolorRegionalListsCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetuningstatus"></a>
## `scan/getDvbSatelliteTuningStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTuningStatus`

Returns the DVB satellite tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbSatelliteTuningStatus '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialdefaulttuneinfo"></a>
## `scan/getDvbTerrestrialDefaultTuneInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialDefaultTuneInfo`

Returns the DVB terrestrial default tune info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialDefaultTuneInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialscaninfo"></a>
## `scan/getDvbTerrestrialScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialScanInfo`

Returns the DVB terrestrial scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialScanInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialscaninfocount"></a>
## `scan/getDvbTerrestrialScanInfoCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialScanInfoCount`

Returns the DVB terrestrial scan info count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialScanInfoCount '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialscanoption"></a>
## `scan/getDvbTerrestrialScanOption`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialScanOption`

Returns the DVB terrestrial scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialScanOption '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialserviceoperator"></a>
## `scan/getDvbTerrestrialServiceOperator`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialServiceOperator`

Returns the DVB terrestrial service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialserviceoperatorlist"></a>
## `scan/getDvbTerrestrialServiceOperatorList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialServiceOperatorList`

Returns the DVB terrestrial service operator list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialServiceOperatorList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialsignaltestinfostatus"></a>
## `scan/getDvbTerrestrialSignalTestInfoStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialSignalTestInfoStatus`

Returns the DVB terrestrial signal test info status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialSignalTestInfoStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialsignalteststatus"></a>
## `scan/getDvbTerrestrialSignalTestStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialSignalTestStatus`

Returns the DVB terrestrial signal test status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialSignalTestStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialtuningstatus"></a>
## `scan/getDvbTerrestrialTuningStatus`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialTuningStatus`

Returns the DVB terrestrial tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTerrestrialTuningStatus '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbtkgscurrentoperatingmode"></a>
## `scan/getDvbTKGSCurrentOperatingMode`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTKGSCurrentOperatingMode`

Returns the DVB TKGS current operating mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTKGSCurrentOperatingMode '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbtkgsoperatingmodelist"></a>
## `scan/getDvbTKGSOperatingModeList`

`luna://com.webos.service.legacybroadcast.channel/scan/getDvbTKGSOperatingModeList`

Returns the DVB TKGS operating mode list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getDvbTKGSOperatingModeList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getlastchannelid"></a>
## `scan/getLastChannelId`

`luna://com.webos.service.legacybroadcast.channel/scan/getLastChannelId`

Returns the last channel ID (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getLastChannelId '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getnetworklisttosolveconflictlcn"></a>
## `scan/getNetworkListToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/getNetworkListToSolveConflictLcn`

Returns the network list to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getNetworkListToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getregionlistcounttosolveconflictlcn"></a>
## `scan/getRegionListCountToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/getRegionListCountToSolveConflictLcn`

Returns the region list count to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getRegionListCountToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getregionlisttosolveconflictlcn"></a>
## `scan/getRegionListToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/getRegionListToSolveConflictLcn`

Returns the region list to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getRegionListToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getregionlisttosolveconflictlcnforlivetv"></a>
## `scan/getRegionListToSolveConflictLcnForLiveTV`

`luna://com.webos.service.legacybroadcast.channel/scan/getRegionListToSolveConflictLcnForLiveTV`

Returns the region list to solve conflict lcn for live TV (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getRegionListToSolveConflictLcnForLiveTV '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsatadultchannellist"></a>
## `scan/getSatAdultChannelList`

`luna://com.webos.service.legacybroadcast.channel/scan/getSatAdultChannelList`

Returns the sat adult channel list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getSatAdultChannelList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsatcustomisedlcnlist"></a>
## `scan/getSatCustomisedLcnList`

`luna://com.webos.service.legacybroadcast.channel/scan/getSatCustomisedLcnList`

Returns the sat customised lcn list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getSatCustomisedLcnList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsatcustomisedlcnlistcount"></a>
## `scan/getSatCustomisedLCNListCount`

`luna://com.webos.service.legacybroadcast.channel/scan/getSatCustomisedLCNListCount`

Returns the sat customised LCN list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getSatCustomisedLCNListCount '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getscannedphysicallist"></a>
## `scan/getScannedPhysicalList`

`luna://com.webos.service.legacybroadcast.channel/scan/getScannedPhysicalList`

Returns the scanned physical list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getScannedPhysicalList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsupportziggospecification"></a>
## `scan/getSupportZiggoSpecification`

`luna://com.webos.service.legacybroadcast.channel/scan/getSupportZiggoSpecification`

Returns the support ziggo specification (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getSupportZiggoSpecification '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsupportziggovod"></a>
## `scan/getSupportZiggoVOD`

`luna://com.webos.service.legacybroadcast.channel/scan/getSupportZiggoVOD`

Returns the support ziggo VOD (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/getSupportZiggoVOD '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitehometpmodificationallowed"></a>
## `scan/isDvbSatelliteHomeTpModificationAllowed`

`luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteHomeTpModificationAllowed`

Reports whether the DVB satellite home tp modification allowed is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteHomeTpModificationAllowed '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitem7regionalprogramavailable"></a>
## `scan/isDvbSatelliteM7RegionalProgramAvailable`

`luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteM7RegionalProgramAvailable`

Reports whether the DVB satellite m 7 regional program available is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteM7RegionalProgramAvailable '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitem7serviceoperator"></a>
## `scan/isDvbSatelliteM7ServiceOperator`

`luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteM7ServiceOperator`

Reports whether the DVB satellite m 7 service operator is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteM7ServiceOperator '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitetkgsupdaterequired"></a>
## `scan/isDvbSatelliteTkgsUpdateRequired`

`luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteTkgsUpdateRequired`

Reports whether the DVB satellite tkgs update required is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/isDvbSatelliteTkgsUpdateRequired '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_isservicelistconflictsolved"></a>
## `scan/isServiceListConflictSolved`

`luna://com.webos.service.legacybroadcast.channel/scan/isServiceListConflictSolved`

Reports whether the service list conflict solved is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/isServiceListConflictSolved '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_movedvbsatellitediseqcmotor"></a>
## `scan/moveDvbSatelliteDiSEqCMotor`

`luna://com.webos.service.legacybroadcast.channel/scan/moveDvbSatelliteDiSEqCMotor`

Moves the DVB satellite di s eq c motor (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/moveDvbSatelliteDiSEqCMotor '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_movedvbsatelliteusalsmotor"></a>
## `scan/moveDvbSatelliteUSALSMotor`

`luna://com.webos.service.legacybroadcast.channel/scan/moveDvbSatelliteUSALSMotor`

Moves the DVB satellite USALS motor (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/moveDvbSatelliteUSALSMotor '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_releasebroadcast"></a>
## `scan/releaseBroadcast`

`luna://com.webos.service.legacybroadcast.channel/scan/releaseBroadcast`

Releases the broadcast (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/releaseBroadcast '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbcablenetworkscaninfo"></a>
## `scan/resetDvbCableNetworkScanInfo` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableNetworkScanInfo`

Resets the DVB cable network scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableNetworkScanInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbcablequickscaninfo"></a>
## `scan/resetDvbCableQuickScanInfo` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableQuickScanInfo`

Resets the DVB cable quick scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableQuickScanInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbcablescaninfo"></a>
## `scan/resetDvbCableScanInfo` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableScanInfo`

Resets the DVB cable scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resetDvbCableScanInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitediseqcmotor"></a>
## `scan/resetDvbSatelliteDiSEqCMotor` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteDiSEqCMotor`

Resets the DVB satellite di s eq c motor (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteDiSEqCMotor '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitediseqcmotorlimit"></a>
## `scan/resetDvbSatelliteDiSEqCMotorLimit` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteDiSEqCMotorLimit`

Resets the DVB satellite di s eq c motor limit (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteDiSEqCMotorLimit '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitetkgshiddentransponderlist"></a>
## `scan/resetDvbSatelliteTkgsHiddenTransponderList` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteTkgsHiddenTransponderList`

Resets the DVB satellite tkgs hidden transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteTkgsHiddenTransponderList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitetkgsversion"></a>
## `scan/resetDvbSatelliteTkgsVersion` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteTkgsVersion`

Resets the DVB satellite tkgs version (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resetDvbSatelliteTkgsVersion '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resumeautoscan"></a>
## `scan/resumeAutoScan`

`luna://com.webos.service.legacybroadcast.channel/scan/resumeAutoScan`

Resumes the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/resumeAutoScan '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_saveanalogmanualtuning"></a>
## `scan/saveAnalogManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/saveAnalogManualTuning`

Saves the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/saveAnalogManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_saveatscmanualtuning"></a>
## `scan/saveAtscManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/saveAtscManualTuning`

Saves the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/saveAtscManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_savedvbcablemanualtuning"></a>
## `scan/saveDvbCableManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/saveDvbCableManualTuning`

Saves the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/saveDvbCableManualTuning '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_savedvbsatellitemanualtuning"></a>
## `scan/saveDvbSatelliteManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/saveDvbSatelliteManualTuning`

Saves the DVB satellite manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/saveDvbSatelliteManualTuning '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_savedvbterrestrialmanualtuning"></a>
## `scan/saveDvbTerrestrialManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/saveDvbTerrestrialManualTuning`

Saves the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/saveDvbTerrestrialManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setanalogmanualtuning"></a>
## `scan/setAnalogManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/setAnalogManualTuning`

Sets the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setAnalogManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setaribsatellitesignaltest"></a>
## `scan/setAribSatelliteSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/setAribSatelliteSignalTest`

Sets the arib satellite signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setAribSatelliteSignalTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setaribterrestrialsignaltest"></a>
## `scan/setAribTerrestrialSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/setAribTerrestrialSignalTest`

Sets the arib terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setAribTerrestrialSignalTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setatscmanualtuning"></a>
## `scan/setAtscManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/setAtscManualTuning`

Sets the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setAtscManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanchanneltype"></a>
## `scan/setAutoScanChannelType`

`luna://com.webos.service.legacybroadcast.channel/scan/setAutoScanChannelType`

Sets the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setAutoScanChannelType '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanmodeforstore"></a>
## `scan/setAutoScanModeForStore`

`luna://com.webos.service.legacybroadcast.channel/scan/setAutoScanModeForStore`

Sets the auto scan mode for store (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setAutoScanModeForStore '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcablemanualtuning"></a>
## `scan/setDvbCableManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableManualTuning`

Sets the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableManualTuning '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcableprogramautoupdate"></a>
## `scan/setDvbCableProgramAutoUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableProgramAutoUpdate`

Sets the DVB cable program auto update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableProgramAutoUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcablescaninfo"></a>
## `scan/setDvbCableScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableScanInfo`

Sets the DVB cable scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableScanInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcablescanoption"></a>
## `scan/setDvbCableScanOption`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableScanOption`

Sets the DVB cable scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableScanOption '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcableserviceoperator"></a>
## `scan/setDvbCableServiceOperator`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableServiceOperator`

Sets the DVB cable service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbCableServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellite2tunerconn"></a>
## `scan/setDvbSatellite2TunerConn`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatellite2TunerConn`

Sets the DVB satellite 2 tuner conn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatellite2TunerConn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteastrachannellist"></a>
## `scan/setDvbSatelliteAstraChannelList`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteAstraChannelList`

Sets the DVB satellite astra channel list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteAstraChannelList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitediseqcmotorlimit"></a>
## `scan/setDvbSatelliteDiSEqCMotorLimit`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteDiSEqCMotorLimit`

Sets the DVB satellite di s eq c motor limit (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteDiSEqCMotorLimit '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitediseqcmotorposition"></a>
## `scan/setDvbSatelliteDiSEqCMotorPosition`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteDiSEqCMotorPosition`

Sets the DVB satellite di s eq c motor position (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteDiSEqCMotorPosition '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitehometps"></a>
## `scan/setDvbSatelliteHomeTPs`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteHomeTPs`

Sets the DVB satellite home t ps (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteHomeTPs '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitelocationlongitude"></a>
## `scan/setDvbSatelliteLocationLongitude`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteLocationLongitude`

Sets the DVB satellite location longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteLocationLongitude '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitem7orfregionalprogram"></a>
## `scan/setDvbSatelliteM7ORFRegionalProgram`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteM7ORFRegionalProgram`

Sets the DVB satellite m 7 ORF regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteM7ORFRegionalProgram '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitem7regionalprogram"></a>
## `scan/setDvbSatelliteM7RegionalProgram`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteM7RegionalProgram`

Sets the DVB satellite m 7 regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteM7RegionalProgram '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitem7serviceoperatorsublist"></a>
## `scan/setDvbSatelliteM7ServiceOperatorSubList`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteM7ServiceOperatorSubList`

Sets the DVB satellite m 7 service operator sub list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteM7ServiceOperatorSubList '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitemanualtuning"></a>
## `scan/setDvbSatelliteManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteManualTuning`

Sets the DVB satellite manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteManualTuning '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitemylatitude"></a>
## `scan/setDvbSatelliteMyLatitude`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteMyLatitude`

Sets the DVB satellite my latitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteMyLatitude '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitemylongitude"></a>
## `scan/setDvbSatelliteMyLongitude`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteMyLongitude`

Sets the DVB satellite my longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteMyLongitude '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteorsregionalprogram"></a>
## `scan/setDvbSatelliteORSRegionalProgram`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteORSRegionalProgram`

Sets the DVB satellite ORS regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteORSRegionalProgram '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteregion"></a>
## `scan/setDvbSatelliteRegion`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteRegion`

Sets the DVB satellite region (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteRegion '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitescaninfo"></a>
## `scan/setDvbSatelliteScanInfo`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteScanInfo`

Sets the DVB satellite scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteScanInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitescanoption"></a>
## `scan/setDvbSatelliteScanOption`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteScanOption`

Sets the DVB satellite scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteScanOption '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteselectedsatellite"></a>
## `scan/setDvbSatelliteSelectedSatellite`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteSelectedSatellite`

Sets the DVB satellite selected satellite (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteSelectedSatellite '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteserviceoperator"></a>
## `scan/setDvbSatelliteServiceOperator`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteServiceOperator`

Sets the DVB satellite service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetkgspreferredlist"></a>
## `scan/setDvbSatelliteTkgsPreferredList`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTkgsPreferredList`

Sets the DVB satellite tkgs preferred list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTkgsPreferredList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetkgstestmode"></a>
## `scan/setDvbSatelliteTkgsTestMode`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTkgsTestMode`

Sets the DVB satellite tkgs test mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTkgsTestMode '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetkgsupdate"></a>
## `scan/setDvbSatelliteTkgsUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTkgsUpdate`

Sets the DVB satellite tkgs update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTkgsUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetricolorregionallist"></a>
## `scan/setDvbSatelliteTricolorRegionalList`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTricolorRegionalList`

Sets the DVB satellite tricolor regional list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbSatelliteTricolorRegionalList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbterrestrialmanualtuning"></a>
## `scan/setDvbTerrestrialManualTuning`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbTerrestrialManualTuning`

Sets the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbTerrestrialManualTuning '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbterrestrialscanoption"></a>
## `scan/setDvbTerrestrialScanOption`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbTerrestrialScanOption`

Sets the DVB terrestrial scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbTerrestrialScanOption '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbterrestrialserviceoperator"></a>
## `scan/setDvbTerrestrialServiceOperator`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbTerrestrialServiceOperator`

Sets the DVB terrestrial service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbTerrestrialServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbtkgscurrentoperatingmode"></a>
## `scan/setDvbTKGSCurrentOperatingMode`

`luna://com.webos.service.legacybroadcast.channel/scan/setDvbTKGSCurrentOperatingMode`

Sets the DVB TKGS current operating mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setDvbTKGSCurrentOperatingMode '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferredchanneltosolveconflictlcn"></a>
## `scan/setPreferredChannelToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/setPreferredChannelToSolveConflictLcn`

Sets the preferred channel to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setPreferredChannelToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferredchanneltosolvesatcustomisedlcn"></a>
## `scan/setPreferredChannelToSolveSatCustomisedLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/setPreferredChannelToSolveSatCustomisedLcn`

Sets the preferred channel to solve sat customised lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setPreferredChannelToSolveSatCustomisedLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferrednetworktosolveconflictlcn"></a>
## `scan/setPreferredNetworkToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/setPreferredNetworkToSolveConflictLcn`

Sets the preferred network to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setPreferredNetworkToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferredregiontosolveconflictlcn"></a>
## `scan/setPreferredRegionToSolveConflictLcn`

`luna://com.webos.service.legacybroadcast.channel/scan/setPreferredRegionToSolveConflictLcn`

Sets the preferred region to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setPreferredRegionToSolveConflictLcn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferredregiontosolveconflictlcnforlivetv"></a>
## `scan/setPreferredRegionToSolveConflictLcnForLiveTV`

`luna://com.webos.service.legacybroadcast.channel/scan/setPreferredRegionToSolveConflictLcnForLiveTV`

Sets the preferred region to solve conflict lcn for live TV (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/setPreferredRegionToSolveConflictLcnForLiveTV '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_skipautoscan"></a>
## `scan/skipAutoScan`

`luna://com.webos.service.legacybroadcast.channel/scan/skipAutoScan`

Skips the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/skipAutoScan '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startautoscan"></a>
## `scan/startAutoScan`

`luna://com.webos.service.legacybroadcast.channel/scan/startAutoScan`

Starts the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startAutoScan '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbcablechannellistupdate"></a>
## `scan/startDvbCableChannelListUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbCableChannelListUpdate`

Starts the DVB cable channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbCableChannelListUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbcablesignaltest"></a>
## `scan/startDvbCableSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbCableSignalTest`

Starts the DVB cable signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbCableSignalTest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitechannellistupdate"></a>
## `scan/startDvbSatelliteChannelListUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteChannelListUpdate`

Starts the DVB satellite channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteChannelListUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitegatheringastrachannellists"></a>
## `scan/startDvbSatelliteGatheringAstraChannelLists`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteGatheringAstraChannelLists`

Starts the DVB satellite gathering astra channel lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteGatheringAstraChannelLists '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitegatheringtricolorregionallists"></a>
## `scan/startDvbSatelliteGatheringTricolorRegionalLists`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteGatheringTricolorRegionalLists`

Starts the DVB satellite gathering tricolor regional lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteGatheringTricolorRegionalLists '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitem7autodiseqcconfiguration"></a>
## `scan/startDvbSatelliteM7AutoDiSEqCConfiguration`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteM7AutoDiSEqCConfiguration`

Starts the DVB satellite m 7 auto di s eq c configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteM7AutoDiSEqCConfiguration '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitem7hometpsearch"></a>
## `scan/startDvbSatelliteM7HomeTPSearch`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteM7HomeTPSearch`

Starts the DVB satellite m 7 home TP search (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteM7HomeTPSearch '{}'
```

> ACG groups: legacybroadcast.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitetkgsupdate"></a>
## `scan/startDvbSatelliteTkgsUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteTkgsUpdate`

Starts the DVB satellite tkgs update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbSatelliteTkgsUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbterrestrialchannellistupdate"></a>
## `scan/startDvbTerrestrialChannelListUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbTerrestrialChannelListUpdate`

Starts the DVB terrestrial channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbTerrestrialChannelListUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbterrestrialsignaltest"></a>
## `scan/startDvbTerrestrialSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/startDvbTerrestrialSignalTest`

Starts the DVB terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/startDvbTerrestrialSignalTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopautoscan"></a>
## `scan/stopAutoScan`

`luna://com.webos.service.legacybroadcast.channel/scan/stopAutoScan`

Stops the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopAutoScan '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbcablechannellistupdate"></a>
## `scan/stopDvbCableChannelListUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/stopDvbCableChannelListUpdate`

Stops the DVB cable channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopDvbCableChannelListUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbcablesignaltest"></a>
## `scan/stopDvbCableSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/stopDvbCableSignalTest`

Stops the DVB cable signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopDvbCableSignalTest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbsatellitechannellistupdate"></a>
## `scan/stopDvbSatelliteChannelListUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/stopDvbSatelliteChannelListUpdate`

Stops the DVB satellite channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopDvbSatelliteChannelListUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbsatellitediseqcmotormoving"></a>
## `scan/stopDvbSatelliteDiSEqCMotorMoving`

`luna://com.webos.service.legacybroadcast.channel/scan/stopDvbSatelliteDiSEqCMotorMoving`

Stops the DVB satellite di s eq c motor moving (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopDvbSatelliteDiSEqCMotorMoving '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbsatellitetkgsupdate"></a>
## `scan/stopDvbSatelliteTkgsUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/stopDvbSatelliteTkgsUpdate`

Stops the DVB satellite tkgs update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopDvbSatelliteTkgsUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbterrestrialchannellistupdate"></a>
## `scan/stopDvbTerrestrialChannelListUpdate`

`luna://com.webos.service.legacybroadcast.channel/scan/stopDvbTerrestrialChannelListUpdate`

Stops the DVB terrestrial channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopDvbTerrestrialChannelListUpdate '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbterrestrialsignaltest"></a>
## `scan/stopDvbTerrestrialSignalTest`

`luna://com.webos.service.legacybroadcast.channel/scan/stopDvbTerrestrialSignalTest`

Stops the DVB terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scan/stopDvbTerrestrialSignalTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scanbarkerchannel"></a>
## `scanBarkerChannel`

`luna://com.webos.service.legacybroadcast.channel/scanBarkerChannel`

Scans for barker channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/scanBarkerChannel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelblock"></a>
## `setChannelBlock`

`luna://com.webos.service.legacybroadcast.channel/setChannelBlock`

Sets the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setChannelBlock '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelgroup"></a>
## `setChannelGroup`

`luna://com.webos.service.legacybroadcast.channel/setChannelGroup`

Sets the channel group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setChannelGroup '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelmode"></a>
## `setChannelMode`

`luna://com.webos.service.legacybroadcast.channel/setChannelMode`

Sets the channel mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setChannelMode '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelshortcutkey"></a>
## `setChannelShortcutKey`

`luna://com.webos.service.legacybroadcast.channel/setChannelShortcutKey`

Sets the channel shortcut key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setChannelShortcutKey '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelskip"></a>
## `setChannelSkip`

`luna://com.webos.service.legacybroadcast.channel/setChannelSkip`

Sets the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setChannelSkip '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelsortmode"></a>
## `setChannelSortMode`

`luna://com.webos.service.legacybroadcast.channel/setChannelSortMode`

Sets the channel sort mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setChannelSortMode '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setlastchannelid"></a>
## `setLastChannelId`

`luna://com.webos.service.legacybroadcast.channel/setLastChannelId`

Sets the last channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setLastChannelId '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvideoview"></a>
## `setVideoView`

`luna://com.webos.service.legacybroadcast.channel/setVideoView`

Sets the video view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/setVideoView '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sortanalogchannellist"></a>
## `sortAnalogChannelList`

`luna://com.webos.service.legacybroadcast.channel/sortAnalogChannelList`

Handles the sort analog channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/sortAnalogChannelList '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatechannelmap"></a>
## `updateChannelMap`

`luna://com.webos.service.legacybroadcast.channel/updateChannelMap`

Updates the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.channel/updateChannelMap '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
