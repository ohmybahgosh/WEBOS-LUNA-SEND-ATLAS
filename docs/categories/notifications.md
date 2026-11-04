# Notifications & Alerts

38 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.webos.notification/$activity`](../services/com.webos.notification.md#_activity) | unknown | Contains detailed information of an activity which is fired by the Actvity Manager . This object is returned from the Activity Manager. For more details, see co |
| [`luna://com.webos.notification/action`](../services/com.webos.notification.md#action) | unknown | Describes the action parameter for the toast. |
| [`luna://com.webos.notification/alertInfo`](../services/com.webos.notification.md#alertinfo) | unknown | Contains the alert information. |
| [`luna://com.webos.notification/button`](../services/com.webos.notification.md#button) | unknown | Contains alert button information |
| [`luna://com.webos.notification/closeAlert`](../services/com.webos.notification.md#closealert) | public | Closes the currently displayed alert notification. |
| [`luna://com.webos.notification/closeAllAlerts`](../services/com.webos.notification.md#closeallalerts) | public | Closes all the open alerts. Note: This method is for internal use. It must only be used by com.webos.service.battest during BAT test . If the caller is not com. |
| [`luna://com.webos.notification/closeInputAlert`](../services/com.webos.notification.md#closeinputalert) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/closePincodePrompt`](../services/com.webos.notification.md#closepincodeprompt) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/closeToast`](../services/com.webos.notification.md#closetoast) | public | Removes a toast notification from the database. |
| [`luna://com.webos.notification/createAlert`](../services/com.webos.notification.md#createalert) | public | Creates a system alert notification. |
| [`luna://com.webos.notification/createInputAlert`](../services/com.webos.notification.md#createinputalert) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/createNotification`](../services/com.webos.notification.md#createnotification) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/createPincodePrompt`](../services/com.webos.notification.md#createpincodeprompt) | public | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/createSignageAlert`](../services/com.webos.notification.md#createsignagealert) | public | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/createToast`](../services/com.webos.notification.md#createtoast) | public | Creates a toast notification. |
| [`luna://com.webos.notification/disable`](../services/com.webos.notification.md#disable) | public | Disables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged application or service can call this method. |
| [`luna://com.webos.notification/enable`](../services/com.webos.notification.md#enable) | public | Enables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged app/service can call this method. |
| [`luna://com.webos.notification/getAlertNotification`](../services/com.webos.notification.md#getalertnotification) | public | Subscribe to create alert notifications. Note: This method should only be used by the Surface Manager . |
| [`luna://com.webos.notification/getInputAlertNotification`](../services/com.webos.notification.md#getinputalertnotification) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/getNotification`](../services/com.webos.notification.md#getnotification) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/getNotificationInfo`](../services/com.webos.notification.md#getnotificationinfo) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/getPincodePromptNotification`](../services/com.webos.notification.md#getpincodepromptnotification) | private | Method registered by com.webos.notification (root category) |
| [`luna://com.webos.notification/getToastCount`](../services/com.webos.notification.md#gettoastcount) | public | Queries the toast notification details of the stored messages and provides the read/unread count of the toast notifications. Note: Only "com.webos.surfacemanage |
| [`luna://com.webos.notification/getToastList`](../services/com.webos.notification.md#gettoastlist) | public | Lists the toasts created for the app/client based on the user logged into the particular session. |
| [`luna://com.webos.notification/getToastNotification`](../services/com.webos.notification.md#gettoastnotification) | public | Subscribe to created toast notification. Note: This method should only be used by Surface Manager only. |
| [`luna://com.webos.notification/image`](../services/com.webos.notification.md#image) | unknown | Defines extra toast image. |
| [`luna://com.webos.notification/input`](../services/com.webos.notification.md#input) | unknown | Contain information about an input alert. |
| [`luna://com.webos.notification/onclick`](../services/com.webos.notification.md#onclick) | unknown | Contains action information when a user clicks the toast |
| [`luna://com.webos.notification/onclose`](../services/com.webos.notification.md#onclose) | unknown | Contains close action when alert is closed with close button or automatically |
| [`luna://com.webos.notification/onfail`](../services/com.webos.notification.md#onfail) | unknown | Action to be performed on failure to create alert from view side (LSM). |
| [`luna://com.webos.notification/onFailAction`](../services/com.webos.notification.md#onfailaction) | unknown | Action to be performed on failure to create alert. |
| [`luna://com.webos.notification/removeAllNotification`](../services/com.webos.notification.md#removeallnotification) | public | Removes all notifications that are currently being displayed. |
| [`luna://com.webos.notification/removeNotification`](../services/com.webos.notification.md#removenotification) | public | Deletes the given notification(s) from DB. We can remove given set of notifications or remove all notifications from a given sourceId. |
| [`luna://com.webos.notification/schedule`](../services/com.webos.notification.md#schedule) | unknown | Creates a toast notification as a persistent message and define its schedule. |
| [`luna://com.webos.notification/setToastStatus`](../services/com.webos.notification.md#settoaststatus) | public | Specifies whether the toast is to be marked as read or unread. |
| [`luna://com.webos.notification/toastInfo`](../services/com.webos.notification.md#toastinfo) | unknown | Contains information about the stored toasts |
| [`ssap://system.notifications/closeAlert`](../services/ssap_system.notifications.md#closealert) | ssap | Close an alert (required after the createAlert luna trick so the alert does not stay on screen) |
| [`ssap://system.notifications/closeToast`](../services/ssap_system.notifications.md#closetoast) | ssap | Close a toast |
