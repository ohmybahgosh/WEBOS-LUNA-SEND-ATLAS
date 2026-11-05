# `com.webos.service.utp.channel`

Broadcast channel service (utp stack): large API for channel tuning, scanning, and management, conditional access (ACAS/BCAS), CI/CAM control, and favorites/message channels. _(inferred from the service's methods)_

326 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`acas/getModuleId`](#acas_getmoduleid) | private |  | tv-broadcast | inferred | Returns the module ID (acas) |
| [`acas/getModuleInfo`](#acas_getmoduleinfo) | private |  | tv-broadcast | inferred | Returns the module info (acas) |
| [`bcas/getAutomaticDisplay`](#bcas_getautomaticdisplay) | public |  | tv-broadcast | inferred | Returns the automatic display (bcas) |
| [`bcas/getCardId`](#bcas_getcardid) | private |  | tv-broadcast | inferred | Returns the card ID (bcas) |
| [`bcas/getEmmTimer`](#bcas_getemmtimer) | private |  | tv-broadcast | inferred | Returns the emm timer (bcas) |
| [`bcas/getPayChannelGuide`](#bcas_getpaychannelguide) | public |  | tv-broadcast | inferred | Returns the pay channel guide (bcas) |
| [`bcas/removeEmmTimer`](#bcas_removeemmtimer) | private |  | tv-broadcast | inferred | Removes the emm timer (bcas) ⚠️ |
| [`bcas/setEmmTimer`](#bcas_setemmtimer) | private |  | tv-broadcast | inferred | Sets the emm timer (bcas) |
| [`bcas/setEmmTimerChannel`](#bcas_setemmtimerchannel) | private |  | tv-broadcast | inferred | Sets the emm timer channel (bcas) |
| [`bcas/stopEmmTimerChannel`](#bcas_stopemmtimerchannel) | private |  | tv-broadcast | inferred | Stops the emm timer channel (bcas) |
| [`blockKeyInput`](#blockkeyinput) | private |  | tv-broadcast | inferred | Blocks the key input. |
| [`changeChannelFavorite`](#changechannelfavorite) | public |  | tv-broadcast | inferred | Changes the channel favorite. |
| [`changeChannelType`](#changechanneltype) | public |  | tv-broadcast | inferred | Changes the channel type. |
| [`changeMessageChannel`](#changemessagechannel) | public |  | tv-broadcast | inferred | Changes the message channel. |
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
| [`ci/getCamMessage`](#ci_getcammessage) | private |  | tv-broadcast | inferred | Returns the CAM message (CI) |
| [`ci/getChannelBannerControlStatus`](#ci_getchannelbannercontrolstatus) | private |  | tv-broadcast | inferred | Returns the channel banner control status (CI) |
| [`ci/getCIPlusConnected`](#ci_getciplusconnected) | private |  | tv-broadcast | inferred | Returns the CI plus connected (CI) |
| [`ci/getCIVersion`](#ci_getciversion) | private |  | tv-broadcast | inferred | Returns the CI version (CI) |
| [`ci/getConnectionState`](#ci_getconnectionstate) | private |  | tv-broadcast | inferred | Returns the connection state (CI) |
| [`ci/getEcpControlInfo`](#ci_getecpcontrolinfo) | private |  | tv-broadcast | inferred | Returns the ecp control info (CI) |
| [`ci/getHostCtlInfo`](#ci_gethostctlinfo) | private |  | tv-broadcast | inferred | Returns the host ctl info (CI) |
| [`ci/getLowSpeedConnectionStatus`](#ci_getlowspeedconnectionstatus) | private |  | tv-broadcast | inferred | Returns the low speed connection status (CI) |
| [`ci/getOperatorProfileEnabled`](#ci_getoperatorprofileenabled) | private |  | tv-broadcast | inferred | Returns the operator profile enabled (CI) |
| [`ci/getOsdtPosition`](#ci_getosdtposition) | private |  | tv-broadcast | inferred | Returns the osdt position (CI) |
| [`ci/getSasConnectionState`](#ci_getsasconnectionstate) | private |  | tv-broadcast | inferred | Returns the sas connection state (CI) |
| [`ci/getSasMessage`](#ci_getsasmessage) | private |  | tv-broadcast | inferred | Returns the sas message (CI) |
| [`ci/hostInitiatedCAMPlayRequest`](#ci_hostinitiatedcamplayrequest) | private |  | tv-broadcast | inferred | Handles the host initiated CAM play request (CI) |
| [`ci/hostPlayerRequest`](#ci_hostplayerrequest) | private |  | tv-broadcast | inferred | Handles the host player request (CI) |
| [`ci/IsAppMmiLaunched`](#ci_isappmmilaunched) | private |  | tv-broadcast | inferred | Reports whether the app mmi launched is set (CI) |
| [`ci/ischannelchangeByCamHostControl`](#ci_ischannelchangebycamhostcontrol) | private |  | tv-broadcast | inferred | Handles the ischannelchange by CAM host control (CI) |
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
| [`copyDvbSatelliteChannelForAstra`](#copydvbsatellitechannelforastra) | private |  | tv-broadcast | inferred | Copies the DVB satellite channel for astra. |
| [`deleteDvbSatelliteChannelForAstra`](#deletedvbsatellitechannelforastra) | private |  | tv-broadcast | inferred | Deletes the DVB satellite channel for astra. ⚠️ |
| [`getAudioChannelList`](#getaudiochannellist) | public |  | audio | inferred | Returns the audio channel list. |
| [`getAudioLanguageList`](#getaudiolanguagelist) | public |  | audio | inferred | Returns the audio language list. |
| [`getBarkerStatus`](#getbarkerstatus) | private |  | tv-broadcast | inferred | Returns the barker status. |
| [`getCaIdListFromDvbSi`](#getcaidlistfromdvbsi) | private |  | tv-broadcast | inferred | Returns the ca ID list from DVB SI. |
| [`getChannelGroup`](#getchannelgroup) | public |  | tv-broadcast | inferred | Returns the channel group. |
| [`getChannelGroupList`](#getchannelgrouplist) | public |  | tv-broadcast | inferred | Returns the channel group list. |
| [`getChannelListUpdateInfo`](#getchannellistupdateinfo) | private |  | tv-broadcast | inferred | Returns the channel list update info. |
| [`getChannelListUpdateStatus`](#getchannellistupdatestatus) | private |  | tv-broadcast | inferred | Returns the channel list update status. |
| [`getChannelMode`](#getchannelmode) | public |  | tv-broadcast | inferred | Returns the channel mode. |
| [`getChannelModeList`](#getchannelmodelist) | public |  | tv-broadcast | inferred | Returns the channel mode list. |
| [`getChannelSortMode`](#getchannelsortmode) | private |  | tv-broadcast | inferred | Returns the channel sort mode. |
| [`getChannelTypeList`](#getchanneltypelist) | public |  | tv-broadcast | inferred | Returns the channel type list. |
| [`getCurrentAudioChannel`](#getcurrentaudiochannel) | public |  | audio | inferred | Returns the current audio channel. |
| [`getCurrentAudioCodecType`](#getcurrentaudiocodectype) | public |  | audio | inferred | Returns the current audio codec type. |
| [`getCurrentAudioLanguage`](#getcurrentaudiolanguage) | public |  | audio | inferred | Returns the current audio language. |
| [`getCurrentVideoView`](#getcurrentvideoview) | public |  | tv-broadcast | inferred | Returns the current video view. |
| [`getDirectTuneChannel`](#getdirecttunechannel) | public |  | tv-broadcast | inferred | Returns the direct tune channel. |
| [`getEwsEvent`](#getewsevent) | private |  | tv-broadcast | inferred | Returns the ews event. |
| [`getLastChannelId`](#getlastchannelid) | public |  | tv-broadcast | inferred | Returns the last channel ID. |
| [`getPreferredRegionNId`](#getpreferredregionnid) | private |  | tv-broadcast | inferred | Returns the preferred region n ID. |
| [`getSatelliteBouquetList`](#getsatellitebouquetlist) | private |  | tv-broadcast | inferred | Returns the satellite bouquet list. |
| [`getScannedSatelliteList`](#getscannedsatellitelist) | private |  | tv-broadcast | inferred | Returns the scanned satellite list. |
| [`getSignalLevel`](#getsignallevel) | public |  | tv-broadcast | inferred | Returns the signal level. |
| [`getVideoViewList`](#getvideoviewlist) | public |  | tv-broadcast | inferred | Returns the video view list. |
| [`isAnalogChannelListAutoSorted`](#isanalogchannellistautosorted) | private |  | tv-broadcast | inferred | Reports whether the analog channel list auto sorted is set. |
| [`isAudioDescriptionConflict`](#isaudiodescriptionconflict) | private |  | audio | inferred | Reports whether the audio description conflict is set. |
| [`isCurrentChannelVirtualService`](#iscurrentchannelvirtualservice) | private |  | tv-broadcast | inferred | Reports whether the current channel virtual service is set. |
| [`notifyRecommendedChannel`](#notifyrecommendedchannel) | private |  | tv-broadcast | inferred | Notifies of the recommended channel. |
| [`oipfdrmagent/connectDrm`](#oipfdrmagent_connectdrm) | private |  | tv-broadcast | inferred | Connects the DRM (oipfdrmagent) |
| [`oipfdrmagent/disConnectDrm`](#oipfdrmagent_disconnectdrm) | private |  | tv-broadcast | inferred | Handles the dis connect DRM (oipfdrmagent) |
| [`oipfdrmagent/getDrmIdList`](#oipfdrmagent_getdrmidlist) | private |  | tv-broadcast | inferred | Returns the DRM ID list (oipfdrmagent) |
| [`oipfdrmagent/getDrmMessageResult`](#oipfdrmagent_getdrmmessageresult) | private |  | tv-broadcast | inferred | Returns the DRM message result (oipfdrmagent) |
| [`oipfdrmagent/getDRMSystemMessage`](#oipfdrmagent_getdrmsystemmessage) | private |  | tv-broadcast | inferred | Returns the DRM system message (oipfdrmagent) |
| [`oipfdrmagent/sendDrmMessage`](#oipfdrmagent_senddrmmessage) | private |  | tv-broadcast | inferred | Sends the DRM message (oipfdrmagent) |
| [`releaseMessageChannel`](#releasemessagechannel) | public |  | tv-broadcast | inferred | Releases the message channel. |
| [`scan/addDvbSatelliteTransponder`](#scan_adddvbsatellitetransponder) | private |  | tv-broadcast | inferred | Adds the DVB satellite transponder (scan) |
| [`scan/bindToBroadcast`](#scan_bindtobroadcast) | public |  | tv-broadcast | inferred | Binds the to broadcast (scan) |
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
| [`scan/checkServerStatus`](#scan_checkserverstatus) | private |  | tv-broadcast | inferred | Checks the server status (scan) |
| [`scan/clearConflictList`](#scan_clearconflictlist) | private |  | tv-broadcast | inferred | Clears the conflict list (scan) |
| [`scan/clearDvbSatelliteTkgsVisibleTransponderList`](#scan_cleardvbsatellitetkgsvisibletransponderlist) | private |  | tv-broadcast | inferred | Clears the DVB satellite tkgs visible transponder list (scan) |
| [`scan/clearOpCamChannels`](#scan_clearopcamchannels) | private |  | tv-broadcast | inferred | Clears the op CAM channels (scan) |
| [`scan/clearUKconflict`](#scan_clearukconflict) | private |  | tv-broadcast | inferred | Clears the u kconflict (scan) |
| [`scan/createDvbSatelliteConfiguration`](#scan_createdvbsatelliteconfiguration) | private |  | settings | inferred | Creates the DVB satellite configuration (scan) |
| [`scan/deleteAnalogManualTuning`](#scan_deleteanalogmanualtuning) | private |  | tv-broadcast | inferred | Deletes the analog manual tuning (scan) ⚠️ |
| [`scan/deleteAtscManualTuning`](#scan_deleteatscmanualtuning) | public |  | tv-broadcast | inferred | Deletes the ATSC manual tuning (scan) ⚠️ |
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
| [`scan/getAtscScanInfo`](#scan_getatscscaninfo) | public |  | tv-broadcast | inferred | Returns the ATSC scan info (scan) |
| [`scan/getAtscTuningStatus`](#scan_getatsctuningstatus) | public |  | tv-broadcast | inferred | Returns the ATSC tuning status (scan) |
| [`scan/getAutoScanChannelType`](#scan_getautoscanchanneltype) | public |  | tv-broadcast | inferred | Returns the auto scan channel type (scan) |
| [`scan/getAutoScanChannelTypeOrder`](#scan_getautoscanchanneltypeorder) | public |  | tv-broadcast | inferred | Returns the auto scan channel type order (scan) |
| [`scan/getAutoScanConflictInfo`](#scan_getautoscanconflictinfo) | private |  | tv-broadcast | inferred | Returns the auto scan conflict info (scan) |
| [`scan/getAutoScanModeForStore`](#scan_getautoscanmodeforstore) | private |  | tv-broadcast | inferred | Returns the auto scan mode for store (scan) |
| [`scan/getAutoScanProgress`](#scan_getautoscanprogress) | public |  | tv-broadcast | inferred | Returns the auto scan progress (scan) |
| [`scan/getAutoScanSourceOrderStatus`](#scan_getautoscansourceorderstatus) | public |  | tv-broadcast | inferred | Returns the auto scan source order status (scan) |
| [`scan/getAutoScanSourceSearchResult`](#scan_getautoscansourcesearchresult) | private |  | tv-broadcast | inferred | Returns the auto scan source search result (scan) |
| [`scan/getAutoScanStatus`](#scan_getautoscanstatus) | public |  | tv-broadcast | inferred | Returns the auto scan status (scan) |
| [`scan/getChannelListCountToSolveConflictLcn`](#scan_getchannellistcounttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the channel list count to solve conflict lcn (scan) |
| [`scan/getChannelListCountToSolveSatCustomisedLcn`](#scan_getchannellistcounttosolvesatcustomisedlcn) | private |  | tv-broadcast | inferred | Returns the channel list count to solve sat customised lcn (scan) |
| [`scan/getChannelListToSolveConflictLcn`](#scan_getchannellisttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the channel list to solve conflict lcn (scan) |
| [`scan/getChannelListToSolveSatCustomisedLcn`](#scan_getchannellisttosolvesatcustomisedlcn) | private |  | tv-broadcast | inferred | Returns the channel list to solve sat customised lcn (scan) |
| [`scan/getConflictLcnList`](#scan_getconflictlcnlist) | private |  | tv-broadcast | inferred | Returns the conflict lcn list (scan) |
| [`scan/getDefaultTuneInfo`](#scan_getdefaulttuneinfo) | private |  | tv-broadcast | inferred | Returns the default tune info (scan) |
| [`scan/getDvbCableDefaultTuneInfo`](#scan_getdvbcabledefaulttuneinfo) | private |  | tv-broadcast | inferred | Returns the DVB cable default tune info (scan) |
| [`scan/getDvbCableProgramAutoUpdate`](#scan_getdvbcableprogramautoupdate) | private |  | tv-broadcast | inferred | Returns the DVB cable program auto update (scan) |
| [`scan/getDvbCableScanInfo`](#scan_getdvbcablescaninfo) | private |  | tv-broadcast | inferred | Returns the DVB cable scan info (scan) |
| [`scan/getDvbCableScanOption`](#scan_getdvbcablescanoption) | private |  | tv-broadcast | inferred | Returns the DVB cable scan option (scan) |
| [`scan/getDvbCableServiceOperatorList`](#scan_getdvbcableserviceoperatorlist) | private |  | tv-broadcast | inferred | Returns the DVB cable service operator list (scan) |
| [`scan/getDvbCableSignalTestInfoStatus`](#scan_getdvbcablesignaltestinfostatus) | private |  | tv-broadcast | inferred | Returns the DVB cable signal test info status (scan) |
| [`scan/getDvbCableSignalTestStatus`](#scan_getdvbcablesignalteststatus) | private |  | tv-broadcast | inferred | Returns the DVB cable signal test status (scan) |
| [`scan/getDvbCableTuningStatus`](#scan_getdvbcabletuningstatus) | private |  | tv-broadcast | inferred | Returns the DVB cable tuning status (scan) |
| [`scan/getDvbSatellite2TunerConn`](#scan_getdvbsatellite2tunerconn) | private |  | tv-broadcast | inferred | Returns the DVB satellite 2 tuner conn (scan) |
| [`scan/getDvbSatelliteAstraChannelLists`](#scan_getdvbsatelliteastrachannellists) | private |  | tv-broadcast | inferred | Returns the DVB satellite astra channel lists (scan) |
| [`scan/getDvbSatelliteAstraChannelListsCount`](#scan_getdvbsatelliteastrachannellistscount) | private |  | tv-broadcast | inferred | Returns the DVB satellite astra channel lists count (scan) |
| [`scan/getDvbSatelliteConfigurationList`](#scan_getdvbsatelliteconfigurationlist) | private |  | settings | inferred | Returns the DVB satellite configuration list (scan) |
| [`scan/getDvbSatelliteDiSEqCMotorSetting`](#scan_getdvbsatellitediseqcmotorsetting) | private |  | tv-broadcast | inferred | Returns the DVB satellite di s eq c motor setting (scan) |
| [`scan/getDvbSatelliteGatheringAstraChannelListsStatus`](#scan_getdvbsatellitegatheringastrachannellistsstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite gathering astra channel lists status (scan) |
| [`scan/getDvbSatelliteGatheringTricolorRegionalListsStatus`](#scan_getdvbsatellitegatheringtricolorregionallistsstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite gathering tricolor regional lists status (scan) |
| [`scan/getDvbSatelliteList`](#scan_getdvbsatellitelist) | private |  | tv-broadcast | inferred | Returns the DVB satellite list (scan) |
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
| [`scan/getDvbSatelliteScanOption`](#scan_getdvbsatellitescanoption) | private |  | tv-broadcast | inferred | Returns the DVB satellite scan option (scan) |
| [`scan/getDvbSatelliteSelectedAstraChannelList`](#scan_getdvbsatelliteselectedastrachannellist) | private |  | tv-broadcast | inferred | Returns the DVB satellite selected astra channel list (scan) |
| [`scan/getDvbSatelliteServiceOperator`](#scan_getdvbsatelliteserviceoperator) | private |  | tv-broadcast | inferred | Returns the DVB satellite service operator (scan) |
| [`scan/getDvbSatelliteServiceOperatorList`](#scan_getdvbsatelliteserviceoperatorlist) | private |  | tv-broadcast | inferred | Returns the DVB satellite service operator list (scan) |
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
| [`scan/getDvbSatelliteTricolorRegionalList`](#scan_getdvbsatellitetricolorregionallist) | private |  | tv-broadcast | inferred | Returns the DVB satellite tricolor regional list (scan) |
| [`scan/getDvbSatelliteTricolorRegionalLists`](#scan_getdvbsatellitetricolorregionallists) | private |  | tv-broadcast | inferred | Returns the DVB satellite tricolor regional lists (scan) |
| [`scan/getDvbSatelliteTricolorRegionalListsCount`](#scan_getdvbsatellitetricolorregionallistscount) | private |  | tv-broadcast | inferred | Returns the DVB satellite tricolor regional lists count (scan) |
| [`scan/getDvbSatelliteTuningStatus`](#scan_getdvbsatellitetuningstatus) | private |  | tv-broadcast | inferred | Returns the DVB satellite tuning status (scan) |
| [`scan/getDvbTerrestrialDefaultTuneInfo`](#scan_getdvbterrestrialdefaulttuneinfo) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial default tune info (scan) |
| [`scan/getDvbTerrestrialScanInfo`](#scan_getdvbterrestrialscaninfo) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial scan info (scan) |
| [`scan/getDvbTerrestrialScanOption`](#scan_getdvbterrestrialscanoption) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial scan option (scan) |
| [`scan/getDvbTerrestrialServiceOperatorList`](#scan_getdvbterrestrialserviceoperatorlist) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial service operator list (scan) |
| [`scan/getDvbTerrestrialSignalTestInfoStatus`](#scan_getdvbterrestrialsignaltestinfostatus) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial signal test info status (scan) |
| [`scan/getDvbTerrestrialSignalTestStatus`](#scan_getdvbterrestrialsignalteststatus) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial signal test status (scan) |
| [`scan/getDvbTerrestrialTuningStatus`](#scan_getdvbterrestrialtuningstatus) | private |  | tv-broadcast | inferred | Returns the DVB terrestrial tuning status (scan) |
| [`scan/getDvbTKGSCurrentOperatingMode`](#scan_getdvbtkgscurrentoperatingmode) | private |  | tv-broadcast | inferred | Returns the DVB TKGS current operating mode (scan) |
| [`scan/getDvbTKGSOperatingModeList`](#scan_getdvbtkgsoperatingmodelist) | private |  | tv-broadcast | inferred | Returns the DVB TKGS operating mode list (scan) |
| [`scan/getNetworkListToSolveConflictLcn`](#scan_getnetworklisttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the network list to solve conflict lcn (scan) |
| [`scan/getRegionListCountToSolveConflictLcn`](#scan_getregionlistcounttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the region list count to solve conflict lcn (scan) |
| [`scan/getRegionListToSolveConflictLcn`](#scan_getregionlisttosolveconflictlcn) | private |  | tv-broadcast | inferred | Returns the region list to solve conflict lcn (scan) |
| [`scan/getSatAdultChannelList`](#scan_getsatadultchannellist) | private |  | tv-broadcast | inferred | Returns the sat adult channel list (scan) |
| [`scan/getSatCustomisedLcnList`](#scan_getsatcustomisedlcnlist) | private |  | tv-broadcast | inferred | Returns the sat customised lcn list (scan) |
| [`scan/getSatCustomisedLCNListCount`](#scan_getsatcustomisedlcnlistcount) | private |  | tv-broadcast | inferred | Returns the sat customised LCN list count (scan) |
| [`scan/getScanSelectionInfo`](#scan_getscanselectioninfo) | private |  | tv-broadcast | inferred | Returns the scan selection info (scan) |
| [`scan/getSignalStatus`](#scan_getsignalstatus) | public |  | tv-broadcast | inferred | Returns the signal status (scan) |
| [`scan/getSignalTestInfoStatus`](#scan_getsignaltestinfostatus) | private |  | tv-broadcast | inferred | Returns the signal test info status (scan) |
| [`scan/getSignalTestStatus`](#scan_getsignalteststatus) | private |  | tv-broadcast | inferred | Returns the signal test status (scan) |
| [`scan/getSupportZiggoSpecification`](#scan_getsupportziggospecification) | private |  | tv-broadcast | inferred | Returns the support ziggo specification (scan) |
| [`scan/isDvbSatelliteHomeTpModificationAllowed`](#scan_isdvbsatellitehometpmodificationallowed) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite home tp modification allowed is set (scan) |
| [`scan/isDvbSatelliteM7RegionalProgramAvailable`](#scan_isdvbsatellitem7regionalprogramavailable) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite m 7 regional program available is set (scan) |
| [`scan/isDvbSatelliteM7ServiceOperator`](#scan_isdvbsatellitem7serviceoperator) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite m 7 service operator is set (scan) |
| [`scan/isDvbSatelliteTkgsUpdateRequired`](#scan_isdvbsatellitetkgsupdaterequired) | private |  | tv-broadcast | inferred | Reports whether the DVB satellite tkgs update required is set (scan) |
| [`scan/moveDvbSatelliteDiSEqCMotor`](#scan_movedvbsatellitediseqcmotor) | private |  | tv-broadcast | inferred | Moves the DVB satellite di s eq c motor (scan) |
| [`scan/moveDvbSatelliteUSALSMotor`](#scan_movedvbsatelliteusalsmotor) | private |  | tv-broadcast | inferred | Moves the DVB satellite USALS motor (scan) |
| [`scan/releaseBroadcast`](#scan_releasebroadcast) | public |  | tv-broadcast | inferred | Releases the broadcast (scan) |
| [`scan/resetDvbCableNetworkScanInfo`](#scan_resetdvbcablenetworkscaninfo) | private |  | tv-broadcast | inferred | Resets the DVB cable network scan info (scan) ⚠️ |
| [`scan/resetDvbCableQuickScanInfo`](#scan_resetdvbcablequickscaninfo) | private |  | tv-broadcast | inferred | Resets the DVB cable quick scan info (scan) ⚠️ |
| [`scan/resetDvbCableScanInfo`](#scan_resetdvbcablescaninfo) | private |  | tv-broadcast | inferred | Resets the DVB cable scan info (scan) ⚠️ |
| [`scan/resetDvbSatelliteDiSEqCMotor`](#scan_resetdvbsatellitediseqcmotor) | private |  | tv-broadcast | inferred | Resets the DVB satellite di s eq c motor (scan) ⚠️ |
| [`scan/resetDvbSatelliteDiSEqCMotorLimit`](#scan_resetdvbsatellitediseqcmotorlimit) | private |  | tv-broadcast | inferred | Resets the DVB satellite di s eq c motor limit (scan) ⚠️ |
| [`scan/resetDvbSatelliteTkgsHiddenTransponderList`](#scan_resetdvbsatellitetkgshiddentransponderlist) | private |  | tv-broadcast | inferred | Resets the DVB satellite tkgs hidden transponder list (scan) ⚠️ |
| [`scan/resetDvbSatelliteTkgsVersion`](#scan_resetdvbsatellitetkgsversion) | private |  | tv-broadcast | inferred | Resets the DVB satellite tkgs version (scan) ⚠️ |
| [`scan/saveAnalogManualTuning`](#scan_saveanalogmanualtuning) | private |  | tv-broadcast | inferred | Saves the analog manual tuning (scan) |
| [`scan/saveAtscManualTuning`](#scan_saveatscmanualtuning) | public |  | tv-broadcast | inferred | Saves the ATSC manual tuning (scan) |
| [`scan/saveDvbCableManualTuning`](#scan_savedvbcablemanualtuning) | private |  | tv-broadcast | inferred | Saves the DVB cable manual tuning (scan) |
| [`scan/saveDvbSatelliteManualTuning`](#scan_savedvbsatellitemanualtuning) | private |  | tv-broadcast | inferred | Saves the DVB satellite manual tuning (scan) |
| [`scan/saveDvbTerrestrialManualTuning`](#scan_savedvbterrestrialmanualtuning) | private |  | tv-broadcast | inferred | Saves the DVB terrestrial manual tuning (scan) |
| [`scan/scanSelectionInfoDone`](#scan_scanselectioninfodone) | private |  | tv-broadcast | inferred | Scans for selection info done (scan) |
| [`scan/setAnalogManualTuning`](#scan_setanalogmanualtuning) | private |  | tv-broadcast | inferred | Sets the analog manual tuning (scan) |
| [`scan/setAribSatelliteSignalTest`](#scan_setaribsatellitesignaltest) | private |  | tv-broadcast | inferred | Sets the arib satellite signal test (scan) |
| [`scan/setAribTerrestrialSignalTest`](#scan_setaribterrestrialsignaltest) | private |  | tv-broadcast | inferred | Sets the arib terrestrial signal test (scan) |
| [`scan/setAtscManualTuning`](#scan_setatscmanualtuning) | public |  | tv-broadcast | inferred | Sets the ATSC manual tuning (scan) |
| [`scan/setAutoScanChannelType`](#scan_setautoscanchanneltype) | public |  | tv-broadcast | inferred | Sets the auto scan channel type (scan) |
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
| [`scan/skipAutoScan`](#scan_skipautoscan) | public |  | tv-broadcast | inferred | Skips the auto scan (scan) |
| [`scan/startAutoScan`](#scan_startautoscan) | public |  | tv-broadcast | inferred | Starts the auto scan (scan) |
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
| [`scan/stopAutoScan`](#scan_stopautoscan) | public |  | tv-broadcast | inferred | Stops the auto scan (scan) |
| [`scan/stopDvbCableChannelListUpdate`](#scan_stopdvbcablechannellistupdate) | private |  | tv-broadcast | inferred | Stops the DVB cable channel list update (scan) |
| [`scan/stopDvbCableSignalTest`](#scan_stopdvbcablesignaltest) | private |  | tv-broadcast | inferred | Stops the DVB cable signal test (scan) |
| [`scan/stopDvbSatelliteChannelListUpdate`](#scan_stopdvbsatellitechannellistupdate) | private |  | tv-broadcast | inferred | Stops the DVB satellite channel list update (scan) |
| [`scan/stopDvbSatelliteDiSEqCMotorMoving`](#scan_stopdvbsatellitediseqcmotormoving) | private |  | tv-broadcast | inferred | Stops the DVB satellite di s eq c motor moving (scan) |
| [`scan/stopDvbSatelliteTkgsUpdate`](#scan_stopdvbsatellitetkgsupdate) | private |  | tv-broadcast | inferred | Stops the DVB satellite tkgs update (scan) |
| [`scan/stopDvbTerrestrialChannelListUpdate`](#scan_stopdvbterrestrialchannellistupdate) | private |  | tv-broadcast | inferred | Stops the DVB terrestrial channel list update (scan) |
| [`scan/stopDvbTerrestrialSignalTest`](#scan_stopdvbterrestrialsignaltest) | private |  | tv-broadcast | inferred | Stops the DVB terrestrial signal test (scan) |
| [`scanBarkerChannel`](#scanbarkerchannel) | public |  | tv-broadcast | inferred | Scans for barker channel. |
| [`setAudioChannel`](#setaudiochannel) | public |  | audio | inferred | Sets the audio channel. |
| [`setAudioLanguage`](#setaudiolanguage) | public |  | audio | inferred | Sets the audio language. |
| [`setChannelGroup`](#setchannelgroup) | public |  | tv-broadcast | inferred | Sets the channel group. |
| [`setChannelMode`](#setchannelmode) | public |  | tv-broadcast | inferred | Sets the channel mode. |
| [`setChannelSortMode`](#setchannelsortmode) | private |  | tv-broadcast | inferred | Sets the channel sort mode. |
| [`setLastChannelId`](#setlastchannelid) | public |  | tv-broadcast | inferred | Sets the last channel ID. |
| [`setVideoView`](#setvideoview) | public |  | tv-broadcast | inferred | Sets the video view. |
| [`sortAnalogChannelList`](#sortanalogchannellist) | private |  | tv-broadcast | inferred | Handles the sort analog channel list. |
| [`startEwbsCheckInWarm`](#startewbscheckinwarm) | private |  | tv-broadcast | inferred | Starts the ewbs check in warm. |
| [`stopEwbsCheckInWarm`](#stopewbscheckinwarm) | private |  | tv-broadcast | inferred | Stops the ewbs check in warm. |

<a id="acas_getmoduleid"></a>
## `acas/getModuleId`

`luna://com.webos.service.utp.channel/acas/getModuleId`

Returns the module ID (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/acas/getModuleId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="acas_getmoduleinfo"></a>
## `acas/getModuleInfo`

`luna://com.webos.service.utp.channel/acas/getModuleInfo`

Returns the module info (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/acas/getModuleInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getautomaticdisplay"></a>
## `bcas/getAutomaticDisplay`

`luna://com.webos.service.utp.channel/bcas/getAutomaticDisplay`

Returns the automatic display (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/getAutomaticDisplay '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getcardid"></a>
## `bcas/getCardId`

`luna://com.webos.service.utp.channel/bcas/getCardId`

Returns the card ID (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/getCardId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getemmtimer"></a>
## `bcas/getEmmTimer`

`luna://com.webos.service.utp.channel/bcas/getEmmTimer`

Returns the emm timer (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/getEmmTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_getpaychannelguide"></a>
## `bcas/getPayChannelGuide`

`luna://com.webos.service.utp.channel/bcas/getPayChannelGuide`

Returns the pay channel guide (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/getPayChannelGuide '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_removeemmtimer"></a>
## `bcas/removeEmmTimer` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/bcas/removeEmmTimer`

Removes the emm timer (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/removeEmmTimer '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_setemmtimer"></a>
## `bcas/setEmmTimer`

`luna://com.webos.service.utp.channel/bcas/setEmmTimer`

Sets the emm timer (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/setEmmTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_setemmtimerchannel"></a>
## `bcas/setEmmTimerChannel`

`luna://com.webos.service.utp.channel/bcas/setEmmTimerChannel`

Sets the emm timer channel (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/setEmmTimerChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="bcas_stopemmtimerchannel"></a>
## `bcas/stopEmmTimerChannel`

`luna://com.webos.service.utp.channel/bcas/stopEmmTimerChannel`

Stops the emm timer channel (bcas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/bcas/stopEmmTimerChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="blockkeyinput"></a>
## `blockKeyInput`

`luna://com.webos.service.utp.channel/blockKeyInput`

Blocks the key input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/blockKeyInput '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannelfavorite"></a>
## `changeChannelFavorite`

`luna://com.webos.service.utp.channel/changeChannelFavorite`

Changes the channel favorite.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/changeChannelFavorite '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechanneltype"></a>
## `changeChannelType`

`luna://com.webos.service.utp.channel/changeChannelType`

Changes the channel type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/changeChannelType '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changemessagechannel"></a>
## `changeMessageChannel`

`luna://com.webos.service.utp.channel/changeMessageChannel`

Changes the message channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/changeMessageChannel '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkbarkerchannel"></a>
## `checkBarkerChannel`

`luna://com.webos.service.utp.channel/checkBarkerChannel`

Checks the barker channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/checkBarkerChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerpauserequest"></a>
## `ci/camPlayerPauseRequest`

`luna://com.webos.service.utp.channel/ci/camPlayerPauseRequest`

Handles the CAM player pause request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/camPlayerPauseRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerresumerequest"></a>
## `ci/camPlayerResumeRequest`

`luna://com.webos.service.utp.channel/ci/camPlayerResumeRequest`

Handles the CAM player resume request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/camPlayerResumeRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerseekrequest"></a>
## `ci/camPlayerSeekRequest`

`luna://com.webos.service.utp.channel/ci/camPlayerSeekRequest`

Handles the CAM player seek request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/camPlayerSeekRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerstoprequest"></a>
## `ci/camPlayerStopRequest`

`luna://com.webos.service.utp.channel/ci/camPlayerStopRequest`

Handles the CAM player stop request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/camPlayerStopRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_camplayerverifyrequest"></a>
## `ci/camPlayerVerifyRequest`

`luna://com.webos.service.utp.channel/ci/camPlayerVerifyRequest`

Handles the CAM player verify request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/camPlayerVerifyRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_checkcamupgradestate"></a>
## `ci/checkCamUpgradeState`

`luna://com.webos.service.utp.channel/ci/checkCamUpgradeState`

Checks the CAM upgrade state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/checkCamUpgradeState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_checkciplusstate"></a>
## `ci/checkCiPlusState`

`luna://com.webos.service.utp.channel/ci/checkCiPlusState`

Checks the CI plus state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/checkCiPlusState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_confirmpincode"></a>
## `ci/confirmPinCode`

`luna://com.webos.service.utp.channel/ci/confirmPinCode`

Handles the confirm pin code (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/confirmPinCode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_connectsas"></a>
## `ci/connectSas`

`luna://com.webos.service.utp.channel/ci/connectSas`

Connects the sas (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/connectSas '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_filerequest4aux"></a>
## `ci/fileRequest4Aux`

`luna://com.webos.service.utp.channel/ci/fileRequest4Aux`

Handles the file request 4 aux (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/fileRequest4Aux '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getcaidlist"></a>
## `ci/getCaIdList`

`luna://com.webos.service.utp.channel/ci/getCaIdList`

Returns the ca ID list (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getCaIdList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getcammessage"></a>
## `ci/getCamMessage`

`luna://com.webos.service.utp.channel/ci/getCamMessage`

Returns the CAM message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getCamMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getchannelbannercontrolstatus"></a>
## `ci/getChannelBannerControlStatus`

`luna://com.webos.service.utp.channel/ci/getChannelBannerControlStatus`

Returns the channel banner control status (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getChannelBannerControlStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getciplusconnected"></a>
## `ci/getCIPlusConnected`

`luna://com.webos.service.utp.channel/ci/getCIPlusConnected`

Returns the CI plus connected (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getCIPlusConnected '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getciversion"></a>
## `ci/getCIVersion`

`luna://com.webos.service.utp.channel/ci/getCIVersion`

Returns the CI version (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getCIVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getconnectionstate"></a>
## `ci/getConnectionState`

`luna://com.webos.service.utp.channel/ci/getConnectionState`

Returns the connection state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getConnectionState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getecpcontrolinfo"></a>
## `ci/getEcpControlInfo`

`luna://com.webos.service.utp.channel/ci/getEcpControlInfo`

Returns the ecp control info (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getEcpControlInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_gethostctlinfo"></a>
## `ci/getHostCtlInfo`

`luna://com.webos.service.utp.channel/ci/getHostCtlInfo`

Returns the host ctl info (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getHostCtlInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getlowspeedconnectionstatus"></a>
## `ci/getLowSpeedConnectionStatus`

`luna://com.webos.service.utp.channel/ci/getLowSpeedConnectionStatus`

Returns the low speed connection status (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getLowSpeedConnectionStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getoperatorprofileenabled"></a>
## `ci/getOperatorProfileEnabled`

`luna://com.webos.service.utp.channel/ci/getOperatorProfileEnabled`

Returns the operator profile enabled (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getOperatorProfileEnabled '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getosdtposition"></a>
## `ci/getOsdtPosition`

`luna://com.webos.service.utp.channel/ci/getOsdtPosition`

Returns the osdt position (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getOsdtPosition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getsasconnectionstate"></a>
## `ci/getSasConnectionState`

`luna://com.webos.service.utp.channel/ci/getSasConnectionState`

Returns the sas connection state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getSasConnectionState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_getsasmessage"></a>
## `ci/getSasMessage`

`luna://com.webos.service.utp.channel/ci/getSasMessage`

Returns the sas message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/getSasMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_hostinitiatedcamplayrequest"></a>
## `ci/hostInitiatedCAMPlayRequest`

`luna://com.webos.service.utp.channel/ci/hostInitiatedCAMPlayRequest`

Handles the host initiated CAM play request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/hostInitiatedCAMPlayRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_hostplayerrequest"></a>
## `ci/hostPlayerRequest`

`luna://com.webos.service.utp.channel/ci/hostPlayerRequest`

Handles the host player request (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/hostPlayerRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_isappmmilaunched"></a>
## `ci/IsAppMmiLaunched`

`luna://com.webos.service.utp.channel/ci/IsAppMmiLaunched`

Reports whether the app mmi launched is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/IsAppMmiLaunched '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_ischannelchangebycamhostcontrol"></a>
## `ci/ischannelchangeByCamHostControl`

`luna://com.webos.service.utp.channel/ci/ischannelchangeByCamHostControl`

Handles the ischannelchange by CAM host control (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/ischannelchangeByCamHostControl '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_isciinformationmenuenabled"></a>
## `ci/isCiInformationMenuEnabled`

`luna://com.webos.service.utp.channel/ci/isCiInformationMenuEnabled`

Reports whether the CI information menu enabled is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/isCiInformationMenuEnabled '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_isecpcontentprotected"></a>
## `ci/isEcpContentProtected`

`luna://com.webos.service.utp.channel/ci/isEcpContentProtected`

Reports whether the ecp content protected is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/isEcpContentProtected '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_isoperatorprofileenabled"></a>
## `ci/isOperatorProfileEnabled`

`luna://com.webos.service.utp.channel/ci/isOperatorProfileEnabled`

Reports whether the operator profile enabled is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/isOperatorProfileEnabled '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_issavepincodemenuenabled"></a>
## `ci/isSavePinCodeMenuEnabled`

`luna://com.webos.service.utp.channel/ci/isSavePinCodeMenuEnabled`

Reports whether the save pin code menu enabled is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/isSavePinCodeMenuEnabled '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_istrickmoderestrictedcontent"></a>
## `ci/isTrickModeRestrictedContent`

`luna://com.webos.service.utp.channel/ci/isTrickModeRestrictedContent`

Reports whether the trick mode restricted content is set (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/isTrickModeRestrictedContent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_notifymmiosddisappeared"></a>
## `ci/notifyMmiOsdDisappeared`

`luna://com.webos.service.utp.channel/ci/notifyMmiOsdDisappeared`

Notifies of the mmi OSD disappeared (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/notifyMmiOsdDisappeared '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_registercplayerstatus"></a>
## `ci/registerCplayerStatus`

`luna://com.webos.service.utp.channel/ci/registerCplayerStatus`

Registers the cplayer status (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/registerCplayerStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_registerdomainidcb"></a>
## `ci/registerDomainIDCB`

`luna://com.webos.service.utp.channel/ci/registerDomainIDCB`

Registers the domain IDCB (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/registerDomainIDCB '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_registerfilerequestackcb"></a>
## `ci/registerFileRequestAckCB`

`luna://com.webos.service.utp.channel/ci/registerFileRequestAckCB`

Registers the file request ack CB (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/registerFileRequestAckCB '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_replypincode"></a>
## `ci/replyPinCode`

`luna://com.webos.service.utp.channel/ci/replyPinCode`

Handles the reply pin code (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/replyPinCode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_reqappabort"></a>
## `ci/ReqAppAbort`

`luna://com.webos.service.utp.channel/ci/ReqAppAbort`

Handles the req app abort (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/ReqAppAbort '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_requestfiledata"></a>
## `ci/requestFileData`

`luna://com.webos.service.utp.channel/ci/requestFileData`

Requests the file data (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/requestFileData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_requestpreviousmmimessage"></a>
## `ci/requestPreviousMmiMessage`

`luna://com.webos.service.utp.channel/ci/requestPreviousMmiMessage`

Requests the previous mmi message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/requestPreviousMmiMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_requeststartack"></a>
## `ci/requestStartAck`

`luna://com.webos.service.utp.channel/ci/requestStartAck`

Requests the start ack (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/requestStartAck '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_resetcam"></a>
## `ci/resetCam` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/ci/resetCam`

Resets the CAM (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/resetCam '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_savelaunchinfo4aux"></a>
## `ci/saveLaunchInfo4Aux`

`luna://com.webos.service.utp.channel/ci/saveLaunchInfo4Aux`

Saves the launch info 4 aux (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/saveLaunchInfo4Aux '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_searchoperator"></a>
## `ci/searchOperator`

`luna://com.webos.service.utp.channel/ci/searchOperator`

Searches for operator (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/searchOperator '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_selectmmimenuindex"></a>
## `ci/selectMmiMenuIndex`

`luna://com.webos.service.utp.channel/ci/selectMmiMenuIndex`

Selects the mmi menu index (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/selectMmiMenuIndex '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_sendhostcontrolaskrelease"></a>
## `ci/sendHostControlAskRelease`

`luna://com.webos.service.utp.channel/ci/sendHostControlAskRelease`

Sends the host control ask release (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/sendHostControlAskRelease '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_sendsasmessage"></a>
## `ci/sendSasMessage`

`luna://com.webos.service.utp.channel/ci/sendSasMessage`

Sends the sas message (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/sendSasMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_setmmienquiry"></a>
## `ci/setMmiEnquiry`

`luna://com.webos.service.utp.channel/ci/setMmiEnquiry`

Sets the mmi enquiry (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/setMmiEnquiry '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_startciinformationmenu"></a>
## `ci/startCiInformationMenu` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/ci/startCiInformationMenu`

Starts the CI information menu (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/startCiInformationMenu '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_startopupdateinwarmstate"></a>
## `ci/startOpUpdateInWarmState`

`luna://com.webos.service.utp.channel/ci/startOpUpdateInWarmState`

Starts the op update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/startOpUpdateInWarmState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_startotaupdateinwarmstate"></a>
## `ci/startOtaUpdateInWarmState`

`luna://com.webos.service.utp.channel/ci/startOtaUpdateInWarmState`

Starts the ota update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/startOtaUpdateInWarmState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_startpowerdownnotice"></a>
## `ci/startPowerDownNotice`

`luna://com.webos.service.utp.channel/ci/startPowerDownNotice`

Starts the power down notice (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/startPowerDownNotice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_stopopupdateinwarmstate"></a>
## `ci/stopOpUpdateInWarmState`

`luna://com.webos.service.utp.channel/ci/stopOpUpdateInWarmState`

Stops the op update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/stopOpUpdateInWarmState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_stopotaupdateinwarmstate"></a>
## `ci/stopOtaUpdateInWarmState`

`luna://com.webos.service.utp.channel/ci/stopOtaUpdateInWarmState`

Stops the ota update in warm state (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/stopOtaUpdateInWarmState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_stoppowerdownnotice"></a>
## `ci/stopPowerDownNotice`

`luna://com.webos.service.utp.channel/ci/stopPowerDownNotice`

Stops the power down notice (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/stopPowerDownNotice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ci_subscriberequeststart"></a>
## `ci/subscribeRequestStart`

`luna://com.webos.service.utp.channel/ci/subscribeRequestStart`

Subscribes to the request start (CI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/ci/subscribeRequestStart '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="copydvbsatellitechannelforastra"></a>
## `copyDvbSatelliteChannelForAstra`

`luna://com.webos.service.utp.channel/copyDvbSatelliteChannelForAstra`

Copies the DVB satellite channel for astra.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/copyDvbSatelliteChannelForAstra '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletedvbsatellitechannelforastra"></a>
## `deleteDvbSatelliteChannelForAstra` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/deleteDvbSatelliteChannelForAstra`

Deletes the DVB satellite channel for astra.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/deleteDvbSatelliteChannelForAstra '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiochannellist"></a>
## `getAudioChannelList`

`luna://com.webos.service.utp.channel/getAudioChannelList`

Returns the audio channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getAudioChannelList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaudiolanguagelist"></a>
## `getAudioLanguageList`

`luna://com.webos.service.utp.channel/getAudioLanguageList`

Returns the audio language list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getAudioLanguageList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbarkerstatus"></a>
## `getBarkerStatus`

`luna://com.webos.service.utp.channel/getBarkerStatus`

Returns the barker status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getBarkerStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaidlistfromdvbsi"></a>
## `getCaIdListFromDvbSi`

`luna://com.webos.service.utp.channel/getCaIdListFromDvbSi`

Returns the ca ID list from DVB SI.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getCaIdListFromDvbSi '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgroup"></a>
## `getChannelGroup`

`luna://com.webos.service.utp.channel/getChannelGroup`

Returns the channel group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelGroup '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.utp.channel/getChannelGroupList`

Returns the channel group list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelGroupList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistupdateinfo"></a>
## `getChannelListUpdateInfo`

`luna://com.webos.service.utp.channel/getChannelListUpdateInfo`

Returns the channel list update info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelListUpdateInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistupdatestatus"></a>
## `getChannelListUpdateStatus`

`luna://com.webos.service.utp.channel/getChannelListUpdateStatus`

Returns the channel list update status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelListUpdateStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelmode"></a>
## `getChannelMode`

`luna://com.webos.service.utp.channel/getChannelMode`

Returns the channel mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelmodelist"></a>
## `getChannelModeList`

`luna://com.webos.service.utp.channel/getChannelModeList`

Returns the channel mode list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelModeList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelsortmode"></a>
## `getChannelSortMode`

`luna://com.webos.service.utp.channel/getChannelSortMode`

Returns the channel sort mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelSortMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchanneltypelist"></a>
## `getChannelTypeList`

`luna://com.webos.service.utp.channel/getChannelTypeList`

Returns the channel type list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getChannelTypeList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiochannel"></a>
## `getCurrentAudioChannel`

`luna://com.webos.service.utp.channel/getCurrentAudioChannel`

Returns the current audio channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getCurrentAudioChannel '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiocodectype"></a>
## `getCurrentAudioCodecType`

`luna://com.webos.service.utp.channel/getCurrentAudioCodecType`

Returns the current audio codec type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getCurrentAudioCodecType '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiolanguage"></a>
## `getCurrentAudioLanguage`

`luna://com.webos.service.utp.channel/getCurrentAudioLanguage`

Returns the current audio language.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getCurrentAudioLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentvideoview"></a>
## `getCurrentVideoView`

`luna://com.webos.service.utp.channel/getCurrentVideoView`

Returns the current video view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getCurrentVideoView '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdirecttunechannel"></a>
## `getDirectTuneChannel`

`luna://com.webos.service.utp.channel/getDirectTuneChannel`

Returns the direct tune channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getDirectTuneChannel '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getewsevent"></a>
## `getEwsEvent`

`luna://com.webos.service.utp.channel/getEwsEvent`

Returns the ews event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getEwsEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlastchannelid"></a>
## `getLastChannelId`

`luna://com.webos.service.utp.channel/getLastChannelId`

Returns the last channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getLastChannelId '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpreferredregionnid"></a>
## `getPreferredRegionNId`

`luna://com.webos.service.utp.channel/getPreferredRegionNId`

Returns the preferred region n ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getPreferredRegionNId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsatellitebouquetlist"></a>
## `getSatelliteBouquetList`

`luna://com.webos.service.utp.channel/getSatelliteBouquetList`

Returns the satellite bouquet list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getSatelliteBouquetList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getscannedsatellitelist"></a>
## `getScannedSatelliteList`

`luna://com.webos.service.utp.channel/getScannedSatelliteList`

Returns the scanned satellite list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getScannedSatelliteList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignallevel"></a>
## `getSignalLevel`

`luna://com.webos.service.utp.channel/getSignalLevel`

Returns the signal level.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getSignalLevel '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoviewlist"></a>
## `getVideoViewList`

`luna://com.webos.service.utp.channel/getVideoViewList`

Returns the video view list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/getVideoViewList '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isanalogchannellistautosorted"></a>
## `isAnalogChannelListAutoSorted`

`luna://com.webos.service.utp.channel/isAnalogChannelListAutoSorted`

Reports whether the analog channel list auto sorted is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/isAnalogChannelListAutoSorted '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isaudiodescriptionconflict"></a>
## `isAudioDescriptionConflict`

`luna://com.webos.service.utp.channel/isAudioDescriptionConflict`

Reports whether the audio description conflict is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/isAudioDescriptionConflict '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iscurrentchannelvirtualservice"></a>
## `isCurrentChannelVirtualService`

`luna://com.webos.service.utp.channel/isCurrentChannelVirtualService`

Reports whether the current channel virtual service is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/isCurrentChannelVirtualService '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyrecommendedchannel"></a>
## `notifyRecommendedChannel`

`luna://com.webos.service.utp.channel/notifyRecommendedChannel`

Notifies of the recommended channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/notifyRecommendedChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_connectdrm"></a>
## `oipfdrmagent/connectDrm`

`luna://com.webos.service.utp.channel/oipfdrmagent/connectDrm`

Connects the DRM (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/oipfdrmagent/connectDrm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_disconnectdrm"></a>
## `oipfdrmagent/disConnectDrm`

`luna://com.webos.service.utp.channel/oipfdrmagent/disConnectDrm`

Handles the dis connect DRM (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/oipfdrmagent/disConnectDrm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_getdrmidlist"></a>
## `oipfdrmagent/getDrmIdList`

`luna://com.webos.service.utp.channel/oipfdrmagent/getDrmIdList`

Returns the DRM ID list (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/oipfdrmagent/getDrmIdList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_getdrmmessageresult"></a>
## `oipfdrmagent/getDrmMessageResult`

`luna://com.webos.service.utp.channel/oipfdrmagent/getDrmMessageResult`

Returns the DRM message result (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/oipfdrmagent/getDrmMessageResult '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_getdrmsystemmessage"></a>
## `oipfdrmagent/getDRMSystemMessage`

`luna://com.webos.service.utp.channel/oipfdrmagent/getDRMSystemMessage`

Returns the DRM system message (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/oipfdrmagent/getDRMSystemMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="oipfdrmagent_senddrmmessage"></a>
## `oipfdrmagent/sendDrmMessage`

`luna://com.webos.service.utp.channel/oipfdrmagent/sendDrmMessage`

Sends the DRM message (oipfdrmagent)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/oipfdrmagent/sendDrmMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasemessagechannel"></a>
## `releaseMessageChannel`

`luna://com.webos.service.utp.channel/releaseMessageChannel`

Releases the message channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/releaseMessageChannel '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_adddvbsatellitetransponder"></a>
## `scan/addDvbSatelliteTransponder`

`luna://com.webos.service.utp.channel/scan/addDvbSatelliteTransponder`

Adds the DVB satellite transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/addDvbSatelliteTransponder '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_bindtobroadcast"></a>
## `scan/bindToBroadcast`

`luna://com.webos.service.utp.channel/scan/bindToBroadcast`

Binds the to broadcast (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/bindToBroadcast '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelanalogmanualtuning"></a>
## `scan/cancelAnalogManualTuning`

`luna://com.webos.service.utp.channel/scan/cancelAnalogManualTuning`

Cancels the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelAnalogManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelaribsatellitesignaltest"></a>
## `scan/cancelAribSatelliteSignalTest`

`luna://com.webos.service.utp.channel/scan/cancelAribSatelliteSignalTest`

Cancels the arib satellite signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelAribSatelliteSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelaribterrestrialsignaltest"></a>
## `scan/cancelAribTerrestrialSignalTest`

`luna://com.webos.service.utp.channel/scan/cancelAribTerrestrialSignalTest`

Cancels the arib terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelAribTerrestrialSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cancelatscmanualtuning"></a>
## `scan/cancelAtscManualTuning`

`luna://com.webos.service.utp.channel/scan/cancelAtscManualTuning`

Cancels the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelAtscManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbcablemanualtuning"></a>
## `scan/cancelDvbCableManualTuning`

`luna://com.webos.service.utp.channel/scan/cancelDvbCableManualTuning`

Cancels the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelDvbCableManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitegatheringastrachannellists"></a>
## `scan/cancelDvbSatelliteGatheringAstraChannelLists`

`luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteGatheringAstraChannelLists`

Cancels the DVB satellite gathering astra channel lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteGatheringAstraChannelLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitegatheringtricolorregionallists"></a>
## `scan/cancelDvbSatelliteGatheringTricolorRegionalLists`

`luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteGatheringTricolorRegionalLists`

Cancels the DVB satellite gathering tricolor regional lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteGatheringTricolorRegionalLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitem7autodiseqcconfiguration"></a>
## `scan/cancelDvbSatelliteM7AutoDiSEqCConfiguration`

`luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteM7AutoDiSEqCConfiguration`

Cancels the DVB satellite m 7 auto di s eq c configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteM7AutoDiSEqCConfiguration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitem7hometpsearch"></a>
## `scan/cancelDvbSatelliteM7HomeTPSearch`

`luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteM7HomeTPSearch`

Cancels the DVB satellite m 7 home TP search (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteM7HomeTPSearch '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbsatellitemanualtuning"></a>
## `scan/cancelDvbSatelliteManualTuning`

`luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteManualTuning`

Cancels the DVB satellite manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelDvbSatelliteManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_canceldvbterrestrialmanualtuning"></a>
## `scan/cancelDvbTerrestrialManualTuning`

`luna://com.webos.service.utp.channel/scan/cancelDvbTerrestrialManualTuning`

Cancels the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/cancelDvbTerrestrialManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_checkserverstatus"></a>
## `scan/checkServerStatus`

`luna://com.webos.service.utp.channel/scan/checkServerStatus`

Checks the server status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/checkServerStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_clearconflictlist"></a>
## `scan/clearConflictList`

`luna://com.webos.service.utp.channel/scan/clearConflictList`

Clears the conflict list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/clearConflictList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_cleardvbsatellitetkgsvisibletransponderlist"></a>
## `scan/clearDvbSatelliteTkgsVisibleTransponderList`

`luna://com.webos.service.utp.channel/scan/clearDvbSatelliteTkgsVisibleTransponderList`

Clears the DVB satellite tkgs visible transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/clearDvbSatelliteTkgsVisibleTransponderList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_clearopcamchannels"></a>
## `scan/clearOpCamChannels`

`luna://com.webos.service.utp.channel/scan/clearOpCamChannels`

Clears the op CAM channels (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/clearOpCamChannels '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_clearukconflict"></a>
## `scan/clearUKconflict`

`luna://com.webos.service.utp.channel/scan/clearUKconflict`

Clears the u kconflict (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/clearUKconflict '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_createdvbsatelliteconfiguration"></a>
## `scan/createDvbSatelliteConfiguration`

`luna://com.webos.service.utp.channel/scan/createDvbSatelliteConfiguration`

Creates the DVB satellite configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/createDvbSatelliteConfiguration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deleteanalogmanualtuning"></a>
## `scan/deleteAnalogManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/deleteAnalogManualTuning`

Deletes the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/deleteAnalogManualTuning '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deleteatscmanualtuning"></a>
## `scan/deleteAtscManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/deleteAtscManualTuning`

Deletes the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/deleteAtscManualTuning '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbcablemanualtuning"></a>
## `scan/deleteDvbCableManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/deleteDvbCableManualTuning`

Deletes the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/deleteDvbCableManualTuning '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbsatelliteconfiguration"></a>
## `scan/deleteDvbSatelliteConfiguration` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/deleteDvbSatelliteConfiguration`

Deletes the DVB satellite configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/deleteDvbSatelliteConfiguration '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbsatellitetransponder"></a>
## `scan/deleteDvbSatelliteTransponder` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/deleteDvbSatelliteTransponder`

Deletes the DVB satellite transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/deleteDvbSatelliteTransponder '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_deletedvbterrestrialmanualtuning"></a>
## `scan/deleteDvbTerrestrialManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/deleteDvbTerrestrialManualTuning`

Deletes the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/deleteDvbTerrestrialManualTuning '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_editdvbsatellitetkgsvisibletransponder"></a>
## `scan/editDvbSatelliteTkgsVisibleTransponder`

`luna://com.webos.service.utp.channel/scan/editDvbSatelliteTkgsVisibleTransponder`

Edits the DVB satellite tkgs visible transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/editDvbSatelliteTkgsVisibleTransponder '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_editdvbsatellitetransponder"></a>
## `scan/editDvbSatelliteTransponder`

`luna://com.webos.service.utp.channel/scan/editDvbSatelliteTransponder`

Edits the DVB satellite transponder (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/editDvbSatelliteTransponder '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogdefaulttuneinfo"></a>
## `scan/getAnalogDefaultTuneInfo`

`luna://com.webos.service.utp.channel/scan/getAnalogDefaultTuneInfo`

Returns the analog default tune info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAnalogDefaultTuneInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogfrequencylist"></a>
## `scan/getAnalogFrequencyList`

`luna://com.webos.service.utp.channel/scan/getAnalogFrequencyList`

Returns the analog frequency list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAnalogFrequencyList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogprogramnumber"></a>
## `scan/getAnalogProgramNumber`

`luna://com.webos.service.utp.channel/scan/getAnalogProgramNumber`

Returns the analog program number (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAnalogProgramNumber '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogscaninfo"></a>
## `scan/getAnalogScanInfo`

`luna://com.webos.service.utp.channel/scan/getAnalogScanInfo`

Returns the analog scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAnalogScanInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getanalogtuningstatus"></a>
## `scan/getAnalogTuningStatus`

`luna://com.webos.service.utp.channel/scan/getAnalogTuningStatus`

Returns the analog tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAnalogTuningStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribsatellitescaninfo"></a>
## `scan/getAribSatelliteScanInfo`

`luna://com.webos.service.utp.channel/scan/getAribSatelliteScanInfo`

Returns the arib satellite scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAribSatelliteScanInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribsatellitetuningstatus"></a>
## `scan/getAribSatelliteTuningStatus`

`luna://com.webos.service.utp.channel/scan/getAribSatelliteTuningStatus`

Returns the arib satellite tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAribSatelliteTuningStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribterrestrialscaninfo"></a>
## `scan/getAribTerrestrialScanInfo`

`luna://com.webos.service.utp.channel/scan/getAribTerrestrialScanInfo`

Returns the arib terrestrial scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAribTerrestrialScanInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getaribterrestrialtuningstatus"></a>
## `scan/getAribTerrestrialTuningStatus`

`luna://com.webos.service.utp.channel/scan/getAribTerrestrialTuningStatus`

Returns the arib terrestrial tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAribTerrestrialTuningStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatscscaninfo"></a>
## `scan/getAtscScanInfo`

`luna://com.webos.service.utp.channel/scan/getAtscScanInfo`

Returns the ATSC scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAtscScanInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatsctuningstatus"></a>
## `scan/getAtscTuningStatus`

`luna://com.webos.service.utp.channel/scan/getAtscTuningStatus`

Returns the ATSC tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAtscTuningStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltype"></a>
## `scan/getAutoScanChannelType`

`luna://com.webos.service.utp.channel/scan/getAutoScanChannelType`

Returns the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanChannelType '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltypeorder"></a>
## `scan/getAutoScanChannelTypeOrder`

`luna://com.webos.service.utp.channel/scan/getAutoScanChannelTypeOrder`

Returns the auto scan channel type order (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanChannelTypeOrder '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanconflictinfo"></a>
## `scan/getAutoScanConflictInfo`

`luna://com.webos.service.utp.channel/scan/getAutoScanConflictInfo`

Returns the auto scan conflict info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanConflictInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanmodeforstore"></a>
## `scan/getAutoScanModeForStore`

`luna://com.webos.service.utp.channel/scan/getAutoScanModeForStore`

Returns the auto scan mode for store (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanModeForStore '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanprogress"></a>
## `scan/getAutoScanProgress`

`luna://com.webos.service.utp.channel/scan/getAutoScanProgress`

Returns the auto scan progress (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanProgress '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourceorderstatus"></a>
## `scan/getAutoScanSourceOrderStatus`

`luna://com.webos.service.utp.channel/scan/getAutoScanSourceOrderStatus`

Returns the auto scan source order status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanSourceOrderStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourcesearchresult"></a>
## `scan/getAutoScanSourceSearchResult`

`luna://com.webos.service.utp.channel/scan/getAutoScanSourceSearchResult`

Returns the auto scan source search result (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanSourceSearchResult '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanstatus"></a>
## `scan/getAutoScanStatus`

`luna://com.webos.service.utp.channel/scan/getAutoScanStatus`

Returns the auto scan status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getAutoScanStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellistcounttosolveconflictlcn"></a>
## `scan/getChannelListCountToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/getChannelListCountToSolveConflictLcn`

Returns the channel list count to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getChannelListCountToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellistcounttosolvesatcustomisedlcn"></a>
## `scan/getChannelListCountToSolveSatCustomisedLcn`

`luna://com.webos.service.utp.channel/scan/getChannelListCountToSolveSatCustomisedLcn`

Returns the channel list count to solve sat customised lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getChannelListCountToSolveSatCustomisedLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellisttosolveconflictlcn"></a>
## `scan/getChannelListToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/getChannelListToSolveConflictLcn`

Returns the channel list to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getChannelListToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getchannellisttosolvesatcustomisedlcn"></a>
## `scan/getChannelListToSolveSatCustomisedLcn`

`luna://com.webos.service.utp.channel/scan/getChannelListToSolveSatCustomisedLcn`

Returns the channel list to solve sat customised lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getChannelListToSolveSatCustomisedLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getconflictlcnlist"></a>
## `scan/getConflictLcnList`

`luna://com.webos.service.utp.channel/scan/getConflictLcnList`

Returns the conflict lcn list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getConflictLcnList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdefaulttuneinfo"></a>
## `scan/getDefaultTuneInfo`

`luna://com.webos.service.utp.channel/scan/getDefaultTuneInfo`

Returns the default tune info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDefaultTuneInfo '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcabledefaulttuneinfo"></a>
## `scan/getDvbCableDefaultTuneInfo`

`luna://com.webos.service.utp.channel/scan/getDvbCableDefaultTuneInfo`

Returns the DVB cable default tune info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableDefaultTuneInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcableprogramautoupdate"></a>
## `scan/getDvbCableProgramAutoUpdate`

`luna://com.webos.service.utp.channel/scan/getDvbCableProgramAutoUpdate`

Returns the DVB cable program auto update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableProgramAutoUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablescaninfo"></a>
## `scan/getDvbCableScanInfo`

`luna://com.webos.service.utp.channel/scan/getDvbCableScanInfo`

Returns the DVB cable scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableScanInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablescanoption"></a>
## `scan/getDvbCableScanOption`

`luna://com.webos.service.utp.channel/scan/getDvbCableScanOption`

Returns the DVB cable scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableScanOption '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcableserviceoperatorlist"></a>
## `scan/getDvbCableServiceOperatorList`

`luna://com.webos.service.utp.channel/scan/getDvbCableServiceOperatorList`

Returns the DVB cable service operator list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableServiceOperatorList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablesignaltestinfostatus"></a>
## `scan/getDvbCableSignalTestInfoStatus`

`luna://com.webos.service.utp.channel/scan/getDvbCableSignalTestInfoStatus`

Returns the DVB cable signal test info status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableSignalTestInfoStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcablesignalteststatus"></a>
## `scan/getDvbCableSignalTestStatus`

`luna://com.webos.service.utp.channel/scan/getDvbCableSignalTestStatus`

Returns the DVB cable signal test status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableSignalTestStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbcabletuningstatus"></a>
## `scan/getDvbCableTuningStatus`

`luna://com.webos.service.utp.channel/scan/getDvbCableTuningStatus`

Returns the DVB cable tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbCableTuningStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellite2tunerconn"></a>
## `scan/getDvbSatellite2TunerConn`

`luna://com.webos.service.utp.channel/scan/getDvbSatellite2TunerConn`

Returns the DVB satellite 2 tuner conn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatellite2TunerConn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteastrachannellists"></a>
## `scan/getDvbSatelliteAstraChannelLists`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteAstraChannelLists`

Returns the DVB satellite astra channel lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteAstraChannelLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteastrachannellistscount"></a>
## `scan/getDvbSatelliteAstraChannelListsCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteAstraChannelListsCount`

Returns the DVB satellite astra channel lists count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteAstraChannelListsCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteconfigurationlist"></a>
## `scan/getDvbSatelliteConfigurationList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteConfigurationList`

Returns the DVB satellite configuration list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteConfigurationList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitediseqcmotorsetting"></a>
## `scan/getDvbSatelliteDiSEqCMotorSetting`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteDiSEqCMotorSetting`

Returns the DVB satellite di s eq c motor setting (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteDiSEqCMotorSetting '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitegatheringastrachannellistsstatus"></a>
## `scan/getDvbSatelliteGatheringAstraChannelListsStatus`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteGatheringAstraChannelListsStatus`

Returns the DVB satellite gathering astra channel lists status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteGatheringAstraChannelListsStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitegatheringtricolorregionallistsstatus"></a>
## `scan/getDvbSatelliteGatheringTricolorRegionalListsStatus`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteGatheringTricolorRegionalListsStatus`

Returns the DVB satellite gathering tricolor regional lists status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteGatheringTricolorRegionalListsStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitelist"></a>
## `scan/getDvbSatelliteList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteList`

Returns the DVB satellite list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitelocationlongitude"></a>
## `scan/getDvbSatelliteLocationLongitude`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteLocationLongitude`

Returns the DVB satellite location longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteLocationLongitude '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7autodiseqcconfigurationstatus"></a>
## `scan/getDvbSatelliteM7AutoDiSEqCConfigurationStatus`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7AutoDiSEqCConfigurationStatus`

Returns the DVB satellite m 7 auto di s eq c configuration status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7AutoDiSEqCConfigurationStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7hometpsearchstatus"></a>
## `scan/getDvbSatelliteM7HomeTpSearchStatus`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7HomeTpSearchStatus`

Returns the DVB satellite m 7 home tp search status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7HomeTpSearchStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7orfregionalprogram"></a>
## `scan/getDvbSatelliteM7ORFRegionalProgram`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ORFRegionalProgram`

Returns the DVB satellite m 7 ORF regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ORFRegionalProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7orfregionalprogramlist"></a>
## `scan/getDvbSatelliteM7ORFRegionalProgramList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ORFRegionalProgramList`

Returns the DVB satellite m 7 ORF regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ORFRegionalProgramList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7orfregionalprogramlistcount"></a>
## `scan/getDvbSatelliteM7ORFRegionalProgramListCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ORFRegionalProgramListCount`

Returns the DVB satellite m 7 ORF regional program list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ORFRegionalProgramListCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7regionalprogramlist"></a>
## `scan/getDvbSatelliteM7RegionalProgramList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7RegionalProgramList`

Returns the DVB satellite m 7 regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7RegionalProgramList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7regionlist"></a>
## `scan/getDvbSatelliteM7RegionList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7RegionList`

Returns the DVB satellite m 7 region list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7RegionList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7selectedregionalprogramlist"></a>
## `scan/getDvbSatelliteM7SelectedRegionalProgramList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7SelectedRegionalProgramList`

Returns the DVB satellite m 7 selected regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7SelectedRegionalProgramList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitem7serviceoperatorsublists"></a>
## `scan/getDvbSatelliteM7ServiceOperatorSubLists`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ServiceOperatorSubLists`

Returns the DVB satellite m 7 service operator sub lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteM7ServiceOperatorSubLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitemotorstatus"></a>
## `scan/getDvbSatelliteMotorStatus`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteMotorStatus`

Returns the DVB satellite motor status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteMotorStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitemylatitude"></a>
## `scan/getDvbSatelliteMyLatitude`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteMyLatitude`

Returns the DVB satellite my latitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteMyLatitude '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitemylongitude"></a>
## `scan/getDvbSatelliteMyLongitude`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteMyLongitude`

Returns the DVB satellite my longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteMyLongitude '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteorsregionalprogram"></a>
## `scan/getDvbSatelliteORSRegionalProgram`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteORSRegionalProgram`

Returns the DVB satellite ORS regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteORSRegionalProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteorsregionalprogramlist"></a>
## `scan/getDvbSatelliteORSRegionalProgramList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteORSRegionalProgramList`

Returns the DVB satellite ORS regional program list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteORSRegionalProgramList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteorsregionalprogramlistcount"></a>
## `scan/getDvbSatelliteORSRegionalProgramListCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteORSRegionalProgramListCount`

Returns the DVB satellite ORS regional program list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteORSRegionalProgramListCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteregion"></a>
## `scan/getDvbSatelliteRegion`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteRegion`

Returns the DVB satellite region (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteRegion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteregionlist"></a>
## `scan/getDvbSatelliteRegionList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteRegionList`

Returns the DVB satellite region list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteRegionList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteregionlistcount"></a>
## `scan/getDvbSatelliteRegionListCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteRegionListCount`

Returns the DVB satellite region list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteRegionListCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitescanoption"></a>
## `scan/getDvbSatelliteScanOption`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteScanOption`

Returns the DVB satellite scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteScanOption '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteselectedastrachannellist"></a>
## `scan/getDvbSatelliteSelectedAstraChannelList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteSelectedAstraChannelList`

Returns the DVB satellite selected astra channel list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteSelectedAstraChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteserviceoperator"></a>
## `scan/getDvbSatelliteServiceOperator`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteServiceOperator`

Returns the DVB satellite service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteServiceOperator '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatelliteserviceoperatorlist"></a>
## `scan/getDvbSatelliteServiceOperatorList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteServiceOperatorList`

Returns the DVB satellite service operator list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteServiceOperatorList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgshiddentransponderlist"></a>
## `scan/getDvbSatelliteTkgsHiddenTransponderList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsHiddenTransponderList`

Returns the DVB satellite tkgs hidden transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsHiddenTransponderList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgshiddentransponderlistcount"></a>
## `scan/getDvbSatelliteTkgsHiddenTransponderListCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsHiddenTransponderListCount`

Returns the DVB satellite tkgs hidden transponder list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsHiddenTransponderListCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgspreferredlistcount"></a>
## `scan/getDvbSatelliteTkgsPreferredListCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsPreferredListCount`

Returns the DVB satellite tkgs preferred list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsPreferredListCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgspreferredlists"></a>
## `scan/getDvbSatelliteTkgsPreferredLists`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsPreferredLists`

Returns the DVB satellite tkgs preferred lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsPreferredLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsselectedpreferredlist"></a>
## `scan/getDvbSatelliteTkgsSelectedPreferredList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsSelectedPreferredList`

Returns the DVB satellite tkgs selected preferred list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsSelectedPreferredList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgstestmode"></a>
## `scan/getDvbSatelliteTkgsTestMode`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsTestMode`

Returns the DVB satellite tkgs test mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsTestMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsupdatelistsstatus"></a>
## `scan/getDvbSatelliteTkgsUpdateListsStatus`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsUpdateListsStatus`

Returns the DVB satellite tkgs update lists status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsUpdateListsStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsversion"></a>
## `scan/getDvbSatelliteTkgsVersion`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsVersion`

Returns the DVB satellite tkgs version (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsvisibletransponderlist"></a>
## `scan/getDvbSatelliteTkgsVisibleTransponderList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsVisibleTransponderList`

Returns the DVB satellite tkgs visible transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsVisibleTransponderList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetkgsvisibletransponderlistcount"></a>
## `scan/getDvbSatelliteTkgsVisibleTransponderListCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsVisibleTransponderListCount`

Returns the DVB satellite tkgs visible transponder list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTkgsVisibleTransponderListCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetransponderlist"></a>
## `scan/getDvbSatelliteTransponderList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTransponderList`

Returns the DVB satellite transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTransponderList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetricolorregionallist"></a>
## `scan/getDvbSatelliteTricolorRegionalList`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTricolorRegionalList`

Returns the DVB satellite tricolor regional list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTricolorRegionalList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetricolorregionallists"></a>
## `scan/getDvbSatelliteTricolorRegionalLists`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTricolorRegionalLists`

Returns the DVB satellite tricolor regional lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTricolorRegionalLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetricolorregionallistscount"></a>
## `scan/getDvbSatelliteTricolorRegionalListsCount`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTricolorRegionalListsCount`

Returns the DVB satellite tricolor regional lists count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTricolorRegionalListsCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbsatellitetuningstatus"></a>
## `scan/getDvbSatelliteTuningStatus`

`luna://com.webos.service.utp.channel/scan/getDvbSatelliteTuningStatus`

Returns the DVB satellite tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbSatelliteTuningStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialdefaulttuneinfo"></a>
## `scan/getDvbTerrestrialDefaultTuneInfo`

`luna://com.webos.service.utp.channel/scan/getDvbTerrestrialDefaultTuneInfo`

Returns the DVB terrestrial default tune info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTerrestrialDefaultTuneInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialscaninfo"></a>
## `scan/getDvbTerrestrialScanInfo`

`luna://com.webos.service.utp.channel/scan/getDvbTerrestrialScanInfo`

Returns the DVB terrestrial scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTerrestrialScanInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialscanoption"></a>
## `scan/getDvbTerrestrialScanOption`

`luna://com.webos.service.utp.channel/scan/getDvbTerrestrialScanOption`

Returns the DVB terrestrial scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTerrestrialScanOption '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialserviceoperatorlist"></a>
## `scan/getDvbTerrestrialServiceOperatorList`

`luna://com.webos.service.utp.channel/scan/getDvbTerrestrialServiceOperatorList`

Returns the DVB terrestrial service operator list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTerrestrialServiceOperatorList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialsignaltestinfostatus"></a>
## `scan/getDvbTerrestrialSignalTestInfoStatus`

`luna://com.webos.service.utp.channel/scan/getDvbTerrestrialSignalTestInfoStatus`

Returns the DVB terrestrial signal test info status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTerrestrialSignalTestInfoStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialsignalteststatus"></a>
## `scan/getDvbTerrestrialSignalTestStatus`

`luna://com.webos.service.utp.channel/scan/getDvbTerrestrialSignalTestStatus`

Returns the DVB terrestrial signal test status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTerrestrialSignalTestStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbterrestrialtuningstatus"></a>
## `scan/getDvbTerrestrialTuningStatus`

`luna://com.webos.service.utp.channel/scan/getDvbTerrestrialTuningStatus`

Returns the DVB terrestrial tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTerrestrialTuningStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbtkgscurrentoperatingmode"></a>
## `scan/getDvbTKGSCurrentOperatingMode`

`luna://com.webos.service.utp.channel/scan/getDvbTKGSCurrentOperatingMode`

Returns the DVB TKGS current operating mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTKGSCurrentOperatingMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getdvbtkgsoperatingmodelist"></a>
## `scan/getDvbTKGSOperatingModeList`

`luna://com.webos.service.utp.channel/scan/getDvbTKGSOperatingModeList`

Returns the DVB TKGS operating mode list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getDvbTKGSOperatingModeList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getnetworklisttosolveconflictlcn"></a>
## `scan/getNetworkListToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/getNetworkListToSolveConflictLcn`

Returns the network list to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getNetworkListToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getregionlistcounttosolveconflictlcn"></a>
## `scan/getRegionListCountToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/getRegionListCountToSolveConflictLcn`

Returns the region list count to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getRegionListCountToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getregionlisttosolveconflictlcn"></a>
## `scan/getRegionListToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/getRegionListToSolveConflictLcn`

Returns the region list to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getRegionListToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsatadultchannellist"></a>
## `scan/getSatAdultChannelList`

`luna://com.webos.service.utp.channel/scan/getSatAdultChannelList`

Returns the sat adult channel list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getSatAdultChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsatcustomisedlcnlist"></a>
## `scan/getSatCustomisedLcnList`

`luna://com.webos.service.utp.channel/scan/getSatCustomisedLcnList`

Returns the sat customised lcn list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getSatCustomisedLcnList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsatcustomisedlcnlistcount"></a>
## `scan/getSatCustomisedLCNListCount`

`luna://com.webos.service.utp.channel/scan/getSatCustomisedLCNListCount`

Returns the sat customised LCN list count (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getSatCustomisedLCNListCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getscanselectioninfo"></a>
## `scan/getScanSelectionInfo`

`luna://com.webos.service.utp.channel/scan/getScanSelectionInfo`

Returns the scan selection info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getScanSelectionInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsignalstatus"></a>
## `scan/getSignalStatus`

`luna://com.webos.service.utp.channel/scan/getSignalStatus`

Returns the signal status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getSignalStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsignaltestinfostatus"></a>
## `scan/getSignalTestInfoStatus`

`luna://com.webos.service.utp.channel/scan/getSignalTestInfoStatus`

Returns the signal test info status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getSignalTestInfoStatus '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsignalteststatus"></a>
## `scan/getSignalTestStatus`

`luna://com.webos.service.utp.channel/scan/getSignalTestStatus`

Returns the signal test status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getSignalTestStatus '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getsupportziggospecification"></a>
## `scan/getSupportZiggoSpecification`

`luna://com.webos.service.utp.channel/scan/getSupportZiggoSpecification`

Returns the support ziggo specification (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/getSupportZiggoSpecification '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitehometpmodificationallowed"></a>
## `scan/isDvbSatelliteHomeTpModificationAllowed`

`luna://com.webos.service.utp.channel/scan/isDvbSatelliteHomeTpModificationAllowed`

Reports whether the DVB satellite home tp modification allowed is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/isDvbSatelliteHomeTpModificationAllowed '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitem7regionalprogramavailable"></a>
## `scan/isDvbSatelliteM7RegionalProgramAvailable`

`luna://com.webos.service.utp.channel/scan/isDvbSatelliteM7RegionalProgramAvailable`

Reports whether the DVB satellite m 7 regional program available is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/isDvbSatelliteM7RegionalProgramAvailable '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitem7serviceoperator"></a>
## `scan/isDvbSatelliteM7ServiceOperator`

`luna://com.webos.service.utp.channel/scan/isDvbSatelliteM7ServiceOperator`

Reports whether the DVB satellite m 7 service operator is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/isDvbSatelliteM7ServiceOperator '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_isdvbsatellitetkgsupdaterequired"></a>
## `scan/isDvbSatelliteTkgsUpdateRequired`

`luna://com.webos.service.utp.channel/scan/isDvbSatelliteTkgsUpdateRequired`

Reports whether the DVB satellite tkgs update required is set (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/isDvbSatelliteTkgsUpdateRequired '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_movedvbsatellitediseqcmotor"></a>
## `scan/moveDvbSatelliteDiSEqCMotor`

`luna://com.webos.service.utp.channel/scan/moveDvbSatelliteDiSEqCMotor`

Moves the DVB satellite di s eq c motor (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/moveDvbSatelliteDiSEqCMotor '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_movedvbsatelliteusalsmotor"></a>
## `scan/moveDvbSatelliteUSALSMotor`

`luna://com.webos.service.utp.channel/scan/moveDvbSatelliteUSALSMotor`

Moves the DVB satellite USALS motor (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/moveDvbSatelliteUSALSMotor '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_releasebroadcast"></a>
## `scan/releaseBroadcast`

`luna://com.webos.service.utp.channel/scan/releaseBroadcast`

Releases the broadcast (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/releaseBroadcast '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbcablenetworkscaninfo"></a>
## `scan/resetDvbCableNetworkScanInfo` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/resetDvbCableNetworkScanInfo`

Resets the DVB cable network scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/resetDvbCableNetworkScanInfo '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbcablequickscaninfo"></a>
## `scan/resetDvbCableQuickScanInfo` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/resetDvbCableQuickScanInfo`

Resets the DVB cable quick scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/resetDvbCableQuickScanInfo '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbcablescaninfo"></a>
## `scan/resetDvbCableScanInfo` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/resetDvbCableScanInfo`

Resets the DVB cable scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/resetDvbCableScanInfo '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitediseqcmotor"></a>
## `scan/resetDvbSatelliteDiSEqCMotor` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteDiSEqCMotor`

Resets the DVB satellite di s eq c motor (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/resetDvbSatelliteDiSEqCMotor '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitediseqcmotorlimit"></a>
## `scan/resetDvbSatelliteDiSEqCMotorLimit` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteDiSEqCMotorLimit`

Resets the DVB satellite di s eq c motor limit (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/resetDvbSatelliteDiSEqCMotorLimit '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitetkgshiddentransponderlist"></a>
## `scan/resetDvbSatelliteTkgsHiddenTransponderList` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteTkgsHiddenTransponderList`

Resets the DVB satellite tkgs hidden transponder list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/resetDvbSatelliteTkgsHiddenTransponderList '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_resetdvbsatellitetkgsversion"></a>
## `scan/resetDvbSatelliteTkgsVersion` ⚠️ DANGEROUS

`luna://com.webos.service.utp.channel/scan/resetDvbSatelliteTkgsVersion`

Resets the DVB satellite tkgs version (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/resetDvbSatelliteTkgsVersion '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_saveanalogmanualtuning"></a>
## `scan/saveAnalogManualTuning`

`luna://com.webos.service.utp.channel/scan/saveAnalogManualTuning`

Saves the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/saveAnalogManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_saveatscmanualtuning"></a>
## `scan/saveAtscManualTuning`

`luna://com.webos.service.utp.channel/scan/saveAtscManualTuning`

Saves the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/saveAtscManualTuning '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_savedvbcablemanualtuning"></a>
## `scan/saveDvbCableManualTuning`

`luna://com.webos.service.utp.channel/scan/saveDvbCableManualTuning`

Saves the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/saveDvbCableManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_savedvbsatellitemanualtuning"></a>
## `scan/saveDvbSatelliteManualTuning`

`luna://com.webos.service.utp.channel/scan/saveDvbSatelliteManualTuning`

Saves the DVB satellite manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/saveDvbSatelliteManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_savedvbterrestrialmanualtuning"></a>
## `scan/saveDvbTerrestrialManualTuning`

`luna://com.webos.service.utp.channel/scan/saveDvbTerrestrialManualTuning`

Saves the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/saveDvbTerrestrialManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_scanselectioninfodone"></a>
## `scan/scanSelectionInfoDone`

`luna://com.webos.service.utp.channel/scan/scanSelectionInfoDone`

Scans for selection info done (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/scanSelectionInfoDone '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setanalogmanualtuning"></a>
## `scan/setAnalogManualTuning`

`luna://com.webos.service.utp.channel/scan/setAnalogManualTuning`

Sets the analog manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setAnalogManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setaribsatellitesignaltest"></a>
## `scan/setAribSatelliteSignalTest`

`luna://com.webos.service.utp.channel/scan/setAribSatelliteSignalTest`

Sets the arib satellite signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setAribSatelliteSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setaribterrestrialsignaltest"></a>
## `scan/setAribTerrestrialSignalTest`

`luna://com.webos.service.utp.channel/scan/setAribTerrestrialSignalTest`

Sets the arib terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setAribTerrestrialSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setatscmanualtuning"></a>
## `scan/setAtscManualTuning`

`luna://com.webos.service.utp.channel/scan/setAtscManualTuning`

Sets the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setAtscManualTuning '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanchanneltype"></a>
## `scan/setAutoScanChannelType`

`luna://com.webos.service.utp.channel/scan/setAutoScanChannelType`

Sets the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setAutoScanChannelType '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanmodeforstore"></a>
## `scan/setAutoScanModeForStore`

`luna://com.webos.service.utp.channel/scan/setAutoScanModeForStore`

Sets the auto scan mode for store (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setAutoScanModeForStore '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcablemanualtuning"></a>
## `scan/setDvbCableManualTuning`

`luna://com.webos.service.utp.channel/scan/setDvbCableManualTuning`

Sets the DVB cable manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbCableManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcableprogramautoupdate"></a>
## `scan/setDvbCableProgramAutoUpdate`

`luna://com.webos.service.utp.channel/scan/setDvbCableProgramAutoUpdate`

Sets the DVB cable program auto update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbCableProgramAutoUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcablescaninfo"></a>
## `scan/setDvbCableScanInfo`

`luna://com.webos.service.utp.channel/scan/setDvbCableScanInfo`

Sets the DVB cable scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbCableScanInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcablescanoption"></a>
## `scan/setDvbCableScanOption`

`luna://com.webos.service.utp.channel/scan/setDvbCableScanOption`

Sets the DVB cable scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbCableScanOption '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbcableserviceoperator"></a>
## `scan/setDvbCableServiceOperator`

`luna://com.webos.service.utp.channel/scan/setDvbCableServiceOperator`

Sets the DVB cable service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbCableServiceOperator '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellite2tunerconn"></a>
## `scan/setDvbSatellite2TunerConn`

`luna://com.webos.service.utp.channel/scan/setDvbSatellite2TunerConn`

Sets the DVB satellite 2 tuner conn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatellite2TunerConn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteastrachannellist"></a>
## `scan/setDvbSatelliteAstraChannelList`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteAstraChannelList`

Sets the DVB satellite astra channel list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteAstraChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitediseqcmotorlimit"></a>
## `scan/setDvbSatelliteDiSEqCMotorLimit`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteDiSEqCMotorLimit`

Sets the DVB satellite di s eq c motor limit (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteDiSEqCMotorLimit '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitediseqcmotorposition"></a>
## `scan/setDvbSatelliteDiSEqCMotorPosition`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteDiSEqCMotorPosition`

Sets the DVB satellite di s eq c motor position (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteDiSEqCMotorPosition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitehometps"></a>
## `scan/setDvbSatelliteHomeTPs`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteHomeTPs`

Sets the DVB satellite home t ps (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteHomeTPs '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitelocationlongitude"></a>
## `scan/setDvbSatelliteLocationLongitude`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteLocationLongitude`

Sets the DVB satellite location longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteLocationLongitude '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitem7orfregionalprogram"></a>
## `scan/setDvbSatelliteM7ORFRegionalProgram`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteM7ORFRegionalProgram`

Sets the DVB satellite m 7 ORF regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteM7ORFRegionalProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitem7regionalprogram"></a>
## `scan/setDvbSatelliteM7RegionalProgram`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteM7RegionalProgram`

Sets the DVB satellite m 7 regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteM7RegionalProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitem7serviceoperatorsublist"></a>
## `scan/setDvbSatelliteM7ServiceOperatorSubList`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteM7ServiceOperatorSubList`

Sets the DVB satellite m 7 service operator sub list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteM7ServiceOperatorSubList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitemanualtuning"></a>
## `scan/setDvbSatelliteManualTuning`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteManualTuning`

Sets the DVB satellite manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitemylatitude"></a>
## `scan/setDvbSatelliteMyLatitude`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteMyLatitude`

Sets the DVB satellite my latitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteMyLatitude '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitemylongitude"></a>
## `scan/setDvbSatelliteMyLongitude`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteMyLongitude`

Sets the DVB satellite my longitude (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteMyLongitude '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteorsregionalprogram"></a>
## `scan/setDvbSatelliteORSRegionalProgram`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteORSRegionalProgram`

Sets the DVB satellite ORS regional program (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteORSRegionalProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteregion"></a>
## `scan/setDvbSatelliteRegion`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteRegion`

Sets the DVB satellite region (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteRegion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitescaninfo"></a>
## `scan/setDvbSatelliteScanInfo`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteScanInfo`

Sets the DVB satellite scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteScanInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitescanoption"></a>
## `scan/setDvbSatelliteScanOption`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteScanOption`

Sets the DVB satellite scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteScanOption '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteselectedsatellite"></a>
## `scan/setDvbSatelliteSelectedSatellite`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteSelectedSatellite`

Sets the DVB satellite selected satellite (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteSelectedSatellite '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatelliteserviceoperator"></a>
## `scan/setDvbSatelliteServiceOperator`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteServiceOperator`

Sets the DVB satellite service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteServiceOperator '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetkgspreferredlist"></a>
## `scan/setDvbSatelliteTkgsPreferredList`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteTkgsPreferredList`

Sets the DVB satellite tkgs preferred list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteTkgsPreferredList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetkgstestmode"></a>
## `scan/setDvbSatelliteTkgsTestMode`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteTkgsTestMode`

Sets the DVB satellite tkgs test mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteTkgsTestMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetkgsupdate"></a>
## `scan/setDvbSatelliteTkgsUpdate`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteTkgsUpdate`

Sets the DVB satellite tkgs update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteTkgsUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbsatellitetricolorregionallist"></a>
## `scan/setDvbSatelliteTricolorRegionalList`

`luna://com.webos.service.utp.channel/scan/setDvbSatelliteTricolorRegionalList`

Sets the DVB satellite tricolor regional list (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbSatelliteTricolorRegionalList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbterrestrialmanualtuning"></a>
## `scan/setDvbTerrestrialManualTuning`

`luna://com.webos.service.utp.channel/scan/setDvbTerrestrialManualTuning`

Sets the DVB terrestrial manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbTerrestrialManualTuning '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbterrestrialscanoption"></a>
## `scan/setDvbTerrestrialScanOption`

`luna://com.webos.service.utp.channel/scan/setDvbTerrestrialScanOption`

Sets the DVB terrestrial scan option (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbTerrestrialScanOption '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbterrestrialserviceoperator"></a>
## `scan/setDvbTerrestrialServiceOperator`

`luna://com.webos.service.utp.channel/scan/setDvbTerrestrialServiceOperator`

Sets the DVB terrestrial service operator (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbTerrestrialServiceOperator '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setdvbtkgscurrentoperatingmode"></a>
## `scan/setDvbTKGSCurrentOperatingMode`

`luna://com.webos.service.utp.channel/scan/setDvbTKGSCurrentOperatingMode`

Sets the DVB TKGS current operating mode (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setDvbTKGSCurrentOperatingMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferredchanneltosolveconflictlcn"></a>
## `scan/setPreferredChannelToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/setPreferredChannelToSolveConflictLcn`

Sets the preferred channel to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setPreferredChannelToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferredchanneltosolvesatcustomisedlcn"></a>
## `scan/setPreferredChannelToSolveSatCustomisedLcn`

`luna://com.webos.service.utp.channel/scan/setPreferredChannelToSolveSatCustomisedLcn`

Sets the preferred channel to solve sat customised lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setPreferredChannelToSolveSatCustomisedLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferrednetworktosolveconflictlcn"></a>
## `scan/setPreferredNetworkToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/setPreferredNetworkToSolveConflictLcn`

Sets the preferred network to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setPreferredNetworkToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_setpreferredregiontosolveconflictlcn"></a>
## `scan/setPreferredRegionToSolveConflictLcn`

`luna://com.webos.service.utp.channel/scan/setPreferredRegionToSolveConflictLcn`

Sets the preferred region to solve conflict lcn (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/setPreferredRegionToSolveConflictLcn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_skipautoscan"></a>
## `scan/skipAutoScan`

`luna://com.webos.service.utp.channel/scan/skipAutoScan`

Skips the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/skipAutoScan '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startautoscan"></a>
## `scan/startAutoScan`

`luna://com.webos.service.utp.channel/scan/startAutoScan`

Starts the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startAutoScan '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbcablechannellistupdate"></a>
## `scan/startDvbCableChannelListUpdate`

`luna://com.webos.service.utp.channel/scan/startDvbCableChannelListUpdate`

Starts the DVB cable channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbCableChannelListUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbcablesignaltest"></a>
## `scan/startDvbCableSignalTest`

`luna://com.webos.service.utp.channel/scan/startDvbCableSignalTest`

Starts the DVB cable signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbCableSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitechannellistupdate"></a>
## `scan/startDvbSatelliteChannelListUpdate`

`luna://com.webos.service.utp.channel/scan/startDvbSatelliteChannelListUpdate`

Starts the DVB satellite channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbSatelliteChannelListUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitegatheringastrachannellists"></a>
## `scan/startDvbSatelliteGatheringAstraChannelLists`

`luna://com.webos.service.utp.channel/scan/startDvbSatelliteGatheringAstraChannelLists`

Starts the DVB satellite gathering astra channel lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbSatelliteGatheringAstraChannelLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitegatheringtricolorregionallists"></a>
## `scan/startDvbSatelliteGatheringTricolorRegionalLists`

`luna://com.webos.service.utp.channel/scan/startDvbSatelliteGatheringTricolorRegionalLists`

Starts the DVB satellite gathering tricolor regional lists (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbSatelliteGatheringTricolorRegionalLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitem7autodiseqcconfiguration"></a>
## `scan/startDvbSatelliteM7AutoDiSEqCConfiguration`

`luna://com.webos.service.utp.channel/scan/startDvbSatelliteM7AutoDiSEqCConfiguration`

Starts the DVB satellite m 7 auto di s eq c configuration (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbSatelliteM7AutoDiSEqCConfiguration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitem7hometpsearch"></a>
## `scan/startDvbSatelliteM7HomeTPSearch`

`luna://com.webos.service.utp.channel/scan/startDvbSatelliteM7HomeTPSearch`

Starts the DVB satellite m 7 home TP search (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbSatelliteM7HomeTPSearch '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbsatellitetkgsupdate"></a>
## `scan/startDvbSatelliteTkgsUpdate`

`luna://com.webos.service.utp.channel/scan/startDvbSatelliteTkgsUpdate`

Starts the DVB satellite tkgs update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbSatelliteTkgsUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbterrestrialchannellistupdate"></a>
## `scan/startDvbTerrestrialChannelListUpdate`

`luna://com.webos.service.utp.channel/scan/startDvbTerrestrialChannelListUpdate`

Starts the DVB terrestrial channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbTerrestrialChannelListUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_startdvbterrestrialsignaltest"></a>
## `scan/startDvbTerrestrialSignalTest`

`luna://com.webos.service.utp.channel/scan/startDvbTerrestrialSignalTest`

Starts the DVB terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/startDvbTerrestrialSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopautoscan"></a>
## `scan/stopAutoScan`

`luna://com.webos.service.utp.channel/scan/stopAutoScan`

Stops the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopAutoScan '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbcablechannellistupdate"></a>
## `scan/stopDvbCableChannelListUpdate`

`luna://com.webos.service.utp.channel/scan/stopDvbCableChannelListUpdate`

Stops the DVB cable channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopDvbCableChannelListUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbcablesignaltest"></a>
## `scan/stopDvbCableSignalTest`

`luna://com.webos.service.utp.channel/scan/stopDvbCableSignalTest`

Stops the DVB cable signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopDvbCableSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbsatellitechannellistupdate"></a>
## `scan/stopDvbSatelliteChannelListUpdate`

`luna://com.webos.service.utp.channel/scan/stopDvbSatelliteChannelListUpdate`

Stops the DVB satellite channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopDvbSatelliteChannelListUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbsatellitediseqcmotormoving"></a>
## `scan/stopDvbSatelliteDiSEqCMotorMoving`

`luna://com.webos.service.utp.channel/scan/stopDvbSatelliteDiSEqCMotorMoving`

Stops the DVB satellite di s eq c motor moving (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopDvbSatelliteDiSEqCMotorMoving '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbsatellitetkgsupdate"></a>
## `scan/stopDvbSatelliteTkgsUpdate`

`luna://com.webos.service.utp.channel/scan/stopDvbSatelliteTkgsUpdate`

Stops the DVB satellite tkgs update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopDvbSatelliteTkgsUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbterrestrialchannellistupdate"></a>
## `scan/stopDvbTerrestrialChannelListUpdate`

`luna://com.webos.service.utp.channel/scan/stopDvbTerrestrialChannelListUpdate`

Stops the DVB terrestrial channel list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopDvbTerrestrialChannelListUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopdvbterrestrialsignaltest"></a>
## `scan/stopDvbTerrestrialSignalTest`

`luna://com.webos.service.utp.channel/scan/stopDvbTerrestrialSignalTest`

Stops the DVB terrestrial signal test (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scan/stopDvbTerrestrialSignalTest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scanbarkerchannel"></a>
## `scanBarkerChannel`

`luna://com.webos.service.utp.channel/scanBarkerChannel`

Scans for barker channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/scanBarkerChannel '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiochannel"></a>
## `setAudioChannel`

`luna://com.webos.service.utp.channel/setAudioChannel`

Sets the audio channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/setAudioChannel '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiolanguage"></a>
## `setAudioLanguage`

`luna://com.webos.service.utp.channel/setAudioLanguage`

Sets the audio language.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/setAudioLanguage '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelgroup"></a>
## `setChannelGroup`

`luna://com.webos.service.utp.channel/setChannelGroup`

Sets the channel group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/setChannelGroup '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelmode"></a>
## `setChannelMode`

`luna://com.webos.service.utp.channel/setChannelMode`

Sets the channel mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/setChannelMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelsortmode"></a>
## `setChannelSortMode`

`luna://com.webos.service.utp.channel/setChannelSortMode`

Sets the channel sort mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/setChannelSortMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setlastchannelid"></a>
## `setLastChannelId`

`luna://com.webos.service.utp.channel/setLastChannelId`

Sets the last channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/setLastChannelId '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvideoview"></a>
## `setVideoView`

`luna://com.webos.service.utp.channel/setVideoView`

Sets the video view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/setVideoView '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sortanalogchannellist"></a>
## `sortAnalogChannelList`

`luna://com.webos.service.utp.channel/sortAnalogChannelList`

Handles the sort analog channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/sortAnalogChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startewbscheckinwarm"></a>
## `startEwbsCheckInWarm`

`luna://com.webos.service.utp.channel/startEwbsCheckInWarm`

Starts the ewbs check in warm.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/startEwbsCheckInWarm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopewbscheckinwarm"></a>
## `stopEwbsCheckInWarm`

`luna://com.webos.service.utp.channel/stopEwbsCheckInWarm`

Stops the ewbs check in warm.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.channel/stopEwbsCheckInWarm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
