# Notifications & Alerts

82 methods.  [Back to index](../../README.md#categories)

| URI | Access | Conf | Description |
|---|---|---|---|
| [`luna://amazon.alexa.adapter.plugin/testToast`](../services/amazon.alexa.adapter.plugin.md#testtoast) | private | inferred | Tests the toast. |
| [`luna://com.palm.webappmanager/fireNotificationEvent`](../services/com.palm.webappmanager.md#firenotificationevent) | private | inferred | Handles the fire notification event. |
| [`luna://com.webos.notification/$activity`](../services/com.webos.notification.md#_activity) | unknown | documented | Contains detailed information of an activity which is fired by the Actvity Manager . This object is returned from the Activity Manager. For more details, see co |
| [`luna://com.webos.notification/action`](../services/com.webos.notification.md#action) | unknown | documented | Describes the action parameter for the toast. |
| [`luna://com.webos.notification/alertInfo`](../services/com.webos.notification.md#alertinfo) | unknown | documented | Contains the alert information. |
| [`luna://com.webos.notification/button`](../services/com.webos.notification.md#button) | unknown | documented | Contains alert button information |
| [`luna://com.webos.notification/closeAlert`](../services/com.webos.notification.md#closealert) | public | documented | Closes the currently displayed alert notification. |
| [`luna://com.webos.notification/closeAllAlerts`](../services/com.webos.notification.md#closeallalerts) | public | documented | Closes all the open alerts. Note: This method is for internal use. It must only be used by com.webos.service.battest during BAT test . If the caller is not com. |
| [`luna://com.webos.notification/closeInputAlert`](../services/com.webos.notification.md#closeinputalert) | private | inferred | Closes the input alert. |
| [`luna://com.webos.notification/closePincodePrompt`](../services/com.webos.notification.md#closepincodeprompt) | private | inferred | Closes the pincode prompt. |
| [`luna://com.webos.notification/closeToast`](../services/com.webos.notification.md#closetoast) | public | documented | Removes a toast notification from the database. |
| [`luna://com.webos.notification/createAlert`](../services/com.webos.notification.md#createalert) | public | documented | Creates a system alert notification. |
| [`luna://com.webos.notification/createInputAlert`](../services/com.webos.notification.md#createinputalert) | private | inferred | Creates the input alert. |
| [`luna://com.webos.notification/createNotification`](../services/com.webos.notification.md#createnotification) | private | inferred | Creates the notification. |
| [`luna://com.webos.notification/createPincodePrompt`](../services/com.webos.notification.md#createpincodeprompt) | public | inferred | Creates the pincode prompt. |
| [`luna://com.webos.notification/createRemoteNotification`](../services/com.webos.notification.md#createremotenotification) | private | inferred | Creates the remote notification. |
| [`luna://com.webos.notification/createSignageAlert`](../services/com.webos.notification.md#createsignagealert) | public | inferred | Creates the signage alert. |
| [`luna://com.webos.notification/createToast`](../services/com.webos.notification.md#createtoast) | public | documented | Creates a toast notification. |
| [`luna://com.webos.notification/disable`](../services/com.webos.notification.md#disable) | public | documented | Disables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged application or service can call this method. |
| [`luna://com.webos.notification/disableToast`](../services/com.webos.notification.md#disabletoast) | private | inferred | Disables the toast. |
| [`luna://com.webos.notification/enable`](../services/com.webos.notification.md#enable) | public | documented | Enables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged app/service can call this method. |
| [`luna://com.webos.notification/enableToast`](../services/com.webos.notification.md#enabletoast) | private | inferred | Enables the toast. |
| [`luna://com.webos.notification/getAlertNotification`](../services/com.webos.notification.md#getalertnotification) | public | documented | Subscribe to create alert notifications. Note: This method should only be used by the Surface Manager . |
| [`luna://com.webos.notification/getInputAlertNotification`](../services/com.webos.notification.md#getinputalertnotification) | private | inferred | Returns the input alert notification. |
| [`luna://com.webos.notification/getNotification`](../services/com.webos.notification.md#getnotification) | private | inferred | Returns the notification. |
| [`luna://com.webos.notification/getNotificationInfo`](../services/com.webos.notification.md#getnotificationinfo) | private | inferred | Returns the notification info. |
| [`luna://com.webos.notification/getPincodePromptNotification`](../services/com.webos.notification.md#getpincodepromptnotification) | private | inferred | Returns the pincode prompt notification. |
| [`luna://com.webos.notification/getRemoteNotificationInfo`](../services/com.webos.notification.md#getremotenotificationinfo) | private | inferred | Returns the remote notification info. |
| [`luna://com.webos.notification/getToastCount`](../services/com.webos.notification.md#gettoastcount) | public | documented | Queries the toast notification details of the stored messages and provides the read/unread count of the toast notifications. Note: Only "com.webos.surfacemanage |
| [`luna://com.webos.notification/getToastList`](../services/com.webos.notification.md#gettoastlist) | public | documented | Lists the toasts created for the app/client based on the user logged into the particular session. |
| [`luna://com.webos.notification/getToastNotification`](../services/com.webos.notification.md#gettoastnotification) | public | documented | Subscribe to created toast notification. Note: This method should only be used by Surface Manager only. |
| [`luna://com.webos.notification/image`](../services/com.webos.notification.md#image) | unknown | documented | Defines extra toast image. |
| [`luna://com.webos.notification/input`](../services/com.webos.notification.md#input) | unknown | documented | Contain information about an input alert. |
| [`luna://com.webos.notification/onclick`](../services/com.webos.notification.md#onclick) | unknown | documented | Contains action information when a user clicks the toast |
| [`luna://com.webos.notification/onclose`](../services/com.webos.notification.md#onclose) | unknown | documented | Contains close action when alert is closed with close button or automatically |
| [`luna://com.webos.notification/onfail`](../services/com.webos.notification.md#onfail) | unknown | documented | Action to be performed on failure to create alert from view side (LSM). |
| [`luna://com.webos.notification/onFailAction`](../services/com.webos.notification.md#onfailaction) | unknown | documented | Action to be performed on failure to create alert. |
| [`luna://com.webos.notification/purgeHistory`](../services/com.webos.notification.md#purgehistory) | private | inferred | Handles the purge history. |
| [`luna://com.webos.notification/removeAllNotification`](../services/com.webos.notification.md#removeallnotification) | public | documented | Removes all notifications that are currently being displayed. |
| [`luna://com.webos.notification/removeNotification`](../services/com.webos.notification.md#removenotification) | public | documented | Deletes the given notification(s) from DB. We can remove given set of notifications or remove all notifications from a given sourceId. |
| [`luna://com.webos.notification/removeRemoteNotification`](../services/com.webos.notification.md#removeremotenotification) | private | inferred | Removes the remote notification. ⚠️ |
| [`luna://com.webos.notification/schedule`](../services/com.webos.notification.md#schedule) | unknown | documented | Creates a toast notification as a persistent message and define its schedule. |
| [`luna://com.webos.notification/setToastStatus`](../services/com.webos.notification.md#settoaststatus) | public | documented | Specifies whether the toast is to be marked as read or unread. |
| [`luna://com.webos.notification/toastInfo`](../services/com.webos.notification.md#toastinfo) | unknown | documented | Contains information about the stored toasts |
| [`luna://com.webos.service.aiinferencemanager/createNotification`](../services/com.webos.service.aiinferencemanager.md#createnotification) | private | inferred | Creates the notification. |
| [`luna://com.webos.service.apiadapter/system_notifications/closeAlert`](../services/com.webos.service.apiadapter.md#system_notifications_closealert) | private | inferred | Closes the alert (system notifications) |
| [`luna://com.webos.service.apiadapter/system_notifications/closeToast`](../services/com.webos.service.apiadapter.md#system_notifications_closetoast) | private | inferred | Closes the toast (system notifications) |
| [`luna://com.webos.service.apiadapter/system_notifications/createAlert`](../services/com.webos.service.apiadapter.md#system_notifications_createalert) | private | inferred | Creates the alert (system notifications) |
| [`luna://com.webos.service.apiadapter/system_notifications/createToast`](../services/com.webos.service.apiadapter.md#system_notifications_createtoast) | private | inferred | Creates the toast (system notifications) |
| [`luna://com.webos.service.blegatt/ftms/setCharacteristicNotification`](../services/com.webos.service.blegatt.md#ftms_setcharacteristicnotification) | public | inferred | Sets the characteristic notification (ftms) |
| [`luna://com.webos.service.bluetooth2/avrcp/receiveRegisterNotificationAbsoluteVolume`](../services/com.webos.service.bluetooth2.md#avrcp_receiveregisternotificationabsolutevolume) | public | inferred | Handles the receive register notification absolute volume (avrcp) |
| [`luna://com.webos.service.bluetooth2/avrcp/registerNotificationAbsoluteVolumeResponse`](../services/com.webos.service.bluetooth2.md#avrcp_registernotificationabsolutevolumeresponse) | public | inferred | Registers the notification absolute volume response (avrcp) |
| [`luna://com.webos.service.bluetooth2/gatt/ancs/awaitNotifications`](../services/com.webos.service.bluetooth2.md#gatt_ancs_awaitnotifications) | public | inferred | Handles the await notifications (GATT ancs) |
| [`luna://com.webos.service.bluetooth2/gatt/ancs/performNotificationAction`](../services/com.webos.service.bluetooth2.md#gatt_ancs_performnotificationaction) | public | inferred | Handles the perform notification action (GATT ancs) |
| [`luna://com.webos.service.bluetooth2/gatt/ancs/queryNotificationAttributes`](../services/com.webos.service.bluetooth2.md#gatt_ancs_querynotificationattributes) | public | inferred | Queries the notification attributes (GATT ancs) |
| [`luna://com.webos.service.bthidmanager/createToast`](../services/com.webos.service.bthidmanager.md#createtoast) | private | inferred | Creates the toast. |
| [`luna://com.webos.service.chromecast.provisioning/createNotification`](../services/com.webos.service.chromecast.provisioning.md#createnotification) | private | inferred | Creates the notification. |
| [`luna://com.webos.service.commercial.scapadapter/createToast`](../services/com.webos.service.commercial.scapadapter.md#createtoast) | public | inferred | Creates the toast. |
| [`luna://com.webos.service.eventmonitor/network/starfish/enableWifiDirectNotifications`](../services/com.webos.service.eventmonitor.md#network_starfish_enablewifidirectnotifications) | private | inferred | Enables the wifi direct notifications (network starfish) |
| [`luna://com.webos.service.eventmonitor/network/starfish/TestWifiDirectPinNotifications`](../services/com.webos.service.eventmonitor.md#network_starfish_testwifidirectpinnotifications) | private | inferred | Tests the wifi direct pin notifications (network starfish) |
| [`luna://com.webos.service.ics/getToastMsg`](../services/com.webos.service.ics.md#gettoastmsg) | private | inferred | Returns the toast msg. |
| [`luna://com.webos.service.independanotification/checkResponse`](../services/com.webos.service.independanotification.md#checkresponse) | public | inferred | Checks the response. |
| [`luna://com.webos.service.independanotification/closeService`](../services/com.webos.service.independanotification.md#closeservice) | public | inferred | Closes the service. |
| [`luna://com.webos.service.independanotification/declineVideoCall`](../services/com.webos.service.independanotification.md#declinevideocall) | public | inferred | Handles the decline video call. |
| [`luna://com.webos.service.independanotification/deletePhotoIcon`](../services/com.webos.service.independanotification.md#deletephotoicon) | public | inferred | Deletes the photo icon. ⚠️ |
| [`luna://com.webos.service.independanotification/launchIndependa`](../services/com.webos.service.independanotification.md#launchindependa) | public | inferred | Launches the independa. |
| [`luna://com.webos.service.independanotification/notifyPowerState`](../services/com.webos.service.independanotification.md#notifypowerstate) | public | inferred | Notifies of the power state. |
| [`luna://com.webos.service.independanotification/pauseService`](../services/com.webos.service.independanotification.md#pauseservice) | public | inferred | Pauses the service. |
| [`luna://com.webos.service.independanotification/setServiceLangauge`](../services/com.webos.service.independanotification.md#setservicelangauge) | public | inferred | Sets the service langauge. |
| [`luna://com.webos.service.independanotification/startService`](../services/com.webos.service.independanotification.md#startservice) | public | inferred | Starts the service. |
| [`luna://com.webos.service.iotclient/setToastPopUp`](../services/com.webos.service.iotclient.md#settoastpopup) | private | inferred | Sets the toast pop up. |
| [`luna://com.webos.service.irdbmanager/createToast`](../services/com.webos.service.irdbmanager.md#createtoast) | private | inferred | Creates the toast. |
| [`luna://com.webos.service.miracast/destroyListenModeNotification`](../services/com.webos.service.miracast.md#destroylistenmodenotification) | private | inferred | Handles the destroy listen mode notification. |
| [`luna://com.webos.service.nms/setnotificationstatus`](../services/com.webos.service.nms.md#setnotificationstatus) | private | inferred | Handles the setnotificationstatus. |
| [`luna://com.webos.service.pqcontroller/setFormatNotificationFlag`](../services/com.webos.service.pqcontroller.md#setformatnotificationflag) | public | inferred | Sets the format notification flag. ⚠️ |
| [`luna://com.webos.service.pqcontroller/setNotificationResult`](../services/com.webos.service.pqcontroller.md#setnotificationresult) | public | inferred | Sets the notification result. |
| [`luna://com.webos.service.tvReservationAgent/testToastPopup`](../services/com.webos.service.tvReservationAgent.md#testtoastpopup) | private | inferred | Tests the toast popup. |
| [`luna://com.webos.service.voiceconductor/debug/streamDisconnectToast`](../services/com.webos.service.voiceconductor.md#debug_streamdisconnecttoast) | private | inferred | Handles the stream disconnect toast (debug) |
| [`luna://com.webos.service.wampluggable.hbbtv/onDeviceIdUserNotificationChanged`](../services/com.webos.service.wampluggable.hbbtv.md#ondeviceidusernotificationchanged) | private | inferred | Event handler: fires on the device ID user notification changed. |
| [`luna://com.webos.surfacemanager/getToastViewState`](../services/com.webos.surfacemanager.md#gettoastviewstate) | private | inferred | Returns the toast view state. |
| [`ssap://system.notifications/closeAlert`](../services/ssap_system.notifications.md#closealert) | ssap | documented | Close an alert (required after the createAlert luna trick so the alert does not stay on screen) |
| [`ssap://system.notifications/closeToast`](../services/ssap_system.notifications.md#closetoast) | ssap | documented | Close a toast |
