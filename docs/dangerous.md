# ⚠️ Dangerous calls

These can factory reset the TV, wipe app or user data, break software updates, change panel/factory values, remove your Home launcher, or otherwise leave the TV in a state that is hard to recover.  Several are irreversible.  **Don't run them unless you know exactly how to undo them.**  Nobody here is responsible for your TV.

55 entries.

| URI | Why | 
|---|---|
| [`luna://com.lge.settingsservice/resetSystemSettings`](services/com.lge.settingsservice.md#resetsystemsettings) | Resets system settings to their factory/default values |
| [`luna://com.palm.db/load`](services/com.palm.db.md#load) | Restores a database from a dumped JSON file. |
| [`luna://com.palm.db/purge`](services/com.palm.db.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.palm.db/putQuotas`](services/com.palm.db.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.palm.db/removeAppData`](services/com.palm.db.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.palm.sleep/com/palm/power/forceSuspend`](services/com.palm.sleep.md#com_palm_power_forcesuspend) | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`luna://com.palm.sleep/shutdown/machineOff`](services/com.palm.sleep.md#shutdown_machineoff) | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`luna://com.palm.sleep/shutdown/machineReboot`](services/com.palm.sleep.md#shutdown_machinereboot) | Registered in webOS OSE sysbus api.json (ACG group sleep.management); name only |
| [`luna://com.palm.storage/erase/EraseAll`](services/com.palm.storage.md#erase_eraseall) | Erases all storage (part of ##RTN# sequence) |
| [`luna://com.palm.telephony/radioDefaultsRestore`](services/com.palm.telephony.md#radiodefaultsrestore) | Restores radio defaults (##RTN# style nuke command) |
| [`luna://com.palm.telephony/resetRadio`](services/com.palm.telephony.md#resetradio) | Resets the radio (part of ##RTN# sequence) |
| [`luna://com.palm.tempdb/purge`](services/com.palm.tempdb.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.palm.tempdb/putQuotas`](services/com.palm.tempdb.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.palm.tempdb/removeAppData`](services/com.palm.tempdb.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.webos.applicationManager/blockSystemApp`](services/com.webos.applicationManager.md#blocksystemapp) | Blocks a system app (used by webos-homebar to replace LG Home) |
| [`luna://com.webos.applicationManager/launch`](services/com.webos.applicationManager.md#launch) | Launches the app with the given app ID, optionally with params. |
| [`luna://com.webos.epgdb/load`](services/com.webos.epgdb.md#load) | Restores a database from a dumped JSON file. |
| [`luna://com.webos.epgdb/purge`](services/com.webos.epgdb.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.webos.epgdb/putQuotas`](services/com.webos.epgdb.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.webos.epgdb/removeAppData`](services/com.webos.epgdb.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.webos.mediadb/load`](services/com.webos.mediadb.md#load) | Restores a database from a dumped JSON file. |
| [`luna://com.webos.mediadb/purge`](services/com.webos.mediadb.md#purge) | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data |
| [`luna://com.webos.mediadb/putQuotas`](services/com.webos.mediadb.md#putquotas) | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services. |
| [`luna://com.webos.mediadb/removeAppData`](services/com.webos.mediadb.md#removeappdata) | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner . |
| [`luna://com.webos.service.applicationmanager/setDefaultApp`](services/com.webos.service.applicationmanager.md#setdefaultapp) | Sets the default app for a category such as home (replaces the Home button target) |
| [`luna://com.webos.service.bluetooth2/adapter/internal/sendHciCommand`](services/com.webos.service.bluetooth2.md#adapter_internal_sendhcicommand) | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`luna://com.webos.service.config/setConfigs`](services/com.webos.service.config.md#setconfigs) | Overrides current settings of the configs . The overridden values will be kept until rebooting or returning back in any future queries for the config. It is useful for changing configuration in factor |
| [`luna://com.webos.service.mrcu/startFirmwareUpdate`](services/com.webos.service.mrcu.md#startfirmwareupdate) | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.oledepl/setGlobalStressReduction`](services/com.webos.service.oledepl.md#setglobalstressreduction) | Toggles OLED GSR (In-Start service menu option) |
| [`luna://com.webos.service.oledepl/setTemporalPeakControl`](services/com.webos.service.oledepl.md#settemporalpeakcontrol) | Toggles OLED TPC (In-Start service menu option) |
| [`luna://com.webos.service.pqcontroller/setWhiteBalance`](services/com.webos.service.pqcontroller.md#setwhitebalance) | Set white balance in Ez-Adjust service menu |
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
| [`luna://com.webos.service.update/setExpertMode`](services/com.webos.service.update.md#setexpertmode) | Enables update "expert mode" so the firmware-update UI accepts downgrades/USB images |
| [`luna://com.webos.service.update/startUpdateByRemoteApp`](services/com.webos.service.update.md#startupdatebyremoteapp) | Start a firmware update initiated from a remote app |
| [`luna://com.webos.settingsservice/resetSystemSettings`](services/com.webos.settingsservice.md#resetsystemsettings) | Resets system settings to their factory/default values |
| [`luna://org.webosbrew.hbchannel.service/elevateService`](services/org.webosbrew.hbchannel.service.md#elevateservice) | Homebrew Channel service: Elevates a dev-mode service to root |
| [`luna://org.webosbrew.hbchannel.service/exec`](services/org.webosbrew.hbchannel.service.md#exec) | Runs a shell command (root if TV is rooted) |
| [`luna://org.webosbrew.hbchannel.service/spawn`](services/org.webosbrew.hbchannel.service.md#spawn) | Spawns long-running process with streamed output |
| [`luna://org.webosbrew.hbchannel.service/updateStartupScript`](services/org.webosbrew.hbchannel.service.md#updatestartupscript) | Homebrew Channel service: Refreshes /var/lib/webosbrew/startup.sh |
