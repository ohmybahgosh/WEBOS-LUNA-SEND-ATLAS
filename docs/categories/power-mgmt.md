# Power Management (sleep/wake)

44 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.palm.sleep/timeout/getAllAlarms`](../services/com.palm.sleep.md#timeout_getallalarms) | private | Getter on com.palm.sleep (introspected on-device; parameters undocumented). |
| [`luna://com.palm.sleep/timeout/getNextWakeupAlarm`](../services/com.palm.sleep.md#timeout_getnextwakeupalarm) | private | Getter on com.palm.sleep (introspected on-device; parameters undocumented). |
| [`luna://com.webos.service.devicereset/requestReboot`](../services/com.webos.service.devicereset.md#requestreboot) | ssap | Full TV reboot |
| [`luna://com.webos.service.power2/acquireWakeLock`](../services/com.webos.service.power2.md#acquirewakelock) | public | Allows the device to remain powered on for a specific time period, after which the lock is released. Note: No other state change operation can be executed durin |
| [`luna://com.webos.service.power2/getPowerOnReason`](../services/com.webos.service.power2.md#getpoweronreason) | public | Gets the last reason set for powering-on the device. |
| [`luna://com.webos.service.power2/getState`](../services/com.webos.service.power2.md#getstate) | public | Obtains the currently set state. |
| [`luna://com.webos.service.power2/notifyAlarmExpiry`](../services/com.webos.service.power2.md#notifyalarmexpiry) | public | Notifies about the alarm expiry. |
| [`luna://com.webos.service.power2/reboot`](../services/com.webos.service.power2.md#reboot) | public | Reboots the device with in timeout after acknowledged from registered client. LunaInterfacePMSRoot:TimeOut is configured in /var/PMS/pms.conf file as 15mins by  |
| [`luna://com.webos.service.power2/registerStateTransition`](../services/com.webos.service.power2.md#registerstatetransition) | public | Clients can register to get notified when the state changes from a specified state. For example, if registered to get notifications on state “ACTIVE”, you will  |
| [`luna://com.webos.service.power2/releaseWakeLock`](../services/com.webos.service.power2.md#releasewakelock) | public | Instantly releases the wake lock for the client. |
| [`luna://com.webos.service.power2/respondStateTransitionAck`](../services/com.webos.service.power2.md#respondstatetransitionack) | public | For clients that have registered for state change notifications, some state transitions require acceptance (acknowledgement) of all clients who register for thi |
| [`luna://com.webos.service.power2/setPowerOnReason`](../services/com.webos.service.power2.md#setpoweronreason) | public | Specify the reason that caused the device to be powered on. |
| [`luna://com.webos.service.power2/setState`](../services/com.webos.service.power2.md#setstate) | public | Sets the state of the device. This method forcefully sets the state and ignores the sequential flow of power states. This means that the client is not prompted  |
| [`luna://com.webos.service.power2/shutdown`](../services/com.webos.service.power2.md#shutdown) | public | Shuts down the device. Note : Client will be prompted for acknowledgement if registered for state change notifications. This shutdown API will work differently  |
| [`luna://com.webos.service.sleep/com/palm/power/activityEnd`](../services/com.webos.service.sleep.md#com_palm_power_activityend) | public | Cancel a previous request (identified by "id") which was registered using activityStart. |
| [`luna://com.webos.service.sleep/com/palm/power/activityStart`](../services/com.webos.service.sleep.md#com_palm_power_activitystart) | public | An activity is a specified time duration for which you do not want the system to suspend. This method requests that the system create an activity for "duration" |
| [`luna://com.webos.service.sleep/com/palm/power/clientCancelByName`](../services/com.webos.service.sleep.md#com_palm_power_clientcancelbyname) | public |  |
| [`luna://com.webos.service.sleep/com/palm/power/forceSuspend`](../services/com.webos.service.sleep.md#com_palm_power_forcesuspend) | public | Force the device to go into suspend even with charger connected or any activity is still active. Note: Used for developer testing purposes. |
| [`luna://com.webos.service.sleep/com/palm/power/identify`](../services/com.webos.service.sleep.md#com_palm_power_identify) | public |  |
| [`luna://com.webos.service.sleep/com/palm/power/prepareSuspendAck`](../services/com.webos.service.sleep.md#com_palm_power_preparesuspendack) | public | Used by a client to respond (ack or nack) to the "prepareSuspend" signal. Once the client sends ack to the "prepareSuspend" signal, the client does not do any m |
| [`luna://com.webos.service.sleep/com/palm/power/prepareSuspendRegister`](../services/com.webos.service.sleep.md#com_palm_power_preparesuspendregister) | public |  |
| [`luna://com.webos.service.sleep/com/palm/power/suspendRequestAck`](../services/com.webos.service.sleep.md#com_palm_power_suspendrequestack) | public | Add the client's count in the total number of ACKs received for the "suspend request" signal. |
| [`luna://com.webos.service.sleep/com/palm/power/suspendRequestRegister`](../services/com.webos.service.sleep.md#com_palm_power_suspendrequestregister) | public |  |
| [`luna://com.webos.service.sleep/com/palm/power/TESTSuspend`](../services/com.webos.service.sleep.md#com_palm_power_testsuspend) | public | Schedule the IdleCheck thread to check if the device can suspend. Note: Used for developer testing purposes. |
| [`luna://com.webos.service.sleep/shutdown/initiate`](../services/com.webos.service.sleep.md#shutdown_initiate) | public | Starts the shutdown process. It sends the shutdownApplications and shutdownServices signals to all the registered apps/services. Returns "true" once the shutdow |
| [`luna://com.webos.service.sleep/shutdown/machineOff`](../services/com.webos.service.sleep.md#shutdown_machineoff) | public | Shuts down the machine forcefully. |
| [`luna://com.webos.service.sleep/shutdown/machineReboot`](../services/com.webos.service.sleep.md#shutdown_machinereboot) | public | Reboots the machine forcefully by calling "reboot". |
| [`luna://com.webos.service.sleep/shutdown/shutdownApplications`](../services/com.webos.service.sleep.md#shutdown_shutdownapplications) | unknown | This is the signal sent out by the sleepd daemon to the applications when the shutdown process starts. The daemon expects to get a response from all the registe |
| [`luna://com.webos.service.sleep/shutdown/shutdownApplicationsAck`](../services/com.webos.service.sleep.md#shutdown_shutdownapplicationsack) | public | Sets the client's response as ACK for the "shutdownApplications" signal and trigger the dispatcher for the shutdown state machine, so that if the total client A |
| [`luna://com.webos.service.sleep/shutdown/shutdownApplicationsRegister`](../services/com.webos.service.sleep.md#shutdown_shutdownapplicationsregister) | public | Registers an application for the "shutdownApplications" signal. Returns the client ID of the client. |
| [`luna://com.webos.service.sleep/shutdown/shutdownServices`](../services/com.webos.service.sleep.md#shutdown_shutdownservices) | unknown | This is the signal sent out by the sleepd daemon to the services when the shutdown process starts. The daemon expects to get a response from all the registered  |
| [`luna://com.webos.service.sleep/shutdown/shutdownServicesAck`](../services/com.webos.service.sleep.md#shutdown_shutdownservicesack) | public | Sets the client's response as ACK for the "shutdownServices" signal and trigger the dispatcher for the shutdown state machine, so that if the total client ACK c |
| [`luna://com.webos.service.sleep/shutdown/shutdownServicesRegister`](../services/com.webos.service.sleep.md#shutdown_shutdownservicesregister) | public | Registers an application for the "shutdownApplications" signal. Returns the client ID of the client added. |
| [`luna://com.webos.service.sleep/shutdown/TESTresetShutdownState`](../services/com.webos.service.sleep.md#shutdown_testresetshutdownstate) | public | Called by test code to reset state machine to square 1. Note: Used for developer testing purposes. |
| [`luna://com.webos.service.sleep/time/alarmAdd`](../services/com.webos.service.sleep.md#time_alarmadd) | public |  |
| [`luna://com.webos.service.sleep/time/alarmAddCalendar`](../services/com.webos.service.sleep.md#time_alarmaddcalendar) | public |  |
| [`luna://com.webos.service.sleep/time/alarmQuery`](../services/com.webos.service.sleep.md#time_alarmquery) | public | Query for set of alarms identified by 'serviceName' & 'key'. |
| [`luna://com.webos.service.sleep/time/alarmRemove`](../services/com.webos.service.sleep.md#time_alarmremove) | public | Removes an alarm by id. |
| [`luna://com.webos.service.sleep/time/internalAlarmFired`](../services/com.webos.service.sleep.md#time_internalalarmfired) | public | Called when an RTC alarm is fired. |
| [`luna://com.webos.service.sleep/timeout/clear`](../services/com.webos.service.sleep.md#timeout_clear) | public | Handles a timeout/clear message and deletes a timeout by its key. |
| [`luna://com.webos.service.sleep/timeout/set`](../services/com.webos.service.sleep.md#timeout_set) | public | Handles a timeout/set message and adds a new power timeout. Relative timeouts can be set by passing the "in" parameter. Absolute timeouts can be set by passing  |
| [`luna://com.webos.service.tv.power/reboot`](../services/com.webos.service.tv.power.md#reboot) | private | Soft reboot the TV (webOS 4/5 path) |
| [`luna://com.webos.service.wifi/wearable/getSleepMode`](../services/com.webos.service.wifi.md#wearable_getsleepmode) | private | Method on com.webos.service.wifi (from on-device permission registry; parameters undocumented). |
| [`luna://com.webos.service.wifi/wearable/setSleepMode`](../services/com.webos.service.wifi.md#wearable_setsleepmode) | private | Method on com.webos.service.wifi (from on-device permission registry; parameters undocumented). |
